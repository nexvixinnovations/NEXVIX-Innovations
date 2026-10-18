/**
 * Cloudflare Pages Function for /api/contact
 * Natively executed on Cloudflare Edge when deployed to Cloudflare Pages.
 *
 * Handlers:
 *   GET     /api/contact  → Health check (returns JSON, never the homepage)
 *   POST    /api/contact  → Submit form, relay email via Resend
 *   OPTIONS /api/contact  → CORS preflight
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}

/** OPTIONS — CORS preflight */
export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * GET — Health / configuration check.
 * Returns {status:"ok", hasKey:bool, hasFrom:bool, hasTo:bool}
 * Never returns the homepage, never exposes secret values.
 */
export async function onRequestGet(context) {
  const { env } = context;
  return json({
    status:  'ok',
    hasKey:  Boolean(env.RESEND_API_KEY),
    hasFrom: Boolean(env.CONTACT_FROM_EMAIL),
    hasTo:   Boolean(env.CONTACT_TO_EMAIL),
  });
}

/** POST — Accept form submission and relay via Resend */
export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const apiKey    = env.RESEND_API_KEY;
    const fromEmail = env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail   = env.CONTACT_TO_EMAIL   || 'nexvix.innovations@gmail.com';

    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY is not set in Cloudflare Pages env vars.');
      return json({
        success: false,
        error: 'Email service is not configured. Please add RESEND_API_KEY to your Cloudflare Pages Environment Variables.',
      }, 500);
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return json({ success: false, error: 'Invalid request body.' }, 400);
    }

    const { name, email, phone, service, message, honeypot } = body;

    // 1. Silent honeypot drop — bots fill this hidden field
    if (honeypot && String(honeypot).trim() !== '') {
      return json({ success: true, message: 'Message received.' });
    }

    // 2. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return json({ success: false, error: 'Please enter your full name (at least 2 characters).' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return json({ success: false, error: 'Please enter a valid work email address.' }, 400);
    }

    let sanitizedPhone = '';
    if (phone && String(phone).trim() !== '') {
      const digitsOnly = String(phone).replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        return json({ success: false, error: 'Phone number must be 10 digits if provided.' }, 400);
      }
      sanitizedPhone = digitsOnly;
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return json({ success: false, error: 'Please provide at least 10 characters for your project brief.' }, 400);
    }

    // 3. Sanitize inputs
    const cleanName    = escapeHtml(name.trim().slice(0, 100));
    const cleanEmail   = escapeHtml(email.trim().slice(0, 100));
    const cleanPhone   = sanitizedPhone ? escapeHtml(sanitizedPhone) : 'Not provided';
    const cleanService = service ? escapeHtml(String(service).slice(0, 50)) : 'General Inquiry';
    const cleanMessage = escapeHtml(message.trim().slice(0, 3000));
    const timestamp    = new Date().toISOString();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 8px;">
        <h2 style="color: #1F3BFF; margin-top: 0;">New Project Inquiry</h2>
        <p>A new inquiry has been submitted through the NEXVIX Innovations contact form.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr><td style="padding: 8px; font-weight: bold; width: 120px; color: #555;">Name:</td><td style="padding: 8px;">${cleanName}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px;">${cleanPhone}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Service:</td><td style="padding: 8px;">${cleanService}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; color: #555;">Submitted:</td><td style="padding: 8px;">${timestamp}</td></tr>
        </table>
        <div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin: 16px 0;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #333;">Project Brief &amp; Goals:</p>
          <p style="margin: 0; white-space: pre-wrap; color: #444; line-height: 1.5;">${cleanMessage}</p>
        </div>
        <p style="font-size: 12px; color: #888; margin-top: 24px;">Sent securely from NEXVIX Innovations Website.</p>
      </div>
    `;

    // 4. Send via Resend REST API (no SDK — native fetch works on Cloudflare Edge)
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from:     fromEmail,
        to:       [toEmail],
        reply_to: cleanEmail,
        subject:  `New enquiry: ${cleanService} from ${cleanName}`,
        html:     emailHtml,
        text:     `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\nService: ${cleanService}\nTime: ${timestamp}\n\nProject Brief:\n${cleanMessage}`,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      // Log Resend error details — but never log the key itself
      console.error(
        '[contact] Resend API error',
        resendResponse.status,
        JSON.stringify(resendData),
        `from=${fromEmail} to=${toEmail}`,
      );
      return json({
        success: false,
        error: resendData.message || 'Unable to deliver message at this time. Please try WhatsApp.',
      }, 500);
    }

    console.log('[contact] Email delivered via Resend, id:', resendData.id);
    return json({
      success: true,
      message: 'Thank you! Your message has been sent. A NEXVIX specialist will reach out shortly.',
    });

  } catch (err) {
    console.error('[contact] Unhandled exception:', err?.message ?? err);
    return json({ success: false, error: 'A server error occurred. Please try again.' }, 500);
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
}

/**
 * Cloudflare Pages Function for /api/contact
 * Natively executed on Cloudflare Edge when deployed to Cloudflare Pages.
 */

export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const apiKey = env.RESEND_API_KEY;
    const fromEmail = env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = env.CONTACT_TO_EMAIL || 'nexvix.innovations@gmail.com';

    if (!apiKey) {
      console.error('Missing RESEND_API_KEY in Cloudflare Pages environment variables.');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Email service is not configured. Please add RESEND_API_KEY to your Cloudflare Pages Environment Variables.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid request body.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, phone, service, message, honeypot } = body;

    // 1. Silent Honeypot drop
    if (honeypot && String(honeypot).trim() !== '') {
      return new Response(
        JSON.stringify({ success: true, message: 'Message received.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please enter your full name (at least 2 characters).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please enter a valid work email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let sanitizedPhone = '';
    if (phone && String(phone).trim() !== '') {
      const digitsOnly = String(phone).replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        return new Response(
          JSON.stringify({ success: false, error: 'Phone number must be 10 digits if provided.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
      sanitizedPhone = digitsOnly;
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide at least 10 characters for your project brief.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const cleanName = escapeHtml(name.trim().slice(0, 100));
    const cleanEmail = escapeHtml(email.trim().slice(0, 100));
    const cleanPhone = sanitizedPhone ? escapeHtml(sanitizedPhone) : 'Not provided';
    const cleanService = service ? escapeHtml(String(service).slice(0, 50)) : 'General Inquiry';
    const cleanMessage = escapeHtml(message.trim().slice(0, 3000));
    const timestamp = new Date().toISOString();

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

    // 3. Send email via Resend REST API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: cleanEmail,
        subject: `New enquiry: ${cleanService} from ${cleanName}`,
        html: emailHtml,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\nService: ${cleanService}\nTime: ${timestamp}\n\nProject Brief:\n${cleanMessage}`,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API Error:', resendData);
      return new Response(
        JSON.stringify({
          success: false,
          error: resendData.message || 'Unable to deliver message at this time.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Thank you! Your message has been sent. A NEXVIX specialist will reach out shortly.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Pages function exception:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'A server error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

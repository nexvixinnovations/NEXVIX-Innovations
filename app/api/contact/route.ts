import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getContactEnv } from '@/lib/env';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous';

    // 1. Rate limiting (5 requests per IP per hour)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions from this IP address. Please wait an hour before trying again.',
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body.' },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message, honeypot } = body;

    // 2. Honeypot check (silently drop bot submissions)
    if (honeypot && String(honeypot).trim() !== '') {
      return NextResponse.json({
        success: true,
        message: 'Message processed successfully.',
      });
    }

    // 3. Server-side validation
    // Name validation (2+ chars)
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid full name (at least 2 characters).' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Phone validation: optional, but if given must be 10 digits
    let sanitizedPhone = '';
    if (phone && String(phone).trim() !== '') {
      const rawPhone = String(phone).trim();
      const digitsOnly = rawPhone.replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        return NextResponse.json(
          { success: false, error: 'Phone number must be exactly 10 digits if provided.' },
          { status: 400 }
        );
      }
      sanitizedPhone = digitsOnly;
    }

    // Message validation (10+ chars)
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide project details (minimum 10 characters).' },
        { status: 400 }
      );
    }

    const sanitizedService = (service && typeof service === 'string' && service.trim().length > 0)
      ? service.trim().slice(0, 50)
      : 'General Inquiry';

    const safeData = {
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 100),
      phone: sanitizedPhone,
      service: sanitizedService,
      message: message.trim().slice(0, 3000),
      timestamp: new Date().toISOString(),
    };

    // 4. Runtime environment validation
    const { env, error: envError } = getContactEnv();
    if (!env) {
      console.error(`[Contact API Env Error]: ${envError}`);
      return NextResponse.json(
        {
          success: false,
          error: 'Our messaging service is temporarily undergoing maintenance. Please email us directly or try again shortly.',
        },
        { status: 500 }
      );
    }

    // 5. Send notification email with Resend
    const resend = new Resend(env.RESEND_API_KEY);
    const subject = `New enquiry: ${safeData.service} from ${safeData.name}`;

    const textContent = `
New enquiry received from NEXVIX website contact form:

Name: ${safeData.name}
Email: ${safeData.email}
Phone: ${safeData.phone ? safeData.phone : 'Not provided'}
Service: ${safeData.service}
Received At: ${safeData.timestamp}

Message:
${safeData.message}
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .card { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 8px; border: 1px solid #e2e8f0; padding: 32px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); }
    .header { border-bottom: 2px solid #0066FF; padding-bottom: 16px; margin-bottom: 24px; }
    .header h1 { font-size: 20px; margin: 0; color: #0f172a; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .meta-table td { padding: 8px 0; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .meta-table td.label { width: 120px; font-weight: 600; color: #64748b; }
    .message-box { background: #f8fafc; border-left: 4px solid #0066FF; padding: 16px; border-radius: 4px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; }
    .footer { font-size: 12px; color: #94a3b8; margin-top: 24px; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Project Inquiry</h1>
    </div>
    <table class="meta-table">
      <tr>
        <td class="label">Name:</td>
        <td><strong>${escapeHtml(safeData.name)}</strong></td>
      </tr>
      <tr>
        <td class="label">Email:</td>
        <td><a href="mailto:${escapeHtml(safeData.email)}">${escapeHtml(safeData.email)}</a></td>
      </tr>
      <tr>
        <td class="label">Phone:</td>
        <td>${safeData.phone ? escapeHtml(safeData.phone) : '<em>Not provided</em>'}</td>
      </tr>
      <tr>
        <td class="label">Service:</td>
        <td><strong>${escapeHtml(safeData.service)}</strong></td>
      </tr>
      <tr>
        <td class="label">Date:</td>
        <td>${escapeHtml(safeData.timestamp)}</td>
      </tr>
    </table>
    <div>
      <h3 style="font-size: 14px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</h3>
      <div class="message-box">${escapeHtml(safeData.message)}</div>
    </div>
    <div class="footer">
      NEXVIX Innovations Marketing Platform • Lead Notification
    </div>
  </div>
</body>
</html>
`.trim();

    const { data: resendData, error: sendError } = await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: safeData.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    if (sendError) {
      console.error('[Resend API Error]:', sendError.message);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to deliver message. Please reach out to us directly or try again later.',
        },
        { status: 500 }
      );
    }

    /*
     * =========================================================================
     * OPTIONAL: Visitor Auto-Confirmation Email (Disabled by default)
     * Enable once domain is verified on Resend and limits allow.
     * =========================================================================
     * await resend.emails.send({
     *   from: env.CONTACT_FROM_EMAIL,
     *   to: safeData.email,
     *   subject: 'We received your inquiry - NEXVIX Innovations',
     *   text: `Hi ${safeData.name},\n\nThank you for reaching out to NEXVIX Innovations. We have received your inquiry regarding ${safeData.service} and will get back to you within 24 hours.\n\nBest regards,\nThe NEXVIX Team`,
     *   html: `<p>Hi ${escapeHtml(safeData.name)},</p><p>Thank you for reaching out to NEXVIX Innovations. We have received your inquiry regarding <strong>${escapeHtml(safeData.service)}</strong> and our team will get back to you within 24 hours.</p><p>Best regards,<br>The NEXVIX Innovations Team</p>`,
     * });
     */

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your project inquiry has been received. A NEXVIX specialist will reach out shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    const errorDetails = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[Contact Route Unexpected Error]:', errorDetails);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again or reach out directly.' },
      { status: 500 }
    );
  }
}

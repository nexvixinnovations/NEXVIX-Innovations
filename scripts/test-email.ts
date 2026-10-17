import { loadEnvConfig } from '@next/env';
import { Resend } from 'resend';
import { getContactEnv } from '../lib/env.js';

// Load .env.local / .env environment variables just like Next.js does
loadEnvConfig(process.cwd());

async function runTestEmail() {
  const { env, error } = getContactEnv();

  if (error || !env) {
    console.error(`[FAILURE] Environment check failed: ${error}`);
    process.exit(1);
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY);

    const timestamp = new Date().toISOString();
    const result = await resend.emails.send({
      from: env.CONTACT_FROM_EMAIL,
      to: env.CONTACT_TO_EMAIL,
      replyTo: env.CONTACT_TO_EMAIL,
      subject: 'Test email: NEXVIX Innovations contact form verification',
      text: `This is a test email sent from the NEXVIX Innovations contact form verification script.\n\nTimestamp: ${timestamp}\nStatus: Verification Successful`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #1F3BFF; margin-top: 0;">NEXVIX Innovations - Contact Form Verification</h2>
          <p>This is a test email to verify that your Resend integration and credentials are functioning correctly.</p>
          <div style="background-color: #f6f8fa; padding: 16px; border-radius: 6px; margin: 16px 0;">
            <p style="margin: 0; font-size: 14px; color: #555;"><strong>Timestamp:</strong> ${timestamp}</p>
            <p style="margin: 8px 0 0; font-size: 14px; color: #555;"><strong>Status:</strong> Verification Successful</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-bottom: 0;">Sent via official Resend SDK.</p>
        </div>
      `,
    });

    if (result.error) {
      console.error(`[FAILURE] Resend API rejected email sending: ${result.error.message}`);
      process.exit(1);
    }

    console.log(`[SUCCESS] Test email sent successfully! Message ID: ${result.data?.id}`);
    process.exit(0);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error(`[FAILURE] Exception thrown while sending test email: ${message}`);
    process.exit(1);
  }
}

runTestEmail();

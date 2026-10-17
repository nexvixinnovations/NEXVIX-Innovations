/**
 * Environment configuration and runtime validation for contact emails
 */

export interface ContactEnv {
  RESEND_API_KEY: string;
  CONTACT_FROM_EMAIL: string;
  CONTACT_TO_EMAIL: string;
}

export function getContactEnv(): { env: ContactEnv | null; error: string | null } {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();

  const missing: string[] = [];
  if (!apiKey) missing.push('RESEND_API_KEY');
  if (!fromEmail) missing.push('CONTACT_FROM_EMAIL');
  if (!toEmail) missing.push('CONTACT_TO_EMAIL');

  if (missing.length > 0) {
    const errorMsg = `Missing environment variable(s): ${missing.join(', ')}`;
    return { env: null, error: errorMsg };
  }

  return {
    env: {
      RESEND_API_KEY: apiKey as string,
      CONTACT_FROM_EMAIL: fromEmail as string,
      CONTACT_TO_EMAIL: toEmail as string,
    },
    error: null,
  };
}

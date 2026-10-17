# Resend Email Setup Guide for NEXVIX Innovations

This guide walks you through configuring Resend to receive emails from the NEXVIX Innovations website contact form.

---

## 1. Create an Account at Resend
1. Go to [resend.com](https://resend.com) and click **Get Started** / **Sign Up**.
2. Sign up using your business email or GitHub account.
3. Complete registration and sign in to the Resend dashboard.

---

## 2. Add and Verify Your Domain (Production)
To send emails from your own domain (e.g. `contact@nexvixinnovations.com`):

1. In the Resend dashboard navigation, go to **Domains**.
2. Click **Add Domain** and enter your root domain (e.g., `nexvixinnovations.com`) or sending subdomain (e.g., `mail.nexvixinnovations.com`).
3. Select your region (e.g., US or Europe).
4. Resend will provide DNS records:
   - **SPF** (TXT record)
   - **DKIM** (TXT / CNAME record)
   - **DMARC** (TXT record, optional but recommended)
5. Log into your domain registrar / DNS provider (Cloudflare, GoDaddy, Namecheap, Hostinger, etc.) and add each record.
6. Return to Resend and click **Verify DNS Records**.
7. Wait until the domain status shows **"Verified"** (typically takes a few minutes, up to 24-48 hours depending on DNS propagation).

> [!TIP]
> **Testing Before Domain Verification:**
> Before your domain is verified, Resend provides an onboard testing domain. You can send test emails from:
> `CONTACT_FROM_EMAIL=onboarding@resend.dev`
> to your **exact Resend signup email address**:
> `CONTACT_TO_EMAIL=your-signup-email@example.com`

---

## 3. Create an API Key
1. In the Resend dashboard, click **API Keys** in the left sidebar.
2. Click **Create API Key**.
3. Set the name (e.g. `nexvix-contact-form`).
4. Set permission to **"Sending access"** only (Restricted permissions are recommended for security; do not use Full Access unless needed).
5. If using a verified domain, you can restrict it to that domain.
6. Click **Add** and copy the generated key immediately (starts with `re_...`). You will not be able to view it again.

---

## 4. Configure Local Environment (`.env.local`)
1. In the root directory of the project, open or create `.env.local` (this file is excluded from Git).
2. Set the three required variables:
   ```env
   RESEND_API_KEY=re_your_actual_resend_api_key
   CONTACT_FROM_EMAIL="NEXVIX Innovations <contact@yourdomain.com>"
   CONTACT_TO_EMAIL=your-inbox@yourdomain.com
   ```
   *(For testing before domain verification, use `onboarding@resend.dev` for `CONTACT_FROM_EMAIL` and your signup email for `CONTACT_TO_EMAIL`)*.
3. **Restart your development server** after updating `.env.local` for Next.js to load the changes:
   ```bash
   npm run dev
   ```

---

## 5. Add Environment Variables in Hosting Dashboards

When deploying to production, add the same three environment variables in your hosting provider's dashboard:

### Vercel
1. Go to your project dashboard on Vercel.
2. Navigate to **Settings** > **Environment Variables**.
3. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`.
4. Check **Production** (and **Preview** if desired) and click **Save**.
5. Redeploy your project.

### Netlify
1. Go to **Site Configuration** > **Environment Variables**.
2. Click **Add a variable** > **Import from .env** or enter them individually.
3. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`.
4. Trigger a new deploy.

### Hostinger (VPS / Cloud / Node.js App)
1. Go to **hPanel** > **Node.js** or **Advanced** settings for your app.
2. Look for **Environment Variables** or edit the application environment configuration.
3. Add the three keys (`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`).
4. Restart the Node.js application.

---

## 6. Testing the Integration
Once `.env.local` is populated, test the pipeline by running:
```bash
npm run test:email
```
If configured properly, you will see `[SUCCESS] Test email sent successfully!` and receive the verification email in your inbox.

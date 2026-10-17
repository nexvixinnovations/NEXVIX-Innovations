# NEXVIX Innovations

Marketing and enterprise website for NEXVIX Innovations, built with Next.js, React, and TypeScript.

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## Contact Form Email

The contact form sends inquiries using [Resend](https://resend.com) via Next.js API routes (`/api/contact`).

- **Setup & Configuration Guide:** Complete instructions on account creation, domain verification (SPF/DKIM/DMARC), API key generation, and hosting deployment are documented in [docs/resend-setup.md](docs/resend-setup.md).
- **Environment Template:** See `.env.example` for required variables:
  ```env
  RESEND_API_KEY=
  CONTACT_FROM_EMAIL=NEXVIX Innovations <contact@yourdomain.com>
  CONTACT_TO_EMAIL=
  ```
- **Test Sending:** Run the test verification script once `.env.local` is configured:
  ```bash
  npm run test:email
  ```

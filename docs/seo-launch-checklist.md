# NEXVIX Innovations — SEO Launch & Webmaster Operations Checklist

**Target Domain**: `https://nexvixinnovations.com`  
**Execution Phase**: Post-Deployment & Production Go-Live  

Follow this actionable step-by-step checklist upon deploying the site to production to achieve fast indexing and search visibility.

---

## 1. Domain & Environment Variable Configuration

- [ ] **Set Production URL**:
  Configure `NEXT_PUBLIC_SITE_URL=https://nexvixinnovations.com` in your production environment variables (Vercel Project Settings or server `.env.production`).
- [ ] **Configure Google Analytics 4**:
  Create a Web Data Stream in Google Analytics and assign your Measurement ID:
  `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- [ ] **Set Search Console Verification**:
  Add HTML tag or DNS TXT token to environment variables if using tag verification:
  `NEXT_PUBLIC_GSC_VERIFICATION=your_verification_string`

---

## 2. Google Search Console Setup

1. **Add Property**:
   - Navigate to [Google Search Console](https://search.google.com/search-console).
   - Add a Domain property (`nexvixinnovations.com`) via DNS TXT record or URL prefix property (`https://nexvixinnovations.com`).
2. **Submit XML Sitemap**:
   - Navigate to **Index > Sitemaps**.
   - Enter `sitemap.xml` (Full URL: `https://nexvixinnovations.com/sitemap.xml`).
   - Click **Submit** and verify status shows green "Success".
3. **Inspect & Request Priority Indexing**:
   - Use the URL Inspection tool for the core pages:
     - `https://nexvixinnovations.com/`
     - `https://nexvixinnovations.com/services/website-development`
     - `https://nexvixinnovations.com/services/android-app-development`
     - `https://nexvixinnovations.com/services/ai-video-creation`
     - `https://nexvixinnovations.com/services/crm-systems`
     - `https://nexvixinnovations.com/services/business-automation`
     - `https://nexvixinnovations.com/services/ai-chatbot`
   - Click **Request Indexing** on each URL.

---

## 3. Bing Webmaster Tools & IndexNow

1. **Import from Search Console**:
   - Navigate to [Bing Webmaster Tools](https://www.bing.com/webmasters).
   - Use the 1-click import feature from verified Google Search Console.
2. **Submit Sitemap**:
   - Submit `https://nexvixinnovations.com/sitemap.xml`.
3. **Enable IndexNow**:
   - Automatically notify Bing and Yandex whenever service pages are updated.

---

## 4. Google Business Profile (Local Search Ranking)

1. **Claim Profile**:
   - Go to [Google Business Profile](https://business.google.com).
   - Enter Business Name: **NEXVIX Innovations**.
   - Primary Category: **Software Company** / **Website Designer**.
   - Address: **Perundurai, Erode - 638052, Tamil Nadu, India**.
   - Phone: **+91 7708382018**.
   - Website: **https://nexvixinnovations.com**.
2. **Complete Verification**:
   - Complete video or postcard verification.
3. **Add Products & Services**:
   - Create Service entries linking to each of the 6 dedicated service subpages.
   - Add business hours: Monday – Saturday 09:00 AM – 07:00 PM.

---

## 5. Social Graph & Entity Verification (`sameAs`)

Verify and link active profiles to establish Knowledge Graph authority:
- [ ] **LinkedIn Company Page**: [linkedin.com/company/nexvix-innovations](https://www.linkedin.com/company/nexvix-innovations/)
- [ ] **Instagram**: [instagram.com/nexvix__innovations](https://www.instagram.com/nexvix__innovations)
- [ ] **X (Twitter)**: [x.com/Gandha_24](https://x.com/Gandha_24)
- [ ] **WhatsApp Business**: Verified number `+91 7708382018`

---

## 6. Post-Launch Monitoring (Weeks 2 – 4)

- [ ] **Page Indexing Report**:
  Check Google Search Console > **Pages** to verify all 7 static routes are marked "Indexed" with zero "Crawled - currently not indexed" flags.
- [ ] **Core Web Vitals Report**:
  Check Search Console > **Core Web Vitals** after real user traffic begins logging:
  - Mobile LCP < 2.5s (Target: 100% "Good" status)
  - Mobile CLS < 0.1
  - INP < 200ms
- [ ] **Rich Results Test Validation**:
  Test URLs in [Google Rich Results Test](https://search.google.com/test/rich-results) to confirm valid detection of:
  - Organization
  - WebSite
  - LocalBusiness / ProfessionalService
  - Service
  - FAQPage
  - BreadcrumbList
- [ ] **404 & Redirect Telemetry**:
  Review server access logs to ensure zero unexpected 404/500 errors and that `www.` traffic cleanly 301-redirects to non-`www`.

import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo.config';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | NEXVIX Innovations',
  description:
    'Read the official Privacy Policy for NEXVIX Innovations. Learn how we handle, secure, and protect your data, project confidentiality, and communications.',
  alternates: {
    canonical: `${siteConfig.domain}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 17, 2026';

  return (
    <main className="section-dark min-h-screen py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: '/privacy' }]} />

        {/* Header */}
        <header className="mb-12 border-b border-[#1E1E2C] pb-8">
          <div className="section-label mb-3">Legal &amp; Compliance</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[#A0A4B8] text-base sm:text-lg leading-relaxed">
            At <strong className="text-white">NEXVIX Innovations</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take your privacy and proprietary project data with utmost seriousness. This document outlines our transparent practices for data collection, usage, and security.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#6B7FFF]">
            <span>Effective Date: {lastUpdated}</span>
            <span>•</span>
            <span>Jurisdiction: Tamil Nadu, India</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-10 text-[#C7CAD9] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">01.</span> Scope &amp; Overview
            </h2>
            <p>
              This Privacy Policy applies to all services, websites, client portals, and digital communications operated by <strong>NEXVIX Innovations</strong>, headquartered in Perundurai, Erode, Tamil Nadu, India. By accessing our website (<a href={siteConfig.domain} className="text-[#6B7FFF] underline hover:text-white transition-colors">{siteConfig.domain}</a>) or submitting inquiries regarding website development, mobile apps, AI video creation, or AI chatbots, you accept the practices described herein.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">02.</span> Information We Collect
            </h2>
            <p>We only collect information necessary to provide professional technical consulting, build software, and fulfill contractual project deliverables:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#A0A4B8]">
              <li>
                <strong className="text-white">Contact &amp; Identification Data:</strong> Full name, professional email address, phone/WhatsApp number, company name, and geographic location provided via our inquiry forms or consultations.
              </li>
              <li>
                <strong className="text-white">Project Specifications:</strong> Business requirements, project scopes, workflows, design assets, and architectural preferences submitted for cost estimation and technical feasibility.
              </li>
              <li>
                <strong className="text-white">Technical Usage Data:</strong> Anonymized telemetry such as IP addresses, browser specifications, operating systems, and page interaction timestamps collected via server access logs to guarantee platform security and prevent spam or DDoS abuse.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">03.</span> How We Use Your Information
            </h2>
            <p>Your data is processed strictly for legitimate commercial and technical execution purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#A0A4B8]">
              <li>Preparing accurate technical blueprints, commercial proposals, and cost estimates.</li>
              <li>Communicating project updates, staging reviews, and operational handovers via email or WhatsApp.</li>
              <li>Configuring authorized third-party APIs (e.g., payment gateways, SMS/WhatsApp endpoints, cloud databases) requested for your deliverables.</li>
              <li>Defending our infrastructure against bot attacks, unauthorized access, and malicious abuse via rate-limiting mechanisms.</li>
            </ul>
            <p className="p-4 rounded-md bg-[#12121A] border border-[#1F3BFF]/30 text-sm text-[#F5F6FA]">
              <strong>Strict Guarantee:</strong> We never sell, rent, or trade your personal or business data to third-party data brokers, marketers, or advertisers under any circumstances.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">04.</span> Client Confidentiality &amp; Proprietary IP
            </h2>
            <p>
              We treat all client business logic, database schemas, proprietary algorithms, and trade secrets as strictly confidential. Before commencing software engineering work, NEXVIX Innovations executes a formal Non-Disclosure Agreement (NDA) upon request to guarantee complete protection of your proprietary intellectual property.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">05.</span> Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website uses essential session cookies to remember your consent preferences (via our Cookie Banner) and anonymized analytics tags (such as Google Analytics 4) to monitor page speeds and user navigation flows. You may disable cookies at any time directly through your browser settings without affecting the essential readability of our website.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">06.</span> Data Security &amp; Retention
            </h2>
            <p>
              We enforce industry-standard security safeguards including TLS/SSL encryption in transit (Strict-Transport-Security), hardened HTTP response headers, parameterized database interfaces, and restricted developer access controls. Client project records are retained only as long as needed to satisfy contractual support, warranty periods, and legal accounting obligations under Indian statutory regulations.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">07.</span> Your Legal Rights
            </h2>
            <p>
              In accordance with applicable privacy regulations (including India&apos;s Digital Personal Data Protection Act and global privacy best practices), you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#A0A4B8]">
              <li>Request an audit copy of any personal data we hold associated with your inquiries.</li>
              <li>Request the correction or update of inaccurate company contact details.</li>
              <li>Request the complete deletion of your records from our prospective communication databases.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">08.</span> Contact &amp; Grievance Redressal
            </h2>
            <p>
              For any questions, privacy inquiries, or data requests, please contact our administrative team directly:
            </p>
            <div className="p-6 rounded-lg bg-[#12121A] border border-[#1E1E2C] space-y-2 text-sm">
              <p><strong className="text-white">Organization:</strong> NEXVIX Innovations</p>
              <p><strong className="text-white">Address:</strong> {siteConfig.contact.address.display}</p>
              <p>
                <strong className="text-white">Email:</strong>{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#6B7FFF] hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{' '}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-[#6B7FFF] hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <strong className="text-white">WhatsApp Direct:</strong>{' '}
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">
                  +{siteConfig.contact.phoneRaw}
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-[#1E1E2C] flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="btn btn-outline text-sm">
            &larr; Return to Home
          </Link>
          <Link href="/terms" className="btn btn-primary text-sm">
            Read Terms of Service &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}

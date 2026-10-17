import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/seo.config';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | NEXVIX Innovations',
  description:
    'Review the professional Terms of Service for NEXVIX Innovations covering software development, project milestones, intellectual property, payments, and warranties.',
  alternates: {
    canonical: `${siteConfig.domain}/terms`,
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'October 17, 2026';

  return (
    <main className="section-dark min-h-screen py-16 sm:py-24">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ name: 'Terms of Service', url: '/terms' }]} />

        {/* Header */}
        <header className="mb-12 border-b border-[#1E1E2C] pb-8">
          <div className="section-label mb-3">Legal Agreement</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-[#A0A4B8] text-base sm:text-lg leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern the professional relationship and service agreements between <strong className="text-white">NEXVIX Innovations</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) and the client (&ldquo;Client&rdquo;, &ldquo;you&rdquo;) engaging our software engineering and digital transformation services.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#6B7FFF]">
            <span>Last Revised: {lastUpdated}</span>
            <span>•</span>
            <span>Governing Law: Tamil Nadu, India</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-10 text-[#C7CAD9] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">01.</span> Engagement &amp; Scope of Work
            </h2>
            <p>
              NEXVIX Innovations delivers technical solutions including, but not limited to: Custom Website Development, Android &amp; Cross-Platform Mobile Applications, Customer Relationship Management (CRM) Platforms, Artificial Intelligence Chatbots &amp; Conversational Agents, Workflow &amp; Process Automation, and AI Video Assets.
            </p>
            <p>
              Each engagement is formalized through a written Statement of Work (SOW), formal proposal, or electronic invoice detailing specific deliverables, milestone schedules, technical specifications, and compensation.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">02.</span> Project Estimates &amp; Quotations
            </h2>
            <p>
              Estimates generated through our website, cost estimator tool, or initial discovery consultations are non-binding ballpark ranges based on initial assumptions. Final binding budgets and delivery commitments are established only in the signed proposal or mutually accepted SOW. Written quotes remain valid for thirty (30) calendar days from the date of issuance unless stated otherwise.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">03.</span> Client Obligations &amp; Approvals
            </h2>
            <p>Timely project delivery requires active client cooperation. The Client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#A0A4B8]">
              <li>Provide required brand assets, copywriting, credentials, and third-party API keys within agreed sprint timelines.</li>
              <li>Designate a primary point of contact authorized to make binding engineering and design approval decisions.</li>
              <li>Review staging builds, prototypes, or demos within five (5) business days of milestone handover. If no feedback is provided within ten (10) business days, the milestone will be deemed accepted.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">04.</span> Intellectual Property Ownership &amp; Code Handover
            </h2>
            <div className="p-4 rounded-md bg-[#12121A] border border-[#1F3BFF]/30 text-sm text-[#F5F6FA] space-y-2">
              <p>
                <strong className="text-white">Full IP Transfer:</strong> Upon receipt of full and final payment for the project, all bespoke source code, database architectures, graphics, and design assets engineered specifically for the Client transfer entirely to the Client.
              </p>
              <p className="text-[#A0A4B8]">
                <strong>Pre-existing Libraries &amp; Open Source:</strong> Standard open-source libraries (e.g., React, Next.js, Node.js packages) remain subject to their respective MIT, Apache, or GNU open-source licenses. NEXVIX Innovations retains the right to reuse general software patterns, developer boilerplate, and architectural know-how that do not contain client proprietary data or business secrets.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">05.</span> Invoicing, Payments &amp; Milestones
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#A0A4B8]">
              <li>
                <strong className="text-white">Milestone Structure:</strong> Standard projects operate on milestone schedules (typically 40% project kickoff advance, 30% alpha/beta deployment milestone, and 30% upon final production launch/handover).
              </li>
              <li>
                <strong className="text-white">Payment Methods:</strong> Invoices may be paid via Bank Transfer (NEFT/RTGS/IMPS), UPI, or authorized international corporate payment processors.
              </li>
              <li>
                <strong className="text-white">Taxes:</strong> All quotations are exclusive of applicable Indian Goods and Services Tax (GST) unless explicitly noted as inclusive.
              </li>
              <li>
                <strong className="text-white">Late Payments:</strong> Invoices overdue by more than fourteen (14) calendar days may result in temporary suspension of active development sprints, staging server access, or scheduled release dates until the account is brought current.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">06.</span> Scope Modifications &amp; Change Requests
            </h2>
            <p>
              Any feature, layout, or workflow requested by the Client that falls outside the mutually agreed SOW will be evaluated as a Change Request. NEXVIX Innovations will provide a transparent written estimate of additional cost and delivery impact before executing out-of-scope work.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">07.</span> Post-Launch Warranty &amp; Technical Support
            </h2>
            <p>
              Unless otherwise specified, all custom development engagements include a complimentary thirty (30) day bug-fix warranty following production go-live to rectify reproducible software defects within agreed specifications. Ongoing enhancements, operating system version updates, third-party API deprecations, and server maintenance are covered under optional monthly retainer agreements.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">08.</span> Warranties &amp; Limitation of Liability
            </h2>
            <p>
              NEXVIX Innovations engineers solutions following enterprise best practices in stability, performance, and security. However, we do not warrant that third-party infrastructure (such as Google Play, Apple App Store, WhatsApp Cloud API, Vercel, AWS, or payment gateway providers) will remain uninterrupted or error-free.
            </p>
            <p className="text-sm text-[#A0A4B8]">
              To the maximum extent permitted by applicable law, in no event shall NEXVIX Innovations be liable for any indirect, punitive, special, incidental, or consequential damages (including loss of profits, data, or business interruption). Our total aggregate liability under any claim arising from an engagement shall not exceed the total fees paid by the Client to NEXVIX Innovations for the specific deliverable giving rise to liability.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">09.</span> Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms and any dispute or controversy arising out of or in connection with our services shall be governed by and construed in accordance with the laws of the Republic of India. The courts of competent jurisdiction located in Erode / Chennai, Tamil Nadu, India shall have exclusive jurisdiction over all legal proceedings.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center gap-3">
              <span className="text-[#1F3BFF]">10.</span> Contact &amp; Legal Notices
            </h2>
            <p>For formal notices or contract clarification, please reach out to our team:</p>
            <div className="p-6 rounded-lg bg-[#12121A] border border-[#1E1E2C] space-y-2 text-sm">
              <p><strong className="text-white">Firm:</strong> NEXVIX Innovations</p>
              <p><strong className="text-white">Registered Operations:</strong> {siteConfig.contact.address.display}</p>
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
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-[#1E1E2C] flex flex-wrap items-center justify-between gap-4">
          <Link href="/privacy" className="btn btn-outline text-sm">
            &larr; Review Privacy Policy
          </Link>
          <Link href="/#contact" className="btn btn-primary text-sm">
            Start a Project with Us &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}

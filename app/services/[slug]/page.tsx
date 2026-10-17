import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig, type ServiceConfig } from '@/lib/seo.config';
import {
  getServiceSchema,
  getFAQPageSchema,
  getBreadcrumbSchema,
} from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const canonicalUrl = `${siteConfig.domain}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords, siteConfig.name],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.metaTitle} | ${siteConfig.name}`,
      description: service.metaDescription,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: `${siteConfig.domain}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.metaTitle} | ${siteConfig.name}`,
      description: service.metaDescription,
      images: [`${siteConfig.domain}${service.image}`],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQPageSchema(service.faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Services', url: '/#services' },
    { name: service.name, url: `/services/${service.slug}` },
  ]);

  return (
    <>
      {/* Page Specific Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="pt-28 pb-20 bg-[#0A0A0F] text-[#F5F6FA] min-h-screen">
        {/* Header Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-25 -top-20 -left-20 bg-[#0066FF]"
            aria-hidden="true"
          />

          <Breadcrumbs
            items={[
              { name: 'Services', url: '/#services' },
              { name: service.name, url: `/services/${service.slug}` },
            ]}
          />

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0066FF] uppercase px-3 py-1 bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-full">
              Service {service.number}
            </span>
            <span className="text-xs font-medium text-[#8E92A4]">
              Enterprise-Grade Digital Solution
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-display text-white">
            {service.name}
          </h1>

          <p className="text-lg sm:text-2xl text-[#6B7FFF] font-medium mb-6 italic">
            &ldquo;{service.catchy}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-[#8E92A4] max-w-3xl leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/#contact"
              className="btn btn-primary"
              aria-label={`Request a quote for ${service.name}`}
            >
              Request a Custom Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label={`Chat with a specialist about ${service.name} on WhatsApp`}
            >
              Discuss on WhatsApp
            </a>
          </div>
        </section>

        {/* Visual & Core Capabilities Showcase */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#12121A] border border-[#222230] rounded-2xl p-6 sm:p-10 overflow-hidden">
            <div className="lg:col-span-6 relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-semibold text-[#0066FF] uppercase tracking-wider mb-2">
                Engineering Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-display text-white">
                Core Capabilities &amp; Architecture
              </h2>
              <p className="text-[#8E92A4] text-sm sm:text-base mb-6 leading-relaxed">
                Every {service.name.toLowerCase()} implementation is built from the ground up to eliminate operational friction and ensure long-term commercial scalability.
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#F5F6FA]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* In-depth 300+ Words Strategic Content */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-display text-white">
            Why Ambitious Leaders Choose NEXVIX for {service.name}
          </h2>
          <div className="space-y-4 text-[#8E92A4] leading-relaxed text-base sm:text-lg">
            <p>
              In today&apos;s hyper-competitive digital landscape, relying on disjointed off-the-shelf tools or outdated templates creates costly operational bottlenecks. At NEXVIX Innovations, our approach to {service.name.toLowerCase()} is grounded in engineering rigor, commercial conversion principles, and transparent collaboration.
            </p>
            <p>
              We prioritize real business outcomes: higher search rankings, faster customer response times, automated data flows, and frictionless user experiences that directly increase your top-line revenue. By uniting modern frontend frameworks with robust backend architectures, our digital solutions withstand traffic surges, protect client data integrity, and scale effortlessly as your business expands.
            </p>
            <p>
              From initial discovery and rapid prototyping to production launch and dedicated post-deployment SLA monitoring, you receive end-to-end technical transparency with zero hidden licensing penalties or vendor lock-in.
            </p>
          </div>
        </section>

        {/* Real Useful FAQs (Schema & Accessible Block) */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-[#0066FF] uppercase tracking-wider">
              Answers &amp; Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#12121A] border border-[#222230] rounded-xl p-5 open:border-[#0066FF]/50 transition-colors"
              >
                <summary className="font-semibold text-base sm:text-lg text-white cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-[#0066FF] text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#8E92A4] text-sm sm:text-base leading-relaxed border-t border-[#222230] pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom Service CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-b from-[#181824] to-[#12121A] border border-[#222230] p-8 sm:p-12 rounded-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 font-display">
              Ready to Accelerate Your {service.shortTitle}?
            </h2>
            <p className="text-[#8E92A4] max-w-xl mx-auto mb-8 text-base">
              Share your project goals and requirements with our engineering team today. We provide fixed-scope milestones and upfront transparent quotes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#contact" className="btn btn-primary">
                Book a Technical Consultation
              </Link>
              <Link href="/#services" className="btn btn-outline">
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

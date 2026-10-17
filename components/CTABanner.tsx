import Link from 'next/link';

export default function CTABanner() {
  return (
    <section
      className="section-dark"
      id="cta-banner"
      style={{ paddingTop: 'var(--spacing-16)', paddingBottom: 'var(--spacing-16)' }}
      data-figma-component="CTA-Banner-Section"
      data-figma-layer="CTA-Banner-Container"
    >
      <div className="container">
        <div className="cta-banner-wrapper">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Ready to Build Something Great?</h2>
            <p className="cta-banner-subtext">Tell us your idea. We&apos;ll turn it into a working solution.</p>
            <div className="cta-banner-actions">
              <Link href="/#contact" className="btn btn-primary" id="ctaBannerQuoteBtn">
                Request a Quote
              </Link>
              <Link href="/#contact" className="btn btn-outline" id="ctaBannerConsultBtn">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

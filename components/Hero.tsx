import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="hero-section"
      id="hero"
      data-figma-component="Hero-Section"
      data-figma-layer="Hero-Container"
    >
      <div className="hero-glow-bg" aria-hidden="true" />
      <div className="hero-glow-secondary" aria-hidden="true" />

      <div className="container">
        <div className="hero-content-fullscreen" data-figma-layer="Hero-Fullscreen-Container">
          <div className="section-label" data-figma-layer="Hero-Label">
            Digital Solutions for Growth
          </div>
          <h1 className="hero-headline" data-figma-layer="Hero-Title">
            We Build the <span className="highlight-blue">Future</span> of Your Business.
          </h1>
          <p className="hero-subtext" data-figma-layer="Hero-Description">
            From stunning websites and mobile apps to AI chatbots and smart automation, NEXVIX Innovations turns your ideas into powerful digital products that save time, win customers and scale with you.
          </p>
          <div className="hero-actions" data-figma-layer="Hero-CTA-Row">
            <Link href="/#contact" className="btn btn-primary" id="heroStartProjectBtn">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/#services" className="btn btn-outline" id="heroExploreBtn">
              Explore Services
            </Link>
          </div>

          <div className="hero-trust-indicators" data-figma-layer="Hero-Trust-Signals">
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Enterprise-Grade Security</span>
            </div>
            <div className="trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>100% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

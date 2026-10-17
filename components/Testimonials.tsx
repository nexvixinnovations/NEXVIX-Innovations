export default function Testimonials() {
  const testimonials = [
    {
      id: '01',
      initials: 'RK',
      author: 'Rajesh Kumar',
      role: 'Founder, RetailDirect',
      quote:
        'NEXVIX delivered our website ahead of schedule, and our enquiries doubled within the first month. Professional, responsive and genuinely easy to work with.',
    },
    {
      id: '02',
      initials: 'AS',
      author: 'Ananya Sharma',
      role: 'Operations Director, SwiftLogistics',
      quote:
        'The CRM they built replaced three spreadsheets and hours of manual follow-ups. Our team finally has everything in one place with automated WhatsApp triggers.',
    },
    {
      id: '03',
      initials: 'MC',
      author: 'Michael Chen',
      role: 'Co-Founder, SaaSGrowth',
      quote:
        'Our AI chatbot now handles most customer questions around the clock. It feels like we hired a full support team overnight.',
    },
    {
      id: '04',
      initials: 'PS',
      author: 'Priya Sundaram',
      role: 'Finance & Ops Lead, Apex Health',
      quote:
        'Their workflow automation connected our billing, inventory, and WhatsApp alerts seamlessly. We save over 25 administrative hours each week.',
    },
    {
      id: '05',
      initials: 'VN',
      author: 'Vikram Nathan',
      role: 'Head of Product, QuickShop',
      quote:
        'The mobile application NEXVIX engineered runs at a silky smooth 60fps with exceptional UX. Customer ratings on the Play Store jumped to 4.9 stars.',
    },
  ];

  return (
    <section
      className="section-light testimonials-marquee-section"
      id="testimonials"
      style={{ backgroundColor: '#ECEEF6', borderTop: '1px solid var(--color-light-border)', overflow: 'hidden' }}
      data-figma-component="Testimonials-Section"
      data-figma-layer="Testimonials-Container"
    >
      <div className="container">
        <div className="section-header text-center" data-figma-layer="Testimonials-Header">
          <div className="section-label">Client Stories</div>
          <h2 className="section-heading-light">Trusted by Businesses Like Yours</h2>
          <p className="section-subtext-light">
            Real outcomes from ambitious leaders who partnered with NEXVIX Innovations.
          </p>
        </div>
      </div>

      {/* Infinite Automatic Continuous Marquee */}
      <div
        className="testimonials-marquee-container"
        data-figma-layer="Testimonials-Infinite-Track"
      >
        <div className="testimonials-marquee-content">
          <div className="testimonials-marquee-group">
            {testimonials.map((item) => (
              <div key={`g1-${item.id}`} className="testimonial-marquee-card">
                <div className="stars-row" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="testimonial-author-row">
                  <div className="testimonial-author-avatar">{item.initials}</div>
                  <div className="testimonial-author-details">
                    <div className="testimonial-author-name">
                      {item.author} <span className="verified-badge">✓ Verified Client</span>
                    </div>
                    <div className="testimonial-author-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-marquee-group" aria-hidden="true">
            {testimonials.map((item) => (
              <div key={`g2-${item.id}`} className="testimonial-marquee-card">
                <div className="stars-row" aria-label="5 out of 5 stars">
                  ★★★★★
                </div>
                <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                <div className="testimonial-author-row">
                  <div className="testimonial-author-avatar">{item.initials}</div>
                  <div className="testimonial-author-details">
                    <div className="testimonial-author-name">
                      {item.author} <span className="verified-badge">✓ Verified Client</span>
                    </div>
                    <div className="testimonial-author-role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

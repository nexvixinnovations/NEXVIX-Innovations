import Image from 'next/image';

interface QualityItem {
  number: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
}

const qualityItems: QualityItem[] = [
  {
    number: '01',
    title: 'Professional Design',
    desc: 'Clean layouts, consistent branding, intuitive navigation and a polished user experience tailored to win buyer trust.',
    image: '/assets/images/professional-design.webp',
    alt: 'Clean UI/UX Design System and Layout Precision',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Speed and Reliability',
    desc: 'Fast loading, responsive interactions, dependable APIs and sensible error handling built for zero downtime.',
    image: '/assets/images/speed-reliability.webp',
    alt: 'Speed and Technical Performance Telemetry',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Security and Privacy',
    desc: 'Secure authentication, appropriate access permissions, backups and safe handling of client data strictly following best practices.',
    image: '/assets/images/security-privacy.webp',
    alt: 'Zero-Trust Architecture and Cryptographic Security',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Automation and Integrations',
    desc: 'Connect the client\'s existing tools and automate repetitive work rather than making them manage everything manually.',
    image: '/assets/images/automation-integrations.webp',
    alt: 'Seamless Multi-Platform API Workflow Automation',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Business Results',
    desc: 'Help the client generate leads, increase conversions, reduce manual work or improve customer service.',
    image: '/assets/images/business-results.webp',
    alt: 'Exponential Commercial Growth and High-Impact Business Results',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'After-Sales Support',
    desc: 'Clear documentation, handover, bug-fix policies, maintenance plans and transparent communication.',
    image: '/assets/images/after-sales-support.webp',
    alt: 'Dedicated 24/7 Operations Monitoring and Client Support',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function Quality() {
  return (
    <section
      className="section-dark"
      id="quality"
      data-figma-component="Quality-Section"
      data-figma-layer="Quality-Container"
    >
      <div className="container">
        <div className="section-header" data-figma-layer="Quality-Header">
          <div className="section-label">Engineering Benchmark</div>
          <h2 className="section-heading-dark">Quality You Can See, Trust and Measure.</h2>
          <p className="section-subtext-dark">
            We don&apos;t settle for &ldquo;good enough.&rdquo; Every product we engineer adheres to rigid architecture, aesthetic and commercial standards.
          </p>
        </div>

        <div className="quality-list" data-figma-layer="Quality-Items-List">
          {qualityItems.map((item) => (
            <div
              key={item.number}
              className="quality-item"
              data-figma-layer={`Quality-Item-${item.number}`}
            >
              <div className="quality-content">
                <div className="quality-meta">
                  <span className="quality-number">{item.number}</span>
                  <div className="quality-icon-wrap">{item.icon}</div>
                </div>
                <h3 className="quality-title">{item.title}</h3>
                <p className="quality-desc">{item.desc}</p>
              </div>
              <div className="quality-image-box">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={640}
                  height={380}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

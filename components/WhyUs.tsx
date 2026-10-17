interface AdvantageItem {
  id: string;
  title: string;
  desc: string;
}

const advantages: AdvantageItem[] = [
  {
    id: '01',
    title: 'Custom-Built Solutions',
    desc: 'No cookie-cutter templates. Every architecture is tailored to match your precise workflows and competitive edge.',
  },
  {
    id: '02',
    title: 'End-to-End Delivery',
    desc: 'From initial blueprint and user testing to cloud launch and scaling, we handle the full technical lifecycle.',
  },
  {
    id: '03',
    title: 'Modern AI-Powered Tech',
    desc: 'Leverage generative intelligence, natural language bots, and autonomous pipeline triggers right from day one.',
  },
  {
    id: '04',
    title: 'Transparent Pricing & Comms',
    desc: 'Clear sprint scopes, transparent milestones, zero hidden licensing markups, and straightforward weekly updates.',
  },
  {
    id: '05',
    title: 'Long-Term Support & Partnership',
    desc: 'We stand by your platform post-launch with proactive maintenance, security patches, and strategic growth guidance.',
  },
];

export default function WhyUs() {
  return (
    <section
      className="section-dark"
      id="why-nexvix"
      style={{ backgroundColor: '#07070B', borderTop: '1px solid var(--color-dark-border)' }}
      data-figma-component="Why-Nexvix-Section"
      data-figma-layer="Why-Nexvix-Container"
    >
      <div className="container">
        <div className="section-header text-center" data-figma-layer="Why-Header">
          <div className="section-label">The NEXVIX Advantage</div>
          <h2 className="section-heading-dark">Engineered for Velocity. Built for Longevity.</h2>
          <p className="section-subtext-dark">
            Why visionary founders, operating teams, and enterprise managers partner with NEXVIX Innovations.
          </p>
        </div>

        <div className="why-grid" data-figma-layer="Why-Cards-Grid">
          {advantages.map((item) => (
            <div key={item.id} className="why-card" data-figma-layer={`Why-Card-${item.id}`}>
              <div className="why-check-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

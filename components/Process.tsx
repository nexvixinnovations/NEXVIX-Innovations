interface StepItem {
  num: string;
  title: string;
  text: string;
}

const steps: StepItem[] = [
  {
    num: '01',
    title: 'Discover',
    text: 'Deep-dive into your operational bottlenecks, business objectives, tech stack, and user requirements.',
  },
  {
    num: '02',
    title: 'Design',
    text: 'Crafting responsive design systems, interactive Figma prototypes, and seamless UX flows tailored to convert.',
  },
  {
    num: '03',
    title: 'Develop & Test',
    text: 'Writing clean, modular code, integrating APIs, optimizing database schema, and conducting rigorous QA audits.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    text: 'Zero-downtime deployment, client team onboarding, thorough technical handover, and 24/7 SLA monitoring.',
  },
];

export default function Process() {
  return (
    <section
      className="section-light"
      id="process"
      data-figma-component="Process-Section"
      data-figma-layer="Process-Container"
    >
      <div className="container">
        <div className="section-header text-center" data-figma-layer="Process-Header">
          <div className="section-label">Execution Framework</div>
          <h2 className="section-heading-light">A Proven, Frictionless Journey</h2>
          <p className="section-subtext-light">
            From your raw vision to a battle-tested digital product, structured into four disciplined phases.
          </p>
        </div>

        <div className="process-grid" data-figma-layer="Process-Steps-Grid">
          {steps.map((step) => (
            <div key={step.num} className="process-card" data-figma-layer={`Process-Step-${step.num}`}>
              <div className="process-step-num">{step.num}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

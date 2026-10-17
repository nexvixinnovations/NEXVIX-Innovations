export default function Marquee() {
  const items = [
    'Website Development',
    'Android Apps',
    'AI Video',
    'CRM Systems',
    'Automation',
    'AI Chatbots',
  ];

  return (
    <div
      className="marquee-container"
      id="marquee"
      data-figma-component="Marquee-Ticker"
      data-figma-layer="Marquee-Strip"
      aria-label="Service highlights marquee"
    >
      <div className="marquee-content" data-figma-layer="Marquee-Loop-Group">
        <div className="marquee-group">
          {items.map((item, idx) => (
            <span key={`group1-${idx}`} className="marquee-item">
              {item} <span className="marquee-bullet">•</span>
            </span>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`group2-${idx}`} className="marquee-item">
              {item} <span className="marquee-bullet">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 8, suffix: '+', label: 'Projects Delivered' },
  { target: 8, suffix: '+', label: 'Happy Customers' },
  { target: 6, suffix: '', label: 'Core Services' },
  { target: 24, suffix: '/7', label: 'Continuous Support' },
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const numbers = el.querySelectorAll<HTMLElement>('.stat-number');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            numbers.forEach((statEl) => {
              const target = parseInt(statEl.dataset.target || '0', 10);
              const suffix = statEl.dataset.suffix || '';
              const duration = 1600;
              const startTime = performance.now();

              function animate(currentTime: number) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(2, -10 * progress);
                const currentCount = Math.floor(easeOut * target);
                statEl.textContent = `${currentCount}${suffix}`;

                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  statEl.textContent = `${target}${suffix}`;
                }
              }

              requestAnimationFrame(animate);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section-light"
      id="about"
      data-figma-component="About-Section"
      data-figma-layer="About-Container"
    >
      <div className="container">
        <div className="about-grid">
          <div className="about-content" data-figma-layer="About-Text-Block">
            <div className="section-label" data-figma-layer="About-Label">
              About NEXVIX
            </div>
            <h2 className="section-heading-light" data-figma-layer="About-Title">
              Technology That Works as Hard as You Do.
            </h2>
            <p className="about-text" data-figma-layer="About-Summary">
              NEXVIX Innovations helps businesses of every size go digital with confidence. We design, build and automate, so you can focus on growing your business while we handle the technology.
            </p>
            <Link href="/#services" className="about-link" id="aboutLearnMoreBtn">
              Learn more about us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <div className="about-stats-grid" ref={statsRef} data-figma-layer="Stats-Grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card" data-figma-layer={`Stat-0${idx + 1}`}>
                  <div
                    className="stat-number"
                    data-target={stat.target}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-visual-column" data-figma-layer="About-Visual">
            <div className="about-visual-card">
              <div className="about-image-wrapper">
                <Image
                  src="/assets/images/business-growth.webp"
                  alt="Business growth and strategic technology partnership"
                  width={512}
                  height={384}
                  className="rounded-lg object-cover w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

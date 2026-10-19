import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/seo.config';

export default function Services() {
  return (
    <section
      className="section-light"
      id="services"
      style={{ backgroundColor: '#ECEEF6', borderTop: '1px solid var(--color-light-border)' }}
      data-figma-component="Services-Section"
      data-figma-layer="Services-Container"
    >
      <div className="container">
        <div className="section-header text-center" data-figma-layer="Services-Header">
          <div className="section-label">Our Capabilities</div>
          <h2 className="section-heading-light">Tailored Solutions for Digital Supremacy</h2>
          <p className="section-subtext-light">
            Each service is meticulously engineered to eliminate operational friction and accelerate your commercial velocity.
          </p>
        </div>

        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '2rem',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
          data-figma-layer="Services-Cards-Grid"
        >
          {siteConfig.services.map((service) => (
            <article
              key={service.slug}
              className="service-card"
              data-figma-layer={`Service-Card-${service.number}`}
            >
              <div className="service-card-image-box">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={340}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="service-card-body">
                <div className="service-card-header">
                  <span className="service-number">{service.number}</span>
                </div>
                <h3 className="service-title">
                  <Link href={`/services/${service.slug}`} className="hover:text-[#0066FF] transition-colors">
                    {service.name}
                  </Link>
                </h3>
                <p className="service-catchy">&ldquo;{service.catchy}&rdquo;</p>
                <p className="service-description">{service.summary}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="service-link"
                  aria-label={`Learn more about ${service.name}`}
                >
                  Explore Solution &amp; FAQs &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

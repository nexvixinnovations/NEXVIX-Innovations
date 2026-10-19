import Link from 'next/link';
import { siteConfig } from '@/lib/seo.config';

export default function Footer() {
  return (
    <footer
      className="site-footer"
      id="footer"
      data-figma-component="Footer-Section"
      data-figma-layer="Footer-Container"
    >
      <div className="container">
        <div className="footer-columns-grid" data-figma-layer="Footer-Columns-Row">
          {/* Col 1: Brand & Tagline */}
          <div className="footer-col" data-figma-layer="Footer-Col-Brand">
            <Link href="/" className="inline-block text-white font-heading font-bold text-xl mb-4 hover:text-[#1F3BFF] transition-colors" aria-label="NEXVIX Innovations Home">
              NEXVIX Innovations
            </Link>
            <p className="footer-brand-desc">
              <strong>{siteConfig.tagline}</strong>
              <br />
              A digital solutions company that builds websites, mobile apps, AI tools, and AI chatbots to help companies grow faster and work smarter.
            </p>
            <div className="footer-socials" data-figma-layer="Social-Links">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram Profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="X (Twitter) Profile"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="WhatsApp Direct Chat"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.772.82 2.791.82 3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.806-5.77-5.806zm3.385 8.249c-.144.405-.837.774-1.17.824-.312.045-.634.07-.999-.047-.235-.074-.539-.187-.929-.356-1.637-.711-2.698-2.368-2.78-2.477-.08-.109-.668-.891-.668-1.701 0-.81.423-1.209.574-1.374.151-.164.33-.206.439-.206.111 0 .222.002.321.007.103.005.243-.039.38.291.144.344.494 1.208.536 1.294.043.086.072.187.014.302-.058.115-.087.187-.173.287-.086.101-.182.226-.26.304-.087.087-.177.182-.076.355.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.274.072.376-.044.103-.116.438-.511.554-.685.117-.174.233-.145.394-.086.16.058 1.019.48 1.194.568.175.087.292.13.335.203.044.072.044.419-.1.824zm-3.416-12.421c-5.502 0-9.972 4.47-9.972 9.972 0 1.758.459 3.475 1.332 4.992l-1.417 5.176 5.297-1.389c1.474.805 3.136 1.23 4.76 1.23 5.502 0 9.973-4.47 9.973-9.972 0-5.502-4.471-9.972-9.973-9.972z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services with Crawlable Subpage Links */}
          <div className="footer-col" data-figma-layer="Footer-Col-Services">
            <h4>Services</h4>
            <ul>
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="footer-col" data-figma-layer="Footer-Col-Company">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/#about">About NEXVIX</Link>
              </li>
              <li>
                <Link href="/#quality">Quality Standards</Link>
              </li>
              <li>
                <Link href="/#why-nexvix">Why us ?</Link>
              </li>
              <li>
                <Link href="/#process">Our 4-Step Process</Link>
              </li>
              <li>
                <Link href="/#testimonials">Client Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="footer-col" data-figma-layer="Footer-Col-Links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/#contact">Request a Quote</Link>
              </li>
              <li>
                <Link href="/#contact">Book Free Consultation</Link>
              </li>
              <li>
                <Link href="/#services">Solution Blueprints</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="footer-col" data-figma-layer="Footer-Col-Contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </li>
              <li>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {siteConfig.contact.phoneRaw.slice(-10)}
                </a>
              </li>
              <li>
                <span>{siteConfig.contact.address.display}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" data-figma-layer="Footer-Bottom-Bar" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <p style={{ textAlign: 'center', margin: '0 auto' }}>
            &copy; {new Date().getFullYear()} NEXVIX Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

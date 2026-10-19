'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/seo.config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'website',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = (data = formData) => {
    const errs: Record<string, string> = {};
    if (data.name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errs.email = 'Please enter a valid work email address.';
    }
    const phoneDigits = data.phone.replace(/\D/g, '');
    if (data.phone.trim() && phoneDigits.length !== 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (data.message.trim().length < 10) {
      errs.message = 'Please provide at least a few details about your project (min 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const isFieldError = (field: string) => {
    return (hasSubmitted || touched[field]) && Boolean(errors[field]);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setHasSubmitted(true);
    setServerError('');

    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'website-development',
          message: '',
          honeypot: '',
        });
        setTouched({});
        setHasSubmitted(false);
        setErrors({});
        setTimeout(() => setSubmitSuccess(false), 9000);
      } else {
        setServerError(data.error || 'Unable to submit your request. Please try again.');
      }
    } catch {
      setServerError('A network error occurred. Please try again or reach out on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="section-light"
      id="contact"
      data-figma-component="Contact-Section"
      data-figma-layer="Contact-Container"
    >
      <div className="container">
        <div className="section-header" data-figma-layer="Contact-Header">
          <div className="section-label">Get in Touch</div>
          <h2 className="section-heading-light">Let&apos;s Discuss Your Project</h2>
          <p className="section-subtext-light">
            Fill out the form below or contact our team directly. We respond to all inquiries within one business day.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-list" data-figma-layer="Contact-Channels">
            <div className="contact-info-card" data-figma-layer="Channel-Email">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-info-detail">
                <h4>Email Us</h4>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
            </div>

            <div className="contact-info-card" data-figma-layer="Channel-Phone">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-info-detail">
                <h4>Mobile &amp; WhatsApp</h4>
                <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
              </div>
            </div>

            <div className="contact-info-card" data-figma-layer="Channel-WhatsApp">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div className="contact-info-detail">
                <h4>WhatsApp Chat</h4>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  Connect on WhatsApp ({siteConfig.contact.phoneRaw.slice(-10)})
                </a>
              </div>
            </div>

            <div className="contact-info-card" data-figma-layer="Channel-Address">
              <div className="contact-icon-box">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-info-detail">
                <h4>Location</h4>
                <p>{siteConfig.contact.address.display}</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card" data-figma-layer="Contact-Form-Container">
            {submitSuccess && (
              <div className="form-success-banner visible" role="alert">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Thank you! Your message has been sent. A NEXVIX specialist will reach out shortly.</span>
              </div>
            )}

            {serverError && (
              <div className="form-error-banner" role="alert">
                <span>{serverError}</span>
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="retry-btn"
                  disabled={submitting}
                >
                  Retry
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Invisible Honeypot Spam Trap for bots */}
              <div style={{ display: 'none', visibility: 'hidden' }} aria-hidden="true">
                <label htmlFor="hp_company_website">Company Website</label>
                <input
                  type="text"
                  id="hp_company_website"
                  name="hp_company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${isFieldError('name') ? 'error' : ''}`}
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => {
                      const next = { ...formData, name: e.target.value };
                      setFormData(next);
                      if (hasSubmitted || touched.name) validate(next);
                    }}
                    onBlur={() => handleBlur('name')}
                    required
                  />
                  {isFieldError('name') && <span className="form-error-msg visible">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${isFieldError('email') ? 'error' : ''}`}
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => {
                      const next = { ...formData, email: e.target.value };
                      setFormData(next);
                      if (hasSubmitted || touched.email) validate(next);
                    }}
                    onBlur={() => handleBlur('email')}
                    required
                  />
                  {isFieldError('email') && <span className="form-error-msg visible">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-control ${isFieldError('phone') ? 'error' : ''}`}
                    placeholder="10 digit number"
                    value={formData.phone}
                    onChange={(e) => {
                      const next = { ...formData, phone: e.target.value };
                      setFormData(next);
                      if (hasSubmitted || touched.phone) validate(next);
                    }}
                    onBlur={() => handleBlur('phone')}
                  />
                  {isFieldError('phone') && <span className="form-error-msg visible">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="service">Select Primary Service</label>
                  <select
                    id="service"
                    name="service"
                    className="form-control"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="website-development">Website Development</option>
                    <option value="android-app-development">Android App Development</option>
                    <option value="ai-video-creation">AI Video Creation</option>
                    <option value="ai-chatbot">AI Chatbot for Business</option>
                    <option value="consulting">Full Digital Consulting</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Brief &amp; Goals *</label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-control ${isFieldError('message') ? 'error' : ''}`}
                  rows={4}
                  placeholder="Tell us about your project requirements, current bottlenecks, and target timeline..."
                  value={formData.message}
                  onChange={(e) => {
                    const next = { ...formData, message: e.target.value };
                    setFormData(next);
                    if (hasSubmitted || touched.message) validate(next);
                  }}
                  onBlur={() => handleBlur('message')}
                  required
                />
                {isFieldError('message') && <span className="form-error-msg visible">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 'var(--spacing-2)' }}
                disabled={submitting}
              >
                {submitting ? 'Sending Request...' : 'Send Project Request'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { siteConfig, type ServiceConfig } from './seo.config';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.domain}/assets/images/nexvix-logo.png`,
      caption: siteConfig.name,
    },
    description: siteConfig.defaultDescription,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: siteConfig.contact.phone,
        contactType: 'customer service',
        areaServed: ['IN', 'US', 'GB', 'AE', 'SG'],
        availableLanguage: ['en', 'ta', 'hi'],
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
      siteConfig.social.whatsapp,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.name,
    description: siteConfig.defaultDescription,
    publisher: {
      '@id': `${siteConfig.domain}/#organization`,
    },
    inLanguage: 'en-US',
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.domain}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.domain}/assets/images/nexvix-logo.png`,
    url: siteConfig.domain,
    telephone: siteConfig.contact.phone,
    priceRange: '₹₹ - ₹₹₹₹',
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Tamil Nadu',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'Country',
        name: 'Worldwide',
      },
    ],
  };
}

export function getServiceSchema(service: ServiceConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.domain}/services/${service.slug}/#service`,
    name: service.name,
    serviceType: service.primaryKeyword,
    description: service.summary,
    provider: {
      '@id': `${siteConfig.domain}/#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.features.map((feature, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
        position: idx + 1,
      })),
    },
  };
}

export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.domain}${item.url}`,
    })),
  };
}

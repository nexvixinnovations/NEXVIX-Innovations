import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.domain,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteConfig.domain}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.domain}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = siteConfig.services.map((service) => ({
    url: `${siteConfig.domain}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

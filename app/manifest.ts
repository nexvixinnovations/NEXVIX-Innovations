import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo.config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'NEXVIX',
    description: siteConfig.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0F',
    theme_color: '#0066FF',
    icons: [
      {
        src: '/assets/images/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/assets/images/nexvix-icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/images/nexvix-logo-original.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/seo.config';
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getLocalBusinessSchema,
} from '@/lib/schema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import Analytics from '@/components/Analytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  generator: 'Next.js',
  keywords: [
    'NEXVIX Innovations',
    'website development company',
    'custom web development',
    'Android app development',
    'AI video creation services',
    'CRM software development',
    'business automation services',
    'AI chatbot for business',
    'Erode software company',
    'Tamil Nadu digital solutions',
    'India software agency',
  ],
  referrer: 'origin-when-cross-origin',
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/assets/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/assets/images/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: `${siteConfig.domain}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    creator: '@Gandha_24',
    site: '@Gandha_24',
    images: [`${siteConfig.domain}/twitter-image`],
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Core Global Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased font-sans bg-[#0A0A0F] text-[#F5F6FA]">
        {/* Accessible Skip to Content Link */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Navbar />

        <div id="main-content" tabIndex={-1}>
          {children}
        </div>

        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}

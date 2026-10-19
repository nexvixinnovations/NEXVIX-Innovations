export interface ServiceConfig {
  slug: string;
  name: string;
  shortTitle: string;
  number: string;
  catchy: string;
  summary: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  image: string;
  imageAlt: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export const siteConfig = {
  name: 'NEXVIX Innovations',
  legalName: 'NEXVIX Innovations',
  tagline: 'Innovate. Automate. Elevate.',
  domain: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexvixinnovations.com',
  defaultTitle: 'NEXVIX Innovations | Website, App, AI Video & AI Chatbot Services',
  titleTemplate: '%s | NEXVIX Innovations',
  defaultDescription:
    'NEXVIX Innovations builds cutting-edge websites, mobile apps, AI tools, and AI chatbots that help ambitious companies grow faster and work smarter.',
  ogImage: '/assets/images/og-image.jpg',
  themeColor: '#0066FF',
  locale: 'en_US',

  contact: {
    email: 'nexvix.innovations@gmail.com',
    phone: '+91 7708382018',
    phoneRaw: '917708382018',
    whatsapp: 'https://wa.me/917708382018',
    address: {
      streetAddress: 'Perundurai Main Road',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      postalCode: '638052',
      addressCountry: 'IN',
      display: 'Perundurai, Erode - 638052, Tamil Nadu, India',
    },
    geo: {
      latitude: '11.2764',
      longitude: '77.5834',
    },
    openingHours: 'Mo-Sa 09:00-19:00',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/nexvix-innovations/',
    instagram: 'https://www.instagram.com/nexvix__innovations?rpxt=MWxwdmk4Y2tlMWpteQ==',
    twitter: 'https://x.com/Gandha_24',
    whatsapp: 'https://wa.me/917708382018',
  },

  services: [
    {
      slug: 'website-development',
      name: 'Website Development',
      shortTitle: 'Web Development',
      number: '01',
      catchy: 'Websites that don\'t just look good, they sell.',
      summary: 'Fast, SEO-ready, mobile-first websites and web apps built to turn visitors into loyal customers.',
      description:
        'We engineer ultra-fast, search-optimized websites and web applications tailored to high-growth businesses. From corporate portals to custom eCommerce web apps, every platform is architected with modern frontend frameworks, structured schema markup, and responsive layouts to maximize lead conversions and operational velocity.',
      metaTitle: 'Website Development Company | Fast & SEO-Ready Web Solutions',
      metaDescription:
        'Professional website development by NEXVIX Innovations. We build fast, responsive, SEO-ready web applications that convert visitors into revenue.',
      primaryKeyword: 'website development company',
      secondaryKeywords: ['custom web development', 'SEO-friendly websites', 'responsive web design', 'web application engineering'],
      image: '/assets/images/service-web-dev.webp',
      imageAlt: 'NEXVIX Innovations software engineering team building responsive web applications',
      features: [
        'Custom Architecture with Next.js, React, and Modern Static/SSR Frameworks',
        'Built-in Technical SEO, Dynamic Structured Data & Open Graph Tags',
        'Core Web Vitals Optimized (< 2.5s LCP, Zero CLS, Sub-second TTFB)',
        'Fully Responsive Mobile-First Design Across All Device Breakpoints',
        'Conversion-Focused UI/UX Designed to Maximize Qualified Leads',
        'Enterprise Security with SSL, Content-Security-Policy & Fast Edge CDN',
      ],
      faqs: [
        {
          question: 'How long does it take to develop a custom website with NEXVIX?',
          answer:
            'Standard corporate websites typically launch within 2 to 4 weeks. Complex web applications with bespoke API integrations or custom dashboards take between 4 to 8 weeks, structured into agile delivery sprints.',
        },
        {
          question: 'Will my website be search engine optimized (SEO) from day one?',
          answer:
            'Yes. Every website we build includes technical SEO foundations: semantic HTML5, automated XML sitemaps, JSON-LD structured data, responsive image optimization, and sub-second load times.',
        },
        {
          question: 'Can I manage and update website content easily after launch?',
          answer:
            'Absolutely. We integrate user-friendly headless CMS solutions or intuitive admin dashboards, accompanied by recorded video handovers and clear documentation.',
        },
        {
          question: 'Do you provide post-launch maintenance and technical support?',
          answer:
            'Yes, we offer ongoing maintenance packages covering regular security patches, performance telemetry monitoring, content updates, and server infrastructure health.',
        },
      ],
    },
    {
      slug: 'android-app-development',
      name: 'Android App Development',
      shortTitle: 'Android Apps',
      number: '02',
      catchy: 'Put your business in your customers\' pockets.',
      summary: 'Smooth, secure, user-friendly Android apps built for performance and sustained growth.',
      description:
        'NEXVIX Innovations engineers native and hybrid Android mobile applications that deliver smooth 60fps animations, rock-solid stability, and intuitive touch UX. Whether you require a customer-facing marketplace, booking tool, or internal enterprise mobile tool, our apps scale reliably across millions of devices.',
      metaTitle: 'Android App Development Company | Custom Mobile App Solutions',
      metaDescription:
        'Custom Android app development by NEXVIX Innovations. High-performance, secure mobile applications designed for seamless user experience and business growth.',
      primaryKeyword: 'android app development company',
      secondaryKeywords: ['custom mobile app development', 'Android application engineering', 'native Android apps', 'Google Play store deployment'],
      image: '/assets/images/service-android-app.webp',
      imageAlt: 'Mobile software engineer testing native Android application on mobile devices',
      features: [
        'Modern Native & Cross-Platform Kotlin/Flutter Architecture',
        'Intuitive Material Design 3 UI with Fluid Micro-Animations',
        'Offline Data Syncing & Encrypted Local Storage Support',
        'End-to-End Google Play Console Deployment and Store Optimization',
        'Push Notifications, Geo-location, and Hardware API Integration',
        'Enterprise-Grade End-to-End Encryption & Secure Payment Gateways',
      ],
      faqs: [
        {
          question: 'Do you publish the mobile app to the Google Play Store?',
          answer:
            'Yes. We handle the entire publication pipeline, including APK/AAB bundle signing, store listing optimization, privacy policy compliance, and Google review approval.',
        },
        {
          question: 'Can the Android app work offline without active internet connectivity?',
          answer:
            'Yes, we engineer local database caching and background synchronisation so users can view data offline, with automatic sync once a network connection is detected.',
        },
        {
          question: 'How do you ensure user data security inside mobile apps?',
          answer:
            'We implement biometric authentication, encrypted Room/SQLite storage, SSL pinning, token-based authentication (OAuth2/JWT), and strict permission scopes.',
        },
        {
          question: 'What happens after the app is published?',
          answer:
            'We provide bug fixes, OS upgrade compatibility maintenance, crashlytics tracking, and ongoing feature development sprints.',
        },
      ],
    },
    {
      slug: 'ai-video-creation',
      name: 'AI Video Creation',
      shortTitle: 'AI Video',
      number: '03',
      catchy: 'Turn ideas into scroll-stopping videos.',
      summary: 'AI-powered promo videos, explainers, and social content produced faster and at a fraction of traditional production costs.',
      description:
        'Leverage artificial intelligence to produce high-impact, studio-quality video campaigns without expensive filming equipment or weeks of post-production. NEXVIX Innovations combines generative video tools, synthetic voiceovers, and motion typography to craft scroll-stopping marketing assets.',
      metaTitle: 'AI Video Creation & Production Services | NEXVIX Innovations',
      metaDescription:
        'Transform your brand marketing with AI video creation services from NEXVIX Innovations. High-converting explainers, promotional ads, and social video reels.',
      primaryKeyword: 'AI video creation services',
      secondaryKeywords: ['AI video production', 'generative AI marketing videos', 'social media video ads', 'product explainer videos'],
      image: '/assets/images/service-ai-video.webp',
      imageAlt: 'Creative director crafting AI-powered promo videos and cinematic timelines',
      features: [
        'Photorealistic AI Avatars & Natural Human Voiceover Synthesis in 40+ Languages',
        'High-Converting Social Media Formats (9:16 Vertical Reels, 16:9 Landscape YouTube Ads)',
        'Rapid Turnaround Times (Full High-Definition Videos in 48 to 72 Hours)',
        'Custom Branded Motion Graphics, Subtitles, and Sound Design',
        'Cost Reduction of up to 70% Compared to Traditional Video Studio Shoots',
        'Automated Batch Video Generation for High-Volume Product Catalogs',
      ],
      faqs: [
        {
          question: 'What kinds of videos can you create using AI?',
          answer:
            'We create product walkthroughs, social media ads (Instagram Reels, TikTok, YouTube Shorts), corporate explainer videos, personalized sales outreach clips, and multilingual training modules.',
        },
        {
          question: 'Do the voiceovers and avatars sound robotic?',
          answer:
            'No. We utilize state-of-the-art neural voice models that capture natural breathing pauses, inflection, pacing, and human cadence across dozens of languages and regional accents.',
        },
        {
          question: 'Can we include our own brand assets, logos, and product screenshots?',
          answer:
            'Yes. Every video is custom-tailored using your typography, color palette, logos, physical product photos, and screen recordings.',
        },
        {
          question: 'How fast can a video project be delivered?',
          answer:
            'Standard AI promotional clips and explainers are usually drafted and finalized within 2 to 4 business days after script approval.',
        },
      ],
    },
    {
      slug: 'ai-chatbot',
      name: 'AI Chatbot for Business',
      shortTitle: 'AI Chatbots',
      number: '04',
      catchy: 'Your best employee never sleeps.',
      summary: 'Smart AI chatbots that answer questions, capture leads, and support customers 24/7 on your website, WhatsApp, and social channels.',
      description:
        'Convert site visitors into scheduled meetings and solve client queries around the clock. NEXVIX Innovations develops intelligent conversational AI agents fine-tuned on your company\'s documentation, services, and pricing. Our chatbots understand context, qualify prospective buyers, and hand off warm leads directly to your team.',
      metaTitle: 'AI Chatbot for Business | 24/7 Intelligent Customer Support Bots',
      metaDescription:
        'Deploy smart AI chatbots for your website and WhatsApp with NEXVIX Innovations. 24/7 lead capture, instant customer support, and seamless CRM sync.',
      primaryKeyword: 'AI chatbot for business',
      secondaryKeywords: ['conversational AI agents', 'WhatsApp AI chatbot', 'website customer support bot', 'automated lead qualification bot'],
      image: '/assets/images/support.webp',
      imageAlt: '24/7 AI conversational chatbot interface answering customer queries and booking consultations',
      features: [
        'Trained on Your Specific Business Knowledge Base, FAQs, and Product Catalogs',
        'Omnichannel Deployment on Website, WhatsApp Business, and Instagram DMs',
        'Automated Lead Qualification (Captures Name, Phone, Budget, and Requirements)',
        'Seamless Human Agent Takeover When Complex Technical Support Is Required',
        'Multilingual Conversational Understanding Across English, Tamil, Hindi, and More',
        'Direct Integration with CRM Databases and Calendar Scheduling Tools',
      ],
      faqs: [
        {
          question: 'Can the AI chatbot answer questions specific to our company?',
          answer:
            'Yes. We train the AI directly on your service guides, pricing models, company policies, and FAQs, ensuring it delivers accurate, on-brand responses while preventing hallucinations.',
        },
        {
          question: 'Can the chatbot capture phone numbers and schedule appointments?',
          answer:
            'Yes. The chatbot qualifies prospects through natural conversation, gathers their verified contact details, and can directly book appointments into Google Calendar or your CRM.',
        },
        {
          question: 'Can a human staff member take over the chat if needed?',
          answer:
            'Yes. If a user asks for human assistance or a sentiment threshold is triggered, the bot can alert your team via WhatsApp or Slack for an immediate live handover.',
        },
        {
          question: 'How do you prevent the AI from giving incorrect or misleading answers?',
          answer:
            'We implement strict guardrails and Retrieval-Augmented Generation (RAG) constraints so the bot only answers from verified company knowledge, politely referring unknown queries to human support.',
        },
      ],
    },
  ] as ServiceConfig[],
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066FF',
          blueHover: '#0052CC',
          darkBg: '#0A0A0F',
          darkSurface: '#12121A',
          darkSurfaceAlt: '#181824',
          lightBg: '#F5F6FA',
          lightSurface: '#FFFFFF',
          borderDark: '#222230',
          borderLight: '#E2E4ED',
          textMuted: '#8E92A4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

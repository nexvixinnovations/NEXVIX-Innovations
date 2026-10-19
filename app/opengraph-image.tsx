import { ImageResponse } from 'next/og';

export const alt = 'NEXVIX Innovations | Innovate. Automate. Elevate.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0A0F',
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(0, 102, 255, 0.28), transparent 70%)',
          color: '#FFFFFF',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 54,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            <span>NEXVIX</span>
            <span style={{ color: '#0066FF', marginLeft: '14px' }}>INNOVATIONS</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 24,
            fontWeight: 600,
            color: '#0066FF',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            marginBottom: '20px',
          }}
        >
          <span>Innovate • Automate • Elevate</span>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 32,
            fontWeight: 700,
            textAlign: 'center',
            maxWidth: '960px',
            lineHeight: 1.35,
            color: '#ECEEF6',
            marginBottom: '36px',
            justifyContent: 'center',
          }}
        >
          <span>Websites, Android Apps, AI Video &amp; AI Chatbots</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '12px 32px',
            borderRadius: '9999px',
            fontSize: 18,
            color: '#8E92A4',
          }}
        >
          <span>Fast Delivery</span>
          <span>•</span>
          <span>Enterprise Security</span>
          <span>•</span>
          <span>nexvixinnovations.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

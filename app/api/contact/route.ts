import { NextResponse } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many submissions. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message, honeypot } = body;

    // Honeypot spam trap: bots fill in the hidden honeypot field
    if (honeypot && honeypot.trim() !== '') {
      // Return 200 to fool bot without performing action
      return NextResponse.json({
        success: true,
        message: 'Message processed successfully.',
      });
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid full name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid work email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please provide project details (minimum 10 characters).' },
        { status: 400 }
      );
    }

    // Sanitize values
    const safeData = {
      name: name.trim().slice(0, 100),
      email: email.trim().slice(0, 100),
      phone: (phone || '').toString().trim().slice(0, 30),
      service: (service || 'website').toString().trim().slice(0, 50),
      message: message.trim().slice(0, 3000),
      timestamp: new Date().toISOString(),
      ip,
    };

    console.log('[NEXVIX Inquiry Received]:', safeData);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your project inquiry has been received. A NEXVIX specialist will reach out shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again or reach out directly.' },
      { status: 500 }
    );
  }
}

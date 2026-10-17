'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js Global Application Error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F5F6FA] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20 -top-20 -left-20 bg-red-600"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
        <Link href="/" className="inline-block mb-8" aria-label="NEXVIX Innovations Home">
          <Image
            src="/assets/images/nexvix-logo-white.png"
            alt="NEXVIX Innovations"
            width={180}
            height={106}
            className="h-auto w-40"
            priority
          />
        </Link>

        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-red-400 uppercase bg-red-950/40 border border-red-800/40 rounded-full mb-6">
          Error 500 • Application Interruption
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-display">
          System Undergoing Calibration
        </h1>

        <p className="text-[#8E92A4] text-base sm:text-lg mb-8 leading-relaxed">
          An unexpected server condition occurred while processing this request. Our technical telemetry team has been notified.
        </p>

        <div className="flex flex-wrap gap-4 justify-center w-full mb-10">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm transition-colors shadow-lg shadow-blue-500/20"
          >
            Retry Connection
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#181824] hover:bg-[#222230] text-white border border-[#222230] font-medium text-sm transition-colors"
          >
            Return to Homepage
          </Link>
          <a
            href="mailto:nexvixinnovations@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-[#8E92A4] hover:text-white border border-transparent font-medium text-sm transition-colors"
          >
            Report Incident
          </a>
        </div>
      </div>
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('nexvix_cookie_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nexvix_cookie_consent', 'accepted');
    setAccepted(true);
  };

  const handleDecline = () => {
    localStorage.setItem('nexvix_cookie_consent', 'declined');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md bg-[#12121A]/95 backdrop-blur-md border border-[#222230] p-4 sm:p-5 rounded-xl shadow-2xl z-50 text-xs text-[#8E92A4]"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-semibold text-[#F5F6FA]">Privacy &amp; Cookie Notice</p>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
            Compliant
          </span>
        </div>
        <p className="leading-relaxed">
          We use strictly essential technical telemetry and anonymized analytics to measure site performance and enhance your user experience. No tracking cookies are shared with third parties.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 px-3 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-xs transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="py-2 px-3 rounded-lg bg-[#181824] hover:bg-[#222230] text-[#8E92A4] hover:text-[#F5F6FA] text-xs border border-[#222230] transition-colors"
          >
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
}

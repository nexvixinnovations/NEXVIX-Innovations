import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F5F6FA] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20 -top-20 -left-20 bg-[#0066FF]"
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

        <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-wider text-[#0066FF] uppercase bg-[rgba(0,102,255,0.12)] border border-[rgba(0,102,255,0.25)] rounded-full mb-6">
          Error 404 • Page Not Found
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 font-display">
          Lost in Digital Space?
        </h1>

        <p className="text-[#8E92A4] text-base sm:text-lg mb-8 leading-relaxed">
          The page or digital solution you are looking for has been moved, renamed, or does not exist. Explore our core services or return to the homepage.
        </p>

        <div className="flex flex-wrap gap-4 justify-center w-full mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white font-medium text-sm transition-colors shadow-lg shadow-blue-500/20"
          >
            Back to Homepage
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#181824] hover:bg-[#222230] text-white border border-[#222230] font-medium text-sm transition-colors"
          >
            Explore Services
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-transparent hover:bg-white/5 text-[#8E92A4] hover:text-white border border-transparent font-medium text-sm transition-colors"
          >
            Contact Support
          </Link>
        </div>

        <div className="w-full pt-8 border-t border-[#222230] text-xs text-[#8E92A4]">
          <p className="mb-2">Popular Service Destinations:</p>
          <div className="flex flex-wrap gap-3 justify-center text-[#0066FF]">
            <Link href="/services/website-development" className="hover:underline">Website Development</Link>
            <span>•</span>
            <Link href="/services/android-app-development" className="hover:underline">Android Apps</Link>
            <span>•</span>
            <Link href="/services/ai-video-creation" className="hover:underline">AI Video</Link>
            <span>•</span>
            <Link href="/services/crm-systems" className="hover:underline">CRM Systems</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

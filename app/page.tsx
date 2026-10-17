import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Quality from '@/components/Quality';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Quality />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
    </>
  );
}

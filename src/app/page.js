// src/app/page.js
import Hero from '@/components/home/Hero';
import Technologies from '@/components/home/Technologies';
import Services from '@/components/home/Services';
import Stats from '@/components/home/Stats';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';

export default function Page() {
  return (
    <main>
      <Hero />
      <Technologies />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
    </main>
  );
}
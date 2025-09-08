// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <CallToAction />
      <Footer />
    </main>
  );
}
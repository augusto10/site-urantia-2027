import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CountdownTimer />
      <CTASection />
      <Footer />
    </div>
  );
}

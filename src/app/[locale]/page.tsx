import Hero from '../../components/Hero';
import CountdownTimer from '../../components/CountdownTimer';
import CTASection from '../../components/CTASection';

export default async function HomePage() {
  return (
    <main>
      <Hero />
      <CountdownTimer />
      <CTASection />
    </main>
  );
}

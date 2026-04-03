import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CurrentlyLine from '@/components/CurrentlyLine';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import StatsStrip from '@/components/StatsStrip';
import SocialProof from '@/components/SocialProof';
import RevealSection from '@/components/RevealSection';
import About from '@/components/About';
import NoteFromKim from '@/components/NoteFromKim';
import Services from '@/components/Services';
import Properties from '@/components/Properties';
import Testimonials from '@/components/Testimonials';
import LifestyleBand from '@/components/LifestyleBand';
import NeighborhoodsPinboard from '@/components/NeighborhoodsPinboard';
import LocalPicks from '@/components/LocalPicks';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Kim Pelham - Real Estate Broker | Snohomish County',
  description: 'Your neighbor in real estate. 14 years helping families buy and sell in Snohomish County with a two-buyer-max policy.',
};

export default function Home() {
  return (
    <main>
      <Nav />
      <CurrentlyLine />
      <Hero />
      <Marquee />
      <StatsStrip />
      <SocialProof />
      <RevealSection>
        <About />
      </RevealSection>
      <NoteFromKim />
      <Services />
      <Properties />
      <Testimonials />
      <LifestyleBand />
      <NeighborhoodsPinboard />
      <LocalPicks />
      <ContactCTA />
      <Footer />
      <ScrollProgress />
    </main>
  );
}

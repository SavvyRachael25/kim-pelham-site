import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CurrentlyLine from '@/components/CurrentlyLine';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import StatsStrip from '@/components/StatsStrip';
import SocialProof from '@/components/SocialProof';
import GoogleReviews from '@/components/GoogleReviews';
import RevealSection from '@/components/RevealSection';
import About from '@/components/About';
import NoteFromKim from '@/components/NoteFromKim';
import Services from '@/components/Services';
import Properties from '@/components/Properties';
import LifestyleBand from '@/components/LifestyleBand';
import NeighborhoodsPinboard from '@/components/NeighborhoodsPinboard';
import LocalPicks from '@/components/LocalPicks';
import BlogPreview from '@/components/BlogPreview';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
  title: 'Kim Pelham — The Realtor Next Door | Snohomish County',
  description: 'Your neighbor in real estate. 17+ years helping families buy and sell in Snohomish County. I answer my own phone, stage with my own hands, and fight for every dollar.',
  openGraph: {
    title: 'Kim Pelham — The Realtor Next Door',
    description: '17+ years in Snohomish County. I answer my own phone, stage with my own hands, and fight for every dollar. The Pelham Group NW.',
    images: [{ url: '/images/about-01-approachable-headshot-env.jpg', width: 1920, height: 1072 }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kim Pelham — The Realtor Next Door',
    description: '17+ years in Snohomish County. I answer my own phone, stage with my own hands, and fight for every dollar.',
    images: ['/images/about-01-approachable-headshot-env.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com',
  },
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
      <GoogleReviews />
      <About />
      <NoteFromKim />
      <Services />
      <Properties />
      <LifestyleBand />
      <NeighborhoodsPinboard />
      <LocalPicks />
      <BlogPreview />
      <ContactCTA />
      <Footer />
      <ScrollProgress />
    </main>
  );
}

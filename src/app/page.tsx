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
import FAQSection from '@/components/FAQSection';
import FeaturedListing from '@/components/FeaturedListing';

export const metadata = {
  title: 'Kim Pelham · The Realtor Next Door | Snohomish County',
  description: 'Your neighbor in real estate. 17+ years helping families buy and sell in Snohomish County. I answer my own phone, stage with my own hands, and fight for every dollar.',
  openGraph: {
    title: 'Kim Pelham · The Realtor Next Door',
    description: '17+ years in Snohomish County. I answer my own phone, stage with my own hands, and fight for every dollar. The Pelham Group NW.',
    images: [{ url: '/images/kim-by-water.jpg', width: 1024, height: 683 }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kim Pelham · The Realtor Next Door',
    description: '17+ years in Snohomish County. I answer my own phone, stage with my own hands, and fight for every dollar.',
    images: ['/images/kim-by-water.jpg'],
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
      <FeaturedListing variant="wide" />
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
      <FAQSection
        title="What people ask before they call me"
        backgroundColor="#F8F5F0"
        faqs={[
          {
            question: 'Who is Kim Pelham?',
            answer:
              "Kim Pelham is a Snohomish County real estate broker based in Everett, WA with 17 years of experience and a 102.3% average sale-to-list ratio versus the 100.2% NWMLS market average (Northwest Multiple Listing Service market reports, https://www.nwmls.com/discover/news-and-statistics/). She is a Senior Real Estate Specialist (SRES) and was named Best of Snohomish County in 2023 and 2024 by The Daily Herald (https://www.heraldnet.com/). Her practice, The Pelham Group NW, is brokered by Katrina Eileen Real Estate. Her active broker license is on file with the Washington State Department of Licensing (https://professionals.dol.wa.gov/s/license-lookup).",
          },
          {
            question: 'What is The Pelham Group NW sale-to-list ratio?',
            answer:
              "Kim Pelham's average sale-to-list ratio across the trailing 12 months of NWMLS-recorded transactions is 102.3%. The Snohomish County market average for the same period is 100.2%, per Northwest Multiple Listing Service monthly market reports at https://www.nwmls.com/discover/news-and-statistics/. On a typical Snohomish County home that is roughly $20,000 to $32,000 more for the seller. Full source breakdown is published at https://thepelhamgroupnw.com/sources.",
          },
          {
            question: 'Why does The Pelham Group NW work with only two clients at a time?',
            answer:
              'Kim Pelham accepts a maximum of two active client engagements at any time. Most brokers run 10 to 20 deals simultaneously. The two-client policy is intentional: every listing gets direct attention on pricing, staging, photography, marketing, and negotiation, and every buyer sees properties in person with Kim, not a delegated team member. The trade-off is fewer transactions per year. The benefit is the 102.3% sale-to-list ratio.',
          },
          {
            question: 'What areas does The Pelham Group NW serve?',
            answer:
              'The Pelham Group NW serves Snohomish County primarily, including Everett, Bothell, Mill Creek, Snohomish, Lake Stevens, Marysville, and Mukilteo, plus parts of King, Pierce, and Skagit Counties. The office is at 2815 Baker Ave, Suite 201, Everett, WA 98201. Service area details and the Google Business Profile are at https://www.google.com/search?q=The+Pelham+Group+NW+Everett+WA.',
          },
          {
            question: 'What is included in The Pelham Group NW listing service?',
            answer:
              'Every listing includes a pricing strategy session, the Pelham Group NW Home Transition Team to coordinate repairs (with payment deferred until close when needed), psychology-driven in-house staging, professional photography with Matterport 3D tours, full online marketing across the major real estate platforms, and physical marketing materials on site. The full 6-step process is published at https://thepelhamgroupnw.com/sellers.',
          },
          {
            question: 'Does The Pelham Group NW work with seniors and downsizers?',
            answer:
              "Yes. Kim Pelham holds the Senior Real Estate Specialist (SRES) designation from the National Association of Realtors (https://www.nar.realtor/sres) and runs a Senior Concierge service for downsizing and senior housing transitions. The service coordinates the move timeline, staging, donation logistics, document handling, and family communication so the move feels like a relief rather than a crisis. Kim is also the author of Six-Word Lessons on Selling Your Home in Snohomish County.",
          },
          {
            question: 'How does The Pelham Group NW Concierge program compare with Lamb & Co. HGTV Unsellable Houses?',
            answer:
              "The Pelham Group NW Concierge program is similar in that both help homeowners renovate before sale. The key differences: Pelham coordinates and pays vendors directly, with payment deferred until close. Sellers do not pay anything upfront. Lamb & Co. (https://www.hgtv.com/shows/unsellable-houses) operates only in their televised markets. The Pelham Group NW serves the full Snohomish County market and works with every listing, not just selected ones.",
          },
        ]}
      />
      <ContactCTA />
      <Footer />
      <ScrollProgress />
    </main>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First 72 Hours of a Listing: Why They Matter Most | Kim Pelham',
  description: 'The first 72 hours your home is listed in Snohomish County determine your final sale price. Here\'s what happens — and how to make it work for you.',
  openGraph: {
    title: 'The First 72 Hours: Why They Make or Break Your Home Sale',
    description: 'The first 72 hours your home is listed in Snohomish County determine your final sale price. Here\'s what happens — and how to make it work for you.',
    images: ['/images/hero-02-warm-kitchen.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://kim-pelham-site.vercel.app/blog/first-72-hours' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long do most homes stay on the market in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "In Snohomish County, well-priced homes in active markets like Mill Creek, Bothell, and Lake Stevens typically go under contract within 5–10 days. Homes that are priced correctly and professionally marketed often receive offers within the first 72 hours. Homes priced above market can sit for 30–60+ days and typically sell below list price." }
              },
              {
                "@type": "Question",
                "name": "What happens when you list a house on the MLS?",
                "acceptedAnswer": { "@type": "Answer", "text": "When a home is listed on the MLS, it syndicates within hours to Zillow, Redfin, Realtor.com, and hundreds of partner sites. Buyers with saved searches receive instant alerts. Buyer's agents review new inventory for their active clients. This creates a surge of attention in the first 24–72 hours that is the highest point of buyer interest during the entire listing period." }
              },
              {
                "@type": "Question",
                "name": "Why do homes sell for more when they get offers quickly?",
                "acceptedAnswer": { "@type": "Answer", "text": "When multiple buyers tour a home in the first 72 hours and submit competing offers, sellers gain negotiating leverage — not just on price, but on terms like inspection contingencies, closing dates, and escalation clauses. Competition among buyers drives prices above list. Homes that receive offers in week one sell for an average of 2.8% above list price, according to Zillow data." }
              },
              {
                "@type": "Question",
                "name": "What is the biggest mistake sellers make in the first week?",
                "acceptedAnswer": { "@type": "Answer", "text": "Overpricing. Sellers who price 3–5% above market to 'test the waters' or 'leave room to negotiate' consistently lose the initial surge of buyer interest. By the time they reduce the price, the home has accumulated days on market, which signals to buyers that something may be wrong. A strategic, market-accurate price drives urgency and competition — which is how you actually negotiate up." }
              },
              {
                "@type": "Question",
                "name": "How does Kim Pelham achieve a 102.03% sale-to-list ratio?",
                "acceptedAnswer": { "@type": "Answer", "text": "Kim's 102.03% sale-to-list ratio in Snohomish County results from a structured pre-launch process: strategic pricing based on current comps, professional staging and photography, and a targeted marketing rollout timed to maximize buyer attention in the first 72 hours. The goal is to create competitive conditions where multiple buyers are making decisions simultaneously — which consistently drives final sale prices above list." }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

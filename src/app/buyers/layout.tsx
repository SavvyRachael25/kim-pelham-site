import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy a Home in Snohomish County | Kim Pelham Real Estate',
  description:
    "Expert buyer representation in Everett, Bothell, Mill Creek & Snohomish. Kim Pelham's 4-step process gets you into the right home at the right price. 17+ years experience.",
  openGraph: {
    title: 'Buy a Home in Snohomish County | Kim Pelham Real Estate',
    description:
      "Expert buyer representation in Everett, Bothell, Mill Creek & Snohomish. Kim Pelham's 4-step process gets you into the right home at the right price. 17+ years experience.",
    images: ['/images/kim-with-client-on-couch.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/buyers',
  },
};

export default function BuyersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thepelhamgroupnw.com" },
              { "@type": "ListItem", "position": 2, "name": "Buy a Home in Snohomish County", "item": "https://thepelhamgroupnw.com/buyers" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much down payment do I really need in Snohomish County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It depends on your loan type. FHA loans require 3.5% down, VA loans require 0% down for qualifying veterans, and Snohomish County has down payment assistance programs offering up to $50,000 for qualifying buyers. Conventional loans typically require 5-20% down. Kim works with trusted local lenders who can help you find the right program for your situation."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between pre-approved and pre-qualified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pre-qualification is a rough estimate based on self-reported information. Pre-approval is a verified review of your credit, income, and assets by a lender. In Snohomish County's competitive market, sellers expect pre-approval letters with offers. Pre-approval takes 3-5 days and costs nothing. Do not make offers without it."
                }
              },
              {
                "@type": "Question",
                "name": "I am moving from out of state. Which Snohomish County neighborhoods should I avoid?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The neighborhood that's not so great is around Casino Road in South Everett. There is also a section of North Everett that has a higher crime rate than other parts of the city. For out-of-state buyers, the best move is to use Google Street View to virtually tour any listing's surrounding blocks before you fly out, you can learn a lot about a neighborhood from a screen before you ever set foot in it. Great entry-point neighborhoods for out-of-state buyers tend to be Silver Lake (Everett), Boulevard Bluffs (Everett), and Lake Stevens. Kim has 17 years of local knowledge and will tell you the truth about any address you are considering."
                }
              },
              {
                "@type": "Question",
                "name": "What happens after I make an offer on a home in Snohomish County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "After your offer is accepted, the typical Snohomish County timeline is around 30 days to closing, 45 days is unusual and usually only happens with complicated financing. Days 1-5: inspection period (inspections happen within the first 5 days; you can negotiate repairs or walk away). Days 7-21: appraisal and underwriting. Days 21-30: loan approval and title work. Final week: final walkthrough and closing. Kim manages every step and keeps you informed throughout."
                }
              },
              {
                "@type": "Question",
                "name": "Is now a good time to buy a home in Snohomish County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As of 2026, Snohomish County has a median home price around $720,000 with roughly 2-3 months of inventory, making it a balanced market. It is a good time to buy if you are pre-approved, planning to stay 5+ years, and are buying the right home at the right price. Timing the market perfectly is less important than buying strategically. Kim will give you an honest read on any home you are considering."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

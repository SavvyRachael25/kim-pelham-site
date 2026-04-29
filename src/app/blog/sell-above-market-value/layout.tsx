import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Sell 5% Above Market Value: Staging + Pricing Framework | Kim Pelham',
  description: 'Kim Pelham achieves a 102.03% sale-to-list ratio in Snohomish County using a three-phase staging framework and strategic pricing. Here\u2019s exactly how it works.',
  openGraph: {
    title: 'How to Sell 5% Above Market Value: The Staging + Pricing Framework That Gets Results in Snohomish County',
    description: 'Kim Pelham achieves a 102.03% sale-to-list ratio in Snohomish County using a three-phase staging framework and strategic pricing. Here\u2019s exactly how it works.',
    images: ['/images/hero-02-warm-kitchen.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/sell-above-market-value' },
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
                "name": "How much does home staging cost in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "For occupied homes in Snohomish County, a professional staging consultation typically runs $200\u2013$400. Full occupied staging, where a stager works with your existing furniture and brings in accent pieces, ranges from $500\u2013$2,000 depending on home size. The return on investment is significant: NAR data shows staged homes sell for 1\u20135% more than unstaged homes, which on a $600,000 home means $6,000\u2013$30,000 in additional proceeds." }
              },
              {
                "@type": "Question",
                "name": "What is a good sale-to-list ratio in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "The Snohomish County market average sale-to-list ratio hovers around 100.2%, meaning most homes sell very close to their asking price. A ratio above 101% indicates the home sold above list price, which typically means strong demand, competitive offers, and a well-executed pricing and presentation strategy. Kim Pelham\u2019s 102.03% average reflects consistent execution across staging, pricing, and marketing." }
              },
              {
                "@type": "Question",
                "name": "Does staging really help sell a home faster?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Staged homes sell measurably faster than unstaged homes. The National Association of Realtors reports that 81% of buyers\u2019 agents say staging makes it easier for buyers to visualize the property as their future home. Homes that are decluttered, neutralized, and properly furnished create an emotional connection that drives faster decisions and stronger offers. Kim Pelham has personally experienced this: one home that sat on the market for 69 days sold in 3 days after she staged it, for $5,000 more than the previous listing." }
              },
              {
                "@type": "Question",
                "name": "How does strategic pricing lead to a higher final sale price?",
                "acceptedAnswer": { "@type": "Answer", "text": "When a home is priced at or slightly below its true market value, it attracts more buyers simultaneously. More buyers touring the same home in the same window creates competition. Competing buyers submit escalating offers, which drives the final price above asking. Homes priced above market see fewer showings, accumulate days on market, and ultimately sell for less. The goal of strategic pricing is not to leave money on the table but to create the competitive conditions that push price up." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to stage a home before listing in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most occupied home staging in Snohomish County can be completed in one to two weeks. The timeline depends on how much decluttering is needed, whether furniture needs to be rearranged, and whether accent pieces need to be sourced. Kim Pelham typically begins the staging process 2\u20134 weeks before a home lists so that photography can be completed and the home is fully ready on day one." }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sale-to-List Ratio in Snohomish County Explained | Kim Pelham',
  description: "What is a sale-to-list ratio and why does Kim Pelham's 102.3% matter? Here's what this number tells you about who to trust with your Snohomish County home sale.",
  openGraph: {
    title: "Sale-to-List Ratio in Snohomish County Explained",
    description: "What is a sale-to-list ratio and why does Kim Pelham's 102.3% matter? Here's what this number tells you about who to trust with your Snohomish County home sale.",
    images: ['/images/property-01-everett-home-exterior.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/sale-to-list-ratio' },
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
                "name": "What is a good sale-to-list ratio in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "In Snohomish County, a sale-to-list ratio between 100–102% is considered strong, meaning the home sold at or slightly above asking price. A ratio above 102% is very strong and typically indicates multiple offers. A ratio of 102% or higher — like Kim Pelham's 102.3% average — is exceptional and reflects a consistent process of strategic pricing and competitive buyer demand generation." }
              },
              {
                "@type": "Question",
                "name": "How do I sell my house above asking price in Washington State?",
                "acceptedAnswer": { "@type": "Answer", "text": "Selling above asking price in Washington State requires three things: pricing strategically (at or slightly below market to attract maximum buyer traffic), presenting professionally (staging, photography, targeted marketing), and timing your launch to create simultaneous buyer competition. The goal is multiple offers in the first 72 hours. When buyers compete, prices rise above list." }
              },
              {
                "@type": "Question",
                "name": "What does it mean if a home sells below list price?",
                "acceptedAnswer": { "@type": "Answer", "text": "A home selling below its original list price typically signals that it was overpriced, sat on the market too long, or had condition issues that required negotiated price reductions. In Snohomish County, homes that linger past 30 days often sell 3–5% below original list price. A sale-to-list ratio below 97% usually indicates the listing had one or more of these challenges." }
              },
              {
                "@type": "Question",
                "name": "How is sale-to-list ratio calculated?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sale-to-list ratio is calculated by dividing the final sale price by the original list price and multiplying by 100. Example: a home listed at $550,000 that sells for $572,000 has a sale-to-list ratio of 104%. Always ask whether an agent's stated ratio is based on the original list price or the final list price after any reductions — original list price is the more meaningful metric." }
              },
              {
                "@type": "Question",
                "name": "Why does sale-to-list ratio matter more than commission rate?",
                "acceptedAnswer": { "@type": "Answer", "text": "A lower commission rate saves you money on paper, but a lower sale-to-list ratio costs you far more at closing. A broker charging 1% less commission who consistently sells at 98% of list costs a seller on a $700,000 home $14,000 in foregone proceeds — versus saving $7,000 on commission. A broker with a 104% ratio nets you $28,000 more than list. The ratio is a better predictor of net proceeds than commission rate." }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

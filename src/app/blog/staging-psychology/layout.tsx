import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Staging Psychology: Why Buyers Buy the Feeling | Kim Pelham',
  description: 'Learn why home staging works in Snohomish County, and how the psychology behind it can add thousands to your sale price in Everett, Mill Creek, and beyond.',
  openGraph: {
    title: 'Home Staging Psychology: Why Buyers Buy the Feeling',
    description: 'Learn why home staging works in Snohomish County, and how the psychology behind it can add thousands to your sale price in Everett, Mill Creek, and beyond.',
    images: ['/images/staging-01-living-room.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/staging-psychology' },
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
                "name": "Does home staging really increase sale price in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Staged homes in Snohomish County and across the Pacific Northwest consistently sell for 1 to 5% more than comparable unstaged homes, according to the National Association of Realtors. On a $650,000 home, that's $6,500 to $32,500 in additional proceeds, significantly more than the typical $1,500 to $3,000 staging investment. Staged homes also spend 73% fewer days on market, which reduces carrying costs and seller stress." }
              },
              {
                "@type": "Question",
                "name": "What are the most important rooms to stage when selling a home?",
                "acceptedAnswer": { "@type": "Answer", "text": "The three highest-impact rooms to stage are the living room, primary bedroom, and kitchen. These are the rooms buyers spend the most time in during showings and the rooms that most directly answer the emotional questions buyers are subconsciously asking: 'Can I relax here?' 'Is this a real retreat?' 'Is this kitchen functional for my life?' If budget is limited, focus on these three rooms first." }
              },
              {
                "@type": "Question",
                "name": "How much does home staging cost in the Everett WA area?",
                "acceptedAnswer": { "@type": "Answer", "text": "Physical home staging in the Everett and Snohomish County area typically costs $1,500 to $4,000 for an occupied home (consultant plus key rooms) or $3,000 to $8,000 for a vacant home with furniture rental. Virtual staging for photos runs $75 to $150 per room. Most sellers recoup the investment many times over in final sale price and reduced days on market." }
              },
              {
                "@type": "Question",
                "name": "What is depersonalization in home staging?",
                "acceptedAnswer": { "@type": "Answer", "text": "Depersonalization is the process of removing personal items, family photos, trophies, religious items, personalized decor, from a home before listing. The goal is to allow buyers to emotionally project themselves into the space. Research shows that buyers have difficulty visualizing themselves living in a home when it is strongly identified with someone else's life and personality." }
              },
              {
                "@type": "Question",
                "name": "Should I stage my home if I'm selling in a seller's market?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, especially in a seller's market. In competitive Snohomish County markets like Mill Creek, Bothell, and Lake Stevens, staging is what converts interest into multiple offers. A seller's market means more buyers competing for the same home. Staging amplifies that competition by maximizing emotional appeal, which is how you go from one good offer to three competing offers and a final price well above list." }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

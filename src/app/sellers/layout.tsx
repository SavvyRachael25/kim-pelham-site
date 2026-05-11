import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Home in Snohomish County | 102.3% Sale-to-List Ratio',
  description:
    "Kim Pelham's 6-step selling system consistently achieves 102.3% sale-to-list ratio vs. the 100.2% NWMLS market average. Serving Everett, Bothell, Mill Creek & more.",
  openGraph: {
    title: 'Sell Your Home in Snohomish County | 102.3% Sale-to-List Ratio',
    description:
      "Kim Pelham's 6-step selling system consistently achieves 102.3% sale-to-list ratio vs. the 100.2% NWMLS market average. Serving Everett, Bothell, Mill Creek & more.",
    images: ['/images/kim-headshot-msh.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/sellers',
  },
};

export default function SellersLayout({ children }: { children: React.ReactNode }) {
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
              { "@type": "ListItem", "position": 2, "name": "Sell Your Home", "item": "https://thepelhamgroupnw.com/sellers" }
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
                "name": "How much should I invest in repairs before selling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The answer is it really depends on what needs to be done to the house. If you have issues that would prevent the house from being financed, those need to be addressed up front and will net you the highest return. Kim will tell you exactly which repairs move the needle on your sale price and which ones to skip."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to sell a home in Snohomish County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Snohomish County average is 21-28 days to a pending offer. Kim's clients average 14 days. The gap comes down to staging and strategic pricing. Homes that are well-staged and correctly priced consistently go under contract in the first two weeks, often with multiple offers."
                }
              },
              {
                "@type": "Question",
                "name": "Should I stage my home if I am still living in it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Occupied staging is Kim's specialty. She works around your life, not against it. Cost for occupied staging in Snohomish County typically runs $500-2,000 and delivers 10-15x return on investment. You do not need to move out or store your furniture. Kim stages around what you have."
                }
              },
              {
                "@type": "Question",
                "name": "What will I actually net after commissions and closing costs when I sell?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Total seller costs in Washington typically include 5-6% broker commission plus approximately 2% in closing costs (title, escrow, transfer tax). If you have owned the home longer than 2 years, you may exclude up to $250,000 in capital gains (single) or $500,000 (married). Kim provides a detailed net sheet before you list so there are no surprises."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if my home is in a flood-risk zone in Snohomish County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kim knows which Snohomish County streets and neighborhoods have flood history and which FEMA flood zones affect local properties. She will show you the flood maps, explain any disclosure requirements, and price your home accordingly. This is the kind of hyper-local knowledge that protects sellers from liability and helps buyers make informed decisions."
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

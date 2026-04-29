import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Staging Beats Price Cuts: A Snohomish County Broker\u2019s Data-Driven Case | Kim Pelham',
  description: 'Kim Pelham\u2019s 102.03% sale-to-list ratio proves it: staging a home before selling consistently outperforms price cuts in Snohomish County. Here\u2019s the math.',
  openGraph: {
    title: 'Why Staging Beats Price Cuts: A Snohomish County Broker\u2019s Data-Driven Case',
    description: 'Kim Pelham\u2019s 102.03% sale-to-list ratio proves it: staging a home before selling consistently outperforms price cuts in Snohomish County. Here\u2019s the math.',
    images: ['/images/hero-02-warm-kitchen.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/blog/staging-beats-price-cuts' },
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
                "name": "Does staging really help sell a home for more money?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Staged homes in Snohomish County sell for a higher percentage of asking price than non-staged homes. Kim Pelham\u2019s average sale-to-list ratio is 102.03% vs 100.2% for the NWMLS market. The difference on a $600,000 home is over $10,000." }
              },
              {
                "@type": "Question",
                "name": "Is it better to lower my price or stage my home before selling?",
                "acceptedAnswer": { "@type": "Answer", "text": "Almost always stage first. A 3% price reduction on a $600,000 home costs $18,000. Professional staging costs $500\u20132,000. The math strongly favors staging. Lower the price only if the home is correctly staged and has sat on the market for 4+ weeks with strong showing traffic but no offers." }
              },
              {
                "@type": "Question",
                "name": "What is the ROI of home staging?",
                "acceptedAnswer": { "@type": "Answer", "text": "The National Association of Realtors reports that 81% of buyer brokers say staging helps buyers visualize a home as theirs. Staged homes sell 30\u201350% faster and consistently command higher final prices. Kim\u2019s 102.03% sale-to-list ratio reflects this in her actual client results." }
              },
              {
                "@type": "Question",
                "name": "How much does home staging cost in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "A staging consultation runs $200\u2013400. Hands-on staging implementation for an occupied home typically costs $500\u20132,000 depending on size. Kim stages homes herself and includes staging in her selling strategy, so many clients do not pay separately for staging implementation." }
              },
              {
                "@type": "Question",
                "name": "When should I lower my home\u2019s price instead of staging it?",
                "acceptedAnswer": { "@type": "Answer", "text": "Lower the price when: the home has been correctly staged, professionally photographed, and actively marketed for 4+ weeks with strong showing traffic but zero offers. Lack of showings is usually a pricing problem. Showings with no offers can also be a pricing problem. Kim will diagnose the real issue honestly." }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

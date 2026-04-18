import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Neighborhoods in Everett WA: An Honest Buyer\'s Guide | Kim Pelham',
  description: "Kim Pelham has sold 50+ homes in Everett over 17 years. Here's the real story on Everett neighborhoods: which ones flood, which have the best schools, and where first-time buyers actually end up happy.",
  openGraph: {
    title: 'Best Neighborhoods in Everett WA: An Honest Buyer\u2019s Guide',
    description: "Kim Pelham has sold 50+ homes in Everett over 17 years. Here\u2019s the real story on Everett neighborhoods: which ones flood, which have the best schools, and where first-time buyers actually end up happy.",
    images: ['/images/property-01-everett-home-exterior.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://kim-pelham-site.vercel.app/blog/everett-neighborhoods-buyers-guide' },
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
                "name": "What is the best neighborhood in Everett WA for families?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Silver Lake area consistently rates as best for families in Everett. Good school feeder, the lake itself, quieter streets, and entry-level to mid-tier pricing."
                }
              },
              {
                "@type": "Question",
                "name": "Which Everett neighborhoods have the best schools?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Schools in the Silver Lake and Boulevard Bluffs areas tend to have higher ratings. South Everett schools serve tougher demographics. School ratings change; always check GreatSchools.org for current data."
                }
              },
              {
                "@type": "Question",
                "name": "Do any Everett neighborhoods flood?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Areas near the Snohomish River delta and low-lying corridors in north and west Everett can experience flooding during heavy November-December rain events. Always check FEMA flood maps before buying. Kim knows which specific streets have flood history."
                }
              },
              {
                "@type": "Question",
                "name": "Is Everett WA a good place for first-time home buyers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Everett offers significantly lower entry prices than Seattle or Bellevue, Boeing employment stability, and strong transit to downtown Seattle via Sounder train. Silver Lake and Boulevard Bluffs are the most common first-buy neighborhoods."
                }
              },
              {
                "@type": "Question",
                "name": "How far is Everett from Seattle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "30 miles north of Seattle. About 35-50 minutes by car on I-5 in normal traffic, or 58-70 minutes by Sounder commuter rail from Everett Station to King Street Station. Traffic on I-5 heading south during morning commute is significant."
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

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living in Everett, WA | Real Estate Guide | Kim Pelham',
  description: 'Thinking about buying in Everett, WA? Insider guide to Everett real estate — median home prices, best neighborhoods, school districts, commute times, and local secrets most agents won\'t tell you.',
  keywords: ['Everett WA real estate', 'homes for sale Everett WA', 'Everett neighborhoods', 'Everett school district', 'buying a home Everett Washington', 'Snohomish County real estate'],
  openGraph: {
    title: 'Living in Everett, WA | Kim Pelham Real Estate',
    description: 'Insider guide to Everett neighborhoods, schools, market stats, and what it\'s actually like to live there.',
    url: 'https://kim-pelham-site.vercel.app/neighborhoods/everett',
  },
};

export default function EverettLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Everett, WA",
            "description": "Snohomish County's largest city — waterfront community with urban energy, Boeing heritage, and some of the most affordable home prices in the Seattle metro.",
            "containedInPlace": { "@type": "State", "name": "Washington" },
            "geo": { "@type": "GeoCoordinates", "latitude": 47.9790, "longitude": -122.2021 },
            "url": "https://kim-pelham-site.vercel.app/neighborhoods/everett"
          })
        }}
      />
      {children}
    </>
  );
}

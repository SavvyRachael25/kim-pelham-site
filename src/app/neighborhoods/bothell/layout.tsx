import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living in Bothell, WA | Real Estate Guide | Kim Pelham',
  description: 'Bothell, WA real estate insider guide  -  the Northshore School District advantage, downtown revival, tech corridor access, and what $1M+ actually buys you here.',
  keywords: ['Bothell WA real estate', 'homes for sale Bothell WA', 'Northshore School District', 'Bothell neighborhoods', 'buying a home Bothell Washington', 'Snohomish County real estate'],
  openGraph: {
    title: 'Living in Bothell, WA | Kim Pelham Real Estate',
    description: 'Insider guide to Bothell neighborhoods, schools, market stats, and what it\'s actually like to live there.',
    url: 'https://kim-pelham-site.vercel.app/neighborhoods/bothell',
  },
};

export default function BothellLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Bothell, WA",
            "description": "A revitalized suburb bridging King and Snohomish Counties  -  top-ranked Northshore schools, walkable downtown, and close proximity to Eastside tech employers.",
            "containedInPlace": { "@type": "State", "name": "Washington" },
            "geo": { "@type": "GeoCoordinates", "latitude": 47.7601, "longitude": -122.2054 },
            "url": "https://kim-pelham-site.vercel.app/neighborhoods/bothell"
          })
        }}
      />
      {children}
    </>
  );
}

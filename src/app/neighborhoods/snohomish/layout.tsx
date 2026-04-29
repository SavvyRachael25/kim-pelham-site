import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living in Snohomish, WA | Real Estate Guide | Kim Pelham',
  description: 'Snohomish, WA real estate guide  -  the Antique Capital of the Northwest, riverside living, above-average schools, and the kind of small-town character that\'s genuinely hard to find.',
  keywords: ['Snohomish WA real estate', 'homes for sale Snohomish WA', 'Snohomish neighborhoods', 'Snohomish School District', 'historic homes Snohomish', 'Snohomish County real estate'],
  openGraph: {
    title: 'Living in Snohomish, WA | Kim Pelham Real Estate',
    description: 'Insider guide to Snohomish  -  the most charming city in the county.',
    url: 'https://thepelhamgroupnw.com/neighborhoods/snohomish',
  },
};

export default function SnohomishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Snohomish, WA",
            "description": "The Antique Capital of the Northwest  -  a charming riverfront city with Victorian homes, award-winning schools, trail access, and genuine small-town character.",
            "containedInPlace": { "@type": "State", "name": "Washington" },
            "geo": { "@type": "GeoCoordinates", "latitude": 47.9126, "longitude": -122.0984 },
            "url": "https://thepelhamgroupnw.com/neighborhoods/snohomish"
          })
        }}
      />
      {children}
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living in Mill Creek, WA | Real Estate Guide | Kim Pelham',
  description: 'Mill Creek, WA real estate insider guide  -  Henry M. Jackson High School, 23 miles of trails, the planned community that actually worked, and what $1M buys you here.',
  keywords: ['Mill Creek WA real estate', 'homes for sale Mill Creek WA', 'Henry Jackson High School Mill Creek', 'Mill Creek neighborhoods', 'buying a home Mill Creek Washington', 'Snohomish County real estate'],
  openGraph: {
    title: 'Living in Mill Creek, WA | Kim Pelham Real Estate',
    description: 'Insider guide to Mill Creek  -  Snohomish County\'s most polished suburb.',
    url: 'https://thepelhamgroupnw.com/neighborhoods/mill-creek',
  },
};

export default function MillCreekLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Mill Creek, WA",
            "description": "Snohomish County's premier planned community  -  5-star rated schools, 23 miles of trails, and a Town Center that actually draws people out of their houses.",
            "containedInPlace": { "@type": "State", "name": "Washington" },
            "geo": { "@type": "GeoCoordinates", "latitude": 47.8601, "longitude": -122.2043 },
            "url": "https://thepelhamgroupnw.com/neighborhoods/mill-creek"
          })
        }}
      />
      {children}
    </>
  );
}

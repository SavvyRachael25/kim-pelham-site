import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living in Marysville, WA | Real Estate Guide | Kim Pelham',
  description: 'Marysville, WA real estate guide  -  Snohomish County\'s best value market, Tulalip Bay waterfront access, the honest truth about the schools, and who this city is actually right for.',
  keywords: ['Marysville WA real estate', 'homes for sale Marysville WA', 'Marysville neighborhoods', 'affordable homes Snohomish County', 'buying a home Marysville Washington', 'Tulalip real estate'],
  openGraph: {
    title: 'Living in Marysville, WA | Kim Pelham Real Estate',
    description: 'Insider guide to Marysville  -  the best value in Snohomish County.',
    url: 'https://kim-pelham-site.vercel.app/neighborhoods/marysville',
  },
};

export default function MarysvilleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Marysville, WA",
            "description": "Snohomish County's second-largest city and best-value market  -  spacious lots, Puget Sound waterfront access, and the Tulalip Resort just down the road.",
            "containedInPlace": { "@type": "State", "name": "Washington" },
            "geo": { "@type": "GeoCoordinates", "latitude": 48.0512, "longitude": -122.1771 },
            "url": "https://kim-pelham-site.vercel.app/neighborhoods/marysville"
          })
        }}
      />
      {children}
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Living in Lake Stevens, WA | Real Estate Guide | Kim Pelham',
  description: 'Lake Stevens, WA real estate guide — the largest lake in Snohomish County, one of the fastest-growing cities in WA, top-rated schools, and what it\'s really like to live on the water.',
  keywords: ['Lake Stevens WA real estate', 'homes for sale Lake Stevens WA', 'Lake Stevens School District', 'waterfront homes Lake Stevens', 'buying a home Lake Stevens Washington', 'Snohomish County real estate'],
  openGraph: {
    title: 'Living in Lake Stevens, WA | Kim Pelham Real Estate',
    description: 'Insider guide to Lake Stevens — waterfront living, top schools, and real value.',
    url: 'https://kim-pelham-site.vercel.app/neighborhoods/lake-stevens',
  },
};

export default function LakeStevensLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            "name": "Lake Stevens, WA",
            "description": "One of the fastest-growing cities in Snohomish County — home to the county's largest lake, the #2-ranked school district, and serious new construction value.",
            "containedInPlace": { "@type": "State", "name": "Washington" },
            "geo": { "@type": "GeoCoordinates", "latitude": 48.0134, "longitude": -122.0643 },
            "url": "https://kim-pelham-site.vercel.app/neighborhoods/lake-stevens"
          })
        }}
      />
      {children}
    </>
  );
}

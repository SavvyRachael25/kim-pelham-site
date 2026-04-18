import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1406 Potlatch Beach Road, Tulalip WA | Waterfront Home | Kim Pelham',
  description:
    'Waterfront home on Potlatch Beach Road in Tulalip, WA. Sweeping Sound vistas, 3 bed/1 bath, 1,662 sqft on 0.36 acres. Listed by Kim Pelham, The Pelham Group NW. Call (425) 250-9422.',
  openGraph: {
    title: '1406 Potlatch Beach Road, Tulalip WA — Waterfront | Kim Pelham',
    description:
      'High-bank waterfront on Puget Sound. 3 bed / 1 bath / 1,662 sqft / 0.36 acres. Built 1925. Sweeping sunset vistas. Listed by Kim Pelham, The Pelham Group NW.',
    images: [{ url: '/images/property-03-lake-stevens-waterfront.jpg', width: 1200, height: 630 }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
  },
};

export default function PotlatchLayout({ children }: { children: React.ReactNode }) {
  const listingSchema = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: '1406 Potlatch Beach Road',
    description:
      'High-bank waterfront home on Puget Sound in Tulalip, WA. 3 bedrooms, 1 bathroom, 1,662 square feet on a 0.36-acre lot. Built in 1925 with wood/lap siding, detached garage, and sweeping Sound sunset views.',
    url: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1406 Potlatch Beach Road',
      addressLocality: 'Tulalip',
      addressRegion: 'WA',
      postalCode: '98271',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.0626,
      longitude: -122.2907,
    },
    numberOfRooms: 3,
    numberOfBathroomsTotal: 1,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 1662,
      unitCode: 'FTK',
    },
    yearBuilt: 1925,
    offers: {
      '@type': 'Offer',
      price: 950000,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Kim Pelham',
        telephone: '+14252509422',
        url: 'https://thepelhamgroupnw.com',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: 'https://thepelhamgroupnw.com/properties' },
      {
        '@type': 'ListItem',
        position: 3,
        name: '1406 Potlatch Beach Road, Tulalip',
        item: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}

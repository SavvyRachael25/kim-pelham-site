import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1406 Potlatch Beach Road, Marysville WA | Waterfront Home | Kim Pelham',
  description:
    'High-bank waterfront on Puget Sound. 3 bed + 2 bonus rooms / 2 bath / 1,662 sqft / 0.36 acres. Hot tub, gazebo, orcas, Olympic views. $950K. Listed by Kim Pelham, The Pelham Group NW.',
  openGraph: {
    title: 'A $3M View for Under $1M | 1406 Potlatch Beach Road — Waterfront Tulalip',
    description:
      'High-bank waterfront on Puget Sound. 3 bed + 2 bonus rooms / 2 bath / 1,662 sqft. Hot tub, gazebo, orcas, Olympic Mountains. $950K. Listed by Kim Pelham.',
    images: [{ url: '/images/potlatch-03-sound-view.jpg', width: 1536, height: 673 }],
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
      'High-bank waterfront home on Puget Sound in Marysville, WA. 3 bedrooms plus 2 bonus rooms, 2 bathrooms, 1,662 square feet on a 0.36-acre lot. Hot tub, gazebo, 50 feet of waterfront, Olympic Mountain and Mt. Rainier views. Built in 1925, meticulously maintained.',
    url: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1406 Potlatch Beach Road',
      addressLocality: 'Marysville',
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
    numberOfBathroomsTotal: 2,
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

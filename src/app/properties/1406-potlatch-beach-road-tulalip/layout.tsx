import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1406 Potlatch Beach Road, Marysville WA 98271 | Waterfront Home | The Pelham Group NW',
  description:
    '50 feet of high-bank Puget Sound waterfront. 3 bedrooms + 2 bonus rooms, 2 ensuite bathrooms, 1,662 sqft on 0.36 acres. $899,900. MLS# 2504310. Contact Kim Pelham (425) 250-9422.',
  openGraph: {
    title: 'A $3M View for Under $1M | 1406 Potlatch Beach Road — Waterfront Marysville',
    description:
      '50 feet of high-bank Puget Sound waterfront. 3 bedrooms + 2 bonus rooms, 2 ensuite bathrooms, 1,662 sqft on 0.36 acres. $899,900. MLS# 2504310.',
    images: [{ url: '/images/potlatch-brien-sunset-og.jpg', width: 1200, height: 630 }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1406 Potlatch Beach Road, Marysville WA 98271 | Waterfront Home | The Pelham Group NW',
    description:
      '50 feet of high-bank Puget Sound waterfront. 3 bedrooms + 2 bonus rooms, 2 ensuite bathrooms, 1,662 sqft on 0.36 acres. $899,900. MLS# 2504310.',
    images: ['/images/potlatch-brien-sunset-og.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
  },
};

export default function PotlatchLayout({ children }: { children: React.ReactNode }) {
  // RealEstateListing schema (AEO — answers "what is this listing")
  const listingSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: '1406 Potlatch Beach Road, Marysville WA 98271',
    description:
      '50 feet of high-bank Puget Sound waterfront. 3 bedrooms plus 2 bonus rooms, 2 ensuite bathrooms, 1,662 square feet on a 0.36-acre lot. Built 1925, meticulously maintained. Hot tub, gazebo, panoramic Sound, island, and Olympic Mountain views. $899,900. MLS# 2504310.',
    url: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
    image: [
      'https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg',
      'https://thepelhamgroupnw.com/images/potlatch-01-aerial.jpg',
      'https://thepelhamgroupnw.com/images/potlatch-02-exterior.jpg',
      'https://thepelhamgroupnw.com/images/potlatch-03-sound-view.jpg',
    ],
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
    numberOfRooms: 5,
    numberOfBathroomsTotal: 2,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 1662,
      unitCode: 'FTK',
    },
    lotSize: {
      '@type': 'QuantitativeValue',
      value: 0.36,
      unitText: 'acres',
    },
    yearBuilt: 1925,
    offers: {
      '@type': 'Offer',
      price: 899900,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Kim Pelham',
        telephone: '+14252509422',
        url: 'https://thepelhamgroupnw.com',
        worksFor: {
          '@type': 'RealEstateAgent',
          name: 'The Pelham Group NW',
        },
      },
    },
  };

  // BreadcrumbList schema (GEO — helps AI and search engines understand site hierarchy)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: 'https://thepelhamgroupnw.com/properties' },
      {
        '@type': 'ListItem',
        position: 3,
        name: '1406 Potlatch Beach Road',
        item: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
      },
    ],
  };

  // Open House Event schema (GEO — surfaces in Google "Events near me" and Local Pack)
  const openHouseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Open House — 1406 Potlatch Beach Road, Marysville WA',
    description:
      'Public open house at 1406 Potlatch Beach Road, Marysville WA — a $899,900 high-bank Puget Sound waterfront home with 50 feet of frontage, 3 bedrooms plus 2 bonus rooms, 1,662 square feet, panoramic Sound and Olympic Mountain views. Hosted by Kim Pelham, The Pelham Group NW. Walk through, ask questions, no appointment needed.',
    startDate: '2026-05-03T13:00:00-07:00',
    endDate: '2026-05-03T15:00:00-07:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: '1406 Potlatch Beach Road',
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
    },
    organizer: {
      '@type': 'RealEstateAgent',
      name: 'Kim Pelham',
      telephone: '+14252509422',
      url: 'https://thepelhamgroupnw.com',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://thepelhamgroupnw.com/properties/1406-potlatch-beach-road-tulalip',
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-04-29T00:00:00-07:00',
    },
    image: ['https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg'],
  };

  // FAQPage schema (AEO — surfaces in AI answer engines and Google FAQ rich results)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'When is the open house at 1406 Potlatch Beach Road?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The next open house at 1406 Potlatch Beach Road, Marysville WA is Sunday, May 3, 2026 from 1:00 PM to 3:00 PM. No appointment needed. Hosted by Kim Pelham, The Pelham Group NW. Text Kim at (425) 250-9422 if you plan to attend.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much is 1406 Potlatch Beach Road?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1406 Potlatch Beach Road is listed at $899,900. This waterfront home offers 1,662 square feet, 3 bedrooms plus 2 bonus rooms, 2 bathrooms, and 50 feet of high-bank Puget Sound frontage on 0.36 acres in Marysville, WA. MLS# 2504310.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many bedrooms does 1406 Potlatch Beach Road have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1406 Potlatch Beach Road has 3 bedrooms plus 2 additional bonus rooms, for 5 flexible rooms total. Two of the bedrooms are ensuites with private 3/4 bathrooms. The bonus rooms work well as a home office, creative studio, or guest accommodations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 1406 Potlatch Beach Road waterfront?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. 1406 Potlatch Beach Road sits on 50 feet of high-bank Puget Sound waterfront in the Tulalip area of Marysville, Washington. Views include the Sound, nearby islands, the Olympic Mountains to the west, and Mt. Rainier to the south on clear days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the listing agent for 1406 Potlatch Beach Road?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate in Snohomish County, WA. Kim has 17+ years of experience and can be reached at (425) 250-9422.',
        },
      },
      {
        '@type': 'Question',
        name: 'What school district is 1406 Potlatch Beach Road in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1406 Potlatch Beach Road is located in the Marysville School District in Snohomish County, Washington.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(openHouseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}

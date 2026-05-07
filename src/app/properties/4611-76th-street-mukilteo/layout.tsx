import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '4611 76th St SW, Mukilteo WA 98275 | Multi-Gen Home | The Pelham Group NW',
  description:
    'Fully remodeled 1976 NW Contemporary on a 10,454 sqft fenced corner lot. 4 bed + office, 2.25 bath, 2,605 sqft. Full downstairs kitchenette — lives like two homes in one. $975,000. MLS# NWM2513590. Contact Kim Pelham (425) 250-9422.',
  openGraph: {
    title: 'Two homes in one. | 4611 76th St SW — Mukilteo Multi-Gen Contemporary',
    description:
      'Fully remodeled 1976 NW Contemporary on a 10,454 sqft fenced corner lot. 4 bed + office, 2.25 bath, 2,605 sqft. Full downstairs kitchenette. $975,000. MLS# NWM2513590.',
    images: [{ url: '/images/mukilteo-03-olympic-sunset.jpg', width: 1200, height: 630 }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/properties/4611-76th-street-mukilteo',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4611 76th St SW, Mukilteo WA 98275 | Multi-Gen Home | The Pelham Group NW',
    description:
      'Fully remodeled 1976 NW Contemporary on a 10,454 sqft fenced corner lot. 4 bed + office, 2.25 bath, 2,605 sqft. Full downstairs kitchenette. $975,000. MLS# NWM2513590.',
    images: ['/images/mukilteo-03-olympic-sunset.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/properties/4611-76th-street-mukilteo',
  },
};

export default function MukilteoLayout({ children }: { children: React.ReactNode }) {
  // RealEstateListing schema (AEO — answers "what is this listing")
  const listingSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: '4611 76th Street SW, Mukilteo WA 98275',
    description:
      'Fully remodeled 1976 NW Contemporary on a 10,454 sqft fenced corner lot in Mukilteo. 4 bedrooms plus office, 2.25 bathrooms, 2,605 square feet. Quartz kitchen, walk-in primary closet, three decks with Olympic Mountain views, hot tub. Full downstairs kitchenette plus family room, bath, and bedroom for multi-generational living. RV parking, gas grill hookup, mature rose garden. One-minute walk to Japanese Gulch trails. $975,000. MLS# NWM2513590.',
    url: 'https://thepelhamgroupnw.com/properties/4611-76th-street-mukilteo',
    image: [
      'https://thepelhamgroupnw.com/images/mukilteo-01-front-exterior.jpg',
      'https://thepelhamgroupnw.com/images/mukilteo-03-olympic-sunset.jpg',
      'https://thepelhamgroupnw.com/images/mukilteo-04-great-room.jpg',
      'https://thepelhamgroupnw.com/images/mukilteo-05-kitchen-view.jpg',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4611 76th Street SW',
      addressLocality: 'Mukilteo',
      addressRegion: 'WA',
      postalCode: '98275',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.9579,
      longitude: -122.3046,
    },
    numberOfRooms: 5,
    numberOfBathroomsTotal: 2.25,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 2605,
      unitCode: 'FTK',
    },
    lotSize: {
      '@type': 'QuantitativeValue',
      value: 10454,
      unitText: 'square feet',
    },
    yearBuilt: 1976,
    offers: {
      '@type': 'Offer',
      price: 975000,
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

  // BreadcrumbList schema (GEO)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: 'https://thepelhamgroupnw.com/properties' },
      {
        '@type': 'ListItem',
        position: 3,
        name: '4611 76th Street SW',
        item: 'https://thepelhamgroupnw.com/properties/4611-76th-street-mukilteo',
      },
    ],
  };

  // FAQPage schema (AEO)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much is 4611 76th Street SW in Mukilteo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '4611 76th Street SW is listed at $975,000. The home offers 2,605 square feet, 4 bedrooms plus an office, 2.25 bathrooms, and a full downstairs kitchenette on a 10,454 sqft fenced corner lot in Mukilteo, WA 98275. MLS# NWM2513590.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 4611 76th Street SW set up for multi-generational living?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The lower level has a full kitchenette plus a family room, full bath, and a fourth bedroom — so the whole downstairs lives like a separate residence. It works for two generations under one roof, an adult child landing back home, a long-term guest, or a short-term rental where zoning allows.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many bedrooms does 4611 76th Street SW have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The home has 4 bedrooms plus an office, for 5 flexible rooms total. Per MLS measurements. The office adds a fifth flex space useful for remote work or a guest room.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there showings or open houses at 4611 76th Street SW?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Showings are by appointment. Text or call Kim Pelham at (425) 250-9422 to schedule a walk-through. Times are flexible — weekday evenings and weekends both work.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the listing agent for 4611 76th Street SW?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate in Snohomish County, WA. Kim has 17+ years of experience and can be reached at (425) 250-9422.',
        },
      },
      {
        '@type': 'Question',
        name: 'What school district is 4611 76th Street SW in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '4611 76th Street SW is in the Mukilteo School District in Snohomish County, Washington.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}

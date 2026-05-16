import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '4611 76th St SW, Mukilteo WA 98275 | Olympic Mountain View Home | The Pelham Group NW',
  description:
    '1976 NW Contemporary remodeled around the Olympic Mountain view — half-wall cut in the office to see it from your desk. 4 bed + office, 2.25 bath, 2,605 sqft on a 10,454 sqft fenced corner lot. $975,000. MLS# NWM2513590. Contact Kim Pelham (425) 250-9422.',
  openGraph: {
    title: 'Remodeled around the view. | 4611 76th St SW — Mukilteo Olympic Mountain Home',
    description:
      '1976 NW Contemporary remodeled around the Olympic Mountain view. Three decks, half-wall cut in the office to bring the view to the desk. 4 bed + office, 2.25 bath, 2,605 sqft. $975,000. MLS# NWM2513590.',
    images: [{ url: '/images/mukilteo-og-2026-05.jpg', width: 1200, height: 630 }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/properties/4611-76th-street-mukilteo',
  },
  twitter: {
    card: 'summary_large_image',
    title: '4611 76th St SW, Mukilteo WA 98275 | Olympic Mountain View Home | The Pelham Group NW',
    description:
      '1976 NW Contemporary remodeled around the Olympic Mountain view. 4 bed + office, 2.25 bath, 2,605 sqft. $975,000. MLS# NWM2513590.',
    images: ['/images/mukilteo-og-2026-05.jpg'],
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
      '1976 NW Contemporary in Mukilteo, fully remodeled around the Olympic Mountain view — even the office had half a wall cut to bring the view to the desk. 4 bedrooms plus office (two upstairs, two downstairs), 2.25 bathrooms, 2,605 square feet on a 10,454 sqft fenced corner lot. Quartz kitchen, Fisher & Paykel appliances, walk-in primary closet, three decks (one with hot tub, one with gas grill hookup). Lower level has family room, wet bar (microwave), and full bath supporting multi-generational use. RV parking, mature rose garden. One-minute walk to Japanese Gulch trails. $975,000. MLS# NWM2513590.',
    url: 'https://thepelhamgroupnw.com/properties/4611-76th-street-mukilteo',
    image: [
      'https://thepelhamgroupnw.com/images/mukilteo-01-front-exterior.jpg',
      'https://thepelhamgroupnw.com/images/mukilteo-og-2026-05.jpg',
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
        name: 'What makes 4611 76th Street SW special?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The previous owner remodeled the house around the Olympic Mountain view to the west. The home is positioned so the view comes through from the kitchen, great room, primary bedroom, and all three decks — and they cut half a wall in the office so you can see the mountains from your desk. Combined with a top-to-bottom interior remodel (quartz, Fisher & Paykel appliances, walk-in primary closet) and a flexible downstairs layout that supports multi-generational living.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can 4611 76th Street SW work for multi-generational living?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The lower level has the 3rd and 4th bedrooms, a family room, a full bath, and a wet bar with a microwave (no cooktop) — comfortable for an adult child landing back home, a long-term guest, or a parent moving in. It is not a fully separate ADU but it gives independent living space without needing to renovate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many bedrooms does 4611 76th Street SW have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '4 bedrooms plus an office (5 flexible rooms total). Two bedrooms upstairs and two downstairs. Per MLS measurements.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the open house at 4611 76th Street SW?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The next open house at 4611 76th Street SW, Mukilteo WA is Saturday, May 16, 2026 from 1:00 PM to 4:00 PM. No appointment needed. Walk through, see the Olympic Mountain view from every room. Hosted by Kim Pelham, The Pelham Group NW. Text Kim at (425) 250-9422 if you plan to come, or to schedule a private showing at a different time.',
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

  // Open House Event schema (GEO — surfaces in Google "Events near me" and Local Pack)
  const openHouseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Open House · 4611 76th Street SW, Mukilteo WA',
    description:
      'Public open house at 4611 76th Street SW, Mukilteo WA. A $975,000 fully-remodeled 4-bedroom home with Olympic Mountain views from every primary room. Hosted by Kim Pelham, The Pelham Group NW. Walk through, no appointment needed.',
    startDate: '2026-05-16T13:00:00-07:00',
    endDate: '2026-05-16T16:00:00-07:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: '4611 76th Street SW',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4611 76th Street SW',
        addressLocality: 'Mukilteo',
        addressRegion: 'WA',
        postalCode: '98275',
        addressCountry: 'US',
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
      url: 'https://thepelhamgroupnw.com/properties/4611-76th-street-mukilteo',
      price: 0,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-05-15T00:00:00-07:00',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(openHouseSchema) }} />
      {children}
    </>
  );
}

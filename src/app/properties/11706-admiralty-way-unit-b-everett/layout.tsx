import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '11706 Admiralty Way Unit B, Everett WA 98204 | Recently Remodeled Ground-Floor End-Unit Condo | The Pelham Group NW',
  description:
    'Refreshed 1989 end-unit condo on the ground floor at the end of the building. 2 bed, 1.75 bath, 1,140 sqft. New LVP, designer paint, new appliances, smart thermostat, wood-burning fireplace, ensuite primary. Mukilteo School District. $375,000. NWMLS #2528831. Under contract, closing 7/30. Contact Kim Pelham at (425) 250-9422 to join the waitlist.',
  openGraph: {
    title:
      'Recently remodeled, all one level. | 11706 Admiralty Way Unit B, Everett WA',
    description:
      'End-unit condo, ground floor, all one level. New LVP, designer paint, new appliances, smart thermostat, wood-burning fireplace. 2 bed, 1.75 bath, 1,140 sqft. $375,000. NWMLS #2528831.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/hero-living-fireplace.jpg',
        width: 1200,
        height: 630,
        alt: 'Living room with wood-burning fireplace at 11706 Admiralty Way Unit B, Everett WA',
      },
    ],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/properties/11706-admiralty-way-unit-b-everett',
    siteName: 'The Pelham Group NW',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      '11706 Admiralty Way Unit B, Everett WA 98204 | Recently Remodeled Ground-Floor Condo | The Pelham Group NW',
    description:
      'End-unit condo, ground floor, all one level. 2 bed, 1.75 bath, 1,140 sqft. $375,000. NWMLS #2528831. Under contract, closing 7/30.',
    images: [
      'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/hero-living-fireplace.jpg',
    ],
  },
  alternates: {
    canonical:
      'https://thepelhamgroupnw.com/properties/11706-admiralty-way-unit-b-everett',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function AdmiraltyLayout({ children }: { children: React.ReactNode }) {
  // RealEstateListing schema (AEO + GEO — answers "what is this listing")
  const listingSchema = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    additionalType: 'https://schema.org/RealEstateListing',
    name: '11706 Admiralty Way Unit B, Everett WA 98204',
    description:
      'Refreshed 1989 condo on the ground floor at the end of the building in Everett, WA. 2 bedrooms, 1.75 bathrooms, 1,140 square feet, all one level. New LVP flooring, designer paint, new appliances, smart thermostat, smart light switches, modern outlets, and recessed LED throughout. Wood-burning fireplace with mosaic tile surround in the living room. Primary suite with ensuite bath and walk-in closet. Slider to a private patio with lawn beyond. Detached 1-car garage plus assigned and guest parking. Mukilteo School District. Five minutes to Boeing, future light rail nearby, easy on to I-5, I-405, and Hwy 2. $375,000. NWMLS #2528831.',
    url: 'https://thepelhamgroupnw.com/properties/11706-admiralty-way-unit-b-everett',
    image: [
      'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/hero-living-fireplace.jpg',
      'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/exterior-back.jpg',
      'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/kitchen.jpg',
      'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/primary-bedroom.jpg',
      'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/slider-to-patio.jpg',
      'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/patio-wicker.jpg',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11706 Admiralty Way Unit B',
      addressLocality: 'Everett',
      addressRegion: 'WA',
      postalCode: '98204',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.918,
      longitude: -122.27,
    },
    numberOfRooms: 2,
    numberOfBedrooms: 2,
    numberOfBathroomsTotal: 1.75,
    numberOfFullBathrooms: 1,
    numberOfPartialBathrooms: 1,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 1140,
      unitCode: 'FTK',
    },
    yearBuilt: 1989,
    petsAllowed: true,
    accommodationCategory: 'Condo',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'End unit', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Ground floor', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'All one level', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wood-burning fireplace', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Smart thermostat', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Smart light switches', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'New LVP flooring', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'New appliances', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Ensuite primary bath', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Walk-in closet', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Detached 1-car garage', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Assigned parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Guest parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Private patio', value: true },
    ],
    offers: {
      '@type': 'Offer',
      price: 375000,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://thepelhamgroupnw.com/properties/11706-admiralty-way-unit-b-everett',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Kim Pelham',
        telephone: '+14252509422',
        email: 'kim@thepelhamgroupnw.com',
        url: 'https://thepelhamgroupnw.com',
        worksFor: {
          '@type': 'RealEstateAgent',
          name: 'The Pelham Group NW',
          parentOrganization: {
            '@type': 'RealEstateAgent',
            name: 'Katrina Eileen Real Estate',
          },
        },
      },
    },
  };

  // BreadcrumbList schema (SEO + GEO)
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Properties', item: 'https://thepelhamgroupnw.com/properties' },
      {
        '@type': 'ListItem',
        position: 3,
        name: '11706 Admiralty Way Unit B',
        item: 'https://thepelhamgroupnw.com/properties/11706-admiralty-way-unit-b-everett',
      },
    ],
  };

  // FAQPage schema (AEO — answers questions in AI search)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much is 11706 Admiralty Way Unit B in Everett?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '11706 Admiralty Way Unit B is listed at $375,000. The home is a 2-bedroom, 1.75-bathroom, 1,140 sqft end-unit condo on the ground floor in Everett, WA 98204. NWMLS #2528831.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes 11706 Admiralty Way Unit B special?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is an end-unit on the ground floor, so the home is all one level with no shared upstairs neighbor. The unit was recently remodeled with new LVP flooring, designer paint, new appliances, smart thermostat, smart light switches, modernized outlets, and recessed LED throughout. The living room has a wood-burning fireplace with mosaic tile surround. The primary suite has an ensuite bath and walk-in closet. Slider opens to a private patio with lawn beyond.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many bedrooms and bathrooms does 11706 Admiralty Way Unit B have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '2 bedrooms and 1.75 bathrooms (one full, one three-quarter). Total square footage is 1,140 per NWMLS measurements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 11706 Admiralty Way Unit B still available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '11706 Admiralty Way Unit B, Everett WA went under contract on June 24, 2026 and is currently pending inspection. Closing is scheduled for July 30, 2026. Active showings are paused. To join the waitlist in case the deal falls through, text Kim Pelham at (425) 250-9422.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the HOA and what are the taxes at 11706 Admiralty Way Unit B?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The HOA is $533 per month. Annual property taxes are $3,277. The HOA maintains the roof, exterior, and common areas.',
        },
      },
      {
        '@type': 'Question',
        name: 'What school district is 11706 Admiralty Way Unit B in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '11706 Admiralty Way Unit B is in the Mukilteo School District in Snohomish County, Washington.',
        },
      },
      {
        '@type': 'Question',
        name: 'What parking comes with 11706 Admiralty Way Unit B?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The unit comes with a detached 1-car garage plus an assigned outdoor stall and access to guest parking on the property.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is 11706 Admiralty Way Unit B from Boeing and the freeways?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'About 5 minutes to Boeing Paine Field, easy access to I-5, I-405, and Hwy 2. The future Lynnwood and Everett Link light rail stations are also nearby.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the listing agent for 11706 Admiralty Way Unit B?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate. Kim has 17+ years of experience in Snohomish County and can be reached at (425) 250-9422 or kim@thepelhamgroupnw.com.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

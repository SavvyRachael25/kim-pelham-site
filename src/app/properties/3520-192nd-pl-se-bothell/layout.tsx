import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Sale · 3520 192nd Pl SE, Bothell WA 98012 | The Pelham Group NW',
  description:
    'For sale at $1,150,000. A 2016 home in the Village at Brookshire neighborhood of Bothell. 4 bed, 2.5 bath, 2,453 sqft, 13 rooms, on a 3,907 sqft lot. Soaring ceilings, open floor plan, quartz kitchen with walk-in pantry, upstairs loft, five-piece primary bath, covered patio, central A/C, pre-inspected and move-in ready. Northshore School District. NWMLS #2558328. Book a showing with Kim Pelham at (425) 250-9422.',
  openGraph: {
    title: 'For Sale · 3520 192nd Pl SE, Bothell WA | Move-In Ready in Village at Brookshire',
    description:
      'For sale at $1,150,000. 2016 build, 4 bed, 2.5 bath, 2,453 sqft. Soaring ceilings, open floor plan, quartz kitchen with walk-in pantry, upstairs loft, five-piece primary bath, covered patio, central A/C. Pre-inspected and move-in ready. Northshore School District. NWMLS #2558328.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05986.jpg',
        width: 1200,
        height: 630,
        alt: 'Front exterior of 3520 192nd Pl SE, Bothell WA, a 2016 home in Village at Brookshire',
      },
    ],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/properties/3520-192nd-pl-se-bothell',
    siteName: 'The Pelham Group NW',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Sale · 3520 192nd Pl SE, Bothell WA 98012 | The Pelham Group NW',
    description:
      'For sale at $1,150,000. 2016 build, 4 bed, 2.5 bath, 2,453 sqft in Village at Brookshire. Pre-inspected and move-in ready. Northshore School District. NWMLS #2558328.',
    images: ['https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05986.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/properties/3520-192nd-pl-se-bothell',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function BothellLayout({ children }: { children: React.ReactNode }) {
  // RealEstateListing schema (AEO + GEO — answers "what is this listing")
  const listingSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: '3520 192nd Pl SE, Bothell WA 98012',
    description:
      'For-sale home built in 2016 in the Village at Brookshire neighborhood of Bothell, WA. North-facing with soaring ceilings, abundant natural light, and an open floor plan. 4 bedrooms, 2.5 bathrooms, 2,453 square feet, 13 rooms, on a 3,907 sqft lot. Durable laminate flooring on the main level, new carpet (2024) in the living room, electric fireplace. Kitchen with quartz countertops, subway tile backsplash, stainless steel appliances, and an oversized walk-in pantry. Upstairs loft and family room usable as a media room, home office, or hobby space. Primary suite with a spa-inspired five-piece bath and a custom walk-in closet organizer. Upstairs laundry room with a utility sink. Fully fenced, low-maintenance backyard with a covered patio. Central A/C. Parking for up to four vehicles plus abundant guest parking. Pre-inspection complete, move-in ready. Award-winning Northshore School District, with a community park and playground at the end of the street. Listed at $1,150,000. NWMLS #2558328.',
    url: 'https://thepelhamgroupnw.com/properties/3520-192nd-pl-se-bothell',
    image: [
      'https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05986.jpg',
      'https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05849.jpg',
      'https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05831.jpg',
      'https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05717.jpg',
      'https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05798.jpg',
      'https://thepelhamgroupnw.com/listings/2558328-bothell/photos/dsc05923.jpg',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3520 192nd Pl SE',
      addressLocality: 'Bothell',
      addressRegion: 'WA',
      postalCode: '98012',
      addressCountry: 'US',
    },
    numberOfRooms: 13,
    numberOfBedrooms: 4,
    numberOfBathroomsTotal: 2.5,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 2453,
      unitCode: 'FTK',
    },
    lotSize: {
      '@type': 'QuantitativeValue',
      value: 3907,
      unitText: 'square feet',
    },
    yearBuilt: 2016,
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Open floor plan', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Soaring ceilings', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Electric fireplace', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Quartz kitchen countertops', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Subway tile backsplash', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Stainless steel appliances', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Oversized walk-in pantry', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Upstairs loft / flex room', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Five-piece primary bath', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Custom walk-in closet organizer', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Upstairs laundry with utility sink', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Central air conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Covered patio', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Fully fenced backyard', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pre-inspection complete', value: true },
    ],
    offers: {
      '@type': 'Offer',
      price: 1150000,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      availabilityStarts: '2026-07-23',
      url: 'https://thepelhamgroupnw.com/properties/3520-192nd-pl-se-bothell',
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
        name: '3520 192nd Pl SE',
        item: 'https://thepelhamgroupnw.com/properties/3520-192nd-pl-se-bothell',
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
        name: 'How much is 3520 192nd Pl SE in Bothell?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '3520 192nd Pl SE is listed at $1,150,000. It is a 4-bedroom, 2.5-bathroom, 2,453 sqft home built in 2016 in the Village at Brookshire neighborhood of Bothell, WA 98012. NWMLS #2558328.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes 3520 192nd Pl SE special?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Soaring ceilings and abundant natural light over an open floor plan, a kitchen with quartz countertops, subway tile backsplash, stainless steel appliances, and an oversized walk-in pantry, plus an upstairs loft that works as a media room, home office, or hobby space. The primary suite has a spa-inspired five-piece bath and a custom walk-in closet organizer, and there is an upstairs laundry room with a utility sink. The home is pre-inspected and move-in ready.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many bedrooms and bathrooms does 3520 192nd Pl SE have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '4 bedrooms and 2.5 bathrooms across 2,453 square feet and 13 rooms total, per NWMLS measurements. All four bedrooms are generously sized, and the primary suite includes a five-piece bath.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 3520 192nd Pl SE still available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '3520 192nd Pl SE was listed on July 23, 2026 and is active and for sale at $1,150,000. To book a private showing, text or call Kim Pelham at (425) 250-9422.',
        },
      },
      {
        '@type': 'Question',
        name: 'What school district is 3520 192nd Pl SE in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '3520 192nd Pl SE is served by the award-winning Northshore School District.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the lot size and year built for 3520 192nd Pl SE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The home was built in 2016 on a 3,907 sqft lot. The backyard is fully fenced and low-maintenance with a covered patio.',
        },
      },
      {
        '@type': 'Question',
        name: 'What parking comes with 3520 192nd Pl SE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is parking for up to four vehicles, plus abundant guest parking. A community park and playground sit at the end of the street.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the listing agent for 3520 192nd Pl SE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The listing agent is Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate. Kim has 17+ years of experience and can be reached at (425) 250-9422 or kim@thepelhamgroupnw.com. WA Broker #119262.',
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

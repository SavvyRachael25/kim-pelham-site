import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sold · 19721 47th Ave NE, Arlington WA 98223 | The Pelham Group NW',
  description:
    'Sold for $625,000 on May 29, 2026, at its full list price. 19721 47th Avenue NE, Arlington WA 98223. 3 bedrooms, 2 bathrooms, 1,624 square feet. MLS# 2492864. Listed and sold by Kim Pelham, The Pelham Group NW. Call (425) 250-9422.',
  openGraph: {
    title: 'Sold · 19721 47th Ave NE, Arlington WA',
    description:
      '3 bedrooms, 2 bathrooms, 1,624 sqft single family home in Arlington, Snohomish County. Sold for $625,000 on May 29, 2026, at its full list price. MLS# 2492864.',
    images: [{ url: '/images/arlington/arlington-01.jpg', width: 1200, height: 800 }],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/properties/19721-47th-ave-ne-arlington',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sold · 19721 47th Ave NE, Arlington WA | The Pelham Group NW',
    description:
      '3 bed / 2 bath / 1,624 sqft. Sold for $625,000 on May 29, 2026, at its full list price. MLS# 2492864. Listed and sold by Kim Pelham.',
    images: ['/images/arlington/arlington-01.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/properties/19721-47th-ave-ne-arlington',
  },
};

export default function ArlingtonLayout({ children }: { children: React.ReactNode }) {
  // RealEstateListing schema (AEO — answers "what is this listing")
  const listingSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: '19721 47th Avenue NE, Arlington WA 98223',
    description:
      'Single family home in Arlington, Snohomish County, Washington. 3 bedrooms, 2 bathrooms, 1,624 square feet. Sold for $625,000 on May 29, 2026, at its full list price. MLS# 2492864. Listed and sold by Kim Pelham, The Pelham Group NW.',
    url: 'https://thepelhamgroupnw.com/properties/19721-47th-ave-ne-arlington',
    image: [
      'https://thepelhamgroupnw.com/images/arlington/arlington-01.jpg',
      'https://thepelhamgroupnw.com/images/arlington/arlington-02.jpg',
      'https://thepelhamgroupnw.com/images/arlington/arlington-03.jpg',
      'https://thepelhamgroupnw.com/images/arlington/arlington-04.jpg',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '19721 47th Avenue NE',
      addressLocality: 'Arlington',
      addressRegion: 'WA',
      postalCode: '98223',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.175575,
      longitude: -122.16657,
    },
    numberOfRooms: 3,
    numberOfBathroomsTotal: 2,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 1624,
      unitCode: 'FTK',
    },
    offers: {
      '@type': 'Offer',
      price: 625000,
      priceCurrency: 'USD',
      availability: 'https://schema.org/SoldOut',
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
        name: '19721 47th Ave NE, Arlington',
        item: 'https://thepelhamgroupnw.com/properties/19721-47th-ave-ne-arlington',
      },
    ],
  };

  // FAQPage schema (AEO — surfaces in AI answer engines and Google FAQ rich results)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much is 19721 47th Ave NE, Arlington WA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '19721 47th Avenue NE, Arlington WA 98223 sold for $625,000 on May 29, 2026, at its full list price. The home offers 3 bedrooms, 2 bathrooms, and 1,624 square feet. MLS# 2492864.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 19721 47th Ave NE still for sale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. 19721 47th Avenue NE sold and closed on May 29, 2026 for $625,000, its full list price. If you own a similar home in Arlington and want to know what it could bring, contact Kim Pelham at (425) 250-9422.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many bedrooms does 19721 47th Ave NE have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '19721 47th Avenue NE has 3 bedrooms and 2 bathrooms across 1,624 square feet of living space.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the listing agent for 19721 47th Ave NE, Arlington?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The home was listed and sold by Kim Pelham, a licensed real estate broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate in Snohomish County, WA. Kim has 17+ years of experience and can be reached at (425) 250-9422.',
        },
      },
      {
        '@type': 'Question',
        name: 'What city and county is 19721 47th Ave NE in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '19721 47th Avenue NE is located in Arlington, WA 98223, in Snohomish County. Arlington sits in north Snohomish County, roughly 50 minutes north of Seattle and 25 minutes north of Everett via I-5.',
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

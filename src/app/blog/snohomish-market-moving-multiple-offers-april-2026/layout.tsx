import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Snohomish Real Estate Market April 2026: Inventory Up 52%, Homes Still Selling in Days | Kim Pelham',
  description:
    'April 2026 Snohomish and King County real estate market update from broker Kim Pelham. Inventory jumped 51.8% year over year, giving buyers more options, while well-priced homes still find offers in days. Median prices, days on market, months of supply, and a broker-on-the-ground read.',
  keywords: [
    'Snohomish County real estate market',
    'Snohomish housing market April 2026',
    'King County median home price',
    'Snohomish County median home price',
    'Everett real estate market',
    'Marysville waterfront home for sale',
    'multiple offers Snohomish County',
    'Kim Pelham real estate broker',
    'Pelham Group NW',
    'Potlatch Beach waterfront',
    'Snohomish County open house',
    'Snohomish months of inventory',
    'homes selling in days Snohomish',
    'real estate broker Everett WA',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'The Snohomish Market Is Slower, But Still Moving When Priced Right',
    description:
      'Snohomish inventory jumped 52% year over year, so buyers have more choices. Well-priced homes are still finding offers in days. A broker-on-the-ground read of the April 2026 market.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg',
        width: 1200,
        height: 900,
        alt: 'Golden sunset over Puget Sound from 1406 Potlatch Beach Road, Marysville WA',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/snohomish-market-moving-multiple-offers-april-2026',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-04-24T08:00:00-07:00',
    modifiedTime: '2026-04-24T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Market Updates',
    tags: ['Snohomish County', 'King County', 'real estate market', 'April 2026', 'Kim Pelham'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snohomish Real Estate April 2026: Inventory Up 52%, Pace Steadier',
    description:
      'Broker Kim Pelham breaks down what is actually happening in the Snohomish and King County market this month.',
    images: ['https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/snohomish-market-moving-multiple-offers-april-2026',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function PelhamPostLayout({ children }: { children: React.ReactNode }) {
  // Article schema with speakable spec for voice/answer engines
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Snohomish Market Is Slower, But Still Moving When Priced Right',
    alternativeHeadline: 'Snohomish Real Estate Market Update, April 2026',
    description:
      'Snohomish County inventory jumped 51.8% year over year in March 2026, giving buyers more to choose from. Well-priced, well-staged homes are still finding offers in days. Broker Kim Pelham reads the current Snohomish and King County market.',
    image: {
      '@type': 'ImageObject',
      url: 'https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg',
      width: 1200,
      height: 900,
    },
    datePublished: '2026-04-24T08:00:00-07:00',
    dateModified: '2026-04-24T08:00:00-07:00',
    author: {
      '@type': 'Person',
      name: 'Kim Pelham',
      url: 'https://thepelhamgroupnw.com/about',
      jobTitle: 'Real Estate Broker',
      worksFor: {
        '@type': 'Organization',
        name: 'The Pelham Group NW',
      },
      telephone: '+1-425-250-9422',
      email: 'hello@thepelhamgroupnw.com',
      knowsAbout: [
        'Snohomish County real estate',
        'King County real estate',
        'Waterfront properties',
        'Home staging',
        'Senior downsizing',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Pelham Group NW',
      url: 'https://thepelhamgroupnw.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thepelhamgroupnw.com/images/thepelhamgroupnw-logo-new.png',
      },
    },
    url: 'https://thepelhamgroupnw.com/blog/snohomish-market-moving-multiple-offers-april-2026',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://thepelhamgroupnw.com/blog/snohomish-market-moving-multiple-offers-april-2026',
    },
    articleSection: 'Market Updates',
    keywords:
      'Snohomish County real estate, King County housing market, Snohomish median home price, multiple offers, waterfront, Potlatch Beach, Kim Pelham, April 2026 market update',
    inLanguage: 'en-US',
    wordCount: 950,
    about: [
      {
        '@type': 'Place',
        name: 'Snohomish County, Washington',
        containedInPlace: {
          '@type': 'State',
          name: 'Washington',
        },
      },
      {
        '@type': 'Place',
        name: 'King County, Washington',
      },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#tldr', '#market-data', '#faq'],
    },
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'Northwest Multiple Listing Service Market Snapshot',
        url: 'https://www.nwmls.com/real-estate-news/monthly-market-snapshot/',
        publisher: {
          '@type': 'Organization',
          name: 'Northwest Multiple Listing Service',
        },
      },
    ],
  };

  // FAQ schema (for Google People Also Ask, voice search, AEO)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the Snohomish County real estate market slowing down in April 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Inventory in Snohomish County jumped 51.8% year over year in March 2026, which is one of the biggest increases in Washington state. Average days on market ticked up from 7 days in March 2025 to 10 days in March 2026. The pace has cooled a bit, but the market remains seller-friendly: Snohomish still has only 2.04 months of supply, the second tightest market in Washington. A balanced market is 4 to 6 months. Well-priced and well-staged homes are still finding offers in days.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the median home price in Snohomish County right now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The median sales price for homes sold in Snohomish County in March 2026 was $738,000, per Northwest MLS data. Snohomish is the third most expensive county in the NWMLS service area, behind San Juan County ($1,075,000) and King County ($859,618).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the median home price in King County in April 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The median sales price for homes sold in King County in March 2026 was $859,618, the second highest in Washington state after San Juan County. King County inventory is up year over year, but the market remains competitive for well-priced homes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are homes in Snohomish County getting multiple offers in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Well-priced, well-staged homes in Snohomish County are still receiving multiple offers and often selling over asking price, even as overall inventory has increased. A recent listing by broker Kim Pelham went active Monday and had multiple offers on the table within the same week, going over asking. The key variables are price accuracy and presentation quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'What counts as months of inventory in real estate and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Months of inventory is the number of months it would take to sell every active listing at the current rate of sales. A balanced market is typically 4 to 6 months. Under 4 months is a seller market. Over 6 months is a buyer market. Snohomish County sits at 2.04 months of inventory in March 2026, which indicates a strong seller market despite rising inventory counts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is now a good time to sell a home in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you have been considering selling, you have not missed the window. The Snohomish County market still favors sellers with 2.04 months of inventory, well below the 4 to 6 months considered balanced. Pricing strategy and presentation matter more now than they did a year ago. Homes priced to the comps and prepared well are still finding offers in days.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much waterfront home can I buy in Marysville under a million dollars?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Marysville waterfront on Puget Sound is priced dramatically lower than comparable Seattle waterfront. Kim Pelham currently has 1406 Potlatch Beach Road listed at $799,900, a 3-bedroom, 2-bathroom high-bank waterfront home on a third of an acre. Seattle waterfront with comparable Sound views typically starts at $3 million and above.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who should I contact to buy or sell a home in Everett, Snohomish, or Marysville?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kim Pelham of The Pelham Group NW is a real estate broker serving Snohomish, King, Pierce, and Skagit Counties. Kim can be reached by text or call at 425-250-9422, by email at hello@thepelhamgroupnw.com, or through the contact form at thepelhamgroupnw.com.',
        },
      },
    ],
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://thepelhamgroupnw.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://thepelhamgroupnw.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Snohomish Real Estate Market April 2026',
        item: 'https://thepelhamgroupnw.com/blog/snohomish-market-moving-multiple-offers-april-2026',
      },
    ],
  };

  // Real estate agent schema (LocalBusiness) with geo coordinates
  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Kim Pelham, The Pelham Group NW',
    image: 'https://thepelhamgroupnw.com/images/kim-headshot-msh.jpg',
    telephone: '+1-425-250-9422',
    email: 'hello@thepelhamgroupnw.com',
    url: 'https://thepelhamgroupnw.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3201 Smith Ave Ste 409',
      addressLocality: 'Everett',
      addressRegion: 'WA',
      postalCode: '98201',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.9789,
      longitude: -122.2021,
    },
    areaServed: [
      { '@type': 'City', name: 'Everett' },
      { '@type': 'City', name: 'Snohomish' },
      { '@type': 'City', name: 'Marysville' },
      { '@type': 'City', name: 'Tulalip' },
      { '@type': 'City', name: 'Mill Creek' },
      { '@type': 'City', name: 'Lake Stevens' },
      { '@type': 'City', name: 'Lynnwood' },
      { '@type': 'City', name: 'Bothell' },
      { '@type': 'City', name: 'Martha Lake' },
      { '@type': 'AdministrativeArea', name: 'Snohomish County' },
      { '@type': 'AdministrativeArea', name: 'King County' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentSchema) }}
      />
      {children}
    </>
  );
}

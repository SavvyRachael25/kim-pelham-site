import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Snohomish County May 2026 Market Update: Inventory +58.2%, Pace Easing | Kim Pelham',
  description:
    "May 2026 Snohomish County real estate market update from broker Kim Pelham. Inventory jumped 58.2% year over year to 2,456 active listings. Months of supply at 2.2. Median sale price $750K. Mortgage rates at 6.36%. What this means for buyers and sellers right now.",
  keywords: [
    'Snohomish County real estate market May 2026',
    'Snohomish County housing market update',
    'NWMLS market report',
    'Snohomish median home price 2026',
    'Snohomish County months of inventory',
    'Snohomish County days on market',
    'mortgage rates May 2026',
    'Kim Pelham real estate broker',
    'Pelham Group NW',
    'Everett WA real estate market',
    'Marysville real estate',
    'Mukilteo real estate',
    'Snohomish County sellers market',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Snohomish County May 2026: The Market Got More Honest This Month',
    description:
      'Inventory up 58.2% YoY. Median sale price down 3.8%. Mortgage rates at 6.36%. Broker Kim Pelham reads the May 2026 Snohomish County market for buyers and sellers.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg',
        width: 1200,
        height: 900,
        alt: 'Snohomish County Puget Sound waterfront, May 2026',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/snohomish-market-may-2026',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-05-15T08:00:00-07:00',
    modifiedTime: '2026-05-15T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Market Updates',
    tags: ['Snohomish County', 'real estate market', 'May 2026', 'Kim Pelham', 'NWMLS'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snohomish County May 2026: Back to Fundamentals',
    description:
      'Inventory +58.2% YoY. Median price down 3.8%. Rates at 6.36%. Broker Kim Pelham on the May 2026 market.',
    images: ['https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/snohomish-market-may-2026',
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

export default function MayMarketLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Snohomish County, May 2026: The Market Got More Honest This Month',
    alternativeHeadline: 'Snohomish County Real Estate Market Update, May 2026',
    description:
      'Active listings in Snohomish County jumped 58.2% year over year. Months of inventory rose to 2.2. Median sale price softened 3.8% to roughly $750,000. Mortgage rates at 6.36%. Broker Kim Pelham reads the May 2026 market for buyers and sellers.',
    image: {
      '@type': 'ImageObject',
      url: 'https://thepelhamgroupnw.com/images/potlatch-brien-sunset-golden.jpg',
      width: 1200,
      height: 900,
    },
    datePublished: '2026-05-15T08:00:00-07:00',
    dateModified: '2026-05-15T08:00:00-07:00',
    author: {
      '@type': 'Person',
      '@id': 'https://thepelhamgroupnw.com/#kim',
      name: 'Kim Pelham',
      url: 'https://thepelhamgroupnw.com/about',
      jobTitle: 'Real Estate Broker',
      sameAs: ['https://www.linkedin.com/in/kimpelham/'],
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://thepelhamgroupnw.com/#organization',
      name: 'The Pelham Group NW',
      sameAs: ['https://www.facebook.com/PelhamGroupNW'],
    },
    url: 'https://thepelhamgroupnw.com/blog/snohomish-market-may-2026',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://thepelhamgroupnw.com/blog/snohomish-market-may-2026',
    },
    articleSection: 'Market Updates',
    keywords:
      'Snohomish County real estate, May 2026 market update, NWMLS, months of inventory, median home price, mortgage rates, Kim Pelham',
    inLanguage: 'en-US',
    wordCount: 900,
    about: [
      {
        '@type': 'Place',
        name: 'Snohomish County, Washington',
      },
    ],
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'NWMLS April 2026 Market Report',
        url: 'https://www.nwrealtor.com/2026/05/07/nwmls-april-2026-market-report/',
      },
      {
        '@type': 'CreativeWork',
        name: 'NWMLS Monthly Market Snapshot',
        url: 'https://www.nwmls.com/real-estate-news/monthly-market-snapshot/',
      },
      {
        '@type': 'CreativeWork',
        name: 'Freddie Mac Primary Mortgage Market Survey',
        url: 'https://www.freddiemac.com/pmms',
      },
      {
        '@type': 'CreativeWork',
        name: 'The Madrona Group Snohomish County Housing Market Data',
        url: 'https://www.themadronagroup.com/snohomish-county-housing-market/',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is happening in the Snohomish County real estate market in May 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Snohomish County market is recalibrating. Active listings rose 58.2% year over year to 2,456 in April 2026 per the NWMLS market report. Months of inventory climbed from 1.6 to 2.2. Average sale price softened 3.8% year over year to $787,838. The 30-year fixed mortgage rate averaged 6.36% the week of May 14, 2026, per Freddie Mac PMMS. Well-priced, well-prepped homes are still selling at or above list, while overpriced or under-prepped listings are sitting 60 plus days.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the median home price in Snohomish County in May 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The median sale price in Snohomish County is approximately $750,000 in the most recent NWMLS data, with average sale price at $787,838, down 3.8% year over year. Prices have softened modestly from the spring 2025 peak.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Snohomish County market a buyers market or sellers market in May 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Snohomish County is still seller-leaning but the gap is narrowing. Months of inventory at 2.2 is well under the 4 to 6 months that define a balanced market, so it remains a sellers market by the technical definition. However the 58.2% year over year jump in active listings means sellers can no longer assume any home will sell on presentation alone. Pricing strategy and prep work are now the main variables that determine whether a home gets multiple offers or sits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the average mortgage rate in May 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 30-year fixed mortgage rate averaged 6.36% the week of May 14, 2026, per the Freddie Mac Primary Mortgage Market Survey. That is down approximately 45 basis points from 6.81% one year earlier.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is now a good time to sell a home in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes for sellers who are willing to prep and price strategically. The market still favors sellers with 2.2 months of inventory, but the buyer pool has more options than a year ago. Kim Pelham\'s personal sale-to-list ratio of 102.3% versus the Snohomish County NWMLS average of 100.2% comes from disciplined pricing and presentation, not from market lift. Sellers who plan a real prep window (paint, staging, professional photography) and price for multiple offers are still winning. Sellers who skip those steps or price to last year\'s comps are sitting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I buy a home in Snohomish County right now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'May 2026 is the most buyer-friendly Snohomish County market in three years. With 2,456 active listings, you have real choice. With rates at 6.36% (down 45 basis points YoY), monthly payments are slightly better than a year ago. The well-prepped homes in Mukilteo, Edmonds, Mill Creek, Marysville waterfront, and Lake Stevens are still moving in under three weeks, so the right house at the right price still requires decisiveness. But the desperate-bid era is over.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thepelhamgroupnw.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://thepelhamgroupnw.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Snohomish County May 2026 Market Update',
        item: 'https://thepelhamgroupnw.com/blog/snohomish-market-may-2026',
      },
    ],
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
      {children}
    </>
  );
}

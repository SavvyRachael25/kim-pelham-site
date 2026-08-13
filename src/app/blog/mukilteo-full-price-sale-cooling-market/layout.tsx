import type { Metadata } from 'next';

const TITLE =
  'How a Mukilteo Home Sold for Full Price in a Cooling Market | Kim Pelham';
const DESC =
  'A case study from broker Kim Pelham: 4611 76th Street SW in Mukilteo sold July 10, 2026 at its full $975,000 list price after 39 days on market, while Snohomish County inventory was up 36.6% year over year. What full price in a soft market actually takes: honest pricing and complete preparation, staging, and professional photography.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Mukilteo home sold full price',
    'sell home full price cooling market',
    'Mukilteo real estate 2026',
    'how to sell a house in a slow market',
    'home staging Snohomish County',
    'Home Transition Team Kim Pelham',
    'NWMLS 2513590',
    '4611 76th Street SW Mukilteo',
    'Kim Pelham real estate broker',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'How a Mukilteo Home Sold for Full Price in a Cooling Market',
    description:
      'Full $975,000 list price, 39 days, in a county with 36.6% more homes for sale than last year. Broker Kim Pelham breaks down exactly how.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/mukilteo-og-2026-05.jpg',
        width: 1200,
        height: 630,
        alt: 'The remodeled NW Contemporary home at 4611 76th Street SW in Mukilteo',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/mukilteo-full-price-sale-cooling-market',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-17T08:00:00-07:00',
    modifiedTime: '2026-08-17T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Case Studies',
    tags: ['Mukilteo', 'full price sale', 'case study', 'staging', 'Kim Pelham'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Price in a Cooling Market: A Mukilteo Case Study',
    description:
      '$975,000, full list price, 39 days, with county inventory up 36.6% YoY. What it actually took.',
    images: ['https://thepelhamgroupnw.com/images/mukilteo-og-2026-05.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/mukilteo-full-price-sale-cooling-market',
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

export default function MukilteoFullPriceSaleLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How a Mukilteo Home Sold for Full Price in a Cooling Market',
    alternativeHeadline: 'Case Study: Full-Price Sale at 4611 76th Street SW, Mukilteo',
    description:
      '4611 76th Street SW in Mukilteo (NWMLS #2513590) sold July 10, 2026 at its full $975,000 list price after 39 days on market, while Snohomish County inventory was up 36.6% year over year. Broker Kim Pelham explains the two decisions behind the result: honest pricing and complete preparation.',
    image: {
      '@type': 'ImageObject',
      url: 'https://thepelhamgroupnw.com/images/mukilteo-og-2026-05.jpg',
      width: 1200,
      height: 630,
    },
    datePublished: '2026-08-17T08:00:00-07:00',
    dateModified: '2026-08-17T08:00:00-07:00',
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
    url: 'https://thepelhamgroupnw.com/blog/mukilteo-full-price-sale-cooling-market',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://thepelhamgroupnw.com/blog/mukilteo-full-price-sale-cooling-market',
    },
    articleSection: 'Case Studies',
    keywords:
      'Mukilteo, full price sale, cooling market, home staging, honest pricing, Home Transition Team, Kim Pelham',
    inLanguage: 'en-US',
    wordCount: 1100,
    about: [
      {
        '@type': 'Place',
        name: 'Mukilteo, Washington',
      },
      {
        '@type': 'Place',
        name: 'Snohomish County, Washington',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes a home sell for full price in a slow market?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Two things, working together: honest pricing and complete preparation. Pricing to actual comparable sales (not to hope) tells serious buyers the listing is worth their attention, and full preparation (repairs, staging, professional photography, all before the listing goes live) makes the home compare well against the growing number of alternatives. Broker Kim Pelham used exactly this approach on 4611 76th Street SW in Mukilteo, which sold at its full $975,000 list price on July 10, 2026, while Snohomish County inventory was up 36.6% year over year.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 39 days on market a long time in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It is slightly longer than the July 2026 county average of 28 days, and that is not a problem when the pricing is right. The Mukilteo home at 4611 76th Street SW took 39 days and still closed at its full $975,000 list price. When a home is priced honestly and presented completely, a longer timeline means the home is waiting for its buyer, not that something is wrong. The costly mistake is panic-cutting the price in week three or four.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does staging really help a home sell?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In a market with more inventory, staging is one of the main ways a home separates itself from the competition. Buyers comparing several similar homes respond to the one they can picture living in. Kim Pelham stages and professionally photographs every listing before it goes live, and her Home Transition Team can also handle repairs and preparation for sellers who need the full service. The seller of the Mukilteo home wrote in a public review that they used the concierge service, contractor recommendation, and professional staging, and were able to sell fairly quickly in a down market.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Home Transition Team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "The Home Transition Team is Kim Pelham's coordinated model for getting a home ready to sell: repairs, staging, and the sale itself, managed as one effort instead of three separate projects the homeowner has to run. It exists for sellers who do not have the time, energy, or contractor contacts to prepare a home on their own, and it is the process behind recent full-price sales in Mukilteo and Arlington.",
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
        name: 'How a Mukilteo Home Sold for Full Price in a Cooling Market',
        item: 'https://thepelhamgroupnw.com/blog/mukilteo-full-price-sale-cooling-market',
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

import type { Metadata } from 'next';

const TITLE =
  "Snohomish County Inventory Up 36.6% in July 2026: What It Means for Buyers and Sellers | Kim Pelham";
const DESC =
  'Homes for sale in Snohomish County jumped 36.6% year over year in July 2026, with average days on market at 28 versus 25 last year. Broker Kim Pelham explains what rising inventory means if you are buying or selling: buyers are comparing more and negotiating harder, while well-priced, well-presented homes still sell quickly and at full price.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Snohomish County housing inventory 2026',
    'Snohomish County real estate market August 2026',
    'Snohomish County homes for sale increase',
    'Snohomish County days on market',
    'is now a good time to sell Snohomish County',
    'Snohomish County buyers market 2026',
    'Kim Pelham real estate broker',
    'The Pelham Group NW',
    'Mukilteo home sold full price',
    'sale-to-list ratio Snohomish County',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: "Snohomish County Inventory Just Jumped 36.6%: What It Means If You're Buying or Selling",
    description:
      'Homes for sale up 36.6% year over year in July 2026. Days on market at 28 versus 25. Broker Kim Pelham reads the numbers for both sides of the deal.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/images/hero-01-aerial-neighborhood.jpg',
        width: 1200,
        height: 630,
        alt: 'Aerial view of Snohomish County neighborhoods',
      },
    ],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/snohomish-county-inventory-jump-august-2026',
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-08-17T08:00:00-07:00',
    modifiedTime: '2026-08-17T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Market Updates',
    tags: ['Snohomish County', 'housing inventory', 'August 2026', 'Kim Pelham', 'market update'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snohomish County Inventory Up 36.6%: A Broker Reads the Numbers',
    description:
      'Homes for sale up 36.6% YoY in July 2026. Days on market at 28 vs 25. What it means for buyers and sellers.',
    images: ['https://thepelhamgroupnw.com/images/hero-01-aerial-neighborhood.jpg'],
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/snohomish-county-inventory-jump-august-2026',
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

export default function InventoryJumpAugust2026Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Snohomish County Inventory Just Jumped 36.6%: What It Means If You're Buying or Selling",
    alternativeHeadline: 'Snohomish County Housing Inventory Update, August 2026',
    description:
      'Homes for sale in Snohomish County rose 36.6% year over year in July 2026, and average days on market moved to 28 from 25. Broker Kim Pelham explains what the shift means for buyers and sellers, with recent full-price sales as evidence that prepared, honestly priced homes still sell quickly.',
    image: {
      '@type': 'ImageObject',
      url: 'https://thepelhamgroupnw.com/images/hero-01-aerial-neighborhood.jpg',
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
    url: 'https://thepelhamgroupnw.com/blog/snohomish-county-inventory-jump-august-2026',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://thepelhamgroupnw.com/blog/snohomish-county-inventory-jump-august-2026',
    },
    articleSection: 'Market Updates',
    keywords:
      'Snohomish County real estate, housing inventory, August 2026, days on market, sale-to-list ratio, Kim Pelham',
    inLanguage: 'en-US',
    wordCount: 1100,
    about: [
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
        name: 'Is now a bad time to sell a home in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No, but it is a less forgiving one. Homes for sale in Snohomish County were up 36.6% in July 2026 compared with a year earlier, so buyers are comparing more homes and overlooking less. Well-priced, well-presented homes are still selling quickly and at strong prices. Broker Kim Pelham's listings average a 102.3% sale-to-list ratio versus the 100.2% county average, and her recent Mukilteo and Arlington listings both sold at full list price in 2026. The homes that struggle are the ones priced ambitiously or listed without preparation.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long do homes take to sell in Snohomish County right now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In July 2026, homes in Snohomish County averaged 28 days on market, up from 25 days in July 2025. That average covers a wide range: well-prepared, honestly priced homes often sell faster, while overpriced or under-prepped listings can sit well past the average.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does rising inventory mean for buyers in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'More choice and more negotiating room. With 36.6% more homes for sale than a year ago, buyers can tour homes more than once, compare options, and negotiate on price, inspection items, and timelines in a way that was rarely possible during the tight-market years. The one caution: well-priced, well-presented homes still sell quickly, so buyers should be ready to move with confidence when the right home appears.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do homes still sell for full price in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. On July 10, 2026, Kim Pelham's Mukilteo listing at 4611 76th Street SW sold at its full $975,000 list price after 39 days on market, and her Arlington listing sold at its full $625,000 list price on May 29, 2026. Both sales came from the same approach: honest pricing from day one plus full preparation, staging, and professional photography before listing.",
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
        name: 'Snohomish County Inventory Just Jumped 36.6%',
        item: 'https://thepelhamgroupnw.com/blog/snohomish-county-inventory-jump-august-2026',
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

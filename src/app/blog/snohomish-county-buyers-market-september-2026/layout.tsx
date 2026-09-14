import type { Metadata } from 'next';

const URL = 'https://thepelhamgroupnw.com/blog/snohomish-county-buyers-market-september-2026';
const IMG = 'https://thepelhamgroupnw.com/images/neighborhood-lake-stevens-aerial.jpg';
const HEADLINE = "Snohomish County Has 39% More Homes for Sale. Is It a Buyer's Market Yet?";
const TITLE = "Is Snohomish County a Buyer's Market? August 2026 Inventory Up 39.3% | Kim Pelham";
const DESC =
  "Snohomish County had 39.3% more homes for sale in August 2026 than a year earlier, the second largest jump in the NWMLS, while regional closed sales fell 7.6% and the county median held at $724,500. Broker Kim Pelham explains why that is a balanced market leaning toward buyers, not a buyer's market, what 7% mortgage rates have to do with it, and what changes for buyers and sellers now.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "Snohomish County buyer's market 2026",
    'Snohomish County housing inventory August 2026',
    'Snohomish County real estate market September 2026',
    'Snohomish County median home price 2026',
    'is it a buyers market in Snohomish County',
    'Snohomish County homes for sale increase',
    'NWMLS August 2026 market snapshot',
    'Kim Pelham real estate broker',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: HEADLINE,
    description:
      "Inventory up 39.3%, regional sales down 7.6%, median $724,500, rates back over 7%. Broker Kim Pelham on why that is balanced, not a buyer's market, and what to do about it.",
    images: [{ url: IMG, width: 1200, height: 630, alt: 'Aerial view of homes around Lake Stevens in Snohomish County' }],
    type: 'article',
    url: URL,
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-09-15T08:00:00-07:00',
    modifiedTime: '2026-09-15T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Market Updates',
    tags: ['Snohomish County', "buyer's market", 'housing inventory', 'September 2026', 'Kim Pelham', 'market update'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Snohomish County Has 39% More Homes for Sale. Buyer's Market Yet?",
    description: "Inventory up 39.3%, sales down 7.6%, median $724,500, rates over 7%. A broker's honest read.",
    images: [IMG],
  },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function BuyersMarketSeptember2026Layout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: HEADLINE,
    alternativeHeadline: 'Snohomish County Housing Market Update, September 2026',
    description: DESC,
    image: { '@type': 'ImageObject', url: IMG, width: 1200, height: 630 },
    datePublished: '2026-09-15T08:00:00-07:00',
    dateModified: '2026-09-15T08:00:00-07:00',
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
    url: URL,
    mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
    articleSection: 'Market Updates',
    keywords:
      "Snohomish County real estate, buyer's market, housing inventory, August 2026, NWMLS, mortgage rates, Kim Pelham",
    inLanguage: 'en-US',
    wordCount: 1050,
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'NWMLS August 2026 Market Snapshot: Homebuyers Gain More Choices as Sales and Prices Ease',
        url: 'https://www.nwmls.com/homebuyers-gain-more-choices-as-sales-and-prices-ease/',
        datePublished: '2026-09-03',
      },
    ],
    about: [{ '@type': 'Place', name: 'Snohomish County, Washington' }],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Is Snohomish County a buyer's market in 2026?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Not by the standard definition. As of August 2026 the NWMLS region had 4.21 months of inventory, which is the low end of balanced (four to six months). A buyer's market usually means six months or more. Snohomish County inventory grew 39.3% year over year, faster than the region, so the county leans toward buyers more than most, but the median sale price was still $724,500. Buyers have more choice and more negotiating room than in 2024 or 2025. They do not have falling prices.",
        },
      },
      {
        '@type': 'Question',
        name: 'How many more homes are for sale in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At the end of August 2026, active listings in Snohomish County were up 39.3% compared with August 2025, according to the Northwest Multiple Listing Service. That was the second largest increase of the 27 counties NWMLS tracks. Across the whole NWMLS area, active listings rose to 24,675 from 20,219, about 4,400 more homes on the market.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are home prices dropping in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Slightly at the regional level, not meaningfully at the county level. The NWMLS-wide median sale price fell 2.3% year over year to $635,000 in August 2026. Snohomish County's median was $724,500, the third highest in the service area. More inventory has slowed price growth, but it has not produced discounts.",
        },
      },
      {
        '@type': 'Question',
        name: 'Should I wait until spring to sell my house in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nobody can promise where mortgage rates will be in March 2027. What is true right now is that there are fewer active buyers, they are less rushed, and a prepared, honestly priced home in a quieter market gets more attention per showing. Broker Kim Pelham's advice is to price on current comparable sales, finish the deferred maintenance before listing, and stage the home, whether you list in September or wait for spring.",
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
      { '@type': 'ListItem', position: 3, name: HEADLINE, item: URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}

import type { Metadata } from 'next';

const URL = 'https://thepelhamgroupnw.com/blog/daily-herald-american-dream-tv-host';
const IMG = 'https://thepelhamgroupnw.com/images/adtv-herald-og.jpg';
const HEADLINE = 'The Daily Herald: "Everett-based broker to host TV show about SnoCo"';
const TITLE = 'Kim Pelham in The Daily Herald: Snohomish County Host of The American Dream TV';
const DESC =
  'The Daily Herald reported on September 19, 2026 that Everett broker Kim Pelham will host the Snohomish County edition of The American Dream TV, the Emmy nominated, Telly Award winning lifestyle series. Filming starts in October with 100+ Women Who Care About Snohomish County. Nominations for places, businesses and nonprofits are open at thepelhamgroupnw.com/adtv.';
const HERALD_URL = 'https://www.heraldnet.com/2026/09/19/everett-based-broker-to-host-tv-show-about-snoco/';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'Kim Pelham American Dream TV',
    'American Dream TV Snohomish County host',
    'Daily Herald Kim Pelham',
    'Everett broker TV show',
    'The American Dream TV Everett',
    'Snohomish County lifestyle show',
    '100 Women Who Care Snohomish County',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: HEADLINE,
    description:
      'The Daily Herald on Kim Pelham hosting the Snohomish County edition of The American Dream TV. Filming starts in October. Nominations are open.',
    images: [{ url: IMG, width: 1200, height: 630, alt: 'Kim Pelham on the waterfront in Everett' }],
    type: 'article',
    url: URL,
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-09-19T10:00:00-07:00',
    modifiedTime: '2026-09-19T10:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Community Spotlight',
    tags: ['American Dream TV', 'Daily Herald', 'Snohomish County', 'Everett', 'Kim Pelham', 'press'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Daily Herald: Everett broker Kim Pelham to host The American Dream TV',
    description: 'Snohomish County edition, filming in October. Nominations open at thepelhamgroupnw.com/adtv.',
    images: [IMG],
  },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function DailyHeraldADTVLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: HEADLINE,
    alternativeHeadline: 'Kim Pelham named Snohomish County host of The American Dream TV',
    description: DESC,
    image: { '@type': 'ImageObject', url: IMG, width: 1200, height: 630 },
    datePublished: '2026-09-19T10:00:00-07:00',
    dateModified: '2026-09-19T10:00:00-07:00',
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
    articleSection: 'Community Spotlight',
    keywords: 'Kim Pelham, American Dream TV, Daily Herald, Snohomish County, Everett, television host, press',
    inLanguage: 'en-US',
    wordCount: 330,
    citation: [
      {
        '@type': 'NewsArticle',
        headline: 'Everett-based broker to host TV show about SnoCo',
        url: HERALD_URL,
        datePublished: '2026-09-19',
        author: { '@type': 'Person', name: 'Jenna Millikan' },
        publisher: { '@type': 'Organization', name: 'The Daily Herald', url: 'https://www.heraldnet.com' },
      },
    ],
    about: [
      { '@type': 'TVSeries', name: 'The American Dream TV', url: 'https://www.americandreamnetwork.tv' },
      { '@type': 'Place', name: 'Snohomish County, Washington' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}

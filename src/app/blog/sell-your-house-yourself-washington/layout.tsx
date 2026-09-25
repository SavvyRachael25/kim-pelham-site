import type { Metadata } from 'next';

const URL = 'https://thepelhamgroupnw.com/blog/sell-your-house-yourself-washington';
const IMG = 'https://thepelhamgroupnw.com/images/kim-with-client-on-couch.jpg';
const TITLE = 'Can You Sell Your House Yourself in Washington? For Sale By Owner, Zillow, and What It Costs';
const DESC =
  'Yes, you can sell your own house in Washington, but Zillow will not list it. Zillow is an NWMLS member, and in Washington State that closes for-sale-by-owner listings. Everett broker Kim Pelham explains the 1% paperwork-only service, limited service listings, why buyer agent commission decides which houses get seen, and when a for sale by owner should switch to a full listing.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'for sale by owner Washington',
    'FSBO Washington State',
    'can I list FSBO on Zillow in Washington',
    'Zillow for sale by owner Washington',
    'limited service listing Washington',
    'flat fee MLS Snohomish County',
    'sell my house myself Everett',
    'buyer agent commission Washington',
    'Kim Pelham',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Can You Sell Your House Yourself in Washington?',
    description:
      'Zillow will not take for-sale-by-owner listings in Washington any more. Here is what that means, what a 1% paperwork service covers, and when to switch to a full listing.',
    images: [{ url: IMG, width: 1024, height: 683, alt: 'Kim Pelham talking with a client at home' }],
    type: 'article',
    url: URL,
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-09-29T08:00:00-07:00',
    modifiedTime: '2026-09-29T08:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Seller Strategy',
    tags: ['for sale by owner', 'FSBO', 'Zillow', 'limited service listing', 'staging', 'Snohomish County'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can You Sell Your House Yourself in Washington?',
    description: 'Zillow will not list a for sale by owner in Washington any more. Here is what to do instead.',
    images: [IMG],
  },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function SellYourselfLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Can You Sell Your House Yourself in Washington?',
    description: DESC,
    image: { '@type': 'ImageObject', url: IMG, width: 1024, height: 683 },
    datePublished: '2026-09-29T08:00:00-07:00',
    dateModified: '2026-09-29T08:00:00-07:00',
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
    articleSection: 'Seller Strategy',
    keywords: 'for sale by owner, FSBO, Zillow, NWMLS, limited service listing, buyer agent commission, staging, Washington',
    inLanguage: 'en-US',
    about: [
      { '@type': 'Place', name: 'Snohomish County, Washington' },
      { '@type': 'Service', name: 'Limited service listing and for-sale-by-owner support' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you list a for sale by owner home on Zillow in Washington State?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Zillow is a member of the Northwest Multiple Listing Service, and in Washington State that means Zillow does not accept for-sale-by-owner listings. Other states still allow owners to post directly. In Washington a home has to be in the MLS to appear on Zillow, which is why many owners use a limited service listing to get MLS entry while still handling the sale themselves.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a limited service listing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A limited service listing is an a la carte arrangement with a broker. The seller chooses which services they want, such as MLS entry, photography, a lockbox, a sign, showing support or staging, and pays for those pieces up front rather than a full commission. The seller handles the rest of the sale themselves.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to have a broker handle only the paperwork?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pelham Group NW charges 1% to handle the contracts, disclosures, deadlines and closing when a seller has already found their own buyer. The seller keeps the rest of the commission they would otherwise have paid.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to offer to pay the buyer agent commission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, it is optional. But a buyer cannot finance their agent commission, so if a seller does not offer it the buyer has to pay roughly 2.5 to 3 percent in cash on top of their down payment and closing costs. With mortgage rates above 7 percent and plenty of inventory, many buyers simply choose a comparable home that does offer it.',
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
      { '@type': 'ListItem', position: 3, name: 'Can You Sell Your House Yourself in Washington?', item: URL },
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

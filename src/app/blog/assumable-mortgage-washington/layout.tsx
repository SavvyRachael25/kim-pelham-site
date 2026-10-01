import type { Metadata } from 'next';

const URL = 'https://thepelhamgroupnw.com/blog/assumable-mortgage-washington';
const IMG = 'https://thepelhamgroupnw.com/images/kim-with-client-on-couch.jpg';
const TITLE = 'Can I Take Over the Seller’s Mortgage? Assumable Loans in Washington, Explained';
const DESC =
  'Rates are 7.28%. An assumable loan lets you take over the seller’s old rate instead, sometimes 3% or lower. FHA, VA and USDA loans are assumable; conventional loans are not. Everett broker Kim Pelham explains the equity gap that stops most assumptions, the VA entitlement trap, what the payment actually looks like, and how to find one in Snohomish and King County.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    'assumable mortgage Washington',
    'can I assume the seller mortgage',
    'assumable loan Snohomish County',
    'FHA assumable loan Washington',
    'VA loan assumption Washington',
    'take over seller low interest rate',
    'buy a house pay less than rent Washington',
    'first time home buyer Everett',
    'Kim Pelham',
    'The Pelham Group NW',
  ],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: 'Can I Take Over the Seller’s Mortgage? Assumable Loans in Washington',
    description:
      'FHA, VA and USDA loans can be assumed. Conventional ones cannot. Here is the math, the catch that stops most of them, and how to find one here.',
    images: [{ url: IMG, width: 1024, height: 683, alt: 'Kim Pelham talking with a client at home' }],
    type: 'article',
    url: URL,
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
    publishedTime: '2026-10-01T09:00:00-07:00',
    modifiedTime: '2026-10-01T09:00:00-07:00',
    authors: ['Kim Pelham'],
    section: 'Buyer Strategy',
    tags: ['assumable mortgage', 'FHA', 'VA loan', 'first time buyer', 'interest rates', 'Snohomish County'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can I Take Over the Seller’s Mortgage?',
    description: 'FHA, VA and USDA loans are assumable. Conventional ones are not. Here is the math and the catch.',
    images: [IMG],
  },
  alternates: { canonical: URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
};

export default function AssumableLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Can I Take Over the Seller’s Mortgage? Assumable Loans in Washington, Explained',
    description: DESC,
    image: { '@type': 'ImageObject', url: IMG, width: 1024, height: 683 },
    datePublished: '2026-10-01T09:00:00-07:00',
    dateModified: '2026-10-01T09:00:00-07:00',
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
    articleSection: 'Buyer Strategy',
    keywords:
      'assumable mortgage, FHA assumption, VA loan assumption, USDA, equity gap, interest rates, first time buyer, Snohomish County, King County, Washington',
    inLanguage: 'en-US',
    about: [
      { '@type': 'Place', name: 'Snohomish County, Washington' },
      { '@type': 'Thing', name: 'Assumable mortgage' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can I take over the seller’s mortgage in Washington?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sometimes. If the seller has an FHA, VA or USDA loan, that loan can be assumed, which means you take it over at the rate they got rather than today’s rate. You still have to qualify with their lender and the lender has to approve the assumption. If the seller has a conventional loan, you cannot assume it. Conventional loans carry a due-on-sale clause, so the balance is paid off when the house sells.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which mortgages are assumable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Government-backed loans. FHA loans are assumable with lender approval and the buyer qualifying under current FHA guidelines. VA loans are assumable with lender and VA approval. USDA loans are assumable with lender and USDA approval, and the buyer has to meet USDA income and property eligibility. Conventional loans backed by Fannie Mae or Freddie Mac are not assumable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I have to be a veteran to assume a VA loan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'No. A non-veteran can assume a VA loan. But the seller’s VA entitlement stays tied up in that loan unless the buyer is a veteran who substitutes their own entitlement. That matters a great deal to the seller, because it can block them from using their VA benefit on their next house. Any VA assumption needs that conversation up front.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the catch with an assumable mortgage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'The equity gap. You assume the remaining balance, not the purchase price, so you have to cover the difference between the two. On a $650,000 house where the seller owes $350,000, that is $300,000 you have to bring in cash or finance with a second loan at today’s rates. The gap is what stops most assumptions, not the paperwork.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find homes with assumable loans in Snohomish County?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'They are rarely advertised. Some listings say it in the remarks, but most do not, because the listing agent either does not know or has not asked. The practical method is to work backwards: look for houses bought or refinanced between roughly 2020 and early 2022 when rates were lowest, then have your agent ask the listing agent what kind of loan is on it and whether the seller would consider an assumption.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a loan assumption take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Longer than a normal closing. The servicer, not a local lender, processes the assumption, and servicers are not built for speed. Plan for a longer timeline than a standard purchase and write it into the contract. A seller who needs to close in three weeks is not a candidate.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}

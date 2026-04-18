import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waterfront Home on Potlatch Beach Road, Tulalip WA | Kim Pelham Blog',
  description:
    'Explore this stunning waterfront home at 1406 Potlatch Beach Road in Tulalip, WA. Sweeping Sound views, 3 bed/1 bath, listed by Kim Pelham of The Pelham Group NW.',
  openGraph: {
    title: 'Waterfront Living on Potlatch Beach Road — One of the Best-Kept Secrets on the Sound',
    description:
      'High-bank waterfront, sweeping Puget Sound sunsets, 1925 character home. Here is why this Tulalip property is worth a serious look.',
    images: [{ url: '/images/property-03-lake-stevens-waterfront.jpg', width: 1200, height: 630 }],
    type: 'article',
    url: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
  },
};

export default function PotlatchBlogLayout({ children }: { children: React.ReactNode }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Waterfront Living on Potlatch Beach Road — Why This Tulalip Home Is One of the Best-Kept Secrets on the Sound',
    description:
      'High-bank waterfront on Puget Sound, sweeping sunset vistas, and a meticulously maintained 1925 character home. Here is why 1406 Potlatch Beach Road in Tulalip deserves your full attention.',
    image: 'https://thepelhamgroupnw.com/images/property-03-lake-stevens-waterfront.jpg',
    datePublished: '2026-04-17',
    dateModified: '2026-04-17',
    author: {
      '@type': 'Person',
      name: 'Kim Pelham',
      url: 'https://thepelhamgroupnw.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Pelham Group NW',
      url: 'https://thepelhamgroupnw.com',
    },
    url: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
    mainEntityOfPage: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
    keywords: [
      'Potlatch Beach Road',
      'Tulalip waterfront homes',
      'Snohomish County waterfront',
      'homes for sale Tulalip WA',
      'Puget Sound waterfront',
      'Kim Pelham',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the average home price on Potlatch Beach Road?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Potlatch Beach Road waterfront homes in Tulalip, WA typically list in the $800K to $1.2M range depending on lot size, condition, and water access type. High-bank waterfront properties like 1406 Potlatch Beach Road with sweeping Sound views command a premium compared to non-waterfront homes in the same ZIP code. For current pricing on active listings, contact Kim Pelham at The Pelham Group NW.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is Tulalip from Seattle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tulalip is approximately 35 miles north of Seattle. The drive via I-5 takes about 40 to 50 minutes without traffic. During weekday rush hour, expect 60 to 75 minutes southbound. Tulalip is much closer to Everett, about 15 to 20 minutes south on I-5, which makes it practical for buyers working in the Snohomish County employment corridor.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Tulalip a good place to buy waterfront property?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, and it is significantly undervalued compared to waterfront alternatives south of it. Comparable Sound views in Edmonds, Mukilteo, or Shoreline would cost $2M to $4M. Tulalip delivers similar water frontage and sunsets at a fraction of the price. The community is quiet, the Tulalip Tribe maintains significant surrounding land, and the Tulalip Bay estuary provides genuine natural surroundings. Buyers who prioritize views and value over zip code prestige consistently find Tulalip compelling.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the property taxes in Tulalip WA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Property tax rates in Tulalip (ZIP 98271, Snohomish County) run approximately 0.9% to 1.1% of assessed value annually. On a $950,000 property, expect roughly $8,550 to $10,450 per year. Snohomish County property taxes are generally lower than King County rates for comparable assessed values. For precise current tax figures on a specific parcel, verify with the Snohomish County Assessor at snohomishcountywa.gov.',
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
        name: 'Waterfront Living on Potlatch Beach Road',
        item: 'https://thepelhamgroupnw.com/blog/potlatch-beach-road-tulalip-waterfront',
      },
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

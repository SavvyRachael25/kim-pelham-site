import type { Metadata } from 'next';

const URL = 'https://thepelhamgroupnw.com/properties/17104-24th-ave-se-bothell';
const IMG = 'https://thepelhamgroupnw.com/images/og-17104-24th-ave-se.jpg';
const TITLE = '17104 24th Ave SE, Bothell WA 98012 | $690,000 | Kim Pelham';
const DESC =
  'For sale at $690,000: 17104 24th Ave SE, Bothell, WA 98012. A single-level 3 bedroom, 1 bath home of 1,240 sqft on a 7,405 sqft lot, built 1977, with laminate flooring, updated windows and a remodeled bath. NWMLS #2585165. Listed by Kim Pelham, The Pelham Group NW.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['17104 24th Ave SE', 'Bothell homes for sale', 'Bothell WA 98012', 'single level home Bothell', 'NWMLS 2585165', 'Kim Pelham', 'The Pelham Group NW'],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: '17104 24th Ave SE, Bothell WA | $690,000',
    description: 'Single level, 3 bed, 1 bath, 1,240 sqft on a 7,405 sqft lot.',
    images: [{ url: IMG, width: 1200, height: 630, alt: '17104 24th Ave SE, Bothell WA, $690,000.' }],
    type: 'website',
    url: URL,
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: '17104 24th Ave SE, Bothell WA | $690,000', description: 'Open house Saturday September 26, 11 AM to 1 PM.', images: [IMG] },
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: '17104 24th Ave SE, Bothell, WA 98012',
    url: URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17104 24th Ave SE',
      addressLocality: 'Bothell',
      addressRegion: 'WA',
      postalCode: '98012',
      addressCountry: 'US',
    },
    numberOfRooms: 3,
    numberOfBathroomsTotal: 1,
    yearBuilt: 1977,
    floorSize: { '@type': 'QuantitativeValue', value: 1240, unitCode: 'FTK' },
    lotSize: { '@type': 'QuantitativeValue', value: 7405, unitCode: 'FTK' },
    offers: {
      '@type': 'Offer',
      price: 690000,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: URL,
      seller: {
        '@type': 'RealEstateAgent',
        '@id': 'https://thepelhamgroupnw.com/#kim',
        name: 'Kim Pelham',
        telephone: '+1-425-250-9422',
        url: 'https://thepelhamgroupnw.com',
      },
    },
  };


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}

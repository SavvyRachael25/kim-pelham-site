import type { Metadata } from 'next';

const URL = 'https://thepelhamgroupnw.com/properties/17104-24th-ave-se-bothell';
const IMG = 'https://thepelhamgroupnw.com/images/og-17104-24th-ave-se.jpg';
const TITLE = '17104 24th Ave SE, Bothell WA 98012 | $715,000 | Kim Pelham';
const DESC =
  'For sale at $715,000: 17104 24th Ave SE, Bothell, WA 98012. A single-level 3 bedroom, 1 bath home of 1,240 sqft on a 7,405 sqft lot, built 1977, with laminate flooring, updated windows and a remodeled bath. NWMLS #2585165. Open house Saturday September 26, 11 AM to 1 PM. Listed by Kim Pelham, The Pelham Group NW.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: ['17104 24th Ave SE', 'Bothell homes for sale', 'Bothell WA 98012', 'single level home Bothell', 'NWMLS 2585165', 'Kim Pelham', 'The Pelham Group NW'],
  authors: [{ name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com/about' }],
  openGraph: {
    title: '17104 24th Ave SE, Bothell WA | $715,000',
    description: 'Single level, 3 bed, 1 bath, 1,240 sqft on a 7,405 sqft lot. Open house Saturday September 26, 11 AM to 1 PM.',
    images: [{ url: IMG, width: 1200, height: 630, alt: 'Just Listed: 17104 24th Ave SE, Bothell WA, $715,000. Open Saturday 11 to 1.' }],
    type: 'website',
    url: URL,
    siteName: 'The Pelham Group NW',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: '17104 24th Ave SE, Bothell WA | $715,000', description: 'Open house Saturday September 26, 11 AM to 1 PM.', images: [IMG] },
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
      price: 715000,
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

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Open House: 17104 24th Ave SE, Bothell',
    startDate: '2026-09-26T11:00:00-07:00',
    endDate: '2026-09-26T13:00:00-07:00',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: '17104 24th Ave SE',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '17104 24th Ave SE',
        addressLocality: 'Bothell',
        addressRegion: 'WA',
        postalCode: '98012',
        addressCountry: 'US',
      },
    },
    organizer: { '@type': 'RealEstateAgent', name: 'Kim Pelham', url: 'https://thepelhamgroupnw.com' },
    description: 'Open house at 17104 24th Ave SE, Bothell. Kim Pelham will be there from 11 AM to 1 PM.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      {children}
    </>
  );
}

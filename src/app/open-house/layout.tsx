import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RSVP · Open House Saturday May 30 | 11706 Admiralty Way Unit B, Everett WA | The Pelham Group NW',
  description:
    'RSVP for the open house at 11706 Admiralty Way Unit B in Everett, WA on Saturday, May 30 from 1 to 3 PM. Hosted by Kim Pelham, The Pelham Group NW. Walk through, no appointment needed.',
  openGraph: {
    title: 'Open House This Saturday · 11706 Admiralty Way Unit B, Everett WA',
    description:
      'Saturday May 30, 1 to 3 PM. Recently remodeled end-unit condo, ground floor, all one level. $375,000. NWMLS #2528831.',
    images: [
      {
        url: 'https://thepelhamgroupnw.com/listings/2528831-admiralty/photos/hero-living-fireplace.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/open-house',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/open-house' },
  robots: { index: true, follow: true },
};

export default function OpenHouseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

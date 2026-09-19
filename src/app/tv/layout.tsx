import type { Metadata } from 'next';

// The QR landing from the ADTV shoots. One field. Not for search; for the room.
export const metadata: Metadata = {
  title: 'You were in the room | Kim Pelham, The American Dream TV',
  description: 'Leave your number and Kim texts you the link the day the Snohomish County segment is up. Nothing else.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://thepelhamgroupnw.com/tv' },
  openGraph: {
    title: 'You were in the room',
    description: 'Kim texts you the link the day the segment is up. Nothing else.',
    images: [{ url: 'https://thepelhamgroupnw.com/images/kim-by-water.jpg', width: 1024, height: 683, alt: 'Kim Pelham on the Everett waterfront' }],
    url: 'https://thepelhamgroupnw.com/tv',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

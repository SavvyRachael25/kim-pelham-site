import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Houses | Kim Pelham, The Pelham Group NW',
  description:
    'Upcoming open houses with Kim Pelham of The Pelham Group NW in Snohomish County. Check back for the next one, or reach out to walk any current listing with Kim.',
  openGraph: {
    title: 'Open Houses · The Pelham Group NW',
    description:
      'Upcoming open houses with Kim Pelham in Snohomish County. Browse current listings or reach out to walk a home with Kim.',
    type: 'website',
    url: 'https://thepelhamgroupnw.com/open-house',
  },
  alternates: { canonical: 'https://thepelhamgroupnw.com/open-house' },
  robots: { index: true, follow: true },
};

export default function OpenHouseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

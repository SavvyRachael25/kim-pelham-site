import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sources & Citations | The Pelham Group NW',
  description:
    "Sources behind the statistics on Kim Pelham's website: sale-to-list ratio, NWMLS market averages, Google reviews, awards, and licensing. Numbers we publish are backed up here.",
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/sources',
  },
  openGraph: {
    title: 'Sources & Citations | The Pelham Group NW',
    description:
      "Sources behind the statistics on Kim Pelham's website: sale-to-list ratio, NWMLS market averages, Google reviews, awards, and licensing.",
    type: 'website',
  },
};

export default function SourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

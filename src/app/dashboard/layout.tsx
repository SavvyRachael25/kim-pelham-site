import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | The Pelham Group NW',
  description: 'Private analytics dashboard for Kim Pelham.',
  // Private tooling for Kim, not for the public web.
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: { index: false, follow: false },
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

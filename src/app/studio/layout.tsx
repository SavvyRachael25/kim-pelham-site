import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Studio | The Pelham Group NW',
  description: 'Private content hub for Kim Pelham. Community Spotlight clips, captions, and downloads.',
  // Private tooling for Kim, not for the public web.
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: { index: false, follow: false },
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Call About The American Dream TV | Kim Pelham, Snohomish County Host',
  description:
    'Thirty minutes on the phone with Kim Pelham about The American Dream TV. A place, a business, or a story that belongs on the show, or a nomination you want to talk through. Pick a time and Kim will call you.',
  openGraph: {
    title: 'Book a Call About The American Dream TV',
    description:
      'A place, a business, or a story that belongs on the show. Pick a time and Kim will call you.',
    images: ['/images/adtv-announcement.jpg'],
    type: 'website',
    url: 'https://thepelhamgroupnw.com/book-adtv',
  },
  alternates: {
    canonical: 'https://thepelhamgroupnw.com/book-adtv',
  },
};

export default function BookAdtvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

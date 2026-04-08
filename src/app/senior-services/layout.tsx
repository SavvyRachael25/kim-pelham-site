import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Real Estate Services | SRES Certified | Snohomish County',
  description:
    'Kim Pelham is a Certified Senior Real Estate Specialist (SRES) helping seniors and families navigate downsizing, estate sales, and senior transitions across Snohomish County.',
  openGraph: {
    title: 'Senior Real Estate Services | SRES Certified | Snohomish County',
    description:
      'Kim Pelham is a Certified Senior Real Estate Specialist (SRES) helping seniors and families navigate downsizing, estate sales, and senior transitions across Snohomish County.',
    images: ['/images/kim-with-door-cropped.jpg'],
    type: 'website',
  },
  alternates: {
    canonical: 'https://kim-pelham-site.vercel.app/senior-services',
  },
};

export default function SeniorServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

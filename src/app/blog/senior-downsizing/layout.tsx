import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Downsizing in Snohomish County: A Real Guide | Kim Pelham',
  description: 'Thinking about downsizing in Snohomish County? SRES-certified broker Kim Pelham shares a compassionate, practical guide for seniors navigating this big life transition.',
  openGraph: {
    title: 'Senior Downsizing in Snohomish County: A Real Guide',
    description: 'Thinking about downsizing in Snohomish County? SRES-certified broker Kim Pelham shares a compassionate, practical guide for seniors navigating this big life transition.',
    images: ['/images/kim-with-door-cropped.jpg'],
    type: 'article',
  },
  alternates: { canonical: 'https://kim-pelham-site.vercel.app/blog/senior-downsizing' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is an SRES realtor and why should seniors work with one?",
                "acceptedAnswer": { "@type": "Answer", "text": "An SRES (Senior Real Estate Specialist) is a realtor certified by the National Association of Realtors with specialized training in the needs of buyers and sellers aged 50+. SRES training covers retirement income qualification, reverse mortgages, Medicare/Medicaid implications, estate planning considerations, and senior housing options. Seniors benefit from working with an SRES because downsizing involves financial and legal complexities that go well beyond a standard real estate transaction." }
              },
              {
                "@type": "Question",
                "name": "When is the best time to downsize your home as a senior?",
                "acceptedAnswer": { "@type": "Answer", "text": "The best time to downsize is typically when two or more of these conditions are true: home maintenance has become burdensome, the home is larger than daily life requires, equity represents a significant untapped financial resource, and you have a clear vision of where you want to go next. Downsizing before a health or financial crisis — proactively, on your own timeline — consistently produces better outcomes than downsizing reactively under pressure." }
              },
              {
                "@type": "Question",
                "name": "Do seniors pay capital gains tax when selling a home in Washington State?",
                "acceptedAnswer": { "@type": "Answer", "text": "Washington State has no state income tax, so capital gains from a home sale are not taxed at the state level. At the federal level, homeowners who have lived in their home for at least 2 of the last 5 years can exclude up to $250,000 (single filers) or $500,000 (married filing jointly) in capital gains from taxation under IRS Section 121. Seniors with gains above those thresholds should consult a CPA before listing." }
              },
              {
                "@type": "Question",
                "name": "What senior housing options are available in Snohomish County WA?",
                "acceptedAnswer": { "@type": "Answer", "text": "Snohomish County offers active adult (55+) communities in Marysville and Everett, maintenance-free condos and townhomes in Bothell and Mill Creek, independent living communities in Everett and Snohomish city, and single-story homes throughout the county. The right option depends on lifestyle preferences, care needs, proximity to family, and budget." }
              },
              {
                "@type": "Question",
                "name": "How long does the downsizing process take for seniors in Snohomish County?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most seniors benefit from a 60–90 day preparation period before listing — longer than the 2–3 weeks a typical seller needs. This accounts for decluttering, sorting belongings with family, making light repairs, and emotionally processing the transition. The actual sale, once listed, typically takes 2–6 weeks in active Snohomish County markets. Total timeline from decision to closing: plan for 3–6 months to do it thoughtfully." }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

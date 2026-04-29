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
    canonical: 'https://thepelhamgroupnw.com/senior-services',
  },
};

export default function SeniorServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thepelhamgroupnw.com" },
              { "@type": "ListItem", "position": 2, "name": "Senior Real Estate Services", "item": "https://thepelhamgroupnw.com/senior-services" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does SRES mean and why should I hire one for downsizing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SRES stands for Seniors Real Estate Specialist. It is a designation from the National Association of Realtors that requires 12+ hours of specialized training in senior housing options, reverse mortgages, estate planning coordination, and the emotional dynamics of downsizing. Selling a family home you have lived in for 30+ years is not just a transaction. An SRES broker understands the life transition happening alongside the real estate transaction."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the downsizing process actually take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Realistically, 3-6 months from start to move-in. Plan on 1 month to make major decisions about belongings, 1-2 months to list and sell the current home, and 1-2 months to find and close on the new home. Seniors who try to rush this timeline often feel overwhelmed. Kim plans the sequence so each step happens in the right order without piling pressure on the family."
                }
              },
              {
                "@type": "Question",
                "name": "What happens to all the furniture and belongings during a senior downsizing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kim coordinates the full process. Items are sorted into keep, sell, donate, and discard. She connects families with estate sale companies, consignment shops, donation services, and junk removal, depending on the category. You make the decisions. Kim and her team handle the logistics. This is one of the most emotionally demanding parts of downsizing, and Kim approaches it with patience and respect."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know what furniture will fit in the new home before I move?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Before listing the current home, Kim visits the new space, measures room by room, and creates a floor plan showing which pieces fit. No moving day surprises. This service alone prevents the costly mistake of moving furniture that does not fit and then having to dispose of it after the fact."
                }
              },
              {
                "@type": "Question",
                "name": "Which Snohomish County neighborhoods are best for active adults 55 and older?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lake Stevens: newer construction, quiet streets, lower maintenance. Mill Creek: walkable town center, HOA-managed communities, excellent medical facilities nearby. Snohomish: historic downtown, strong community culture, slower pace. Kim matches each client to the neighborhood that fits their lifestyle, health needs, and budget, not just the one that is easiest to sell."
                }
              },
              {
                "@type": "Question",
                "name": "Will downsizing hurt my sale price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Right-sized and well-staged homes in the $500,000-$700,000 range sell in 14-21 days in Snohomish County with strong demand from families and move-up buyers. Moving quickly is often a good thing. It puts equity in your hands faster and reduces the carrying costs of a home you are no longer living in."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}

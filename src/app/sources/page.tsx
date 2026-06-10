import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface Source {
  id: string;
  claim: string;
  source: string;
  detail: string;
  href?: string;
  asOf: string;
}

const sources: Source[] = [
  {
    id: 'sale-to-list',
    claim: '102.3% average sale-to-list ratio',
    source:
      "Kim Pelham's NWMLS-recorded closed transactions as listing broker, trailing 12 months",
    detail:
      'Computed across all closed listings represented by Kim Pelham as listing broker over the trailing 12 months. Calculation: final closed sale price divided by original list price, averaged across listings. Source data: Northwest Multiple Listing Service (NWMLS) closed-transaction records.',
    asOf: 'Rolling 12-month average as of May 2026',
  },
  {
    id: 'market-average',
    claim: '100.2% NWMLS Snohomish County market average sale-to-list ratio',
    source: 'Northwest Multiple Listing Service (NWMLS) monthly market report',
    detail:
      'Snohomish County aggregate sale-to-list ratio across all closed residential transactions, reported in the NWMLS monthly market report. Rolling average for early 2026.',
    href: 'https://www.nwmls.com/discover/news-and-statistics/',
    asOf: 'Early 2026 rolling average',
  },
  {
    id: 'google-reviews',
    claim: '40 five-star Google reviews',
    source: 'Google Business Profile for The Pelham Group NW',
    detail:
      "Verified Google Business Profile reviews. Current count and 5.0 average rating can be confirmed directly on Google's listing for The Pelham Group NW.",
    href: 'https://www.google.com/search?q=The+Pelham+Group+NW',
    asOf: 'As of May 2026',
  },
  {
    id: 'best-of-snoco',
    claim: 'Best of Snohomish County, 2023 and 2024',
    source: "Readers' Choice awards published by The Herald (Everett, WA)",
    detail:
      "Best of Snohomish County is an annual readers' poll conducted by The Daily Herald (Everett, WA). Kim Pelham was recognized in the Real Estate Broker category in both the 2023 and 2024 awards.",
    href: 'https://www.heraldnet.com/',
    asOf: '2023 and 2024 award years',
  },
  {
    id: 'experience',
    claim: '17 years as a licensed Washington real estate broker',
    source: 'Washington State Department of Licensing (WA DOL) public records',
    detail:
      "Active Washington real estate broker license held continuously since 2009. License status and history is publicly searchable through the Washington Department of Licensing's online license lookup.",
    href: 'https://professionals.dol.wa.gov/s/license-lookup',
    asOf: 'Continuous since 2009',
  },
  {
    id: 'two-client-policy',
    claim: 'Maximum two active buyers at a time',
    source: 'Operating policy of The Pelham Group NW',
    detail:
      'Internal operating policy stated publicly across all marketing channels. Kim accepts a maximum of two active client engagements simultaneously to preserve the depth of attention on each listing, showing, and closing. This is a business-practice claim, not a third-party metric.',
    asOf: 'Standing policy',
  },
  {
    id: 'homes-sold',
    claim: '176 homes sold',
    source:
      "Kim Pelham's career closed-transaction count, NWMLS-recorded",
    detail:
      'Cumulative count of closed residential transactions where Kim Pelham was the listing or buyer agent of record, as captured by NWMLS records.',
    asOf: 'Career to date, as of early 2026',
  },
];

const citationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sources & Citations',
  url: 'https://thepelhamgroupnw.com/sources',
  description:
    "Sources behind the statistics on Kim Pelham's website.",
  citation: sources.map((s) => ({
    '@type': 'CreativeWork',
    name: s.source,
    description: s.detail,
    ...(s.href ? { url: s.href } : {}),
  })),
};

export default function SourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citationSchema) }}
      />
      <Nav />
      <main>
      <section
        style={{
          padding: '120px 24px 60px',
          backgroundColor: '#2F5233',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.5rem',
              color: '#B8845C',
              margin: '0 0 12px 0',
            }}
          >
            receipts
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(40px, 7vw, 64px)',
              fontWeight: 700,
              color: '#F8F5F0',
              margin: '0 0 16px 0',
              lineHeight: 1.1,
            }}
          >
            Sources &amp; citations
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'rgba(248, 245, 240, 0.85)',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Every number on this site has a receipt. Here they are, one by one.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: '80px 20px',
          backgroundColor: '#F8F5F0',
        }}
      >
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#3D2817',
              marginBottom: '48px',
            }}
          >
            We try to use specific numbers instead of vague claims. Specific
            numbers should come with a way to verify them. This page lists
            every statistic published on the site, where it comes from, and how
            to check it yourself.
          </p>

          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              counterReset: 'source-counter',
            }}
          >
            {sources.map((s, idx) => (
              <li
                key={s.id}
                id={s.id}
                style={{
                  borderTop: '1px solid rgba(61, 40, 23, 0.15)',
                  padding: '28px 0',
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '16px',
                  scrollMarginTop: '120px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '32px',
                    fontWeight: 600,
                    color: '#B8845C',
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#2F5233',
                      margin: '0 0 8px 0',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.claim}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#3D2817',
                      margin: '0 0 8px 0',
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px',
                    }}
                  >
                    Source
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      color: '#3D2817',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {s.source}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: 'rgba(61, 40, 23, 0.78)',
                      margin: '0 0 12px 0',
                    }}
                  >
                    {s.detail}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'rgba(61, 40, 23, 0.6)',
                      margin: 0,
                      fontStyle: 'italic',
                    }}
                  >
                    {s.asOf}
                    {s.href ? (
                      <>
                        {' · '}
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: '#B8845C',
                            textDecoration: 'underline',
                          }}
                        >
                          verify
                        </a>
                      </>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div
            style={{
              marginTop: '64px',
              padding: '32px',
              backgroundColor: '#F0EDE7',
              borderLeft: '4px solid #B8845C',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '20px',
                fontWeight: 600,
                color: '#2F5233',
                margin: '0 0 12px 0',
              }}
            >
              Find a number on the site that isn&apos;t listed here?
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#3D2817',
                margin: '0 0 16px 0',
              }}
            >
              That&apos;s on me. Email me at{' '}
              <a
                href="mailto:kim@thepelhamgroupnw.com"
                style={{ color: '#B8845C', textDecoration: 'underline' }}
              >
                kim@thepelhamgroupnw.com
              </a>{' '}
              and I&apos;ll either add the source or take the claim down.
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 600,
                color: '#2F5233',
                textDecoration: 'underline',
              }}
            >
              Contact Kim directly
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

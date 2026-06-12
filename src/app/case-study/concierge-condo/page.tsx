'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import KimCaresNote from '@/components/KimCaresNote';

const SITE = 'https://thepelhamgroupnw.com';
const BEFORE_PATH = '/case-studies/mathis-condo/before';
const AFTER_PATH = '/case-studies/mathis-condo/after';

// Photo counts confirmed against the Drive folder.
// TODO: re-pair before/after by room once Kim or Rachael flags the room labels;
// for now both grids run in chronological order from the original shoots.
const BEFORE_COUNT = 35;
const AFTER_COUNT = 25;
const beforePhotos = Array.from({ length: BEFORE_COUNT }, (_, i) => ({
  src: `${BEFORE_PATH}/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Before photo ${i + 1} of the concierge condo prep, April 2026`,
}));
const afterPhotos = Array.from({ length: AFTER_COUNT }, (_, i) => ({
  src: `${AFTER_PATH}/${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `After photo ${i + 1} of the concierge condo, post-prep May 2026`,
}));

// Hero before/after pair for the dramatic split-screen at the top.
// Using image 01 of each set as the showcase. Re-pair after Kim confirms which pair is most dramatic.
const HERO_BEFORE = `${BEFORE_PATH}/01.jpg`;
const HERO_AFTER = `${AFTER_PATH}/01.jpg`;

const conciergeBullets: string[] = [
  'Walked the unit with the owners before they left the state, then took the keys',
  'Planned the punch list with our crew so every dollar went where buyers actually look',
  'New LVP wide-plank flooring throughout, fresh designer paint top to bottom',
  'New vanities, sinks, faucets, tub and shower hardware in both bathrooms',
  'Refinished tub and shower surrounds, brushed nickel hardware throughout',
  'New LED can lighting, new wall heaters, modernized switches and outlets',
  'Smart appliances, smart thermostat, smart automatic blinds',
  'Staged the unit ourselves with Kim\'s own pieces, photographed for listing',
  'Owners approved every step over text and a quick video call, no in-person visits required',
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'How a Snohomish County Condo Sold for Top Dollar After the Owners Moved Out of State',
  description:
    'A real Pelham Group concierge case study. Two homeowners moved out of state mid-prep, and we still delivered a top-dollar sale. Before and after photos, full timeline, and what we did to bridge the distance.',
  author: { '@type': 'Person', name: 'Kim Pelham', url: SITE },
  publisher: {
    '@type': 'RealEstateAgent',
    name: 'The Pelham Group NW',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/images/kim-headshot-msh.jpg` },
  },
  image: [`${SITE}${HERO_AFTER}`],
  mainEntityOfPage: `${SITE}/case-study/concierge-condo`,
  about: { '@type': 'Service', name: 'Pelham Group Pre-Sale Concierge Service' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE}/case-study` },
    { '@type': 'ListItem', position: 3, name: 'Concierge Condo', item: `${SITE}/case-study/concierge-condo` },
  ],
};

export default function CondoCaseStudyPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        <InnerHero
          title="How a Snohomish Condo Sold for Top Dollar After the Owners Moved Out of State"
          subtitle="A real Pelham Group concierge case study"
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="Refreshed condo interior with warm staging and new flooring"
        />

        {/* AEO opener */}
        <section style={{ background: 'var(--color-cream)', padding: '48px 24px 36px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.06rem', lineHeight: 1.7, color: 'var(--color-text)', margin: 0 }}>
              <b>The short version.</b> Two owners had to move out of state before their Snohomish County condo was ready to list. They could not be here to manage contractors, paint cabinets, refinish a tub, or stand in the kitchen at 8 AM to let the flooring crew in. So they let us do all of it. We took the keys, ran the punch list with our own crew, staged the unit with Kim&apos;s own pieces, photographed it for the listing, and brought them a top-dollar sale. They never had to fly back. This page shows what that actually looks like, photo by photo.
            </p>
          </div>
        </section>

        {/* HERO BEFORE / AFTER PAIR */}
        <section style={{ padding: '72px 24px 48px', background: '#fff' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                The transformation
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.6vw, 42px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 28px', lineHeight: 1.12, maxWidth: 720 }}>
              Same square footage. A very different first impression.
            </h2>

            <div className="hero-ba" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: '0 16px 40px rgba(47, 82, 51, 0.08)' }}>
              <figure style={{ position: 'relative', margin: 0, aspectRatio: '4 / 3', background: 'var(--color-cream-dark)' }}>
                <Image src={HERO_BEFORE} alt="Condo living area before pre-sale prep, April 2026" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                <figcaption style={{ position: 'absolute', top: 16, left: 16, background: 'var(--color-cream)', color: 'var(--color-forest)', padding: '6px 12px', borderRadius: 3, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Before · April 2026
                </figcaption>
              </figure>
              <figure style={{ position: 'relative', margin: 0, aspectRatio: '4 / 3', background: 'var(--color-cream-dark)' }}>
                <Image src={HERO_AFTER} alt="Same condo living area after pre-sale prep, May 2026" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                <figcaption style={{ position: 'absolute', top: 16, right: 16, background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '6px 12px', borderRadius: 3, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  After · May 2026
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* THE BRIEF */}
        <section style={{ padding: '72px 24px', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                The brief
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 20px', lineHeight: 1.15 }}>
              They had a job to take. The condo had to sell anyway.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: '0 0 18px' }}>
              The owners called us a few weeks before they had to be out of state. The condo needed
              real work to sell well: a top-to-bottom paint refresh, new flooring throughout, new
              bath hardware and refinished surrounds, updated lighting, fresh staging. They could
              not be in town to manage any of it.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', color: 'var(--color-text-light)', lineHeight: 1.7, margin: 0 }}>
              The traditional answer here is: list as-is, take less, move on. We do this work
              differently. We took the keys, ran the entire prep ourselves, and brought them a
              top-dollar sale without a single round trip back to Snohomish County.
            </p>
          </div>
        </section>

        {/* THE CONCIERGE — bullet list of what we did */}
        <section style={{ padding: '72px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 980, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                What we actually did
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 28px', lineHeight: 1.15 }}>
              The concierge service, end to end
            </h2>

            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
              {conciergeBullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 16,
                    padding: '20px 22px',
                    background: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '3px solid var(--color-clay)',
                    borderRadius: 6,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flex: '0 0 auto',
                      fontFamily: 'var(--font-heading)',
                      fontSize: 22,
                      fontWeight: 700,
                      color: 'var(--color-clay)',
                      lineHeight: 1,
                      minWidth: 32,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-text)', lineHeight: 1.55 }}>
                    {b}
                  </span>
                </li>
              ))}
            </ol>

            {/* TODO: confirm headline numbers with Kim (sale price, days on market, sale-to-list ratio)
                and convert the placeholder line below into a real stat strip. */}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-text-faint)', lineHeight: 1.6, margin: '28px 0 0', fontStyle: 'italic' }}>
              TODO Kim: confirm final sale price, days on market, and sale-to-list ratio for this
              listing so we can add the headline numbers here.
            </p>
          </div>
        </section>

        {/* BEFORE GALLERY */}
        <section style={{ padding: '88px 24px 56px', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <header style={{ marginBottom: 28, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ maxWidth: 640 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                    Before · April 7, 2026
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.8vw, 32px)', fontWeight: 500, color: 'var(--color-forest)', margin: 0, lineHeight: 1.18 }}>
                  Where we started.
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-faint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {BEFORE_COUNT} photos
              </span>
            </header>
            <ul className="photo-grid" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
              {beforePhotos.map((p) => (
                <li key={p.src} style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 6, background: 'var(--color-cream-dark)' }}>
                  <Image src={p.src} alt={p.alt} fill loading="lazy" sizes="(max-width: 720px) 50vw, (max-width: 1180px) 33vw, 220px" style={{ objectFit: 'cover' }} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* AFTER GALLERY */}
        <section style={{ padding: '56px 24px 96px', background: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <header style={{ marginBottom: 28, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ maxWidth: 640 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                    After · May 8, 2026
                  </span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 2.8vw, 32px)', fontWeight: 500, color: 'var(--color-forest)', margin: 0, lineHeight: 1.18 }}>
                  How we listed it.
                </h2>
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-text-faint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {AFTER_COUNT} photos
              </span>
            </header>
            <ul className="photo-grid" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 12 }}>
              {afterPhotos.map((p) => (
                <li key={p.src} style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 6, background: 'var(--color-cream-dark)' }}>
                  <Image src={p.src} alt={p.alt} fill loading="lazy" sizes="(max-width: 720px) 50vw, (max-width: 1180px) 33vw, 220px" style={{ objectFit: 'cover' }} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTAs — two follow-on offers */}
        <section style={{ padding: '88px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                Your turn
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 28px', lineHeight: 1.12, maxWidth: 720 }}>
              Thinking about your own condo or home?
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22 }}>
              <article style={{ padding: '32px 28px', background: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: 8 }}>
                <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)', marginBottom: 8 }}>
                  Free guide
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 12px', lineHeight: 1.2 }}>
                  The Pre-Sale Renovation Playbook
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-text-light)', lineHeight: 1.65, margin: '0 0 22px' }}>
                  28 pages on the updates that pay back at closing, the money-pits to skip, and how
                  the concierge plan handles every detail. Same playbook we used here.
                </p>
                <Link
                  href="/listwithkim"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'var(--color-clay)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 14.5,
                    padding: '12px 22px',
                    borderRadius: 4,
                    textDecoration: 'none',
                  }}
                >
                  Send me the Playbook <span aria-hidden="true">→</span>
                </Link>
              </article>

              <article style={{ padding: '32px 28px', background: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: 8 }}>
                <span style={{ display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)', marginBottom: 8 }}>
                  Free report
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 12px', lineHeight: 1.2 }}>
                  Your Home Equity Report
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-text-light)', lineHeight: 1.65, margin: '0 0 22px' }}>
                  A real read on what your condo or home is worth in this market, and what the
                  pre-sale prep could change about that number. Hand-built by Kim, no Zestimate.
                </p>
                <Link
                  href="/condo-concierge"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'transparent',
                    color: 'var(--color-forest)',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 14.5,
                    padding: '12px 22px',
                    borderRadius: 4,
                    textDecoration: 'none',
                    border: '2px solid var(--color-forest)',
                  }}
                >
                  Request my report <span aria-hidden="true">→</span>
                </Link>
              </article>
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-text-faint)', lineHeight: 1.6, margin: '28px 0 0', fontStyle: 'italic' }}>
              TODO Kim: confirm the Home Equity Report fulfillment path. The CTA currently routes
              into the gated funnel form which captures the lead and tags it; we still need the
              actual PDF or the Kim-built report process to plug in here.
            </p>
          </div>
        </section>

        <KimCaresNote />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 720px) {
          .hero-ba {
            grid-template-columns: 1fr !important;
          }
          .photo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </>
  );
}

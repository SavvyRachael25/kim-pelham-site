'use client';

import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import KimCaresNote from '@/components/KimCaresNote';
import FAQSection from '@/components/FAQSection';
import CaptionedCarousel from '@/components/CaptionedCarousel';
import BeforeAfterMorphCarousel from '@/components/BeforeAfterMorphCarousel';
import {
  roomPairs,
  listingMediaSlides,
  conciergeBullets,
  caseStudyFAQs,
  BEFORE_COUNT,
  AFTER_COUNT,
  HERO_BEFORE_SRC,
  HERO_AFTER_SRC,
} from '@/lib/case-studies/mathis-condo';

const SITE = 'https://thepelhamgroupnw.com';

// Hero before/after pair, both of the SAME room (living room).
const HERO_BEFORE = HERO_BEFORE_SRC;
const HERO_AFTER = HERO_AFTER_SRC;
const BEFORE_PATH = '/case-studies/mathis-condo/before';
const AFTER_PATH = '/case-studies/mathis-condo/after';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'How We Got a Snohomish County Condo Listing-Ready After the Owners Moved Out of State',
  description:
    'A real Pelham Group concierge case study, currently on the market. Two homeowners moved out of state mid-prep. We took the keys, ran the full punch list, and got the condo listing-ready without a single round trip back. 60 before and after photos and the full timeline.',
  author: { '@type': 'Person', name: 'Kim Pelham', url: SITE },
  publisher: {
    '@type': 'RealEstateAgent',
    name: 'The Pelham Group NW',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/images/kim-headshot-msh.jpg` },
  },
  image: [`${SITE}${HERO_AFTER}`, `${SITE}${HERO_BEFORE}`],
  mainEntityOfPage: `${SITE}/case-study/concierge-condo`,
  about: { '@type': 'Service', name: 'Pelham Group Pre-Sale Concierge Service' },
  contentLocation: {
    '@type': 'Place',
    name: 'Snohomish County, Washington',
    address: { '@type': 'PostalAddress', addressRegion: 'WA', addressCountry: 'US', addressLocality: 'Snohomish County' },
    geo: { '@type': 'GeoCoordinates', latitude: 47.9785, longitude: -122.2098 },
  },
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

// HowTo schema describing the concierge service as a 9-step process so AI engines
// (Google AI Overviews, ChatGPT, Perplexity) can lift "how does the Pelham Group
// concierge service work" answers verbatim.
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The Pelham Group Pre-Sale Concierge Service, end to end',
  description:
    'How Kim Pelham and The Pelham Group NW handle a full pre-sale prep for a Snohomish County home, even when the owners are out of state.',
  inLanguage: 'en-US',
  totalTime: 'P21D',
  supply: [{ '@type': 'HowToSupply', name: 'Keys to the home' }],
  tool: [
    { '@type': 'HowToTool', name: 'Vetted local crew' },
    { '@type': 'HowToTool', name: 'Pelham Group in-house staging' },
    { '@type': 'HowToTool', name: 'Professional listing photography' },
  ],
  step: conciergeBullets.map((text, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: `Step ${i + 1}`,
    text,
  })),
};

const imageObjectSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE}${HERO_BEFORE}`,
    caption: 'Snohomish County condo, baseline before Pelham Group pre-sale prep',
    creator: { '@type': 'Person', name: 'Kim Pelham' },
    creditText: 'The Pelham Group NW',
    datePublished: '2026-05-08',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `${SITE}${HERO_AFTER}`,
    caption: 'Same Snohomish County condo, listing-ready after Pelham Group concierge prep',
    creator: { '@type': 'Person', name: 'Kim Pelham' },
    creditText: 'The Pelham Group NW',
    datePublished: '2026-05-08',
  },
];

export default function CondoCaseStudyPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {imageObjectSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <main>
        <InnerHero
          title="How We Got a Snohomish Condo Listing-Ready After the Owners Moved Out of State"
          subtitle="A real Pelham Group concierge case study, currently on the market"
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="Refreshed condo interior with warm staging and new flooring"
        />

        {/* AEO direct-answer opener */}
        <section style={{ background: 'var(--color-cream)', padding: '48px 24px 36px' }}>
          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: 'var(--color-forest)', color: 'var(--color-cream)', borderRadius: 999, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 18 }}>
              <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-clay-light, #d4a07a)' }} />
              Currently listed
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.06rem', lineHeight: 1.7, color: 'var(--color-text)', margin: 0 }}>
              <b>The short version.</b> Two owners had to move out of state before their Snohomish
              County condo was ready to list. They could not be here to manage contractors, paint
              cabinets, refinish a tub, or stand in the kitchen at 8 AM to let the flooring crew in.
              So they let us do all of it. We took the keys, ran the punch list with our own crew,
              staged the unit with Kim&apos;s own pieces, photographed it for the listing, and got
              it on the market. They never had to fly back. The unit is currently listed. The 60
              photos below show exactly what that actually looks like.
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
                <Image src={HERO_BEFORE} alt="Condo living area before pre-sale prep, May 2026" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                <figcaption style={{ position: 'absolute', top: 16, left: 16, background: 'var(--color-cream)', color: 'var(--color-forest)', padding: '6px 12px', borderRadius: 3, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Before · May 2026
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
              differently. We took the keys, ran the entire prep ourselves, and got the condo on
              the market without a single round trip back to Snohomish County. It is listed and
              available right now.
            </p>
          </div>
        </section>

        {/* CONCIERGE BULLETS */}
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

            {/* TODO Kim: once the listing is under contract, we add list price → sale price + DOM here. */}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-text-faint)', lineHeight: 1.6, margin: '28px 0 0', fontStyle: 'italic' }}>
              TODO Kim/Rachael: when ready, add a "Listed for $X" line + link to the MLS listing here. Once it goes under contract, swap in the final price and days-on-market.
            </p>
          </div>
        </section>

        {/* PAIRED ROOM WALKTHROUGH (before fades into after, same room) */}
        <section style={{ padding: '88px 24px 80px', background: 'var(--color-cream)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <BeforeAfterMorphCarousel
              pairs={roomPairs}
              beforePath={BEFORE_PATH}
              afterPath={AFTER_PATH}
              badge="The walkthrough · before and after, room by room"
              headline="Same room. New chapter."
              intro="Each photo holds for a beat, then fades into the after of the same room. Tap to flip it yourself, or use the arrows to step through the unit."
            />
          </div>
        </section>

        {/* LISTING MEDIA GALLERY (after-only: exteriors, garage, HOA, vignettes) */}
        <section style={{ padding: '40px 24px 96px', background: 'var(--color-cream)', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <CaptionedCarousel
              slides={listingMediaSlides}
              badge={`The listing media set · ${listingMediaSlides.length} photos`}
              heading="The rest of the listing media."
              intro="Exteriors, the patio, the garage, HOA grounds, and a few interior styling vignettes. The shots without a real before, but worth seeing for the full picture."
              ariaLabel="Listing media set photo carousel"
            />
          </div>
        </section>

        {/* CTA CARDS */}
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
                  28 pages on the updates that pay back at closing, the money-pits to skip, and how the concierge plan handles every detail. Same playbook we used here.
                </p>
                <Link
                  href="/condo-concierge"
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
                  A real read on what your condo or home is worth in this market, and what the pre-sale prep could change about that number. Hand-built by Kim, no Zestimate.
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
          </div>
        </section>

        {/* FAQ. FAQPage JSON-LD emitted by FAQSection automatically. */}
        <FAQSection
          title="Common questions about the Pelham Group Concierge"
          faqs={caseStudyFAQs}
          backgroundColor="var(--color-cream)"
        />

        <KimCaresNote />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 720px) {
          .hero-ba { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

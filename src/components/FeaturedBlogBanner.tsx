'use client';

import Image from 'next/image';
import Link from 'next/link';

/*
  FeaturedBlogBanner — homepage editorial banner pointing at the
  most important blog article (currently the Sep 19, 2026 Daily
  Herald story on Kim hosting The American Dream TV). Mirrors the visual weight of FeaturedListing
  wide so swapping it in does not break the homepage rhythm.
*/

const FEATURED = {
  slug: 'daily-herald-american-dream-tv-host',
  category: 'The Daily Herald',
  date: 'September 19, 2026',
  readTime: '2 min read',
  title: 'Everett-based broker to host TV show about SnoCo',
  hook:
    'The Daily Herald wrote it up on September 19. I was chosen to host the Snohomish County edition of The American Dream TV. We will be filming in October, and I would love to have your nominations for the things you love about Snohomish County.',
  hero: '/images/kim-by-water.jpg',
  heroAlt: 'Kim Pelham on the waterfront in Everett',
  badge: 'In the news',
  kicker: 'in the news',
  logo: '/images/adtv-emmy-logo.png',
  logoAlt: 'The American Dream TV, Emmy nominated',
  primaryLabel: 'Read the story',
  secondaryHref: '/adtv',
  secondaryLabel: 'Nominate a place',
};

export default function FeaturedBlogBanner() {
  return (
    <section
      aria-label="Featured blog post"
      style={{
        background: '#F8F5F0',
        padding: '64px 24px',
        borderTop: '1px solid #E8E3DA',
        borderBottom: '1px solid #E8E3DA',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '40px',
          alignItems: 'center',
        }}
        className="featured-blog-grid"
      >
        <Link
          href={`/blog/${FEATURED.slug}`}
          style={{
            position: 'relative',
            display: 'block',
            height: 'clamp(280px, 40vw, 440px)',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          }}
        >
          <Image
            src={FEATURED.hero}
            alt={FEATURED.heroAlt}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: '#B8845C',
              color: '#FFFFFF',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: '3px',
            }}
          >
            {FEATURED.badge}
          </div>
        </Link>

        <div>
          <div style={{ position: 'relative', width: '224px', height: '70px', margin: '0 0 18px 0' }}>
            <Image
              src={FEATURED.logo}
              alt={FEATURED.logoAlt}
              fill
              sizes="224px"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.4rem',
              color: '#B8845C',
              margin: '0 0 8px 0',
              lineHeight: 1,
            }}
          >
            {FEATURED.kicker}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#B8845C',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 14px 0',
            }}
          >
            {FEATURED.category} &middot; {FEATURED.date} &middot; {FEATURED.readTime}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 500,
              color: '#2F5233',
              margin: '0 0 18px 0',
              lineHeight: 1.18,
            }}
          >
            <Link
              href={`/blog/${FEATURED.slug}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {FEATURED.title}
            </Link>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.02rem',
              color: '#4a4a4a',
              lineHeight: 1.65,
              margin: '0 0 28px 0',
              maxWidth: '520px',
            }}
          >
            {FEATURED.hook}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              href={`/blog/${FEATURED.slug}`}
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#B8845C',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              {FEATURED.primaryLabel}
            </Link>
            <Link
              href={FEATURED.secondaryHref}
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'transparent',
                color: '#2F5233',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '4px',
                textDecoration: 'none',
                border: '2px solid #2F5233',
              }}
            >
              {FEATURED.secondaryLabel} &rarr;
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .featured-blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

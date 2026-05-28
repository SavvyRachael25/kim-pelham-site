'use client';

import Image from 'next/image';
import Link from 'next/link';

/*
  FeaturedListing — sitewide reusable featured-listing block.
  Points at /properties/<slug>. Currently configured for 11706 Admiralty Way Unit B.
  Drop into any page; sized to look natural inside hero-adjacent sections + homepage.
*/

const LISTING = {
  slug: '11706-admiralty-way-unit-b-everett',
  address: '11706 Admiralty Way, Unit B',
  city: 'Everett, WA 98204',
  price: '$375,000',
  beds: '2',
  baths: '1.75',
  sqft: '1,140',
  mls: 'NWMLS #2528831',
  hook: 'Recently remodeled end-unit, ground floor, all one level.',
  openHouse: 'Saturday, May 30 · 1 to 3 PM',
  hero: '/listings/2528831-admiralty/photos/hero-living-fireplace.jpg',
  heroAlt:
    'Living room with wood-burning fireplace at 11706 Admiralty Way Unit B, Everett WA',
};

type Variant = 'wide' | 'card';

export default function FeaturedListing({ variant = 'wide' }: { variant?: Variant }) {
  if (variant === 'card') {
    return (
      <article
        style={{
          background: '#FFFFFF',
          border: '1px solid #E8E3DA',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Link href={`/properties/${LISTING.slug}`} style={{ display: 'block', position: 'relative', height: '260px' }}>
          <Image src={LISTING.hero} alt={LISTING.heroAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              background: '#B8845C',
              color: '#FFFFFF',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderRadius: '2px',
            }}
          >
            Open Sat
          </div>
        </Link>
        <div style={{ padding: '24px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 8px 0' }}>
            {LISTING.mls} &middot; Active
          </p>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, color: '#2C2C2C', margin: '0 0 4px 0', lineHeight: 1.2 }}>
            {LISTING.address}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#777', margin: '0 0 16px 0' }}>
            {LISTING.city}
          </p>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 700, color: '#2F5233', margin: '0 0 12px 0', lineHeight: 1 }}>
            {LISTING.price}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#2C2C2C', margin: '0 0 20px 0' }}>
            {LISTING.beds} bed &middot; {LISTING.baths} bath &middot; {LISTING.sqft} sqft
          </p>
          <Link
            href={`/properties/${LISTING.slug}`}
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              background: '#2F5233',
              color: '#F8F5F0',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            See the listing &rarr;
          </Link>
        </div>
      </article>
    );
  }

  // Wide variant — full-width hero-style row
  return (
    <section
      aria-label="Currently featured listing"
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
        className="featured-listing-grid"
      >
        <Link
          href={`/properties/${LISTING.slug}`}
          style={{
            position: 'relative',
            display: 'block',
            height: 'clamp(280px, 40vw, 440px)',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          }}
        >
          <Image src={LISTING.hero} alt={LISTING.heroAlt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" priority />
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
            Open Sat May 30 &middot; 1 to 3 PM
          </div>
        </Link>
        <div>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: '#B8845C', margin: '0 0 8px 0', lineHeight: 1 }}>
            currently listed
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '2px', margin: '0 0 10px 0' }}>
            {LISTING.mls} &middot; Active
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#2C2C2C', margin: '0 0 6px 0', lineHeight: 1.15 }}>
            {LISTING.address}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#777', margin: '0 0 22px 0' }}>
            {LISTING.city}
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '24px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 700, color: '#2F5233', margin: 0, lineHeight: 1 }}>
              {LISTING.price}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#2C2C2C', margin: 0 }}>
              {LISTING.beds} bed &middot; {LISTING.baths} bath &middot; {LISTING.sqft} sqft
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: '#2F5233',
              lineHeight: 1.5,
              margin: '0 0 28px 0',
            }}
          >
            &ldquo;{LISTING.hook}&rdquo;
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              href={`/properties/${LISTING.slug}`}
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#B8845C',
                color: '#FFFFFF',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              See the Listing
            </Link>
            <Link
              href="/open-house"
              style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: 'transparent',
                color: '#2F5233',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
                border: '2px solid #2F5233',
              }}
            >
              RSVP for Open House
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .featured-listing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

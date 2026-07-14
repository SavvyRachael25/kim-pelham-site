'use client';

import Image from 'next/image';
import Link from 'next/link';

/*
  AccoladesStrip — skinny single-line trust bar that sits at the top
  of the homepage (right under the nav). Visitor sees Kim's verified
  accolades in one horizontal scan before they ever scroll. Each
  item links to /media (or /senior-services for senior moves) for substance.
*/

export default function AccoladesStrip() {
  return (
    <section
      aria-label="Awards and press recognition"
      style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E8E3DA',
        padding: '12px 20px',
      }}
    >
      <ul
        className="accolades-row"
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 auto',
          maxWidth: 1280,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 22,
          flexWrap: 'nowrap',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >

        <li style={{ flex: '0 0 auto' }}>
          <Link
            href="/media"
            aria-label="Best Realtor, Best of Snohomish County 2023 and 2024 (Daily Herald readers' choice, back to back)"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap' }}
          >
            <span style={{ position: 'relative', width: 24, height: 28, display: 'inline-block', flex: '0 0 auto' }}>
              <Image src="/images/best-of-snoco-2024-no-background.png" alt="Best of Snohomish County 2024 award badge, Daily Herald readers' choice, won by Kim Pelham for Best Realtor" fill sizes="24px" style={{ objectFit: 'contain' }} />
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#2F5233' }}>
              Best Realtor 2023 & 2024
            </span>
          </Link>
        </li>

        <li className="accolade-divider" aria-hidden="true" style={{ width: 1, height: 22, background: '#E0DDD4', flex: '0 0 auto' }} />

        <li style={{ flex: '0 0 auto' }}>
          <Link
            href="/media"
            aria-label="Featured in The Daily Herald, March 2025"
            style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap' }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8845C' }}>
              Featured in
            </span>
            <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 15, color: '#2F5233', lineHeight: 1 }}>
              The Daily Herald
            </span>
          </Link>
        </li>

        <li className="accolade-divider" aria-hidden="true" style={{ width: 1, height: 22, background: '#E0DDD4', flex: '0 0 auto' }} />

        <li style={{ flex: '0 0 auto' }}>
          <Link
            href="/media"
            aria-label="Best of Zillow Premier Agent"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap' }}
          >
            <span style={{ position: 'relative', width: 22, height: 22, borderRadius: 3, overflow: 'hidden', display: 'inline-block', flex: '0 0 auto' }}>
              <Image src="/images/best-of-zillow-portrait.jpg" alt="Best of Zillow Premier Agent badge, awarded to Kim Pelham" fill sizes="22px" style={{ objectFit: 'cover' }} />
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#2F5233' }}>
              Best of Zillow
            </span>
          </Link>
        </li>

        <li className="accolade-divider" aria-hidden="true" style={{ width: 1, height: 22, background: '#E0DDD4', flex: '0 0 auto' }} />

        <li style={{ flex: '0 0 auto' }}>
          <Link
            href="/senior-services"
            aria-label="Senior Move Specialist for downsizing and estate transitions"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap' }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#2F5233',
                color: '#F8F5F0',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-heading)',
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: '0.04em',
                flex: '0 0 auto',
              }}
            >
              55+
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: '#2F5233' }}>
              Senior Move Specialist
            </span>
          </Link>
        </li>

        <li className="accolade-divider" aria-hidden="true" style={{ width: 1, height: 22, background: '#E0DDD4', flex: '0 0 auto' }} />

        <li style={{ flex: '0 0 auto' }}>
          <Link
            href="/media"
            aria-label="Published author of Six-Word Lessons on Selling Your Home in Seattle"
            style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8, textDecoration: 'none', color: 'inherit', whiteSpace: 'nowrap' }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8845C' }}>
              Published
            </span>
            <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 15, color: '#2F5233', lineHeight: 1 }}>
              Six-Word Lessons
            </span>
          </Link>
        </li>
      </ul>

      <style>{`
        .accolades-row::-webkit-scrollbar { display: none; }
        .accolades-row { scrollbar-width: none; }
        @media (max-width: 780px) {
          .accolades-row { justify-content: flex-start !important; gap: 18px !important; }
          .accolade-eyebrow { display: none; }
          .accolade-divider { height: 18px !important; }
        }
      `}</style>
    </section>
  );
}

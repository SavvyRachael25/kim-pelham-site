'use client';

import Image from 'next/image';
import Link from 'next/link';

/*
  AccoladesStrip — homepage trust-signal row right after the
  Featured Blog banner. Surfaces Kim's verified accolades in one
  glance: Best of Snohomish 2024, Best of Zillow, Daily Herald
  feature, SRES certification. Each item links to the appropriate
  /media or /about deep-dive where it can be substantiated.
*/

export default function AccoladesStrip() {
  return (
    <section
      aria-label="Awards and press recognition"
      style={{
        background: '#FFFFFF',
        padding: '36px 24px',
        borderBottom: '1px solid #E8E3DA',
      }}
    >
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#8a8a8a',
            margin: '0 0 22px 0',
            textAlign: 'center',
          }}
        >
          Earned, not bought
        </p>

        <ul
          className="accolades-row"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 40,
            flexWrap: 'wrap',
          }}
        >
          <li>
            <Link
              href="/media"
              aria-label="Best of Snohomish County 2024 First Place Best Realtor — Daily Herald readers' choice"
              style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ position: 'relative', width: 60, height: 68, flex: '0 0 auto' }}>
                <Image
                  src="/images/best-of-snoco-2024-no-background.png"
                  alt="Best of Snohomish County 2024 First Place Best Realtor"
                  fill
                  sizes="60px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 500, color: '#2F5233', lineHeight: 1.15 }}>
                  Best Realtor
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#666', marginTop: 2 }}>
                  Best of Snohomish 2024
                </div>
              </div>
            </Link>
          </li>

          <li className="accolades-divider" aria-hidden="true" style={{ width: 1, height: 44, background: '#E0DDD4' }} />

          <li>
            <Link
              href="/media"
              aria-label="Featured in The Daily Herald, March 14, 2025"
              style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8845C', marginBottom: 4 }}>
                As featured in
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 22, color: '#2F5233', lineHeight: 1 }}>
                The Daily Herald
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#888', marginTop: 4 }}>
                March 2025 · Top 3 realtors
              </span>
            </Link>
          </li>

          <li className="accolades-divider" aria-hidden="true" style={{ width: 1, height: 44, background: '#E0DDD4' }} />

          <li>
            <Link
              href="/media"
              aria-label="Best of Zillow Premier Agent"
              style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ position: 'relative', width: 56, height: 56, borderRadius: 4, overflow: 'hidden', flex: '0 0 auto' }}>
                <Image
                  src="/images/best-of-zillow-portrait.jpg"
                  alt="Best of Zillow Premier Agent"
                  fill
                  sizes="56px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 500, color: '#2F5233', lineHeight: 1.15 }}>
                  Best of Zillow
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#666', marginTop: 2 }}>
                  Premier Agent
                </div>
              </div>
            </Link>
          </li>

          <li className="accolades-divider" aria-hidden="true" style={{ width: 1, height: 44, background: '#E0DDD4' }} />

          <li>
            <Link
              href="/senior-services"
              aria-label="SRES Seniors Real Estate Specialist certification"
              style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: '#2F5233',
                  color: '#F8F5F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  flex: '0 0 auto',
                }}
                aria-hidden="true"
              >
                SRES
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 500, color: '#2F5233', lineHeight: 1.15 }}>
                  SRES Certified
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#666', marginTop: 2 }}>
                  Seniors Real Estate Specialist
                </div>
              </div>
            </Link>
          </li>

          <li className="accolades-divider" aria-hidden="true" style={{ width: 1, height: 44, background: '#E0DDD4' }} />

          <li>
            <Link
              href="/media"
              aria-label="Published author of Six-Word Lessons on Selling Your Home in Seattle"
              style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit' }}
            >
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8845C', marginBottom: 4 }}>
                Published author
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', fontSize: 17, color: '#2F5233', lineHeight: 1.2, maxWidth: 200 }}>
                Six-Word Lessons on Selling Your Home in Seattle
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .accolades-row {
            gap: 24px !important;
          }
          .accolades-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

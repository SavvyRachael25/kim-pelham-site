'use client';

import Link from 'next/link';
import { reviews } from '@/data/reviews';

// Show 6 featured reviews as static cards — no API dependency
const featured = [reviews[0], reviews[1], reviews[2], reviews[5], reviews[8], reviews[12]];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px' }} aria-label="5 out of 5 stars" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#B8845C" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '22px', color: '#B8845C', margin: '0 0 6px 0' }}>
              what clients are saying
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '40px',
                fontWeight: 700,
                color: '#2C2C2C',
                margin: 0,
              }}
            >
              What Clients Say
            </h2>
          </div>
          <Link href="/testimonials">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#B8845C',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Read All 40+ Reviews
            </span>
          </Link>
        </div>

        {/* Review cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {featured.map((review, idx) => (
            <article
              key={idx}
              style={{
                backgroundColor: '#FDFBF8',
                borderRadius: '4px',
                padding: '28px 24px',
                border: '1px solid #EAE4DA',
                borderLeftWidth: '3px',
                borderLeftColor: '#B8845C',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stars />
                {/* Subtle Google G */}
                <svg width="15" height="15" viewBox="0 0 24 24" aria-label="Google review" role="img" style={{ opacity: 0.4 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: '#3A3226',
                  lineHeight: 1.75,
                  margin: 0,
                  flexGrow: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                } as React.CSSProperties}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '20px', color: '#B8845C', margin: 0 }}>
                  {review.name}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#A89880', margin: 0 }}>
                  {review.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Footer link */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/testimonials"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              backgroundColor: '#2F5233',
              color: '#F8F5F0',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Read All 40+ Google Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

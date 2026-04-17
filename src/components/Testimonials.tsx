'use client';

import Link from 'next/link';

// Fabricated testimonials removed (audit 4/16/26). Replace with real verified Google reviews.

export default function Testimonials() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#F8F5F0',
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
            paddingLeft: '24px', paddingRight: '24px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
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
              Read More Reviews
            </span>
          </Link>
        </div>

        {/* Empty state — pending verified Google reviews */}
        <div style={{ textAlign: 'center', padding: '40px 24px' }}>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: '#B8845C', marginBottom: '16px' }}>
            Loading verified Google reviews
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
            Kim has 70+ verified reviews on Google.
          </p>
          <a
            href="https://www.google.com/search?q=pelham+group+nw"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              backgroundColor: '#2F5233',
              color: '#F8F5F0',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Read Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

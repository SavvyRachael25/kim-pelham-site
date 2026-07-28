'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function OpenHousePage() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <main
        style={{
          background: '#F8F5F0',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '90px 24px',
        }}
      >
        <div style={{ maxWidth: '560px', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.6rem',
              color: '#B8845C',
              margin: '0 0 10px 0',
              lineHeight: 1,
            }}
          >
            between open houses
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.9rem, 5vw, 2.8rem)',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
            }}
          >
            No open house scheduled right now
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: '#2C2C2C',
              fontWeight: 300,
              margin: '0 0 30px 0',
            }}
          >
            The next one shows up here the moment it is on the calendar. In the meantime, browse the
            current listings, or reach out and I will walk you through anything that catches your eye.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="/properties"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
                background: '#2F5233',
                color: '#F8F5F0',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              See current listings
            </Link>
            <a
              href="tel:+14252509422"
              style={{
                display: 'inline-block',
                padding: '12px 24px',
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
              Text or call Kim
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

// ADTV-specific booking calendar ("Talk with Kim about American Dream TV").
// Same GHL user and schedule as /book, so hours and conflicts are shared,
// but its own calendar so ADTV calls are tagged and worded separately.
// Kim asked for this on 2026-09-16 so the booking page "isn't so real estate
// focused." She asked for /bookADTV; that and /bookadtv redirect here.
const CALENDAR_ID = 'fAW5fXnmEoLhimA3bb97';
const WIDGET_SRC = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`;

export default function BookAdtvPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Book a Call About the Show"
          subtitle="Thirty minutes on the phone about The American Dream TV. Pick a time and I will call you."
          image="/images/kim-by-water.jpg"
          imageAlt="Kim Pelham by the water in Everett"
        />

        <section style={{ backgroundColor: '#fff', padding: '56px 20px 80px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <img
                src="/images/adtv-emmy-logo.png"
                alt="The American Dream TV, Emmy nominated"
                style={{ width: '260px', maxWidth: '70%', height: 'auto' }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: 1.8,
                maxWidth: '720px',
                margin: '0 auto 12px',
                textAlign: 'center',
              }}
            >
              I host the Snohomish County segments of The American Dream TV. If you&apos;ve got a place, a
              business, or a story that belongs on it, or someone nominated you and you want to know what
              filming looks like, grab a time below. No cost, no pitch, and it doesn&apos;t need to be for
              sale.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                maxWidth: '720px',
                margin: '0 auto 32px',
                textAlign: 'center',
              }}
            >
              Haven&apos;t nominated anyone yet?{' '}
              <Link href="/adtv" style={{ color: 'var(--color-clay)' }}>
                That takes two minutes here.
              </Link>
            </p>

            <div
              style={{
                background: 'var(--color-cream)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '12px',
              }}
            >
              <iframe
                src={WIDGET_SRC}
                title="Book a call with Kim Pelham about The American Dream TV"
                style={{ width: '100%', minHeight: '760px', border: 'none', borderRadius: '6px', background: '#fff' }}
                loading="eager"
              />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.7,
                textAlign: 'center',
                margin: '24px auto 0',
                maxWidth: '720px',
              }}
            >
              Rather just call? <a href="tel:+14252509422" style={{ color: 'var(--color-clay)' }}>(425) 250-9422</a>. I answer my own phone.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

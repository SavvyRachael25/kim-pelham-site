'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

// Kim's GHL booking calendar ("Talk with Kim", round robin F59X0PerjfPWHcV4zBD8).
// Embedded here so the address bar stays on thepelhamgroupnw.com instead of the
// scheduler's own domain. Hours come from Kim's GHL schedule; her Google
// Calendar blocks conflicts.
const CALENDAR_ID = 'F59X0PerjfPWHcV4zBD8';
const WIDGET_SRC = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`;

export default function BookPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Book a Call with Kim"
          subtitle="Thirty minutes on the phone. Pick a time and I will call you."
          image="/images/kim-by-water.jpg"
          imageAlt="Kim Pelham by the water in Everett"
        />

        <section style={{ backgroundColor: '#fff', padding: '56px 20px 80px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--color-text)',
                lineHeight: 1.8,
                maxWidth: '720px',
                margin: '0 auto 32px',
                textAlign: 'center',
              }}
            >
              Selling, buying, downsizing, or you just want to know what your place is worth. Pick a
              time below and I&apos;ll call the number you enter. No pressure, no script.
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
                title="Book a call with Kim Pelham"
                style={{ width: '100%', minHeight: '760px', border: 'none', borderRadius: '6px', background: '#fff' }}
                loading="eager"
                allow="payment"
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

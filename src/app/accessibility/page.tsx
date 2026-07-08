'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const styles = {
  bodyP: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
  } as const,
  h2: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.85rem',
    fontWeight: 500,
    color: 'var(--color-forest)',
    marginBottom: '16px',
    marginTop: '48px',
  } as const,
  eyebrow: {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '1.45rem',
    color: 'var(--color-clay)',
    margin: '0 0 6px 0',
    lineHeight: 1.1,
  } as const,
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 16,
    margin: '24px 0 8px',
  } as const,
  featureCard: {
    background: 'var(--color-cream)',
    border: '1px solid var(--color-border)',
    borderRadius: 6,
    padding: '20px 22px',
  } as const,
  featureTitle: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.15rem',
    fontWeight: 600,
    color: 'var(--color-forest)',
    margin: '0 0 6px 0',
    lineHeight: 1.3,
  } as const,
  featureBody: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#555',
    margin: 0,
    lineHeight: 1.6,
  } as const,
  callout: {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '24px 28px',
    borderRadius: '0 4px 4px 0',
    margin: '32px 0',
  } as const,
  ctaBox: {
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    padding: '32px 32px',
    borderRadius: 8,
    margin: '48px 0 0',
    textAlign: 'center' as const,
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-clay)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '1rem',
    padding: '13px 26px',
    borderRadius: 4,
    textDecoration: 'none',
    marginTop: '14px',
  } as const,
};

const FEATURES = [
  { title: 'Text size', body: 'Two larger tiers so listing descriptions, blog posts, and forms stay readable without your browser zoom.' },
  { title: 'High contrast', body: 'A higher-contrast palette over the brand colors for anyone reading in bright sun or low light.' },
  { title: 'Readable font', body: 'Switches body copy to Atkinson Hyperlegible, a typeface engineered for low-vision readers.' },
  { title: 'Highlight links', body: 'Underlines and outlines every link on the page so they are findable at a glance.' },
  { title: 'Pause animations', body: 'Stops scroll effects, photo transitions, and any motion that can trigger vestibular discomfort.' },
  { title: 'Larger cursor', body: 'A bigger, higher-contrast pointer for visitors using a trackpad with reduced precision.' },
];

export default function AccessibilityPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Kim Cares: an accessible site, an accessible broker."
          subtitle="A note on how we built this site, and how to reach Kim if something is not working for you."
          image="/images/hero-02-warm-kitchen.jpg"
          imageAlt="Warm interior with soft natural light."
        />

        <article style={{ padding: '72px 20px 80px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>

            <p style={styles.eyebrow}>the short version,</p>
            <p style={{ ...styles.bodyP, fontWeight: 600, color: 'var(--color-forest)' }}>
              Every visitor deserves to find what they need on this site without friction. The Pelham Group built that in at the design level, not as a bolt-on. And if something still is not working for you, text or call Kim directly. That is the whole point of Kim Cares.
            </p>

            <h2 style={styles.h2}>What is on every page</h2>
            <p style={styles.bodyP}>
              Look for the small circle button in the lower-left of every page on this site. Tap it and a brand-matched panel opens. From there, you can adjust the site to fit your eyes, your motion preferences, and the way you actually use a browser.
            </p>

            <div style={styles.featureGrid}>
              {FEATURES.map((f) => (
                <div key={f.title} style={styles.featureCard}>
                  <p style={styles.featureTitle}>{f.title}</p>
                  <p style={styles.featureBody}>{f.body}</p>
                </div>
              ))}
            </div>

            <p style={{ ...styles.bodyP, fontSize: '0.95rem', color: '#777', marginTop: 16 }}>
              Your settings save in your browser, so you do not have to set them again the next time you visit.
            </p>

            <h2 style={styles.h2}>Why this matters in real estate</h2>
            <p style={styles.bodyP}>
              A lot of the people I work with are at points in life where details matter. Senior move work, helping a family settle a parent&apos;s home, walking a buyer through their first mortgage in fifteen years. The website is often the first conversation. If it does not work for somebody, that conversation never starts.
            </p>
            <p style={styles.bodyP}>
              I would rather you find me. So we made it easier to find me.
            </p>

            <div style={styles.callout}>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: 'var(--color-clay)', margin: '0 0 6px 0', lineHeight: 1.1 }}>
                Kim Cares,
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.7 }}>
                If anything on this site is not working for you, or you would rather skip the screen entirely, text or call. I will pick up the search, the home valuation, or the listing details directly. No form, no waiting room.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--color-forest)', fontWeight: 600, margin: '14px 0 0 0' }}>
                Kim direct: <a href="tel:+14252509422" style={{ color: 'var(--color-clay)', textDecoration: 'none', fontWeight: 700 }}>425.250.9422</a>
              </p>
            </div>

            <h2 style={styles.h2}>How we built it</h2>
            <p style={styles.bodyP}>
              The widget is custom. Not a third-party banner that ships with someone else&apos;s branding. We built it in the forest, clay, and cream that the rest of the site uses, so it does not feel like a compliance bolt-on. The settings persist in your browser locally. Nothing about your visit gets sent to a vendor.
            </p>
            <p style={styles.bodyP}>
              We track this work the same way we track a renovation: things that are done, things that are next, things to revisit. If you spot something that could be better, send it to me. That feedback is how this gets better.
            </p>

            <div style={styles.ctaBox}>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.4rem', color: 'var(--color-clay-light, #E5C29A)', margin: '0 0 8px 0', lineHeight: 1.1 }}>
                speaking of finding you what you need,
              </p>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 600, color: 'var(--color-cream)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                Browse current Pelham listings without the popups.
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(248,245,240,0.85)', margin: 0, lineHeight: 1.6 }}>
                Active listings across Snohomish County, with full photo sets, specs, and a direct line to Kim if you want a private showing.
              </p>
              <Link href="/properties" style={styles.ctaButton}>
                See current listings →
              </Link>
            </div>

          </div>
        </article>

      </main>
      <Footer />
    </>
  );
}

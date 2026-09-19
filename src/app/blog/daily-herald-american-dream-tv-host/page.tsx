'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const HERALD_URL = 'https://www.heraldnet.com/2026/09/19/everett-based-broker-to-host-tv-show-about-snoco/';

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
    fontSize: '2rem',
    fontWeight: 400,
    color: 'var(--color-forest)',
    marginBottom: '20px',
    marginTop: '48px',
  } as const,
  quote: {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    padding: '24px 28px',
    borderRadius: '0 4px 4px 0',
    margin: '32px 0',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.35rem',
    lineHeight: '1.6',
    color: 'var(--color-forest)',
  } as const,
  cite: {
    display: 'block',
    marginTop: '12px',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: 'var(--color-text)',
    opacity: 0.8,
    fontStyle: 'normal',
  } as const,
  ctaBox: {
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    padding: '40px 32px',
    borderRadius: '8px',
    margin: '48px 0 0',
    textAlign: 'center' as const,
  } as const,
  ctaButton: {
    display: 'inline-block',
    background: 'var(--color-clay)',
    color: 'var(--color-cream)',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize: '1rem',
    padding: '14px 28px',
    borderRadius: '4px',
    textDecoration: 'none',
    marginTop: '16px',
  } as const,
  link: {
    color: 'var(--color-clay)',
  } as const,
};

export default function DailyHeraldADTVPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title='The Daily Herald: "Everett-based broker to host TV show about SnoCo"'
          subtitle="By Kim Pelham · September 19, 2026 · 2 min read"
          image="/images/kim-by-water.jpg"
          imageAlt="Kim Pelham on the waterfront in Everett"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={styles.bodyP}>Hi! The Daily Herald wrote a story about me this morning. It was really cool to see it.</p>

            <p style={styles.bodyP}>
              Here is what happened. I was chosen to host the Snohomish County edition of The American Dream TV. It&rsquo;s a
              national lifestyle show, two-time Emmy nominated, and it airs on Roku, Amazon, Apple TV and Tubi. Each segment is
              about five minutes and it is about a place or a business or a person here in the county. I get to pick what we
              film.
            </p>

            <p style={styles.bodyP}>
              Jenna Millikan at the Herald wrote it up. Here is the article:{' '}
              <a href={HERALD_URL} target="_blank" rel="noopener" style={{ ...styles.link, fontWeight: 700 }}>
                Everett-based broker to host TV show about SnoCo
              </a>
            </p>

            <blockquote style={styles.quote}>
              &ldquo;I&rsquo;m all over the county, so I get to see so many areas and different neighborhoods. It just puts me in
              familiarity with a lot of different locations in Snohomish County.&rdquo;
              <cite style={styles.cite}>Me, to The Daily Herald</cite>
            </blockquote>

            <p style={styles.bodyP}>
              We will be filming in October. The first segment is{' '}
              <a href="https://100womensnohomish.com" target="_blank" rel="noopener" style={styles.link}>
                100+ Women Who Care About Snohomish County
              </a>
              . If you haven&rsquo;t heard of them, about 175 women meet three times a year, everybody brings $100, three
              nonprofits give a pitch, and the room votes on who gets all of it. They have given over $500,000 since 2019. I am
              really excited about this one!
            </p>

            <p style={styles.bodyP}>
              I would love to have your nominations for the things you love about Snohomish County: your favorite places,
              interesting businesses, surprising things that no one knows about, great homes that have a story. Please make your
              nominations on{' '}
              <Link href="/adtv" style={{ ...styles.link, fontWeight: 700 }}>
                my website
              </Link>
              .
            </p>

            <p style={styles.bodyP}>That&rsquo;s all I got for now.</p>

            <p style={{ ...styles.bodyP, fontFamily: 'var(--font-handwritten)', fontSize: '1.8rem', color: 'var(--color-forest)' }}>Kim</p>

            <div style={styles.ctaBox}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.6rem',
                  marginBottom: '8px',
                }}
              >
                Who should be on the show?
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                A place, a business, a nonprofit, a home with a story. Tell me and I&rsquo;ll go check it out.
              </p>
              <Link href="/adtv" style={styles.ctaButton}>
                Nominate someone
              </Link>
            </div>

            <p style={{ ...styles.bodyP, marginTop: '48px', fontSize: '0.95rem', opacity: 0.8 }}>
              Reporters: my press kit, headshots and bio are on the{' '}
              <Link href="/media" style={styles.link}>
                media page
              </Link>
              .
            </p>

            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                marginTop: '24px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'var(--color-clay)',
                textDecoration: 'none',
              }}
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

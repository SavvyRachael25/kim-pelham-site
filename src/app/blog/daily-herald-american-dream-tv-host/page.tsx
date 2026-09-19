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
          image="/images/adtv-announcement.jpg"
          imageAlt="Kim Pelham is hosting The American Dream TV in Snohomish County"
        />

        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={styles.bodyP}>
              The Daily Herald ran a story about me this morning. I have lived here since 2015 and I have never been in the paper
              for anything but the Best of Snohomish County list, so this one is a little surreal.
            </p>

            <p style={styles.bodyP}>
              The short version: I was chosen to host the Snohomish County edition of The American Dream TV. It is a national
              lifestyle and real estate series, Emmy nominated, Telly Award winning, on Roku, Amazon, Apple TV, Tubi and the rest.
              Each segment is about five minutes and it is about a place, a business or a person here, not about me. Jenna
              Millikan at the Herald wrote it up, and you can read it here:
            </p>

            <p style={styles.bodyP}>
              <a href={HERALD_URL} target="_blank" rel="noopener" style={{ ...styles.link, fontWeight: 700 }}>
                Everett-based broker to host TV show about SnoCo, The Daily Herald, September 19, 2026
              </a>
            </p>

            <blockquote style={styles.quote}>
              &ldquo;I&rsquo;m all over the county, so I get to see so many areas and different neighborhoods. It just puts me in
              familiarity with a lot of different locations in Snohomish County.&rdquo;
              <cite style={styles.cite}>Kim Pelham, to The Daily Herald</cite>
            </blockquote>

            <h2 style={styles.h2}>What we film first</h2>

            <p style={styles.bodyP}>
              Filming starts in October. The first segment is{' '}
              <a href="https://100womensnohomish.com" target="_blank" rel="noopener" style={styles.link}>
                100+ Women Who Care About Snohomish County
              </a>
              . About 175 women, $100 each, three nonprofits make their case, the room votes, and one of them walks out with the
              whole pot. They have given over $500,000 to local nonprofits since 2019. If you have never been, that is the segment
              to watch.
            </p>

            <h2 style={styles.h2}>I need your nominations</h2>

            <p style={styles.bodyP}>
              We are looking for interesting and cool places, businesses and non-profits. Things that are unique to Snohomish
              County that are surprising and fun. Your favorite places, interesting businesses, surprising things that no one
              knows about, great homes that have a story, even if they are not for sale.
            </p>

            <p style={styles.bodyP}>
              Nominations take a minute at{' '}
              <Link href="/adtv" style={{ ...styles.link, fontWeight: 700 }}>
                thepelhamgroupnw.com/adtv
              </Link>
              . Or just tell me the next time you see me.
            </p>

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
                A place, a business, a nonprofit, a home with a story. Tell me and I will go look.
              </p>
              <Link href="/adtv" style={styles.ctaButton}>
                Nominate someone
              </Link>
            </div>

            <p style={{ ...styles.bodyP, marginTop: '48px', fontSize: '0.95rem', opacity: 0.8 }}>
              Press and interview requests: the press kit, headshots and bio are on the{' '}
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

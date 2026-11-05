'use client';

/*
 * Kim's words only. Every sentence in the body is hers, verbatim: from the
 * show section she approved for the October 15, 2026 Pelham Post and from her
 * October 22, 2026 answers (typo fixes only). Photo captions are place labels,
 * not sentences in her voice. The FAQ (faqs.ts) is third person and factual.
 * Do not add first-person prose here without her wording first.
 */

import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import FAQSection from '@/components/FAQSection';
import { FAQS, MUSE_URL } from './faqs';

const REEL_URL = 'https://www.instagram.com/reel/DehqDRJvXst/';
const REEL_100W = 'https://www.instagram.com/reel/DekPXTTv_aN/';
const IMG = '/images/blog/adtv-muse-2026-10';

const styles = {
  bodyP: {
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    color: 'var(--color-text)',
    lineHeight: '1.8',
    marginBottom: '24px',
  } as const,
  label: {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '1.75rem',
    color: 'var(--color-clay)',
    margin: '48px 0 18px',
    lineHeight: 1.1,
  } as const,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    margin: '8px 0 0',
  } as const,
  figure: { margin: 0 } as const,
  img: {
    width: '100%',
    aspectRatio: '3 / 4',
    objectFit: 'cover' as const,
    borderRadius: 6,
    display: 'block',
  } as const,
  caption: {
    fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
    color: '#777',
    margin: '8px 0 0',
    lineHeight: 1.5,
  } as const,
  reelWrap: {
    maxWidth: 400,
    margin: '0 auto',
  } as const,
  link: { color: 'var(--color-clay)', fontWeight: 700 } as const,
  ctaBox: {
    background: 'var(--color-forest)',
    color: 'var(--color-cream)',
    padding: '40px 32px',
    borderRadius: '8px',
    margin: '56px 0 0',
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
};

const musePhotos = [
  { file: 'kim-adtv-muse-5113.jpg', alt: 'The camera crew filming Kim Pelham on the lawn below a historic building on the Everett waterfront', caption: 'The Everett waterfront' },
  { file: 'kim-adtv-muse-5139.jpg', alt: 'Kim Pelham being filmed on a waterfront path in Everett', caption: 'The Everett waterfront' },
  { file: 'kim-adtv-muse-5219.jpg', alt: 'Inside The Muse Whiskey & Coffee during filming', caption: 'The Muse Whiskey & Coffee' },
  { file: 'kim-adtv-muse-5280.jpg', alt: 'Filming an interview under the chandelier at The Muse Whiskey & Coffee', caption: 'The Muse Whiskey & Coffee' },
  { file: 'kim-adtv-muse-5269.jpg', alt: 'An espresso martini on the bar at The Muse Whiskey & Coffee, with the waterfront in the windows', caption: 'The Muse Whiskey & Coffee' },
];

export default function AdtvMusePage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Filming The American Dream TV at The Muse in Everett"
          subtitle="By Kim Pelham · October 22, 2026 · 3 min read"
          image={`${IMG}/kim-adtv-muse-5110.jpg`}
          imageAlt="Kim Pelham on camera for The American Dream TV on the Everett waterfront"
        />

        <article style={{ padding: '72px 20px 96px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <p style={{ ...styles.bodyP, fontWeight: 600, color: 'var(--color-forest)', fontSize: '1.4rem' }}>
              This may be what I was born to do . . .
            </p>

            <p style={styles.bodyP}>
              We started at{' '}
              <a href={MUSE_URL} target="_blank" rel="noopener" style={styles.link}>
                The Muse Whiskey &amp; Coffee
              </a>{' '}
              in the 1923 Weyerhaeuser Building on the Everett waterfront, and
              from there we went to 100+ Women Who Care About Snohomish County at the Sons of Norway Normanna Lodge. Brien
              came along for both.
            </p>

            <p style={styles.bodyP}>
              The day was amazing. I was a tiny bit nervous at first, but the videographer and his team made it easy and it
              turns out that I&rsquo;m a natural in front of the camera. They started calling me &ldquo;one-take Kim&rdquo;!
            </p>

            <p style={styles.bodyP}>
              It was so fulfilling to draw people out and learn about their business or non-profit, to reveal their passions.
            </p>

            <p style={styles.label}>the muse,</p>
            <p style={styles.bodyP}>
              Jack and Jin spent countless hours in China and other locations sourcing the finishes for the Muse. The
              embroidered wallpaper was designed and commissioned by them, they are works of art on their own!
            </p>
            <div style={styles.grid}>
              {musePhotos.map((p) => (
                <figure key={p.file} style={styles.figure}>
                  <img src={`${IMG}/${p.file}`} alt={p.alt} loading="lazy" style={styles.img} />
                  <figcaption style={styles.caption}>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div style={{ ...styles.reelWrap, marginTop: '32px' }}>
              <iframe
                src={`${REEL_URL}embed`}
                title="Kim Pelham's reel from the shoot at The Muse Whiskey & Coffee"
                width="400"
                height="710"
                loading="lazy"
                style={{ width: '100%', border: 0, borderRadius: 8, background: '#fff' }}
                allowFullScreen
              />
              <p style={{ ...styles.caption, textAlign: 'center' }}>
                <a href={REEL_URL} target="_blank" rel="noopener" style={styles.link}>
                  Watch The Muse reel on Instagram &rarr;
                </a>
              </p>
              <p style={{ ...styles.caption, textAlign: 'center' }}>@TheAmericanDreamTV · @CraigSewingMedia</p>
            </div>

            <p style={styles.label}>100+ women who care,</p>
            <p style={styles.bodyP}>
              I loved hearing the story of how Janet Bacon and Susan Rieke started the group and how amazing it is that they
              have raised over $500,000 for local charities. Project Girl Mentoring Program in Lynnwood was the winner.
            </p>
            <figure style={{ ...styles.figure, maxWidth: 360 }}>
              <img
                src={`${IMG}/kim-adtv-100women-5371.jpg`}
                alt="Kim Pelham with two women at 100+ Women Who Care About Snohomish County"
                loading="lazy"
                style={styles.img}
              />
              <figcaption style={styles.caption}>100+ Women Who Care About Snohomish County, Sons of Norway Normanna Lodge</figcaption>
            </figure>
            <div style={{ ...styles.reelWrap, marginTop: '32px' }}>
              <iframe
                src={`${REEL_100W}embed`}
                title="Kim Pelham's reel from 100+ Women Who Care About Snohomish County"
                width="400"
                height="710"
                loading="lazy"
                style={{ width: '100%', border: 0, borderRadius: 8, background: '#fff' }}
                allowFullScreen
              />
              <p style={{ ...styles.caption, textAlign: 'center' }}>
                <a href={REEL_100W} target="_blank" rel="noopener" style={styles.link}>
                  Watch the 100+ Women reel on Instagram &rarr;
                </a>
              </p>
              <p style={{ ...styles.caption, textAlign: 'center' }}>@TheAmericanDreamTV · @CraigSewingMedia</p>
            </div>

            <p style={{ ...styles.bodyP, fontFamily: 'var(--font-handwritten)', fontSize: '1.8rem', color: 'var(--color-forest)', marginTop: '48px' }}>
              Kim
            </p>

            <div style={styles.ctaBox}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px', color: 'var(--color-cream)' }}>
                Who should be on the show?
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.85 }}>
                A place, a business, a nonprofit, a home with a story. Tell me and I&rsquo;ll go check it out.
              </p>
              <Link href="/adtv" style={styles.ctaButton}>
                Nominate someone
              </Link>
            </div>

            <p style={{ ...styles.bodyP, marginTop: '40px', fontSize: '0.95rem', opacity: 0.8 }}>
              How it started:{' '}
              <Link href="/blog/daily-herald-american-dream-tv-host" style={styles.link}>
                The Daily Herald story
              </Link>
            </p>
          </div>
        </article>
        {/* Visible FAQ mirrors the FAQPage JSON-LD emitted in layout.tsx.
            emitSchema is off here to avoid duplicate FAQPage schema. */}
        <FAQSection title="About the shoot" faqs={FAQS} emitSchema={false} backgroundColor="#FBF7F1" />
      </main>
      <Footer />
    </>
  );
}

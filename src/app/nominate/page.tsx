import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/**
 * /nominate
 *
 * The Daily Herald's Best of Snohomish County 2026.
 * Nominations: Nov 2 to Nov 23, 2026, 11:59 PM Pacific.
 * Voting: Dec 11, 2026 to Jan 3, 2027. Winners: Jan 30, 2027.
 * Kim is not a featured entrant, so people write her in under Real Estate Agent.
 */
const BALLOT_URL =
  'https://www.heraldnet.com/contests/Best-Of-Snohomish-County/#/gallery?group=560427';

const steps = [
  'Tap the button below. It opens The Daily Herald ballot on the Services page.',
  'Scroll down to Real Estate Agent.',
  'Under "Don’t See Your Favorite?", type Kim Pelham, The Pelham Group NW.',
  'Tap Nominate. The Herald may ask for your email the first time.',
];

export default function NominatePage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', minHeight: '70vh', padding: '64px 20px 80px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '12px 16px', width: '180px', marginBottom: '26px' }}>
            <Image src="/images/best-of-snoco-2023-2024-combined.png" alt="The Daily Herald Best of Snohomish County 2023 and 2024 Winner badge, won by Kim Pelham" width={418} height={357} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
          </div>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: '#D4A07A', margin: '0 0 6px' }}>a small favor,</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', fontWeight: 700, lineHeight: 1.05, margin: '0 0 18px', color: 'var(--color-cream)' }}>
            Would you nominate me for Best of Snohomish County?
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.92, margin: '0 0 22px' }}>
            Herald readers voted me Best of Snohomish County in 2023 and 2024. I&apos;d love to make it three. Nominations are open through November 23, and it takes about a minute.
          </p>

          <ol style={{ listStyle: 'decimal', fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.6, margin: '0 0 26px', paddingLeft: '1.3em' }}>
            {steps.map((s) => (
              <li key={s} style={{ marginBottom: '10px' }}>{s}</li>
            ))}
          </ol>

          <a
            href={BALLOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.05rem', padding: '15px 26px', borderRadius: '4px', textDecoration: 'none' }}
          >
            Open the ballot
          </a>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', opacity: 0.8, margin: '18px 0 0', lineHeight: 1.6 }}>
            You can nominate once a day until November 23 at 11:59 PM. Voting runs December 11 to January 3, and winners are announced January 30.
          </p>

          <div style={{ borderTop: '1px solid rgba(248,245,240,0.2)', marginTop: '40px', paddingTop: '22px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Image src="/images/kim-by-water.jpg" alt="Kim Pelham" width={1024} height={683} style={{ width: '84px', height: '84px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #D4A07A' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', margin: '0 0 2px' }}>Thank you. Truly.</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>
                Kim Pelham, The Pelham Group NW &middot;{' '}
                <a href="tel:+14252509422" style={{ color: '#D4A07A', fontWeight: 700 }}>425-250-9422</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

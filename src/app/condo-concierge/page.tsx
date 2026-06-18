'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import KimCaresNote from '@/components/KimCaresNote';
import CaptionedCarousel from '@/components/CaptionedCarousel';
import {
  beforeSlides,
  afterSlides,
  BEFORE_COUNT,
  AFTER_COUNT,
} from '@/lib/case-studies/mathis-condo';

const BEFORE_PATH = '/case-studies/mathis-condo/before';
const AFTER_PATH = '/case-studies/mathis-condo/after';

type Magnet = 'playbook' | 'equity-report';

export default function CondoConciergePage() {
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [magnet, setMagnet] = useState<Magnet>('equity-report');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addr, setAddr] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!firstName.trim() || !email.trim()) {
      setError('Name and email are required.');
      return;
    }

    setSubmitting(true);

    const tags = [
      'condo-concierge-funnel',
      'condo-case-study',
      'mathis-postcard',
      magnet === 'playbook' ? 'wants-prelisting-playbook' : 'wants-home-equity-report',
    ];

    const payload = {
      firstName: firstName.trim(),
      lastName: '',
      email: email.trim(),
      phone: phone.trim(),
      message: addr.trim() ? `Home address: ${addr.trim()}` : '',
      smsMarketingConsent: false,
      smsTransactionalConsent: false,
      marketingCheckboxText: '',
      transactionalCheckboxText: '',
      tags,
      source: 'condo-concierge',
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Even if the network call fails we still unlock the case study —
      // the lead-magnet UX should not feel punitive. The /api/contact route
      // logs the error server-side.
    }

    setUnlocked(true);
    setSubmitting(false);

    // TODO: once /home-equity-report.pdf and /playbook.pdf are both confirmed,
    // auto-download the chosen asset here (a hidden <a href={...} download> click).
  }

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        {/* HERO + LEAD GATE */}
        <section
          style={{
            position: 'relative',
            background: 'var(--color-forest)',
            color: 'var(--color-cream)',
            padding: '88px 24px 96px',
            overflow: 'hidden',
          }}
        >
          <div className="hero-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 24, color: 'var(--color-clay)' }}>
                your next chapter,
              </span>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4.4vw, 52px)', fontWeight: 500, color: 'var(--color-cream)', margin: '6px 0 18px', lineHeight: 1.1 }}>
                Two homeowners moved out of state. Their condo is on the market anyway.
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', color: 'rgba(248,245,240,0.88)', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 540 }}>
                They could not be in town to manage paint, flooring, hardware, surrounds, lighting,
                or staging. They let us do all of it. We took the keys, ran the prep, staged the unit
                ourselves, and got it on the market without making them fly back. The full story is below, with
                every before and after photo. Tell us where to send it.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'rgba(248,245,240,0.82)' }}>
                <li>· Real Everett condo, 2026</li>
                <li>· Owners out of state by week two</li>
                <li>· Kim and her crew handled the whole punch list</li>
                <li>· Staged with Kim&apos;s own pieces, photographed for the listing</li>
              </ul>
            </div>

            {/* LEAD GATE — name + email required, phone/address optional */}
            <aside
              aria-label="Unlock the full case study"
              style={{
                background: '#fff',
                color: 'var(--color-text)',
                borderRadius: 12,
                padding: 32,
                boxShadow: '0 20px 50px rgba(26,26,26,0.28)',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', top: -14, left: 22, background: 'var(--color-clay)', color: '#fff', padding: '6px 12px', borderRadius: 3, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Free · 60 photos
              </span>

              {!unlocked ? (
                <>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 500, color: 'var(--color-forest)', margin: '4px 0 6px', lineHeight: 1.2 }}>
                    See the full case study
                  </h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-text-light)', lineHeight: 1.55, margin: '0 0 20px' }}>
                    Plus pick the one piece you want next: the Pre-Listing Playbook or a free Home Equity Report on your own place.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <label style={fieldLabel}>First name<span style={{ color: 'var(--color-clay)' }}>*</span></label>
                    <input
                      required
                      autoComplete="given-name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Vauntell"
                      style={inputStyle}
                    />

                    <label style={fieldLabel}>Email<span style={{ color: 'var(--color-clay)' }}>*</span></label>
                    <input
                      required
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vauntell@email.com"
                      style={inputStyle}
                    />

                    <label style={fieldLabel}>Phone <span style={{ fontWeight: 400, color: 'var(--color-text-faint)' }}>(optional, so Kim can call back)</span></label>
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(425) 555-0100"
                      style={inputStyle}
                    />

                    <label style={fieldLabel}>Your home address <span style={{ fontWeight: 400, color: 'var(--color-text-faint)' }}>(optional, for a tailored equity report)</span></label>
                    <input
                      autoComplete="street-address"
                      value={addr}
                      onChange={(e) => setAddr(e.target.value)}
                      placeholder="123 Cedar Ln, Everett"
                      style={inputStyle}
                    />

                    <fieldset style={{ border: 0, padding: 0, margin: '4px 0 16px' }}>
                      <legend style={{ ...fieldLabel, marginBottom: 8 }}>
                        Which would you like next?
                      </legend>
                      <label style={radioRow(magnet === 'equity-report')}>
                        <input
                          type="radio"
                          name="magnet"
                          checked={magnet === 'equity-report'}
                          onChange={() => setMagnet('equity-report')}
                          style={{ marginRight: 10 }}
                        />
                        <span>
                          <b>A free Home Equity Report</b>
                          <span style={{ display: 'block', fontSize: 12.5, color: 'var(--color-text-faint)', marginTop: 2 }}>
                            Hand-built by Kim. Not a Zestimate.
                          </span>
                        </span>
                      </label>
                      <label style={radioRow(magnet === 'playbook')}>
                        <input
                          type="radio"
                          name="magnet"
                          checked={magnet === 'playbook'}
                          onChange={() => setMagnet('playbook')}
                          style={{ marginRight: 10 }}
                        />
                        <span>
                          <b>The Pre-Listing Playbook (28 pages)</b>
                          <span style={{ display: 'block', fontSize: 12.5, color: 'var(--color-text-faint)', marginTop: 2 }}>
                            The same playbook we used for this condo.
                          </span>
                        </span>
                      </label>
                    </fieldset>

                    {error && (
                      <p role="alert" style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: '#b3261e', margin: '0 0 12px' }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        width: '100%',
                        background: 'var(--color-clay)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 6,
                        fontFamily: 'var(--font-body)',
                        fontWeight: 700,
                        fontSize: 16,
                        padding: '14px 16px',
                        cursor: submitting ? 'wait' : 'pointer',
                        boxShadow: '0 6px 16px rgba(184, 132, 92, 0.32)',
                      }}
                    >
                      {submitting ? 'Sending...' : 'Show me the case study'}
                    </button>

                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-text-faint)', textAlign: 'center', margin: '14px 0 0', lineHeight: 1.5 }}>
                      Kim answers her own phone and email. Your details stay with her. Never sold,
                      never spammed.
                    </p>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '12px 0' }}>
                  <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 26, color: 'var(--color-clay)' }}>
                    here we go,
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 500, color: 'var(--color-forest)', margin: '6px 0 12px' }}>
                    The full case study is below.
                  </h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--color-text-light)', lineHeight: 1.6, margin: '0 0 18px' }}>
                    {magnet === 'equity-report'
                      ? 'Kim will personally build your Home Equity Report and email it within 48 hours. Watch your inbox.'
                      : 'The Pre-Listing Playbook is on its way to your inbox.'}
                  </p>
                  <Link
                    href={magnet === 'playbook' ? '/playbook.pdf' : '/case-study/concierge-condo'}
                    style={{
                      display: 'inline-block',
                      background: 'var(--color-forest)',
                      color: 'var(--color-cream)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      fontSize: 14.5,
                      padding: '12px 22px',
                      borderRadius: 4,
                      textDecoration: 'none',
                    }}
                  >
                    {magnet === 'playbook' ? 'Open the Playbook now' : 'See the public case study'}
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* TEASER — visible to everyone, one before/after pair to build trust before the gate */}
        {!unlocked && (
          <section style={{ padding: '64px 24px', background: '#fff' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--color-clay)' }} aria-hidden="true" />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-clay)' }}>
                  A glimpse
                </span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3.2vw, 38px)', fontWeight: 500, color: 'var(--color-forest)', margin: '0 0 26px', lineHeight: 1.15, maxWidth: 720 }}>
                Same room, before and after.
              </h2>
              <div className="teaser-ba" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <figure style={{ position: 'relative', margin: 0, aspectRatio: '4 / 3', background: 'var(--color-cream-dark)' }}>
                  <Image src={`${BEFORE_PATH}/01.jpg`} alt="Condo before pre-sale prep, May 2026" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                  <figcaption style={{ position: 'absolute', top: 14, left: 14, background: 'var(--color-cream)', color: 'var(--color-forest)', padding: '5px 10px', borderRadius: 3, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Before
                  </figcaption>
                </figure>
                <figure style={{ position: 'relative', margin: 0, aspectRatio: '4 / 3', background: 'var(--color-cream-dark)' }}>
                  <Image src={`${AFTER_PATH}/19.jpg`} alt="Same living room after pre-sale prep, May 2026" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                  <figcaption style={{ position: 'absolute', top: 14, right: 14, background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '5px 10px', borderRadius: 3, fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    After
                  </figcaption>
                </figure>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--color-text-faint)', margin: '18px 0 0', textAlign: 'center', fontStyle: 'italic' }}>
                Fill out the form above to unlock all {BEFORE_COUNT + AFTER_COUNT} photos plus the full timeline.
              </p>
            </div>
          </section>
        )}

        {/* UNLOCKED — full case study with carousels */}
        {unlocked && (
          <>
            <section style={{ padding: '72px 24px 56px', background: '#fff' }}>
              <div style={{ maxWidth: 1180, margin: '0 auto' }}>
                <CaptionedCarousel
                  slides={beforeSlides}
                  badge={`Before · Vacant walkthrough, May 8 2026 · ${BEFORE_COUNT} photos`}
                  heading="Where we started."
                  intro="Every photo from the baseline walk, captioned room by room."
                  ariaLabel="Before pre-sale prep, photo carousel"
                  priorityFirst
                />
              </div>
            </section>

            <section style={{ padding: '40px 24px 88px', background: 'var(--color-cream)' }}>
              <div style={{ maxWidth: 1180, margin: '0 auto' }}>
                <CaptionedCarousel
                  slides={afterSlides}
                  badge={`After · Listing media, May 28 2026 · ${AFTER_COUNT} photos`}
                  heading="How we listed it."
                  intro="Same square footage. New paint, new flooring, new hardware, full staging."
                  ariaLabel="After pre-sale prep, photo carousel"
                />

                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--color-text-light)', margin: '32px 0 0', textAlign: 'center' }}>
                  Want the full editorial version with the timeline, the concierge breakdown, and the FAQ?{' '}
                  <Link href="/case-study/concierge-condo" style={{ color: 'var(--color-clay)', fontWeight: 700 }}>
                    Read the full case study →
                  </Link>
                </p>
              </div>
            </section>
          </>
        )}

        <KimCaresNote />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 720px) {
          .teaser-ba { grid-template-columns: 1fr !important; }
          .photo-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}

const fieldLabel: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--color-text-muted)',
  margin: '0 0 6px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  padding: '12px 14px',
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  background: 'var(--color-cream)',
  color: 'var(--color-text)',
  marginBottom: 14,
  boxSizing: 'border-box',
};

const radioRow = (active: boolean): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 0,
  padding: '12px 14px',
  border: `1px solid ${active ? 'var(--color-clay)' : 'var(--color-border)'}`,
  borderRadius: 6,
  marginBottom: 8,
  background: active ? 'rgba(184,132,92,0.06)' : '#fff',
  fontFamily: 'var(--font-body)',
  fontSize: 14,
  color: 'var(--color-text)',
  cursor: 'pointer',
});

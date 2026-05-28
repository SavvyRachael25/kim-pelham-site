'use client';

import { useState, useEffect, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const CONSENT_TEXT =
  'I agree to receive transactional SMS/MMS messages (confirmation, day-before reminder, day-of reminder) for this open house from Kim Pelham, The Pelham Group NW. Messages send from (425) 472-3623. Reply STOP to opt out. Msg & data rates may apply.';

export default function OpenHousePage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [utm, setUtm] = useState<{ source?: string; medium?: string; campaign?: string; content?: string }>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setUtm({
      source: params.get('utm_source') ?? undefined,
      medium: params.get('utm_medium') ?? undefined,
      campaign: params.get('utm_campaign') ?? undefined,
      content: params.get('utm_content') ?? undefined,
    });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get('firstName') || '').trim(),
      lastName: String(data.get('lastName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      bringing: String(data.get('bringing') || '').trim(),
      notes: String(data.get('notes') || '').trim(),
      smsConsent: data.get('smsConsent') === 'on',
      consentText: CONSENT_TEXT,
      utmSource: utm.source,
      utmMedium: utm.medium,
      utmCampaign: utm.campaign,
      utmContent: utm.content,
    };
    if (!payload.firstName || (!payload.email && !payload.phone)) {
      setError('First name and either email or phone are required.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/admiralty-rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error ?? 'Something went wrong. Please text Kim at 425-250-9422.');
        return;
      }
      setDone(true);
    } catch {
      setError('Network error. Please text Kim at 425-250-9422.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Nav />
      <ScrollProgress />
      <main style={{ background: '#F8F5F0', minHeight: '100vh' }}>
        {/* Hero strip */}
        <section style={{ position: 'relative', height: 'clamp(220px, 35vw, 360px)', overflow: 'hidden' }}>
          <Image
            src="/listings/2528831-admiralty/photos/hero-living-fireplace.jpg"
            alt="Living room with wood-burning fireplace at 11706 Admiralty Way Unit B, Everett WA"
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
            sizes="100vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.65) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '24px', color: '#FFFFFF' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#B8845C', margin: 0 }}>
              Open House &middot; This Saturday
            </p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 700, color: '#FFFFFF', margin: '8px 0 4px 0', lineHeight: 1.1, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
              Saturday, May 30 &middot; 1 to 3 PM
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
              11706 Admiralty Way, Unit B &middot; Everett, WA 98204
            </p>
          </div>
        </section>

        {/* Body grid */}
        <section style={{ padding: '60px 24px' }}>
          <div className="rsvp-grid" style={{ maxWidth: '1080px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 480px', gap: '50px', alignItems: 'start' }}>
            {/* Left: copy */}
            <div>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: '#B8845C', margin: '0 0 8px 0', lineHeight: 1 }}>
                walk it with me
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', fontWeight: 700, color: '#2C2C2C', margin: '0 0 18px 0', lineHeight: 1.15 }}>
                Recently remodeled. Ground floor. All one level.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: '#2C2C2C', margin: '0 0 18px 0', fontWeight: 300 }}>
                It is the end unit on the ground floor, so the home is on one level with no upstairs neighbor and an extra window or two from being on the corner. Wood-burning fireplace with mosaic tile surround. New LVP, designer paint, new appliances, smart thermostat, smart light switches.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.75, color: '#2C2C2C', margin: '0 0 30px 0', fontWeight: 300 }}>
                Primary suite has an ensuite bath and walk-in closet. Slider to a private patio with lawn beyond. Detached 1-car garage plus assigned and guest parking. Mukilteo School District. Five minutes to Boeing.
              </p>

              <div style={{ background: '#FFFFFF', border: '1px solid #E8E3DA', borderRadius: '6px', padding: '24px', marginBottom: '24px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 14px 0' }}>
                  What to Expect on Site
                </p>
                <ul style={{ margin: 0, padding: '0 0 0 18px', fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.75, color: '#2C2C2C' }}>
                  <li>Disclosures, inspection summary, and HOA docs printed in the kitchen</li>
                  <li>Ground-floor entry, parking right by the front door</li>
                  <li>Me, ready to answer the unsexy questions about the building, the HOA, and the comps</li>
                  <li>Bring whoever has a vote in your decision</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  href="/properties/11706-admiralty-way-unit-b-everett"
                  style={{
                    display: 'inline-block',
                    padding: '11px 22px',
                    background: 'transparent',
                    color: '#2F5233',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                    border: '2px solid #2F5233',
                  }}
                >
                  See the Full Listing
                </Link>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=11706+Admiralty+Way+B+Everett+WA+98204"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '11px 22px',
                    background: 'transparent',
                    color: '#2F5233',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    borderRadius: '4px',
                    textDecoration: 'none',
                    border: '2px solid #2F5233',
                  }}
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right: RSVP form */}
            <aside style={{ background: '#FFFFFF', border: '1px solid #E8E3DA', borderRadius: '8px', padding: '36px 32px', boxShadow: '0 4px 18px rgba(0,0,0,0.04)' }}>
              {done ? (
                <div>
                  <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: '#B8845C', margin: '0 0 6px 0' }}>
                    you're on the list
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, color: '#2F5233', margin: '0 0 14px 0', lineHeight: 1.2 }}>
                    Saturday, see you between 1 and 3 PM.
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem', lineHeight: 1.7, color: '#2C2C2C', margin: '0 0 22px 0', fontWeight: 300 }}>
                    Watch your inbox for a confirmation email. If anything changes, reply to that email or text Kim at <a href="tel:+14252509422" style={{ color: '#2F5233', fontWeight: 600 }}>(425) 250-9422</a>.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=11706+Admiralty+Way+B+Everett+WA+98204"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        padding: '12px',
                        background: '#2F5233',
                        color: '#F8F5F0',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        borderRadius: '4px',
                        textDecoration: 'none',
                      }}
                    >
                      Get Directions in Google Maps
                    </a>
                    <Link
                      href="/properties/11706-admiralty-way-unit-b-everett"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        padding: '12px',
                        background: '#FFFFFF',
                        color: '#2F5233',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        borderRadius: '4px',
                        textDecoration: 'none',
                        border: '2px solid #2F5233',
                      }}
                    >
                      Browse the Full Listing
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, color: '#B8845C', textTransform: 'uppercase', letterSpacing: '1.5px', margin: '0 0 6px 0' }}>
                    Tell Kim You&apos;re Coming
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 700, color: '#2C2C2C', margin: '0 0 20px 0', lineHeight: 1.2 }}>
                    RSVP for Saturday&apos;s Open House
                  </h3>

                  <Field label="First name *" name="firstName" required autoComplete="given-name" />
                  <Field label="Last name" name="lastName" autoComplete="family-name" />
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Phone (for SMS reminder)" name="phone" type="tel" autoComplete="tel" placeholder="(425) 555-0100" />

                  <label style={labelStyle}>
                    Who are you bringing?
                    <select name="bringing" defaultValue="" style={inputStyle}>
                      <option value="" disabled>Pick one</option>
                      <option value="Just me">Just me</option>
                      <option value="Partner or spouse">Partner or spouse</option>
                      <option value="Family">Family</option>
                      <option value="My agent">My agent</option>
                      <option value="A friend">A friend who&apos;s also looking</option>
                    </select>
                  </label>

                  <label style={labelStyle}>
                    Anything you want Kim to have ready? (optional)
                    <textarea name="notes" rows={3} style={{ ...inputStyle, resize: 'vertical', minHeight: '64px' }} placeholder="HOA docs, comp packet, etc." />
                  </label>

                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', margin: '14px 0 18px 0', fontSize: '0.78rem', color: '#555', lineHeight: 1.55 }}>
                    <input type="checkbox" name="smsConsent" defaultChecked style={{ marginTop: '2px' }} />
                    <span>{CONSENT_TEXT}</span>
                  </label>

                  {error && (
                    <p style={{ background: '#FDECEA', color: '#B71C1C', padding: '10px 12px', borderRadius: '4px', fontSize: '0.88rem', margin: '0 0 14px 0' }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '14px',
                      background: submitting ? '#888' : '#B8845C',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      border: 'none',
                      borderRadius: '4px',
                      cursor: submitting ? 'wait' : 'pointer',
                    }}
                  >
                    {submitting ? 'Saving...' : 'Tell Kim I\'m Coming'}
                  </button>

                  <p style={{ margin: '14px 0 0 0', fontSize: '0.72rem', color: '#888', lineHeight: 1.5, textAlign: 'center' }}>
                    Equal Housing Opportunity &middot; NWMLS #2528831
                  </p>
                </form>
              )}
            </aside>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .rsvp-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.78rem',
  fontWeight: 600,
  color: '#555',
  marginBottom: '14px',
};

const inputStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  marginTop: '5px',
  padding: '10px 12px',
  background: '#F8F5F0',
  border: '1px solid #E8E3DA',
  borderRadius: '4px',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  color: '#2C2C2C',
};

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label style={labelStyle}>
      {label}
      <input type={type} name={name} required={required} autoComplete={autoComplete} placeholder={placeholder} style={inputStyle} />
    </label>
  );
}

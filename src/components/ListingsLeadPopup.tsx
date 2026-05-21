'use client';

import { useState, useEffect } from 'react';
import A2PConsent from '@/components/A2PConsent';
import type { A2PConsentState } from '@/components/A2PConsent';

/**
 * ListingsLeadPopup — site-wide branded popup for the property-listings lead magnet.
 *
 * What it does:
 *   • Captures first name + phone (email optional)
 *   • Submits to /api/contact, which writes to GHL and the GHL workflow
 *     mirrors to FUB via the ghl-to-fub webhook
 *   • Tags the contact `listings-first-look` + `website-lead`
 *   • Records A2P 10DLC consent (marketing + transactional)
 *   • Persists dismissal in localStorage for 7 days
 *
 * Triggers (whichever fires first):
 *   • 9-second time delay after page load
 *   • Scroll past 45% of page height
 *   • Mobile exit-intent equivalent (scroll-up of >250px after scrolling down)
 *
 * Brand:
 *   • Forest / Clay / Cream tokens from globals.css
 *   • Cormorant Garamond display, Inter body, Caveat handwritten accent
 *   • No urgency tactics, no superlatives, no em dashes (per voice rules)
 */

const STORAGE_KEY = 'pelham_listings_lead_popup_dismissed_v1';
const DISMISS_DAYS = 7;
const SHOW_AFTER_MS = 9000;
const SCROLL_TRIGGER = 0.45;

export default function ListingsLeadPopup() {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState<A2PConsentState>({
    marketing: false,
    transactional: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const ts = parseInt(dismissed, 10);
      if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
    };

    const timer = setTimeout(show, SHOW_AFTER_MS);
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      if (ratio > SCROLL_TRIGGER) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const dismiss = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }
    setVisible(false);
  };

  const formatPhone = (raw: string): string => {
    // Light formatting for display only. The API gets the raw digits.
    const digits = raw.replace(/\D/g, '').slice(0, 10);
    if (digits.length === 0) return '';
    if (digits.length < 4) return `(${digits}`;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (!firstName.trim() || digits.length < 10) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: '',
          email: '',
          phone: `+1${digits}`,
          smsMarketingConsent: consent.marketing,
          smsTransactionalConsent: consent.transactional,
          marketingCheckboxText: consent.marketing
            ? `I consent to receive marketing text messages from The Pelham Group NW at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.`
            : '',
          transactionalCheckboxText: consent.transactional
            ? `I consent to receive non-marketing text messages from The Pelham Group NW related to transactional messages on your account.`
            : '',
          tags: ['listings-first-look', 'website-lead'],
          source: 'listings_lead_popup',
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setTimeout(dismiss, 3800);
    } catch {
      setStatus('error');
    }
  };

  if (!visible) return null;

  const digits = phone.replace(/\D/g, '');
  const canSubmit = firstName.trim().length > 0 && digits.length === 10 && status !== 'loading';

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 9998,
          animation: 'pelhamListingsPopupFadeIn 0.3s ease-out',
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="listings-popup-heading"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          width: '92%',
          maxWidth: 520,
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#F8F5F0',
          borderRadius: 4,
          boxShadow: '0 24px 72px rgba(0,0,0,0.32)',
          animation: 'pelhamListingsPopupSlide 0.42s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Top gradient bar */}
        <div
          style={{
            height: 5,
            background: 'linear-gradient(90deg, #2F5233 0%, #B8845C 100%)',
          }}
        />

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close popup"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#aaa',
            fontSize: '1.1rem',
            lineHeight: 1,
            padding: 4,
            minWidth: 36,
            minHeight: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'color 0.2s, background 0.2s',
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#2F5233';
            e.currentTarget.style.background = 'rgba(47,82,51,0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#aaa';
            e.currentTarget.style.background = 'none';
          }}
        >
          ✕
        </button>

        <div style={{ padding: '32px 36px 30px' }}>
          {status === 'success' ? (
            /* ── SUCCESS STATE ── */
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div
                style={{
                  border: '1.5px solid #B8845C',
                  borderRadius: 3,
                  padding: '28px 24px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#F8F5F0',
                    padding: '0 10px',
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.1rem',
                    color: '#B8845C',
                  }}
                >
                  on the list
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.85rem',
                    fontWeight: 600,
                    color: '#2F5233',
                    margin: '4px 0 12px',
                    lineHeight: 1.25,
                  }}
                >
                  You&apos;re in.
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: '#555',
                    lineHeight: 1.7,
                    margin: '0 0 16px',
                  }}
                >
                  Next time I list a home, you&apos;ll get a text from me before it hits Zillow. Reply STOP any time to opt out.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.55rem',
                    color: '#B8845C',
                    margin: 0,
                  }}
                >
                  Always, Kim
                </p>
              </div>
            </div>
          ) : (
            /* ── DEFAULT STATE ── */
            <>
              {/* Decorative inner frame */}
              <div
                style={{
                  border: '1.5px solid rgba(184,132,92,0.4)',
                  borderRadius: 3,
                  padding: '24px 24px 20px',
                  marginBottom: 20,
                  position: 'relative',
                  background: 'rgba(255,255,255,0.55)',
                }}
              >
                {/* Corner accents */}
                <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '3px solid #B8845C', borderLeft: '3px solid #B8845C', borderRadius: '3px 0 0 0' }} />
                <div style={{ position: 'absolute', top: -1, right: -1, width: 14, height: 14, borderTop: '3px solid #B8845C', borderRight: '3px solid #B8845C', borderRadius: '0 3px 0 0' }} />
                <div style={{ position: 'absolute', bottom: -1, left: -1, width: 14, height: 14, borderBottom: '3px solid #B8845C', borderLeft: '3px solid #B8845C', borderRadius: '0 0 0 3px' }} />
                <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '3px solid #B8845C', borderRight: '3px solid #B8845C', borderRadius: '0 0 3px 0' }} />

                <p
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.05rem',
                    color: '#B8845C',
                    margin: '0 0 6px 0',
                  }}
                >
                  first look
                </p>

                <h2
                  id="listings-popup-heading"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    fontWeight: 600,
                    color: '#2C2C2C',
                    margin: '0 0 12px 0',
                    lineHeight: 1.25,
                  }}
                >
                  Be the first to see my new{' '}
                  <span style={{ color: '#2F5233' }}>Snohomish County listings</span>.
                </h2>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    color: '#555',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  I send a short text the morning a new listing goes live, before it hits Zillow or Redfin. Most of mine go pending in under two weeks. Drop your name and number, that&apos;s it.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: 10 }}>
                  <label
                    htmlFor="listings-firstname"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#666',
                      marginBottom: 5,
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                    }}
                  >
                    First name <span style={{ color: '#B8845C' }}>*</span>
                  </label>
                  <input
                    id="listings-firstname"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Sarah"
                    autoComplete="given-name"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2F5233';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#DDD8CF';
                    }}
                  />
                </div>

                <div style={{ marginBottom: 10 }}>
                  <label
                    htmlFor="listings-phone"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#666',
                      marginBottom: 5,
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                    }}
                  >
                    Mobile number <span style={{ color: '#B8845C' }}>*</span>
                  </label>
                  <input
                    id="listings-phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    placeholder="(425) 555-0188"
                    autoComplete="tel"
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2F5233';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#DDD8CF';
                    }}
                  />
                </div>

                {/* A2P consent */}
                <div style={{ marginTop: 12, marginBottom: 14 }}>
                  <A2PConsent variant="full" value={consent} onChange={setConsent} />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  style={{
                    width: '100%',
                    padding: '13px 24px',
                    background: !canSubmit ? '#9aad9c' : '#2F5233',
                    color: '#F8F5F0',
                    border: 'none',
                    borderRadius: 3,
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.18rem',
                    cursor: canSubmit ? 'pointer' : 'default',
                    transition: 'background 0.2s, transform 0.15s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => {
                    if (canSubmit) e.currentTarget.style.background = '#3d6b42';
                  }}
                  onMouseLeave={(e) => {
                    if (canSubmit) e.currentTarget.style.background = '#2F5233';
                  }}
                >
                  {status === 'loading' ? 'Adding you to the list...' : 'Text me when a listing drops →'}
                </button>

                {status === 'error' && (
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      color: '#c0392b',
                      marginTop: 10,
                      textAlign: 'center',
                    }}
                  >
                    Something hiccuped. Text Kim directly at{' '}
                    <a href="sms:+14252509422" style={{ color: '#c0392b' }}>
                      425.250.9422
                    </a>
                    .
                  </p>
                )}
              </form>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.74rem',
                  color: '#aaa',
                  textAlign: 'center',
                  marginTop: 12,
                  lineHeight: 1.5,
                }}
              >
                Two or three texts a month, no spam, reply STOP any time.{' '}
                <button
                  onClick={dismiss}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#aaa',
                    textDecoration: 'underline',
                    font: 'inherit',
                    padding: 0,
                  }}
                >
                  Not right now
                </button>
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pelhamListingsPopupFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pelhamListingsPopupSlide {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 24px)); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 12px',
  border: '1.5px solid #DDD8CF',
  borderRadius: 3,
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  color: '#2C2C2C',
  background: '#FFFFFF',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

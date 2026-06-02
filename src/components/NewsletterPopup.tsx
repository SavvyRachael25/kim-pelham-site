'use client';

import { useState, useEffect } from 'react';
import A2PConsent from '@/components/A2PConsent';
import type { A2PConsentState } from '@/components/A2PConsent';

const STORAGE_KEY = 'kim_popup_dismissed';
const DISMISS_DAYS = 7;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [consent, setConsent] = useState<A2PConsentState>({ marketing: false, transactional: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
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

    const timer = setTimeout(show, 9000);
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.45) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName: '',
          email,
          phone: '',
          smsMarketingConsent: consent.marketing,
          smsTransactionalConsent: false,
          marketingCheckboxText: consent.marketing
            ? 'I agree to receive marketing communications from Kim Pelham / The Pelham Group NW.'
            : '',
          transactionalCheckboxText: '',
          tags: ['newsletter-signup', 'website-lead'],
          source: 'newsletter_popup',
          ...(typeof window !== 'undefined'
            ? (() => {
                const p = new URLSearchParams(window.location.search);
                const out: Record<string, string> = {};
                const get = (k: string) => p.get(k)?.trim();
                if (get('utm_source')) out.utmSource = get('utm_source')!;
                if (get('utm_medium')) out.utmMedium = get('utm_medium')!;
                if (get('utm_campaign')) out.utmCampaign = get('utm_campaign')!;
                if (get('utm_content')) out.utmContent = get('utm_content')!;
                if (get('utm_term')) out.utmTerm = get('utm_term')!;
                return out;
              })()
            : {}),
        }),
      });
      setStatus('success');
      setTimeout(dismiss, 3500);
    } catch {
      setStatus('error');
    }
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 200,
          animation: 'fadeIn 0.3s ease',
        }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 201,
          width: '90%',
          maxWidth: '500px',
          backgroundColor: '#F8F5F0',
          borderRadius: '4px',
          boxShadow: '0 24px 72px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Top gradient bar */}
        <div style={{ height: '5px', background: 'linear-gradient(90deg, #2F5233 0%, #B8845C 100%)' }} />

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close newsletter signup"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#aaa',
            fontSize: '1.1rem',
            lineHeight: 1,
            padding: '4px',
            minWidth: '36px',
            minHeight: '36px',
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
              {/* Decorative frame */}
              <div
                style={{
                  border: '1.5px solid #B8845C',
                  borderRadius: '3px',
                  padding: '28px 24px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#F8F5F0',
                    padding: '0 10px',
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>🏡</span>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.9rem',
                    fontWeight: 600,
                    color: '#2F5233',
                    marginBottom: '10px',
                    marginTop: '4px',
                  }}
                >
                  You&apos;re in the neighborhood!
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>
                  Welcome to the list. I&apos;ll be in your inbox soon with real talk about the Snohomish County market. No fluff, I promise.
                </p>
                <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: '#B8845C' }}>
                  Kim
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
                  borderRadius: '3px',
                  padding: '24px 24px 20px',
                  marginBottom: '20px',
                  position: 'relative',
                  background: 'rgba(255,255,255,0.55)',
                }}
              >
                {/* Corner accents */}
                <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '3px solid #B8845C', borderLeft: '3px solid #B8845C', borderRadius: '3px 0 0 0' }} />
                <div style={{ position: 'absolute', top: -1, right: -1, width: 14, height: 14, borderTop: '3px solid #B8845C', borderRight: '3px solid #B8845C', borderRadius: '0 3px 0 0' }} />
                <div style={{ position: 'absolute', bottom: -1, left: -1, width: 14, height: 14, borderBottom: '3px solid #B8845C', borderLeft: '3px solid #B8845C', borderRadius: '0 0 0 3px' }} />
                <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '3px solid #B8845C', borderRight: '3px solid #B8845C', borderRadius: '0 0 3px 0' }} />

                {/* Eyebrow */}
                <p
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.05rem',
                    color: '#B8845C',
                    margin: '0 0 6px 0',
                    letterSpacing: '0.01em',
                  }}
                >
                  a note from Kim
                </p>

                <h2
                  id="popup-heading"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    fontWeight: 600,
                    color: '#2C2C2C',
                    margin: '0 0 12px 0',
                    lineHeight: 1.25,
                  }}
                >
                  I&apos;ve lived and worked this market for 17+ years.{' '}
                  <span style={{ color: '#2F5233' }}>Let me share what I actually know.</span>
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
                  A couple times a month I send real market updates, honest home-selling tips, and local Snohomish County picks. The kind of thing I&apos;d tell a friend over coffee, not a client in a sales pitch.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <label
                      htmlFor="popup-firstname"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#666',
                        marginBottom: '5px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.07em',
                      }}
                    >
                      First Name
                    </label>
                    <input
                      id="popup-firstname"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Sarah"
                      autoComplete="given-name"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1.5px solid #DDD8CF',
                        borderRadius: '3px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        color: '#2C2C2C',
                        background: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#2F5233'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#DDD8CF'; }}
                    />
                  </div>

                  <div style={{ flex: 1.4 }}>
                    <label
                      htmlFor="popup-email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: '#666',
                        marginBottom: '5px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.07em',
                      }}
                    >
                      Email <span style={{ color: '#B8845C' }}>*</span>
                    </label>
                    <input
                      id="popup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      required
                      autoComplete="email"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1.5px solid #DDD8CF',
                        borderRadius: '3px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        color: '#2C2C2C',
                        background: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#2F5233'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#DDD8CF'; }}
                    />
                  </div>
                </div>

                {/* A2P marketing consent — email-only form, single checkbox */}
                <div style={{ marginBottom: '10px' }}>
                  <A2PConsent
                    variant="email-only"
                    value={consent}
                    onChange={setConsent}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  style={{
                    width: '100%',
                    padding: '13px 24px',
                    background: !email ? '#9aad9c' : status === 'loading' ? '#3d6b42' : '#2F5233',
                    color: '#F8F5F0',
                    border: 'none',
                    borderRadius: '3px',
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.15rem',
                    cursor: status === 'loading' || !email ? 'default' : 'pointer',
                    transition: 'background 0.2s, transform 0.15s',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={(e) => { if (email && status !== 'loading') e.currentTarget.style.background = '#3d6b42'; }}
                  onMouseLeave={(e) => { if (email) e.currentTarget.style.background = '#2F5233'; }}
                >
                  {status === 'loading' ? 'Adding you to the list...' : 'Yes, send me the real scoop \u2192'}
                </button>

                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#c0392b', marginTop: '10px', textAlign: 'center' }}>
                    Something hiccuped. Email me directly at{' '}
                    <a href="mailto:hello@thepelhamgroupnw.com" style={{ color: '#c0392b' }}>hello@thepelhamgroupnw.com</a>
                  </p>
                )}
              </form>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: '#aaa',
                  textAlign: 'center',
                  marginTop: '12px',
                  lineHeight: 1.5,
                }}
              >
                No spam, ever. Unsubscribe any time.{' '}
                <button
                  onClick={dismiss}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', textDecoration: 'underline', font: 'inherit', padding: 0 }}
                >
                  Not right now
                </button>
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 24px)); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>
    </>
  );
}

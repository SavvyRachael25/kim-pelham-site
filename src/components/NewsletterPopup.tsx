'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'kim_popup_dismissed';
const DISMISS_DAYS = 7;

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const ts = parseInt(dismissed, 10);
      if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    // Show after 9 seconds OR 45% scroll, whichever comes first
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

    // Replace this URL with your GHL webhook or form endpoint
    const WEBHOOK_URL = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK || '';

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName, email, source: 'website_popup' }),
        });
      }
      setStatus('success');
      setTimeout(dismiss, 3000);
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
          background: 'rgba(0,0,0,0.45)',
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
          maxWidth: '480px',
          backgroundColor: '#F8F5F0',
          borderRadius: '4px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          overflow: 'hidden',
          animation: 'slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Forest green top bar */}
        <div style={{ height: '6px', background: 'linear-gradient(90deg, #2F5233, #B8845C)' }} />

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close newsletter signup"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#777',
            fontSize: '1.25rem',
            lineHeight: 1,
            padding: '4px',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '2px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#2F5233'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#777'; }}
        >
          ✕
        </button>

        <div style={{ padding: '36px 36px 32px' }}>
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <p style={{ fontSize: '2rem', marginBottom: '12px' }}>🏡</p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#2F5233',
                  marginBottom: '12px',
                }}
              >
                You&apos;re in!
              </h2>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.15rem', color: '#555' }}>
                Can&apos;t wait to be your neighbor in your inbox too. Talk soon.
              </p>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.5rem', color: '#B8845C', marginTop: '12px' }}>
                — Kim
              </p>
            </div>
          ) : (
            <>
              {/* Handwritten eyebrow */}
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '1rem',
                  color: '#B8845C',
                  margin: '0 0 8px 0',
                  letterSpacing: '0.02em',
                }}
              >
                from one neighbor to another
              </p>

              <h2
                id="popup-heading"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#2F5233',
                  margin: '0 0 14px 0',
                  lineHeight: 1.2,
                }}
              >
                The Real Scoop on Snohomish County Real Estate
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: '#555',
                  lineHeight: 1.7,
                  margin: '0 0 24px 0',
                }}
              >
                No marketing fluff. Just honest market updates, local picks, and the kind of advice I give my actual neighbors — straight to your inbox a couple times a month.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <label
                      htmlFor="popup-firstname"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#444',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      First Name
                    </label>
                    <input
                      id="popup-firstname"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="What should I call you?"
                      autoComplete="given-name"
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1.5px solid #E8E3DA',
                        borderRadius: '3px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        color: '#2C2C2C',
                        background: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#2F5233'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#E8E3DA'; }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="popup-email"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: '#444',
                        marginBottom: '6px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Email Address <span style={{ color: '#B8845C' }}>*</span>
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
                        padding: '10px 14px',
                        border: '1.5px solid #E8E3DA',
                        borderRadius: '3px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        color: '#2C2C2C',
                        background: '#FFFFFF',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = '#2F5233'; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = '#E8E3DA'; }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  style={{
                    width: '100%',
                    padding: '13px 24px',
                    background: status === 'loading' ? '#3d6b42' : '#2F5233',
                    color: '#F8F5F0',
                    border: 'none',
                    borderRadius: '3px',
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '1.1rem',
                    cursor: status === 'loading' ? 'wait' : 'pointer',
                    transition: 'background 0.2s, transform 0.2s',
                    opacity: !email ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => { if (email) e.currentTarget.style.background = '#3d6b42'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#2F5233'; }}
                >
                  {status === 'loading' ? 'Adding you...' : 'Yes, I want the real scoop'}
                </button>

                {status === 'error' && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#c0392b', marginTop: '10px', textAlign: 'center' }}>
                    Something went wrong — try emailing me directly at hello@thepelhamgroupnw.com
                  </p>
                )}
              </form>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: '#999',
                  textAlign: 'center',
                  marginTop: '14px',
                  lineHeight: 1.5,
                }}
              >
                No spam, ever. Unsubscribe any time.{' '}
                <button
                  onClick={dismiss}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', textDecoration: 'underline', font: 'inherit', padding: 0 }}
                >
                  Not now
                </button>
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translate(-50%, calc(-50% + 20px)); } to { opacity: 1; transform: translate(-50%, -50%); } }
      `}</style>
    </>
  );
}

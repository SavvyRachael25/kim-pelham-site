'use client';

import { useState } from 'react';

/**
 * TextMeAsk
 *
 * The one-field ask (2026-09-19, from the Long Table session): a cell number,
 * nothing else. The reader gives it because the article earned it, not for a
 * PDF. On submit the number lands in GHL tagged `text-me` and `text-me-<page>`,
 * the first text goes out from Kim's number within a minute (the "Text-me:
 * first reply" workflow), and Kim gets an alert. Kim answers the photos by hand.
 *
 * Sits mid-article on the nine seller posts and under the homepage hero.
 * The article stays public; this is a door, not a gate.
 */
export default function TextMeAsk({
  question,
  page,
  compact = false,
}: {
  question: string;
  page: string;
  compact?: boolean;
}) {
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    setMessage('');
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    try {
      const res = await fetch('/api/text-me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          page,
          website,
          utmSource: params?.get('utm_source') ?? undefined,
          utmMedium: params?.get('utm_medium') ?? undefined,
          utmCampaign: params?.get('utm_campaign') ?? undefined,
          utmContent: params?.get('utm_content') ?? undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState('error');
        setMessage(data.error || 'Something went wrong. Text Kim directly at 425-250-9422.');
        return;
      }
      setState('done');
      try {
        (window as unknown as { umami?: { track?: (n: string, d?: Record<string, string>) => void } }).umami?.track?.('text-me', { page });
      } catch {
        /* ignore */
      }
    } catch {
      setState('error');
      setMessage('Something went wrong. Text Kim directly at 425-250-9422.');
    }
  }

  const wrap: React.CSSProperties = {
    background: 'var(--color-cream)',
    borderLeft: '4px solid var(--color-clay)',
    borderRadius: '0 6px 6px 0',
    padding: compact ? '22px 22px' : '28px 28px',
    margin: compact ? '0' : '40px 0',
    scrollMarginTop: '110px',
  };

  if (state === 'done') {
    return (
      <aside id="text-me" style={wrap} aria-live="polite">
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-forest)', margin: '0 0 8px' }}>
          Got it. Watch for a text from me.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: 0, lineHeight: 1.6 }}>
          My cell is <a href="tel:+14252509422" style={{ color: 'var(--color-clay)', fontWeight: 600 }}>425-250-9422</a> if you&apos;d rather just call.
        </p>
      </aside>
    );
  }

  return (
    <aside id="text-me" style={wrap}>
      <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.3rem', color: 'var(--color-clay)', margin: '0 0 4px' }}>a question for you,</p>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: compact ? '1.5rem' : '1.75rem', fontWeight: 600, color: 'var(--color-forest)', margin: '0 0 8px', lineHeight: 1.2 }}>
        {question}
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text)', margin: '0 0 16px', lineHeight: 1.6, maxWidth: '38rem' }}>
        Leave your cell. I&apos;ll text you, you text me five photos of the house, and I&apos;ll send back what I&apos;d fix, what I&apos;d skip, and what I&apos;d list it at. One text back from me. Then it&apos;s up to you.
      </p>

      <form onSubmit={submit} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '30rem' }}>
        <label htmlFor={`text-me-phone-${page}`} style={{ position: 'absolute', left: '-9999px' }}>Your cell number</label>
        <input
          id={`text-me-phone-${page}`}
          type="tel"
          placeholder="Your cell number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[\d\s().+-]{10,}"
          title="A cell number with at least 10 digits"
          style={{ flex: '1 1 200px', fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '13px 14px', borderRadius: '4px', border: '1px solid #C9C2B6', background: '#fff', color: 'var(--color-text)' }}
        />
        <input style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} tabIndex={-1} autoComplete="off" type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} aria-hidden="true" />
        <button
          type="submit"
          disabled={state === 'sending'}
          style={{ background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', padding: '13px 24px', borderRadius: '4px', border: 'none', cursor: state === 'sending' ? 'default' : 'pointer', opacity: state === 'sending' ? 0.7 : 1 }}
        >
          {state === 'sending' ? 'Sending…' : 'Text me'}
        </button>
      </form>

      {state === 'error' && (
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '10px', color: '#9B3B2E' }}>{message}</p>
      )}

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-text-light)', margin: '12px 0 0', lineHeight: 1.5, maxWidth: '38rem' }}>
        One text from Kim, then it&apos;s your call. Msg &amp; data rates may apply. Reply STOP to opt out.
      </p>
    </aside>
  );
}

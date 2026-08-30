'use client';

import { useState } from 'react';

/**
 * GuideGate
 *
 * Capture form that trades a designed PDF guide for a name + email.
 * The article itself stays public; only the PDF is gated.
 *
 * On success: contact lands in GHL tagged `guide-<slug>` (which fires the
 * delivery workflow), Kim gets an alert, and the browser opens the PDF
 * immediately so nobody has to wait on email to read it.
 */
export default function GuideGate({
  guide,
  title = 'Get the printable guide',
  blurb = 'A designed 8-page PDF with the market numbers, the transit map, and a checklist you can take to a showing.',
}: {
  guide: string;
  title?: string;
  blurb?: string;
}) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    setMessage('');

    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;

    try {
      const res = await fetch('/api/guide-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          guide,
          firstName,
          email,
          phone,
          timeline,
          utmSource: params?.get('utm_source') ?? undefined,
          utmMedium: params?.get('utm_medium') ?? undefined,
          utmCampaign: params?.get('utm_campaign') ?? undefined,
          utmContent: params?.get('utm_content') ?? undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState('error');
        setMessage(data.error || 'Something went wrong. Please text Kim at 425-250-9422.');
        return;
      }
      setDownloadUrl(data.downloadUrl);
      setState('done');
      window.open(data.downloadUrl, '_blank', 'noopener');
    } catch {
      setState('error');
      setMessage('Something went wrong. Please text Kim at 425-250-9422.');
    }
  }

  const field: React.CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    padding: '12px 14px',
    borderRadius: '4px',
    border: '1px solid rgba(248,245,240,0.35)',
    background: 'rgba(255,255,255,0.06)',
    color: 'var(--color-cream)',
    marginBottom: '10px',
  };

  if (state === 'done') {
    return (
      <div style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '36px 32px', borderRadius: '8px', margin: '48px 0 0' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '10px' }}>
          It is on its way, {firstName}.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.9, marginBottom: '14px' }}>
          The guide should have opened in a new tab, and a copy is headed to {email}. If the tab did not open, here it is:
        </p>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener"
          style={{ display: 'inline-block', background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, padding: '13px 26px', borderRadius: '4px', textDecoration: 'none' }}
        >
          Open the guide
        </a>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '16px', opacity: 0.85 }}>
          Questions about a specific street? Text me: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)' }}>425-250-9422</a>
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '40px 32px', borderRadius: '8px', margin: '48px 0 0' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', marginBottom: '8px' }}>{title}</p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.88, marginBottom: '20px', maxWidth: '32rem' }}>{blurb}</p>

      <form onSubmit={submit} style={{ maxWidth: '30rem' }}>
        <input style={field} type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required autoComplete="given-name" />
        <input style={field} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        <input style={field} type="tel" placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
        <select style={{ ...field, color: timeline ? 'var(--color-cream)' : 'rgba(248,245,240,0.6)' }} value={timeline} onChange={(e) => setTimeline(e.target.value)}>
          <option value="" style={{ color: '#2C2C2C' }}>When are you thinking of buying? (optional)</option>
          <option value="just looking" style={{ color: '#2C2C2C' }}>Just looking for now</option>
          <option value="3 to 6 months" style={{ color: '#2C2C2C' }}>3 to 6 months</option>
          <option value="6 to 12 months" style={{ color: '#2C2C2C' }}>6 to 12 months</option>
          <option value="ready now" style={{ color: '#2C2C2C' }}>Ready now</option>
        </select>

        <button
          type="submit"
          disabled={state === 'sending'}
          style={{ background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', padding: '14px 28px', borderRadius: '4px', border: 'none', cursor: state === 'sending' ? 'default' : 'pointer', marginTop: '6px', opacity: state === 'sending' ? 0.7 : 1 }}
        >
          {state === 'sending' ? 'Sending…' : 'Send me the guide'}
        </button>

        {state === 'error' && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '12px', color: '#F4C7B8' }}>{message}</p>
        )}

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', marginTop: '14px', opacity: 0.7, lineHeight: 1.5 }}>
          I send the guide and the occasional note about the Snohomish County market. No spam, and you can unsubscribe any time.
        </p>
      </form>
    </div>
  );
}

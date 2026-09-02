'use client';

import { useState } from 'react';

/**
 * NominationForm
 *
 * "Nominate a home, a business, or a nonprofit for The American Dream TV."
 * Posts to /api/feature-request. Article-style copy lives on the /adtv page;
 * this is just the capture. Honeypot field ("website") stays hidden and empty.
 */
export default function NominationForm({ defaultType = 'home' }: { defaultType?: 'home' | 'business' | 'nonprofit' }) {
  const [type, setType] = useState<'home' | 'business' | 'nonprofit'>(defaultType);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [why, setWhy] = useState('');
  const [relationship, setRelationship] = useState('');
  const [website, setWebsite] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    setMessage('');
    const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
    try {
      const res = await fetch('/api/feature-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type, firstName, lastName, email, phone, name, city, why, relationship, website,
          utmSource: params?.get('utm_source') ?? undefined,
          utmMedium: params?.get('utm_medium') ?? undefined,
          utmCampaign: params?.get('utm_campaign') ?? undefined,
          utmContent: params?.get('utm_content') ?? undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setState('error'); setMessage(data.error || 'Something went wrong. Please text Kim at 425-250-9422.'); return; }
      setState('done');
      try { (window as unknown as { umami?: { track?: (n: string, d?: Record<string, string>) => void } }).umami?.track?.('adtv-nomination', { type }); } catch { /* ignore */ }
    } catch {
      setState('error'); setMessage('Something went wrong. Please text Kim at 425-250-9422.');
    }
  }

  const field: React.CSSProperties = {
    width: '100%', fontFamily: 'var(--font-body)', fontSize: '1rem', padding: '12px 14px',
    borderRadius: '4px', border: '1px solid rgba(248,245,240,0.35)', background: 'rgba(255,255,255,0.06)',
    color: 'var(--color-cream)', marginBottom: '10px',
  };
  const opt: React.CSSProperties = { color: '#2C2C2C' };
  const pill = (v: 'home' | 'business' | 'nonprofit', label: string) => (
    <button
      type="button"
      key={v}
      onClick={() => setType(v)}
      aria-pressed={type === v}
      style={{
        fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.95rem', padding: '10px 16px', borderRadius: '999px',
        border: '1px solid ' + (type === v ? 'var(--color-clay)' : 'rgba(248,245,240,0.35)'),
        background: type === v ? 'var(--color-clay)' : 'transparent', color: 'var(--color-cream)', cursor: 'pointer', marginRight: '8px', marginBottom: '8px',
      }}
    >
      {label}
    </button>
  );

  if (state === 'done') {
    return (
      <div style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '36px 32px', borderRadius: '8px' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', marginBottom: '10px' }}>Got it, {firstName}. Thank you.</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.9, lineHeight: 1.7 }}>
          I read every nomination myself. If it looks like a fit for this season, I will reach out to whoever owns it (and check with you first if it is not yours). If you nominated your own place, expect a call from me within a few days. A note with the next steps is on its way to {email}.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '16px', opacity: 0.85 }}>
          Anything to add? Text me: <a href="tel:+14252509422" style={{ color: 'var(--color-cream)' }}>425-250-9422</a>
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', padding: '40px 32px', borderRadius: '8px' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '6px' }}>Nominate one</p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', opacity: 0.88, marginBottom: '18px', maxWidth: '34rem', lineHeight: 1.6 }}>
        It does not need to be for sale. It does not need to be fancy. It needs to be real, and it needs to be in Snohomish County.
      </p>

      <form onSubmit={submit} style={{ maxWidth: '34rem' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.75, marginBottom: '8px' }}>What are you nominating?</p>
        <div style={{ marginBottom: '14px' }}>
          {pill('home', 'A home')}{pill('business', 'A business')}{pill('nonprofit', 'A nonprofit')}
        </div>

        <input style={field} type="text" placeholder={type === 'home' ? 'The house (a street or a nickname is fine)' : type === 'business' ? 'The business' : 'The organization'} value={name} onChange={(e) => setName(e.target.value)} required />
        <input style={field} type="text" placeholder="City or neighborhood" value={city} onChange={(e) => setCity(e.target.value)} required autoComplete="address-level2" />
        <textarea style={{ ...field, minHeight: '110px', resize: 'vertical' }} placeholder={type === 'home' ? 'What is the story? A view, a history, a renovation, something people slow down to look at.' : 'Why should people know about it?'} value={why} onChange={(e) => setWhy(e.target.value)} required />
        <select style={{ ...field, color: relationship ? 'var(--color-cream)' : 'rgba(248,245,240,0.6)' }} value={relationship} onChange={(e) => setRelationship(e.target.value)} required>
          <option value="" style={opt}>How do you know it?</option>
          {type === 'home' ? (
            <>
              <option value="mine" style={opt}>It is my home</option>
              <option value="neighbor" style={opt}>It is a neighbor&apos;s</option>
              <option value="friend" style={opt}>It belongs to a friend or family</option>
              <option value="other" style={opt}>I just admire it</option>
            </>
          ) : (
            <>
              <option value="i-run-it" style={opt}>I run it</option>
              <option value="friend" style={opt}>I know the owner</option>
              <option value="other" style={opt}>I am a fan</option>
            </>
          )}
        </select>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.75, margin: '14px 0 8px' }}>About you</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input style={field} type="text" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required autoComplete="given-name" />
          <input style={field} type="text" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="family-name" />
        </div>
        <input style={field} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        <input style={field} type="tel" placeholder="Phone (optional, but it is how I will reach you fastest)" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
        <input style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} tabIndex={-1} autoComplete="off" type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} aria-hidden="true" />

        <button type="submit" disabled={state === 'sending'} style={{ background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', padding: '14px 28px', borderRadius: '4px', border: 'none', cursor: state === 'sending' ? 'default' : 'pointer', marginTop: '6px', opacity: state === 'sending' ? 0.7 : 1 }}>
          {state === 'sending' ? 'Sending…' : 'Send the nomination'}
        </button>

        {state === 'error' && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '12px', color: '#F4C7B8' }}>{message}</p>}

        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', marginTop: '14px', opacity: 0.7, lineHeight: 1.5 }}>
          Being featured never costs anyone anything, and not every nomination airs. I will only contact the owner of a place you nominate after checking with you. You may also get the occasional note from me about the show and the Snohomish County market; unsubscribe any time.
        </p>
      </form>
    </div>
  );
}

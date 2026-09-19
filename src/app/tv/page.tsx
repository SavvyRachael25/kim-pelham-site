'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

/**
 * /tv
 *
 * The QR card in the room points here (first: 100+ Women Who Care, Monday
 * October 12, 2026). One promise, one field: leave a number, get the link the
 * day the segment is up. The event comes in on ?e= (the card carries it) so
 * the tag says which room they were in.
 */
export default function TvPage() {
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
      const res = await fetch('/api/adtv-room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          website,
          event: params?.get('e') ?? params?.get('utm_campaign') ?? undefined,
          utmSource: params?.get('utm_source') ?? undefined,
          utmMedium: params?.get('utm_medium') ?? undefined,
          utmCampaign: params?.get('utm_campaign') ?? undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState('error');
        setMessage(data.error || 'Something went wrong. Text Kim at 425-250-9422 and she will add you by hand.');
        return;
      }
      setState('done');
      try {
        (window as unknown as { umami?: { track?: (n: string, d?: Record<string, string>) => void } }).umami?.track?.('adtv-room', { event: params?.get('e') ?? 'unknown' });
      } catch {
        /* ignore */
      }
    } catch {
      setState('error');
      setMessage('Something went wrong. Text Kim at 425-250-9422 and she will add you by hand.');
    }
  }

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--color-forest)', color: 'var(--color-cream)', minHeight: '70vh', padding: '64px 20px 80px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '10px 14px', width: '200px', marginBottom: '28px' }}>
            <Image src="/images/adtv-emmy-logo.png" alt="The American Dream TV, Emmy nominated" width={640} height={200} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
          </div>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: '#D4A07A', margin: '0 0 6px' }}>you were in the room,</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', fontWeight: 700, lineHeight: 1.05, margin: '0 0 18px', color: 'var(--color-cream)' }}>
            The segment airs in December.
          </h1>

          {state === 'done' ? (
            <div aria-live="polite">
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', margin: '0 0 10px' }}>Got you.</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', lineHeight: 1.7, opacity: 0.92, margin: 0 }}>
                Watch for a text from me in December with the link. If you want to say hi before then, my cell is{' '}
                <a href="tel:+14252509422" style={{ color: '#D4A07A', fontWeight: 700 }}>425-250-9422</a>.
              </p>
            </div>
          ) : (
            <>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.1rem', lineHeight: 1.7, opacity: 0.92, margin: '0 0 22px' }}>
                Leave your number and I&apos;ll text you the link the day it&apos;s up. That&apos;s the only thing I&apos;ll send.
              </p>
              <form onSubmit={submit} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <label htmlFor="tv-phone" style={{ position: 'absolute', left: '-9999px' }}>Your cell number</label>
                <input
                  id="tv-phone"
                  type="tel"
                  placeholder="Your cell number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[\d\s().+-]{10,}"
                  title="A cell number with at least 10 digits"
                  style={{ flex: '1 1 220px', fontFamily: 'var(--font-body)', fontSize: '1.05rem', padding: '15px 16px', borderRadius: '4px', border: '1px solid rgba(248,245,240,0.35)', background: 'rgba(255,255,255,0.08)', color: 'var(--color-cream)' }}
                />
                <input style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} tabIndex={-1} autoComplete="off" type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} aria-hidden="true" />
                <button
                  type="submit"
                  disabled={state === 'sending'}
                  style={{ background: 'var(--color-clay)', color: 'var(--color-cream)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.05rem', padding: '15px 26px', borderRadius: '4px', border: 'none', cursor: state === 'sending' ? 'default' : 'pointer', opacity: state === 'sending' ? 0.7 : 1 }}
                >
                  {state === 'sending' ? 'Sending…' : 'Text me the link'}
                </button>
              </form>
              {state === 'error' && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', marginTop: '12px', color: '#F4C7B8' }}>{message}</p>}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', opacity: 0.7, margin: '14px 0 0', lineHeight: 1.5 }}>
                One text now so you know it worked, one in December with the link. Msg &amp; data rates may apply. Reply STOP to opt out.
              </p>
            </>
          )}

          <div style={{ borderTop: '1px solid rgba(248,245,240,0.2)', marginTop: '40px', paddingTop: '22px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Image src="/images/kim-by-water.jpg" alt="Kim Pelham" width={1024} height={683} style={{ width: '84px', height: '84px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #D4A07A' }} />
            <div>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', margin: '0 0 2px' }}>Kim Pelham</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>
                Host, The American Dream TV, Snohomish County.{' '}
                <Link href="/adtv" style={{ color: '#D4A07A', fontWeight: 700 }}>Whose place should be on it?</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

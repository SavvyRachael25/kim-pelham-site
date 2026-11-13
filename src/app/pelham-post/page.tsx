'use client';

import { useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import A2PConsent from '@/components/A2PConsent';
import type { A2PConsentState } from '@/components/A2PConsent';

/**
 * /pelham-post
 * Where the comment-to-DM automation sends people ("Comment POST").
 * Same submit path as NewsletterPopup, plus a tag that says where they came from.
 * pp-master-clean puts them on the full list; pp-openers puts them on the weekly Pelham Post send audience (Rachael, 2026-11-12).
 */
export default function PelhamPostSignup() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState<A2PConsentState>({ marketing: false, transactional: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    const p = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const [k, key] of [['utm_source', 'utmSource'], ['utm_medium', 'utmMedium'], ['utm_campaign', 'utmCampaign'], ['utm_content', 'utmContent']]) {
      const v = p.get(k)?.trim();
      if (v) utm[key] = v;
    }
    try {
      const r = await fetch('/api/contact', {
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
          tags: ['newsletter-signup', 'website-lead', 'pp-signup-social', 'pp-master-clean', 'pp-openers'],
          source: 'pelham_post_page',
          ...utm,
        }),
      });
      setStatus(r.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const input: React.CSSProperties = {
    width: '100%', padding: '13px 14px', border: '1.5px solid #DDD8CF', borderRadius: '4px',
    fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#2C2C2C', background: '#fff', boxSizing: 'border-box',
  };
  const label: React.CSSProperties = {
    display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: '#666',
    marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.07em',
  };

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--color-cream)', minHeight: '70vh', padding: '48px 20px 80px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <Image
            src="/images/lucy-jump.jpg"
            alt="Lucy the office dog clearing an agility hurdle in her green sweater"
            width={1040}
            height={693}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block', marginBottom: '24px' }}
          />
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: 'var(--color-clay)', margin: '0 0 4px' }}>
            the pelham post,
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.1rem, 6vw, 3rem)', fontWeight: 700, lineHeight: 1.08, color: 'var(--color-forest)', margin: '0 0 16px' }}>
            Lucy has a corner in my email. You can too.
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', lineHeight: 1.7, color: '#3a3a3a', margin: '0 0 12px' }}>
            Most weeks I send a short letter to neighbors, past clients and friends. What is actually happening in the Snohomish County market, in real numbers. A local business I think you should know. And Lucy&apos;s corner, where the office dog reports on her week.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.08rem', lineHeight: 1.7, color: '#3a3a3a', margin: '0 0 26px' }}>
            No sales pitch. Unsubscribe any time.
          </p>

          {status === 'success' ? (
            <div style={{ border: '1.5px solid var(--color-clay)', borderRadius: '6px', padding: '26px 24px', background: '#fff' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--color-forest)', margin: '0 0 8px' }}>You&apos;re on the list.</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.7, color: '#444', margin: '0 0 10px' }}>
                A welcome note is on its way to your inbox. If you do not see it in a few minutes, check your promotions folder.
              </p>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.6rem', color: 'var(--color-clay)', margin: 0 }}>Kim (and Lucy)</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ background: '#fff', border: '1px solid #E8E3DA', borderRadius: '6px', padding: '22px 20px' }}>
              <div style={{ marginBottom: '12px' }}>
                <label htmlFor="pp-first" style={label}>First name</label>
                <input id="pp-first" type="text" autoComplete="given-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={input} />
              </div>
              <div style={{ marginBottom: '12px' }}>
                <label htmlFor="pp-email" style={label}>Email <span style={{ color: 'var(--color-clay)' }}>*</span></label>
                <input id="pp-email" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} style={input} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <A2PConsent variant="email-only" value={consent} onChange={setConsent} />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                style={{ width: '100%', padding: '15px 22px', background: !email ? '#9aad9c' : 'var(--color-forest)', color: 'var(--color-cream)', border: 'none', borderRadius: '4px', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1.05rem', cursor: !email ? 'default' : 'pointer' }}
              >
                {status === 'loading' ? 'Adding you...' : 'Send me The Pelham Post'}
              </button>
              {status === 'error' && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#c0392b', margin: '12px 0 0', textAlign: 'center' }}>
                  That did not go through. Text me at <a href="tel:+14252509422" style={{ color: '#c0392b' }}>425-250-9422</a> and I will add you.
                </p>
              )}
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

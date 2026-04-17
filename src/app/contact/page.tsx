'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';
import A2PConsent, { MARKETING_TEXT, TRANSACTIONAL_TEXT } from '@/components/A2PConsent';
import type { A2PConsentState } from '@/components/A2PConsent';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '4px',
  border: '2px solid var(--color-border)',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  backgroundColor: 'var(--color-cream)',
  transition: 'border-color 0.3s, box-shadow 0.3s',
  boxSizing: 'border-box',
  color: 'var(--color-text)',
  outline: 'none',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'var(--color-text)',
  marginBottom: '8px',
};

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    interested: '',
    message: '',
  });
  const [consent, setConsent] = useState<A2PConsentState>({
    marketing: false,
    transactional: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const focusOn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-forest)';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(47, 82, 51, 0.1)';
  };
  const focusOff = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--color-border)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          smsMarketingConsent: consent.marketing,
          smsTransactionalConsent: consent.transactional,
          marketingCheckboxText: MARKETING_TEXT,
          transactionalCheckboxText: TRANSACTIONAL_TEXT,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body.error ?? "We couldn't submit your request. Please try again or call Kim at 425-250-9422.");
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMsg("We couldn't submit your request. Please try again or call Kim at 425-250-9422.");
      setStatus('error');
    }
  };

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title="Get in Touch"
          subtitle="Your real estate goals matter"
          image="/images/lifestyle-01-farmers-market.jpg"
          imageAlt="Local community in Snohomish County"
        />

        {/* Contact Content Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '60px',
            }}
          >
            {/* ── Contact Form ── */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--color-forest)',
                  marginBottom: '32px',
                }}
              >
                Let&apos;s Connect
              </h2>

              {status === 'success' ? (
                <div
                  style={{
                    background: '#F0F7F0',
                    border: '1.5px solid #2F5233',
                    borderRadius: '6px',
                    padding: '32px 28px',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontSize: '2rem', margin: '0 0 12px 0' }}>🏡</p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.6rem',
                      fontWeight: 600,
                      color: '#2F5233',
                      margin: '0 0 10px 0',
                    }}
                  >
                    Message received!
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', color: '#555', lineHeight: 1.7 }}>
                    Kim will be in touch within 24 hours. In the meantime, feel free to call or text at{' '}
                    <a href="tel:+14252509422" style={{ color: '#2F5233', fontWeight: 600 }}>
                      425-250-9422
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  {/* Name row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label htmlFor="firstName" style={labelStyle}>First Name *</label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        required
                        value={form.firstName}
                        onChange={handleChange('firstName')}
                        style={inputStyle}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={handleChange('lastName')}
                        style={inputStyle}
                        onFocus={focusOn}
                        onBlur={focusOff}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(425) 555-0000"
                      value={form.phone}
                      onChange={handleChange('phone')}
                      style={inputStyle}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      autoComplete="tel"
                    />
                  </div>

                  {/* A2P consent block — positioned directly below the phone field per A2P spec */}
                  {form.phone && (
                    <A2PConsent
                      variant="full"
                      value={consent}
                      onChange={setConsent}
                    />
                  )}

                  {/* Email */}
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={form.email}
                      onChange={handleChange('email')}
                      style={inputStyle}
                      onFocus={focusOn}
                      onBlur={focusOff}
                      autoComplete="email"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label htmlFor="interested" style={labelStyle}>I&apos;m Interested In</label>
                    <select
                      id="interested"
                      value={form.interested}
                      onChange={handleChange('interested')}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={focusOn}
                      onBlur={focusOff}
                    >
                      <option value="">Select an option...</option>
                      <option value="buying">Buying</option>
                      <option value="selling">Selling</option>
                      <option value="both">Both</option>
                      <option value="valuation">Home Valuation</option>
                      <option value="repairs">Repair Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" style={labelStyle}>Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell us a bit about your real estate needs..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange('message')}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={focusOn}
                      onBlur={focusOff}
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && errorMsg && (
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        color: '#c0392b',
                        margin: 0,
                      }}
                    >
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading' || !form.firstName || !form.email}
                    aria-label="Send Message"
                    style={{
                      padding: '16px 32px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: status === 'loading' || !form.firstName || !form.email
                        ? '#9aad9c'
                        : 'var(--color-clay)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: status === 'loading' || !form.firstName || !form.email ? 'default' : 'pointer',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      if (form.firstName && form.email && status !== 'loading') {
                        e.currentTarget.style.backgroundColor = '#a0743d';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = form.firstName && form.email ? 'var(--color-clay)' : '#9aad9c';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* ── Contact Info ── */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: 'var(--color-forest)',
                  marginBottom: '32px',
                }}
              >
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Phone */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                    }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+14252509422"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.25rem',
                      color: 'var(--color-clay)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-forest)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-clay)'; }}
                  >
                    425.250.9422
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                    }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:hello@thepelhamgroupnw.com"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1.125rem',
                      color: 'var(--color-clay)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      wordBreak: 'break-all',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-forest)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-clay)'; }}
                  >
                    hello@thepelhamgroupnw.com
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                    }}
                  >
                    Address
                  </h3>
                  <address
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                      fontStyle: 'normal',
                    }}
                  >
                    2815 Baker Ave Suite 102
                    <br />
                    Everett, WA 98201
                  </address>
                </div>

                {/* Office Hours */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                    }}
                  >
                    Office Hours
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                    }}
                  >
                    <p style={{ margin: '4px 0' }}>Monday - Friday: 9am - 6pm</p>
                    <p style={{ margin: '4px 0' }}>Weekends: By appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'var(--color-cream)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 400,
                color: 'var(--color-forest)',
                marginBottom: '60px',
                textAlign: 'center',
              }}
            >
              What to Expect
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '40px',
              }}
            >
              {[
                {
                  num: 1,
                  title: "We'll Connect",
                  body: "We'll reach out within 24 hours to understand your unique situation and goals.",
                },
                {
                  num: 2,
                  title: "We'll Strategize",
                  body: "Together, we'll develop a personalized plan tailored to your specific needs.",
                },
                {
                  num: 3,
                  title: "We'll Execute",
                  body: "We move forward with confidence, keeping you informed every step of the way.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-clay)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      margin: '0 auto 20px',
                    }}
                  >
                    {num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: 'var(--color-forest)',
                      marginBottom: '12px',
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      color: 'var(--color-text)',
                      lineHeight: '1.6',
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

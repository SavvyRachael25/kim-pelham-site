'use client';

import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        {/* Hero Section */}
        <section
          style={{
            background: `linear-gradient(135deg, var(--color-forest) 0%, #1f3823 100%)`,
            position: 'relative',
            overflow: 'hidden',
            padding: '120px 20px',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(196, 162, 101, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(196, 162, 101, 0.08) 0%, transparent 50%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 400,
                color: 'var(--color-cream)',
                marginBottom: '16px',
              }}
            >
              Get in Touch
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'rgba(248, 245, 240, 0.9)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Your Real Estate Goals Matter
            </p>
          </div>
        </section>

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
            {/* Contact Form */}
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
                Let's Connect
              </h2>
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label
                      htmlFor="firstName"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '8px',
                      }}
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      required
                      aria-label="First Name"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: `2px solid var(--color-border)`,
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        backgroundColor: 'var(--color-cream)',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-forest)';
                        e.currentTarget.style.boxShadow =
                          '0 0 0 3px rgba(47, 82, 51, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-text)',
                        marginBottom: '8px',
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                      aria-label="Last Name"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '4px',
                        border: `2px solid var(--color-border)`,
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        backgroundColor: 'var(--color-cream)',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-forest)';
                        e.currentTarget.style.boxShadow =
                          '0 0 0 3px rgba(47, 82, 51, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '8px',
                    }}
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(425) 555-0000"
                    required
                    aria-label="Phone Number"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: `2px solid var(--color-border)`,
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-cream)',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-forest)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(47, 82, 51, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '8px',
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    aria-label="Email Address"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: `2px solid var(--color-border)`,
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-cream)',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-forest)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(47, 82, 51, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="interested"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '8px',
                    }}
                  >
                    I'm Interested In
                  </label>
                  <select
                    id="interested"
                    required
                    aria-label="Interest"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: `2px solid var(--color-border)`,
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-cream)',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-forest)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(47, 82, 51, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
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

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--color-text)',
                      marginBottom: '8px',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us a bit about your real estate needs..."
                    rows={5}
                    required
                    aria-label="Message"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '4px',
                      border: `2px solid var(--color-border)`,
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      backgroundColor: 'var(--color-cream)',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-forest)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(47, 82, 51, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Send Message"
                  style={{
                    padding: '16px 32px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: 'var(--color-clay)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#a0743d';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(47, 82, 51, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-clay)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-forest)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-clay)';
                    }}
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-forest)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-clay)';
                    }}
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
              {/* Step 1 */}
              <div style={{ textAlign: 'center' }}>
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
                  1
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
                  We'll Connect
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  We'll reach out within 24 hours to understand your unique situation and goals.
                </p>
              </div>

              {/* Step 2 */}
              <div style={{ textAlign: 'center' }}>
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
                  2
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
                  We'll Strategize
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  Together, we'll develop a personalized plan tailored to your specific needs.
                </p>
              </div>

              {/* Step 3 */}
              <div style={{ textAlign: 'center' }}>
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
                  3
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
                  We'll Execute
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                  }}
                >
                  We move forward with confidence, keeping you informed every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const KIM_PHONE_DISPLAY = '(425) 250-9422';
const KIM_PHONE_RAW = '+14252509422';
const KIM_EMAIL = 'Kim@ThePelhamGroupNW.com';

// Programmatically open the GHL chat widget. The widget script (loaded in
// app/layout.tsx) attaches a global. We try a few well-known names + fall
// back to dispatching a click on the launcher button if present.
function openChatWidget() {
  if (typeof window === 'undefined') return;
  const w = window as unknown as {
    LeadConnector?: { open?: () => void };
    leadconnector?: { open?: () => void };
    lcChatWidget?: { open?: () => void };
  };
  w.LeadConnector?.open?.();
  w.leadconnector?.open?.();
  w.lcChatWidget?.open?.();
  // Fallback: the GHL widget renders a floating launcher; click it if present
  const launcher = document.querySelector<HTMLElement>(
    'lc-chat-button, .lc-chat-launcher, [data-widget-id], [aria-label*="chat" i], [aria-label*="Open chat" i]'
  );
  launcher?.click();
}

export default function ContactPage() {
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

        {/* Three-channel CTA grid */}
        <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-handwritten)',
                  fontSize: '22px',
                  color: '#B8845C',
                  margin: '0 0 12px 0',
                }}
              >
                three ways to reach me
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#2C2C2C',
                  margin: '0 0 16px 0',
                  lineHeight: 1.2,
                }}
              >
                Pick what feels right
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  color: '#555',
                  lineHeight: 1.7,
                  maxWidth: '640px',
                  margin: '0 auto',
                }}
              >
                I answer my own phone, read my own messages, and reply to my own emails.
                No call center, no auto-responder. Whichever you choose, you&rsquo;ll
                hear back from me &mdash; usually same day.
              </p>
            </div>

            <div
              className="contact-channels"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
                marginBottom: '48px',
              }}
            >
              {/* Chat — primary, fastest path */}
              <button
                type="button"
                onClick={openChatWidget}
                style={{
                  appearance: 'none',
                  border: '2px solid #2F5233',
                  background: '#2F5233',
                  color: '#F8F5F0',
                  borderRadius: '6px',
                  padding: '36px 24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 16px rgba(47,82,51,0.18)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(47,82,51,0.24)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(47,82,51,0.18)';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '20px',
                    color: '#B8845C',
                    marginBottom: '6px',
                  }}
                >
                  fastest
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#F8F5F0',
                    marginBottom: '10px',
                    lineHeight: 1.1,
                  }}
                >
                  Chat with Kim
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: 'rgba(248,245,240,0.85)',
                    lineHeight: 1.5,
                  }}
                >
                  Open the chat — Kim sees it on her phone in real time. Best for quick questions or to get a showing on the calendar.
                </div>
              </button>

              {/* Call */}
              <a
                href={`tel:${KIM_PHONE_RAW}`}
                style={{
                  border: '2px solid #B8845C',
                  background: '#FFFFFF',
                  color: '#2C2C2C',
                  borderRadius: '6px',
                  padding: '36px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  display: 'block',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(184,132,92,0.20)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '20px',
                    color: '#B8845C',
                    marginBottom: '6px',
                  }}
                >
                  if you&rsquo;d rather talk
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#2C2C2C',
                    marginBottom: '10px',
                    lineHeight: 1.1,
                  }}
                >
                  Call {KIM_PHONE_DISPLAY}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: '#666',
                    lineHeight: 1.5,
                  }}
                >
                  My direct line. Voicemail goes to my pocket if I&rsquo;m showing &mdash; I&rsquo;ll call you back the same day.
                </div>
              </a>

              {/* Text */}
              <a
                href={`sms:${KIM_PHONE_RAW}`}
                style={{
                  border: '2px solid #2F5233',
                  background: '#FFFFFF',
                  color: '#2C2C2C',
                  borderRadius: '6px',
                  padding: '36px 24px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  display: 'block',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(47,82,51,0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-handwritten)',
                    fontSize: '20px',
                    color: '#B8845C',
                    marginBottom: '6px',
                  }}
                >
                  text-friendly
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#2C2C2C',
                    marginBottom: '10px',
                    lineHeight: 1.1,
                  }}
                >
                  Text {KIM_PHONE_DISPLAY}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.95rem',
                    color: '#666',
                    lineHeight: 1.5,
                  }}
                >
                  Same number as my line. Quick photos of a place, a question while you&rsquo;re driving by &mdash; texts work great.
                </div>
              </a>
            </div>

            {/* Email + office details */}
            <div
              style={{
                background: '#F8F5F0',
                border: '1px solid #E8E3DA',
                borderRadius: '6px',
                padding: '32px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#B8845C',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  margin: '0 0 12px 0',
                }}
              >
                Email
              </p>
              <a
                href={`mailto:${KIM_EMAIL}`}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#2F5233',
                  textDecoration: 'none',
                }}
              >
                {KIM_EMAIL}
              </a>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: '#666',
                  marginTop: '24px',
                  lineHeight: 1.7,
                  maxWidth: '560px',
                  margin: '24px auto 0',
                }}
              >
                Brokered by <strong>Katrina Eileen Real Estate</strong> &middot; serving Snohomish County and surrounding areas of Washington State.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 800px) {
          .contact-channels {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

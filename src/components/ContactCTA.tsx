'use client';

import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#2F5233',
        padding: '80px 24px',
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Heading with underline */}
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 6vw, 48px)',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 24px 0',
            lineHeight: 1.2,
            position: 'relative',
            display: 'inline-block',
          }}
        >
          Ready to Make{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            Your Move?
            <svg
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '100%',
                height: '12px',
              }}
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 10 Q 50 2 100 10 T 200 10"
                stroke="#B8845C"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '20px',
            color: '#B8845C',
            margin: '32px 0 40px 0',
          }}
        >
          I'd love to chat — no pressure, just real talk.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <button
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 600,
              padding: '16px 32px',
              backgroundColor: '#B8845C',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              marginBottom: '32px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A07550';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B8845C';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
            }}
          >
            Schedule a Free Consultation
          </button>
        </Link>

        {/* Phone line */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '16px',
            color: '#FFFFFF',
            opacity: 0.8,
            margin: 0,
          }}
        >
          Or call me directly — <a
            href="tel:+14253439926"
            style={{
              color: '#FFFFFF',
              textDecoration: 'underline',
              fontWeight: 600,
            }}
          >
            (425) 343-9926
          </a>
        </p>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '60px 24px',
      }}
    >
      <div
        className="about-layout"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        {/* Left: Image — compact horizontal */}
        <div
          style={{
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '280px',
              height: '210px',
              backgroundColor: '#F8F5F0',
              padding: '6px',
              boxShadow: '4px 8px 16px rgba(0,0,0,0.12)',
              transform: 'rotate(-2.5deg)',
            }}
          >
            <Image
              src="/images/kim-pelham-headshot.jpg"
              alt="Kim Pelham, Associate Broker"
              fill
              quality={85}
              sizes="280px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '13px',
              color: '#9B9B9B',
              marginTop: '12px',
              textAlign: 'center',
              width: '280px',
            }}
          >
            Kim Pelham, Associate Broker
          </p>
        </div>

        {/* Right: Text */}
        <div style={{ flex: 1 }}>
          {/* Handwritten label */}
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '18px',
              color: '#B8845C',
              margin: '0 0 12px 0',
            }}
          >
            meet your agent
          </p>

          {/* Heading with underline */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '36px',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 20px 0',
              lineHeight: 1.2,
            }}
          >
            The Realtor{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Next Door
              <svg
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '100%',
                  height: '10px',
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

          {/* Bio — single paragraph for compactness */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#2C2C2C',
              lineHeight: 1.7,
              margin: '0 0 16px 0',
            }}
          >
            I'm not the agent who shows up in a Mercedes with a designer bag. I'm the one who
            shows up in boots because I just walked your crawl space. I've lived in Snohomish
            County at three different chapters of my life — I know which streets flood in
            November, which coffee shops are worth the wait, and which neighborhoods still have
            that small-town feel.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: '#2C2C2C',
              lineHeight: 1.7,
              margin: '0 0 20px 0',
            }}
          >
            When you work with me, you get someone who answers her own phone, stages your home
            with her own hands, and fights for every dollar because she remembers what it felt
            like to stretch for that first mortgage.
          </p>

          {/* Link */}
          <Link href="/about">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 600,
                color: '#B8845C',
                cursor: 'pointer',
                textDecoration: 'underline',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#A07550';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#B8845C';
              }}
            >
              Read More About Kim →
            </span>
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-layout {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

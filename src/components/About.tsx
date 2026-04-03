'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '80px 24px',
      }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '360px',
              aspectRatio: '3/4',
              backgroundColor: '#F8F5F0',
              padding: '8px',
              boxShadow: '4px 8px 16px rgba(0,0,0,0.12)',
              transform: 'rotate(-2.5deg)',
            }}
          >
            <Image
              src="/images/about-01-approachable-headshot-env.jpg"
              alt="Kim Pelham at the Everett Farmers Market"
              fill
              quality={85}
              sizes="(max-width: 768px) 100vw, 360px"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '14px',
              color: '#9B9B9B',
              marginTop: '16px',
              textAlign: 'center',
              maxWidth: '280px',
            }}
          >
            Kim at the Everett Farmers Market
          </p>
        </div>

        {/* Right: Text */}
        <div>
          {/* Handwritten label */}
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '18px',
              color: '#B8845C',
              margin: '0 0 16px 0',
            }}
          >
            meet your agent
          </p>

          {/* Heading with underline */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '40px',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 32px 0',
              lineHeight: 1.2,
            }}
          >
            The Realtor{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Next Door
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

          {/* Bio paragraphs */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#2C2C2C',
              lineHeight: 1.8,
              margin: '0 0 24px 0',
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
              fontSize: '16px',
              color: '#2C2C2C',
              lineHeight: 1.8,
              margin: '0 0 32px 0',
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
                fontSize: '16px',
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
              Read More About Kim
            </span>
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '64px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        {/* Photo side */}
        <div style={{ flexShrink: 0 }}>
          <div
            style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '5px solid #F0EDE7',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
          >
            <Image
              src="/images/kim-pelham-headshot.jpg"
              alt="Kim Pelham, Associate Broker"
              width={260}
              height={260}
              quality={85}
              style={{
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>

        {/* Text side */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '18px',
              color: '#B8845C',
              margin: '0 0 8px 0',
            }}
          >
            meet your agent
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '36px',
              fontWeight: 700,
              color: '#2C2C2C',
              margin: '0 0 24px 0',
              lineHeight: 1.2,
            }}
          >
            The Realtor{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              Next Door
              <svg
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '100%',
                  height: '10px',
                }}
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

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.75,
              margin: '0 0 16px 0',
            }}
          >
            I&apos;m not the agent who shows up in a Mercedes with a designer bag. I&apos;m the one
            who shows up in boots because I just walked your crawl space. I&apos;ve lived in
            Snohomish County at three different chapters of my life — I know which streets flood
            in November, which coffee shops are worth the wait, and which neighborhoods still
            have that small-town feel.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#444',
              lineHeight: 1.75,
              margin: '0 0 20px 0',
            }}
          >
            When you work with me, you get someone who answers her own phone, stages your home
            with her own hands, and fights for every dollar because she remembers what it felt
            like to stretch for that first mortgage.
          </p>

          <Link
            href="/about"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 600,
              color: '#B8845C',
              textDecoration: 'underline',
              display: 'inline-block',
            }}
          >
            Read More About Kim →
          </Link>
        </div>
      </div>
    </section>
  );
}

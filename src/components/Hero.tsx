'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        minHeight: '600px',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-01-aerial-neighborhood.jpg"
        alt="Aerial view of Snohomish County neighborhood"
        fill
        priority
        // Dropped from 85 to 78 — mobile LCP win, no visible quality loss
        // on the heavily-darkened gradient overlay.
        quality={78}
        sizes="(max-width: 768px) 100vw, 100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 100%)',
          zIndex: 2,
        }}
      />

      {/* Corner annotation */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          zIndex: 10,
          animation: 'fadeSlideUp 0.8s ease-out 0.2s both',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '20px',
            color: '#FFFFFF',
            margin: 0,
            textAlign: 'right',
          }}
        >
          ^ my actual neighborhood
        </p>
      </div>

      {/* Content container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '20px',
            color: '#F0EDE7',
            margin: '0 0 24px 0',
            animation: 'fadeSlideUp 0.8s ease-out 0s both',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          your neighbor in real estate
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 7vw, 64px)',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 24px 0',
            maxWidth: '900px',
            lineHeight: 1.2,
            animation: 'fadeSlideUp 0.8s ease-out 0.1s both',
          }}
        >
          I Don't Just Sell Homes Here.{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            I Live Here
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
        </h1>

        {/* Paragraph */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: '#F0EDE7',
            maxWidth: '700px',
            margin: '0 0 40px 0',
            lineHeight: 1.6,
            animation: 'fadeSlideUp 0.8s ease-out 0.2s both',
          }}
        >
          I'm a Snohomish County real estate broker with 17 years of experience and a 102.3% sale-to-list ratio.
          I work with a maximum of two active clients at a time, so every showing, listing, and closing earns my full attention.
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
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
              animation: 'fadeSlideUp 0.8s ease-out 0.3s both',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A07550';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#B8845C';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
            }}
          >
            Let's Talk  -  Free Consultation
          </button>
        </Link>
      </div>

      {/* Hero h1 already uses clamp() for responsive sizing.
          Removed unscoped <style>{ h1 { ... } p { ... } }</style> block
          — it was global and was shrinking every h1/p site-wide. */}
    </section>
  );
}

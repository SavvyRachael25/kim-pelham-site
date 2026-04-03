'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        quality={85}
        sizes="100vw"
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
          background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 100%)',
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
          opacity: mounted ? 0.7 : 0,
          transition: 'opacity 0.8s ease-out 0.2s',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '16px',
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
            color: '#B8845C',
            margin: '0 0 24px 0',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.8s ease-out 0s',
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
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.1s',
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
            color: '#FFFFFF',
            maxWidth: '700px',
            margin: '0 0 40px 0',
            lineHeight: 1.6,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.2s',
          }}
        >
          14 years helping families buy and sell in Snohomish County. Two-buyer-max policy
          because you deserve my full attention.
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
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.3s',
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
            Let's Talk — Free Consultation
          </button>
        </Link>
      </div>

      <style>{`
        @media (max-width: 640px) {
          h1 {
            font-size: 32px;
          }
          p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}

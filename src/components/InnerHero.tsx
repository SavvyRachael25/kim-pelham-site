'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface InnerHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

export default function InnerHero({ title, subtitle, image, imageAlt }: InnerHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '400px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '100px 24px 80px',
        textAlign: 'center',
      }}
    >
      {/* Background image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        quality={80}
        sizes="100vw"
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Forest green overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(47, 82, 51, 0.82)',
          zIndex: 1,
        }}
      />

      {/* Subtle texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23g)' opacity='0.055'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <h1
        style={{
          position: 'relative',
          zIndex: 3,
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(36px, 7vw, 64px)',
          fontWeight: 700,
          color: '#F8F5F0',
          margin: '0 0 24px 0',
          lineHeight: 1.2,
          maxWidth: '800px',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        {title}
      </h1>
      <p
        style={{
          position: 'relative',
          zIndex: 3,
          fontFamily: 'var(--font-handwritten)',
          fontSize: '24px',
          color: '#B8845C',
          margin: 0,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out 0.1s',
        }}
      >
        {subtitle}
      </p>
    </section>
  );
}

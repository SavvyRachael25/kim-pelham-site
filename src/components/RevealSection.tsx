'use client';

import { useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
}

export default function RevealSection({ children }: RevealSectionProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observerLeft = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLeftVisible(true);
      }
    }, observerOptions);

    const observerRight = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRightVisible(true);
      }
    }, observerOptions);

    if (leftRef.current) observerLeft.observe(leftRef.current);
    if (rightRef.current) observerRight.observe(rightRef.current);

    return () => {
      if (leftRef.current) observerLeft.unobserve(leftRef.current);
      if (rightRef.current) observerRight.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '80px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          {children}
        </div>
        <div
          ref={rightRef}
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.8s ease-out',
          }}
        />
      </div>
    </section>
  );
}

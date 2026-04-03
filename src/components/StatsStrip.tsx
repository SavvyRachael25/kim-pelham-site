'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  number: number;
  decimal?: number;
  label: string;
  quip: string;
}

const stats: Stat[] = [
  {
    number: 14,
    label: 'Years in Snohomish County',
    quip: '(and counting)',
  },
  {
    number: 104,
    decimal: 4,
    label: 'Sale-to-List Ratio',
    quip: '(yep, above asking)',
  },
  {
    number: 2,
    label: 'Buyers Max at a Time',
    quip: '(you deserve my full attention)',
  },
  {
    number: 3,
    decimal: 2,
    label: 'Avg Weeks to Sell',
    quip: '(I don\'t mess around)',
  },
];

interface StatCounterProps {
  stat: Stat;
  isVisible: boolean;
}

function StatCounter({ stat, isVisible }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const targetNumber = stat.number;
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentCount = Math.floor(targetNumber * easeProgress * 100) / 100;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, stat.number]);

  const displayNumber =
    stat.decimal !== undefined
      ? count.toFixed(1)
      : Math.floor(count).toString();

  return (
    <div style={{ textAlign: 'center' }}>
      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '44px',
          fontWeight: 700,
          color: '#B8845C',
          margin: '0 0 8px 0',
        }}
      >
        {displayNumber}
        <span
          style={{
            fontSize: '32px',
            fontWeight: 600,
          }}
        >
          {stat.label.includes('%') && !displayNumber.includes('.') ? '%' : ''}
        </span>
      </p>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 700,
          color: '#2C2C2C',
          textTransform: 'uppercase',
          margin: '0 0 8px 0',
          letterSpacing: '0.5px',
        }}
      >
        {stat.label}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-handwritten)',
          fontSize: '14px',
          color: '#9B9B9B',
          margin: 0,
        }}
      >
        {stat.quip}
      </p>
    </div>
  );
}

export default function StatsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#2F5233',
        padding: '80px 40px',
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.5\' opacity=\'0.1\'%3E%3Cpath d=\'M0 20 Q 10 10, 20 20 T 40 20\' /%3E%3Cpath d=\'M0 10 L 40 30\' /%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {stats.map((stat, idx) => (
          <StatCounter key={idx} stat={stat} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}

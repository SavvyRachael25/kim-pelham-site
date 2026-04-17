'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  number: number;
  decimal?: number;
  suffix?: string;
  label: string;
  quip: string;
}

const stats: Stat[] = [
  {
    number: 17,
    label: 'Years in Real Estate',
    quip: '(and counting)',
  },
  {
    number: 102,
    suffix: '%',
    label: 'Sale-to-List Ratio',
    quip: '(102.03% vs 100.2% market avg)',
  },
  {
    number: 2,
    label: 'Buyers Max at a Time',
    quip: '(you deserve my full attention)',
  },
  {
    number: 176,
    label: 'Homes Sold',
    quip: '(and counting)',
  },
];

interface StatCounterProps {
  stat: Stat;
  isVisible: boolean;
}

function StatCounter({ stat, isVisible }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const target = stat.number;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased * 100) / 100);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target); // guarantee exact final value
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
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
        <span style={{ fontSize: '32px', fontWeight: 600 }}>
          {stat.suffix ?? ''}
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
          fontSize: '18px',
          color: '#767676',
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
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // fire when 10% visible (was 0.3)
    );

    observer.observe(el);
    return () => observer.unobserve(el);
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

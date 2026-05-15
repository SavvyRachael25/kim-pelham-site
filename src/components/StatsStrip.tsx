'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  number: number;
  decimal?: number;
  suffix?: string;
  label: string;
  quip: string;
  citationId?: string;
  citationN?: number;
}

const stats: Stat[] = [
  {
    number: 17,
    label: 'Years in Real Estate',
    quip: '(and counting)',
    citationId: 'experience',
    citationN: 5,
  },
  {
    number: 102,
    suffix: '%',
    label: 'Sale-to-List Ratio',
    quip: '(102.3% vs 100.2% market avg)',
    citationId: 'sale-to-list',
    citationN: 1,
  },
  {
    number: 2,
    label: 'Buyers Max at a Time',
    quip: '(you deserve my full attention)',
    citationId: 'two-client-policy',
    citationN: 6,
  },
  {
    number: 176,
    label: 'Homes Sold',
    quip: '(and counting)',
    citationId: 'homes-sold',
    citationN: 7,
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

    // Respect prefers-reduced-motion — skip animation, show final value immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(stat.number);
      return;
    }

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
          fontSize: '15px',
          fontWeight: 700,
          color: '#F8F5F0',
          textTransform: 'uppercase',
          margin: '0 0 8px 0',
          letterSpacing: '0.5px',
        }}
      >
        {stat.label}
        {stat.citationId && stat.citationN ? (
          <sup
            style={{
              fontSize: '0.6em',
              marginLeft: '3px',
              verticalAlign: 'super',
              lineHeight: 0,
            }}
          >
            <Link
              href={`/sources#${stat.citationId}`}
              aria-label={`Source ${stat.citationN}`}
              title="View source"
              style={{
                color: '#F8F5F0',
                textDecoration: 'none',
                opacity: 0.65,
              }}
            >
              [{stat.citationN}]
            </Link>
          </sup>
        ) : null}
      </p>
      <p
        style={{
          fontFamily: 'var(--font-handwritten)',
          fontSize: '22px',
          color: 'rgba(248, 245, 240, 0.70)',
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
      {/*
        Citation line — visible inline citation pattern for the four stats
        above. AEO audit (2026-05-13/14) flagged Citability 35/100 because
        the small [N] superscripts on each stat were not pattern-matched
        as "cites sources." This sentence names the sources explicitly
        and links to the full breakdown.
      */}
      <p
        style={{
          maxWidth: '1200px',
          margin: '48px auto 0',
          textAlign: 'center',
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'rgba(248, 245, 240, 0.78)',
          lineHeight: 1.6,
          padding: '0 16px',
        }}
      >
        Sources for these statistics:{' '}
        <cite style={{ fontStyle: 'normal' }}>
          <a
            href="https://www.nwmls.com/discover/news-and-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#F8F5F0', textDecoration: 'underline' }}
          >
            Northwest Multiple Listing Service (NWMLS) market reports
          </a>
        </cite>
        ,{' '}
        <cite style={{ fontStyle: 'normal' }}>
          <a
            href="https://professionals.dol.wa.gov/s/license-lookup"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#F8F5F0', textDecoration: 'underline' }}
          >
            Washington State Department of Licensing
          </a>
        </cite>
        ,{' '}
        <cite style={{ fontStyle: 'normal' }}>
          <a
            href="https://www.heraldnet.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#F8F5F0', textDecoration: 'underline' }}
          >
            The Daily Herald
          </a>
        </cite>
        , and{' '}
        <cite style={{ fontStyle: 'normal' }}>
          <a
            href="https://www.google.com/search?q=The+Pelham+Group+NW+Everett+WA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#F8F5F0', textDecoration: 'underline' }}
          >
            Google Business Profile
          </a>
        </cite>
        . Full breakdown at{' '}
        <a
          href="/sources"
          style={{ color: '#F8F5F0', textDecoration: 'underline' }}
        >
          thepelhamgroupnw.com/sources
        </a>
        .
      </p>
    </section>
  );
}

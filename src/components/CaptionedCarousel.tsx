'use client';

import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import Image from 'next/image';

export interface CarouselSlide {
  src: string;
  alt: string;
  caption: string;
}

interface CaptionedCarouselProps {
  slides: CarouselSlide[];
  /** Label voiced on the section badge (e.g. "Before · April 7, 2026"). */
  badge: string;
  /** Heading shown above the carousel. */
  heading: string;
  /** Optional short paragraph between the heading and the carousel. */
  intro?: string;
  /** Used to ARIA-label the carousel region for screen readers. */
  ariaLabel: string;
  /** Color of the badge accent line + uppercase eyebrow. Defaults to clay. */
  accentColor?: string;
  /** Priority load the first image (use on the above-the-fold carousel). */
  priorityFirst?: boolean;
}

export default function CaptionedCarousel({
  slides,
  badge,
  heading,
  intro,
  ariaLabel,
  accentColor = 'var(--color-clay)',
  priorityFirst = false,
}: CaptionedCarouselProps) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Watch the scroll position so the slide indicator and the caption
  // both stay in sync as the user swipes or scrolls naturally.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let raf = 0;
    const update = () => {
      const slideW = rail.clientWidth;
      const idx = Math.round(rail.scrollLeft / Math.max(slideW, 1));
      setActiveIndex(Math.max(0, Math.min(slides.length - 1, idx)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    rail.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      rail.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [slides.length]);

  function go(delta: number) {
    const rail = railRef.current;
    if (!rail) return;
    const next = Math.max(0, Math.min(slides.length - 1, activeIndex + delta));
    rail.scrollTo({ left: next * rail.clientWidth, behavior: 'smooth' });
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      railRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (e.key === 'End') {
      e.preventDefault();
      const rail = railRef.current;
      if (rail) rail.scrollTo({ left: (slides.length - 1) * rail.clientWidth, behavior: 'smooth' });
    }
  }

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === slides.length - 1;
  const current = slides[activeIndex];

  return (
    <section aria-label={ariaLabel} style={{ width: '100%' }}>
      <header style={{ marginBottom: 24 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: accentColor }} aria-hidden="true" />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: accentColor }}>
            {badge}
          </span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 500, color: 'var(--color-forest)', margin: 0, lineHeight: 1.15 }}>
          {heading}
        </h2>
        {intro ? (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.02rem', color: 'var(--color-text-light)', lineHeight: 1.65, margin: '14px 0 0', maxWidth: 720 }}>
            {intro}
          </p>
        ) : null}
      </header>

      <div
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
        style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', background: '#000', boxShadow: '0 18px 50px rgba(47, 82, 51, 0.16)' }}
        className="ccarousel"
      >
        {/* Scroll rail */}
        <div
          ref={railRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
          className="ccarousel-rail"
        >
          {slides.map((s, i) => (
            <figure
              key={s.src}
              style={{
                flex: '0 0 100%',
                minWidth: '100%',
                margin: 0,
                position: 'relative',
                aspectRatio: '16 / 10',
                background: '#0e0e0e',
                scrollSnapAlign: 'start',
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1180px) 90vw, 1100px"
                priority={priorityFirst && i === 0}
                loading={priorityFirst && i === 0 ? undefined : 'lazy'}
                style={{ objectFit: 'cover' }}
              />
            </figure>
          ))}
        </div>

        {/* Caption + counter overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 'auto 0 0 0',
            padding: '16px 60px 18px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.78) 100%)',
            color: '#fff',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <figcaption style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.5, flex: 1, minWidth: 0, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.35)' }}>
            {current?.caption}
          </figcaption>
          <span aria-live="polite" style={{ flex: '0 0 auto', fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.85)', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.35)', borderRadius: 999, whiteSpace: 'nowrap' }}>
            {activeIndex + 1} / {slides.length}
          </span>
        </div>

        {/* Prev / Next buttons */}
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={atStart}
          aria-label="Previous photo"
          style={{
            position: 'absolute',
            top: '50%',
            left: 14,
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: atStart ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.55)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.35)',
            cursor: atStart ? 'not-allowed' : 'pointer',
            fontSize: 18,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s ease',
          }}
        >
          &larr;
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={atEnd}
          aria-label="Next photo"
          style={{
            position: 'absolute',
            top: '50%',
            right: 14,
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: atEnd ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.55)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.35)',
            cursor: atEnd ? 'not-allowed' : 'pointer',
            fontSize: 18,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s ease',
          }}
        >
          &rarr;
        </button>
      </div>

      {/* Dot indicator strip */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          marginTop: 18,
          flexWrap: 'wrap',
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              const rail = railRef.current;
              if (rail) rail.scrollTo({ left: i * rail.clientWidth, behavior: 'smooth' });
            }}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === activeIndex}
            style={{
              width: i === activeIndex ? 22 : 8,
              height: 8,
              borderRadius: 999,
              border: 0,
              background: i === activeIndex ? accentColor : 'var(--color-border)',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.18s ease, background 0.18s ease',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .ccarousel-rail::-webkit-scrollbar { display: none; }
        .ccarousel:focus { outline: 3px solid var(--color-clay); outline-offset: 4px; }
      `}</style>
    </section>
  );
}

'use client';

/**
 * BeforeAfterMorphCarousel
 *
 * Paired-room before/after carousel with a fade-morph transition between
 * the two photos of each pair. Built for Kim's case studies after her
 * feedback that flipping back and forth between "all befores then all
 * afters" buried the actual story. Now each slide is ONE room and the
 * old picture fades into the new one (and back) so the difference reads
 * at a glance.
 *
 * Behavior:
 *   - Auto-cycles: shows BEFORE for ~2.6s, fades to AFTER over ~0.9s,
 *     holds AFTER for ~2.6s, fades back to BEFORE.
 *   - Auto-cycle pauses when the user taps the slide, presses the
 *     Before/After pill, or uses the keyboard. Resumes when they
 *     advance to a new pair.
 *   - Prev/next buttons walk through pairs (room by room).
 *   - Dot indicators show position.
 *   - Keyboard: Arrow Left/Right walks pairs, Space toggles morph,
 *     Home/End jumps to first/last.
 *   - Captions stay on a card UNDER the photo (not overlaid), per Kim's
 *     "can't see the photo with writing on top" feedback.
 *   - Touch swipe walks pairs (scroll-snap-style left/right).
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { RoomPair } from '@/lib/case-studies/mathis-condo';

type Props = {
  pairs: RoomPair[];
  beforePath: string;
  afterPath: string;
  headline?: string;
  intro?: string;
  badge?: string;
};

const AUTO_HOLD_MS = 2600;
const AUTO_FADE_MS = 900;

export default function BeforeAfterMorphCarousel({
  pairs,
  beforePath,
  afterPath,
  headline,
  intro,
  badge,
}: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  /** 'before' or 'after'. Which side is currently visible. */
  const [side, setSide] = useState<'before' | 'after'>('before');
  /** Pauses the auto-cycle when the user has interacted */
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const current = pairs[activeIdx];

  /* Auto-cycle the morph */
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      setSide((s) => (s === 'before' ? 'after' : 'before'));
    }, AUTO_HOLD_MS);
    return () => clearTimeout(t);
  }, [side, activeIdx, paused]);

  /* Reset morph to BEFORE whenever we change rooms, and resume auto-cycle */
  useEffect(() => {
    setSide('before');
    setPaused(false);
  }, [activeIdx]);

  const goPrev = useCallback(() => setActiveIdx((i) => Math.max(0, i - 1)), []);
  const goNext = useCallback(
    () => setActiveIdx((i) => Math.min(pairs.length - 1, i + 1)),
    [pairs.length]
  );
  const goFirst = useCallback(() => setActiveIdx(0), []);
  const goLast = useCallback(() => setActiveIdx(pairs.length - 1), [pairs.length]);

  const toggleSide = useCallback(() => {
    setPaused(true);
    setSide((s) => (s === 'before' ? 'after' : 'before'));
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleSide();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goFirst();
    } else if (e.key === 'End') {
      e.preventDefault();
      goLast();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const beforeSrc = `${beforePath}/${String(current.beforeIdx).padStart(2, '0')}.jpg`;
  const afterSrc = `${afterPath}/${String(current.afterIdx).padStart(2, '0')}.jpg`;

  return (
    <section
      aria-label="Paired before and after walkthrough"
      style={{ position: 'relative' }}
    >
      {(headline || intro || badge) && (
        <div style={{ maxWidth: 880, margin: '0 auto 28px', textAlign: 'left' }}>
          {badge && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-clay)',
                margin: '0 0 8px',
              }}
            >
              {badge}
            </p>
          )}
          {headline && (
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 500,
                color: 'var(--color-forest)',
                margin: '0 0 14px',
                lineHeight: 1.15,
              }}
            >
              {headline}
            </h2>
          )}
          {intro && (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.04rem',
                color: 'var(--color-text-light, #555)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: 720,
              }}
            >
              {intro}
            </p>
          )}
        </div>
      )}

      <div
        ref={containerRef}
        tabIndex={0}
        role="group"
        aria-roledescription="carousel"
        aria-label={`Room ${activeIdx + 1} of ${pairs.length}: ${current.room}`}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          position: 'relative',
          maxWidth: 1100,
          margin: '0 auto',
          outline: 'none',
        }}
      >
        {/* Photo frame */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4 / 3',
            background: 'var(--color-cream-dark, #F0EDE7)',
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            boxShadow: '0 16px 40px rgba(47, 82, 51, 0.10)',
            cursor: 'pointer',
            userSelect: 'none',
          }}
          onClick={toggleSide}
          aria-label="Tap to flip between before and after"
        >
          {/* BEFORE layer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: side === 'before' ? 1 : 0,
              transition: `opacity ${AUTO_FADE_MS}ms ease-in-out`,
            }}
            aria-hidden={side === 'after'}
          >
            <Image
              src={beforeSrc}
              alt={`${current.room}, before pre-sale prep`}
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
              priority={activeIdx === 0}
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* AFTER layer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: side === 'after' ? 1 : 0,
              transition: `opacity ${AUTO_FADE_MS}ms ease-in-out`,
            }}
            aria-hidden={side === 'before'}
          >
            <Image
              src={afterSrc}
              alt={`${current.room}, after pre-sale prep`}
              fill
              sizes="(max-width: 900px) 100vw, 1100px"
              priority={activeIdx === 0}
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Side label (top-left) */}
          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              background:
                side === 'before' ? 'var(--color-cream, #F8F5F0)' : 'var(--color-forest, #2F5233)',
              color:
                side === 'before' ? 'var(--color-forest, #2F5233)' : 'var(--color-cream, #F8F5F0)',
              padding: '6px 12px',
              borderRadius: 3,
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
              pointerEvents: 'none',
              transition: 'background 0.4s ease, color 0.4s ease',
            }}
          >
            {side === 'before' ? 'Before' : 'After'}
          </div>

          {/* Counter (top-right) */}
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'rgba(0,0,0,0.55)',
              color: '#F8F5F0',
              padding: '5px 10px',
              borderRadius: 3,
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.05em',
              pointerEvents: 'none',
            }}
          >
            {activeIdx + 1} / {pairs.length}
          </div>

          {/* Before/After toggle pill (bottom-center, over the photo) */}
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              background: 'rgba(255,255,255,0.92)',
              borderRadius: 999,
              padding: 4,
              boxShadow: '0 6px 16px rgba(0,0,0,0.22)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setPaused(true);
                setSide('before');
              }}
              aria-pressed={side === 'before'}
              style={{
                border: 'none',
                background: side === 'before' ? 'var(--color-forest, #2F5233)' : 'transparent',
                color: side === 'before' ? 'var(--color-cream, #F8F5F0)' : 'var(--color-text, #2C2C2C)',
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: 999,
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              Before
            </button>
            <button
              type="button"
              onClick={() => {
                setPaused(true);
                setSide('after');
              }}
              aria-pressed={side === 'after'}
              style={{
                border: 'none',
                background: side === 'after' ? 'var(--color-forest, #2F5233)' : 'transparent',
                color: side === 'after' ? 'var(--color-cream, #F8F5F0)' : 'var(--color-text, #2C2C2C)',
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: 999,
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              After
            </button>
          </div>
        </div>

        {/* Prev / Next buttons */}
        <button
          type="button"
          onClick={goPrev}
          disabled={activeIdx === 0}
          aria-label="Previous room"
          style={navButtonStyle('left', activeIdx === 0)}
        >
          ←
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={activeIdx === pairs.length - 1}
          aria-label="Next room"
          style={navButtonStyle('right', activeIdx === pairs.length - 1)}
        >
          →
        </button>

        {/* Caption card UNDER the photo (not over) */}
        <div
          style={{
            marginTop: 18,
            padding: '18px 24px',
            background: 'var(--color-cream, #F8F5F0)',
            border: '1px solid var(--color-border)',
            borderRadius: 6,
          }}
        >
          <p
            style={{
              margin: '0 0 4px 0',
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-clay, #B8845C)',
            }}
          >
            {current.room}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: 500,
              color: 'var(--color-forest, #2F5233)',
              lineHeight: 1.45,
            }}
          >
            {current.work}
          </p>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 6,
            marginTop: 18,
            flexWrap: 'wrap',
          }}
          role="tablist"
          aria-label="Jump to room"
        >
          {pairs.map((p, i) => (
            <button
              key={p.room + i}
              type="button"
              role="tab"
              aria-selected={i === activeIdx}
              aria-label={`Go to ${p.room}`}
              onClick={() => setActiveIdx(i)}
              style={{
                border: 'none',
                cursor: 'pointer',
                background:
                  i === activeIdx ? 'var(--color-forest, #2F5233)' : 'var(--color-border, #E8E3DA)',
                width: i === activeIdx ? 20 : 8,
                height: 8,
                borderRadius: 999,
                padding: 0,
                transition: 'background 0.2s, width 0.2s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function navButtonStyle(side: 'left' | 'right', disabled: boolean): React.CSSProperties {
  return {
    position: 'absolute',
    top: 'calc(50% - 70px)',
    [side]: -22,
    transform: 'translateY(-50%)',
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: 'none',
    background: disabled ? 'rgba(232, 227, 218, 0.85)' : 'var(--color-forest, #2F5233)',
    color: disabled ? '#aaa' : 'var(--color-cream, #F8F5F0)',
    fontSize: 18,
    fontWeight: 700,
    cursor: disabled ? 'default' : 'pointer',
    boxShadow: disabled ? 'none' : '0 6px 16px rgba(47,82,51,0.30)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.2s',
    zIndex: 5,
  };
}

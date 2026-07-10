'use client';

/**
 * MobileConciergeCondoPopup
 *
 * Mobile-only bottom-sheet teaser for the Mathis condo concierge case study.
 * Same visual language as the desktop ConciergeCondoPopup, fitted for a
 * narrow viewport and a single-tap CTA into the gated funnel at
 * /condo-concierge.
 *
 * Behaviour:
 *   - Mobile-only (≤768px viewport at mount time)
 *   - Auto-shows after 5 seconds on first visit
 *   - Dismissal persisted in localStorage for 7 days
 *   - Backdrop tap dismisses, plus an explicit close button
 *   - Hidden on every funnel route via isFunnelRoute()
 */

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { isFunnelRoute } from '@/lib/funnel-routes';

const STORAGE_KEY = 'pelham_concierge_condo_mobile_popup_dismissed_v1';
const DISMISS_DAYS = 7;
const SHOW_AFTER_MS = 5000;

export default function MobileConciergeCondoPopup() {
  const pathname = usePathname();
  const onFunnel = isFunnelRoute(pathname);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (onFunnel) return;
    if (window.innerWidth > 768) return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const ts = parseInt(dismissed, 10);
      if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    const t = setTimeout(() => setShow(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, [onFunnel]);

  const dismiss = () => {
    setShow(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }
  };

  if (onFunnel) return null;
  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 9998,
          animation: 'pelhamCondoMobileFadeIn 0.3s ease-out',
        }}
      />

      {/* Bottom sheet */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Concierge condo case study"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#F8F5F0',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          boxShadow: '0 -8px 32px rgba(0,0,0,0.28)',
          paddingBottom: 'calc(20px + env(safe-area-inset-bottom))',
          zIndex: 9999,
          maxHeight: 'calc(100dvh - 40px)',
          overflowY: 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          animation: 'pelhamCondoMobileSlideUp 0.36s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Top forest -> clay gradient bar */}
        <div
          style={{
            height: 4,
            background: 'linear-gradient(90deg, #2F5233 0%, #B8845C 100%)',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />

        {/* Drag-handle indicator */}
        <div
          aria-hidden="true"
          style={{
            width: 44,
            height: 4,
            background: '#E8E3DA',
            borderRadius: 2,
            margin: '12px auto 14px',
          }}
        />

        {/* Close */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            background: 'rgba(255,255,255,0.85)',
            border: 'none',
            cursor: 'pointer',
            color: '#555',
            fontSize: '0.95rem',
            lineHeight: 1,
            padding: 0,
            width: 30,
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            zIndex: 2,
          }}
        >
          ✕
        </button>

        {/* Hero image */}
        <div
          style={{
            position: 'relative',
            width: 'calc(100% - 32px)',
            margin: '0 16px 18px',
            aspectRatio: '4 / 3',
            borderRadius: 8,
            overflow: 'hidden',
            background: '#1f3522',
          }}
        >
          <Image
            src="/case-studies/mathis-condo/after/19.jpg"
            alt="Staged living room with sage accent wall and marble herringbone fireplace surround."
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          {/* Currently Listed pill */}
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              background: 'rgba(47,82,51,0.94)',
              color: '#F8F5F0',
              padding: '5px 9px',
              borderRadius: 999,
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#E5C29A',
                boxShadow: '0 0 0 2px rgba(229,194,154,0.25)',
              }}
            />
            Under Contract
          </div>
          {/* 64 photos badge */}
          <div
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              background: 'rgba(0,0,0,0.55)',
              color: '#F8F5F0',
              padding: '4px 8px',
              borderRadius: 3,
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            64 photos
          </div>
        </div>

        <div style={{ padding: '0 22px' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.1rem',
              color: '#B8845C',
              margin: '0 0 4px 0',
            }}
          >
            a real concierge case study,
          </p>

          {/* Headline */}
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 5vw, 1.45rem)',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 10px 0',
              lineHeight: 1.25,
            }}
          >
            How we got a Snohomish condo{' '}
            <span style={{ color: '#2F5233' }}>listing-ready</span> from out of state.
          </h3>

          {/* Body */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: '#555',
              lineHeight: 1.6,
              margin: '0 0 16px 0',
            }}
          >
            Paint, flooring, hardware, refinishing, staging, listing photos. The full story plus the 9-step playbook, inside.
          </p>

          {/* Primary CTA */}
          <Link
            href="/condo-concierge"
            onClick={dismiss}
            style={{
              display: 'block',
              textAlign: 'center',
              width: '100%',
              padding: '14px 18px',
              background: '#2F5233',
              color: '#F8F5F0',
              textDecoration: 'none',
              borderRadius: 4,
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.2rem',
              letterSpacing: '0.01em',
              boxSizing: 'border-box',
              marginBottom: 10,
            }}
          >
            See how she did it →
          </Link>

          {/* Secondary link */}
          <Link
            href="/case-study/concierge-condo"
            onClick={dismiss}
            style={{
              display: 'block',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: '#2F5233',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              padding: '8px 0',
            }}
          >
            Or browse the full 64-photo case study
          </Link>

          {/* Sign-off + dismiss */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: '#aaa',
              textAlign: 'center',
              margin: '8px 0 0 0',
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: 16, color: '#B8845C' }}>
              Always, Kim
            </span>
            {'  ·  '}
            <button
              onClick={dismiss}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#aaa',
                textDecoration: 'underline',
                font: 'inherit',
                padding: 0,
              }}
            >
              Not right now
            </button>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pelhamCondoMobileFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pelhamCondoMobileSlideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

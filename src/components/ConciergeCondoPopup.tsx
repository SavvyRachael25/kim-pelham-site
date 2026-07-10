'use client';

/**
 * ConciergeCondoPopup
 *
 * Site-wide desktop modal that teases the Mathis condo concierge case study
 * and routes the visitor to the gated funnel at /condo-concierge.
 *
 * No form here on purpose: the popup is a visual hook. The visitor lands
 * on /condo-concierge where the actual lead-capture form lives (with the
 * magnet picker, A2P consent, optional address field for the equity report).
 *
 * Triggers (whichever fires first):
 *   - 9-second time delay after page load
 *   - Scroll past 45% of page height
 *
 * Hidden on every funnel route (case study + condo-concierge + listwithkim)
 * via the shared isFunnelRoute() helper, so the popup never competes with
 * the funnel's own lead-capture form.
 */

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { isFunnelRoute } from '@/lib/funnel-routes';

const STORAGE_KEY = 'pelham_concierge_condo_popup_dismissed_v1';
const DISMISS_DAYS = 7;
const SHOW_AFTER_MS = 9000;
const SCROLL_TRIGGER = 0.45;

export default function ConciergeCondoPopup() {
  const pathname = usePathname();
  const onFunnel = isFunnelRoute(pathname);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (onFunnel) return;
    if (window.innerWidth <= 768) return;

    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const ts = parseInt(dismissed, 10);
      if (Date.now() - ts < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
    };

    const timer = setTimeout(show, SHOW_AFTER_MS);
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const ratio = window.scrollY / max;
      if (ratio > SCROLL_TRIGGER) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [onFunnel]);

  if (onFunnel) return null;

  const dismiss = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }
    setVisible(false);
  };

  if (!visible) return null;

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
          animation: 'pelhamCondoPopupFadeIn 0.3s ease-out',
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="condo-popup-heading"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          width: '92%',
          maxWidth: 560,
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#F8F5F0',
          borderRadius: 4,
          boxShadow: '0 24px 72px rgba(0,0,0,0.32)',
          animation: 'pelhamCondoPopupSlide 0.42s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden',
        }}
      >
        {/* Top forest -> clay gradient bar */}
        <div
          style={{
            height: 5,
            background: 'linear-gradient(90deg, #2F5233 0%, #B8845C 100%)',
          }}
        />

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close popup"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            background: 'rgba(255,255,255,0.85)',
            border: 'none',
            cursor: 'pointer',
            color: '#555',
            fontSize: '1rem',
            lineHeight: 1,
            padding: 0,
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'color 0.2s, background 0.2s',
            zIndex: 2,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#2F5233';
            e.currentTarget.style.background = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#555';
            e.currentTarget.style.background = 'rgba(255,255,255,0.85)';
          }}
        >
          ✕
        </button>

        {/* Hero image — staged living room from the after set */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#1f3522' }}>
          <Image
            src="/case-studies/mathis-condo/after/19.jpg"
            alt="Staged living room with sage accent wall, marble herringbone fireplace surround, and large peony art."
            fill
            sizes="(max-width: 768px) 92vw, 560px"
            style={{ objectFit: 'cover' }}
            priority={false}
          />
          {/* Currently Listed pill */}
          <div
            style={{
              position: 'absolute',
              top: 14,
              left: 14,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(47,82,51,0.94)',
              color: '#F8F5F0',
              padding: '6px 11px',
              borderRadius: 999,
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#E5C29A',
                boxShadow: '0 0 0 3px rgba(229,194,154,0.25)',
              }}
            />
            Under Contract
          </div>
          {/* 64 photos badge */}
          <div
            style={{
              position: 'absolute',
              bottom: 14,
              right: 14,
              background: 'rgba(0,0,0,0.55)',
              color: '#F8F5F0',
              padding: '5px 10px',
              borderRadius: 3,
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.05em',
            }}
          >
            64 photos · before + after
          </div>
        </div>

        <div style={{ padding: '26px 32px 28px' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.15rem',
              color: '#B8845C',
              margin: '0 0 6px 0',
            }}
          >
            a real concierge case study,
          </p>

          {/* Headline */}
          <h2
            id="condo-popup-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.65rem',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 12px 0',
              lineHeight: 1.22,
            }}
          >
            How we got a Snohomish condo{' '}
            <span style={{ color: '#2F5233' }}>listing-ready</span> while the
            owners were across the country.
          </h2>

          {/* Body */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: '#555',
              lineHeight: 1.7,
              margin: '0 0 20px 0',
            }}
          >
            Two homeowners moved out of state mid-prep. Kim and her crew
            handled paint, flooring, hardware, refinishing, staging, and
            listing photography. The full story plus the 9-step concierge
            playbook, inside.
          </p>

          {/* Primary CTA */}
          <Link
            href="/condo-concierge"
            onClick={dismiss}
            style={{
              display: 'block',
              textAlign: 'center',
              width: '100%',
              padding: '14px 24px',
              background: '#2F5233',
              color: '#F8F5F0',
              textDecoration: 'none',
              border: 'none',
              borderRadius: 3,
              fontFamily: 'var(--font-handwritten)',
              fontSize: '1.22rem',
              transition: 'background 0.2s',
              letterSpacing: '0.01em',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3d6b42';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2F5233';
            }}
          >
            See how she did it →
          </Link>

          {/* Secondary link */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: '#777',
              textAlign: 'center',
              margin: '14px 0 0 0',
              lineHeight: 1.5,
            }}
          >
            Or{' '}
            <Link
              href="/case-study/concierge-condo"
              onClick={dismiss}
              style={{ color: '#2F5233', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              browse the full 64-photo case study
            </Link>
            .
          </p>

          {/* Sign-off + dismiss */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.74rem',
              color: '#aaa',
              textAlign: 'center',
              margin: '16px 0 0 0',
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.05rem', color: '#B8845C' }}>
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
        @keyframes pelhamCondoPopupFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes pelhamCondoPopupSlide {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 24px)); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
      `}</style>
    </>
  );
}

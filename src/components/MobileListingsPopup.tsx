'use client';

/**
 * MobileListingsPopup
 *
 * A small bottom-sheet popup that shows on MOBILE only, after a brief delay,
 * advertising current active listings. Tapping the CTA navigates to /properties.
 *
 * Behavior:
 * - Mobile-only (≤768px viewport at mount time)
 * - Auto-shows after 4 seconds on first visit
 * - Dismissal persisted in localStorage so it doesn't keep nagging
 * - Backdrop tap dismisses, plus an explicit close button
 * - Tapping the CTA dismisses + navigates
 *
 * NOT a lead-capture form — no inputs, no email, no phone fields. This is
 * navigational/promotional only. Per Abdullah's A2P guidance, the chat
 * widget is the sole inbound channel; this popup just routes to listings.
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const STORAGE_KEY = 'pelham_listings_popup_dismissed_v1';
const SHOW_AFTER_MS = 4000;

export default function MobileListingsPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth > 768) return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    const t = setTimeout(() => setShow(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setShow(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, '1');
    }
  };

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
          background: 'rgba(0,0,0,0.5)',
          zIndex: 9998,
          animation: 'pelhamPopupFadeIn 0.3s ease-out',
        }}
      />

      {/* Bottom sheet */}
      <div
        role="dialog"
        aria-label="Current listings"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          boxShadow: '0 -8px 32px rgba(0,0,0,0.25)',
          padding: '24px 20px 28px',
          paddingBottom: 'calc(28px + env(safe-area-inset-bottom))',
          zIndex: 9999,
          animation: 'pelhamPopupSlideUp 0.32s cubic-bezier(0.32, 0.72, 0, 1)',
        }}
      >
        {/* Drag-handle indicator */}
        <div
          aria-hidden="true"
          style={{
            width: 48,
            height: 4,
            background: '#E8E3DA',
            borderRadius: 2,
            margin: '0 auto 16px',
          }}
        />

        {/* Close button */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: 12,
            right: 14,
            background: 'transparent',
            border: 'none',
            fontSize: 28,
            lineHeight: 1,
            color: '#888',
            cursor: 'pointer',
            padding: '6px 10px',
            borderRadius: 6,
          }}
        >
          ×
        </button>

        {/* Heading */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: 20,
            color: '#B8845C',
            margin: '0 0 6px 0',
          }}
        >
          two new listings
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#2C2C2C',
            margin: '0 0 14px 0',
            lineHeight: 1.2,
          }}
        >
          Both under $1M in Snohomish County
        </h3>

        {/* Two-up image preview */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
            marginBottom: 18,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 6,
              overflow: 'hidden',
              background: '#F0EDE7',
            }}
          >
            <Image
              src="/images/potlatch-gallery-04-dramatic-mountains.jpg"
              alt="Marysville waterfront — 1406 Potlatch Beach Road"
              fill
              sizes="50vw"
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                left: 6,
                bottom: 6,
                background: 'rgba(47,82,51,0.92)',
                color: '#F8F5F0',
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: 'uppercase',
                padding: '4px 8px',
                borderRadius: 3,
              }}
            >
              Marysville · $899,900
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 6,
              overflow: 'hidden',
              background: '#F0EDE7',
            }}
          >
            <Image
              src="/images/mukilteo-01-front-exterior.jpg"
              alt="Mukilteo view-first remodel — 4611 76th Street SW"
              fill
              sizes="50vw"
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                left: 6,
                bottom: 6,
                background: 'rgba(47,82,51,0.92)',
                color: '#F8F5F0',
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1,
                textTransform: 'uppercase',
                padding: '4px 8px',
                borderRadius: 3,
              }}
            >
              Mukilteo · $975,000
            </div>
          </div>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: '#555',
            lineHeight: 1.55,
            margin: '0 0 18px 0',
          }}
        >
          Marysville waterfront on Puget Sound &middot; Mukilteo home remodeled around the Olympic Mountain view. Both showing by appointment.
        </p>

        {/* Primary CTA */}
        <Link
          href="/properties"
          onClick={dismiss}
          style={{
            display: 'block',
            textAlign: 'center',
            background: '#2F5233',
            color: '#F8F5F0',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            fontWeight: 600,
            padding: '14px 20px',
            borderRadius: 6,
            textDecoration: 'none',
            marginBottom: 10,
          }}
        >
          See both listings →
        </Link>

        {/* Secondary dismiss */}
        <button
          type="button"
          onClick={dismiss}
          style={{
            display: 'block',
            width: '100%',
            background: 'transparent',
            border: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: '#888',
            padding: '8px 0',
            cursor: 'pointer',
          }}
        >
          Maybe later
        </button>
      </div>

      <style>{`
        @keyframes pelhamPopupFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pelhamPopupSlideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

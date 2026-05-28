'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/*
  OpenHouseBanner — sitewide top strip pointing to the active listing's open house.
  Dismissable per-session via sessionStorage. Hidden on /properties/<slug> itself
  (the page already has its own open-house section, so the banner would be noise).
*/

const LISTING_SLUG = '11706-admiralty-way-unit-b-everett';
const STORAGE_KEY = 'oh-banner-dismissed-2528831';

// Date in PT — banner auto-hides after the open house ends
const OPEN_HOUSE_ENDS = new Date('2026-05-30T15:00:00-07:00');

export default function OpenHouseBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Auto-hide after the open house ends
    if (Date.now() > OPEN_HOUSE_ENDS.getTime()) {
      return;
    }
    // Dismissed this session?
    if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }
    // Hide on the property page itself
    if (typeof window !== 'undefined' && window.location.pathname.includes(LISTING_SLUG)) {
      return;
    }
    setVisible(true);
  }, []);

  const handleDismiss = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Open house this Saturday in Everett"
      style={{
        background: '#2F5233',
        color: '#F8F5F0',
        borderBottom: '3px solid #B8845C',
        position: 'relative',
        zIndex: 50,
      }}
    >
      <Link
        href={`/properties/${LISTING_SLUG}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          padding: '10px 48px 10px 20px',
          textDecoration: 'none',
          color: '#F8F5F0',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          lineHeight: 1.4,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            background: '#B8845C',
            color: '#FFFFFF',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            padding: '3px 9px',
            borderRadius: '2px',
            whiteSpace: 'nowrap',
          }}
        >
          Open House
        </span>
        <span style={{ fontWeight: 600 }}>
          Saturday, May 30 · 1 to 3 PM
        </span>
        <span style={{ opacity: 0.85 }}>
          11706 Admiralty Way Unit B, Everett &middot; $375,000 &middot; 2 BR / 1.75 BA
        </span>
        <span
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '1.1rem',
            color: '#B8845C',
            whiteSpace: 'nowrap',
          }}
        >
          See the listing &rarr;
        </span>
      </Link>
      <button
        onClick={handleDismiss}
        aria-label="Dismiss open house banner"
        style={{
          position: 'absolute',
          top: '50%',
          right: '12px',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          color: 'rgba(248,245,240,0.6)',
          fontSize: '1.3rem',
          cursor: 'pointer',
          padding: '4px 10px',
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}

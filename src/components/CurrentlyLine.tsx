'use client';

// Site-wide live banner.

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CurrentlyLine() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      style={{
        backgroundColor: '#EBF3EC',
        padding: '24px 16px',
        textAlign: 'center',
        borderBottom: '1px solid #E8E3DA',
      }}
    >
      <Link
        href="/properties/3520-192nd-pl-se-bothell"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
          textDecoration: 'none',
        }}
      >
        {/* Pulse dot */}
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#B8845C',
            animation: mounted ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
            flexShrink: 0,
          }}
        />

        {/* Status text — wrapped in a div so the pill stacks under on mobile */}
        <div className="currently-line-text">
          <p
            className="currently-line-headline"
            style={{
              fontFamily: 'var(--font-handwritten)',
              fontSize: '22px',
              color: '#2C2C2C',
              margin: 0,
            }}
          >
            3520 192nd Pl SE, Bothell &middot; Just Listed
          </p>
          <span
            className="currently-line-pill"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: '#2F5233',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginLeft: '12px',
              borderBottom: '1.5px solid #2F5233',
              paddingBottom: '1px',
            }}
          >
            $1,095,000 &middot; See the listing &rarr;
          </span>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
          .currently-line-text {
            display: inline-flex;
            align-items: baseline;
            gap: 0;
          }
          @media (max-width: 600px) {
            .currently-line-headline {
              font-size: 18px !important;
            }
            .currently-line-text {
              flex-direction: column;
              align-items: center;
              gap: 6px;
            }
            .currently-line-pill {
              margin-left: 0 !important;
              font-size: 0.7rem !important;
            }
          }
        `}</style>
      </Link>
    </section>
  );
}

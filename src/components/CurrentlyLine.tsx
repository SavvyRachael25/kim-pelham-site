'use client';

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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Pulse dot */}
        <div
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#2F5233',
            animation: mounted ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
          }}
        />

        {/* Status text */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '18px',
            color: '#2C2C2C',
            margin: 0,
          }}
        >
          Currently:{' '}
          <strong style={{ color: '#2F5233', fontWeight: 600 }}>
            Prepping a Lake Stevens listing
          </strong>{' '}
          for weekend open house
        </p>

        <style>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

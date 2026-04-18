import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kim Pelham | Snohomish County Real Estate Broker';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#2F5233',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 100px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Subtle texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Clay accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '8px',
            backgroundColor: '#B8845C',
          }}
        />

        {/* Handwritten-style label */}
        <div
          style={{
            fontSize: '26px',
            color: '#B8845C',
            marginBottom: '16px',
            letterSpacing: '0.5px',
            display: 'flex',
          }}
        >
          your neighbor in real estate
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '88px',
            fontWeight: 700,
            color: '#F8F5F0',
            lineHeight: 1.05,
            marginBottom: '16px',
            display: 'flex',
          }}
        >
          Kim Pelham
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '28px',
            color: '#B8845C',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '48px',
            display: 'flex',
          }}
        >
          Snohomish County Real Estate Broker
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
          {[
            { number: '17+', label: 'Years Experience' },
            { number: '102%', label: 'Sale-to-List Ratio' },
            { number: '40', label: 'Google Reviews ★★★★★' },
          ].map((stat) => (
            <div key={stat.number} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: 700, color: '#B8845C', display: 'flex' }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '16px', color: 'rgba(248,245,240,0.7)', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: brokerage */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '100px',
            fontSize: '18px',
            color: 'rgba(248,245,240,0.5)',
            display: 'flex',
          }}
        >
          The Pelham Group NW · Everett, WA
        </div>
      </div>
    ),
    { ...size }
  );
}

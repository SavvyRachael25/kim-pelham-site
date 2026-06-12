import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt =
  'Concierge condo case study by Kim Pelham, The Pelham Group NW. Currently listed in Snohomish County.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const HERO_URL = 'https://thepelhamgroupnw.com/case-studies/mathis-condo/after/19.jpg';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          backgroundColor: '#2F5233',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* LEFT 60%: forest panel with headline */}
        <div
          style={{
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 56px',
            backgroundColor: '#2F5233',
            position: 'relative',
          }}
        >
          {/* Clay accent bar on the left edge */}
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

          {/* Top: currently listed pill + handwritten eyebrow */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'flex-start',
                background: 'rgba(248,245,240,0.12)',
                border: '1px solid rgba(248,245,240,0.35)',
                color: '#F8F5F0',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                padding: '8px 16px',
                borderRadius: '999px',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#D4A07A',
                  display: 'flex',
                }}
              />
              Currently listed
            </div>
            <div
              style={{
                fontSize: '24px',
                color: '#B8845C',
                fontStyle: 'italic',
                display: 'flex',
                marginTop: '8px',
              }}
            >
              a real concierge case study,
            </div>
          </div>

          {/* Center: headline */}
          <div
            style={{
              fontSize: '54px',
              lineHeight: 1.08,
              color: '#F8F5F0',
              fontWeight: 500,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <span style={{ display: 'flex' }}>How we got a Snohomish</span>
            <span style={{ display: 'flex' }}>condo listing-ready</span>
            <span style={{ display: 'flex', color: '#D4A07A' }}>after the owners</span>
            <span style={{ display: 'flex', color: '#D4A07A' }}>moved out of state.</span>
          </div>

          {/* Bottom: byline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div
              style={{
                fontSize: '20px',
                color: '#F8F5F0',
                fontWeight: 600,
                display: 'flex',
              }}
            >
              Kim Pelham
            </div>
            <div
              style={{
                fontSize: '14px',
                color: 'rgba(248,245,240,0.7)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              The Pelham Group NW · Snohomish County
            </div>
          </div>
        </div>

        {/* RIGHT 40%: hero photo */}
        <div
          style={{
            width: '40%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            backgroundColor: '#1c1c1c',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_URL}
            alt=""
            width={480}
            height={630}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Bottom-right info badge over the photo */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(26,26,26,0.7)',
              color: '#F8F5F0',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              padding: '6px 12px',
              borderRadius: '4px',
            }}
          >
            64 photos · case study
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

import Image from 'next/image';

export default function LifestyleBand() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '450px',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Image
        src="/images/lifestyle-01-farmers-market.jpg"
        alt="Kim at the Snohomish County Farmers Market"
        fill
        quality={85}
        sizes="100vw"
        priority={false}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark overlay with parallax effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 100%)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        {/* Heading with underline */}
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 6vw, 56px)',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 24px 0',
            maxWidth: '800px',
            lineHeight: 1.2,
            position: 'relative',
            display: 'inline-block',
          }}
        >
          I Live Here{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            Too
            <svg
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '100%',
                height: '12px',
              }}
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 10 Q 50 2 100 10 T 200 10"
                stroke="#B8845C"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Paragraph */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            color: '#FFFFFF',
            maxWidth: '700px',
            margin: '32px 0 0 0',
            lineHeight: 1.6,
          }}
        >
          I know which streets flood in November, which coffee shops are worth the wait, and
          which neighborhoods still have that small-town feel. This isn't just my job—it's my
          home.
        </p>

        {/* Annotation */}
        <p
          style={{
            fontFamily: 'var(--font-handwritten)',
            fontSize: '16px',
            color: '#FFFFFF',
            opacity: 0.7,
            margin: '32px 0 0 0',
          }}
        >
          — yes, I actually walk these streets
        </p>
      </div>
    </section>
  );
}

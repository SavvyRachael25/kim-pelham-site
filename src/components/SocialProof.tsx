import Image from 'next/image';

export default function SocialProof() {
  return (
    <section
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '40px 24px',
        borderTop: '1px solid #E8E3DA',
        borderBottom: '1px solid #E8E3DA',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
        }}
      >
        {/* Zillow Rating */}
        <a
          href="https://www.zillow.com/profile/kimpelham"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', textAlign: 'center' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4px',
              marginBottom: '8px',
            }}
          >
            <span className="sr-only">5 stars</span>
            {[...Array(5)].map((_, i) => (
              <span key={i} aria-hidden="true" style={{ fontSize: '20px', color: '#FFD700' }}>&#9733;</span>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 4px 0',
            }}
          >
            5.0
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: '#767676',
              margin: 0,
            }}
          >
            Zillow
          </p>
        </a>

        {/* Google Rating */}
        <a
          href="https://www.google.com/search?q=pelham+group+nw"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', textAlign: 'center' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4px',
              marginBottom: '8px',
            }}
          >
            <span className="sr-only">5 stars</span>
            {[...Array(5)].map((_, i) => (
              <span key={i} aria-hidden="true" style={{ fontSize: '20px', color: '#FFD700' }}>&#9733;</span>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              fontWeight: 600,
              color: '#2C2C2C',
              margin: '0 0 4px 0',
            }}
          >
            5.0
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: '#767676',
              margin: 0,
            }}
          >
            Google
          </p>
        </a>

        {/* Best of SnoCo Badge */}
        <div style={{ textAlign: 'center' }}>
          <Image
            src="/images/best-of-snoco-2024-no-background.png"
            alt="Best of Snohomish County 2024"
            width={100}
            height={100}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Best of Zillow Badge */}
        <div style={{ textAlign: 'center' }}>
          <Image
            src="/images/best-of-zillow-portrait.jpg"
            alt="Best of Zillow"
            width={100}
            height={100}
            style={{ objectFit: 'contain', borderRadius: '4px' }}
          />
        </div>
      </div>
    </section>
  );
}

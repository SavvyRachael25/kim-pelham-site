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
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ fontSize: '20px', color: '#FFD700' }}>
                ★
              </span>
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
              color: '#9B9B9B',
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
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ fontSize: '20px', color: '#FFD700' }}>
                ★
              </span>
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
              color: '#9B9B9B',
              margin: 0,
            }}
          >
            Google
          </p>
        </a>

        {/* Top Producer Badge */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              backgroundColor: '#2F5233',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '4px',
              marginBottom: '8px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 700,
                margin: 0,
              }}
            >
              Top Producer
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: '#9B9B9B',
              margin: 0,
            }}
          >
            2024
          </p>
        </div>

        {/* Specialist Badge */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              backgroundColor: '#B8845C',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '4px',
              marginBottom: '8px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 700,
                margin: 0,
              }}
            >
              Specialist
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: '#9B9B9B',
              margin: 0,
            }}
          >
            Snohomish County
          </p>
        </div>
      </div>
    </section>
  );
}

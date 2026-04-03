'use client';

import Link from 'next/link';

export default function Footer() {
  const footerStyle: React.CSSProperties = {
    background: '#1a1a1a',
    color: '#fff',
    padding: '4rem 2rem 2rem',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1100px',
    margin: '0 auto',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '4rem',
    marginBottom: '3rem',
  };

  const leftColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const brandNameStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '2rem',
    color: '#B8845C',
    margin: 0,
    lineHeight: 1,
  };

  const taglineStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '1rem',
    color: '#666',
    margin: 0,
  };

  const centerColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const linkListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const footerLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#999',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const footerLinkHoverStyle: React.CSSProperties = {
    color: '#B8845C',
  };

  const rightColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const contactInfoStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#999',
    lineHeight: 1.6,
  };

  const contactLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    color: '#B8845C',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const companyNameStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '0.9rem',
    color: '#999',
    marginTop: '0.5rem',
  };

  const bottomBarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #333',
    paddingTop: '2rem',
    gap: '1rem',
  };

  const bottomBarResponsiveStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #333',
    paddingTop: '2rem',
    gap: '1rem',
  };

  const copyrightStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.85rem',
    color: '#666',
    margin: 0,
  };

  const builtWithStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '0.9rem',
    color: '#666',
  };

  const brokerageStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.8rem',
    color: '#555',
    textAlign: 'center',
    paddingTop: '1rem',
    marginTop: '1rem',
    borderTop: '1px solid #333',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Main grid */}
        <div style={gridStyle} data-footer-grid>
          {/* Left column */}
          <div style={leftColumnStyle}>
            <h3 style={brandNameStyle}>Kim Pelham</h3>
            <p style={taglineStyle}>your neighbor in real estate</p>
          </div>

          {/* Center column - Links */}
          <nav
            style={centerColumnStyle}
            role="navigation"
            aria-label="Footer navigation"
          >
            <ul style={linkListStyle}>
              <li>
                <Link
                  href="/buyers"
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    Object.assign(
                      e.currentTarget.style,
                      footerLinkHoverStyle
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  Buy a Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sellers"
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    Object.assign(
                      e.currentTarget.style,
                      footerLinkHoverStyle
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link
                  href="/neighborhoods"
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    Object.assign(
                      e.currentTarget.style,
                      footerLinkHoverStyle
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link
                  href="/staging"
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    Object.assign(
                      e.currentTarget.style,
                      footerLinkHoverStyle
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  Staging Services
                </Link>
              </li>
              <li>
                <Link
                  href="/senior-services"
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    Object.assign(
                      e.currentTarget.style,
                      footerLinkHoverStyle
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  Senior Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={footerLinkStyle}
                  onMouseEnter={(e) => {
                    Object.assign(
                      e.currentTarget.style,
                      footerLinkHoverStyle
                    );
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                  }}
                >
                  About Kim
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right column - Contact */}
          <div style={rightColumnStyle}>
            <div style={contactInfoStyle}>
              <div>
                <a
                  href="tel:+14253439926"
                  style={contactLinkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#d4a574';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8845C';
                  }}
                >
                  (425) 343-9926
                </a>
              </div>
              <div>
                <a
                  href="mailto:hello@thepelhamgroupnw.com"
                  style={contactLinkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#d4a574';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#B8845C';
                  }}
                >
                  hello@thepelhamgroupnw.com
                </a>
              </div>
              <div style={companyNameStyle}>The Pelham Group NW</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={bottomBarResponsiveStyle} data-footer-bar>
          <p style={copyrightStyle}>
            © 2026 Kim Pelham — The Pelham Group NW. All rights reserved.
          </p>
          <p style={builtWithStyle}>Built with love in Snohomish County</p>
        </div>

        {/* Brokerage attribution */}
        <div style={brokerageStyle}>
          Brokered by Katrina Eileen Real Estate · Everett, WA
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [data-footer-grid] {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          [data-footer-bar] {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
}

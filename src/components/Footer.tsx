'use client';

import Link from 'next/link';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pelhamgroupnw/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/PelhamGroupNW/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kimpelham/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Zillow',
    href: 'https://www.zillow.com/profile/kimpelham',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2L2 9.5l1.5 1.5L12 5l8.5 6 1.5-1.5L12 2z"/>
        <path d="M12 7L5 12v9h5v-6h4v6h5v-9L12 7z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: '#fff', padding: '4rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Main grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', marginBottom: '3rem' }}
          data-footer-grid
        >
          {/* Left — Brand + socials + call/text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-handwritten)', fontSize: '2rem', color: '#B8845C', margin: '0 0 4px 0', lineHeight: 1 }}>
                Kim Pelham
              </h3>
              <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.25rem', color: '#999', margin: 0 }}>
                your neighbor in real estate
              </p>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kim Pelham on ${s.label}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #444',
                    color: '#999',
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#B8845C';
                    e.currentTarget.style.borderColor = '#B8845C';
                    e.currentTarget.style.background = 'rgba(184,132,92,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#999';
                    e.currentTarget.style.borderColor = '#444';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Call + Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="tel:+14252509422"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#B8845C', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#d4a574'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#B8845C'; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
                </svg>
                Call (425) 250-9422
              </a>
              <a
                href="sms:+14252509422"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#999', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#B8845C'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#999'; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Text me
              </a>
              <a
                href="mailto:hello@thepelhamgroupnw.com"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: '#777', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#B8845C'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#777'; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                hello@thepelhamgroupnw.com
              </a>
            </div>
          </div>

          {/* Center — Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} role="navigation" aria-label="Footer navigation">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { href: '/buyers', label: 'Buy a Home' },
                { href: '/sellers', label: 'Sell Your Home' },
                { href: '/neighborhoods', label: 'Neighborhoods' },
                { href: '/staging', label: 'Staging Services' },
                { href: '/senior-services', label: 'Senior Services' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact Kim' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms & Conditions' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#999', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#B8845C'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#999'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — Trust badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.25rem', color: '#999', margin: 0 }}>
              recognized &amp; trusted
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Best of Snohomish County 2024',
                'Best of Zillow',
                'SRES Certified',
                '17+ Years Experience',
                '102.03% Sale-to-List Ratio',
              ].map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: '#888',
                  }}
                >
                  <span style={{ color: '#B8845C', fontSize: '0.7rem' }}>&#9670;</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #333', paddingTop: '2rem', gap: '1rem' }}
          data-footer-bar
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#aaa', margin: 0 }}>
            &copy; 2026 Kim Pelham &middot; The Pelham Group NW. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link
              href="/privacy"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#777', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#B8845C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#777'; }}
            >
              Privacy Policy
            </Link>
            <span style={{ color: '#555', fontSize: '0.7rem' }}>|</span>
            <Link
              href="/terms"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#777', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#B8845C'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#777'; }}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Brokerage attribution */}
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#aaa', textAlign: 'center', paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #333' }}>
          Brokered by Katrina Eileen Real Estate &middot; Everett, WA
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          [data-footer-grid] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          [data-footer-grid] > div:first-child > div:nth-child(2) {
            justify-content: center;
          }
          [data-footer-grid] > div:first-child > div:nth-child(3) {
            align-items: center;
          }
          [data-footer-bar] {
            flex-direction: column !important;
            text-align: center;
            gap: 1rem !important;
          }
        }
      `}</style>
    </footer>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

const navSocials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pelhamgroupnw/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/PelhamGroupNW/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kimpelham/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function NavSocialIcons({ inMobileMenu = false }: { inMobileMenu?: boolean }) {
  return (
    <div
      className={inMobileMenu ? 'mobile-nav-socials' : 'desktop-nav-socials'}
      style={{
        display: 'flex',
        gap: inMobileMenu ? '20px' : '10px',
        alignItems: 'center',
      }}
    >
      {navSocials.map((s) => (
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
            width: inMobileMenu ? '44px' : '32px',
            height: inMobileMenu ? '44px' : '32px',
            borderRadius: '50%',
            color: inMobileMenu ? '#2F5233' : '#555',
            border: inMobileMenu ? '1px solid #E8E3DA' : 'none',
            transition: 'color 0.2s, background 0.2s, border-color 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#B8845C';
            if (inMobileMenu) e.currentTarget.style.borderColor = '#B8845C';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = inMobileMenu ? '#2F5233' : '#555';
            if (inMobileMenu) e.currentTarget.style.borderColor = '#E8E3DA';
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

function NavLinkItem({ href, label }: { href: string; label: string }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <Link
        href={href}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: '#555',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.06em',
          textDecoration: 'none',
          position: 'relative',
          transition: 'color 0.3s ease',
          paddingBottom: '4px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {label}
        <span
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            background: '#B8845C',
            width: isHovered ? '100%' : '0%',
            transition: 'width 0.3s ease',
          }}
        />
      </Link>
    </div>
  );
}

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: { label: string; href: string }[] };

export default function Nav() {
  const [hasScroll, setHasScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  // Mount flag — needed so createPortal only runs client-side (document.body doesn't exist on server)
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setHasScroll(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (openDropdown) { setOpenDropdown(null); return; }
        if (mobileMenuOpen) { setMobileMenuOpen(false); triggerRef.current?.focus(); }
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen, openDropdown]);

  useEffect(() => {
    if (!mobileMenuOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) { if (document.activeElement === first) { last.focus(); e.preventDefault(); } }
      else { if (document.activeElement === last) { first.focus(); e.preventDefault(); } }
    };
    menuRef.current.addEventListener('keydown', handleKeyDown);
    first?.focus();
    return () => menuRef.current?.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks: NavItem[] = [
    { label: 'Buy', href: '/buyers' },
    { label: 'Sell', href: '/sellers' },
    { label: 'Properties', href: '/properties' },
    { label: 'Neighborhoods', href: '/neighborhoods' },
    {
      label: 'Services',
      children: [
        { label: 'Staging', href: '/staging' },
        { label: 'Home Repair', href: '/home-repair' },
        { label: 'Senior Services', href: '/senior-services' },
        { label: 'Community', href: '/community' },
      ],
    },
    {
      label: 'About',
      children: [
        { label: 'About Kim', href: '/about' },
        { label: 'Media & Press', href: '/media' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ];

  const navStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 90,
    background: 'rgba(248, 245, 240, 0.92)',
    backdropFilter: 'blur(12px)',
    boxShadow: hasScroll ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
    transition: 'box-shadow 0.3s ease',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    height: '80px',
  };

  const leftSideStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.25rem',
  };

  const brandStyle: React.CSSProperties = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.4rem',
    fontWeight: 600,
    color: '#2F5233',
    margin: 0,
    lineHeight: 1,
  };

  const desktopNavStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  };

  const navLinkStyle = (isHovered: boolean): React.CSSProperties => ({
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s ease',
    paddingBottom: '4px',
  });

  const navLinkUnderlineStyle = (isHovered: boolean): React.CSSProperties => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '2px',
    background: '#B8845C',
    width: isHovered ? '100%' : '0%',
    transition: 'width 0.3s ease',
  });

  const buttonStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    background: '#2F5233',
    color: '#F8F5F0',
    border: 'none',
    borderRadius: '2px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle: React.CSSProperties = {
    background: '#3d6b42',
    transform: 'translateY(-1px)',
  };

  const hamburgerStyle: React.CSSProperties = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
  };

  const hamburgerLineStyle: React.CSSProperties = {
    width: '24px',
    height: '2px',
    background: '#2C2C2C',
    borderRadius: '2px',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: '#2F5233',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'column',
    padding: '6rem 2rem 2rem',
    gap: '2rem',
    overflowY: 'auto',
  };

  const mobileNavLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#F8F5F0',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const mobileButtonStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    background: '#B8845C',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '2px',
    padding: '1rem 1.5rem',
    cursor: 'pointer',
    fontSize: '1.375rem',
    width: '100%',
    transition: 'all 0.3s ease',
  };

  // Responsive layout handled via CSS media queries below (no JS needed)

  return (
    <nav style={navStyle} role="navigation" aria-label="Main navigation">
      <div style={containerStyle}>
        {/* Left side: Brand */}
        <div style={leftSideStyle}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={brandStyle}>Kim Pelham</span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '2px 0 0 0', lineHeight: 1 }}>The Pelham Group NW</p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div id="desktop-nav" style={desktopNavStyle}>
          {navLinks.map((item) => {
            if ('children' in item && item.children) {
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => openMenu(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    style={{
                      ...navLinkStyle(isOpen),
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {item.label}
                    <span style={{ fontSize: '0.6rem', marginTop: '1px' }}>{isOpen ? '▲' : '▼'}</span>
                    <span style={navLinkUnderlineStyle(isOpen)} />
                  </button>
                  {isOpen && (
                    <div
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                      style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '12px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E8E3DA',
                      borderRadius: '6px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                      minWidth: '180px',
                      zIndex: 100,
                      overflow: 'hidden',
                    }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{
                            display: 'block',
                            padding: '0.75rem 1.25rem',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.875rem',
                            color: '#2C2C2C',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            borderBottom: '1px solid #F0EDE7',
                            transition: 'background 0.2s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#F8F5F0')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return <NavLinkItem key={item.href} href={item.href} label={item.label} />;
          })}
        </div>

        {/* Right side: socials + Talk to Kim button — hidden on mobile via CSS */}
        <div id="desktop-nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <NavSocialIcons />
        <button
          id="desktop-cta"
          style={buttonStyle}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            Object.assign(target.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.background = '#2F5233';
            target.style.transform = 'translateY(0)';
          }}
          onClick={() => {
            const phoneNumber = '(425) 250-9422';
            window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
          }}
          aria-label="Call Kim Pelham"
        >
          Talk to Kim
        </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          ref={triggerRef}
          id="mobile-hamburger"
          style={hamburgerStyle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
          aria-controls="mobile-menu"
        >
          <span style={hamburgerLineStyle} />
          <span style={hamburgerLineStyle} />
          <span style={hamburgerLineStyle} />
        </button>
      </div>

      {/* Mobile Menu — portaled to document.body so position:fixed escapes the
          backdrop-filter containing block on <nav>. Without this portal, CSS
          backdrop-filter makes fixed children position relative to the nav (~80px)
          instead of the full viewport, so the menu never covers the screen. */}
      {mounted && mobileMenuOpen && createPortal(
        <div
          ref={menuRef}
          id="mobile-menu"
          style={mobileMenuStyle}
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          {/* Close button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#F8F5F0',
              fontSize: '1.75rem',
              lineHeight: 1,
              padding: '0.25rem',
              minWidth: '44px',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
          {navLinks.map((item) => {
            if ('children' in item && item.children) {
              const isExpanded = mobileExpanded === item.label;
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                    style={{
                      ...mobileNavLinkStyle,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: 0,
                    }}
                  >
                    {item.label} <span style={{ fontSize: '0.7rem' }}>{isExpanded ? '▲' : '▼'}</span>
                  </button>
                  {isExpanded && (
                    <div style={{ paddingLeft: '1rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          style={{ ...mobileNavLinkStyle, fontSize: '0.95rem', color: 'rgba(248,245,240,0.75)' }}
                          onClick={() => { setMobileMenuOpen(false); setMobileExpanded(null); }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                style={mobileNavLinkStyle}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            style={mobileButtonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#A07550';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#B8845C';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => {
              window.location.href = `tel:14252509422`;
              setMobileMenuOpen(false);
            }}
            aria-label="Call Kim Pelham"
          >
            Talk to Kim
          </button>

          {/* Mobile menu socials — visible on dark bg */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(248,245,240,0.15)',
            }}
          >
            {navSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Kim Pelham on ${s.label}`}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid rgba(248,245,240,0.25)',
                  color: 'rgba(248,245,240,0.85)',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#B8845C';
                  e.currentTarget.style.borderColor = '#B8845C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(248,245,240,0.85)';
                  e.currentTarget.style.borderColor = 'rgba(248,245,240,0.25)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>,
        document.body
      )}

      {/* CSS media queries — controls desktop vs mobile element visibility.
          Using !important to override inline styles without JS matchMedia flicker. */}
      <style>{`
        #desktop-nav        { display: flex; }
        #desktop-nav-right  { display: flex; }
        #desktop-cta        { display: inline-block; }
        #mobile-hamburger   { display: none; }

        @media (max-width: 768px) {
          #desktop-nav        { display: none !important; }
          #desktop-nav-right  { display: none !important; }
          #desktop-cta        { display: none !important; }
          #mobile-hamburger   { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

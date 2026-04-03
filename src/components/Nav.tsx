'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [hasScroll, setHasScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScroll(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!mobileMenuOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    menuRef.current.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => menuRef.current?.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Buy', href: '/buyers' },
    { label: 'Sell', href: '/sellers' },
    { label: 'Neighborhoods', href: '/neighborhoods' },
    { label: 'About', href: '/about' },
    { label: 'Staging', href: '/staging' },
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

  const phoneStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    fontSize: '0.9rem',
    color: '#888',
    margin: 0,
  };

  const desktopNavStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center',
  };

  const navLinkStyle = (isHovered: boolean): React.CSSProperties => ({
    fontFamily: 'var(--font-body)',
    fontSize: '0.78rem',
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
    fontSize: '1rem',
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
    background: 'rgba(248, 245, 240, 0.98)',
    zIndex: 80,
    display: 'flex',
    flexDirection: 'column',
    padding: '6rem 2rem 2rem',
    gap: '2rem',
    backdropFilter: 'blur(8px)',
  };

  const mobileNavLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#555',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const mobileButtonStyle: React.CSSProperties = {
    fontFamily: 'var(--font-handwritten)',
    background: '#2F5233',
    color: '#F8F5F0',
    border: 'none',
    borderRadius: '2px',
    padding: '1rem 1.5rem',
    cursor: 'pointer',
    fontSize: '1.1rem',
    width: '100%',
    transition: 'all 0.3s ease',
  };

  // Media query styles for mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const updateStyles = () => {
      const desktopNav = document.getElementById('desktop-nav');
      const mobileHamburger = document.getElementById('mobile-hamburger');
      const phoneDisplay = document.getElementById('phone-display');

      if (mediaQuery.matches) {
        if (desktopNav) desktopNav.style.display = 'none';
        if (mobileHamburger) mobileHamburger.style.display = 'flex';
        if (phoneDisplay) phoneDisplay.style.display = 'none';
      } else {
        if (desktopNav) desktopNav.style.display = 'flex';
        if (mobileHamburger) mobileHamburger.style.display = 'none';
        if (phoneDisplay) phoneDisplay.style.display = 'block';
      }
    };

    updateStyles();
    mediaQuery.addEventListener('change', updateStyles);
    return () => mediaQuery.removeEventListener('change', updateStyles);
  }, []);

  return (
    <nav style={navStyle} role="navigation" aria-label="Main navigation">
      <div style={containerStyle}>
        {/* Left side: Brand + Phone */}
        <div style={leftSideStyle}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1 style={brandStyle}>Kim Pelham</h1>
          </Link>
          <p id="phone-display" style={phoneStyle}>
            (425) 343-9926
          </p>
        </div>

        {/* Desktop Navigation */}
        <div id="desktop-nav" style={desktopNavStyle}>
          {navLinks.map((link) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <div key={link.href} style={{ position: 'relative' }}>
                <Link
                  href={link.href}
                  style={navLinkStyle(isHovered)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {link.label}
                  <span style={navLinkUnderlineStyle(isHovered)} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Right side: Button */}
        <button
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
            const phoneNumber = '(425) 343-9926';
            window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
          }}
          aria-label="Call Kim Pelham"
        >
          Talk to Kim
        </button>

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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          style={mobileMenuStyle}
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={mobileNavLinkStyle}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            style={mobileButtonStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, buttonHoverStyle);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#2F5233';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={() => {
              window.location.href = `tel:4253439926`;
              setMobileMenuOpen(false);
            }}
          >
            Talk to Kim
          </button>
        </div>
      )}
    </nav>
  );
}

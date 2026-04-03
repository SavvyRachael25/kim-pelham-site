"use client";

import { useEffect, useState, ReactNode } from "react";

interface IntroAnimationProps {
  children: ReactNode;
}

export default function IntroAnimation({ children }: IntroAnimationProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) {
      // Skip intro if user prefers reduced motion
      setShowIntro(false);
      return;
    }

    // Timeline: 2.2s slide up, then 3s total before hiding
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(hideTimer);
  }, []);

  if (!showIntro) {
    return <>{children}</>;
  }

  return (
    <>
      <style>{`
        @keyframes introFadeUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes introSlideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        .intro-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #F8F5F0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 150;
          animation: introSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 2.2s forwards;
        }

        .intro-content {
          text-align: center;
        }

        .intro-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 4.5rem;
          font-weight: 600;
          letter-spacing: -2px;
          color: #2F5233;
          margin: 0;
          line-height: 1;
          animation: introFadeUp 0.6s ease-out 0.3s backwards;
        }

        .intro-tagline {
          font-family: 'Caveat', cursive;
          font-size: 2rem;
          font-weight: 400;
          color: #B8845C;
          margin: 12px 0 0 0;
          animation: introFadeUp 0.6s ease-out 0.6s backwards;
        }

        .intro-subtitle {
          font-family: 'Caveat', cursive;
          font-size: 1.1rem;
          color: #888;
          margin: 10px 0 0 0;
          font-weight: 400;
          animation: introFadeUp 0.6s ease-out 0.9s backwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-overlay,
          .intro-name,
          .intro-tagline,
          .intro-subtitle {
            animation: none;
            display: none;
          }
        }
      `}</style>

      <div className="intro-overlay">
        <div className="intro-content">
          <h1 className="intro-name">Kim Pelham</h1>
          <p className="intro-tagline">your neighbor in real estate</p>
          <p className="intro-subtitle">(425) 343-9926 — Snohomish County</p>
        </div>
      </div>

      {children}
    </>
  );
}

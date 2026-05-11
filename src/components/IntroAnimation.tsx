"use client";

import { useEffect, useState, ReactNode } from "react";

interface IntroAnimationProps {
  children: ReactNode;
}

// Session key for "I've already seen the intro this session" so return visits skip it.
const INTRO_SEEN_KEY = "pelham-intro-seen-2026-05";

export default function IntroAnimation({ children }: IntroAnimationProps) {
  // Default to NOT showing. Only flip on after client-side checks pass. This
  // keeps the intro from blocking server-rendered LCP for crawlers and slow
  // connections (Lighthouse was measuring 11s+ LCP with the old overlay).
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Skip the intro for users who prefer reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Skip the intro for return visits in the same session.
    if (typeof window !== "undefined" && sessionStorage.getItem(INTRO_SEEN_KEY)) {
      return;
    }

    setShowIntro(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    }

    // Faster timeline: 0.6s display, 0.4s slide up = 1.0s total
    // (Previously 3.0s, which dragged LCP past 11s on Lighthouse.)
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
    }, 1000);

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
          animation: introSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
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

      <div className="intro-overlay" aria-hidden="true">
        <div className="intro-content">
          <p className="intro-name">Kim Pelham</p>
          <p className="intro-tagline">your neighbor in real estate</p>
          <p className="intro-subtitle">(425) 250-9422  -  Snohomish County</p>
        </div>
      </div>

      {children}
    </>
  );
}

'use client';

import { useEffect, useState, useCallback } from 'react';

type Settings = {
  textScale: number;
  contrast: 'default' | 'high' | 'dark' | 'sepia';
  readableFont: boolean;
  highlightLinks: boolean;
  pauseAnimations: boolean;
  largerCursor: boolean;
  underlineHeadings: boolean;
};

const DEFAULTS: Settings = {
  textScale: 1,
  contrast: 'default',
  readableFont: false,
  highlightLinks: false,
  pauseAnimations: false,
  largerCursor: false,
  underlineHeadings: false,
};

const STORAGE_KEY = 'pelham_a11y_settings_v1';

function applySettingsToDocument(s: Settings) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;

  // Text scale: applied as a CSS variable + multiplied font-size on body
  root.style.setProperty('--a11y-text-scale', String(s.textScale));
  document.body.style.fontSize = s.textScale !== 1 ? `${s.textScale * 100}%` : '';

  // Contrast modes via root data attributes (CSS handles the rest)
  root.dataset.a11yContrast = s.contrast;

  // Toggle flags as data attributes
  root.dataset.a11yReadableFont = s.readableFont ? 'on' : 'off';
  root.dataset.a11yHighlightLinks = s.highlightLinks ? 'on' : 'off';
  root.dataset.a11yPauseAnimations = s.pauseAnimations ? 'on' : 'off';
  root.dataset.a11yLargerCursor = s.largerCursor ? 'on' : 'off';
  root.dataset.a11yUnderlineHeadings = s.underlineHeadings ? 'on' : 'off';
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = { ...DEFAULTS, ...JSON.parse(stored) } as Settings;
        setSettings(parsed);
        applySettingsToDocument(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist + apply on change
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore
    }
    applySettingsToDocument(settings);
  }, [settings, mounted]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const update = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = () => {
    setSettings(DEFAULTS);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating trigger button */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="pelham-a11y-panel"
        aria-label={open ? 'Close accessibility menu' : 'Open accessibility menu'}
        onClick={() => setOpen((v) => !v)}
        className="a11y-fab"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="4" r="2" fill="currentColor" />
          <path
            d="M3 8.5C3 8.5 6 10 12 10C18 10 21 8.5 21 8.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 10V14M12 14L8.5 22M12 14L15.5 22M10 14H14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Panel */}
      <div
        id="pelham-a11y-panel"
        role="dialog"
        aria-modal="false"
        aria-label="Accessibility settings"
        className={`a11y-panel ${open ? 'a11y-panel-open' : ''}`}
      >
        <div className="a11y-panel-header">
          <div>
            <span className="a11y-panel-eyebrow">accessibility</span>
            <h2 className="a11y-panel-title">Make this site easier to use</h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close accessibility menu"
            className="a11y-close"
          >
            ×
          </button>
        </div>

        <div className="a11y-panel-body">
          {/* Text size */}
          <fieldset className="a11y-group">
            <legend className="a11y-group-label">Text size</legend>
            <div className="a11y-row">
              <button
                type="button"
                onClick={() => update('textScale', Math.max(1, +(settings.textScale - 0.1).toFixed(2)))}
                aria-label="Decrease text size"
                className="a11y-step-btn"
                disabled={settings.textScale <= 1}
              >
                A−
              </button>
              <span className="a11y-step-value" aria-live="polite">
                {Math.round(settings.textScale * 100)}%
              </span>
              <button
                type="button"
                onClick={() => update('textScale', Math.min(1.5, +(settings.textScale + 0.1).toFixed(2)))}
                aria-label="Increase text size"
                className="a11y-step-btn"
                disabled={settings.textScale >= 1.5}
              >
                A+
              </button>
            </div>
          </fieldset>

          {/* Contrast */}
          <fieldset className="a11y-group">
            <legend className="a11y-group-label">Contrast</legend>
            <div className="a11y-row a11y-row-wrap">
              {(['default', 'high', 'dark', 'sepia'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => update('contrast', mode)}
                  className={`a11y-chip ${settings.contrast === mode ? 'a11y-chip-on' : ''}`}
                  aria-pressed={settings.contrast === mode}
                >
                  {mode === 'default' ? 'Normal' : mode === 'high' ? 'High contrast' : mode === 'dark' ? 'Dark' : 'Sepia'}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Toggles */}
          <fieldset className="a11y-group">
            <legend className="a11y-group-label">Reading aids</legend>
            <Toggle
              label="Readable font (Atkinson Hyperlegible)"
              checked={settings.readableFont}
              onChange={(v) => update('readableFont', v)}
            />
            <Toggle
              label="Highlight links"
              checked={settings.highlightLinks}
              onChange={(v) => update('highlightLinks', v)}
            />
            <Toggle
              label="Underline headings"
              checked={settings.underlineHeadings}
              onChange={(v) => update('underlineHeadings', v)}
            />
            <Toggle
              label="Pause animations"
              checked={settings.pauseAnimations}
              onChange={(v) => update('pauseAnimations', v)}
            />
            <Toggle
              label="Larger cursor"
              checked={settings.largerCursor}
              onChange={(v) => update('largerCursor', v)}
            />
          </fieldset>

          <button type="button" onClick={reset} className="a11y-reset">
            Reset all settings
          </button>

          <p className="a11y-footnote">
            Need help? Email <a href="mailto:kim@thepelhamgroupnw.com">kim@thepelhamgroupnw.com</a> or call (425) 250-9422.
          </p>
        </div>
      </div>

      {open && <div className="a11y-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}

      <style jsx global>{`
        /* ---- Floating button ---- */
        .a11y-fab {
          position: fixed;
          bottom: 22px;
          left: 22px;
          z-index: 9998;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--color-forest, #2F5233);
          color: var(--color-cream, #f8f5f0);
          border: 2px solid var(--color-cream, #f8f5f0);
          box-shadow: 0 8px 22px rgba(26, 26, 26, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }
        .a11y-fab:hover {
          transform: translateY(-2px);
          background: var(--color-clay, #b8845c);
          box-shadow: 0 12px 28px rgba(26, 26, 26, 0.34);
        }
        .a11y-fab:focus-visible {
          outline: 3px solid var(--color-clay, #b8845c);
          outline-offset: 3px;
        }

        /* ---- Scrim ---- */
        .a11y-scrim {
          position: fixed;
          inset: 0;
          background: rgba(26, 26, 26, 0.24);
          z-index: 9997;
        }

        /* ---- Panel ---- */
        .a11y-panel {
          position: fixed;
          bottom: 22px;
          left: 22px;
          z-index: 9999;
          width: 360px;
          max-width: calc(100vw - 44px);
          max-height: calc(100vh - 44px);
          background: #ffffff;
          border: 1px solid var(--color-border, #E8E3DA);
          border-radius: 12px;
          box-shadow: 0 24px 60px rgba(26, 26, 26, 0.22);
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px) scale(0.98);
          transform-origin: bottom left;
          transition: opacity 0.2s ease, transform 0.2s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .a11y-panel-open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }
        .a11y-panel-header {
          background: var(--color-cream, #f8f5f0);
          border-bottom: 1px solid var(--color-border, #E8E3DA);
          padding: 18px 20px 16px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .a11y-panel-eyebrow {
          font-family: var(--font-handwritten, cursive);
          font-size: 18px;
          color: var(--color-clay, #b8845c);
          line-height: 1;
        }
        .a11y-panel-title {
          font-family: var(--font-heading, Georgia, serif);
          font-size: 19px;
          font-weight: 500;
          color: var(--color-forest, #2F5233);
          margin: 4px 0 0;
          line-height: 1.2;
        }
        .a11y-close {
          background: transparent;
          border: 1px solid var(--color-border, #E8E3DA);
          width: 32px;
          height: 32px;
          border-radius: 6px;
          color: var(--color-text, #1c1c1c);
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
          flex: 0 0 auto;
        }
        .a11y-close:hover {
          background: #fff;
          border-color: var(--color-clay, #b8845c);
          color: var(--color-clay, #b8845c);
        }
        .a11y-panel-body {
          padding: 18px 20px 20px;
          overflow-y: auto;
        }
        .a11y-group {
          border: 0;
          padding: 0;
          margin: 0 0 18px;
        }
        .a11y-group-label {
          font-family: var(--font-body, Inter, sans-serif);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text-faint, #888);
          margin-bottom: 10px;
          padding: 0;
          display: block;
        }
        .a11y-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .a11y-row-wrap {
          flex-wrap: wrap;
        }
        .a11y-step-btn {
          flex: 1;
          background: var(--color-cream, #f8f5f0);
          border: 1px solid var(--color-border, #E8E3DA);
          border-radius: 6px;
          font-family: var(--font-body, Inter, sans-serif);
          font-weight: 700;
          font-size: 16px;
          padding: 10px 14px;
          cursor: pointer;
          color: var(--color-forest, #2F5233);
        }
        .a11y-step-btn:hover:not(:disabled) {
          background: var(--color-forest, #2F5233);
          color: #fff;
        }
        .a11y-step-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .a11y-step-value {
          flex: 0 0 64px;
          text-align: center;
          font-family: var(--font-body, Inter, sans-serif);
          font-weight: 600;
          color: var(--color-text, #1c1c1c);
        }
        .a11y-chip {
          flex: 0 1 auto;
          background: var(--color-cream, #f8f5f0);
          border: 1px solid var(--color-border, #E8E3DA);
          border-radius: 999px;
          padding: 7px 14px;
          font-family: var(--font-body, Inter, sans-serif);
          font-size: 13px;
          font-weight: 600;
          color: var(--color-forest, #2F5233);
          cursor: pointer;
        }
        .a11y-chip:hover {
          border-color: var(--color-clay, #b8845c);
        }
        .a11y-chip-on {
          background: var(--color-forest, #2F5233);
          color: #fff;
          border-color: var(--color-forest, #2F5233);
        }
        .a11y-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          font-family: var(--font-body, Inter, sans-serif);
          font-size: 14.5px;
          color: var(--color-text, #1c1c1c);
          cursor: pointer;
          user-select: none;
        }
        .a11y-toggle + .a11y-toggle {
          border-top: 1px solid var(--color-border, #E8E3DA);
        }
        .a11y-toggle-switch {
          flex: 0 0 auto;
          width: 38px;
          height: 22px;
          border-radius: 999px;
          background: var(--color-border, #E8E3DA);
          position: relative;
          transition: background 0.18s ease;
        }
        .a11y-toggle-switch::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #fff;
          transition: transform 0.18s ease;
        }
        .a11y-toggle input:checked + .a11y-toggle-switch {
          background: var(--color-forest, #2F5233);
        }
        .a11y-toggle input:checked + .a11y-toggle-switch::after {
          transform: translateX(16px);
        }
        .a11y-toggle input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }
        .a11y-reset {
          width: 100%;
          background: var(--color-clay, #b8845c);
          color: #fff;
          border: 0;
          border-radius: 6px;
          font-family: var(--font-body, Inter, sans-serif);
          font-weight: 700;
          font-size: 14.5px;
          padding: 12px 16px;
          cursor: pointer;
          margin-top: 4px;
        }
        .a11y-reset:hover {
          background: var(--color-forest, #2F5233);
        }
        .a11y-footnote {
          font-family: var(--font-body, Inter, sans-serif);
          font-size: 12.5px;
          color: var(--color-text-faint, #888);
          margin: 14px 0 0;
          line-height: 1.5;
          text-align: center;
        }
        .a11y-footnote a {
          color: var(--color-clay, #b8845c);
          text-decoration: underline;
        }

        /* ---- Applied to <html> via data attributes ---- */
        html[data-a11y-contrast='high'] body,
        html[data-a11y-contrast='high'] * {
          background-color: #000 !important;
          color: #fff !important;
          border-color: #fff !important;
        }
        html[data-a11y-contrast='high'] a,
        html[data-a11y-contrast='high'] button {
          color: #ffff00 !important;
        }
        html[data-a11y-contrast='high'] img,
        html[data-a11y-contrast='high'] video {
          filter: grayscale(100%) contrast(120%);
        }

        html[data-a11y-contrast='dark'] body,
        html[data-a11y-contrast='dark'] section,
        html[data-a11y-contrast='dark'] article,
        html[data-a11y-contrast='dark'] main,
        html[data-a11y-contrast='dark'] header,
        html[data-a11y-contrast='dark'] footer,
        html[data-a11y-contrast='dark'] nav {
          background-color: #1a1a1a !important;
          color: #f0f0f0 !important;
        }
        html[data-a11y-contrast='dark'] h1,
        html[data-a11y-contrast='dark'] h2,
        html[data-a11y-contrast='dark'] h3,
        html[data-a11y-contrast='dark'] h4,
        html[data-a11y-contrast='dark'] p,
        html[data-a11y-contrast='dark'] li,
        html[data-a11y-contrast='dark'] span:not(.a11y-step-value):not(.a11y-panel-eyebrow) {
          color: #f0f0f0 !important;
        }
        html[data-a11y-contrast='dark'] a {
          color: #f3b779 !important;
        }

        html[data-a11y-contrast='sepia'] body {
          background-color: #f4ecd8 !important;
        }
        html[data-a11y-contrast='sepia'] body * {
          color: #4a3f2c !important;
        }
        html[data-a11y-contrast='sepia'] a {
          color: #8b5a2b !important;
        }

        html[data-a11y-readable-font='on'] body,
        html[data-a11y-readable-font='on'] body * {
          font-family: 'Atkinson Hyperlegible', 'Inter', system-ui, sans-serif !important;
          letter-spacing: 0.01em !important;
          word-spacing: 0.04em !important;
        }

        html[data-a11y-highlight-links='on'] a:not(.a11y-fab):not(.a11y-chip):not(.a11y-step-btn):not(.a11y-reset) {
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
          text-underline-offset: 3px !important;
          background-color: rgba(184, 132, 92, 0.14) !important;
          padding: 0 3px !important;
          border-radius: 2px !important;
        }

        html[data-a11y-underline-headings='on'] h1,
        html[data-a11y-underline-headings='on'] h2,
        html[data-a11y-underline-headings='on'] h3,
        html[data-a11y-underline-headings='on'] h4 {
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
          text-underline-offset: 6px !important;
        }

        html[data-a11y-pause-animations='on'] *,
        html[data-a11y-pause-animations='on'] *::before,
        html[data-a11y-pause-animations='on'] *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
          scroll-behavior: auto !important;
        }

        html[data-a11y-larger-cursor='on'] body,
        html[data-a11y-larger-cursor='on'] a,
        html[data-a11y-larger-cursor='on'] button {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="%232F5233" stroke="%23ffffff" stroke-width="2" d="M5 5 L5 30 L13 23 L18 33 L23 31 L18 21 L28 21 Z"/></svg>') 4 4, auto !important;
        }

        @media (max-width: 480px) {
          .a11y-panel {
            width: calc(100vw - 32px);
            left: 16px;
            bottom: 16px;
          }
          .a11y-fab {
            left: 16px;
            bottom: 16px;
          }
        }
      `}</style>

      {/* Self-host the Atkinson Hyperlegible font for the readable-font toggle */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap"
      />
    </>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="a11y-toggle">
      <span>{label}</span>
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-label={label}
        />
        <span className="a11y-toggle-switch" />
      </span>
    </label>
  );
}

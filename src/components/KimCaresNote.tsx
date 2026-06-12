'use client';

/*
  KimCaresNote — footer-style accessibility callback that points
  visitors to the brand-matched AccessibilityWidget mounted in the
  root layout (bottom-left circular button on every page).

  Reused on the condo case-study and gated funnel pages, and
  available for any page that wants to surface the accessibility
  affordance to a senior or vision-sensitive reader.
*/

export default function KimCaresNote() {
  return (
    <section
      aria-label="Kim Cares accessibility note"
      style={{
        background: '#fff',
        borderTop: '1px solid var(--color-border)',
        padding: '32px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 18,
          flexWrap: 'wrap',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            flex: '0 0 auto',
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: 'var(--color-forest)',
            color: 'var(--color-cream)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="4" r="2" fill="currentColor" />
            <path d="M3 8.5C3 8.5 6 10 12 10C18 10 21 8.5 21 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 10V14M12 14L8.5 22M12 14L15.5 22M10 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: 22, color: 'var(--color-clay)', margin: '0 0 4px', lineHeight: 1 }}>
            Kim Cares
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--color-text-light)', margin: 0, lineHeight: 1.6 }}>
            If reading on this page is hard for any reason, the green accessibility
            button in the bottom-left corner of every page on this site can bump up the
            text size, raise the contrast, switch to a more readable font, pause animations,
            and highlight links. Built for sellers and buyers of any age and any ability.
          </p>
        </div>
      </div>
    </section>
  );
}

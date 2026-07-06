'use client';

import { useState } from 'react';
import Link from 'next/link';

/*
  Shared pieces for the Community Spotlight studio pages.
  ───────────────────────────────────────────────────────
  /studio            → series home (what the series is, all conversations)
  /studio/<episode>  → one conversation's page, owned by Kim AND the guest

  AUDIENCE NOTE: guests get these links, not just Kim. Every word must
  read well to a guest. Frame strategy as two-way ("introduction",
  "partnership"), never extractive ("referral engine", "borrowed
  audience"). The blunt internal strategy lives in Rachael's emails
  to Kim, not here.
*/

// ---------------- Types ----------------

export interface Caption {
  platform: string;
  note: string;
  text: string;
}

export interface CaptionGroup {
  label: string;
  captions: Caption[];
}

export interface Clip {
  slug: string;
  title: string;
  duration: string;
  videoSrc: string;
  downloadName: string;
  description: string;
  captionGroups: CaptionGroup[];
  transcript: { speaker: string; text: string }[];
}

// ---------------- Styles ----------------

export const pageStyle: React.CSSProperties = {
  background: 'var(--color-cream)',
  minHeight: '100vh',
  color: 'var(--color-text)',
  fontFamily: 'var(--font-body)',
};

export const shellStyle: React.CSSProperties = {
  maxWidth: 1060,
  margin: '0 auto',
  padding: '0 24px 96px',
};

export const eyebrowStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--color-clay)',
  fontWeight: 700,
};

export const h1Style: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 48,
  fontWeight: 700,
  color: 'var(--color-forest)',
  margin: '10px 0 16px',
  lineHeight: 1.12,
};

export const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 34,
  fontWeight: 700,
  color: 'var(--color-forest)',
  margin: '8px 0 16px',
  lineHeight: 1.15,
};

export const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 20,
  fontWeight: 700,
  color: 'var(--color-forest)',
  margin: '0 0 8px',
};

export const bodyStyle: React.CSSProperties = {
  fontSize: 15.5,
  lineHeight: 1.75,
  color: 'var(--color-text-light)',
};

export const cardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid var(--color-border)',
  borderRadius: 12,
  padding: 24,
  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
};

export const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  background: 'var(--color-clay)',
  color: '#fff',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: 15,
  padding: '12px 24px',
  borderRadius: 2,
  border: 0,
  cursor: 'pointer',
  textDecoration: 'none',
};

export const ghostButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: 'transparent',
  color: 'var(--color-forest)',
  border: '1px solid var(--color-forest)',
};

// ---------------- Components ----------------

export function StudioHeader({ backLink }: { backLink?: boolean }) {
  return (
    <header
      style={{
        background: 'var(--color-forest)',
        padding: '18px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 20 }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--color-cream)',
            textDecoration: 'none',
          }}
        >
          The Pelham Group NW
        </Link>
        {backLink && (
          <Link
            href="/studio"
            style={{ fontSize: 13, color: 'var(--color-clay-light)', textDecoration: 'none' }}
          >
            All conversations
          </Link>
        )}
      </div>
      <span
        style={{
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--color-clay-light)',
          fontWeight: 700,
        }}
      >
        Community Spotlight · Private
      </span>
    </header>
  );
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      style={{
        ...buttonStyle,
        background: copied ? 'var(--color-forest)' : 'var(--color-clay)',
        fontSize: 13,
        padding: '8px 16px',
      }}
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }}
    >
      {copied ? 'Copied' : 'Copy caption'}
    </button>
  );
}

/* Horizontal strip of post cards: the video first, then each caption
   as a swipeable card. Per Rachael's UX feedback 2026-07-06: the posts
   should scroll like a queue, not stack into a wall of text. */

const CARD_HEIGHT = 540;

export function HScroll({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        overflowX: 'auto',
        padding: '8px 4px 18px',
        scrollSnapType: 'x proximity',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {children}
    </div>
  );
}

function PostCaptionCard({ caption, owner }: { caption: Caption; owner: string }) {
  return (
    <div
      style={{
        ...cardStyle,
        padding: 16,
        flex: '0 0 320px',
        height: CARD_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        scrollSnapAlign: 'start',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-clay)',
            fontWeight: 700,
          }}
        >
          {owner} · {caption.platform}
        </div>
        <CopyButton text={caption.text} />
      </div>
      <div style={{ fontSize: 12, color: 'var(--color-text-muted)', margin: '6px 0 10px' }}>{caption.note}</div>
      <p
        style={{
          whiteSpace: 'pre-wrap',
          fontSize: 13.5,
          lineHeight: 1.65,
          color: 'var(--color-text-light)',
          background: 'var(--color-cream)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          padding: 14,
          margin: 0,
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {caption.text}
      </p>
    </div>
  );
}

export function ClipSection({ clip }: { clip: Clip }) {
  const [showTranscript, setShowTranscript] = useState(false);
  const cards = clip.captionGroups.flatMap((group) =>
    group.captions.map((caption) => ({
      caption,
      owner: group.label.replace('For ', '').replace('’s channels', ''),
    })),
  );
  return (
    <div style={{ marginBottom: 56 }}>
      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 26,
          fontWeight: 700,
          color: 'var(--color-forest)',
          margin: '0 0 4px',
        }}
      >
        {clip.title}
      </h3>
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 10 }}>{clip.duration}</div>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-light)', margin: '0 0 12px', maxWidth: 720 }}>
        {clip.description}
      </p>
      <button style={{ ...ghostButtonStyle, fontSize: 13, padding: '8px 16px' }} onClick={() => setShowTranscript((v) => !v)}>
        {showTranscript ? 'Hide transcript' : 'Read transcript'}
      </button>

      {showTranscript && (
        <div style={{ ...cardStyle, padding: 20, margin: '16px 0 4px', background: 'var(--color-cream-dark)', maxWidth: 720 }}>
          {clip.transcript.map((line, i) => (
            <p key={i} style={{ fontSize: 14, lineHeight: 1.7, margin: i === 0 ? 0 : '12px 0 0' }}>
              <strong style={{ color: 'var(--color-forest)' }}>{line.speaker}:</strong>{' '}
              <span style={{ color: 'var(--color-text-light)' }}>{line.text}</span>
            </p>
          ))}
        </div>
      )}

      <div style={{ fontSize: 12.5, color: 'var(--color-text-muted)', margin: '14px 0 0' }}>
        Slide through the posts, copy a caption, download, done.
      </div>
      <HScroll>
        {/* The clip itself is the first card */}
        <div style={{ flex: '0 0 264px', height: CARD_HEIGHT, display: 'flex', flexDirection: 'column', scrollSnapAlign: 'start' }}>
          <video
            controls
            preload="metadata"
            src={clip.videoSrc}
            style={{
              width: '100%',
              flex: 1,
              minHeight: 0,
              objectFit: 'cover',
              borderRadius: 12,
              border: '1px solid var(--color-border)',
              background: 'var(--color-dark)',
              display: 'block',
            }}
          />
          <a
            href={clip.videoSrc}
            download={clip.downloadName}
            style={{ ...buttonStyle, textAlign: 'center', marginTop: 10, padding: '10px 0', fontSize: 14 }}
          >
            Download this clip
          </a>
        </div>
        {cards.map(({ caption, owner }) => (
          <PostCaptionCard key={`${owner}-${caption.platform}`} caption={caption} owner={owner} />
        ))}
      </HScroll>
    </div>
  );
}

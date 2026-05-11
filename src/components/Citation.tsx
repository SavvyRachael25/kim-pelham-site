import Link from 'next/link';

interface CitationProps {
  /** Anchor on /sources page, e.g. "sale-to-list" */
  id: string;
  /** Display number that appears in [N] */
  n: number;
  /** Optional override of the title attribute (hover tooltip) */
  title?: string;
  /** Light variant for use on dark backgrounds */
  light?: boolean;
}

/**
 * Inline citation marker. Renders as a small superscript "[N]" that links to
 * /sources#<id>. Used to back up specific statistics published on the site.
 *
 * Example: 102.3%<Citation id="sale-to-list" n={1} /> sale-to-list ratio
 */
export default function Citation({ id, n, title, light = false }: CitationProps) {
  return (
    <sup
      style={{
        fontSize: '0.55em',
        marginLeft: '2px',
        verticalAlign: 'super',
        lineHeight: 0,
      }}
    >
      <Link
        href={`/sources#${id}`}
        aria-label={title ?? `Source ${n}`}
        title={title ?? 'View source on /sources'}
        style={{
          color: light ? '#F8F5F0' : '#B8845C',
          textDecoration: 'none',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          opacity: 0.85,
        }}
      >
        [{n}]
      </Link>
    </sup>
  );
}

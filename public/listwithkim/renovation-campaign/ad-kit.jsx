/* ad-kit.jsx — reusable brand primitives for the campaign creatives.
   Exports to window: Wordmark, Slot, BeforeAfter, CtaBar, StickyTag,
   AwardRow, StatChip, Arrow. Loaded via Babel; shares scope through window. */

const ASSET = 'assets/';

function Arrow({ size = 26, color = 'currentColor', down = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: down ? 'rotate(90deg)' : 'none' }}>
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 20 12 13 18" />
    </svg>
  );
}

/* Brand wordmark lockup — italic Cormorant name + clay rule + caps subtitle */
function Wordmark({ size = 26, dark = false, stacked = false, sub = true }) {
  return (
    <div className={'kp-mark' + (dark ? ' on-dark' : '')}>
      <span className="kp-name" style={{ fontSize: size }}>Kim Pelham</span>
      {sub && <span className="kp-rule" />}
      {sub && (
        <span className="kp-sub">
          <b style={{ fontSize: size * 0.30 }}>The Pelham Group NW</b>
          <span style={{ fontSize: size * 0.24 }}>Snohomish County · WA</span>
        </span>
      )}
    </div>
  );
}

/* image cell — renders a real photo when `src` is given (object-position
   lets us steer the crop), otherwise falls back to a user-fillable slot. */
function Slot({ id, label = 'Drop an image', fit = 'cover', src, pos = 'center' }) {
  if (src) {
    return (
      <img src={src} alt="" style={{
        width: '100%', height: '100%', objectFit: fit, objectPosition: pos, display: 'block',
      }} />
    );
  }
  return React.createElement('image-slot', {
    id, fit, shape: 'rect', placeholder: label,
    style: { width: '100%', height: '100%' },
  });
}

/* before → after comparison.
   dir: 'split' (side-by-side) | 'stack' (top/bottom)
   beforeId/afterId: persistence keys for the two image slots
   tagFs: font-size for BEFORE/AFTER tags; chip: show center arrow chip */
function BeforeAfter({
  beforeId, afterId, beforeSrc, afterSrc, beforePos, afterPos,
  dir = 'split', tagFs = 15, chip = true,
  chipSize = 64, style, className = '',
}) {
  const isSplit = dir === 'split';
  return (
    <div className={'ba ' + (isSplit ? 'ba-split' : 'ba-stack') + ' ' + className} style={style}>
      <div className="ba-half">
        <Slot id={beforeId} src={beforeSrc} pos={beforePos} label="drop BEFORE photo" />
        <span className="ba-tag" style={{
          fontSize: tagFs,
          left: isSplit ? 16 : 16, bottom: 16,
        }}>Before</span>
      </div>
      <div className="ba-divider" />
      <div className="ba-half">
        <Slot id={afterId} src={afterSrc} pos={afterPos} label="drop AFTER photo" />
        <span className="ba-tag after" style={{
          fontSize: tagFs,
          right: isSplit ? 16 : 'auto', left: isSplit ? 'auto' : 16,
          top: isSplit ? 'auto' : 16, bottom: isSplit ? 16 : 'auto',
        }}>After</span>
      </div>
      {chip && (
        <span className="ba-chip" style={{ width: chipSize, height: chipSize, borderWidth: Math.max(2, chipSize * 0.05) }}>
          <Arrow size={chipSize * 0.5} color="#F8F5F0" down={!isSplit} />
        </span>
      )}
    </div>
  );
}

/* forest CTA bar with clay download pill */
function CtaBar({ h = 120, pad = 40, pillFs = 19, title = 'Free guide', sub = 'kim@thepelhamgroupnw.com', cta = 'Download the Playbook' }) {
  return (
    <div className="cta-bar green-textured" style={{ minHeight: h, padding: `0 ${pad}px` }}>
      <span className="cta-pill" style={{ fontSize: pillFs, padding: `${pillFs * 0.7}px ${pillFs * 1.25}px` }}>
        <svg width={pillFs * 1.05} height={pillFs * 1.05} viewBox="0 0 24 24" fill="none" stroke="#F8F5F0" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12" /><polyline points="7 11 12 16 17 11" /><path d="M5 20h14" />
        </svg>
        {cta}
      </span>
      <span className="cta-meta">
        <b style={{ fontSize: pillFs * 1.15 }}>{title}</b>
        <span style={{ fontSize: pillFs * 0.72 }}>{sub}</span>
      </span>
    </div>
  );
}

function StickyTag({ children, fs = 30, style }) {
  return <span className="sticky-tag" style={{ fontSize: fs, ...style }}>{children}</span>;
}

function StatChip({ num, label, numFs = 40, labelFs = 14 }) {
  return (
    <span className="stat-chip">
      <b style={{ fontSize: numFs }}>{num}</b>
      <span style={{ fontSize: labelFs }}>{label}</span>
    </span>
  );
}

function AwardRow({ h = 46, dark = false }) {
  return (
    <span className="award-row">
      <img src={ASSET + 'best-of-snoco-2024-no-background.png'} alt="Best of Snohomish County 2024" style={{ height: h }} />
      <img src={ASSET + 'best-of-zillow.png'} alt="Best of Zillow" style={{ height: h * 0.82, filter: dark ? 'brightness(0) invert(1)' : 'none', opacity: dark ? 0.9 : 1 }} />
    </span>
  );
}

Object.assign(window, { Arrow, Wordmark, Slot, BeforeAfter, CtaBar, StickyTag, StatChip, AwardRow });

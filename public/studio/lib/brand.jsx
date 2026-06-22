/*
  brand.jsx — Pelham Group NW shared brand kit.
  Single source of truth for colors, fonts, recurring micro-components,
  and the compliance footer that EVERY template renders.
*/

const C = {
  forest:       "#2F5233",
  forestLight:  "#3d6b42",
  clay:         "#B8845C",
  clayLight:    "#d4a07a",
  clayDark:     "#A07550",
  cream:        "#F8F5F0",
  creamDark:    "#F0EDE7",
  creamMint:    "#EBF3EC",
  border:       "#E8E3DA",
  text:         "#2C2C2C",
  textLight:    "#555",
  textMuted:    "#777",
  textFaint:    "#888",
  dark:         "#1a1a1a",
  pinRed:       "#DC2626",
};

const FONT = {
  heading: "'Cormorant Garamond', Georgia, serif",
  body:    "'Inter', system-ui, -apple-system, sans-serif",
  hand:    "'Caveat', cursive",
};

/* ===== Compliance — the line every template renders =====
   Renders three sizes; pick what fits.
   Brokered by Katrina Eileen Real Estate · Kim Pelham WA Broker #119262
   MLS broker #103153 · 3201 Smith Ave Ste 409, Everett WA 98201
   Equal Housing Opportunity. */

const EHO_GLYPH = (size = 14, color = "currentColor") => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.5" aria-hidden="true">
    <path d="M3 11 L12 4 L21 11 V20 H3 Z" />
    <line x1="3" y1="13" x2="21" y2="13" />
    <rect x="10.5" y="15" width="3" height="3" stroke={color} fill="none" />
    <circle cx="7.5" cy="16" r="1.2" fill={color} stroke="none" />
  </svg>
);

function ComplianceLine({
  variant = "footer",
  color = C.textMuted,
  mlsNumber,
  align = "center",
}) {
  // tiny — single line, smallest
  if (variant === "tiny") {
    return (
      <p style={{
        fontFamily: FONT.body, fontSize: 8, lineHeight: 1.4,
        color, margin: 0, letterSpacing: ".02em", textAlign: align,
      }}>
        Brokered by Katrina Eileen Real Estate · Kim Pelham WA Broker #119262
        {mlsNumber ? ` · MLS #${mlsNumber}` : ""} · Equal Housing Opportunity
      </p>
    );
  }
  // chip — for ad creatives: compact two-line with EHO glyph
  if (variant === "chip") {
    return (
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        fontFamily: FONT.body, fontSize: 9, color, lineHeight: 1.35,
        letterSpacing: ".02em",
      }}>
        {EHO_GLYPH(12, color)}
        <span>
          Brokered by Katrina Eileen Real Estate · WA #119262{mlsNumber ? ` · MLS #${mlsNumber}` : ""}
        </span>
      </div>
    );
  }
  // footer — long form for emails / blogs / property pages
  return (
    <div style={{
      fontFamily: FONT.body, fontSize: 11, lineHeight: 1.7, color,
      letterSpacing: ".01em", textAlign: align,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: align === "center" ? "center" : "flex-start", marginBottom: 4 }}>
        {EHO_GLYPH(14, color)}
        <span style={{ fontWeight: 600 }}>Equal Housing Opportunity</span>
      </div>
      <div>Brokered by Katrina Eileen Real Estate</div>
      <div>Kim Pelham · WA Broker #119262 · MLS Broker #103153{mlsNumber ? ` · MLS #${mlsNumber}` : ""}</div>
      <div>3201 Smith Ave Ste 409, Everett WA 98201</div>
    </div>
  );
}

/* ===== Micro components ===== */

function Eyebrow({ children, color = C.clay, size = 11, style }) {
  return (
    <p style={{
      fontFamily: FONT.body, fontSize: size, fontWeight: 700,
      color, letterSpacing: "1.5px", textTransform: "uppercase",
      margin: 0, ...style,
    }}>{children}</p>
  );
}

function Handwritten({ children, color = C.clay, size = 22, rotate = 0, style }) {
  return (
    <span style={{
      fontFamily: FONT.hand, fontSize: size, color,
      lineHeight: 1.1, display: "inline-block",
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style,
    }}>{children}</span>
  );
}

/* Clay squiggle under a word/phrase. */
function HandUnderline({ children, color, thickness = 3, offset = -6 }) {
  return (
    <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
      {children}
      <svg style={{ position: "absolute", bottom: offset, left: 0, width: "100%", height: 12 }}
        viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 0 10 Q 50 2 100 10 T 200 10"
          stroke={color || C.clay} strokeWidth={thickness} fill="none" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/* Sticky tag — rotated clay rectangle. */
function StickyTag({ children, color = C.clay, rotate = -2, style }) {
  return (
    <span style={{
      display: "inline-block",
      fontFamily: FONT.hand, fontSize: 22, color: "#fff",
      background: color, padding: "4px 14px",
      transform: `rotate(${rotate}deg)`,
      boxShadow: "1px 2px 4px rgba(0,0,0,0.15)",
      ...style,
    }}>{children}</span>
  );
}

/* Forest texture overlay — wavy lines at low opacity. */
const FOREST_TEXTURE = "url(\"data:image/svg+xml,%3Csvg width='800' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 80c100-40 200-40 300 0s200 40 300 0s200-40 300 0' fill='none' stroke='%23ffffff' stroke-width='0.6'/%3E%3Cpath d='M0 120c120-30 180-30 300 0s180 30 300 0s180-30 300 0' fill='none' stroke='%23ffffff' stroke-width='0.6'/%3E%3C/svg%3E\")";

/* Paper noise texture for cream surfaces. */
const PAPER_NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")";

/* Wordmark — typographic logo (lightweight inline version). */
function Wordmark({ size = 1, color = C.forest, accent = C.clay, dark = false }) {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1, gap: 2 * size }}>
      <span style={{
        fontFamily: FONT.heading, fontWeight: 600, fontStyle: "italic",
        fontSize: 24 * size, color: dark ? accent : color, letterSpacing: ".02em",
      }}>
        The Pelham Group
        <span style={{ color: accent }}> NW</span>
      </span>
      <span style={{
        fontFamily: FONT.body, fontSize: 8 * size, fontWeight: 600,
        color: dark ? "#aaa" : C.textMuted, textTransform: "uppercase",
        letterSpacing: "2px", marginTop: 2 * size,
      }}>
        Snohomish County Real Estate
      </span>
    </span>
  );
}

/* Stamp (circular seal) — used as watermark on ads + Reels covers. */
function StampLogo({ size = 80, color = C.forest, accent = C.clay }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="none" stroke={color} strokeWidth="1.2" />
      <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth=".5" />
      <text x="50" y="46" textAnchor="middle" fontFamily="Cormorant Garamond" fontStyle="italic"
        fontSize="20" fontWeight="700" fill={color}>Pelham</text>
      <text x="50" y="60" textAnchor="middle" fontFamily="Cormorant Garamond" fontStyle="italic"
        fontSize="20" fontWeight="700" fill={accent}>NW</text>
      <text x="50" y="76" textAnchor="middle" fontFamily="Inter" fontSize="6" fontWeight="700"
        letterSpacing="2" fill={color}>EST. 2008</text>
      <path d="M30 88 Q50 92 70 88" stroke={accent} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ===== Default listing context — Mukilteo ===== */

const DEFAULT_LISTING = {
  city: "MUKILTEO, WA 98275",
  cityShort: "MUKILTEO",
  address: "4611 76th Street SW",
  price: "$975,000",
  priceShort: "$975K",
  oldPrice: "$1,049,000",
  beds: "4 + Office",
  baths: "2.25",
  sqft: "2,605",
  lot: "10,454 SF",
  mls: "2287416",
  hook: "Remodeled around the Olympic Mountain view.",
  feature: "Three decks · Quartz kitchen · Hot tub · RV parking",
  // Long-form description used in feature sheet body, email, blog
  description: "Fully remodeled 1976 NW Contemporary positioned for the Olympic Mountains. Three decks oriented west, quartz waterfall island, walk-in primary, hot tub on the upper deck, RV parking. New roof 2022, new windows 2021. Five minutes to the Mukilteo ferry, fifteen to Boeing.",
  // Spec sheet rows — used by feature sheet + blog property page
  specSheet: [
    ["Year built", "1976 (remodeled 2021)"],
    ["Lot",       "10,454 SF / 0.24 acres"],
    ["HVAC",      "Heat pump + radiant floors"],
    ["Roof",      "Composition · 2022"],
    ["Schools",   "Mukilteo Elem · Kamiak HS"],
    ["Parking",   "2-car attached + RV pad"],
    ["Taxes",     "$6,840 / yr"],
    ["HOA",       "None"],
  ],
  // Short "value prop" line for IG story / open-house drive overlays
  valueProps: "Olympic Mountain View · 5 min to ferry",
  // Open house tagline used by fb post + email
  openHouseTagline: "coffee on the porch",
  exterior: "assets/mukilteo-exterior.jpg",
  hero: "assets/mukilteo-exterior.jpg",
  view: "assets/mukilteo-sunset.jpg",
  interior: "assets/warm-kitchen.jpg",
  living: "assets/staging-living-room.jpg",
  porch: "assets/porch.jpg",
  openHouse: { day: "Saturday", date: "May 23", time: "12 – 3 PM" },
};

/* ===== Award row used in footers / ad social-proof ===== */
function AwardRow({ size = 56, dark = false }) {
  if (dark) {
    // Don't invert PNGs — they become silhouettes. Render a text-only badge row.
    return (
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        {[
          { y: "2024", l: "Best of Snohomish County" },
          { y: "★", l: "Best of Zillow" },
        ].map(b => (
          <div key={b.l} style={{
            border: `1px solid rgba(184,132,92,.6)`,
            padding: "6px 10px", borderRadius: 2,
            display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic", fontSize: size * 0.36, fontWeight: 700,
              color: "#B8845C", lineHeight: 1,
            }}>{b.y}</span>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: size * 0.16, fontWeight: 600,
              letterSpacing: "1.5px", textTransform: "uppercase",
              color: "rgba(255,255,255,.85)", lineHeight: 1.1,
            }}>{b.l}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <img src="assets/badge-snoco-2024.png" alt="Best of Snohomish County 2024"
        style={{ height: size, width: "auto" }} />
      <img src="assets/badge-zillow.png" alt="Best of Zillow"
        style={{ height: size, width: "auto" }} />
    </div>
  );
}

/* ===== Export ===== */
Object.assign(window, {
  C, FONT,
  Eyebrow, Handwritten, HandUnderline, StickyTag,
  Wordmark, StampLogo, AwardRow,
  ComplianceLine, EHO_GLYPH,
  FOREST_TEXTURE, PAPER_NOISE,
  DEFAULT_LISTING,
});

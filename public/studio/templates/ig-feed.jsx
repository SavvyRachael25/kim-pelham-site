/*
  ig-feed.jsx — Instagram Feed templates (1080 × 1350 portrait).
  Four Tier-1 formats:
    ig-feed-listing      — property hero with bottom-left text stack
    ig-feed-stat-card    — big number, brand-cream background
    ig-feed-comparison   — two-column $3M Seattle / $799K Marysville
    ig-feed-testimonial  — italic quote on cream
*/

/* ── ig-feed-listing-portrait ──────────────────────────────────── */
function IgFeedListing({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{
      position: "relative", width: 1080, height: 1350,
      fontFamily: FONT.body, background: "#000",
      overflow: "hidden",
    }}>
      <img src={listing.exterior} alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", filter: "saturate(1.05) brightness(.96)" }} />
      {/* Strong gradient at bottom for legibility — text needs to read clean */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.92) 100%)",
      }} />

      {/* Top-right badge */}
      <div style={{
        position: "absolute", top: 40, right: 40,
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10,
      }}>
        <div style={{
          background: forest, color: "#fff",
          padding: "10px 20px",
          fontSize: 14, fontWeight: 700, letterSpacing: "2px",
          textTransform: "uppercase",
        }}>Open {String(listing.openHouse.day).slice(0,3)} · {listing.openHouse.time}</div>
      </div>

      {/* Top-left handwritten note */}
      <div style={{ position: "absolute", top: 48, left: 48 }}>
        <Handwritten color="#fff" size={42} rotate={-3}>just listed</Handwritten>
      </div>

      {/* Bottom-left stack */}
      <div style={{
        position: "absolute", left: 60, bottom: 80, right: 60,
        color: "#fff",
      }}>
        <p style={{
          fontFamily: FONT.body, fontSize: 18, fontWeight: 700,
          letterSpacing: "4px", color: clay, margin: "0 0 14px 0",
          textTransform: "uppercase",
        }}>
          {listing.cityShort}, WA · {listing.mls && `MLS #${listing.mls}`}
        </p>
        <h2 style={{
          fontFamily: FONT.heading, fontSize: 76, fontWeight: 600,
          color: "#fff", margin: 0, lineHeight: 1.0,
          textShadow: "0 2px 10px rgba(0,0,0,.5)",
        }}>
          {listing.address}
        </h2>
        <div style={{
          height: 4, width: 64, background: clay, margin: "26px 0 22px 0",
        }} />
        <p style={{
          fontFamily: FONT.heading, fontSize: 52, fontWeight: 700,
          color: "#fff", margin: 0, lineHeight: 1.0,
        }}>{listing.price}</p>
        <p style={{
          fontFamily: FONT.body, fontSize: 18, color: "rgba(255,255,255,.85)",
          margin: "16px 0 0 0", letterSpacing: "1px",
        }}>
          {listing.beds} BED · {listing.baths} BATH · {listing.sqft} SQFT
        </p>
      </div>

      {/* Pelham stamp watermark bottom-right */}
      <div style={{ position: "absolute", bottom: 60, right: 60 }}>
        <StampLogo size={88} color="#fff" accent={clay} />
      </div>

      {/* Compliance — bottom strip */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        padding: "12px 60px", background: "rgba(0,0,0,.35)",
      }}>
        <ComplianceLine variant="tiny" color="rgba(255,255,255,.7)" mlsNumber={listing.mls} align="left" />
      </div>
    </div>
  );
}

/* ── ig-feed-stat-card ──────────────────────────────────── */
function IgFeedStat({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{
      position: "relative", width: 1080, height: 1350,
      background: C.cream, backgroundImage: PAPER_NOISE,
      fontFamily: FONT.body, padding: 80,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      {/* Top */}
      <div>
        <Eyebrow color={clay} size={16}>By the Numbers · Spring 2026</Eyebrow>
        <div style={{ marginTop: 16, height: 1, background: "rgba(0,0,0,.1)" }} />
      </div>

      {/* Big stat */}
      <div style={{ textAlign: "center" }}>
        <p style={{
          fontFamily: FONT.heading, fontSize: 280, fontWeight: 600,
          color: forest, margin: 0, lineHeight: 0.85,
          letterSpacing: "-.03em",
        }}>{tweaks.statBigNumber}</p>
        <p style={{
          fontFamily: FONT.heading, fontSize: 48, fontStyle: "italic", fontWeight: 500,
          color: clay, margin: "32px 0 0 0", lineHeight: 1.2,
        }}>
          <HandUnderline color={clay} thickness={4} offset={-12}>{tweaks.statBigLabel}</HandUnderline>
        </p>
        <p style={{
          fontFamily: FONT.body, fontSize: 22, color: C.textLight,
          margin: "44px auto 0 auto", lineHeight: 1.5, maxWidth: 640,
        }}>
          NWMLS market average runs 100.2%. The difference between a prepared
          strategy and hoping for the best.
        </p>
      </div>

      {/* Bottom */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <p style={{
            fontFamily: FONT.hand, fontSize: 38, color: forest,
            margin: 0, lineHeight: 1.1,
          }}>— Kim Pelham</p>
          <p style={{
            fontFamily: FONT.body, fontSize: 14, fontWeight: 600,
            letterSpacing: "2px", textTransform: "uppercase",
            color: C.textMuted, margin: "6px 0 0 0",
          }}>your neighbor in real estate · 17 yrs · 176 closings</p>
        </div>
        <StampLogo size={120} color={forest} accent={clay} />
      </div>

      <ComplianceLine variant="tiny" color={C.textFaint} align="center" />
    </div>
  );
}

/* ── ig-feed-comparison ──────────────────────────────────── */
function IgFeedComparison({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{
      position: "relative", width: 1080, height: 1350,
      background: C.cream, fontFamily: FONT.body,
      display: "flex", flexDirection: "column",
    }}>
      {/* Top label band */}
      <div style={{
        padding: "60px 60px 40px",
      }}>
        <Eyebrow color={clay} size={14}>The Math of Living North</Eyebrow>
        <h2 style={{
          fontFamily: FONT.heading, fontSize: 72, fontWeight: 600,
          color: forest, margin: "16px 0 0 0", lineHeight: 1.05,
        }}>
          One view, <em style={{ fontStyle: "italic", color: clay }}>two prices</em>.
        </h2>
      </div>

      {/* Comparison columns */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="assets/everett-marina.jpg" alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.75)" }} />
          <div style={{ position: "absolute", inset: 0, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Eyebrow color="#fff" size={13}>Downtown Seattle</Eyebrow>
            <div>
              <p style={{ fontFamily: FONT.heading, fontSize: 92, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 0.9 }}>$3M</p>
              <p style={{ fontFamily: FONT.body, fontSize: 18, color: "rgba(255,255,255,.85)", margin: "12px 0 0 0", lineHeight: 1.4 }}>
                2-bed condo · 1,200 sqft<br/>HOA $1,400/mo
              </p>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", overflow: "hidden", borderLeft: `2px solid ${clay}` }}>
          <img src={listing.view} alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,.15) 35%, rgba(0,0,0,0.82) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Eyebrow color="#fff" size={13}>Marysville · 40 min north</Eyebrow>
            <div>
              <p style={{ fontFamily: FONT.heading, fontSize: 92, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 0.9 }}>$799K</p>
              <p style={{ fontFamily: FONT.body, fontSize: 18, color: "rgba(255,255,255,.92)", margin: "12px 0 0 0", lineHeight: 1.4 }}>
                3-bed waterfront · 1,662 sqft<br/>0.36 acres, no HOA
              </p>
            </div>
          </div>
          <div style={{ position: "absolute", top: 50, right: 50 }}>
            <Handwritten color="#fff" size={36} rotate={-3}>same sunset</Handwritten>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div style={{
        background: forest, color: "#fff", padding: "32px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <p style={{ fontFamily: FONT.heading, fontSize: 28, fontStyle: "italic", margin: 0, color: "#fff" }}>
          The Sound is the Sound, whichever side of the bridge you stand on.
        </p>
        <Wordmark size={0.9} dark color="#fff" accent={clay} />
      </div>
    </div>
  );
}

/* ── ig-feed-testimonial ──────────────────────────────────── */
function IgFeedTestimonial({ tweaks }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{
      position: "relative", width: 1080, height: 1350,
      background: C.cream, backgroundImage: PAPER_NOISE,
      fontFamily: FONT.body, padding: 90,
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      {/* Polaroid in corner */}
      <div style={{ position: "absolute", top: 60, right: 60, transform: "rotate(4deg)" }}>
        <div style={{
          background: "#fff", padding: "10px 10px 36px 10px",
          boxShadow: "0 6px 18px rgba(0,0,0,.15)", width: 200,
        }}>
          <img src="assets/key-handoff.jpg" alt=""
            style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }} />
          <p style={{ fontFamily: FONT.hand, fontSize: 22, color: C.textLight, textAlign: "center", margin: "8px 0 0 0" }}>
            keys to Linda
          </p>
        </div>
      </div>

      <Eyebrow color={clay} size={14} style={{ marginBottom: 32 }}>
        Client Story · Sold March 2026
      </Eyebrow>

      <p style={{
        fontFamily: FONT.heading, fontSize: 132, fontWeight: 700,
        color: clay, margin: 0, lineHeight: 0.5, height: 60,
      }}>“</p>

      <p style={{
        fontFamily: FONT.heading, fontSize: 50, fontStyle: "italic", fontWeight: 500,
        color: forest, margin: "16px 0 0 0", lineHeight: 1.25, maxWidth: 820,
      }}>
        Kim staged the living room with her own furniture. She picked up the
        phone every Saturday at 7am. We had three offers in eight days, all
        over list. She is the real one.
      </p>

      <div style={{ height: 1, background: "rgba(0,0,0,.15)", margin: "44px 0 24px 0", width: 200 }} />

      <p style={{
        fontFamily: FONT.body, fontSize: 18, fontWeight: 600,
        color: C.text, margin: 0, letterSpacing: "1px",
      }}>
        — Linda &amp; Tom R., Lake Stevens sellers
      </p>
      <p style={{
        fontFamily: FONT.body, fontSize: 14, fontWeight: 500,
        color: C.textMuted, margin: "8px 0 0 0", letterSpacing: "2px",
        textTransform: "uppercase",
      }}>
        Closed 4.6% over list · 8 days on market
      </p>

      {/* Bottom stamp + CTA */}
      <div style={{
        position: "absolute", left: 90, right: 90, bottom: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Wordmark size={0.9} />
        <p style={{ fontFamily: FONT.hand, fontSize: 32, color: clay, margin: 0 }}>
          read more reviews →
        </p>
      </div>
    </div>
  );
}

/* register */
[
  { id: "ig-feed-listing-portrait", group: "ig-feed", name: "Listing — bottom-stack",
    tier: 1, width: 1080, height: 1350, note: "for every new listing", render: IgFeedListing,
    surfaceBg: "#000", tags: ["listing", "tier1"] },
  { id: "ig-feed-stat-card", group: "ig-feed", name: "Stat card — sale-to-list",
    tier: 1, width: 1080, height: 1350, note: "broker authority post",
    render: IgFeedStat, surfaceBg: C.cream, tags: ["stat", "tier1"] },
  { id: "ig-feed-comparison", group: "ig-feed", name: "Comparison — Seattle vs Snoco",
    tier: 1, width: 1080, height: 1350, note: "extremely high CTR",
    render: IgFeedComparison, surfaceBg: C.cream, tags: ["comparison", "tier1"] },
  { id: "ig-feed-testimonial", group: "ig-feed", name: "Testimonial — quote",
    tier: 1, width: 1080, height: 1350, note: "social proof",
    render: IgFeedTestimonial, surfaceBg: C.cream, tags: ["testimonial", "tier1"] },
].forEach(window.registerTemplate);

/*
  ig-story.jsx — Instagram Story templates (1080 × 1920 vertical).
  Each template is a 3-frame sequence, rendered side-by-side so users see
  the whole carousel. Total stage width = 3 × 1080 + 2 × 40 gap = 3320.
*/

const FRAME_W = 1080, FRAME_H = 1920;
const STORY_TOTAL_W = FRAME_W * 3 + 80;  // 80 = 2 × 40 gap

function StoryFrame({ children, label, idx }) {
  return (
    <div style={{
      position: "relative", width: FRAME_W, height: FRAME_H,
      overflow: "hidden", background: "#000",
    }}>
      {children}
      {/* Frame number badge */}
      <div style={{
        position: "absolute", top: 40, right: 40, zIndex: 30,
        width: 56, height: 56, borderRadius: "50%",
        background: "rgba(0,0,0,.45)",
        color: "#fff", fontFamily: FONT.body, fontSize: 24, fontWeight: 700,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "2px solid rgba(255,255,255,.6)",
      }}>{idx}</div>
      {/* Frame label below */}
      {label && (
        <div style={{
          position: "absolute", bottom: -52, left: 0, right: 0,
          textAlign: "center",
          fontFamily: FONT.body, fontSize: 22, fontWeight: 600,
          letterSpacing: "3px", textTransform: "uppercase",
          color: "#777",
        }}>{label}</div>
      )}
    </div>
  );
}

function StoryStrip({ children }) {
  return (
    <div style={{
      width: STORY_TOTAL_W, height: FRAME_H + 80,
      display: "flex", gap: 40, alignItems: "flex-start",
      paddingBottom: 60, background: "transparent",
    }}>
      {children}
    </div>
  );
}

/* Simulated IG story top — progress bars + handle */
function StoryChrome({ active = 0, total = 3 }) {
  return (
    <div style={{
      position: "absolute", top: 32, left: 32, right: 32, zIndex: 25,
      display: "flex", gap: 6,
    }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          flex: 1, height: 3, borderRadius: 2,
          background: i < active ? "#fff" : i === active ? "#fff" : "rgba(255,255,255,.35)",
          opacity: i === active ? 1 : (i < active ? .9 : 1),
        }} />
      ))}
    </div>
  );
}

/* ── ig-story-3frame-listing ──────────────────────────────────── */
function IgStoryListing({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;

  return (
    <StoryStrip>
      {/* Frame 1: Hook */}
      <StoryFrame idx={1} label="hook frame">
        <StoryChrome active={0} />
        <div style={{
          position: "absolute", inset: 0,
          background: forest, backgroundImage: FOREST_TEXTURE,
        }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 100px",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",
        }}>
          <Handwritten color={clay} size={68} rotate={-3} style={{ marginBottom: 40 }}>
            psst —
          </Handwritten>
          <h1 style={{
            fontFamily: FONT.heading, fontSize: 120, fontWeight: 700,
            color: "#fff", margin: 0, lineHeight: 1.05,
          }}>
            Mukilteo just got<br/>
            <em style={{ color: clay, fontStyle: "italic" }}>this view</em>
          </h1>
          <p style={{
            fontFamily: FONT.body, fontSize: 28, color: "rgba(255,255,255,.85)",
            margin: "60px 0 0 0", letterSpacing: "3px", textTransform: "uppercase",
          }}>swipe →</p>
        </div>
      </StoryFrame>

      {/* Frame 2: Property photo with details */}
      <StoryFrame idx={2} label="property frame">
        <StoryChrome active={1} />
        <img src={listing.exterior} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.1) 25%, rgba(0,0,0,.1) 50%, rgba(0,0,0,.92) 100%)",
        }} />
        <div style={{ position: "absolute", left: 80, bottom: 220, right: 80, color: "#fff" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 22, fontWeight: 700, letterSpacing: "5px", color: clay, margin: "0 0 16px 0", textTransform: "uppercase" }}>
            {listing.cityShort}, WA
          </p>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 96, fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.0 }}>
            {listing.address}
          </h2>
          <p style={{ fontFamily: FONT.heading, fontSize: 68, fontWeight: 700, color: "#fff", margin: "32px 0 0 0", lineHeight: 1 }}>
            {listing.price}
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 32 }}>
            {[
              { v: listing.beds, l: "Bed" },
              { v: listing.baths, l: "Bath" },
              { v: listing.sqft, l: "Sqft" },
            ].map(s => (
              <div key={s.l}>
                <p style={{ fontFamily: FONT.heading, fontSize: 44, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1 }}>{s.v}</p>
                <p style={{ fontFamily: FONT.body, fontSize: 16, color: "rgba(255,255,255,.7)", letterSpacing: "2px", textTransform: "uppercase", margin: "8px 0 0 0" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </StoryFrame>

      {/* Frame 3: CTA with link sticker mock */}
      <StoryFrame idx={3} label="cta frame">
        <StoryChrome active={2} />
        <img src={listing.view} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.6)" }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 100px",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",
        }}>
          <p style={{ fontFamily: FONT.hand, fontSize: 56, color: "#fff", margin: "0 0 40px 0" }}>
            walk through it →
          </p>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 88, fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.05 }}>
            Open House<br/>
            <em style={{ fontStyle: "italic", color: clay }}>this Saturday</em>
          </h2>
          <p style={{ fontFamily: FONT.body, fontSize: 30, color: "rgba(255,255,255,.92)", margin: "40px 0 0 0" }}>
            {listing.openHouse.date} · {listing.openHouse.time}
          </p>

          {/* Link sticker */}
          <div style={{
            marginTop: 64, padding: "20px 36px",
            background: "rgba(255,255,255,.95)", borderRadius: 8,
            display: "inline-flex", alignItems: "center", gap: 14,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={forest} strokeWidth="2.2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
            <span style={{ fontFamily: FONT.body, fontSize: 28, fontWeight: 700, color: forest, letterSpacing: "1px" }}>
              SEE THE LISTING
            </span>
          </div>
        </div>
      </StoryFrame>
    </StoryStrip>
  );
}

/* ── ig-story-3frame-market ──────────────────────────────────── */
function IgStoryMarket({ tweaks }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;

  return (
    <StoryStrip>
      <StoryFrame idx={1} label="hook frame">
        <StoryChrome active={0} />
        <div style={{ position: "absolute", inset: 0, background: C.cream, backgroundImage: PAPER_NOISE }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 100px",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <p style={{ fontFamily: FONT.body, fontSize: 22, fontWeight: 700, letterSpacing: "5px", color: clay, margin: 0, textTransform: "uppercase" }}>
            May Market Check-in
          </p>
          <div style={{ height: 4, width: 80, background: clay, margin: "32px 0 40px 0" }} />
          <h1 style={{ fontFamily: FONT.heading, fontSize: 116, fontWeight: 700, color: forest, margin: 0, lineHeight: 1.0 }}>
            What I am watching<br/>this <em style={{ color: clay, fontStyle: "italic" }}>spring</em>
          </h1>
          <p style={{ fontFamily: FONT.hand, fontSize: 40, color: C.textLight, margin: "60px 0 0 0" }}>
            three things, take a minute →
          </p>
        </div>
      </StoryFrame>

      <StoryFrame idx={2} label="stat frame">
        <StoryChrome active={1} />
        <div style={{ position: "absolute", inset: 0, background: forest, backgroundImage: FOREST_TEXTURE }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 80px",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          {[
            { n: "$849K", l: "Snoco median sale price", q: "↑ 3.2% YoY" },
            { n: "12", l: "Median days on market", q: "down from 18 last year" },
            { n: "102.3%", l: "Sale-to-list (my listings)", q: "vs 100.2% county avg" },
          ].map((s, i) => (
            <div key={i} style={{
              padding: "32px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,.15)" : "none",
              display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24,
            }}>
              <div>
                <p style={{ fontFamily: FONT.heading, fontSize: 88, fontWeight: 700, color: clay, margin: 0, lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontFamily: FONT.body, fontSize: 22, color: "rgba(255,255,255,.95)", margin: "12px 0 0 0", lineHeight: 1.3 }}>{s.l}</p>
              </div>
              <p style={{ fontFamily: FONT.hand, fontSize: 32, color: "rgba(255,255,255,.7)", margin: 0, textAlign: "right", maxWidth: 200, lineHeight: 1.1 }}>
                {s.q}
              </p>
            </div>
          ))}
        </div>
      </StoryFrame>

      <StoryFrame idx={3} label="cta frame">
        <StoryChrome active={2} />
        <img src="assets/aerial-neighborhood.jpg" alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.55)" }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 100px",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",
        }}>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 104, fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.05 }}>
            DM me your<br/>
            <em style={{ fontStyle: "italic", color: clay }}>block</em>
          </h2>
          <p style={{ fontFamily: FONT.body, fontSize: 26, color: "rgba(255,255,255,.9)", margin: "44px 0 0 0", lineHeight: 1.5, maxWidth: 700 }}>
            I will send you the actual numbers for what is selling within
            half a mile of your home. No sales pitch.
          </p>
          {/* DM sticker mock */}
          <div style={{
            marginTop: 64, padding: "18px 32px",
            background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)",
            borderRadius: 12,
            color: "#fff", fontFamily: FONT.body, fontSize: 24, fontWeight: 700,
            letterSpacing: "1.5px", textTransform: "uppercase",
          }}>
            Send me your zip →
          </div>
        </div>
      </StoryFrame>
    </StoryStrip>
  );
}

/* ── ig-story-open-house-countdown ──────────────────────────────────── */
function IgStoryOpenHouse({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;

  return (
    <StoryStrip>
      <StoryFrame idx={1} label="countdown frame">
        <StoryChrome active={0} />
        <img src={listing.exterior} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.5)" }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 80px",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",
        }}>
          {/* Faux countdown sticker */}
          <div style={{
            background: "rgba(255,255,255,.92)", borderRadius: 16,
            padding: "32px 48px", marginBottom: 60,
          }}>
            <p style={{ fontFamily: FONT.body, fontSize: 20, fontWeight: 700, letterSpacing: "3px", color: clay, margin: 0, textTransform: "uppercase" }}>
              Open House
            </p>
            <p style={{ fontFamily: FONT.heading, fontSize: 84, fontWeight: 700, color: forest, margin: "12px 0 0 0", lineHeight: 1 }}>
              2d 14h 30m
            </p>
          </div>

          <p style={{ fontFamily: FONT.heading, fontSize: 112, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.0 }}>
            {listing.openHouse.day}
          </p>
          <p style={{ fontFamily: FONT.heading, fontSize: 60, fontStyle: "italic", color: clay, margin: "16px 0 0 0", lineHeight: 1 }}>
            {listing.openHouse.time}
          </p>
        </div>
      </StoryFrame>

      <StoryFrame idx={2} label="address frame">
        <StoryChrome active={1} />
        <div style={{ position: "absolute", inset: 0, background: C.cream, backgroundImage: PAPER_NOISE }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 100px",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <Eyebrow color={clay} size={20}>Walk it with me</Eyebrow>

          <h2 style={{
            fontFamily: FONT.heading, fontSize: 108, fontWeight: 600,
            color: forest, margin: "32px 0 0 0", lineHeight: 1.0,
          }}>
            {listing.address}
          </h2>
          <p style={{
            fontFamily: FONT.body, fontSize: 32, color: C.textLight,
            margin: "32px 0 0 0", letterSpacing: "3px", textTransform: "uppercase",
          }}>{listing.city}</p>

          <div style={{ height: 1, background: "rgba(0,0,0,.15)", margin: "56px 0 40px 0" }} />

          <p style={{
            fontFamily: FONT.heading, fontSize: 36, fontStyle: "italic", color: forest,
            margin: 0, lineHeight: 1.3,
          }}>
            "{listing.hook}"
          </p>

          {/* faux map pin */}
          <div style={{ marginTop: 80, display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill={clay}>
              <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 7.4 12.3a.8.8 0 0 0 1.2 0C13 22 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            <p style={{ fontFamily: FONT.body, fontSize: 24, fontWeight: 600, color: C.textLight, margin: 0, letterSpacing: "1px" }}>
              Olympic Mountain View · 5 min to ferry
            </p>
          </div>
        </div>
      </StoryFrame>

      <StoryFrame idx={3} label="rsvp frame">
        <StoryChrome active={2} />
        <img src={listing.view} alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.85) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, padding: "0 100px",
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center",
        }}>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 96, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.05 }}>
            Coffee will be<br/>
            <em style={{ color: clay, fontStyle: "italic" }}>on the porch</em>
          </h2>

          {/* RSVP sticker mock */}
          <div style={{
            marginTop: 80,
            background: "#fff", borderRadius: 24,
            padding: "8px",
            display: "flex", flexDirection: "column", gap: 0,
            border: `2px solid ${clay}`,
          }}>
            <p style={{ fontFamily: FONT.body, fontSize: 18, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "12px 0 0 0", textAlign: "center" }}>
              RSVP
            </p>
            <p style={{ fontFamily: FONT.heading, fontSize: 40, fontWeight: 600, color: forest, margin: "8px 32px 16px 32px", lineHeight: 1.1 }}>
              Tap if you are coming
            </p>
            <div style={{ display: "flex", gap: 0, borderTop: `1px solid ${C.border}` }}>
              <div style={{ flex: 1, padding: "20px 0", textAlign: "center", borderRight: `1px solid ${C.border}` }}>
                <p style={{ fontFamily: FONT.body, fontSize: 24, fontWeight: 700, color: forest, margin: 0 }}>I'll be there</p>
              </div>
              <div style={{ flex: 1, padding: "20px 0", textAlign: "center" }}>
                <p style={{ fontFamily: FONT.body, fontSize: 24, fontWeight: 700, color: C.textMuted, margin: 0 }}>Maybe</p>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: FONT.hand, fontSize: 36, color: "rgba(255,255,255,.9)", margin: "60px 0 0 0" }}>
            link in bio for directions
          </p>
        </div>
      </StoryFrame>
    </StoryStrip>
  );
}

[
  { id: "ig-story-3frame-listing", group: "ig-story", name: "Listing — 3-frame sequence",
    tier: 1, width: STORY_TOTAL_W, height: FRAME_H + 80, render: IgStoryListing,
    note: "hook → property → CTA", noShadow: true, surfaceBg: "transparent" },
  { id: "ig-story-3frame-market", group: "ig-story", name: "Market check-in — 3-frame",
    tier: 1, width: STORY_TOTAL_W, height: FRAME_H + 80, render: IgStoryMarket,
    note: "hook → 3 stats → DM CTA", noShadow: true, surfaceBg: "transparent" },
  { id: "ig-story-open-house-countdown", group: "ig-story", name: "Open house countdown",
    tier: 1, width: STORY_TOTAL_W, height: FRAME_H + 80, render: IgStoryOpenHouse,
    note: "countdown → address → RSVP", noShadow: true, surfaceBg: "transparent" },
].forEach(window.registerTemplate);

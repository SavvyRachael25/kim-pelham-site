/*
  reels.jsx — Reels covers + Twitter header + FB cover.
*/

/* ── ig-reels-cover 1080×1920 ──────────── */
function ReelsCover({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1080, height: 1920, background: "#000", fontFamily: FONT.body, overflow: "hidden" }}>
      <img src={listing.exterior} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.7)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 30%, rgba(0,0,0,.15) 55%, rgba(0,0,0,.88) 100%)" }} />

      {/* Top — handwritten teaser */}
      <div style={{ position: "absolute", top: 200, left: 80, right: 80, textAlign: "center" }}>
        <Handwritten color={clay} size={84} rotate={-3}>walk through this —</Handwritten>
      </div>

      {/* Center — play button */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 200, height: 200, borderRadius: "50%",
        background: "rgba(255,255,255,.15)", border: "3px solid rgba(255,255,255,.6)",
        display: "flex", alignItems: "center", justifyContent: "center",
        backdropFilter: "blur(8px)",
      }}>
        <div style={{ width: 0, height: 0, borderTop: "40px solid transparent", borderBottom: "40px solid transparent", borderLeft: "64px solid #fff", marginLeft: 18 }} />
      </div>

      {/* Bottom — address + duration */}
      <div style={{ position: "absolute", left: 80, right: 80, bottom: 240, color: "#fff", textAlign: "center" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 22, fontWeight: 700, letterSpacing: "5px", color: clay, margin: 0, textTransform: "uppercase" }}>
          {listing.cityShort}, WA
        </p>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 76, fontWeight: 600, margin: "20px 0 12px 0", lineHeight: 1, color: "#fff" }}>
          {listing.address}
        </h2>
        <p style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 700, color: clay, margin: 0, lineHeight: 1 }}>
          {listing.price}
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 18, color: "rgba(255,255,255,.7)", margin: "32px 0 0 0", letterSpacing: "3px", textTransform: "uppercase" }}>
          0:15 · open Sat 12 – 3
        </p>
      </div>

      <div style={{ position: "absolute", top: 36, left: 36 }}>
        <StampLogo size={64} color="#fff" accent={clay} />
      </div>
    </div>
  );
}

/* ── twitter-header 1500×500 ──────────── */
function TwitterHeader({ tweaks }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1500, height: 500, background: forest, backgroundImage: FOREST_TEXTURE, fontFamily: FONT.body, overflow: "hidden" }}>
      <img src="assets/aerial-neighborhood.jpg" alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35, filter: "saturate(.6)" }} />
      <div style={{ position: "absolute", inset: 0, padding: "60px 80px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <Handwritten color={clay} size={36} rotate={-3}>your neighbor in real estate</Handwritten>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 80, fontWeight: 600, color: "#fff", margin: "16px 0 0 0", lineHeight: 1.0 }}>
            Kim Pelham · <em style={{ color: clay, fontStyle: "italic" }}>The Pelham Group NW</em>
          </h1>
          <p style={{ fontFamily: FONT.body, fontSize: 18, color: "rgba(255,255,255,.8)", margin: "20px 0 0 0", letterSpacing: "2px", textTransform: "uppercase" }}>
            Snohomish County · Everett · Mukilteo · Mill Creek · Bothell · Lake Stevens
          </p>
        </div>
        <StampLogo size={200} color="#fff" accent={clay} />
      </div>
      {/* Center safe zone marker for avatar */}
      <div style={{
        position: "absolute", left: "50%", bottom: 0, transform: "translate(-50%, 50%)",
        width: 200, height: 200, borderRadius: "50%",
        background: "rgba(0,0,0,.0)", border: "4px dashed rgba(255,255,255,.25)",
      }} />
    </div>
  );
}

/* ── fb-cover-image 820×312 ──────────── */
function FbCover({ tweaks }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 820, height: 312, background: C.cream, fontFamily: FONT.body, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1.2fr 1fr" }}>
        <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow color={clay} size={10}>The Pelham Group NW</Eyebrow>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 42, fontWeight: 600, color: forest, margin: "8px 0 0 0", lineHeight: 1.05 }}>
            I don't just sell homes here.<br/>I <em style={{ color: clay, fontStyle: "italic" }}>live</em> here.
          </h1>
          <p style={{ fontFamily: FONT.hand, fontSize: 22, color: clay, margin: "16px 0 0 0" }}>17 years, two clients at a time</p>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="assets/kim-by-water.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: clay }} />
    </div>
  );
}

[
  { id: "ig-reels-cover", group: "reels", name: "Reels cover · 9:16",
    tier: 2, width: 1080, height: 1920, render: ReelsCover, surfaceBg: "#000" },
  { id: "twitter-header", group: "reels", name: "X / Twitter header · 1500×500",
    tier: 2, width: 1500, height: 500, render: TwitterHeader, surfaceBg: "#2F5233" },
  { id: "fb-cover-image", group: "reels", name: "Facebook cover · 820×312",
    tier: 2, width: 820, height: 312, render: FbCover, surfaceBg: C.cream },
].forEach(window.registerTemplate);

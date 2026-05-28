/*
  script.jsx — Video script documents (the doc, not the video).
  Visual style: production-doc / call sheet feel.
*/

const SCRIPT_W = 1000;

function ScriptHeader({ title, kind, duration, aspect, clay, forest, kicker }) {
  return (
    <div style={{ background: forest, backgroundImage: FOREST_TEXTURE, color: "#fff", padding: "36px 48px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "3px", textTransform: "uppercase", margin: 0 }}>
            {kicker}
          </p>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 38, fontWeight: 600, color: "#fff", margin: "8px 0 0 0", lineHeight: 1.1 }}>
            {title}
          </h1>
        </div>
        <Wordmark size={0.7} dark accent={clay} />
      </div>
      <div style={{ display: "flex", gap: 32, margin: "20px 0 0 0", borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: 16 }}>
        {[["KIND", kind], ["DURATION", duration], ["ASPECT", aspect], ["FORMAT", "Captioned"]].map(([k, v]) => (
          <div key={k}>
            <p style={{ fontFamily: FONT.body, fontSize: 9, fontWeight: 700, color: clay, letterSpacing: "2px", margin: 0, textTransform: "uppercase" }}>{k}</p>
            <p style={{ fontFamily: FONT.body, fontSize: 13, color: "#fff", margin: "4px 0 0 0", letterSpacing: ".06em" }}>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Beat({ tc, shot, action, vo, clay, forest, last }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "100px 1.2fr 1.5fr 1.3fr", gap: 18,
      padding: "20px 0", borderBottom: last ? "none" : `1px solid ${C.border}`,
      alignItems: "flex-start",
    }}>
      <div>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>TC</p>
        <p style={{ fontFamily: FONT.body, fontSize: 18, fontWeight: 600, color: forest, margin: "2px 0 0 0", fontFamily: "ui-monospace, SF Mono, monospace" }}>{tc}</p>
      </div>
      <div>
        <p style={{ fontFamily: FONT.body, fontSize: 9, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>Shot</p>
        <p style={{ fontFamily: FONT.heading, fontSize: 16, fontWeight: 600, color: forest, margin: "4px 0 0 0", lineHeight: 1.25 }}>{shot}</p>
      </div>
      <div>
        <p style={{ fontFamily: FONT.body, fontSize: 9, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>Action / Direction</p>
        <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.text, margin: "4px 0 0 0", lineHeight: 1.55 }}>{action}</p>
      </div>
      <div>
        <p style={{ fontFamily: FONT.body, fontSize: 9, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>Voiceover / Caption</p>
        <p style={{ fontFamily: FONT.heading, fontSize: 14, fontStyle: "italic", color: C.text, margin: "4px 0 0 0", lineHeight: 1.55 }}>"{vo}"</p>
      </div>
    </div>
  );
}

/* ── script-listing-reel-30s ──────────── */
function ScriptListingReel({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  const cityNice = String(listing.cityShort || "").charAt(0) + String(listing.cityShort || "").slice(1).toLowerCase();
  const beats = [
    { tc: "0:00 to 0:03", shot: "Establishing shot", action: "Exterior pull-in or pull-back that reveals the property at its best angle. No music until 0:03.", vo: `${cityNice}. ${listing.beds} bed, ${listing.baths} bath. ${listing.hook}` },
    { tc: "0:03 to 0:08", shot: "Interior cuts x3", action: "Three 1-second cuts of the strongest interior moments. Specs type on-screen.", vo: listing.feature || "Key features. Hold each beat one second." },
    { tc: "0:08 to 0:13", shot: "Static, the moment", action: "Locked tripod on the property's signature space. Captions only.", vo: `(silent) caption: ${listing.valueProps || listing.hook}` },
    { tc: "0:13 to 0:20", shot: "Kim talking head", action: "Kim mid-frame, listing behind her. Direct to camera, conversational, no read.", vo: `Open ${String(listing.openHouse.day).toLowerCase()} ${listing.openHouse.time}. ${listing.openHouseTagline}. Bring whoever has a vote.` },
    { tc: "0:20 to 0:26", shot: "B-roll cuts x4", action: "Detail cuts that show what the listing photos can't: texture, light, scale, transitions.", vo: `${listing.address}, ${cityNice}. ${listing.price}.` },
    { tc: "0:26 to 0:30", shot: "Kim closer + URL", action: "Kim laughs at end. Logo + URL types in. Hold black for 0.5s post-CTA.", vo: "I'm Kim Pelham. Your neighbor in real estate." },
  ];

  return (
    <div style={{ width: SCRIPT_W, background: C.cream, fontFamily: FONT.body, color: C.text }}>
      <ScriptHeader
        kicker="Listing Reel · For Marco / Nico"
        title={`${listing.address} · 30-Sec Walk Reel`}
        kind="Listing Reel" duration="0:30" aspect="9:16 (1080×1920)"
        clay={clay} forest={forest}
      />

      {/* Logline */}
      <div style={{ padding: "32px 48px 0" }}>
        <Eyebrow color={clay} size={11}>Logline</Eyebrow>
        <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: forest, margin: "8px 0 0 0", lineHeight: 1.5 }}>
          A Snohomish County agent who lives in the neighborhood she sells in walks
          you through {listing.address} in thirty seconds. {listing.hook}
        </p>
      </div>

      {/* Goals + safe zones */}
      <div style={{ padding: "24px 48px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "20px 22px" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>Goals</p>
          <ul style={{ fontFamily: FONT.body, fontSize: 13, color: C.text, lineHeight: 1.65, margin: "10px 0 0 0", paddingLeft: 18 }}>
            <li>Stop the scroll at 0:00 with the drone pull-back.</li>
            <li>Land the price + address by 0:20.</li>
            <li>Convert at 0:26 — Kim's face is the call to action.</li>
          </ul>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "20px 22px" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>Captions / Lower-third</p>
          <ul style={{ fontFamily: FONT.body, fontSize: 13, color: C.text, lineHeight: 1.65, margin: "10px 0 0 0", paddingLeft: 18 }}>
            <li>Every VO line captioned. White on translucent black bar.</li>
            <li>Bottom-third safe area only (don't cover Kim's eyes).</li>
            <li>End frame holds URL for 1.5s before fade.</li>
          </ul>
        </div>
      </div>

      {/* Beats table */}
      <div style={{ padding: "24px 48px 0" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "2px", margin: "0 0 12px 0", textTransform: "uppercase" }}>Shot list · 6 beats</p>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "0 22px" }}>
          {beats.map((b, i) => (
            <Beat key={i} {...b} clay={clay} forest={forest} last={i === beats.length - 1} />
          ))}
        </div>
      </div>

      {/* Equipment + brand */}
      <div style={{ padding: "24px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          <Eyebrow color={clay} size={10}>Kit · estimate</Eyebrow>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.text, lineHeight: 1.7, margin: "8px 0 0 0" }}>
            DJI Mavic 3 · gimbal + 35mm prime · tripod for deck shot ·
            shotgun + lav for Kim · golden hour preferred for outdoor shots.
          </p>
        </div>
        <div>
          <Eyebrow color={clay} size={10}>Brand · do / don't</Eyebrow>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.text, lineHeight: 1.7, margin: "8px 0 0 0" }}>
            Do: natural light, warm grade, Cormorant for any on-screen text, clay accent bar.
            Don't: blue HDR look, sliding text effects, stock real-estate b-roll, exclamation points.
          </p>
        </div>
      </div>

      <div style={{ padding: "0 48px 36px" }}>
        <ComplianceLine variant="tiny" color={C.textFaint} mlsNumber={listing.mls} align="left" />
      </div>
    </div>
  );
}

/* ── script-market-update-reel-60s ──────────── */
function ScriptMarketReel({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  const beats = [
    { tc: "0:00–0:04", shot: "Kim cold open, kitchen", action: "Kim leans toward camera, no intro. Direct hook.", vo: "The Snohomish market just shifted. Three numbers that matter to you this month." },
    { tc: "0:04–0:14", shot: "Stat card #1 + Kim VO", action: "Full-screen text card: '$849K median' with arrow up. Kim continues VO over.", vo: "Median sale is eight forty-nine, up three-point-two percent year over year." },
    { tc: "0:14–0:24", shot: "Stat card #2 + Kim cut-in", action: "'12 days on market' card, then cut to Kim walking aerial neighborhood b-roll.", vo: "Days on market dropped to twelve. The good homes are still moving in two weeks." },
    { tc: "0:24–0:34", shot: "Stat card #3", action: "'+8% inventory' card. Subtle counter animation. Kim VO continues.", vo: "Inventory ticked up eight percent. First real loosening since twenty-twenty-two." },
    { tc: "0:34–0:50", shot: "Kim talking head, porch", action: "Kim on her porch, golden hour. Mid-frame. Looser energy here.", vo: "Here is what that actually means. If you priced for March, you are sitting. If you have been waiting to buy, this is your first real window in a year." },
    { tc: "0:50–0:60", shot: "Kim CTA + URL", action: "Kim laughs slightly. URL types in. End on still of stamp logo for 1s.", vo: "Send me your zip. I'll send back the actual numbers for your half-mile. I'm Kim. Your neighbor in real estate." },
  ];

  return (
    <div style={{ width: SCRIPT_W, background: C.cream, fontFamily: FONT.body, color: C.text }}>
      <ScriptHeader
        kicker="Monthly Market Reel · For Marco / Nico"
        title="May 2026 Market Read · 60-Sec Reel"
        kind="Monthly Reel" duration="0:60" aspect="9:16 (1080×1920)"
        clay={clay} forest={forest}
      />

      <div style={{ padding: "32px 48px 0" }}>
        <Eyebrow color={clay} size={11}>Logline</Eyebrow>
        <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: forest, margin: "8px 0 0 0", lineHeight: 1.5 }}>
          Three data points + one honest read on what they mean. Sixty seconds.
          Authority post — no listing pitch.
        </p>
      </div>

      <div style={{ padding: "24px 48px 8px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "20px 22px" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>The 3 stats</p>
          <ul style={{ fontFamily: FONT.body, fontSize: 13, color: C.text, lineHeight: 1.65, margin: "10px 0 0 0", paddingLeft: 18 }}>
            <li>$849K median sale · ↑ 3.2% YoY</li>
            <li>12 days median DOM · ↓ from 18</li>
            <li>+8% inventory vs April · first loosening since 2022</li>
          </ul>
        </div>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "20px 22px" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "1.5px", margin: 0, textTransform: "uppercase" }}>The takeaway</p>
          <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.text, lineHeight: 1.65, margin: "10px 0 0 0" }}>
            Sellers priced for March are sitting. Buyers finally have a beat to breathe. Strategy
            differential is bigger than ever — that is the wedge for new listing conversations.
          </p>
        </div>
      </div>

      <div style={{ padding: "24px 48px 0" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "2px", margin: "0 0 12px 0", textTransform: "uppercase" }}>Shot list · 6 beats</p>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "0 22px" }}>
          {beats.map((b, i) => (
            <Beat key={i} {...b} clay={clay} forest={forest} last={i === beats.length - 1} />
          ))}
        </div>
      </div>

      <div style={{ padding: "24px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div>
          <Eyebrow color={clay} size={10}>Locations</Eyebrow>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.text, lineHeight: 1.7, margin: "8px 0 0 0" }}>
            Cold open: Kim's kitchen, morning light. Mid-piece: walking shots in Everett. Close: Kim's porch, golden hour.
            One shoot day, two locations.
          </p>
        </div>
        <div>
          <Eyebrow color={clay} size={10}>Wardrobe + tone</Eyebrow>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.text, lineHeight: 1.7, margin: "8px 0 0 0" }}>
            Casual — denim + simple top. Boots, not heels. Tone: trusted advisor over coffee, not on a stage.
          </p>
        </div>
      </div>

      <div style={{ padding: "0 48px 36px" }}>
        <ComplianceLine variant="tiny" color={C.textFaint} mlsNumber={listing.mls} align="left" />
      </div>
    </div>
  );
}

[
  { id: "script-listing-reel-30s", group: "script", name: "Listing reel · 30s",
    tier: 1, width: SCRIPT_W, height: 1640, render: ScriptListingReel, surfaceBg: C.cream },
  { id: "script-market-update-reel-60s", group: "script", name: "Monthly market reel · 60s",
    tier: 1, width: SCRIPT_W, height: 1680, render: ScriptMarketReel, surfaceBg: C.cream },
].forEach(window.registerTemplate);

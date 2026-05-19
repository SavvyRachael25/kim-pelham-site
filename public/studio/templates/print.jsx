/*
  print.jsx — Print templates (8.5×11 in, 816×1056 @ 96dpi).
*/

const LETTER_W = 816, LETTER_H = 1056;

/* ── flyer-open-house ──────────── */
function FlyerOpenHouse({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: LETTER_W, height: LETTER_H, background: "#fff", fontFamily: FONT.body, overflow: "hidden" }}>
      {/* Hero photo — top 60% */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 0.55 * LETTER_H, overflow: "hidden" }}>
        <img src={listing.exterior} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 50%, rgba(0,0,0,.8) 100%)" }} />
        <div style={{ position: "absolute", top: 24, left: 24, background: clay, color: "#fff", padding: "8px 14px", fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
          Open House · {listing.openHouse.day}
        </div>
        <div style={{ position: "absolute", top: 24, right: 24 }}>
          <StampLogo size={64} color="#fff" accent={clay} />
        </div>
        <div style={{ position: "absolute", left: 24, right: 24, bottom: 18, color: "#fff", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 12, letterSpacing: "2px", margin: 0, fontWeight: 700, textTransform: "uppercase" }}>
            {listing.city}
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 11, color: "rgba(255,255,255,.85)", margin: 0, letterSpacing: ".06em" }}>
            MLS #{listing.mls}
          </p>
        </div>
      </div>

      {/* Bottom area */}
      <div style={{ position: "absolute", top: 0.55 * LETTER_H, left: 0, right: 0, bottom: 0, padding: "24px 36px 18px", display: "flex", flexDirection: "column" }}>
        <Handwritten color={clay} size={22} rotate={-2}>walk it with me —</Handwritten>
        <h1 style={{ fontFamily: FONT.heading, fontSize: 44, fontWeight: 600, color: forest, margin: "8px 0 4px 0", lineHeight: 1.05 }}>
          {listing.address}
        </h1>
        <p style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 700, color: clay, margin: "4px 0 0 0", lineHeight: 1 }}>
          {listing.price}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, margin: "20px 0 0 0", textAlign: "center" }}>
          {[
            { v: listing.beds, l: "Bed" },
            { v: listing.baths, l: "Bath" },
            { v: listing.sqft, l: "Sqft" },
            { v: listing.lot, l: "Lot" },
          ].map(s => (
            <div key={s.l} style={{ background: C.creamDark, padding: "10px 6px" }}>
              <p style={{ fontFamily: FONT.heading, fontSize: 18, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>{s.v}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 9, color: C.textMuted, margin: "4px 0 0 0", letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.l}</p>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 18, marginTop: 16 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>This {listing.openHouse.day}</p>
            <p style={{ fontFamily: FONT.heading, fontSize: 30, fontWeight: 700, color: forest, margin: "4px 0 0 0", lineHeight: 1 }}>
              {listing.openHouse.date}
            </p>
            <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: clay, margin: "4px 0 12px 0", lineHeight: 1 }}>
              {listing.openHouse.time}
            </p>
            <p style={{ fontFamily: FONT.body, fontSize: 11, color: C.textLight, margin: 0, lineHeight: 1.5 }}>
              Coffee on the upper deck. Disclosures + inspection summary printed. Bring whoever has a vote.
            </p>
          </div>

          {/* QR code mock */}
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 110, height: 110, background: "#fff", border: `1px solid ${C.border}`, padding: 4, position: "relative" }}>
              <svg width="102" height="102" viewBox="0 0 100 100">
                {/* faux QR squares */}
                <rect x="0" y="0" width="100" height="100" fill="#fff" />
                {Array.from({ length: 14 }).map((_, r) =>
                  Array.from({ length: 14 }).map((__, col) => {
                    if ((r * 7 + col * 13 + r * col) % 3 === 0) return (
                      <rect key={r + "-" + col} x={col * 7} y={r * 7} width={6} height={6} fill={forest} />
                    );
                    return null;
                  })
                )}
                <rect x="0" y="0" width="20" height="20" fill="none" stroke={forest} strokeWidth="3" />
                <rect x="6" y="6" width="8" height="8" fill={forest} />
                <rect x="80" y="0" width="20" height="20" fill="none" stroke={forest} strokeWidth="3" />
                <rect x="86" y="6" width="8" height="8" fill={forest} />
                <rect x="0" y="80" width="20" height="20" fill="none" stroke={forest} strokeWidth="3" />
                <rect x="6" y="86" width="8" height="8" fill={forest} />
              </svg>
            </div>
            <p style={{ fontFamily: FONT.body, fontSize: 9, color: C.textMuted, margin: "6px 0 0 0", letterSpacing: "1px", textTransform: "uppercase" }}>scan for the listing</p>
          </div>
        </div>

        {/* Kim sig + footer */}
        <div style={{ borderTop: `1px solid ${C.border}`, marginTop: 16, paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <img src="assets/kim-headshot.jpg" alt="" style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover" }} />
            <div>
              <p style={{ fontFamily: FONT.heading, fontSize: 16, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1 }}>Kim Pelham</p>
              <p style={{ fontFamily: FONT.body, fontSize: 9, color: C.textMuted, margin: "2px 0 0 0", letterSpacing: "1px" }}>(425) 250-9422 · kim@thepelhamgroupnw.com</p>
            </div>
          </div>
          <ComplianceLine variant="chip" color={C.textFaint} mlsNumber={listing.mls} />
        </div>
      </div>
    </div>
  );
}

/* ── flyer-listing-feature-sheet ──────────── */
function FlyerFeatureSheet({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: LETTER_W, height: LETTER_H, background: "#fff", fontFamily: FONT.body, overflow: "hidden" }}>
      {/* Header band */}
      <div style={{ background: forest, backgroundImage: FOREST_TEXTURE, padding: "20px 32px", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontFamily: FONT.body, fontSize: 9, color: clay, letterSpacing: "2px", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>For Sale · {listing.city}</p>
          <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: "#fff", margin: "2px 0 0 0" }}>The Pelham Group <span style={{ color: clay }}>NW</span></p>
        </div>
        <p style={{ fontFamily: FONT.body, fontSize: 10, color: "rgba(255,255,255,.65)", margin: 0, letterSpacing: "1.5px" }}>MLS #{listing.mls}</p>
      </div>

      {/* Big hero */}
      <img src={listing.exterior} alt="" style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />

      {/* Address + price */}
      <div style={{ padding: "16px 32px 8px", borderBottom: `1px solid ${C.border}` }}>
        <h1 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 700, color: forest, margin: 0, lineHeight: 1.1 }}>
          {listing.address}
        </h1>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 8 }}>
          <p style={{ fontFamily: FONT.heading, fontSize: 26, fontWeight: 700, color: clay, margin: 0 }}>{listing.price}</p>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textLight, margin: 0 }}>
            {listing.beds} · {listing.baths} BA · {listing.sqft} sqft · {listing.lot}
          </p>
        </div>
      </div>

      {/* Photo grid + description */}
      <div style={{ padding: "16px 32px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 18 }}>
        <div>
          <Eyebrow color={clay} size={10}>The story</Eyebrow>
          <p style={{ fontFamily: FONT.heading, fontSize: 16, fontStyle: "italic", color: forest, margin: "8px 0 8px 0", lineHeight: 1.4 }}>
            {listing.hook}
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 11, color: C.text, lineHeight: 1.65, margin: 0 }}>
            Fully remodeled 1976 NW Contemporary positioned for the Olympic Mountains. Three decks
            oriented west, quartz waterfall island, walk-in primary, hot tub on the upper deck,
            RV parking. New roof 2022, new windows 2021. Five minutes to the Mukilteo ferry,
            fifteen to Boeing.
          </p>

          <p style={{ fontFamily: FONT.body, fontSize: 9, fontWeight: 700, color: clay, letterSpacing: "1.5px", textTransform: "uppercase", margin: "14px 0 6px 0" }}>Spec sheet</p>
          <div style={{ fontFamily: FONT.body, fontSize: 11, color: C.text }}>
            {[
              ["Year built", "1976 (remodeled 2021)"],
              ["Lot", `${listing.lot} / 0.24 acres`],
              ["HVAC", "Heat pump + radiant floors"],
              ["Roof", "Composition · 2022"],
              ["Schools", "Mukilteo Elem · Kamiak HS"],
              ["Parking", "2-car attached + RV pad"],
              ["Taxes", "$6,840 / yr"],
              ["HOA", "None"],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: `1px dotted ${C.border}` }}>
                <span style={{ color: C.textMuted }}>{k}</span>
                <span style={{ fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[listing.interior, listing.view, listing.living, listing.porch].map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: 140, objectFit: "cover" }} />
          ))}
        </div>
      </div>

      {/* Open house */}
      <div style={{ background: C.creamMint, padding: "10px 32px", margin: "0 32px", borderLeft: `4px solid ${clay}`, display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: clay }} />
        <p style={{ fontFamily: FONT.hand, fontSize: 22, color: C.text, margin: 0 }}>
          Open {listing.openHouse.day.toLowerCase()} {listing.openHouse.date} · {listing.openHouse.time}
        </p>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "12px 32px", borderTop: `4px solid ${clay}`, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <img src="assets/kim-headshot.jpg" alt="" style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover" }} />
          <div>
            <p style={{ fontFamily: FONT.heading, fontSize: 16, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1 }}>Kim Pelham</p>
            <p style={{ fontFamily: FONT.body, fontSize: 9, color: C.textMuted, margin: "2px 0 0 0", letterSpacing: ".06em" }}>
              (425) 250-9422 · kim@thepelhamgroupnw.com · WA #119262
            </p>
          </div>
        </div>
        <ComplianceLine variant="chip" color={C.textFaint} mlsNumber={listing.mls} />
      </div>
    </div>
  );
}

/* ── mailer-postcard-just-listed (6×4 = 576×384) ──────────── */
function PostcardJustListed({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  const W = 1056, H = 576;  // 11×6
  return (
    <div style={{ width: W, height: H, position: "relative", overflow: "hidden", background: "#000", fontFamily: FONT.body }}>
      <img src={listing.exterior} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.4) 50%, rgba(0,0,0,0) 100%)" }} />

      <div style={{ position: "absolute", left: 40, top: 40, bottom: 40, width: "55%", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <Handwritten color={clay} size={42} rotate={-3}>new on your block —</Handwritten>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 72, fontWeight: 600, color: "#fff", margin: "16px 0 0 0", lineHeight: 1.0 }}>
            JUST LISTED<br/>
            <em style={{ color: clay, fontStyle: "italic" }}>{listing.cityShort}</em>
          </h1>
          <p style={{ fontFamily: FONT.body, fontSize: 16, color: "rgba(255,255,255,.85)", margin: "20px 0 0 0", lineHeight: 1.55, maxWidth: 460 }}>
            {listing.beds}, {listing.baths} BA, {listing.sqft} sqft. {listing.hook}
          </p>
        </div>
        <div>
          <p style={{ fontFamily: FONT.heading, fontSize: 44, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1 }}>
            {listing.price}
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: clay, margin: "8px 0 0 0", letterSpacing: "2px", fontWeight: 700, textTransform: "uppercase" }}>
            See it · pelhamgroupnw.com/{listing.mls}
          </p>
        </div>
      </div>

      <div style={{ position: "absolute", right: 40, bottom: 40 }}>
        <StampLogo size={80} color="#fff" accent={clay} />
      </div>
      <div style={{ position: "absolute", right: 40, top: 40, color: "#fff", textAlign: "right" }}>
        <ComplianceLine variant="tiny" color="rgba(255,255,255,.7)" mlsNumber={listing.mls} align="right" />
      </div>
    </div>
  );
}

[
  { id: "flyer-open-house", group: "print", name: "Open house flyer · 8.5×11",
    tier: 2, width: LETTER_W, height: LETTER_H, render: FlyerOpenHouse, surfaceBg: "#fff" },
  { id: "flyer-listing-feature-sheet", group: "print", name: "Listing feature sheet · 8.5×11",
    tier: 2, width: LETTER_W, height: LETTER_H, render: FlyerFeatureSheet, surfaceBg: "#fff" },
  { id: "mailer-postcard-just-listed", group: "print", name: "Postcard · just listed · 11×6",
    tier: 3, width: 1056, height: 576, render: PostcardJustListed, surfaceBg: "#000" },
].forEach(window.registerTemplate);

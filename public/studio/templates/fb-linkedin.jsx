/*
  fb-linkedin.jsx — Facebook + LinkedIn templates.
    fb-post-listing       · 1200×628
    fb-post-market-update · 1200×628
    linkedin-post-hero    · 1200×628
    linkedin-carousel     · 6 slides × 1080×1080 (PDF-style)
*/

/* ── fb-post-listing 1200×628 ──────────── */
function FbPostListing({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1200, height: 628, background: "#000", fontFamily: FONT.body, overflow: "hidden" }}>
      <img src={listing.exterior} alt="" style={{ position: "absolute", inset: 0, width: "60%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "60%", right: 0, background: C.cream, padding: "44px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <Eyebrow color={clay} size={11}>Just Listed · MLS #{listing.mls}</Eyebrow>
          <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: C.textMuted, letterSpacing: "2px", margin: "16px 0 0 0", textTransform: "uppercase" }}>
            {listing.city}
          </p>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 700, color: forest, margin: "8px 0 16px 0", lineHeight: 1.05 }}>
            {listing.address}
          </h2>
          <p style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 700, color: clay, margin: 0, lineHeight: 1 }}>
            {listing.price}
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.textLight, margin: "12px 0 0 0", lineHeight: 1.6, letterSpacing: ".04em" }}>
            {listing.beds} · {listing.baths} BA · {listing.sqft} SQFT · {listing.lot}
          </p>
          <p style={{ fontFamily: FONT.heading, fontSize: 18, fontStyle: "italic", color: forest, margin: "20px 0 0 0", lineHeight: 1.4 }}>
            "{listing.hook}"
          </p>
        </div>
        <div>
          <div style={{ background: clay, color: "#fff", padding: "10px 18px", display: "inline-block",
            fontFamily: FONT.body, fontSize: 12, fontWeight: 700, letterSpacing: "1.5px" }}>OPEN SAT 12 – 3</div>
          <p style={{ fontFamily: FONT.hand, fontSize: 18, color: C.textLight, margin: "12px 0 0 0" }}>coffee on the porch</p>
        </div>
      </div>
      {/* Brand stamp on photo side */}
      <div style={{ position: "absolute", top: 28, left: 28 }}>
        <StampLogo size={64} color="#fff" accent={clay} />
      </div>
      {/* clay corner band */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: clay }} />
    </div>
  );
}

/* ── fb-post-market-update 1200×628 ──────────── */
function FbPostMarket({ tweaks }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1200, height: 628, background: forest, backgroundImage: FOREST_TEXTURE, fontFamily: FONT.body, overflow: "hidden" }}>
      <div style={{ padding: "50px 60px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 50, alignItems: "center", height: "100%" }}>
        <div>
          <Eyebrow color={clay} size={12}>May 2026 · Snohomish County</Eyebrow>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 44, fontWeight: 600, color: "#fff", margin: "12px 0 24px 0", lineHeight: 1.1 }}>
            The market <em style={{ color: clay, fontStyle: "italic" }}>loosened</em>.<br/>The good homes still move in 12 days.
          </h2>
          <p style={{ fontFamily: FONT.body, fontSize: 16, color: "rgba(255,255,255,.85)", margin: 0, lineHeight: 1.55 }}>
            Inventory ticked up 8% from April. Median price up 3.2% YoY. The strategy
            differential is bigger than ever.
          </p>
          <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 14 }}>
            <img src="assets/kim-headshot.jpg" alt="" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover", border: `2px solid ${clay}` }} />
            <div>
              <p style={{ fontFamily: FONT.heading, fontSize: 18, fontStyle: "italic", color: "#fff", margin: 0, lineHeight: 1 }}>Kim Pelham</p>
              <p style={{ fontFamily: FONT.body, fontSize: 11, color: "rgba(255,255,255,.7)", letterSpacing: "1.5px", textTransform: "uppercase", margin: "4px 0 0 0" }}>17 yrs · 102.3% sale-to-list</p>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { n: "$849K", l: "Median sale price" },
            { n: "12", l: "Days on market" },
            { n: "+8%", l: "Inventory vs Apr" },
            { n: "102.3%", l: "Kim's sale-to-list" },
          ].map(s => (
            <div key={s.l} style={{ background: "rgba(0,0,0,.25)", padding: "20px 22px", borderLeft: `3px solid ${clay}` }}>
              <p style={{ fontFamily: FONT.heading, fontSize: 38, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 11, color: "rgba(255,255,255,.75)", letterSpacing: "1.5px", textTransform: "uppercase", margin: "8px 0 0 0", lineHeight: 1.3 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "absolute", top: 24, right: 32 }}>
        <Wordmark size={0.7} dark accent={clay} />
      </div>
    </div>
  );
}

/* ── linkedin-post-hero 1200×628 ──────────── */
function LiPostHero({ tweaks }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1200, height: 628, background: C.cream, fontFamily: FONT.body, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "60px 50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow color={clay} size={11}>Snohomish County Real Estate</Eyebrow>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 600, color: forest, margin: "16px 0 0 0", lineHeight: 1.05 }}>
            I take two clients<br/>at a <em style={{ color: clay, fontStyle: "italic" }}>time</em>.
          </h1>
          <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.textLight, lineHeight: 1.65, margin: "24px 0 0 0" }}>
            That math is not marketing. It is how I deliver a 102.3% sale-to-list
            ratio in a market that averages 100.2%. The difference is presence —
            on the phone, at the showing, in the negotiation.
          </p>
          <div style={{ height: 1, background: "rgba(0,0,0,.15)", margin: "32px 0 16px 0", width: 80 }} />
          <p style={{ fontFamily: FONT.hand, fontSize: 28, color: clay, margin: 0, lineHeight: 1 }}>
            — Kim Pelham
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 11, color: C.textMuted, margin: "6px 0 0 0", letterSpacing: "2px", textTransform: "uppercase" }}>
            17 yrs · 176 closings · SRES Certified
          </p>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="assets/kim-with-laptop.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
          <div style={{ position: "absolute", top: 24, right: 24 }}>
            <AwardRow size={56} />
          </div>
          {/* Stat over photo */}
          <div style={{ position: "absolute", left: 24, bottom: 24, background: "rgba(47,82,51,.92)", color: "#fff", padding: "16px 22px" }}>
            <p style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 700, color: clay, margin: 0, lineHeight: 1 }}>102.3%</p>
            <p style={{ fontFamily: FONT.body, fontSize: 10, color: "rgba(255,255,255,.85)", margin: "6px 0 0 0", letterSpacing: "1.5px", textTransform: "uppercase" }}>Sale-to-list · 12-mo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── linkedin-carousel — 6 slides 1080×1080 ──────────── */
function LiCarouselSlide({ tweaks, idx, children, sectionLabel = "Strategy" }) {
  const clay = tweaks.C_clay;
  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <div style={{ width: 1080, height: 1080, background: C.cream, fontFamily: FONT.body, position: "relative", overflow: "hidden", border: `1px solid ${C.border}` }}>
        {children}
        {/* Page number footer */}
        <div style={{ position: "absolute", left: 60, bottom: 56, right: 60, display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 24, borderTop: `1px solid ${C.border}` }}>
          <Wordmark size={0.65} />
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textMuted, margin: 0, letterSpacing: "2px", textTransform: "uppercase" }}>
            {sectionLabel} · {idx} / 6
          </p>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: 16, fontFamily: FONT.body, fontSize: 16, fontWeight: 600, color: "#777", letterSpacing: "2px", textTransform: "uppercase" }}>
        Slide {idx}
      </p>
    </div>
  );
}

function LiCarousel({ tweaks }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ display: "flex", gap: 24, paddingBottom: 60, alignItems: "flex-start" }}>
      {/* 1 Cover */}
      <LiCarouselSlide tweaks={tweaks} idx={1}>
        <div style={{ position: "absolute", inset: 0, background: forest, backgroundImage: FOREST_TEXTURE }} />
        <div style={{ position: "relative", padding: "80px 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow color={clay} size={16}>A 6-part read · 90 seconds</Eyebrow>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 88, fontWeight: 600, color: "#fff", margin: "32px 0 0 0", lineHeight: 1.0 }}>
            Why my listings clear at <em style={{ color: clay, fontStyle: "italic" }}>102.3%</em><br/>when the market sits at 100.2%
          </h1>
          <p style={{ fontFamily: FONT.body, fontSize: 22, color: "rgba(255,255,255,.8)", margin: "40px 0 0 0", lineHeight: 1.5 }}>
            Five things I do differently. Tested over 176 closings in Snohomish County.
          </p>
          <p style={{ fontFamily: FONT.hand, fontSize: 32, color: clay, margin: "44px 0 0 0" }}>swipe →</p>
        </div>
      </LiCarouselSlide>

      {/* 2 Problem */}
      <LiCarouselSlide tweaks={tweaks} idx={2} sectionLabel="The Problem">
        <div style={{ padding: "80px 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow color={clay} size={14}>The Problem</Eyebrow>
          <p style={{ fontFamily: FONT.body, fontSize: 280, fontWeight: 100, color: clay, margin: 0, lineHeight: 1, fontFamily: FONT.heading, fontStyle: "italic" }}>01</p>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 68, fontWeight: 600, color: forest, margin: "20px 0 0 0", lineHeight: 1.05 }}>
            Most agents juggle 8-12 active clients.<br/>
            <em style={{ color: clay, fontStyle: "italic" }}>You become a number.</em>
          </h2>
          <p style={{ fontFamily: FONT.body, fontSize: 22, color: C.textLight, margin: "32px 0 0 0", lineHeight: 1.5, maxWidth: 880 }}>
            The math: 8 clients × 1 hour Saturday = 8 hours. Your transaction
            gets the slice between someone else's lockbox.
          </p>
        </div>
      </LiCarouselSlide>

      {/* 3 Data */}
      <LiCarouselSlide tweaks={tweaks} idx={3} sectionLabel="The Data">
        <div style={{ padding: "80px 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow color={clay} size={14}>The Data</Eyebrow>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 600, color: forest, margin: "12px 0 32px 0", lineHeight: 1.1 }}>
            My listings, last 12 months
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { n: "102.3%", l: "Avg sale-to-list", note: "vs 100.2% NWMLS" },
              { n: "8 days", l: "Median DOM", note: "vs 18 county avg" },
              { n: "3.4", l: "Offers per listing", note: "median, multi-bid" },
              { n: "94%", l: "Closed at or over list", note: "of my listings 2025" },
            ].map(s => (
              <div key={s.l} style={{ borderLeft: `4px solid ${clay}`, paddingLeft: 24 }}>
                <p style={{ fontFamily: FONT.heading, fontSize: 64, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontFamily: FONT.body, fontSize: 16, fontWeight: 700, color: C.text, margin: "10px 0 4px 0", letterSpacing: "1px", textTransform: "uppercase" }}>{s.l}</p>
                <p style={{ fontFamily: FONT.hand, fontSize: 22, color: clay, margin: 0 }}>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </LiCarouselSlide>

      {/* 4 Insight */}
      <LiCarouselSlide tweaks={tweaks} idx={4} sectionLabel="The Insight">
        <div style={{ padding: "80px 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", background: forest, color: "#fff", backgroundImage: FOREST_TEXTURE }}>
          <Eyebrow color={clay} size={14}>The Insight</Eyebrow>
          <p style={{ fontFamily: FONT.heading, fontSize: 56, fontStyle: "italic", color: "#fff", margin: "32px 0 0 0", lineHeight: 1.3 }}>
            The difference is not skill.<br/>It is <em style={{ color: clay }}>capacity</em>.
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 22, color: "rgba(255,255,255,.85)", margin: "32px 0 0 0", lineHeight: 1.55, maxWidth: 880 }}>
            Two active clients means: I stage every listing myself, I answer the
            Saturday text in five minutes, and I have time to push back when an
            offer is leaving money on the table. That is what makes the basis
            points add up.
          </p>
        </div>
      </LiCarouselSlide>

      {/* 5 Example */}
      <LiCarouselSlide tweaks={tweaks} idx={5} sectionLabel="The Example">
        <div style={{ padding: "80px 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Eyebrow color={clay} size={14}>The Example</Eyebrow>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 48, fontWeight: 600, color: forest, margin: "12px 0 24px 0", lineHeight: 1.1 }}>
            Lake Stevens · $725K list · $758K close
          </h2>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <img src="assets/staging-living-room.jpg" alt="" style={{ width: 360, height: 240, objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: FONT.body, fontSize: 18, color: C.text, lineHeight: 1.65, margin: 0 }}>
                Staged Saturday with my own furniture. Photographer Tuesday.
                MLS Wednesday. Three offers by Sunday. Closed $33,000 over
                list, no appraisal contingency, 22 days from sign to keys.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 32, background: C.creamMint, padding: "20px 22px", borderLeft: `4px solid ${clay}` }}>
            <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1.5 }}>
              "She is the real one." — Linda &amp; Tom R.
            </p>
          </div>
        </div>
      </LiCarouselSlide>

      {/* 6 CTA */}
      <LiCarouselSlide tweaks={tweaks} idx={6} sectionLabel="Talk to Kim">
        <div style={{ padding: "80px 60px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center" }}>
          <Handwritten color={clay} size={36}>thinking about a move?</Handwritten>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 80, fontWeight: 600, color: forest, margin: "20px 0 0 0", lineHeight: 1.05 }}>
            I am taking new clients<br/>for <em style={{ color: clay, fontStyle: "italic" }}>summer 2026</em>
          </h2>
          <p style={{ fontFamily: FONT.body, fontSize: 24, color: C.textLight, margin: "32px 0 0 0", lineHeight: 1.5, maxWidth: 720 }}>
            Twenty-minute call. No pitch, no pressure. We figure out whether I am
            the right person to walk alongside you.
          </p>
          <div style={{ marginTop: 56, background: clay, color: "#fff", padding: "20px 36px",
            fontFamily: FONT.body, fontSize: 22, fontWeight: 700, letterSpacing: "2px" }}>
            BOOK 20 MIN WITH KIM →
          </div>
          <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.textMuted, margin: "20px 0 0 0", letterSpacing: "1px" }}>
            kim@thepelhamgroupnw.com · (425) 250-9422
          </p>
        </div>
      </LiCarouselSlide>
    </div>
  );
}

[
  { id: "fb-post-listing", group: "fb", name: "Listing post · 1200×628",
    tier: 1, width: 1200, height: 628, render: FbPostListing, surfaceBg: "#fff" },
  { id: "fb-post-market-update", group: "fb", name: "Market update · 1200×628",
    tier: 1, width: 1200, height: 628, render: FbPostMarket, surfaceBg: "#2F5233" },
  { id: "linkedin-post-hero", group: "linkedin", name: "Hero post · 1200×628",
    tier: 1, width: 1200, height: 628, render: LiPostHero, surfaceBg: C.cream },
  { id: "linkedin-carousel-slides", group: "linkedin", name: "Thought-leadership carousel · 6 slides",
    tier: 1, width: 1080 * 6 + 24 * 5, height: 1080 + 60, note: "PDF post",
    render: LiCarousel, noShadow: true, surfaceBg: "transparent" },
].forEach(window.registerTemplate);

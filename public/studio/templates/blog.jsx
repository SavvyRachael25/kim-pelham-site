/*
  blog.jsx — Blog post + property-page Next.js route mocks.
*/

const PAGE_W = 1200;

/* Shared site chrome — sticky nav band */
function BlogNav({ clay, forest }) {
  return (
    <div style={{
      width: "100%", background: "rgba(248,245,240,.92)", backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${C.border}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 56px", height: 72,
    }}>
      <Wordmark size={0.75} color={forest} accent={clay} />
      <div style={{ display: "flex", gap: 28 }}>
        {["BUY", "SELL", "PROPERTIES", "NEIGHBORHOODS", "SERVICES", "ABOUT", "CONTACT"].map(l => (
          <span key={l} style={{ fontFamily: FONT.body, fontSize: 12, fontWeight: 500, color: l === "PROPERTIES" ? forest : C.textLight, letterSpacing: "1.5px" }}>
            {l}
          </span>
        ))}
      </div>
      <div style={{ background: forest, color: C.cream, padding: "10px 18px", borderRadius: 2,
        fontFamily: FONT.hand, fontSize: 18 }}>
        Talk to Kim
      </div>
    </div>
  );
}

function BlogFooter({ clay, mlsNumber }) {
  return (
    <div style={{ background: C.dark, color: "#fff", padding: "56px 56px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 56, marginBottom: 36 }}>
        <div>
          <Handwritten color={clay} size={32}>Kim Pelham</Handwritten>
          <p style={{ fontFamily: FONT.hand, fontSize: 18, color: "#999", margin: "4px 0 16px 0" }}>your neighbor in real estate</p>
          <p style={{ fontFamily: FONT.body, fontSize: 13, color: "#bbb", margin: 0, lineHeight: 1.7 }}>
            (425) 250-9422<br/>kim@thepelhamgroupnw.com
          </p>
        </div>
        <div>
          <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>Explore</p>
          {["Buy a Home", "Sell Your Home", "Neighborhoods", "Blog"].map(l => (
            <p key={l} style={{ fontFamily: FONT.body, fontSize: 13, color: "#bbb", margin: "0 0 8px 0" }}>{l}</p>
          ))}
        </div>
        <div>
          <p style={{ fontFamily: FONT.hand, fontSize: 20, color: "#999", margin: 0 }}>recognized &amp; trusted</p>
          <div style={{ marginTop: 12 }}><AwardRow size={52} dark /></div>
        </div>
      </div>
      <div style={{ paddingTop: 28, borderTop: "1px solid #333" }}>
        <ComplianceLine mlsNumber={mlsNumber} color="#aaa" align="left" />
        <p style={{ fontFamily: FONT.body, fontSize: 12, color: "#888", margin: "16px 0 0 0", textAlign: "center" }}>
          © 2026 Kim Pelham · The Pelham Group NW · All rights reserved.
        </p>
      </div>
    </div>
  );
}

/* ── blog-market-update ──────────── */
function BlogMarketUpdate({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ width: PAGE_W, background: C.cream, fontFamily: FONT.body, color: C.text }}>
      <BlogNav clay={clay} forest={forest} />

      {/* Hero */}
      <div style={{ position: "relative", height: 420 }}>
        <img src="assets/aerial-neighborhood.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.4) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, padding: "0 80px", display: "flex", flexDirection: "column", justifyContent: "center", color: "#fff" }}>
          <Eyebrow color={clay} size={11}>Market Update · May 19, 2026</Eyebrow>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 600, color: "#fff", margin: "16px 0 0 0", lineHeight: 1.05, maxWidth: 880 }}>
            Snohomish County · The market <em style={{ fontStyle: "italic", color: clay }}>loosened</em> in May.
          </h1>
          <p style={{ fontFamily: FONT.body, fontSize: 17, color: "rgba(255,255,255,.85)", margin: "20px 0 0 0", maxWidth: 700, lineHeight: 1.55 }}>
            Inventory ticked up 8% from April. Median sale held at $849K. The good listings still
            clear in twelve days, but pricing ego is finally getting punished.
          </p>
        </div>
      </div>

      {/* Article body */}
      <div style={{ padding: "56px 80px 16px", maxWidth: 880 }}>
        <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1.6 }}>
          The short version: inventory loosened, but the median price held. The strategy
          differential between a prepared listing and a wing-it listing is bigger than ever.
        </p>
      </div>

      {/* Stat grid */}
      <div style={{ padding: "32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { n: "$849K", l: "Median sale price", q: "↑ 3.2% YoY" },
            { n: "12", l: "Days on market (med)", q: "↓ from 18 last yr" },
            { n: "+8%", l: "Inventory vs Apr", q: "first real loosening since 2022" },
            { n: "102.3%", l: "Kim's sale-to-list", q: "vs 100.2% county avg" },
          ].map(s => (
            <div key={s.l} style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "20px 22px" }}>
              <p style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: C.text, margin: "8px 0 4px 0", letterSpacing: "1px", textTransform: "uppercase" }}>{s.l}</p>
              <p style={{ fontFamily: FONT.hand, fontSize: 18, color: clay, margin: 0 }}>{s.q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section: Seller read */}
      <div style={{ padding: "40px 80px 0", maxWidth: 880 }}>
        <Eyebrow color={clay} size={11}>For Sellers</Eyebrow>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 600, color: forest, margin: "12px 0 16px 0", lineHeight: 1.15 }}>
          If you priced for March comps, you are sitting.
        </h2>
        <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.text, lineHeight: 1.8, margin: 0 }}>
          Three waterfront listings in Mukilteo closed below their original ask in the
          last three weeks. Two of them adjusted price in week four and were under contract
          by week six. The third is still sitting at the original number, day forty-one.
          The market does not punish the home. It punishes the price.
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.text, lineHeight: 1.8, margin: "16px 0 0 0" }}>
          The honest move: re-pull comps every two weeks while a listing is active. If
          the trend is downward, get ahead of it. Price reductions in week three land
          better than price reductions in week six. Buyers read days-on-market like
          a fear gauge.
        </p>
      </div>

      {/* Section: Buyer read */}
      <div style={{ padding: "32px 80px 0", maxWidth: 880 }}>
        <Eyebrow color={clay} size={11}>For Buyers</Eyebrow>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 600, color: forest, margin: "12px 0 16px 0", lineHeight: 1.15 }}>
          First real window in a year.
        </h2>
        <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.text, lineHeight: 1.8, margin: 0 }}>
          If you are pre-approved and waiting, this is the window where you can actually
          inspect a home, ask for a credit, and walk away if the foundation pings. That
          was not true in October. The good homes still clear in two weeks, but you are
          no longer the one with the gun to your head.
        </p>
      </div>

      {/* Featured listing */}
      <div style={{ padding: "40px 80px 0", maxWidth: 1080 }}>
        <Eyebrow color={clay} size={11}>Featured Listing</Eyebrow>
        <div style={{ display: "flex", gap: 24, background: "#fff", border: `1px solid ${C.border}`, padding: 16, marginTop: 16, alignItems: "center" }}>
          <img src={listing.exterior} alt="" style={{ width: 320, height: 220, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "1.5px", textTransform: "uppercase", margin: 0 }}>{listing.city}</p>
            <h3 style={{ fontFamily: FONT.heading, fontSize: 28, fontWeight: 700, color: C.text, margin: "6px 0", lineHeight: 1.15 }}>{listing.address}</h3>
            <p style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 700, color: forest, margin: 0 }}>{listing.price}</p>
            <p style={{ fontFamily: FONT.heading, fontSize: 16, fontStyle: "italic", color: forest, margin: "8px 0 12px 0" }}>{listing.hook}</p>
            <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.textLight, margin: 0 }}>
              {listing.beds} · {listing.baths} BA · {listing.sqft} sqft · {listing.lot}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ block */}
      <div style={{ padding: "48px 80px 60px", maxWidth: 880 }}>
        <Eyebrow color={clay} size={11}>FAQ · AEO-optimized · FAQPage schema</Eyebrow>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: forest, margin: "12px 0 20px 0" }}>
          What people ask me this month
        </h2>
        {[
          { q: "Is now a good time to sell in Snohomish County?", a: "If you can price for May comps and not March comps, yes. Inventory is up but the median is holding. Good listings still close in twelve days." },
          { q: "What is a normal sale-to-list ratio for Snoco?", a: "100.2% is the May 2026 NWMLS county average. Anything materially above that is a function of strategy, not luck." },
          { q: "How long are homes sitting?", a: "Median days on market is 12, but that hides a wide range. The good stuff goes in a week, the over-priced stuff sits 40+ days." },
        ].map((f, i) => (
          <div key={i} style={{ borderTop: `1px solid ${C.border}`, padding: "16px 0" }}>
            <p style={{ fontFamily: FONT.heading, fontSize: 20, fontWeight: 600, color: forest, margin: 0 }}>{f.q}</p>
            <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.textLight, lineHeight: 1.7, margin: "8px 0 0 0" }}>{f.a}</p>
          </div>
        ))}
      </div>

      {/* Closing CTA */}
      <div style={{ background: forest, backgroundImage: FOREST_TEXTURE, padding: "56px 80px", textAlign: "center" }}>
        <Handwritten color={clay} size={26}>let's talk —</Handwritten>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 600, color: "#fff", margin: "12px 0 0 0", lineHeight: 1.2 }}>
          What is your block actually doing?
        </h2>
        <p style={{ fontFamily: FONT.body, fontSize: 15, color: "rgba(255,255,255,.85)", margin: "16px auto 24px", maxWidth: 600 }}>
          I will send you the comps for the half-mile around your address. No pitch, just numbers.
        </p>
        <div style={{ background: clay, color: "#fff", padding: "14px 24px", display: "inline-block", fontFamily: FONT.body, fontSize: 13, fontWeight: 700, letterSpacing: "2px" }}>
          GET YOUR NEIGHBORHOOD COMPS
        </div>
      </div>

      <BlogFooter clay={clay} mlsNumber={listing.mls} />
    </div>
  );
}

/* ── blog-listing-feature ──────────── */
function BlogListingFeature({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ width: PAGE_W, background: C.cream, fontFamily: FONT.body, color: C.text }}>
      <BlogNav clay={clay} forest={forest} />

      <div style={{ padding: "40px 80px 20px", maxWidth: 880 }}>
        <Eyebrow color={clay} size={11}>Listing Story · May 2026 · {listing.cityShort}</Eyebrow>
        <h1 style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 600, color: forest, margin: "16px 0 0 0", lineHeight: 1.05 }}>
          A view you buy <em style={{ color: clay, fontStyle: "italic" }}>once</em> — inside {listing.address}.
        </h1>
        <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.textMuted, margin: "16px 0 0 0", letterSpacing: ".04em" }}>
          By Kim Pelham · 6 min read · MLS #{listing.mls}
        </p>
      </div>

      <div style={{ padding: "0 80px" }}>
        <img src={listing.exterior} alt="" style={{ width: "100%", height: 440, objectFit: "cover", display: "block" }} />
      </div>

      <div style={{ padding: "40px 80px 0", maxWidth: 880 }}>
        <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1.6 }}>
          {listing.hook}
        </p>

        <h2 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: forest, margin: "40px 0 16px 0" }}>
          The house, plainly stated
        </h2>
        <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.text, lineHeight: 1.8, margin: 0 }}>
          {listing.beds} {Number.parseFloat(listing.beds) === 1 ? "bedroom" : "bedrooms"},
          {" "}{listing.baths} baths, {listing.sqft} square feet, {listing.lot}.
        </p>

        <h2 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: forest, margin: "32px 0 16px 0" }}>
          What you actually buy here
        </h2>

        {/* Photo grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, margin: "0 0 24px 0" }}>
          <img src={listing.interior} alt="" style={{ width: "100%", height: 240, objectFit: "cover" }} />
          <img src={listing.living} alt="" style={{ width: "100%", height: 240, objectFit: "cover" }} />
          <img src={listing.view} alt="" style={{ width: "100%", height: 240, objectFit: "cover" }} />
          <img src={listing.porch} alt="" style={{ width: "100%", height: 240, objectFit: "cover" }} />
        </div>

        <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.text, lineHeight: 1.8, margin: 0 }}>
          {listing.description}
        </p>

        <h2 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: forest, margin: "32px 0 16px 0" }}>
          The numbers
        </h2>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "20px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, textAlign: "center" }}>
            {[
              { v: listing.price, l: "List Price" },
              { v: listing.beds, l: "Bedrooms" },
              { v: listing.baths, l: "Baths" },
              { v: listing.sqft, l: "Sqft" },
            ].map(s => (
              <div key={s.l}>
                <p style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>{s.v}</p>
                <p style={{ fontFamily: FONT.body, fontSize: 10, color: C.textMuted, margin: "6px 0 0 0", letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "40px 80px 60px" }}>
        <div style={{ background: forest, backgroundImage: FOREST_TEXTURE, color: "#fff", padding: "36px 40px", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
          <div>
            <Handwritten color={clay} size={28}>come walk it —</Handwritten>
            <h3 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: "#fff", margin: "8px 0 0 0", lineHeight: 1.2 }}>
              Open {listing.openHouse.day}, {listing.openHouse.date} · {listing.openHouse.time}
            </h3>
            <p style={{ fontFamily: FONT.body, fontSize: 14, color: "rgba(255,255,255,.8)", margin: "12px 0 0 0", lineHeight: 1.5 }}>
              {listing.openHouseTagline}. Bring whoever has a vote in your decision.
            </p>
          </div>
          <div style={{ background: clay, color: "#fff", padding: "16px 24px", fontFamily: FONT.body, fontSize: 14, fontWeight: 700, letterSpacing: "1.5px" }}>
            RSVP →
          </div>
        </div>
      </div>

      <BlogFooter clay={clay} mlsNumber={listing.mls} />
    </div>
  );
}

/* ── property-page-active ──────────── */
function PropertyPageActive({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ width: PAGE_W, background: C.cream, fontFamily: FONT.body, color: C.text }}>
      <BlogNav clay={clay} forest={forest} />

      {/* Hero photo */}
      <div style={{ position: "relative", height: 560 }}>
        <img src={listing.exterior} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: 24, left: 24, background: forest, color: "#fff", padding: "8px 14px", fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
          Active · For Sale
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "32px 56px", background: "linear-gradient(180deg, transparent, rgba(0,0,0,.7))", color: "#fff" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: clay, margin: 0, textTransform: "uppercase" }}>{listing.city} · MLS #{listing.mls}</p>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 48, fontWeight: 600, color: "#fff", margin: "8px 0 0 0", lineHeight: 1.05 }}>
            {listing.address}
          </h1>
        </div>
      </div>

      {/* Price + stats bar */}
      <div style={{ background: "#fff", padding: "24px 56px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ fontFamily: FONT.heading, fontSize: 40, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>{listing.price}</p>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textMuted, margin: "6px 0 0 0", letterSpacing: ".06em" }}>
            $374/sqft · {listing.lot} lot
          </p>
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {[
            { v: listing.beds, l: "Bed" },
            { v: listing.baths, l: "Bath" },
            { v: listing.sqft, l: "Sqft" },
            { v: (listing.specSheet && listing.specSheet[0] && (String(listing.specSheet[0][1]).match(/\d{4}/) || [""])[0]) || "—", l: "Built" },
          ].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: FONT.heading, fontSize: 22, fontWeight: 700, color: C.text, margin: 0, lineHeight: 1 }}>{s.v}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 9, color: C.textFaint, margin: "6px 0 0 0", letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.l}</p>
            </div>
          ))}
        </div>
        <div style={{ background: clay, color: "#fff", padding: "12px 22px", fontFamily: FONT.body, fontSize: 13, fontWeight: 700, letterSpacing: "1.5px" }}>
          REQUEST A SHOWING
        </div>
      </div>

      {/* Open house banner */}
      <div style={{ background: C.creamMint, padding: "20px 56px", display: "flex", alignItems: "center", gap: 16, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: clay }} />
        <p style={{ fontFamily: FONT.hand, fontSize: 24, color: C.text, margin: 0 }}>
          Open {listing.openHouse.day.toLowerCase()} {listing.openHouse.date} · {listing.openHouse.time}
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 12, fontWeight: 700, color: forest, letterSpacing: "1.5px", margin: "0 0 0 auto", textTransform: "uppercase" }}>
          ADD TO CALENDAR →
        </p>
      </div>

      {/* Gallery thumbs */}
      <div style={{ padding: "32px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {[listing.interior, listing.living, listing.view, listing.porch].map((src, i) => (
            <img key={i} src={src} alt="" style={{ width: "100%", height: 180, objectFit: "cover" }} />
          ))}
        </div>
        <p style={{ fontFamily: FONT.body, fontSize: 11, color: C.textMuted, margin: "12px 0 0 0", letterSpacing: ".06em" }}>
          24 photos · 1 floorplan · video walkthrough
        </p>
      </div>

      {/* Description */}
      <div style={{ padding: "20px 56px 0", maxWidth: 880 }}>
        <Eyebrow color={clay} size={11}>About this home</Eyebrow>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 36, fontStyle: "italic", color: forest, margin: "12px 0 16px 0", lineHeight: 1.2 }}>
          {listing.hook}
        </h2>
        <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.text, lineHeight: 1.8, margin: 0 }}>
          {listing.description}
        </p>
      </div>

      {/* Spec table */}
      <div style={{ padding: "32px 56px 0", maxWidth: 880 }}>
        <h3 style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 600, color: forest, margin: "0 0 16px 0" }}>The spec sheet</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
          {listing.specSheet.map(([k, v], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
              <span style={{ fontFamily: FONT.body, fontSize: 13, color: C.textMuted, letterSpacing: ".06em" }}>{k}</span>
              <span style={{ fontFamily: FONT.body, fontSize: 13, fontWeight: 600, color: C.text }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact strip */}
      <div style={{ padding: "32px 56px", margin: "20px 56px 40px", background: "#fff", border: `1px solid ${C.border}`, display: "flex", gap: 24, alignItems: "center" }}>
        <img src="assets/kim-headshot.jpg" alt="" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }} />
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: FONT.heading, fontSize: 24, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1 }}>Listed by Kim Pelham</p>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textMuted, margin: "6px 0 0 0", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            The Pelham Group NW · WA Broker #119262
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.textLight, margin: "8px 0 0 0" }}>
            (425) 250-9422 · kim@thepelhamgroupnw.com
          </p>
        </div>
        <div style={{ background: clay, color: "#fff", padding: "14px 24px", fontFamily: FONT.body, fontSize: 13, fontWeight: 700, letterSpacing: "1.5px" }}>
          TEXT KIM
        </div>
      </div>

      <BlogFooter clay={clay} mlsNumber={listing.mls} />
    </div>
  );
}

/* ── property-page-just-sold ──────────── */
function PropertyPageSold({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <div style={{ width: PAGE_W, background: C.cream, fontFamily: FONT.body, color: C.text }}>
      <BlogNav clay={clay} forest={forest} />

      <div style={{ position: "relative", height: 480 }}>
        <img src="assets/staging-living-room.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%) brightness(.85)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ transform: "rotate(-8deg)", border: "6px solid #fff", padding: "16px 44px", background: "rgba(26,26,26,.55)", color: "#fff",
            fontFamily: FONT.heading, fontSize: 96, fontWeight: 700, letterSpacing: "0.08em", boxShadow: "0 4px 16px rgba(0,0,0,.4)" }}>
            SOLD
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "24px 56px", background: "linear-gradient(180deg, transparent, rgba(0,0,0,.7))", color: "#fff" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: clay, margin: 0, textTransform: "uppercase" }}>Closed March 2026 · LAKE STEVENS, WA</p>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 44, fontWeight: 600, color: "#fff", margin: "6px 0 0 0", lineHeight: 1.05 }}>
            9117 24th Street SE
          </h1>
        </div>
      </div>

      <div style={{ background: forest, color: "#fff", padding: "32px 56px", backgroundImage: FOREST_TEXTURE }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
          {[
            { n: "$758,000", l: "Sold price", note: "from $725,000 list" },
            { n: "+4.6%", l: "Over list", note: "$33,000 win for sellers" },
            { n: "8 days", l: "On market", note: "3 offers received" },
            { n: "22 days", l: "Sign to keys", note: "no appraisal contingency" },
          ].map(s => (
            <div key={s.l}>
              <p style={{ fontFamily: FONT.heading, fontSize: 38, fontWeight: 700, color: clay, margin: 0, lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 11, color: "#fff", margin: "8px 0 4px 0", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 700 }}>{s.l}</p>
              <p style={{ fontFamily: FONT.hand, fontSize: 18, color: "rgba(255,255,255,.7)", margin: 0 }}>{s.note}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "44px 56px 0", maxWidth: 880 }}>
        <Eyebrow color={clay} size={11}>The Closing Story</Eyebrow>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: forest, margin: "12px 0 16px 0", lineHeight: 1.2 }}>
          22 days from staging to keys, in their words.
        </h2>
        <p style={{ fontFamily: FONT.body, fontSize: 16, color: C.text, lineHeight: 1.8, margin: 0 }}>
          Linda and Tom had a smaller place lined up in Edmonds — a downsizer with a hard
          closing deadline. We had three weeks to land an offer or they lost the
          replacement property. I staged with my own pieces on Saturday, photographer
          Tuesday, on MLS Wednesday. By Sunday we had three offers. The winning bid
          waived appraisal and inspection contingencies.
        </p>
      </div>

      <div style={{ padding: "32px 56px 0", maxWidth: 880 }}>
        <div style={{ background: C.creamMint, padding: "28px 32px", borderLeft: `4px solid ${clay}` }}>
          <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1.5 }}>
            "Kim staged the living room with her own furniture. She picked up the phone
            every Saturday at 7 a.m. We had three offers in eight days, all over list.
            She is the real one."
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textLight, margin: "12px 0 0 0", letterSpacing: ".06em" }}>
            — Linda &amp; Tom R., Lake Stevens sellers
          </p>
        </div>
      </div>

      <div style={{ padding: "48px 56px 60px" }}>
        <div style={{ background: forest, backgroundImage: FOREST_TEXTURE, color: "#fff", padding: "36px 40px", textAlign: "center" }}>
          <Handwritten color={clay} size={26}>thinking about a move?</Handwritten>
          <h3 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: "#fff", margin: "12px 0 0 0", lineHeight: 1.2 }}>
            Two clients at a time. June is filling.
          </h3>
          <p style={{ fontFamily: FONT.body, fontSize: 14, color: "rgba(255,255,255,.85)", margin: "16px auto 24px", maxWidth: 600 }}>
            Twenty-minute call. No pitch. We figure out whether I am the right person to walk alongside you.
          </p>
          <div style={{ background: clay, color: "#fff", padding: "14px 24px", display: "inline-block", fontFamily: FONT.body, fontSize: 13, fontWeight: 700, letterSpacing: "2px" }}>
            BOOK 20 MIN WITH KIM
          </div>
        </div>
      </div>

      <BlogFooter clay={clay} mlsNumber={listing.mls} />
    </div>
  );
}

[
  { id: "blog-market-update", group: "blog", name: "Market update (blog)",
    tier: 1, width: PAGE_W, height: 2820, render: BlogMarketUpdate, surfaceBg: C.cream },
  { id: "blog-listing-feature", group: "blog", name: "Listing feature (blog)",
    tier: 1, width: PAGE_W, height: 2600, render: BlogListingFeature, surfaceBg: C.cream },
  { id: "property-page-active", group: "blog", name: "Property page — Active",
    tier: 1, width: PAGE_W, height: 2400, render: PropertyPageActive, surfaceBg: C.cream },
  { id: "property-page-just-sold", group: "blog", name: "Property page — Sold",
    tier: 1, width: PAGE_W, height: 2160, render: PropertyPageSold, surfaceBg: C.cream },
].forEach(window.registerTemplate);

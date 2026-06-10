/*
  meta-ad.jsx — Meta (Facebook/Instagram) ad creative templates.
  These are the formats that drive paid performance for real estate.
*/

/* ─── Shared bug/badge primitives ─── */

function ListingBug({ city, price, spec, clay, side = "left" }) {
  return (
    <div style={{
      position: "absolute", bottom: 40,
      [side]: 40,
      background: "rgba(0,0,0,.55)",
      padding: "16px 22px",
      borderLeft: `4px solid ${clay}`,
      color: "#fff", fontFamily: FONT.body,
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "3px", color: clay, margin: 0, textTransform: "uppercase" }}>
        {city}
      </p>
      <p style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 700, color: "#fff", margin: "4px 0 4px 0", lineHeight: 1 }}>
        {price}
      </p>
      <p style={{ fontSize: 12, color: "rgba(255,255,255,.8)", margin: 0, letterSpacing: ".06em" }}>
        {spec}
      </p>
    </div>
  );
}

function ForSaleBadge({ label = "FOR SALE", clay, side = "right" }) {
  return (
    <div style={{
      position: "absolute", top: 40,
      [side]: 40,
      background: clay, color: "#fff",
      padding: "10px 18px",
      fontFamily: FONT.body, fontSize: 13, fontWeight: 700,
      letterSpacing: "3px", textTransform: "uppercase",
    }}>{label}</div>
  );
}

/* ── meta-ad-listing-single-image (1080×1080) ──────────── */
function MetaAdSingleImage({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  return (
    <div style={{ position: "relative", width: 1080, height: 1080, background: "#000", fontFamily: FONT.body }}>
      <img src={listing.exterior} alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <ForSaleBadge label="Open House Sat" clay={clay} />
      <div style={{ position: "absolute", top: 36, left: 40 }}>
        <StampLogo size={48} color="#fff" accent={clay} />
      </div>
      <ListingBug city={listing.cityShort} price={listing.price}
        spec={listing.beds + " BED · " + listing.baths + " BA · " + listing.sqft + " SQFT"} clay={clay} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: clay }} />
    </div>
  );
}

/* ── meta-ad-listing-portrait (1080×1920) ──────────── */
function MetaAdListingPortrait({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1080, height: 1920, background: "#000", fontFamily: FONT.body }}>
      <img src={listing.exterior} alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "65%", objectFit: "cover" }} />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "65%",
        background: "linear-gradient(180deg, rgba(0,0,0,.6) 0%, rgba(0,0,0,.2) 30%, rgba(0,0,0,.15) 55%, rgba(0,0,0,.55) 100%)",
      }} />
      <ForSaleBadge clay={clay} />
      <div style={{ position: "absolute", top: 36, left: 40 }}>
        <StampLogo size={48} color="#fff" accent={clay} />
      </div>

      <div style={{ position: "absolute", top: 220, left: 80, right: 80, color: "#fff" }}>
        <Handwritten color={clay} size={56} rotate={-3}>just listed —</Handwritten>
        <h1 style={{ fontFamily: FONT.heading, fontSize: 112, fontWeight: 600, margin: "20px 0 0 0", lineHeight: 1.0, color: "#fff" }}>
          {listing.address}
        </h1>
        <p style={{ fontFamily: FONT.heading, fontSize: 96, fontStyle: "italic", color: clay, margin: "16px 0 0 0", lineHeight: 1 }}>
          {listing.price}
        </p>
      </div>

      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "35%",
        background: forest, backgroundImage: FOREST_TEXTURE,
        padding: "60px 80px",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <div>
          <p style={{ fontFamily: FONT.body, fontSize: 22, fontWeight: 700, letterSpacing: "4px", color: clay, margin: 0, textTransform: "uppercase" }}>
            {listing.city} · MLS #{listing.mls}
          </p>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 64, fontWeight: 600, color: "#fff", margin: "20px 0 0 0", lineHeight: 1.0 }}>
            {listing.address}
          </h2>
          <p style={{ fontFamily: FONT.heading, fontSize: 76, fontWeight: 700, color: "#fff", margin: "32px 0 0 0", lineHeight: 1 }}>
            {listing.price}
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 24, color: "rgba(255,255,255,.85)", margin: "20px 0 0 0", letterSpacing: "1px" }}>
            {listing.beds} BED · {listing.baths} BA · {listing.sqft} SQFT
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ background: clay, color: "#fff", padding: "20px 36px", borderRadius: 4,
            fontFamily: FONT.body, fontSize: 26, fontWeight: 700, letterSpacing: "1px" }}>
            See the listing →
          </div>
          <ComplianceLine variant="tiny" color="rgba(255,255,255,.65)" mlsNumber={listing.mls} align="right" />
        </div>
      </div>
    </div>
  );
}

/* ── meta-ad-listing-carousel — 7 cards 1080×1080 ──────────── */
function CarouselCard({ children, idx, label }) {
  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <div style={{ position: "relative", width: 1080, height: 1080, background: "#000", overflow: "hidden", fontFamily: FONT.body }}>
        {children}
        <div style={{
          position: "absolute", top: 32, left: 32,
          width: 40, height: 40, borderRadius: 999,
          background: "rgba(0,0,0,.55)", color: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: FONT.body, fontSize: 16, fontWeight: 700,
        }}>{idx}</div>
      </div>
      <p style={{
        textAlign: "center", marginTop: 16,
        fontFamily: FONT.body, fontSize: 18, fontWeight: 600,
        color: "#777", letterSpacing: "2px", textTransform: "uppercase",
      }}>{label}</p>
    </div>
  );
}

function MetaAdCarousel({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  const cards = [
    { label: "Card 1 · Hero", img: listing.exterior, kind: "hero" },
    { label: "Card 2 · Kitchen", img: listing.interior, kind: "interior", overlay: "Quartz waterfall island", note: "open to the great room" },
    { label: "Card 3 · The View", img: listing.view, kind: "feature", overlay: "Olympic Mountains, every sunset", note: "this is the THING" },
    { label: "Card 4 · Living", img: listing.living, kind: "interior", overlay: "Three decks", note: "indoor/outdoor flow" },
    { label: "Card 5 · Outdoor", img: "assets/porch.jpg", kind: "interior", overlay: "RV parking + fenced yard", note: "10,454 sqft lot" },
    { label: "Card 6 · Map", img: "assets/aerial-neighborhood.jpg", kind: "map" },
    { label: "Card 7 · Kim", img: "assets/kim-headshot.jpg", kind: "agent" },
  ];

  return (
    <div style={{ display: "flex", gap: 28, paddingBottom: 60, alignItems: "flex-start" }}>
      {cards.map((c, i) => (
        <CarouselCard key={i} idx={i + 1} label={c.label}>
          {c.kind === "hero" && (
            <React.Fragment>
              <img src={c.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <ForSaleBadge clay={clay} />
              <ListingBug city={listing.cityShort} price={listing.price} spec={listing.beds + " · " + listing.baths + " BA · " + listing.sqft + " SQFT"} clay={clay} />
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: clay }} />
            </React.Fragment>
          )}

          {(c.kind === "interior" || c.kind === "feature") && (
            <React.Fragment>
              <img src={c.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,.7) 100%)" }} />
              <div style={{ position: "absolute", left: 40, right: 40, bottom: 40 }}>
                <Handwritten color={clay} size={36} rotate={-2}>{c.note}</Handwritten>
                <h3 style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 600, color: "#fff", margin: "12px 0 0 0", lineHeight: 1.05 }}>
                  {c.overlay}
                </h3>
              </div>
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 4, background: clay }} />
            </React.Fragment>
          )}

          {c.kind === "map" && (
            <React.Fragment>
              <img src={c.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "saturate(.7)" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(47,82,51,.55)" }} />
              <div style={{ position: "absolute", top: "42%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill={clay}>
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 7.4 12.3a.8.8 0 0 0 1.2 0C13 22 20 15.4 20 10a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
              </div>
              <div style={{ position: "absolute", inset: 0, padding: "0 60px", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 80, textAlign: "center" }}>
                <p style={{ fontFamily: FONT.body, fontSize: 16, fontWeight: 700, letterSpacing: "3px", color: clay, margin: 0, textTransform: "uppercase" }}>Right Here</p>
                <h3 style={{ fontFamily: FONT.heading, fontSize: 64, fontWeight: 600, color: "#fff", margin: "16px 0 0 0", lineHeight: 1.05 }}>
                  5 min to the ferry,<br/>15 to Boeing
                </h3>
                <p style={{ fontFamily: FONT.body, fontSize: 18, color: "rgba(255,255,255,.8)", margin: "24px 0 0 0", letterSpacing: "1px" }}>
                  Mukilteo Elementary · Voyager K-8 · Kamiak HS
                </p>
              </div>
            </React.Fragment>
          )}

          {c.kind === "agent" && (
            <React.Fragment>
              <div style={{ position: "absolute", inset: 0, background: forest, backgroundImage: FOREST_TEXTURE }} />
              <div style={{ position: "absolute", top: 80, left: 80, right: 460, color: "#fff" }}>
                <Handwritten color={clay} size={40} rotate={-3}>listed by</Handwritten>
                <h3 style={{ fontFamily: FONT.heading, fontSize: 88, fontWeight: 600, color: "#fff", margin: "16px 0 0 0", lineHeight: 1.0 }}>
                  Kim<br/>Pelham
                </h3>
                <div style={{ height: 3, width: 80, background: clay, margin: "32px 0 24px 0" }} />
                <p style={{ fontFamily: FONT.body, fontSize: 22, color: "rgba(255,255,255,.9)", margin: 0, lineHeight: 1.45 }}>
                  17 years in Snohomish County.<br/>
                  102.3% sale-to-list ratio.<br/>
                  Two active buyers max.
                </p>
                <div style={{ marginTop: 48, background: clay, color: "#fff", padding: "16px 28px", display: "inline-block",
                  fontFamily: FONT.body, fontSize: 22, fontWeight: 700, letterSpacing: "1px", borderRadius: 4 }}>
                  Tour this home →
                </div>
              </div>
              <div style={{ position: "absolute", right: 0, bottom: 0, width: 440, height: "100%", overflow: "hidden" }}>
                <img src={c.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
              </div>
            </React.Fragment>
          )}
        </CarouselCard>
      ))}
    </div>
  );
}

/* ── meta-ad-listing-video-reel — storyboard 4 shots ──────── */
function MetaAdReelStoryboard({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  const shots = [
    { t: "0:00 – 0:02", title: "Cold open", desc: "Drone pull-back from front door reveals full façade + Olympic peaks in the distance.", img: listing.exterior, overlay: "(no text)" },
    { t: "0:03 – 0:07", title: "Interior cuts", desc: "Three 1-second cuts: kitchen island, living room, primary suite. Specs typed on each.", img: listing.interior, overlay: "4 BED · 2.25 BA · 2,605 SQFT" },
    { t: "0:08 – 0:12", title: "The Thing", desc: "Slow dolly toward the upper deck. Sunset over the Olympics. Hold the silence.", img: listing.view, overlay: "the view you bought it for" },
    { t: "0:13 – 0:15", title: "Kim + CTA", desc: "Kim on the porch, direct to camera. URL types in lower-third.", img: "assets/kim-at-door.jpg", overlay: "I'll be here Saturday — Kim" },
  ];
  return (
    <div style={{
      width: 1640, padding: 60, background: C.cream, backgroundImage: PAPER_NOISE,
      fontFamily: FONT.body,
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <Eyebrow color={clay} size={13}>Storyboard · Reels Ad Creative</Eyebrow>
          <h1 style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 600, color: forest, margin: "8px 0 0 0", lineHeight: 1.05 }}>
            {listing.address} · 15-Sec Reel
          </h1>
          <p style={{ fontFamily: FONT.hand, fontSize: 26, color: clay, margin: "8px 0 0 0" }}>
            for Marco / Nico — shoot list + voiceover beats
          </p>
        </div>
        <div style={{ textAlign: "right", color: C.textMuted, fontSize: 12, lineHeight: 1.6 }}>
          <p style={{ margin: 0 }}>1080 × 1920 · 9:16 · 15s</p>
          <p style={{ margin: 0 }}>Spec: 30 fps · captions on</p>
          <p style={{ margin: 0 }}>Aspect lock: 9:16 only</p>
        </div>
      </div>

      <div style={{ height: 1, background: "rgba(0,0,0,.1)", marginBottom: 32 }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {shots.map((s, i) => (
          <div key={i}>
            <div style={{ position: "relative", aspectRatio: "9 / 16", background: "#000", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,.12)" }}>
              <img src={s.img} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.85)" }} />
              <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,.7)", color: "#fff", padding: "4px 10px",
                fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "1px" }}>
                SHOT {i + 1}
              </div>
              <div style={{ position: "absolute", left: 14, right: 14, bottom: 14, fontFamily: FONT.body, fontSize: 13, color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,.7)", lineHeight: 1.35, background: "rgba(0,0,0,.4)", padding: "8px 10px" }}>
                {s.overlay}
              </div>
            </div>
            <div style={{ padding: "16px 4px 0 4px" }}>
              <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", margin: 0, textTransform: "uppercase" }}>{s.t}</p>
              <p style={{ fontFamily: FONT.heading, fontSize: 22, fontWeight: 600, color: forest, margin: "4px 0 8px 0", lineHeight: 1.2 }}>{s.title}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.textLight, margin: 0, lineHeight: 1.55 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, background: "#fff", border: `1px solid ${C.border}`, padding: 32, borderLeft: `4px solid ${clay}` }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", margin: 0, textTransform: "uppercase" }}>Voiceover / Kim on-cam</p>
        <p style={{ fontFamily: FONT.heading, fontSize: 24, fontStyle: "italic", color: forest, margin: "10px 0 0 0", lineHeight: 1.5 }}>
          "Mukilteo. 4 bed, remodeled around an Olympic Mountain view. Three decks, quartz kitchen,
          hot tub, RV parking. {listing.price}. Open Saturday twelve to three. I am Kim Pelham,
          your neighbor in real estate."
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textMuted, margin: "16px 0 0 0", lineHeight: 1.5 }}>
          14 seconds spoken. Hold 1s on the view shot, silent. Subtitle every line — white on black bar, bottom-third safe area.
        </p>
      </div>

      <div style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${C.border}` }}>
        <ComplianceLine variant="tiny" color={C.textFaint} mlsNumber={listing.mls} align="left" />
      </div>
    </div>
  );
}

/* ── meta-ad-price-drop (1080×1080) ──────────── */
function MetaAdPriceDrop({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1080, height: 1080, background: "#000", fontFamily: FONT.body, overflow: "hidden" }}>
      <img src={listing.exterior} alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.45)" }} />

      <div style={{ position: "absolute", inset: 0, padding: 80, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Handwritten color={clay} size={48} rotate={-3} style={{ marginBottom: 16 }}>new number —</Handwritten>

        <p style={{
          fontFamily: FONT.heading, fontSize: 64, fontWeight: 600,
          color: "rgba(255,255,255,.55)", margin: 0,
          textDecoration: "line-through", textDecorationColor: clay,
          textDecorationThickness: 4, lineHeight: 1,
        }}>
          Was {listing.oldPrice}
        </p>

        <p style={{
          fontFamily: FONT.heading, fontSize: 168, fontWeight: 700,
          color: "#fff", margin: "16px 0 0 0", lineHeight: 0.95,
          letterSpacing: "-.01em",
        }}>
          Now {listing.price}
        </p>

        <div style={{ height: 4, width: 120, background: clay, margin: "28px 0 28px 0" }} />

        <p style={{
          fontFamily: FONT.heading, fontSize: 30, fontStyle: "italic",
          color: "rgba(255,255,255,.9)", margin: 0, lineHeight: 1.3, maxWidth: 700,
        }}>
          The market moved. I priced for where buyers actually are this week.
        </p>

        <div style={{
          marginTop: 40, background: forest, color: "#fff", padding: "16px 32px", borderRadius: 4,
          fontFamily: FONT.body, fontSize: 20, fontWeight: 700, letterSpacing: "2px",
        }}>
          OPEN HOUSE SUNDAY 1 – 3 PM
        </div>
      </div>

      <div style={{ position: "absolute", left: 40, bottom: 40 }}>
        <Wordmark size={0.7} dark accent={clay} />
      </div>
      <div style={{ position: "absolute", right: 40, bottom: 40 }}>
        <ComplianceLine variant="tiny" color="rgba(255,255,255,.65)" mlsNumber={listing.mls} align="right" />
      </div>
    </div>
  );
}

/* ── meta-ad-open-house-drive (1080×1080) ──────────── */
function MetaAdOpenHouse({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1080, height: 1080, background: "#000", fontFamily: FONT.body, overflow: "hidden" }}>
      <img src={listing.exterior} alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.5) saturate(.9)" }} />

      <div style={{ position: "absolute", inset: 0, padding: 80, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Eyebrow color={clay} size={14}>Open House · {listing.cityShort}</Eyebrow>
          <StampLogo size={88} color="#fff" accent={clay} />
        </div>

        <div>
          <p style={{
            fontFamily: FONT.heading, fontSize: 156, fontWeight: 700,
            color: "#fff", margin: 0, lineHeight: 0.9, letterSpacing: "-.02em",
          }}>
            {listing.openHouse.day}
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 32, marginTop: 12 }}>
            <p style={{ fontFamily: FONT.heading, fontSize: 64, fontWeight: 600, color: clay, margin: 0, lineHeight: 1 }}>
              {listing.openHouse.date}
            </p>
            <p style={{ fontFamily: FONT.heading, fontSize: 56, fontWeight: 500, color: "#fff", margin: 0, lineHeight: 1, fontStyle: "italic" }}>
              {listing.openHouse.time}
            </p>
          </div>
          <p style={{ fontFamily: FONT.body, fontSize: 24, color: "rgba(255,255,255,.85)", margin: "24px 0 0 0", letterSpacing: "1px" }}>
            {listing.address} · {listing.cityShort}, WA
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div style={{
            background: clay, color: "#fff", padding: "16px 30px", borderRadius: 4,
            fontFamily: FONT.body, fontSize: 20, fontWeight: 700, letterSpacing: "2px",
          }}>RSVP / GET DIRECTIONS</div>
          <ComplianceLine variant="tiny" color="rgba(255,255,255,.7)" mlsNumber={listing.mls} align="right" />
        </div>
      </div>
    </div>
  );
}

/* ── meta-ad-broker-stat-card (1080×1080) ──────────── */
function MetaAdStatCard({ tweaks }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1080, height: 1080, fontFamily: FONT.body, background: forest, backgroundImage: FOREST_TEXTURE, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, padding: 80, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Eyebrow color={clay} size={14}>By the Numbers</Eyebrow>
          <Wordmark size={0.85} dark accent={clay} />
        </div>

        <div style={{ textAlign: "left" }}>
          <p style={{
            fontFamily: FONT.heading, fontSize: 280, fontWeight: 700,
            color: clay, margin: 0, lineHeight: 0.85, letterSpacing: "-.02em",
          }}>{tweaks.statBigNumber}</p>
          <p style={{
            fontFamily: FONT.heading, fontSize: 48, fontStyle: "italic", fontWeight: 500,
            color: C.cream, margin: "8px 0 0 0", lineHeight: 1.1,
          }}>
            <HandUnderline color={clay} thickness={3} offset={-10}>{tweaks.statBigLabel}</HandUnderline>
          </p>
          <p style={{
            fontFamily: FONT.body, fontSize: 18, color: "rgba(248,245,240,.7)",
            margin: "24px 0 0 0", lineHeight: 1.55, maxWidth: 640,
          }}>
            NWMLS market average runs 100.2%. That is the difference between a prepared
            listing strategy and hoping for the best.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24, justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src="assets/kim-headshot.jpg" alt="" style={{ width: 96, height: 96, borderRadius: "50%", objectFit: "cover", border: `3px solid ${clay}` }} />
            <div>
              <p style={{ fontFamily: FONT.heading, fontSize: 28, fontStyle: "italic", color: "#fff", margin: 0, lineHeight: 1 }}>Kim Pelham</p>
              <p style={{ fontFamily: FONT.body, fontSize: 13, color: "rgba(255,255,255,.7)", margin: "4px 0 0 0", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                17 yrs · 176 closings · 2 buyers max
              </p>
            </div>
          </div>
          <AwardRow size={72} dark />
        </div>
      </div>
    </div>
  );
}

/* ── meta-ad-comparison (1080×1080) ──────────── */
function MetaAdComparison({ tweaks, listing }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1080, height: 1080, fontFamily: FONT.body, background: "#000", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src="assets/everett-marina.jpg" alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.55) saturate(.85)" }} />
          <div style={{ position: "absolute", inset: 0, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Eyebrow color="#fff" size={11}>Downtown Seattle</Eyebrow>
            <div>
              <p style={{ fontFamily: FONT.heading, fontSize: 116, fontWeight: 700, color: "#fff", margin: 0, lineHeight: .9 }}>$3M</p>
              <p style={{ fontFamily: FONT.body, fontSize: 16, color: "rgba(255,255,255,.85)", margin: "12px 0 0 0", lineHeight: 1.5 }}>
                2-bed · 1,200 sqft<br/>HOA $1,400/mo
              </p>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", overflow: "hidden", borderLeft: `2px solid ${clay}` }}>
          <img src={listing.view} alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.15) 35%, rgba(0,0,0,.85) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, padding: 50, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Eyebrow color="#fff" size={11}>Marysville · 40 min north</Eyebrow>
            <div>
              <p style={{ fontFamily: FONT.heading, fontSize: 116, fontWeight: 700, color: "#fff", margin: 0, lineHeight: .9 }}>$799K</p>
              <p style={{ fontFamily: FONT.body, fontSize: 16, color: "rgba(255,255,255,.92)", margin: "12px 0 0 0", lineHeight: 1.5 }}>
                3-bed waterfront · 1,662 sqft<br/>0.36 acres · no HOA
              </p>
            </div>
          </div>
          <div style={{ position: "absolute", top: 50, right: 50 }}>
            <Handwritten color="#fff" size={32} rotate={-3}>same Puget Sound</Handwritten>
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        width: 110, height: 110, borderRadius: "50%",
        background: clay, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: FONT.heading, fontSize: 44, fontWeight: 700, fontStyle: "italic",
        boxShadow: "0 8px 24px rgba(0,0,0,.4)",
      }}>vs</div>

      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        background: forest, padding: "24px 50px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <p style={{ fontFamily: FONT.heading, fontSize: 28, fontStyle: "italic", color: "#fff", margin: 0 }}>
          The Sound is the Sound.
        </p>
        <div style={{ background: clay, color: "#fff", padding: "10px 22px", fontFamily: FONT.body, fontSize: 13, fontWeight: 700, letterSpacing: "2px" }}>
          SEE NORTH-SOUND HOMES →
        </div>
      </div>
    </div>
  );
}

/* ── meta-ad-testimonial (1080×1080) ──────────── */
function MetaAdTestimonial({ tweaks }) {
  const clay = tweaks.C_clay;
  const forest = tweaks.C_forest;
  return (
    <div style={{ position: "relative", width: 1080, height: 1080, fontFamily: FONT.body, background: C.cream, backgroundImage: PAPER_NOISE, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, padding: 80, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Eyebrow color={clay} size={14} style={{ marginBottom: 24 }}>5★ · Closed March 2026 · Lake Stevens</Eyebrow>

        <p style={{ fontFamily: FONT.heading, fontSize: 132, fontWeight: 700, color: clay, margin: 0, lineHeight: 0.5, height: 48 }}>“</p>

        <p style={{
          fontFamily: FONT.heading, fontSize: 46, fontStyle: "italic", fontWeight: 500,
          color: forest, margin: "16px 0 0 0", lineHeight: 1.25, maxWidth: 820,
        }}>
          Three offers in eight days. Kim staged the place with her own
          furniture. She picks up the phone. She is the real one.
        </p>

        <div style={{ height: 1, background: "rgba(0,0,0,.15)", margin: "44px 0 24px 0", width: 200 }} />

        <p style={{ fontFamily: FONT.body, fontSize: 18, fontWeight: 600, color: C.text, margin: 0, letterSpacing: "1px" }}>
          — Linda &amp; Tom R., Lake Stevens sellers
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.textMuted, margin: "8px 0 0 0", letterSpacing: "2px", textTransform: "uppercase" }}>
          Sold $33K over list · 8 days on market
        </p>

        <div style={{ position: "absolute", top: 60, right: 60, transform: "rotate(4deg)" }}>
          <div style={{
            background: "#fff", padding: "8px 8px 28px 8px",
            boxShadow: "0 6px 18px rgba(0,0,0,.15)", width: 200,
          }}>
            <img src="assets/key-handoff.jpg" alt="" style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }} />
            <p style={{ fontFamily: FONT.hand, fontSize: 22, color: C.textLight, textAlign: "center", margin: "8px 0 0 0" }}>keys to Linda</p>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 80, bottom: 60, right: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Wordmark size={0.85} />
        <div style={{ background: clay, color: "#fff", padding: "12px 22px", fontFamily: FONT.body, fontSize: 13, fontWeight: 700, letterSpacing: "2px" }}>
          READ MORE REVIEWS →
        </div>
      </div>
    </div>
  );
}

[
  { id: "meta-ad-listing-single-image", group: "meta-ad", name: "Single image · 1:1",
    tier: 1, width: 1080, height: 1080, note: "feed + ad", render: MetaAdSingleImage,
    surfaceBg: "#000" },
  { id: "meta-ad-listing-portrait", group: "meta-ad", name: "Single image · 9:16",
    tier: 1, width: 1080, height: 1920, note: "Stories/Reels placement", render: MetaAdListingPortrait,
    surfaceBg: "#000" },
  { id: "meta-ad-listing-carousel", group: "meta-ad", name: "Carousel · 7 cards",
    tier: 1, width: 1080 * 7 + 28 * 6, height: 1080 + 60, note: "highest CTR for real estate",
    render: MetaAdCarousel, noShadow: true, surfaceBg: "transparent" },
  { id: "meta-ad-listing-video-reel", group: "meta-ad", name: "Reel storyboard · 15s",
    tier: 1, width: 1640, height: 1320, note: "shot list + voiceover",
    render: MetaAdReelStoryboard, surfaceBg: C.cream },
  { id: "meta-ad-price-drop", group: "meta-ad", name: "Price drop",
    tier: 1, width: 1080, height: 1080, render: MetaAdPriceDrop,
    surfaceBg: "#000" },
  { id: "meta-ad-open-house-drive", group: "meta-ad", name: "Open house drive",
    tier: 1, width: 1080, height: 1080, render: MetaAdOpenHouse, surfaceBg: "#000" },
  { id: "meta-ad-broker-stat-card", group: "meta-ad", name: "Broker stat card",
    tier: 1, width: 1080, height: 1080, render: MetaAdStatCard,
    note: "top-of-funnel awareness", surfaceBg: "#2F5233" },
  { id: "meta-ad-comparison", group: "meta-ad", name: "Comparison · split",
    tier: 1, width: 1080, height: 1080, note: "high CTR for waterfront",
    render: MetaAdComparison, surfaceBg: "#000" },
  { id: "meta-ad-testimonial", group: "meta-ad", name: "Testimonial · quote",
    tier: 1, width: 1080, height: 1080, render: MetaAdTestimonial, surfaceBg: C.cream },
].forEach(window.registerTemplate);

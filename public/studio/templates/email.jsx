/*
  email.jsx — Email templates.
  All emails are Gmail-compatible 600px tables visually.
  We render each inside a "client preview" chrome (subject, from, date) so
  Kim can see what shows up in inbox previews.
*/

const EMAIL_W = 760;          // chrome width
const TABLE_W = 600;          // email table

function EmailClient({ subject, preview, from = "Kim Pelham", email = "kim@thepelhamgroupnw.com", date = "May 19", children, height }) {
  return (
    <div style={{ width: EMAIL_W, height, background: "#fff", fontFamily: FONT.body, position: "relative", overflow: "hidden" }}>
      {/* Gmail-style header */}
      <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #e5e5e5" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: "#5f6368", margin: 0, letterSpacing: "1.5px", textTransform: "uppercase" }}>
          Inbox preview · Gmail
        </p>
        <h3 style={{ fontFamily: FONT.body, fontSize: 18, fontWeight: 500, color: "#202124", margin: "10px 0 0 0", lineHeight: 1.3 }}>
          {subject}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.forest, color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT.heading, fontSize: 16, fontStyle: "italic", fontWeight: 600 }}>K</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: FONT.body, fontSize: 13, color: "#202124", margin: 0 }}>
              <strong>{from}</strong>{" "}<span style={{ color: "#5f6368" }}>&lt;{email}&gt;</span>
            </p>
            <p style={{ fontFamily: FONT.body, fontSize: 12, color: "#5f6368", margin: "2px 0 0 0" }}>
              to me · {date} · {preview ? <span style={{ color: "#888" }}>· {preview}</span> : null}
            </p>
          </div>
        </div>
      </div>

      {/* Email body — centered 600px table */}
      <div style={{ background: "#f6f6f4", padding: "20px 0 40px" }}>
        <div style={{ width: TABLE_W, margin: "0 auto", background: C.cream }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function EmailHeaderStrip({ clay, forest, eyebrow = "the pelham post" }) {
  return (
    <div style={{
      background: forest, backgroundImage: FOREST_TEXTURE,
      padding: "28px 32px", color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div>
        <p style={{ fontFamily: FONT.hand, fontSize: 22, color: clay, margin: 0, lineHeight: 1 }}>{eyebrow}</p>
        <p style={{ fontFamily: FONT.heading, fontSize: 18, color: "#fff", margin: "4px 0 0 0", fontStyle: "italic", lineHeight: 1 }}>
          The Pelham Group <span style={{ color: clay }}>NW</span>
        </p>
      </div>
      <p style={{ fontFamily: FONT.body, fontSize: 11, color: "rgba(255,255,255,.7)", margin: 0, letterSpacing: "2px", textTransform: "uppercase" }}>
        Vol 03 · May 2026
      </p>
    </div>
  );
}

function EmailFooter({ clay, mlsNumber }) {
  return (
    <div style={{ padding: "24px 32px", background: "#fff", borderTop: `4px solid ${clay}` }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <Wordmark size={0.75} />
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ width: 28, height: 28, borderRadius: "50%", background: C.creamDark, display: "flex", alignItems: "center", justifyContent: "center", color: clay }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
          </span>
          <span style={{ width: 28, height: 28, borderRadius: "50%", background: C.creamDark, display: "flex", alignItems: "center", justifyContent: "center", color: clay }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
          </span>
          <span style={{ width: 28, height: 28, borderRadius: "50%", background: C.creamDark, display: "flex", alignItems: "center", justifyContent: "center", color: clay }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </span>
        </div>
      </div>
      <ComplianceLine mlsNumber={mlsNumber} color={C.textMuted} align="left" />
      <p style={{ fontFamily: FONT.body, fontSize: 10, color: C.textFaint, margin: "12px 0 0 0", textAlign: "left", letterSpacing: ".04em" }}>
        You are receiving this because we have closed together or you joined the early list.{" "}
        <a href="#" style={{ color: C.textMuted }}>Unsubscribe</a> · <a href="#" style={{ color: C.textMuted }}>Manage preferences</a>
      </p>
    </div>
  );
}

function CtaButton({ children, clay, full }) {
  return (
    <div style={{
      display: full ? "block" : "inline-block",
      background: clay, color: "#fff",
      padding: "14px 28px", borderRadius: 4,
      fontFamily: FONT.body, fontSize: 14, fontWeight: 700, letterSpacing: "1px",
      textAlign: "center", textTransform: "uppercase",
    }}>{children}</div>
  );
}

/* ── pelham-post-newsletter ──────────── */
function EmailNewsletter({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <EmailClient
      subject={tweaks.headlineNewsletter}
      preview="A view in Mukilteo, what's selling this week, and a closing story"
      date="May 19, 2026"
      height={2580}>
      <EmailHeaderStrip clay={clay} forest={forest} />

      {/* Opener */}
      <div style={{ padding: "40px 32px 32px" }}>
        <Handwritten color={clay} size={26}>hey neighbor —</Handwritten>
        <p style={{ fontFamily: FONT.body, fontSize: 15, color: C.text, lineHeight: 1.75, margin: "18px 0 0 0" }}>
          The Snohomish market shifted again this week. Inventory ticked up 8% from April,
          which is the most we have seen in a spring since 2022. Buyers have a beat to think
          for the first time in a year. I have one new listing, one I just priced for a faster
          sale, and three data points that matter if you are watching this market.
        </p>
        <p style={{ fontFamily: FONT.hand, fontSize: 22, color: forest, margin: "20px 0 0 0", textAlign: "right" }}>— Kim</p>
      </div>

      {/* Lead listing */}
      <div style={{ padding: "0 32px 32px" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>
          Lead Listing · Just Hit MLS
        </p>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, borderRadius: 6, overflow: "hidden" }}>
          <img src={listing.exterior} alt="" style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
          <div style={{ padding: "20px 22px" }}>
            <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "1.5px", textTransform: "uppercase", margin: 0 }}>
              {listing.city}
            </p>
            <h2 style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 700, color: C.text, margin: "6px 0 4px 0", lineHeight: 1.2 }}>
              {listing.address}
            </h2>
            <p style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 700, color: forest, margin: "0 0 12px 0" }}>
              {listing.price}
            </p>
            <p style={{ fontFamily: FONT.heading, fontSize: 14, fontStyle: "italic", color: forest, margin: "0 0 10px 0" }}>
              {listing.hook}
            </p>
            <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.textLight, lineHeight: 1.6, margin: "0 0 16px 0" }}>
              {listing.beds} bed, {listing.baths} bath, {listing.sqft} sqft. {listing.feature}.
              {listing.openHouse && listing.openHouse.day ? ` Open ${String(listing.openHouse.day).toLowerCase()} ${listing.openHouse.time}.` : ""}
            </p>
            <CtaButton clay={clay}>See the listing →</CtaButton>
          </div>
        </div>
      </div>

      {/* Market read */}
      <div style={{ padding: "0 32px 32px" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>
          The Market This Week
        </p>
        <div style={{ background: forest, color: "#fff", padding: "26px 24px", backgroundImage: FOREST_TEXTURE }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { n: "$849K", l: "Median sale, Snoco" },
              { n: "12", l: "Median days on market" },
              { n: "102.3%", l: "My sale-to-list ratio" },
            ].map(s => (
              <div key={s.l}>
                <p style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 700, color: clay, margin: 0, lineHeight: 1 }}>{s.n}</p>
                <p style={{ fontFamily: FONT.body, fontSize: 10, color: "rgba(255,255,255,.85)", margin: "8px 0 0 0", letterSpacing: "1px", textTransform: "uppercase", lineHeight: 1.3 }}>{s.l}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: FONT.heading, fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,.92)", margin: "20px 0 0 0", lineHeight: 1.5 }}>
            "Inventory loosened, but the good stuff still moves in under two weeks. Pricing
            ego is the only thing slowing sellers down right now."
          </p>
        </div>
      </div>

      {/* Secondary listing */}
      <div style={{ padding: "0 32px 32px" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>
          Also Watching · Price Adjusted
        </p>
        <div style={{ display: "flex", gap: 16, background: "#fff", border: `1px solid ${C.border}`, padding: 14, borderRadius: 6, alignItems: "center" }}>
          <img src="assets/everett-marina.jpg" alt="" style={{ width: 160, height: 120, objectFit: "cover", borderRadius: 4 }} />
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "1.5px", textTransform: "uppercase", margin: 0 }}>EVERETT, WA</p>
            <p style={{ fontFamily: FONT.heading, fontSize: 18, fontWeight: 700, color: C.text, margin: "4px 0 4px 0", lineHeight: 1.15 }}>
              1218 Grand Ave #404
            </p>
            <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textLight, margin: 0 }}>
              <s style={{ color: C.textFaint }}>$499,000</s>{" "}<strong style={{ color: forest }}>$485,000</strong> · 2 bed, 2 bath
            </p>
            <p style={{ fontFamily: FONT.body, fontSize: 11, color: C.textMuted, margin: "6px 0 0 0", lineHeight: 1.5 }}>
              Marina-view condo. Reset to where buyers are this week.
            </p>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div style={{ padding: "0 32px 40px" }}>
        <div style={{
          background: C.creamMint, padding: "20px 22px", borderLeft: `4px solid ${clay}`,
        }}>
          <p style={{ fontFamily: FONT.hand, fontSize: 22, color: forest, margin: 0, lineHeight: 1.1 }}>
            Thinking about listing this summer?
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 13, color: C.textLight, lineHeight: 1.65, margin: "12px 0 16px 0" }}>
            I take two active buyers at a time. June calendar is filling. Reply to this
            email or text me. No pitch, just a 20-minute conversation.
          </p>
          <CtaButton clay={clay}>Reply to Kim</CtaButton>
        </div>
      </div>

      <EmailFooter clay={clay} mlsNumber={listing.mls} />
    </EmailClient>
  );
}

/* ── listing-announcement ──────────── */
function EmailListingAnnouncement({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <EmailClient
      subject={`Just listed in ${listing.cityShort} — ${listing.price}`}
      preview={listing.hook}
      date="May 19, 2026"
      height={1720}>
      <div style={{ position: "relative" }}>
        <img src={listing.exterior} alt="" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 24, left: 24, background: clay, color: "#fff", padding: "8px 14px", fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
          Just Listed
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "20px 28px", background: "linear-gradient(180deg, transparent, rgba(0,0,0,.65))", color: "#fff" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: clay, margin: 0, textTransform: "uppercase" }}>
            {listing.city}
          </p>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 32, fontWeight: 600, color: "#fff", margin: "6px 0 0 0", lineHeight: 1.1 }}>
            {listing.address}
          </h2>
        </div>
      </div>

      <div style={{ padding: "32px 32px 0" }}>
        <Handwritten color={clay} size={24}>here's the story —</Handwritten>
        <p style={{ fontFamily: FONT.heading, fontSize: 22, fontStyle: "italic", color: forest, margin: "16px 0 0 0", lineHeight: 1.4 }}>
          {listing.hook}
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.text, lineHeight: 1.75, margin: "20px 0 0 0" }}>
          {listing.description}
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.text, lineHeight: 1.75, margin: "16px 0 24px 0" }}>
          Open {String(listing.openHouse.day).toLowerCase()} {listing.openHouse.date} from {listing.openHouse.time}. {listing.openHouseTagline}.
        </p>
      </div>

      <div style={{ padding: "0 32px 28px" }}>
        <div style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "16px 18px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, textAlign: "center" }}>
          {[
            { v: listing.price, l: "List price" },
            { v: listing.beds, l: "Bed" },
            { v: listing.baths, l: "Bath" },
            { v: listing.sqft, l: "Sqft" },
          ].map(s => (
            <div key={s.l}>
              <p style={{ fontFamily: FONT.heading, fontSize: 18, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>{s.v}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 9, color: C.textMuted, margin: "6px 0 0 0", letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 32px 36px", textAlign: "center" }}>
        <CtaButton clay={clay}>See the full gallery →</CtaButton>
        <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textMuted, margin: "12px 0 0 0" }}>
          MLS #{listing.mls} · Showings by appointment between open houses
        </p>
      </div>

      <EmailFooter clay={clay} mlsNumber={listing.mls} />
    </EmailClient>
  );
}

/* ── open-house-invite ──────────── */
function EmailOpenHouse({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <EmailClient
      subject={`Open House this ${String(listing.openHouse.day).toLowerCase()} in ${listing.cityShort.charAt(0) + listing.cityShort.slice(1).toLowerCase()}`}
      preview={`${listing.openHouse.date}, ${listing.openHouse.time} · ${listing.address}`}
      date="May 19, 2026"
      height={1600}>
      <div style={{ background: forest, backgroundImage: FOREST_TEXTURE, color: "#fff", padding: "44px 32px 36px", textAlign: "center" }}>
        <Handwritten color={clay} size={28}>walk it with me —</Handwritten>
        <h1 style={{ fontFamily: FONT.heading, fontSize: 76, fontWeight: 700, color: "#fff", margin: "12px 0 4px 0", lineHeight: 0.95 }}>
          {listing.openHouse.day.toUpperCase()}
        </h1>
        <p style={{ fontFamily: FONT.heading, fontSize: 32, fontStyle: "italic", color: clay, margin: 0, lineHeight: 1 }}>
          {listing.openHouse.date} · {listing.openHouse.time}
        </p>
      </div>

      <img src={listing.exterior} alt="" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />

      <div style={{ padding: "32px 32px 0" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
          {listing.city}
        </p>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 30, fontWeight: 700, color: C.text, margin: "8px 0 0 0", lineHeight: 1.1 }}>
          {listing.address}
        </h2>
        <p style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 700, color: forest, margin: "8px 0 16px 0" }}>
          {listing.price} · {listing.beds} · {listing.baths} BA · {listing.sqft} sqft
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 24px 0" }}>
          <div style={{ background: clay, color: "#fff", padding: "16px 18px", textAlign: "center", borderRadius: 4 }}>
            <p style={{ fontFamily: FONT.body, fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", margin: 0, fontWeight: 700 }}>I'll be there</p>
            <p style={{ fontFamily: FONT.heading, fontSize: 16, fontWeight: 600, margin: "4px 0 0 0", lineHeight: 1 }}>Text "yes" to Kim →</p>
          </div>
          <div style={{ background: "#fff", color: forest, padding: "16px 18px", textAlign: "center", borderRadius: 4, border: `2px solid ${forest}` }}>
            <p style={{ fontFamily: FONT.body, fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", margin: 0, fontWeight: 700 }}>Get directions</p>
            <p style={{ fontFamily: FONT.heading, fontSize: 16, fontWeight: 600, margin: "4px 0 0 0", lineHeight: 1 }}>Open in Maps →</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 32px 32px" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>
          What to expect on site
        </p>
        <ul style={{ fontFamily: FONT.body, fontSize: 13.5, color: C.text, lineHeight: 1.8, margin: 0, paddingLeft: 20 }}>
          <li>{listing.openHouseTagline.charAt(0).toUpperCase() + listing.openHouseTagline.slice(1)}</li>
          <li>Disclosures, inspection summary, and HOA docs printed in the kitchen</li>
          <li>Me, ready to answer the unsexy questions about the building, the HOA, and the comps</li>
          <li>Bring partners, parents, contractors, anyone who has a vote in your decision</li>
        </ul>
      </div>

      <EmailFooter clay={clay} mlsNumber={listing.mls} />
    </EmailClient>
  );
}

/* ── price-drop-alert ──────────── */
function EmailPriceDrop({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <EmailClient
      subject={`Price reset on the Mukilteo view home — now ${listing.price}`}
      preview="The why behind it, and why now"
      date="May 19, 2026"
      height={1620}>
      <div style={{ padding: "40px 32px 28px", background: C.cream, textAlign: "center" }}>
        <Handwritten color={clay} size={26}>price reset</Handwritten>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 16, margin: "20px 0 0 0" }}>
          <p style={{ fontFamily: FONT.heading, fontSize: 28, fontWeight: 600, color: C.textFaint, textDecoration: "line-through", textDecorationColor: clay, margin: 0 }}>
            {listing.oldPrice}
          </p>
          <p style={{ fontFamily: FONT.heading, fontSize: 64, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>
            {listing.price}
          </p>
        </div>
        <p style={{ fontFamily: FONT.body, fontSize: 11, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "12px 0 0 0", fontWeight: 700 }}>
          – $74,000 · effective {listing.openHouse.date}
        </p>
      </div>

      <img src={listing.exterior} alt="" style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />

      <div style={{ padding: "32px 32px" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
          The honest call
        </p>
        <h3 style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 600, color: forest, margin: "8px 0 16px 0", lineHeight: 1.25 }}>
          Why I made this adjustment
        </h3>
        <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.text, lineHeight: 1.8, margin: 0 }}>
          We listed at {listing.oldPrice} based on the early-March comps. Two waterfront listings
          in Mukilteo closed in the last three weeks at numbers that reset the band — both below
          where I thought they would land. Rather than wait the market out (which costs sellers
          money the longer the home sits), we are pricing for where buyers actually are this week.
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.text, lineHeight: 1.8, margin: "16px 0 0 0" }}>
          The home itself has not changed. The view has not changed. The story has not changed.
          The number reflects this week, not last month. That is the work.
        </p>
        <p style={{ fontFamily: FONT.hand, fontSize: 26, color: forest, margin: "20px 0 0 0" }}>— Kim</p>
      </div>

      <div style={{ padding: "0 32px 32px", textAlign: "center" }}>
        <CtaButton clay={clay}>See the updated listing →</CtaButton>
      </div>

      <EmailFooter clay={clay} mlsNumber={listing.mls} />
    </EmailClient>
  );
}

/* ── market-update-monthly ──────────── */
function EmailMarketUpdate({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <EmailClient
      subject="May market read — Snohomish County, the actual numbers"
      preview="Median up 3.2%, inventory loosened, days-on-market still tight"
      date="May 19, 2026"
      height={1880}>
      <EmailHeaderStrip clay={clay} forest={forest} eyebrow="the monthly read" />

      <div style={{ padding: "32px 32px 8px" }}>
        <Handwritten color={clay} size={26}>may, by the numbers —</Handwritten>
        <h2 style={{ fontFamily: FONT.heading, fontSize: 30, fontWeight: 700, color: forest, margin: "12px 0 0 0", lineHeight: 1.15 }}>
          Inventory loosened. The good homes still move in twelve days.
        </h2>
      </div>

      <div style={{ padding: "20px 32px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {[
            { n: "$849K", l: "Median sale price", q: "↑ 3.2% YoY" },
            { n: "12", l: "Median days on market", q: "↓ from 18 last year" },
            { n: "+8%", l: "Inventory vs April", q: "first real loosening since 2022" },
            { n: "102.3%", l: "My sale-to-list ratio", q: "vs 100.2% county avg" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#fff", border: `1px solid ${C.border}`, padding: "16px 18px" }}>
              <p style={{ fontFamily: FONT.heading, fontSize: 36, fontWeight: 700, color: forest, margin: 0, lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: C.text, margin: "8px 0 4px 0", letterSpacing: "1px", textTransform: "uppercase" }}>{s.l}</p>
              <p style={{ fontFamily: FONT.hand, fontSize: 18, color: clay, margin: 0, lineHeight: 1 }}>{s.q}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "28px 32px 8px" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>
          Kim's read
        </p>
        <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.text, lineHeight: 1.8, margin: 0 }}>
          Three things matter this month. <strong>One:</strong> sellers who priced for March
          comps are sitting. The market moved. <strong>Two:</strong> the good inventory is still
          getting absorbed in under two weeks, which means a real listing strategy is the
          differentiator, not the market. <strong>Three:</strong> buyers finally have a beat to
          breathe — if you are pre-approved and waiting, this is the first window in a year
          where you can write an offer without an inspection-waiver gun to your head.
        </p>
      </div>

      <div style={{ padding: "24px 32px 8px" }}>
        <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, color: clay, letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px 0" }}>
          Featured this month
        </p>
        <div style={{ display: "flex", gap: 14, background: "#fff", border: `1px solid ${C.border}`, padding: 12, alignItems: "center" }}>
          <img src={listing.exterior} alt="" style={{ width: 140, height: 100, objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: FONT.body, fontSize: 10, fontWeight: 700, color: clay, letterSpacing: "1.5px", textTransform: "uppercase", margin: 0 }}>{listing.cityShort}, WA</p>
            <p style={{ fontFamily: FONT.heading, fontSize: 18, fontWeight: 700, color: forest, margin: "2px 0", lineHeight: 1.2 }}>{listing.address}</p>
            <p style={{ fontFamily: FONT.body, fontSize: 12, color: C.textLight, margin: 0 }}>{listing.price} · {listing.beds} · {listing.sqft} sqft</p>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 32px 36px", textAlign: "center" }}>
        <CtaButton clay={clay}>Read the full market post →</CtaButton>
      </div>

      <EmailFooter clay={clay} mlsNumber={listing.mls} />
    </EmailClient>
  );
}

/* ── just-sold-celebration ──────────── */
function EmailJustSold({ tweaks, listing }) {
  const clay = tweaks.C_clay; const forest = tweaks.C_forest;
  return (
    <EmailClient
      subject="Closed — Lake Stevens, 4.6% over list in 8 days"
      preview="How it happened, and what it says about your neighborhood"
      date="May 19, 2026"
      height={1620}>
      <div style={{ position: "relative" }}>
        <img src="assets/staging-living-room.jpg" alt="" style={{ width: "100%", height: 360, objectFit: "cover", display: "block", filter: "saturate(.9) brightness(.85)" }} />
        <div style={{ position: "absolute", top: 24, left: 24, transform: "rotate(-8deg)" }}>
          <div style={{ border: "5px solid #fff", padding: "8px 22px", background: "rgba(26,26,26,.55)", color: "#fff",
            fontFamily: FONT.heading, fontSize: 48, fontWeight: 700, letterSpacing: "0.08em", boxShadow: "0 4px 16px rgba(0,0,0,.4)" }}>
            SOLD
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "16px 28px", background: "linear-gradient(180deg, transparent, rgba(0,0,0,.65))", color: "#fff" }}>
          <p style={{ fontFamily: FONT.body, fontSize: 11, fontWeight: 700, letterSpacing: "2px", color: clay, margin: 0, textTransform: "uppercase" }}>LAKE STEVENS, WA</p>
          <h2 style={{ fontFamily: FONT.heading, fontSize: 28, fontWeight: 600, color: "#fff", margin: "4px 0 0 0", lineHeight: 1.1 }}>
            9117 24th Street SE
          </h2>
        </div>
      </div>

      <div style={{ padding: "28px 32px 8px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, textAlign: "center" }}>
          {[
            { n: "$758,000", l: "Sold price" },
            { n: "+4.6%", l: "Over list" },
            { n: "8", l: "Days on market" },
          ].map(s => (
            <div key={s.l} style={{ background: forest, color: "#fff", padding: "16px 8px" }}>
              <p style={{ fontFamily: FONT.heading, fontSize: 24, fontWeight: 700, color: clay, margin: 0, lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: FONT.body, fontSize: 10, color: "rgba(255,255,255,.85)", margin: "8px 0 0 0", letterSpacing: "1px", textTransform: "uppercase", lineHeight: 1.3 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "28px 32px 0" }}>
        <Handwritten color={clay} size={26}>quick closing story —</Handwritten>
        <p style={{ fontFamily: FONT.body, fontSize: 14, color: C.text, lineHeight: 1.8, margin: "16px 0 0 0" }}>
          Sellers had a smaller place lined up in Edmonds. We had three weeks to land
          the offer or they lost it. I staged with my own pieces on a Saturday, photographer
          Tuesday, on MLS Wednesday. Three offers by Sunday. Closed $33,000 over list, no
          appraisal contingency, twenty-two days from sign in the yard to keys in hand.
        </p>

        <div style={{ background: C.creamMint, borderLeft: `4px solid ${clay}`, padding: "18px 20px", margin: "20px 0 0 0" }}>
          <p style={{ fontFamily: FONT.heading, fontSize: 16, fontStyle: "italic", color: forest, margin: 0, lineHeight: 1.5 }}>
            "Kim staged the living room with her own furniture. She picked up the phone
            every Saturday at 7am. She is the real one."
          </p>
          <p style={{ fontFamily: FONT.body, fontSize: 11, color: C.textLight, margin: "10px 0 0 0", letterSpacing: ".06em" }}>
            — Linda &amp; Tom R., sellers
          </p>
        </div>
      </div>

      <div style={{ padding: "24px 32px 32px" }}>
        <div style={{ background: forest, color: "#fff", padding: "20px 24px", textAlign: "center" }}>
          <p style={{ fontFamily: FONT.hand, fontSize: 24, color: clay, margin: 0, lineHeight: 1 }}>thinking about listing this summer?</p>
          <p style={{ fontFamily: FONT.body, fontSize: 13, color: "rgba(255,255,255,.85)", margin: "10px 0 16px 0", lineHeight: 1.5 }}>
            Two buyers at a time. June is filling. Twenty minutes, no pitch.
          </p>
          <div style={{ background: clay, color: "#fff", padding: "12px 22px", display: "inline-block",
            fontFamily: FONT.body, fontSize: 13, fontWeight: 700, letterSpacing: "1px" }}>
            REPLY TO KIM
          </div>
        </div>
      </div>

      <EmailFooter clay={clay} mlsNumber={listing.mls} />
    </EmailClient>
  );
}

[
  { id: "email-pelham-post-newsletter", group: "email", name: "The Pelham Post — newsletter",
    tier: 1, width: 760, height: 2580, note: "the reference vol 03",
    render: EmailNewsletter, surfaceBg: "#fff" },
  { id: "email-listing-announcement", group: "email", name: "Listing announcement",
    tier: 1, width: 760, height: 1720, note: "day-one blast", render: EmailListingAnnouncement,
    surfaceBg: "#fff" },
  { id: "email-open-house-invite", group: "email", name: "Open house invite",
    tier: 1, width: 760, height: 1600, render: EmailOpenHouse, surfaceBg: "#fff" },
  { id: "email-price-drop-alert", group: "email", name: "Price drop alert",
    tier: 1, width: 760, height: 1620, note: "honest-broker copy", render: EmailPriceDrop,
    surfaceBg: "#fff" },
  { id: "email-market-update-monthly", group: "email", name: "Market update — monthly",
    tier: 1, width: 760, height: 1880, render: EmailMarketUpdate, surfaceBg: "#fff" },
  { id: "email-just-sold-celebration", group: "email", name: "Just sold celebration",
    tier: 2, width: 760, height: 1620, render: EmailJustSold, surfaceBg: "#fff" },
].forEach(window.registerTemplate);

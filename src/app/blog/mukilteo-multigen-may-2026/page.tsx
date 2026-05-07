'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import InnerHero from '@/components/InnerHero';

const ARTICLE_HTML = `<style>
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: #f0ede7;
    color: #2c2c2c;
    font-family: "Inter", system-ui, sans-serif;
    font-weight: 400;
    line-height: 1.75;
    -webkit-font-smoothing: antialiased;
  }
  a { color: #2f5233; text-decoration: underline; text-underline-offset: 3px; }
  a:hover { color: #b8845c; }
  img { max-width: 100%; display: block; }

  .wrap { max-width: 760px; margin: 0 auto; padding: 0 24px; }
  .wrap-wide { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

  /* Top bar */
  .topbar {
    background: #2f5233;
    color: #f8f5f0;
    font-family: "Inter", system-ui, sans-serif;
    font-size: 13px;
    text-align: center;
    padding: 10px 16px;
    letter-spacing: 0.04em;
  }
  .topbar a { color: #f8f5f0; text-decoration: underline; }

  /* Article header */
  .article-head {
    background: #f8f5f0;
    padding: 56px 0 40px;
    border-bottom: 1px solid #e8e3da;
  }
  .eyebrow {
    font-family: "Inter", system-ui, sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #b8845c;
    margin: 0 0 18px;
  }
  h1.article-title {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.15;
    color: #2c2c2c;
    margin: 0 0 24px;
    letter-spacing: 0;
  }
  .article-title em {
    font-style: italic;
    color: #2f5233;
  }
  .byline {
    font-family: "Inter", system-ui, sans-serif;
    font-size: 14px;
    color: #555;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }
  .byline .dot { color: #b8845c; }
  .byline strong { color: #2c2c2c; font-weight: 600; }

  /* Body sections */
  .article-body {
    padding: 48px 0 24px;
  }
  .article-body.alt {
    background: #ffffff;
  }
  .article-body.dark {
    background: #f0ede7;
  }
  .article-body p {
    font-size: 17px;
    line-height: 1.8;
    margin: 0 0 1.25em;
  }
  .lede p {
    font-size: 19px;
    line-height: 1.7;
    color: #2c2c2c;
  }
  .lede p:first-child::first-letter {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: 4.2em;
    float: left;
    line-height: 0.9;
    margin: 6px 12px 0 0;
    color: #2f5233;
  }
  h2.section-title {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: clamp(1.6rem, 3.4vw, 2.25rem);
    line-height: 1.2;
    color: #2c2c2c;
    margin: 8px 0 20px;
    letter-spacing: 0;
  }
  .section-eyebrow {
    font-family: "Inter", system-ui, sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #777;
    margin: 0 0 10px;
  }

  /* Stat cards */
  .stat-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 36px 0 8px;
  }
  .stat-card {
    background: #f8f5f0;
    border: 1px solid #e8e3da;
    padding: 28px 22px;
    text-align: left;
  }
  .stat-card .num {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: 42px;
    line-height: 1;
    color: #2f5233;
    margin: 0 0 8px;
  }
  .stat-card .label {
    font-family: "Inter", system-ui, sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #2c2c2c;
    margin: 0 0 6px;
  }
  .stat-card .source {
    font-family: "Inter", system-ui, sans-serif;
    font-size: 12px;
    color: #777;
    line-height: 1.5;
  }

  /* Pull quote */
  .pull-quote {
    background: #2f5233;
    color: #f8f5f0;
    padding: 56px 32px;
    text-align: center;
    margin: 56px 0;
  }
  .pull-quote blockquote {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-style: italic;
    font-weight: 500;
    font-size: clamp(1.4rem, 3vw, 2rem);
    line-height: 1.3;
    margin: 0 auto 18px;
    max-width: 640px;
    color: #f8f5f0;
  }
  .pull-quote cite {
    display: block;
    font-family: "Inter", system-ui, sans-serif;
    font-size: 13px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #d4a07a;
    font-style: normal;
  }

  /* Listing fact box */
  .fact-box {
    background: #f8f5f0;
    border-left: 3px solid #b8845c;
    padding: 26px 28px;
    margin: 32px 0;
  }
  .fact-box h3 {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: 22px;
    margin: 0 0 12px;
    color: #2c2c2c;
  }
  .fact-box dl {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 8px 16px;
    font-size: 15px;
    margin: 0;
  }
  .fact-box dt {
    font-weight: 600;
    color: #555;
  }
  .fact-box dd {
    margin: 0;
    color: #2c2c2c;
  }
  .fact-box .source-line {
    font-size: 12px;
    color: #777;
    margin: 14px 0 0;
  }

  /* Numbered timeline */
  .timeline {
    counter-reset: step;
    list-style: none;
    padding: 0;
    margin: 28px 0;
  }
  .timeline li {
    counter-increment: step;
    position: relative;
    padding: 0 0 28px 64px;
    border-left: 1px solid #e8e3da;
    margin-left: 22px;
  }
  .timeline li:last-child { border-left: 0; padding-bottom: 0; }
  .timeline li::before {
    content: counter(step);
    position: absolute;
    left: -22px;
    top: -4px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #b8845c;
    color: #ffffff;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .timeline h4 {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: 20px;
    margin: 0 0 6px;
    color: #2c2c2c;
  }
  .timeline p {
    margin: 0;
    font-size: 16px;
    color: #2c2c2c;
  }

  /* CTA box */
  .cta-box {
    background: #f8f5f0;
    border: 1px solid #e8e3da;
    padding: 48px 32px;
    text-align: center;
    margin: 56px 0 0;
  }
  .cta-box h3 {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: clamp(1.6rem, 3vw, 2rem);
    color: #2c2c2c;
    margin: 0 0 12px;
  }
  .cta-box p {
    font-size: 16px;
    color: #555;
    max-width: 520px;
    margin: 0 auto 24px;
  }
  .btn-primary {
    display: inline-block;
    background: #b8845c;
    color: #ffffff;
    font-family: "Inter", system-ui, sans-serif;
    font-weight: 600;
    font-size: 15px;
    padding: 14px 30px;
    border-radius: 2px;
    text-decoration: none;
    border: 0;
  }
  .btn-primary:hover { background: #a87450; color: #ffffff; }
  .btn-secondary {
    display: inline-block;
    background: #2f5233;
    color: #f8f5f0;
    font-family: "Caveat", cursive;
    font-weight: 400;
    font-size: 22px;
    padding: 10px 26px;
    border-radius: 2px;
    text-decoration: none;
    margin-left: 8px;
  }
  .btn-secondary:hover { background: #3d6b42; color: #f8f5f0; }

  /* Author footer */
  .author-foot {
    background: #ffffff;
    padding: 48px 0 56px;
    border-top: 1px solid #e8e3da;
    margin-top: 48px;
  }
  .author-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .author-card .label-small {
    font-family: "Inter", system-ui, sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #b8845c;
    margin: 0 0 8px;
  }
  .author-card h4 {
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: 28px;
    margin: 0 0 8px;
    color: #2c2c2c;
  }
  .author-card p {
    font-size: 15px;
    color: #555;
    margin: 0 0 8px;
    line-height: 1.7;
  }

  /* Footer */
  footer.site-foot {
    background: #1a1a1a;
    color: #d4a07a;
    padding: 36px 0;
    font-size: 13px;
    line-height: 1.7;
  }
  footer.site-foot a { color: #f8f5f0; }
  footer.site-foot .foot-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: center;
  }
  footer.site-foot .eho {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #f8f5f0;
  }
  footer.site-foot .eho-mark {
    width: 36px;
    height: 36px;
    border: 2px solid #f8f5f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Cormorant Garamond", Georgia, serif;
    font-weight: 700;
    font-size: 18px;
    color: #f8f5f0;
  }

  @media (max-width: 768px) {
    .stat-row { grid-template-columns: 1fr; }
    .fact-box dl { grid-template-columns: 1fr; gap: 4px 0; }
    .fact-box dt { color: #777; font-size: 13px; }
    footer.site-foot .foot-grid { grid-template-columns: 1fr; }
    .btn-secondary { margin-left: 0; margin-top: 12px; }
  }
</style>


<div class="topbar">
  Brokered by Katrina Eileen Real Estate &middot; Serving Snohomish, King, Pierce &amp; Skagit Counties
</div>



<section class="article-body lede">
  <div class="wrap">
    <p>If you have been quietly tracking Mukilteo this spring, you have probably noticed something nobody is writing about. The split-entry homes from the 1970s &mdash; the ones with a downstairs that has its own kitchen and its own door &mdash; are doing something the rest of the market is not. They are pending in roughly six days when they are prepped and priced right, per the April 2026 Zillow Mukilteo snapshot.</p>
    <p>I want to walk you through why. I closed my last home at 102.03% of list, which is the number on my Sellers page right now. The NWMLS market average is 100.2% per the April 2026 NWMLS snapshot. The gap is not luck. The gap is a layout that meets a real-life question more buyers are asking: where do the people we love actually fit?</p>
  </div>
</section>

<section class="article-body alt">
  <div class="wrap">
    <p class="section-eyebrow">The undercovered story</p>
    <h2 class="section-title">Why nobody is talking about Mukilteo's multi-gen layouts</h2>
    <p>Most Snohomish County coverage right now is pointing at one number: <strong>+51.8% year-over-year inventory growth</strong> per the April 2026 NWMLS snapshot. And it is true. Buyers have more choice than they have had in over a year. The takeaway in most articles is "buyer's market." That is not quite right, and Mukilteo is the proof.</p>
    <p>Here is what is actually happening. Generic listings are sitting longer. Specific layouts that solve a specific problem are not. Multi-generational homes &mdash; the ones with a separate downstairs kitchen, bath, and entrance &mdash; sit in the second category. Adult kids moving back. Parents downsizing closer. Extended-stay guests. A home office that is genuinely separate. The functional flexibility carries the same weight as a view in this price band.</p>
    <p>The 1976 NW Contemporary split-entry was built for this exact use case before anyone called it "multi-gen." Mukilteo has more of them than any other Snohomish County submarket I can think of, and most of them have not been touched in twenty years. The remodeled ones are the asset.</p>
  </div>
</section>

<section class="article-body dark">
  <div class="wrap">
    <p class="section-eyebrow">Case study</p>
    <h2 class="section-title">What 4611 76th St SW actually looks like</h2>
    <p>I will use my current Mukilteo listing as a working example because the specs are public and the photos are honest. This is a renovated 1976 NW Contemporary on a fenced corner lot a one-minute walk from Japanese Gulch trails. List price $975,000. Listed April 30, 2026.</p>

    <div class="fact-box">
      <h3>4611 76th Street SW &middot; Mukilteo, WA 98275</h3>
      <dl>
        <dt>Price</dt><dd>$975,000</dd>
        <dt>Beds / Baths</dt><dd>4 bedrooms + office &middot; 2.25 bath</dd>
        <dt>Square footage</dt><dd>2,605 sqft on a 10,454 sqft lot</dd>
        <dt>Year built</dt><dd>1976 NW Contemporary, fully remodeled</dd>
        <dt>Multi-gen layout</dt><dd>Downstairs kitchenette, family room, bath, and bedroom &mdash; separate from the main living area</dd>
        <dt>Outdoor</dt><dd>Three decks, hot tub, mature rose garden, fenced corner lot, RV parking</dd>
        <dt>Kitchen</dt><dd>Quartz counters, Fisher &amp; Paykel French-door fridge, Fisher &amp; Paykel dishwasher</dd>
        <dt>View</dt><dd>Puget Sound and Olympic Mountains</dd>
        <dt>Schools</dt><dd>Mukilteo Elementary &middot; Olympic View Middle &middot; Kamiak High</dd>
        <dt>Annual taxes</dt><dd>$6,423</dd>
      </dl>
      <p class="source-line">All specs per MLS NWM2513590. Brokered by Katrina Eileen Real Estate.</p>
    </div>

    <p>The thing the photos cannot quite show is the daily ergonomics. The downstairs has its own entrance off the lower deck. A returning college kid, a parent staying for the season, or a long-visiting in-law has a kitchenette, a bath, a bedroom, and privacy &mdash; and the main household upstairs still has an unbothered routine. That is what people mean when they search for "multi-gen." It is not a buzzword. It is a daily-life calculation.</p>

    <p>RV parking on a corner lot in this price band is also genuinely rare in Mukilteo. So is being a one-minute walk to Japanese Gulch trails and the kids' bike park while still having the Olympic view from the upper deck. Paine Field is close enough for the commute and far enough that you do not feel it.</p>
  </div>
</section>

<section class="article-body alt">
  <div class="wrap">
    <p class="section-eyebrow">The math behind the moment</p>
    <h2 class="section-title">Mukilteo's pricing math in May 2026</h2>
    <p>The headline numbers tell a different story than the local ones. Let me show you what I mean.</p>
    <p>Snohomish County's median sale price is <strong>$735,750</strong> per the April 2026 NWMLS snapshot &mdash; essentially flat versus March. Sale-to-list across the county is <strong>99.9%</strong>, meaning prepped homes still close at ask. Days on market sits at 35 on average, but well-prepped homes pend in 6 to 15.</p>
    <p>Now zoom in. Mukilteo's typical home value is <strong>$863,937</strong> per the April 2026 Zillow snapshot, down 7.2% year-over-year, with average days to pending around <strong>six</strong> when priced right. The 30-year fixed mortgage rate is <strong>6.30%</strong> per Freddie Mac PMMS for the week ending April 30, 2026 &mdash; about 46 basis points below where it sat a year ago.</p>
    <p>Read those together and the market story is not "buyers retreat." It is "buyers got picky." They have inventory to choose from, so they are choosing well-prepped, problem-solving homes and skipping the ones that are coasting. A multi-gen split-entry that has actually been remodeled is the kind of listing the picky buyer was waiting for.</p>

    <div class="stat-row">
      <div class="stat-card">
        <p class="num">102.03%</p>
        <p class="label">Kim's personal sale-to-list ratio</p>
        <p class="source">Per the live Sellers page on thepelhamgroupnw.com vs. the 100.2% NWMLS market average.</p>
      </div>
      <div class="stat-card">
        <p class="num">~6 days</p>
        <p class="label">Mukilteo time to pending when priced right</p>
        <p class="source">Per the April 2026 Zillow Mukilteo snapshot.</p>
      </div>
      <div class="stat-card">
        <p class="num">6.30%</p>
        <p class="label">30-year fixed mortgage rate</p>
        <p class="source">Per Freddie Mac PMMS, week ending April 30, 2026.</p>
      </div>
    </div>
  </div>
</section>

<aside class="pull-quote">
  <div class="wrap">
    <blockquote>"I Don't Just Sell Homes Here. I Live Here."</blockquote>
    <cite>&mdash; Kim Pelham, your neighbor in real estate</cite>
  </div>
</aside>

<section class="article-body">
  <div class="wrap">
    <p class="section-eyebrow">What the work actually looks like</p>
    <h2 class="section-title">What "walking alongside" means for a multi-gen move</h2>
    <p>A multi-gen sale or purchase is rarely just a real-estate transaction. It is a logistics puzzle with people in it. A parent moving closer. An adult child returning. A guest room that needs to be a real room. The conversations are about timing, about who lives where during the in-between, about whether a downsize and an upsize need to happen in the same six weeks.</p>
    <p>I keep my calendar at a maximum of two active clients at a time on purpose. That is the only way to actually be present for the calls that come in at 8 PM on a Tuesday because something just shifted. I answer my own phone. No assistant, no call screening, no game of telephone. If you have a Senior Concierge piece on top of the move &mdash; downsizing a parent, sorting out fixtures, coordinating with the SMART Building Solutions team for repairs that can be deferred until close &mdash; that is built into how I work. It is not a separate service tier.</p>
    <p>None of this is a pitch. I am laying it out so you know what you would be signing up for if we ended up working together. No pitch, no pressure.</p>
  </div>
</section>

<section class="article-body alt">
  <div class="wrap">
    <p class="section-eyebrow">Inside the first week</p>
    <h2 class="section-title">What the first 7 days of a Mukilteo showing looks like</h2>
    <p>Sellers ask me what actually happens between "we listed it" and "we have an offer." Here is the version that is honest, not curated.</p>
    <ol class="timeline">
      <li>
        <h4>Day 1 &mdash; MLS goes live</h4>
        <p>Listing pushes to NWMLS, syndicates to the major portals, and lands on kim.katrinaeileen.com. Pro photos and Matterport 3D are live by hour one. The first inquiries come from buyer agents inside the day.</p>
      </li>
      <li>
        <h4>Days 2&ndash;3 &mdash; Pre-open showings</h4>
        <p>Buyer agents who have a serious client request a private tour before the open house. In the $750K-$949K bracket these are the buyers who are not waiting for a weekend.</p>
      </li>
      <li>
        <h4>Day 4 &mdash; Broker network and digital push</h4>
        <p>Outreach goes to the buyer-agent network inside Snohomish and north King. Social cascade lands. Targeted email to warm-buyer segments who have been searching the price band and the multi-gen feature set.</p>
      </li>
      <li>
        <h4>Day 5&ndash;6 &mdash; Offers start to surface</h4>
        <p>By the second or third showing, the buyers who fit the home self-identify. We compare written offers to the comparables I prepped before listing &mdash; price, contingencies, financing, timing.</p>
      </li>
      <li>
        <h4>Day 7 &mdash; Decision day</h4>
        <p>For Mukilteo's 6-day pending baseline, this is where the negotiation lands. We go to the seller with the offers, the trade-offs, and a recommendation. The goal is not the highest paper number. The goal is the one most likely to actually close.</p>
      </li>
    </ol>
  </div>
</section>

<section class="article-body">
  <div class="wrap">
    <p class="section-eyebrow">If you are thinking about selling</p>
    <h2 class="section-title">A starting point that costs you nothing</h2>
    <p>If you are reading this, you are probably thinking about buying or selling a home. Maybe you are nervous. The number one question I hear from sellers right now is the simplest one: "what is my home actually worth in this market?"</p>
    <p>The free home valuation tool I use is a real starting point &mdash; not a lead-bait pop-up. You give it your address. It returns a real range. From there, if you want a sharper number that accounts for the layout, the prep, and the timing, that is a conversation. No pitch, no pressure.</p>

    <div class="cta-box">
      <h3>Ready to write your next chapter?</h3>
      <p>Get a real number on your home in this market. The valuation tool is free, the conversation after is optional.</p>
      <a class="btn-primary" href="https://kim.katrinaeileen.com/seller">Get my free home valuation</a>
      <a class="btn-secondary" href="tel:+14252509422">Talk to Kim</a>
    </div>
  </div>
</section>

<section class="author-foot">
  <div class="wrap">
    <div class="author-card">
      <p class="label-small">Written by</p>
      <h4>Kim Pelham &middot; The Realtor Next Door</h4>
      <p>17+ years across Snohomish, King, Pierce, and Skagit Counties. Principal Broker at The Pelham Group NW, brokered by Katrina Eileen Real Estate. Published author of <em>Six-Word Lessons on Selling Your Home in Snohomish County</em>. I answer my own phone: 425-250-9422.</p>
      <p>Office: 2815 Baker Ave Suite 103, Everett, WA 98201 &middot; <a href="https://thepelhamgroupnw.com">thepelhamgroupnw.com</a></p>
    </div>
  </div>
</section>



`;

export default function MukilteoMultigenMay2026Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <InnerHero
          title={'Mukilteo\'s most undercovered move: the multi-gen split-entry'}
          subtitle="By Kim Pelham"
          image="/images/hero-01-aerial-neighborhood.jpg"
          imageAlt={'Mukilteos most undercovered move: the multi-gen split-entry'}
        />
        <article style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }} dangerouslySetInnerHTML={{ __html: ARTICLE_HTML }} />
        </article>
      </main>
      <Footer />
    </>
  );
}

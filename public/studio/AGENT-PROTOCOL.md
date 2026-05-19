# Pelham Brand Studio · Agent Protocol

**Live at:** `https://templates.thepelhamgroupnw.com/`
**For:** Theo, Sasha, Marco, Riley, Mara, Bea — and anyone driving content for The Pelham Group NW.

This is the canvas. You don't free-hand brand assets anymore. You construct a URL, the studio renders, you screenshot or copy the output, you ship.

---

## §1 · The render protocol (60 seconds)

1. **Pick a template ID** from the registry (see §3 for the full list).
2. **Build a URL** with slot overrides as query parameters.
3. **Open the URL** in a browser (or have headless Chrome screenshot it).
4. **Ship the output** — paste HTML into GHL, post the PNG to Meta, etc.

### URL pattern

```
https://templates.thepelhamgroupnw.com/?template={{TEMPLATE_ID}}&slot1=value1&slot2=value2&...
```

Slot values are URL-encoded plain strings. The studio merges them on top of `TWEAK_DEFAULTS` at boot.

### Example — Potlatch price drop ad

```
https://templates.thepelhamgroupnw.com/
  ?template=meta-ad-price-drop
  &listingCity=MARYSVILLE
  &listingAddress=1406%20Potlatch%20Beach%20Road
  &listingPrice=$799,900
  &listingOldPrice=$899,900
  &openHouseDay=SUNDAY
  &openHouseDate=May%2017
  &openHouseTime=1-3%20PM
```

Renders the exact Potlatch price-drop ad. Brand-correct. Compliance baked in (EHO + WA Broker #119262 + MLS in footer).

### Example — Mukilteo open-house drive

```
https://templates.thepelhamgroupnw.com/
  ?template=meta-ad-open-house-drive
  &listingCity=MUKILTEO
  &listingAddress=4611%2076th%20Street%20SW
  &listingPrice=$975,000
  &openHouseDay=SATURDAY
  &openHouseDate=May%2016
  &openHouseTime=1-4%20PM
  &listingHook=Remodeled%20around%20the%20Olympic%20Mountain%20view
```

### Special params

| Param | Effect |
|---|---|
| `?template=X` | Auto-select template by id on load |
| `?ui=clean` | Hide sidebar + toolbar (for screenshot-only output) |
| Any `TWEAK_DEFAULTS` key | Override that slot value |
| Unknown keys | Pass-through; logged as info; templates can opt-in to read them |

---

## §2 · The slot dictionary

Every template reads from a global `tweaks` object. These are the canonical slots — any of them is overridable via URL param:

### Listing slots

```
listingCity            "MUKILTEO"
listingAddress         "4611 76th Street SW"
listingPrice           "$975,000"
listingOldPrice        "$1,049,000"      (for price-drop templates)
listingBeds            "4 + Office"
listingBaths           "2.25"
listingSqft            "2,605"
listingMls             "2287416"
listingHook            "Remodeled around the Olympic Mountain view."
```

### Event slots (open house)

```
openHouseDay           "SATURDAY"
openHouseDate          "May 23"
openHouseTime          "12 - 3 PM"
```

### Stat / authority slots

```
statBigNumber          "102.3%"
statBigLabel           "Sale-to-List Ratio"
```

### Editorial slots

```
headlineNewsletter     "Mukilteo is moving, here is what I am watching"
```

### Brand toggles

```
complianceVisibility   "subtle" | "prominent"     (controls footer treatment)
accentColor            "#B8845C"                  (override clay)
forestColor            "#2F5233"                  (override forest)
```

---

## §3 · Template registry (38 templates · 10 surfaces)

Template IDs are kebab-case and live across these surfaces:

| Surface | Native size | Template IDs (partial list — open the studio for the full set) |
|---|---|---|
| Email (Gmail-compatible) | 600px width, variable height | `pelham-post-newsletter`, `listing-announcement`, `open-house-invite`, `price-drop-alert`, `market-update-monthly`, `just-sold-celebration` |
| Instagram Feed | 1080 × 1350 | `ig-feed-listing-bottom-stack`, `ig-feed-stat-card`, `ig-feed-comparison`, `ig-feed-testimonial` |
| Instagram Story | 1080 × 1920 | `ig-story-3frame-listing`, `ig-story-3frame-market`, `ig-story-open-house-countdown` |
| Facebook | 1200 × 628 | `fb-post-listing`, `fb-post-market-update` |
| LinkedIn | 1200 × 628 + 6-card carousel | `linkedin-post-hero`, `linkedin-carousel-slides` |
| Reels & Cover | 1080 × 1920 | `ig-reels-cover` |
| Meta Ad Creative | 1080 × 1080 / 1080 × 1920 | `meta-ad-listing-single-image`, `meta-ad-listing-carousel`, `meta-ad-listing-video-reel`, `meta-ad-price-drop`, `meta-ad-open-house-drive`, `meta-ad-broker-stat-card`, `meta-ad-comparison`, `meta-ad-testimonial` |
| Blog & Pages | 1200px width | `blog-market-update`, `blog-listing-feature`, `blog-neighborhood-guide`, `blog-definitive-answer` |
| Print | 8.5 × 11 in | `flyer-open-house`, `flyer-listing-feature-sheet` |
| Video Scripts | document | `script-listing-reel-30s`, `script-market-update-reel-60s` |

**The studio sidebar lists all 38 with native dimensions and tier (T1/T2/T3).** Use search at the top to filter.

---

## §4 · Headless rendering for agent output

When an agent needs a PNG to post to Meta / Instagram / Facebook, use this pattern:

```python
# Pseudo-code for any agent that has access to a browser MCP or Puppeteer/Playwright
def render_template(template_id, slots, output_path):
    base = "https://templates.thepelhamgroupnw.com/"
    qs = urlencode({"template": template_id, "ui": "clean", **slots})
    url = f"{base}?{qs}"

    # Launch headless Chrome at the template's native dimensions
    # (look up dimensions from the registry below — e.g. 1080×1350 for IG feed)
    width, height = TEMPLATE_DIMENSIONS[template_id]

    browser.set_viewport(width, height)
    browser.navigate(url)
    browser.wait_for_render(seconds=3)  # let React + Babel hydrate
    browser.screenshot(output_path, full_page=False, clip={
        "x": 0, "y": 0, "width": width, "height": height
    })
    return output_path
```

The `ui=clean` param hides the studio's sidebar and toolbar so the screenshot captures ONLY the template at its native dimensions.

For the Pelham agency, **Marco** (designer-director) owns the headless render integration. Marco's workflow:

```
1. Strategist agent emits: {"template_id": "meta-ad-price-drop", "slots": {...}}
2. Marco's render_template() builds the URL, screenshots, uploads to S3 or GHL Media Library
3. Marco returns the asset URL
4. Sasha (social) or Mara (listings) queues the post in GHL with that asset URL attached
```

---

## §5 · Brand compliance (enforced by the template, not by hope)

These rules are **rendered into every template** — agents cannot accidentally violate them:

✅ EHO (Equal Housing Opportunity) disclosure in footer of every template
✅ "Brokered by Katrina Eileen Real Estate" attribution
✅ WA Broker License #119262 visible
✅ NWMLS Broker #103153 visible
✅ Pelham brand colors (Forest #2F5233, Clay #B8845C, Cream #F8F5F0) baked into CSS variables
✅ Cormorant Garamond + Inter + Caveat fonts self-hosted (no external CDN dependency)
✅ Property MLS # field on every listing-specific template (slot: `listingMls`)

These are **fixed**. An agent cannot remove them, hide them, or color them invisible. They are not slots.

### Voice rules (agent responsibility)

The TEXT content agents put into slots must follow Kim's voice rules. The studio renders whatever you give it — it does NOT lint your copy. Apply these rules BEFORE constructing the URL:

❌ **No em dashes.** Use period, comma, parens, or "to" for ranges.
❌ **No exclamation marks in headlines** (eyebrows, H1/H2 levels).
❌ **No urgency tactics** ("Don't miss out!", "Act fast!", "Limited time!").
❌ **No invented property features** — must match the MLS source for that listing.
❌ **No superlatives without proof** ("the best", "stunning", "amazing").
✅ **Specific numbers over vague claims.** "102.3% sale-to-list" not "great results."
✅ **First-person Kim.** "I dropped the price" not "Kim dropped the price."
✅ **"Always, Kim" sign-off** on signature lines. Never `— Kim`.

---

## §6 · For agents that need the raw HTML output (email templates)

For email templates specifically, agents may need the rendered HTML to paste into GHL or another email tool — not a screenshot.

Two options:

**A) Pull from the rendered DOM:**

```js
// In a Puppeteer / Playwright script:
const html = await page.evaluate(() => {
  return document.querySelector('.stage-frame').innerHTML;
});
// Wrap in <!DOCTYPE html><html>...<body>{html}</body></html> as needed
```

**B) Use the template's source JSX file directly:**

Each template lives at `templates/{surface}.jsx` (e.g. `templates/email.jsx`). The render function exports a self-contained React component. Marco can compile this server-side and emit pure HTML if needed.

For now, **screenshot is the production path**. HTML extraction is for advanced cases.

---

## §7 · Update protocol

To add a new template or update an existing one:

1. Edit the appropriate file in `studio/templates/*.jsx`
2. The template uses `tweaks` (slot values) + `listing` (derived from slots) as React props
3. Call `window.registerTemplate({...})` at the bottom of the file with metadata
4. Commit. The kim-pelham-site repo deploys the studio automatically via Vercel.

**Brand changes (color, font, voice) require a separate approval pass.** Anything touching `lib/brand.jsx` or `design-system/colors_and_type.css` should be reviewed by Rachael before merging — the brand truth is the LIVE SITE, not this directory, and they must stay in sync.

---

## §8 · Common patterns for the agency

### Riley (newsletter) — building Vol N

```
template = "pelham-post-newsletter"
slots = {
  listingCity, listingAddress, listingPrice, listingHook,
  openHouseDay, openHouseDate, openHouseTime,
  headlineNewsletter
}
output = rendered HTML (pasted into GHL email composer)
```

### Sasha (social) — building this week's IG cascade

```
For each post in cascade:
  template = "ig-feed-listing-bottom-stack" | "ig-feed-stat-card" | "ig-story-3frame-listing"
  slots = listing data + event data + stat data
  output = PNG screenshot, uploaded to GHL Media Library + Social Planner
```

### Mara (listings director) — full listing campaign cascade

```
For one listing, generate:
  1. listing-announcement email
  2. ig-feed-listing-bottom-stack
  3. ig-story-3frame-listing
  4. fb-post-listing
  5. meta-ad-listing-single-image
  6. meta-ad-listing-carousel
  7. open-house-invite email
  8. flyer-open-house (print)
ALL with the same slot data. One source of truth, 8 outputs. That's the flywheel.
```

### Marco (designer) — Reels script + render

```
template = "script-listing-reel-30s"
slots = listing data
output = markdown shot list for the videographer
ALSO: template = "ig-reels-cover", same slots, screenshot = the cover image
```

---

## §9 · Brand studio access

**Production URL:** `https://templates.thepelhamgroupnw.com/`
**Auth:** None for now. Internal-only. If usage expands, add Vercel Authentication or Cloudflare Access.
**Indexing:** `noindex, nofollow` is set in both the HTML meta tag AND the X-Robots-Tag HTTP header. Google + AI crawlers will skip.

**Local dev:** Open `kim-pelham-site/public/studio/index.html` via `python3 -m http.server 8765` in the `public/studio/` directory. Then `http://localhost:8765/`.

**Source of truth:** `kim-pelham-site/public/studio/` in the kim-pelham-site repo. Commits to main deploy automatically to Vercel, which serves both the public site AND the templates subdomain from the same build.

---

## §10 · Changelog

- **v1 · 2026-05-19** — Initial deployment. 38 templates across 10 surfaces. URL-param brand studio mode live. `?ui=clean` for screenshot-only output. Hosted at `templates.thepelhamgroupnw.com` via host-conditional rewrite in `next.config.mjs`.

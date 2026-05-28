# Admiralty Way studio kit

**Listing:** 11706 Admiralty Way Unit B, Everett, WA 98204
**MLS:** #2528831 · **Price:** $375,000 · **Beds/Baths:** 2 / 1.75 · **SqFt:** 1,140
**Open house:** Saturday, May 30 · 1:00 to 3:00 PM

Rendered locally through `https://thepelhamgroupnw.com/studio` via
`scripts/render-listing-kit.mjs`. Every asset is a screenshot of the live
studio template with this listing's data passed in as URL params plus photo
URLs from `/listings/2528831-admiralty/photos/`.

## What's here

### Print (PDFs + JPEGs)
- `flyer-listing-feature-sheet.{jpg,pdf}` — one-page feature sheet (8.5x11). Open-house handout.
- `flyer-open-house.{jpg,pdf}` — open-house flyer with date/time/QR placeholder (8.5x11).
- `mailer-postcard-just-listed.{jpg,pdf}` — just-listed postcard (11x6, mailable).

### Instagram
- `ig-feed-listing-portrait.jpg` — single-image feed post (1080x1350).
- `ig-feed-stat-card.jpg` — Pelham 102.3% sale-to-list brand card (pairs with the listing).
- `ig-story-3frame-listing.jpg` — 3-frame story sequence (1080x1920).
- `ig-story-open-house-countdown.jpg` — open-house countdown story (1080x1920).

### Facebook / LinkedIn
- `fb-post-listing.jpg` — Facebook listing post (1200x628).
- `linkedin-post-hero.jpg` — Kim brand hero post for LinkedIn (1200x628).

### Meta ads
- `meta-ad-listing-single-image.jpg` — 1:1 single image (1080x1080).
- `meta-ad-listing-portrait.jpg` — 9:16 portrait (1080x1920).
- `meta-ad-open-house-drive.jpg` — open-house RSVP ad (1080x1080).

### Email
- `email-listing-announcement.jpg` — Gmail-shaped announcement (600 wide).
- `email-open-house-invite.jpg` — Open-house invite (600 wide).

### Blog / web
- `blog-listing-feature.jpg` — Editorial blog post (1200 wide).
- `property-page-active.jpg` — Active-listing property page (1440 wide).

### Scripts
- `script-listing-reel-30s.{jpg,pdf}` — 30-second reel brief (storyboard).
  Note: shot list is structural; VO copy still references Mukilteo and needs
  a creative rewrite for this property.

## Companion social cards already queued in Zernio

The earlier photo-led carousel cards live at `/public/social/admiralty/01-08.jpg`
and are referenced by 3 Zernio drafts (FB single, IG 8-card carousel, GBP single).
Those are in addition to the studio kit above.

## Regenerate

```bash
node scripts/render-listing-kit.mjs
```

Listing data + photo paths are in the script. Edit there for future listings or
to override per-render.

/*
  Mathis condo case-study data: paired before/after photos + terse
  action-verb captions + concierge bullets + FAQs.

  v4 rewrite (June 2026) per Kim's feedback:
    - Captions describe what was DONE, not what is IN the frame.
    - Photos are paired room-by-room so a reader sees the before of
      a room immediately followed by the after of the same room.
    - The hero pair is the living room before AND living room after.
    - Standalone listing-media set (exteriors, garages, HOA, dining
      vignettes that have no real before) is exposed separately so
      it can render as a gallery underneath the paired walkthrough.

  Photo timeline (unchanged):
    - BEFORE: 25 photos, shot 2026-05-08. Vacant pre-prep walk.
    - AFTER:  39 photos, shot 2026-05-28. Listing-media set.

  Brand: no em dashes anywhere (Savvy global rule).
*/

import type { CarouselSlide } from '@/components/CaptionedCarousel';

const BEFORE_PATH = '/case-studies/mathis-condo/before';
const AFTER_PATH = '/case-studies/mathis-condo/after';
export const BEFORE_COUNT = 27;
export const AFTER_COUNT = 40;

/* ============================================================ */
/* PAIRED ROOM-BY-ROOM WALKTHROUGH                              */
/* ============================================================ */
/*
  One entry per room. beforeIdx and afterIdx are 1-indexed
  filenames in the before/ and after/ folders. The carousel
  renders these as a fade-morph between the two photos.
*/

export type RoomPair = {
  /** Short room label shown as a chip on the slide */
  room: string;
  /** Action-verb summary of what was done (Kim's voice, terse) */
  work: string;
  beforeIdx: number;
  afterIdx: number;
};

export const roomPairs: RoomPair[] = [
  {
    room: 'Living room',
    work: 'New sage paint. New marble herringbone fireplace surround. New flooring. Fully staged.',
    beforeIdx: 1,
    afterIdx: 19,
  },
  {
    room: 'Living room, toward the patio',
    work: 'New flooring carries through. Cream sofa, sheer linen curtains, sliding door reframed.',
    beforeIdx: 4,
    afterIdx: 22,
  },
  {
    room: 'Kitchen',
    work: 'Oak cabinets cleaned and restyled instead of gutted. Counter dressed.',
    beforeIdx: 11,
    afterIdx: 14,
  },
  {
    room: 'Primary bedroom',
    work: 'New LVP. New paint. Staged with floral duvet and lamp.',
    beforeIdx: 22,
    afterIdx: 1,
  },
  {
    room: 'Primary vanity',
    work: 'New white double vanity. Quartz counter. Matte black faucets. New mirror.',
    beforeIdx: 26,
    afterIdx: 5,
  },
  {
    room: 'Secondary bedroom',
    work: 'Painted over the turquoise. New flooring. Staged with twin bed and tipi.',
    beforeIdx: 5,
    afterIdx: 11,
  },
  {
    room: 'Secondary bedroom, angle',
    work: 'Same room from the door. Refreshed end to end.',
    beforeIdx: 6,
    afterIdx: 12,
  },
  {
    room: 'Guest bath',
    work: 'New white vanity. Quartz top. Matte black faucet. New round mirror. Calm palette.',
    beforeIdx: 27,
    afterIdx: 40,
  },
];

/* ============================================================ */
/* TERSE CAPTIONS (for the gated funnel carousel which still     */
/* uses two separate before/after carousels)                     */
/* ============================================================ */

/* eslint-disable max-len */
const beforeCaptions: string[] = [
  'Living room, starting point.',
  'Looking from the living area through to the kitchen.',
  'From the living room into the entry foyer.',
  'Living room from the opposite corner.',
  'Secondary bedroom, starting point.',
  'Looking from the secondary bedroom back into the living room.',
  'Guest bath, starting point.',
  'Empty closet at the start of prep.',
  'Primary vanity, starting point.',
  'Open dining-to-kitchen transition.',
  'Kitchen, original.',
  'Kitchen, wider angle.',
  'Kitchen, other direction.',
  'Hallway toward the laundry room.',
  'Laundry room, before final touches.',
  'Closet mid-prep.',
  'Primary suite area, mid-prep.',
  'Walk-in closet, original orange paint.',
  'Primary bath corner, mid-prep.',
  'Primary shower, original.',
  'Bedroom, original.',
  'Primary bedroom, starting point.',
  'Primary bedroom corner.',
  'Primary bedroom looking through the doorway.',
  'Bedroom to hallway transition.',
  'Primary bath, lived-in baseline.',
  'Guest bath, lived-in baseline.',
];

const afterCaptions: string[] = [
  'Primary bedroom. New flooring. New paint. Staged.',
  'Primary bedroom, hallway angle. Gallery art added.',
  'Entry alcove. Console styled.',
  'Walk-in closet. Refreshed.',
  'Primary vanity. New double vanity, quartz top, matte black faucets.',
  'Primary vanity, closer. Mirror upgraded.',
  'Primary shower. Cleaned up, new shower head, styled.',
  'Laundry room. Dressed and tidy.',
  'Walk-in closet. Painted top to bottom, wire shelving reset.',
  'Guest bath. New vanity, quartz top, matte black faucet.',
  'Secondary bedroom. Painted, staged with twin bed.',
  'Secondary bedroom, angle. Tipi tent on the cowhide rug.',
  'Through the kids bedroom door, into the living area.',
  'Kitchen. Cabinets cleaned and restyled instead of gutted.',
  'Kitchen, wider. Same oak, fresh styling.',
  'Kitchen, bar nook angle.',
  'Kitchen looking into the staged dining area.',
  'Dining area. Pedestal table, landscape art.',
  'Living room. New sage paint, marble herringbone surround, peony art.',
  'Living room, fireplace centered.',
  'Living room toward the french doors.',
  'Living room toward the sliding glass door.',
  'Living room through to the dining area.',
  'Front entry from inside.',
  'Dining looking back through to the living room.',
  'Sliding glass door view to the patio.',
  'Front entry, open.',
  'Front walkway approaching the door.',
  'Back of the unit.',
  'Back patio.',
  'Back yard view.',
  'Exterior wide.',
  'Detached garage interior.',
  'Assigned parking detail.',
  'Same parking, clean angle.',
  'HOA garage row.',
  'HOA garage row, clean.',
  'HOA grounds between the buildings.',
  'Closing frame at the back patio.',
  'Guest bath. Round mirror, star art, new vanity, tan stripe curtain.',
];
/* eslint-enable max-len */

export const beforeSlides: CarouselSlide[] = Array.from({ length: BEFORE_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${BEFORE_PATH}/${n}.jpg`,
    alt: `Mathis condo, before-photo ${i + 1} of ${BEFORE_COUNT}, May 8 2026`,
    caption: beforeCaptions[i] ?? `Before photo ${n}`,
  };
});

export const afterSlides: CarouselSlide[] = Array.from({ length: AFTER_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${AFTER_PATH}/${n}.jpg`,
    alt: `Mathis condo, listing photo ${i + 1} of ${AFTER_COUNT}, May 28 2026 listing-media shoot`,
    caption: afterCaptions[i] ?? `Listing photo ${n}`,
  };
});

/* ============================================================ */
/* LISTING MEDIA GALLERY (after-only, no before counterpart)     */
/* Exteriors, garage, HOA grounds, styling vignettes. Renders    */
/* as a small grid below the paired walkthrough.                 */
/* ============================================================ */

const LISTING_MEDIA_ONLY_INDICES = [3, 13, 16, 21, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 38, 39];

export const listingMediaSlides: CarouselSlide[] = LISTING_MEDIA_ONLY_INDICES.map((i) => {
  const n = String(i).padStart(2, '0');
  return {
    src: `${AFTER_PATH}/${n}.jpg`,
    alt: `Mathis condo, listing media photo ${i} of ${AFTER_COUNT}`,
    caption: afterCaptions[i - 1] ?? `Listing photo ${n}`,
  };
});

/* ============================================================ */
/* HERO PAIR (Living room, before + after of the SAME room)      */
/* ============================================================ */

export const HERO_BEFORE_SRC = `${BEFORE_PATH}/01.jpg`;
export const HERO_AFTER_SRC = `${AFTER_PATH}/19.jpg`;

/* ============================================================ */
/* CONCIERGE BULLETS                                              */
/* ============================================================ */

export const conciergeBullets: string[] = [
  'Walked the unit with the owners before they left the state, then took the keys',
  'Planned the punch list with our crew so every dollar went where buyers actually look',
  'New LVP wide-plank flooring throughout, fresh designer paint top to bottom',
  'Repainted the navy fireplace wall in soft sage, swapped the white-tile surround for the marble herringbone',
  'Refreshed the original oak kitchen cabinets and restyled the counters instead of gutting them',
  'New vanity, quartz counter, and matte black faucet in the primary; matched refresh in the secondary bath',
  'Full Pelham Group staging across living, dining, primary, secondary bedroom, and the patio',
  'Professional listing photography in May once the place was ready to show its real story',
  'Got the condo on the market without a single round trip back to Snohomish County',
];

/* ============================================================ */
/* FAQS                                                          */
/* ============================================================ */

export const caseStudyFAQs = [
  {
    question: 'Where is this condo and is it still on the market?',
    answer:
      'The condo sits in an HOA community in Snohomish County, Washington, with detached one-car garage parking, assigned and visitor spots, a community dog park, a pond with a picnic area, and quick access to Boeing, I-5, I-405, Highway 2, and the future Everett light rail station. We are keeping the exact street address private out of respect for the sellers. The unit is currently listed and available right now.',
  },
  {
    question: 'How did Kim manage a full prep with the owners out of state?',
    answer:
      'We took the keys. The Pelham Group crew handled every step on site: paint, flooring, hardware, refinishing, lighting, staging, and listing photography. The owners approved scope and budget once at the front, then approved photos once at the end. No round trips required.',
  },
  {
    question: 'How long did the prep take?',
    answer:
      'About three weeks from keys to listing photos. The before walk was May 8. Listing media was May 28.',
  },
  {
    question: 'What does the Pelham Group concierge service include?',
    answer:
      'Planning, vendor management, paint, flooring, hardware, refinishing, lighting tune-ups, full Pelham Group staging, and professional listing photography. We coordinate the work in-house so the owner has one point of contact, not five.',
  },
  {
    question: 'Can I get a Home Equity Report for my own home?',
    answer:
      'Use the Home Equity Report request on the gated funnel at thepelhamgroupnw.com/condo-concierge. Kim hand-builds a free Home Equity Report inside 48 hours, with a tight value range based on recent closed comps within a half mile of your address, adjusted for your specific finish and condition. It is not a Zestimate.',
  },
  {
    question: 'What does the Pre-Sale Renovation Playbook cover?',
    answer:
      'The playbook is a 28-page PDF showing where pre-sale prep pays back the best in Snohomish County in 2026. It covers the four to five projects that move the needle (paint, flooring, hardware, staging, lighting), the ones that almost never recoup (kitchen and bath gut remodels), and how to sequence the work in the order buyers will reward.',
  },
];

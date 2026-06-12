/*
  Mathis condo case-study data: photo captions + concierge bullets.
  Shared between /case-study/concierge-condo and /condo-concierge so
  the gated and public surfaces stay in lockstep.

  Photos run in chronological shoot order:
    - BEFORE: 35 photos, shot 2026-04-07
    - AFTER:  25 photos, shot 2026-05-08

  Captions are written room-walkthrough style. They are written to be
  HONEST about what the photo shows and concrete about what changed,
  without overclaiming. Kim/Rachael can swap any one of them by editing
  this file. NO em dashes anywhere (Savvy global brand rule).
*/

import type { CarouselSlide } from '@/components/CaptionedCarousel';

const BEFORE_PATH = '/case-studies/mathis-condo/before';
const AFTER_PATH = '/case-studies/mathis-condo/after';
export const BEFORE_COUNT = 35;
export const AFTER_COUNT = 25;

/* eslint-disable max-len */
const beforeCaptions: string[] = [
  'Arrival walk-up. The first photo from the punch-list visit, taken from the parking lot before we touched anything.',
  'Exterior approach. The entry walkway and front facade as the owners left them.',
  'Front yard and HOA grounds. A baseline shot of the grassy front area and shared landscaping.',
  'Entry door, exterior. The door, hardware, and threshold before the front-of-house refresh.',
  'Living area, looking in. The first interior wide shot. Original flooring, baseline lighting, tired paint.',
  'Living area, secondary angle. A second wider read on the great-room volume and natural light.',
  'Living room corner, by the fireplace. Wood-burning fireplace, surround, and adjacent wall before refinishing.',
  'Living room, opposite wall. The room as a buyer would have walked into it, untouched.',
  'Open kitchen, primary angle. Cabinets, counters, and floor in their original state.',
  'Kitchen island and prep area. The work surfaces and storage before paint and hardware updates.',
  'Kitchen, looking toward the dining nook. A wider read on the open-plan flow.',
  'Dining area, baseline. Floor, walls, and lighting in their original state.',
  'Hallway, looking toward the bedrooms. The corridor before paint and trim work.',
  'Hallway closet detail. One of the storage areas the LED-lighting upgrade later transformed.',
  'Primary bedroom, entering. The room as we found it.',
  'Primary bedroom, wider. A second angle showing window placement and natural light.',
  'Primary bedroom, closet wall. Sliding-door closet before the hardware refresh.',
  'Primary ensuite bath, looking in. The bath as the owners left it.',
  'Primary ensuite vanity. The original vanity, sink, mirror, and faucet.',
  'Primary ensuite tub and surround. Tub and surround pre-refinish.',
  'Primary ensuite, second angle. A wider read on the bath floor plan.',
  'Secondary bedroom, baseline. The second bedroom in its original state.',
  'Secondary bedroom, opposite wall. The second angle of the same room.',
  'Secondary ensuite bath. The second ensuite as we found it.',
  'Secondary vanity. The original vanity area in the second bath.',
  'Secondary tub and shower. The second tub and surround pre-refinish.',
  'Laundry room, looking in. Original layout and storage.',
  'Laundry storage detail. The built-in cabinetry that ended up being a real seller for the listing.',
  'Office nook. The flex space the seller had been using as a home office.',
  'Office outlet detail. Electrical outlet placement, pre-modernization.',
  'Garage interior, before. The detached one-car garage as we found it.',
  'Assigned parking and visitor area. The parking layout for the HOA, as context.',
  'HOA grounds, dog park area. The shared dog park and pond area used by the community.',
  'HOA grounds, picnic area. The picnic area on the grounds.',
  'Back exterior, final baseline. The last of the BEFORE walk, taken on the way out.',
];

const afterCaptions: string[] = [
  'Listing entry. The first AFTER photo, after fresh paint, hardware, and a deep clean.',
  'Living area, looking in. New LVP wide-plank flooring throughout, designer paint, refreshed lighting.',
  'Living area, second angle. A wider read on the staged great room.',
  'Living room, by the fireplace. Wood-burning fireplace with refinished surround and updated mantel staging.',
  'Living room, opposite wall. Staged with Kim\'s own pieces, photographed for the listing.',
  'Kitchen, primary angle. Refreshed cabinets, hardware, lighting, and counter staging.',
  'Kitchen island and prep area. New brushed nickel hardware, current LED lighting, and clean lines.',
  'Kitchen toward dining nook. Open-plan flow with new flooring carrying through.',
  'Dining area, after. New paint, new lighting, staged for the listing.',
  'Hallway, after. Refreshed paint, trim, and door hardware.',
  'Primary bedroom, after. Designer paint, new flooring, staged with Kim\'s pieces.',
  'Primary bedroom, second angle. Window light and staging at listing time.',
  'Primary ensuite bath, after. New vanity, sink, faucet, mirror, and lighting. Surround refinished.',
  'Primary ensuite vanity. New vanity in detail.',
  'Primary ensuite tub and surround. Tub and shower hardware updated, surround refinished.',
  'Secondary bedroom, after. Designer paint, new flooring, staged for the listing.',
  'Secondary bedroom, wider. Second angle of the room.',
  'Secondary ensuite bath, after. Matched-refresh: new vanity, faucet, hardware, and refinished surround.',
  'Secondary vanity, after. New vanity in detail.',
  'Laundry room, after. Designer paint, new lighting, and the built-in storage staged to show.',
  'Office nook, after. Refreshed paint, modern outlets, current lighting.',
  'Hallway closet, after. LED lighting and refreshed door hardware.',
  'Garage interior, after. Cleared, swept, ready for the listing.',
  'Front exterior, listing-ready. Curb shot used in the listing media set.',
  'Final shot of the listing day. The condo as buyers met it.',
];
/* eslint-enable max-len */

export const beforeSlides: CarouselSlide[] = Array.from({ length: BEFORE_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${BEFORE_PATH}/${n}.jpg`,
    alt: `Mathis condo before pre-sale prep, photo ${i + 1} of ${BEFORE_COUNT}, April 7 2026`,
    caption: beforeCaptions[i] ?? `Before photo ${n}`,
  };
});

export const afterSlides: CarouselSlide[] = Array.from({ length: AFTER_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${AFTER_PATH}/${n}.jpg`,
    alt: `Mathis condo after pre-sale prep, photo ${i + 1} of ${AFTER_COUNT}, May 8 2026`,
    caption: afterCaptions[i] ?? `After photo ${n}`,
  };
});

export const conciergeBullets: string[] = [
  'Walked the unit with the owners before they left the state, then took the keys',
  'Planned the punch list with our crew so every dollar went where buyers actually look',
  'New LVP wide-plank flooring throughout, fresh designer paint top to bottom',
  'New vanities, sinks, faucets, tub and shower hardware in both bathrooms',
  'Refinished tub and shower surrounds, brushed nickel hardware throughout',
  'New LED can lighting, new wall heaters, modernized switches and outlets',
  'Smart appliances, smart thermostat, smart automatic blinds',
  'Staged the unit ourselves with Kim\'s own pieces, photographed for listing',
  'Owners approved every step over text and a quick video call, no in-person visits required',
];

export const caseStudyFAQs = [
  {
    question: 'What is the Pelham Group Pre-Sale Concierge service?',
    answer:
      'The Pelham Group Pre-Sale Concierge is a full done-for-you home prep service for Snohomish County sellers. Kim Pelham and her crew handle paint, flooring, lighting, bath and kitchen hardware, refinishing, staging, and listing photography. The owners do not have to hire contractors, schedule trades, or be on site. For qualifying homes, the cost of the agreed prep and staging is paid out of the seller\'s proceeds at closing, so there is no out-of-pocket spend during the prep phase.',
  },
  {
    question: 'Can Kim sell my Snohomish County home if I have already moved out of state?',
    answer:
      'Yes. This case study is exactly that situation. The condo owners moved out of state in week two of the prep. Kim took the keys, ran the full punch list with her own crew, staged the unit with her own pieces, photographed it for the listing, and got it on the market without a single round trip back to Snohomish County by the owners. Decisions ran over text and a short video call. The condo is currently listed.',
  },
  {
    question: 'How long does the Pre-Sale Concierge process take?',
    answer:
      'A typical concierge prep is three weeks once the punch list is agreed: week one is paint and lighting, week two is flooring and any targeted repairs and refinishing, week three is staging and listing photography. The Mathis condo ran on a similar 3 to 4 week cadence between the April baseline walk and the May listing-ready photos shown here.',
  },
  {
    question: 'Who pays for the renovation work?',
    answer:
      'For qualifying homes, the Pelham Group fronts the agreed prep and staging costs, and the seller pays at closing from their sale proceeds. No money out of pocket during the prep phase, no contractor management burden on the seller, no separate financing application. The full cost breakdown is part of the agreement Kim walks every concierge client through before any work begins.',
  },
  {
    question: 'What specifically did you do to the Mathis condo?',
    answer:
      'New LVP wide-plank flooring throughout, fresh designer paint top to bottom, new vanities and faucets in both bathrooms, new bath hardware and refinished tub and shower surrounds, brushed nickel door hardware, new LED can lighting, modernized outlets and switches, new wall heaters, smart appliances, a smart thermostat, smart automatic blinds, full deep clean, and full staging photographed for the listing by Kim. The owners approved each step over text.',
  },
  {
    question: 'Where is the Mathis condo? What part of Snohomish County?',
    answer:
      'The condo sits in an HOA community in Snohomish County, Washington, with detached one-car garage parking, assigned and visitor spots, a community dog park, a pond with a picnic area, and quick access to Boeing, I-5, I-405, Highway 2, and the future Everett light rail station. We are keeping the exact street address private out of respect for the sellers.',
  },
  {
    question: 'Is the concierge service only for condos?',
    answer:
      'No. The Pelham Group Pre-Sale Concierge runs the same way for single-family homes across Everett, Mill Creek, Bothell, Snohomish, Lake Stevens, Marysville, and Mukilteo. The same playbook applies: walkthrough, agreed punch list, our crew handles the prep, Kim stages and photographs, payment from proceeds at closing.',
  },
  {
    question: 'How do I know what my own condo or home is worth?',
    answer:
      'Use the Home Equity Report request on the gated funnel at thepelhamgroupnw.com/condo-concierge. Kim hand-builds a free Home Equity Report inside 48 hours, with a tight value range based on recent closed comps within a half mile of your address, adjusted for your specific finish and condition. It is not a Zestimate.',
  },
];

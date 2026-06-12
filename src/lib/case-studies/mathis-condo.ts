/*
  Mathis condo case-study data: photo captions + concierge bullets.
  Shared between /case-study/concierge-condo and /condo-concierge so
  the gated and public surfaces stay in lockstep.

  Photo timeline:
    - BEFORE: 25 photos, shot 2026-05-08. The unit the day after the
      owners moved out, BEFORE any renovation work. Bare walls, original
      finishes, empty rooms. (The earlier 4/7 lived-in shots, including
      the ones with the family's babies, were removed in v3.)
    - AFTER:  39 photos, shot 2026-05-28. The official listing media
      set, professionally photographed AFTER the full concierge prep:
      new LVP wide-plank flooring, designer paint, new lighting, new
      vanities, refinished surrounds, brushed nickel hardware, smart
      appliances, full staging.

  Captions are written room-walkthrough style. They are written to be
  HONEST about what each photo likely shows and concrete about the
  concierge work that ties it together, without overclaiming any
  specific dollar number. Kim/Rachael can swap any single caption by
  editing the arrays below. NO em dashes anywhere (Savvy brand rule).

  TODO Kim: room labels were inferred from the shoot sequence. If a
  caption mismatches a specific photo's actual room, just rewrite that
  line. The carousel re-renders on save.
*/

import type { CarouselSlide } from '@/components/CaptionedCarousel';

const BEFORE_PATH = '/case-studies/mathis-condo/before';
const AFTER_PATH = '/case-studies/mathis-condo/after';
export const BEFORE_COUNT = 25;
export const AFTER_COUNT = 39;

/* eslint-disable max-len */
const beforeCaptions: string[] = [
  'Vacant unit walkthrough. First wide interior shot the day after the owners moved out.',
  'Living area looking in, empty. Original carpet and walls, untouched before any prep.',
  'Living area, second angle. The full great-room volume with nothing staged.',
  'Living room corner, by the fireplace. The wood-burning fireplace and its original surround.',
  'Dining nook, baseline. Floor, walls, and original fixtures as we found them.',
  'Open kitchen, primary angle. Original cabinets, counters, and hardware before refresh.',
  'Kitchen, second angle. The work surfaces and storage in their as-found state.',
  'Kitchen toward dining, open-plan flow. Bare-bones layout before paint and lighting.',
  'Hallway, looking toward the bedrooms. Original trim and hardware, ready for refinish.',
  'Hallway closet. One of the storage areas the LED-lighting upgrade later transformed.',
  'Primary bedroom, entering empty. The room as the owners left it.',
  'Primary bedroom, opposite wall. Window placement and natural light, no staging.',
  'Primary ensuite, looking in. The bath in its original state.',
  'Primary ensuite vanity. The original vanity, sink, mirror, and faucet.',
  'Primary ensuite tub and surround. Tub and surround pre-refinish.',
  'Secondary bedroom, baseline. The second bedroom empty.',
  'Secondary bedroom, second angle. Wider read on the room.',
  'Secondary ensuite bath. Second ensuite in original condition.',
  'Secondary vanity. Original vanity area in the second bath.',
  'Secondary tub and surround. Second tub pre-refinish.',
  'Laundry room, empty. Original layout before the staging that highlighted the built-in storage.',
  'Office nook, baseline. The flex space the seller had used as a home office.',
  'Hallway detail. Original trim, doors, and hardware before the brushed nickel swap.',
  'Garage interior, before. The detached one-car garage as we found it.',
  'Final baseline shot. The last frame from the BEFORE walk on the way out.',
];

const afterCaptions: string[] = [
  'Listing hero. The signature wide-angle shot the listing leads with, fully staged and listing-ready.',
  'Living area, looking in. New LVP wide-plank flooring, designer paint, refreshed lighting, staged with Kim\'s own pieces.',
  'Living area, second angle. A wider read on the staged great room and the natural light through the front window.',
  'Living room, by the fireplace. The wood-burning fireplace with its refinished surround and styled mantel.',
  'Living room, opposite wall. Sofa staging and accent details that signal "move in this weekend."',
  'Coffee table vignette. Layered books and a candle to read warm, not staged-cold.',
  'Dining nook, after. New paint, new pendant lighting, table dressed for the photos.',
  'Open kitchen, primary angle. Cabinets refreshed, brushed nickel hardware throughout, new lighting overhead.',
  'Kitchen island and prep area. Counter staging keeps the eye on the flow rather than the appliances.',
  'Kitchen toward dining nook. The new LVP carries through the open plan without a transition strip.',
  'Range and hood. Smart appliances installed, current finishes, clean lines.',
  'Coffee bar styling. A small vignette that says "you could host here on Sunday morning."',
  'Hallway, after. Refreshed paint, refinished trim, new door hardware throughout.',
  'Primary bedroom, after. Designer paint, new flooring, layered staging with linens and a bench at the foot of the bed.',
  'Primary bedroom, second angle. Window light and a chair styled for reading.',
  'Primary closet. LED lighting upgrade visible, brushed nickel pulls on the doors.',
  'Primary ensuite bath, after. New vanity, sink, faucet, mirror, and lighting. Surround refinished.',
  'Primary ensuite vanity in detail. Brushed nickel faucet, new mirror, and updated lighting.',
  'Primary tub and refinished surround. New shower hardware, refinished surround, brushed nickel throughout.',
  'Secondary bedroom, after. Designer paint, new flooring, staged simply for the listing.',
  'Secondary bedroom, second angle. Window and closet detail.',
  'Secondary ensuite, after. Matching refresh: new vanity, faucet, hardware, and refinished surround.',
  'Secondary vanity, detail. The new vanity in the second bath.',
  'Secondary tub and surround, after. Same refinish treatment for visual consistency across both baths.',
  'Laundry room, after. Designer paint, the built-in storage staged so a buyer notices it immediately.',
  'Laundry storage in detail. Brushed nickel pulls, current paint, soft styling.',
  'Office nook, after. Refreshed paint, modern outlets, current lighting, a simple staged setup.',
  'Hallway closet, after. LED upgrade and refreshed hardware on display.',
  'Hallway, detail shot. Trim and door hardware in their refreshed state.',
  'Smart thermostat detail. The thermostat upgrade in the wall, alongside a fresh paint return.',
  'Automatic blinds in detail. One of the smart-blind installations the listing leads on.',
  'Fireplace mantel detail. Wood-burning fireplace surround, refinished, styled with a single piece of art.',
  'Window light, late afternoon. The light the unit gets in the back half of the day.',
  'Garage interior, after. Cleared, swept, ready for the listing.',
  'Curb shot. The front of the unit, photographed at the time of listing for the listing media set.',
  'HOA grounds shot. The shared dog park and pond area used by the community.',
  'Assigned parking and visitor area. Context for buyers coming from a single-family home.',
  'Final listing-day shot. The unit as a buyer meets it.',
  'Closing frame from the listing shoot. The last image from the listing media day.',
];
/* eslint-enable max-len */

export const beforeSlides: CarouselSlide[] = Array.from({ length: BEFORE_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${BEFORE_PATH}/${n}.jpg`,
    alt: `Mathis condo before renovation, photo ${i + 1} of ${BEFORE_COUNT}, May 8 2026 vacant walkthrough`,
    caption: beforeCaptions[i] ?? `Pre-renovation photo ${n}`,
  };
});

export const afterSlides: CarouselSlide[] = Array.from({ length: AFTER_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${AFTER_PATH}/${n}.jpg`,
    alt: `Mathis condo after Pelham Group concierge prep, listing photo ${i + 1} of ${AFTER_COUNT}, May 28 2026`,
    caption: afterCaptions[i] ?? `Listing photo ${n}`,
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
      'A typical concierge prep is three weeks once the punch list is agreed: week one is paint and lighting, week two is flooring and any targeted repairs and refinishing, week three is staging and listing photography. The condo case study ran on that same cadence, with the pre-renovation baseline shot on May 8 and the listing-ready professional photos shot on May 28, three weeks later.',
  },
  {
    question: 'Who pays for the renovation work?',
    answer:
      'For qualifying homes, the Pelham Group fronts the agreed prep and staging costs, and the seller pays at closing from their sale proceeds. No money out of pocket during the prep phase, no contractor management burden on the seller, no separate financing application. The full cost breakdown is part of the agreement Kim walks every concierge client through before any work begins.',
  },
  {
    question: 'What specifically did you do to this condo?',
    answer:
      'New LVP wide-plank flooring throughout, fresh designer paint top to bottom, new vanities and faucets in both bathrooms, new bath hardware and refinished tub and shower surrounds, brushed nickel door hardware, new LED can lighting, modernized outlets and switches, new wall heaters, smart appliances, a smart thermostat, smart automatic blinds, full deep clean, and full staging photographed for the listing by Kim. The owners approved each step over text.',
  },
  {
    question: 'Where is this condo? What part of Snohomish County?',
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

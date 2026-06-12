/*
  Mathis condo case-study data: photo captions + concierge bullets.
  Shared between /case-study/concierge-condo and /condo-concierge so
  the gated and public surfaces stay in lockstep.

  Captions in this file were written by viewing each photo directly,
  one by one (v3, June 2026). Earlier versions used room-walkthrough
  inference and got specifics wrong. NO em dashes anywhere (Savvy
  brand rule).

  Photo timeline:
    - BEFORE: 25 photos, shot 2026-05-08. The unit mid-prep, after
      the owners moved out: original navy and turquoise paint
      colors, original carpet, original oak cabinets, tape visible
      in places, some closets and walls already prepped.
    - AFTER:  39 photos, shot 2026-05-28. The listing media set
      after concierge prep: new LVP throughout, designer paint, new
      marble tile fireplace surround, refreshed kitchen styling,
      new vanities, refinished surrounds, full staging.
*/

import type { CarouselSlide } from '@/components/CaptionedCarousel';

const BEFORE_PATH = '/case-studies/mathis-condo/before';
const AFTER_PATH = '/case-studies/mathis-condo/after';
export const BEFORE_COUNT = 25;
export const AFTER_COUNT = 39;

/* eslint-disable max-len */
const beforeCaptions: string[] = [
  // 01
  'Living room, as we found it. Navy accent wall, original white-tile fireplace surround, beige wall-to-wall carpet, sliding glass door with teal curtains.',
  // 02
  'Looking from the carpeted main area through the dining transition. Hardwood floor meets the kitchen, with a back bedroom visible in turquoise green.',
  // 03
  'Wide angle from the living room into the entry foyer. Original carpet running into a hardwood corridor with the white built-in pantry cabinets.',
  // 04
  'Living room from the opposite corner. Front entry door on the left, sliding glass door to the patio, fireplace base at the lower right.',
  // 05
  'Secondary bedroom, baseline. Bright turquoise green walls, a lavender-blue accent on the column wall, beige carpet, window at the left.',
  // 06
  'Standing in the green-walled bedroom looking back into the living room. You can see the navy fireplace wall and white-tile surround through the doorway.',
  // 07
  'Guest bath, baseline. White tub and shower surround with the original salmon-coral accent wall behind it. Painter\'s tape visible at the edges.',
  // 08
  'Empty closet, gray walls and original white wire shelving. Brown carpet edge visible where it meets the threshold.',
  // 09
  'Primary suite vanity, baseline. Small wood-laminate vanity, white tile counter, oval drop-in sink, large mirror, light teal walls. Doorway into the closet area at the right.',
  // 10
  'Open dining-to-kitchen transition. White built-in pantry cabinets on the left, oak kitchen cabinets and the white range visible through the doorway, blue accent wall on the far right.',
  // 11
  'Kitchen detail (camera held landscape). Oak cabinets, the original tan tile backsplash in a diagonal pattern, white range, window above the sink.',
  // 12
  'Kitchen wider (camera held landscape). Oak uppers and lowers, white range and dishwasher, original tile backsplash.',
  // 13
  'Kitchen looking the other direction (landscape). Oak cabinets, white top-mount fridge, tan-patterned tile floor.',
  // 14
  'Hallway looking toward the laundry room. Laminate hardwood floor, the white drawer-and-cabinet built-in storage on the right, view through the doorway to the stacked LG washer-dryer.',
  // 15
  'Laundry room baseline (landscape). The new LG stacked washer-dryer is already installed; the original water heater is still on its stand against the yellow wall.',
  // 16
  'Closet interior at the prep stage. Wire shelving still mounted, wall patches filled and sanded, ready for fresh paint.',
  // 17
  'Primary suite area, prep stage (landscape). White modern vanity already in, light teal walls, looking through the doorway to a green-painted alcove ahead.',
  // 18
  'Walk-in closet at the prep stage (landscape). The bright orange original paint is still showing; you can see the start of the new LVP plank floor in the foreground.',
  // 19
  'Bath corner (landscape). Light mint-sage walls, white toilet, brushed nickel grab bar starting to go in, fresh switch plate.',
  // 20
  'Primary shower (landscape). Original frosted-glass shower door with the brushed silver frame, oak trim, light teal walls.',
  // 21
  'Bedroom (landscape). Light teal walls, original brown carpet on the floor, window with the colonial grid looking out at the trees.',
  // 22
  'Primary bedroom, baseline. Beige wall-to-wall carpet, light teal walls, the large grid window facing the back trees.',
  // 23
  'Primary bedroom corner. Empty, light teal walls, beige carpet that still needs replacing.',
  // 24
  'Primary bedroom looking out through the doorway. Beige carpet in the bedroom, the hallway laminate floor visible through the doorway, a closed white interior door.',
  // 25
  'Bedroom-to-hallway transition. Light teal walls, beige carpet, an opening into the cream-walled hallway running deeper into the unit.',
];

const afterCaptions: string[] = [
  // 01
  'Primary bedroom, listing ready. Staged king bed with a floral duvet, abstract art over the headboard, brushed nickel floor lamp, the new wide-plank LVP flooring throughout.',
  // 02
  'Primary bedroom from the door looking down the hall. Black geometric wall sculpture on the left, two abstract framed paintings on the right, white interior door at the end of the hallway.',
  // 03
  'Entry alcove with the original wire shelving above. Dark wood console table styled with a succulent and a globe, world map abstract art on the left, large floral mason-jar painting on the right.',
  // 04
  'Walk-in closet, refreshed. Bright white walls, original wire shelving cleaned and remounted, a single piece of art on the wall to keep it feeling intentional.',
  // 05
  'Primary suite vanity area. White double linen closet on the left, water closet doorway with landscape art and green hand towels straight ahead, new white double vanity with quartz counter and matte black faucets, the bedroom visible through the opening on the right.',
  // 06
  'Closer angle on the primary vanity. The new quartz counter, the matte black faucet, the green hand towels at the water closet door, and the upgraded mirror.',
  // 07
  'Primary shower detail. White surround, the brushed nickel showerhead and corner shelf, a white pom-pom-edge shower curtain styled simply.',
  // 08
  'Laundry room, listing ready. The LG stacked washer-dryer column, the water heater dressed in its corner, a blueberry and bluebird framed print on the wall, original wire shelving above.',
  // 09
  'Empty walk-in closet. Fresh paint top to bottom, the original wire shelving re-set, new LVP carrying through.',
  // 10
  'Secondary full bath. White tub and shower with a tan-stripe shower curtain, new white vanity with quartz top and matte black faucet, decorative star art on the wall, orchid styling.',
  // 11
  'Secondary bedroom staged for the listing. Twin bed with a fall-floral duvet, deer-antler art, daisy art, the modern square floor lamp, and a horse photograph in the corner.',
  // 12
  'Secondary bedroom from the opposite angle. The white kid-sized tipi tent staged on a cowhide rug, the window dressed in a bamboo blind, the twin bed and floral art.',
  // 13
  'Looking from the staged kids bedroom out through the doorway into the living area. You can see the new fireplace surround, the peony art, and the soft blinds in the secondary room.',
  // 14
  'Kitchen, refreshed. The original oak cabinets cleaned and restyled, white range and refrigerator kept, tan laminate counter dressed with a succulent and a watering can, fresh natural light from the window over the sink.',
  // 15
  'Kitchen wider. Same oak cabinets, the white stove, dishwasher, and a styled sunflower towel tying back to the kitchen palette. Plants on the windowsill.',
  // 16
  'Kitchen toward the bar nook. Oak cabinets, white range, white dishwasher, the "Bar" basket and greenery on the back counter for warmth.',
  // 17
  'Kitchen looking into the dining area. White top-mount fridge, oak uppers, a wine and stemware vignette on the counter, the staged dining table and ladder-back chairs visible beyond.',
  // 18
  'Dining area, staged. Round wood pedestal table with four ladder-back chairs in painted gray, three framed landscape paintings on the far wall, wrought iron decorative art on the left, eucalyptus and table runner.',
  // 19
  'Living room, listing ready. The accent wall is now soft sage, the new marble herringbone tile fireplace surround with a fire lit, large peony painting above. New LVP, leaf-pattern area rug, cream sofa with sage pillow.',
  // 20
  'Living room centered on the fireplace. Sage accent wall, new herringbone surround, two patterned accent chairs and a basket flanking the hearth. The white french doors at the right lead to the staged secondary bedroom.',
  // 21
  'Living room looking toward the french doors. Fireplace at the left, the white french doors with the kids tipi tent and orange floral bed visible through the glass, a wood-and-metal console with a basket and bonsai on the right.',
  // 22
  'Living room toward the sliding glass door. Cream sofa with a sage velvet pillow, the hairpin-leg coffee table with a styled tray, sheer curtains framing the patio view.',
  // 23
  'Living room looking through to the dining area. Wood console with the bonsai and a basket of magazines, the floral painting, Vermeer\'s "Girl with a Pearl Earring" art on the wall, and the staged dining table visible through the opening.',
  // 24
  'Front entry from inside. White six-panel front door, the Vermeer art, brushed nickel floor lamp, sheer-curtain sliding door to the patio on the right, a runner rug grounding the entry.',
  // 25
  'Dining area looking back through the living room. White french doors to the secondary bedroom on the left, wood console with the bonsai, the floral painting, the Vermeer art, and the dining table.',
  // 26
  'Sliding glass door view to the patio. Sheer linen curtains, two wicker chairs with a lantern and side table on the deck outside, a coffee table with a styled tray inside the frame.',
  // 27
  'Front entry, open. The white front door swung open to the rhododendron in bloom outside, runner rug on the LVP, brushed nickel floor lamp, the sliding glass door on the right.',
  // 28
  'Exterior, front walkway. Stone steps stepping up through low boxwood hedges toward the front door, a decorative pole lantern, neighboring units in the background.',
  // 29
  'Exterior back. The main level with the staged patio and the upper-level balcony above, a blooming pink rhododendron, the shared lawn.',
  // 30
  'The back patio. Covered patio with two wicker chairs, a side table with a lantern, and a jute area rug grounding the seating.',
  // 31
  'Back yard view. Looking across the lawn toward the side of the unit with the balcony above and the rhododendron in full bloom.',
  // 32
  'Exterior wide. The three-story townhome cluster from the back, multiple decks and balconies stepping up, the manicured lawn, and the mature evergreens beyond.',
  // 33
  'Detached garage interior. One-car garage with the door open, concrete floor, built-in wood workbench at the back, white cabinet storage and moving boxes staged to the right.',
  // 34
  'Assigned parking detail. The unit\'s assigned outdoor parking stall, marked with a pin in the listing media set.',
  // 35
  'Same parking row, clean. The pin removed so the stall reads cleanly from any direction.',
  // 36
  'HOA garage row, with pin. The long row of detached garage doors with the unit\'s door marked, the "Fire Lane" striping on the drive.',
  // 37
  'HOA garage row, clean. The same row of detached garage doors without the marker overlay.',
  // 38
  'HOA grounds, between the buildings. The landscaped walkway with the A and B directional sign between two of the cluster\'s buildings, a lamppost, low hedges.',
  // 39
  'Closing frame. The back patio with the wicker chairs, the "B" unit marker on the door, the rhododendron at full bloom, the balcony above.',
];
/* eslint-enable max-len */

export const beforeSlides: CarouselSlide[] = Array.from({ length: BEFORE_COUNT }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    src: `${BEFORE_PATH}/${n}.jpg`,
    alt: `Mathis condo, mid-prep before-photo ${i + 1} of ${BEFORE_COUNT}, May 8 2026`,
    caption: beforeCaptions[i] ?? `Pre-renovation photo ${n}`,
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

export const conciergeBullets: string[] = [
  'Walked the unit with the owners before they left the state, then took the keys',
  'Planned the punch list with our crew so every dollar went where buyers actually look',
  'New LVP wide-plank flooring throughout, fresh designer paint top to bottom',
  'Repainted the navy fireplace wall in soft sage, swapped the white-tile surround for the marble herringbone',
  'Refreshed the original oak kitchen cabinets and restyled the counters instead of gutting them',
  'New vanity, quartz counter, and matte black faucet in the primary; matched refresh in the secondary bath',
  'Refinished tub and shower surrounds, brushed nickel hardware throughout',
  'Staged every room ourselves with Kim\'s own pieces, photographed for the listing',
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
      'A typical concierge prep is three weeks once the punch list is agreed: week one is paint and lighting, week two is flooring and any targeted repairs and refinishing, week three is staging and listing photography. The condo case study ran on that same cadence, with the mid-prep baseline shot on May 8 and the listing-ready professional photos shot on May 28, three weeks later.',
  },
  {
    question: 'Who pays for the renovation work?',
    answer:
      'For qualifying homes, the Pelham Group fronts the agreed prep and staging costs, and the seller pays at closing from their sale proceeds. No money out of pocket during the prep phase, no contractor management burden on the seller, no separate financing application. The full cost breakdown is part of the agreement Kim walks every concierge client through before any work begins.',
  },
  {
    question: 'What specifically did you do to this condo?',
    answer:
      'New LVP wide-plank flooring throughout, fresh designer paint top to bottom, the navy fireplace accent wall went soft sage, the original white-tile surround was replaced with marble herringbone, the original oak kitchen cabinets were kept and restyled, new vanity and quartz counter and matte black faucet in the primary bath, matched refresh in the secondary bath, brushed nickel door hardware throughout, refinished tub and shower surrounds, full deep clean, and full staging photographed for the listing by Kim. The owners approved each step over text.',
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

/* eslint-disable max-len */
/*
  Kim Pelham client reviews, sourced directly from her Google
  Business Profile via Zernio. Refreshed by the weekly review
  engine cron and committed back to this file.

  Last synced: 2026-07-28
  Source: Kim's GBP, account 6a0f988a520992756d97d85f
  Total reviews on GBP: 43
  Average rating: 5.0/5
  Five-star: 43
*/

export interface Review {
  name: string;
  text: string;
  date: string;
  rating: number;
  /** Year the review was posted, for filter/sort */
  year: number;
  /** Stable Google review ID, for re-keying without churn */
  id: string;
}

export const reviewStats = {
  total: 43,
  averageRating: 5.0,
  fiveStar: 43,
  lastSynced: '2026-07-28',
} as const;

/** Kim's GBP "Leave a review" deep link. Single source of truth. */
export const GOOGLE_REVIEW_URL = 'https://g.page/r/CeddMsE4nQGpEBM/review';

/** Public GBP profile URL (for the "see all on Google" link). */
export const GOOGLE_BUSINESS_PROFILE_URL =
  'https://www.google.com/maps/place/?q=place_id:CeddMsE4nQGpEBM';

export const reviews: Review[] = [
  {
    name: "Lucas Mathis",
    text: "We couldn't be happier with our experience working with Kim and the Pelham Group NW. At our first meeting, we told Kim we were first time home sellers and basically said, \"Show us the way.\" She did. We had already moved from Washington to Arizona, so selling our condo from another state could have been a nightmare. Instead, Kim took care of everything. She coordinated our remodel, set up professional staging and photos, kept us updated, and walked us through every step of the process. Even in a tough market, she helped us get an offer we were happy with and guided us through the negotiations and closing. We always felt like she was in our corner. What we'll remember most is how much she genuinely cared, we never felt like just another transaction. If you're looking for a realtor who's experienced, communicates well, and treats your sale like it's her own, we can't recommend Kim enough.",
    date: "this week",
    rating: 5,
    year: 2026,
    id: "AbFvOqlRMJejECelGC_dwHIglMr93fYx-48lwuUaDCAkHAOLHCJ7Zi_7faja0AuWTPa8MfjWaWi9Ew",
  },
  {
    name: "Dana Murphy-Love",
    text: "We recently worked with Kim and The Pelham Group to sell our home in Mukilteo. From start to finish, and even before the start, Kim was awesome! We utilized her concierge service with her contractor recommendation to refresh our home to get it ready for sale as well as professional staging. We had not sold a house in over 20 years so we had tons of questions and Kim was always prompt with responding and sage advice. The photos and listing of the home are very professional. We were able to sell fairly quickly in a down market and are very grateful for everything Kim did for us. We highly recommend her for anyone looking to buy or sell their home.",
    date: "this week",
    rating: 5,
    year: 2026,
    id: "AbFvOqm0r7OFTa3PdWocX8o48-MLZtOAUw3I4jtDbnAu215rqX7KbyLc5ovOkC9Ljpv-1lxCd19r",
  },
  {
    name: "Judy",
    text: "Kim did a great job handling the repair, staging and selling our mobile. She kept us informed, explained all the complicated paperwork. She made it painless.",
    date: "this month",
    rating: 5,
    year: 2026,
    id: "AbFvOqkv7koQeqUdHCZGK8Za1MTw1LZkvaGqiGKdFev2pRRs2DHDPB25GBCQhCK_lQRXSWhIRPXIMQ",
  },
  {
    name: "Kathy Miller",
    text: "I was in a difficult situation and wanted to move from my three story house to a rambler style.  Kim from the Pelham Group jumped in and started helping me find a place that met my criteria.  This did not take a few months.  It took years.  Yet Kim hung in there with me.  When it finally happened Kim not only found me a new home but held my hand through all the ups and downs and she kept me in tack not letting me go beyond the facts. Kim goes the extra mile and you will not find a more caring who dedicates her time to only a couple clients at a time.",
    date: "3 months ago",
    rating: 5,
    year: 2026,
    id: "AbFvOql8GjvmbY5gGj2qtnrMWru3CaFvBC6KSAvluVa4Jvy1ipnJua24giCR6BNXNQP_dzTVsMRY5Q",
  },
  {
    name: "Michelle Guerra",
    text: "Kim made selling my moms home easy and the staging was amazing!  I really think the staging was the cherry on top that helped the home sell quickly in a slower market/time of year. Thank you for all the help amd guidance!",
    date: "7 months ago",
    rating: 5,
    year: 2025,
    id: "AbFvOqkSIkEwVkMHNimy-aUmKlAubKJU4c-cNEBcDnIc7oguuKBeunyqySyhK3AAeYBhe2SbLIgoZg",
  },
  {
    name: "gordy arlin",
    text: "A lien on my house that shouldn't be there, was there. For several months several different agencies tried to assist me with getting to justice, but to no avail. Then, US BANK went to bat for me, they really wanted to help me get this bookkeeping error expunged; they had a battery of folks trying every way that they could. Plus, my current mortgage company took pity on me and promised to \"add on\" to the crew, to help as much as was possible; they too were \"blocked\", always by \"something\". Everyone agreed that I had \"slipped through the cracks\", maybe a typo in my name spelling, long ago? Or... So, I gave up, for now. Then, Kim crossed my mind.\nKim had been an angel to me years earlier, helping me scout out several potential spots for a new business location; she had been a wonderful advocate, going above and beyond to be of a particular heartfelt service!\nI sent her an e-mail: \"Do you know who might help me? You know about these things!\" She e-mailed back: \"I'll help you.\" She begins burning the midnight oil trying to make sense of the quicksand-project that I've dropped into her life.\nA few days later she phones me, hoping for some more pertinent details that might assist, I answer a few questions, and all this time I can hear her, kind of muttering under her breath as she is wrestling with a pertinent computer screen or 2 or 3, as she dials in my new info, all the time keeping her questions coming to me. She is really hustling! My point is that she, again, got really involved in a special way, like as if I was her little brother that she was \"going to bat for\"!\nIn about an hour she phones again: \"It's done!\" I am gobsmacked. Kim had had to deal with olden previous mortgagors, so olden that records had been long ago destroyed! (I've lived same home for 50 years) Kim was dogged and unstoppable. It was a labyrinthine path from hell, she was never daunted, she rescued my sorry bum.\nKim has earned my business forever, my realty angel! She and her husband also do beautiful remodels and such, SEE their 5 star reviews there, too! Don't you want give your realty and remodeling trust to proven angels of the heart and of caring integrity? Of course you do. Thank you!",
    date: "June 2025",
    rating: 5,
    year: 2025,
    id: "AbFvOqlSPsbq7HLREVq-xk09pr3rHJE3Lud1MLisGFgzRqteGIHgmJxGq39OoT0kj4fOaedC2R9lGw",
  },
  {
    name: "Fawn Morgan",
    text: "Working with Kim Pelham  has been nothing short of inspiring. Kim is the kind of real estate professional every client hopes to have by their side—knowledgeable, compassionate, and truly committed to serving others. She goes above and beyond in everything she does, always putting her clients’ needs first and making sure they feel heard, supported, and empowered throughout the entire process.\n\nWhat I admire most about Kim is her constant drive to grow. She’s always learning, always asking thoughtful questions, and always looking for ways to better serve her clients and community. That kind of dedication doesn’t just make her an excellent broker—it makes her an extraordinary human being. I’m so grateful to know and work with Kim, and I wouldn’t hesitate to recommend her to anyone looking for a real estate experience that’s not only seamless, but genuinely heart-centered.",
    date: "May 2025",
    rating: 5,
    year: 2025,
    id: "AbFvOqm5uq3qukhsG3BLhUkwIFXvjbLBN4-FLLMD36iKT7w3iIMeY9Kt_7YmHixN-Vii8FcY_IaRDQ",
  },
  {
    name: "Chi Okafor",
    text: "Kim was a pleasure to work with. I outreached her and within the same hour placed an offer on a home and it got accepted within 20mins if not less as a result of her clever tactic. She worked with me to make seller demands. The requests to seller was. communicated effectively and i got the result i wanted. The after care was also amazing. I received a beautiful engraved pampered chef non stick stainless steel pan followed with a personalized card with my picture on it. Certainly a royal memorable experience. Thank you Kim",
    date: "May 2025",
    rating: 5,
    year: 2025,
    id: "AbFvOqm0VtVJo-MIjiFPrtUmzX8j7OrLPmLESyAwHYpRlJrNVp9MgeVBrhw26Zhxftq4jcOS9y6Hag",
  },
  {
    name: "Jeff Rowley",
    text: "Kim Pelham and team helped sell our father's house . They were magnificent! Highly recommend.",
    date: "March 2025",
    rating: 5,
    year: 2025,
    id: "AbFvOqn9wLENIzmeul9YnGv8ypfF1F1l8pwoUU5UAYON3Fgb3cNmfHIJLeaxuQ1sd_Sx2xCUIvT5DA",
  },
  {
    name: "D Graham",
    text: "Kim was great to work with when selling our moms home. She was thoughtful & professional making a hard situation go as smooth as possible. We were very grateful for her expertise in the field regarding staging & pricing. She did a lot of behind the scenes work coordinating an open house, inspectors, multiple offers, and the seamless closing. We highly recommend Kim to anyone in the area looking to buy or sell a home!",
    date: "November 2024",
    rating: 5,
    year: 2024,
    id: "AbFvOqnHnMzWiEx7dWZKytinIvMY1KQSN2_KarX9OLtwV2wBzUhglozd0jn9V5viPfwei1PvjrfpQQ",
  },
  {
    name: "Christina Rawlinson",
    text: "Kim has been my realtor in 2 sales and 2 purchases. She walked me through buying  my first home and was super helpful in educating me on the process. We hit some bumps with my mom’s health and she was so patient and understanding. I feel so blessed to have had her there. She’s quality people.",
    date: "July 2024",
    rating: 5,
    year: 2024,
    id: "AbFvOql_dmf1dIyeimi9r4LYDcHQ5vmiOnpN339IeEY6ckyxQYJoFhDqsFl0qm7nkkTFWf6jJGF-NQ",
  },
  {
    name: "Dave Menacher",
    text: "We had contacted several agents when it came time to list our home. Kim responded promptly and set up a time to meet.\nI was reluctant at first, but she came with a plan, and helped us through the process.\nIt took us 2 weeks to get ready for market, 2 days to have a firm offer, and 30 days to close. Individual results will vary, but those are our numbers.\nWe couldn't be happier with the sale Kim provided, and we will gladly recommend her.\n\nDave and Kelly Menacher",
    date: "May 2024",
    rating: 5,
    year: 2024,
    id: "AbFvOqkDK8XSnjHoGta3d-_tSQ0T136RpFPAuOwgCTya1ANxOWuDFKsWNKHcSB2YkXAX7eM6dnVdtQ",
  },
  {
    name: "Nichole Magnuson",
    text: "We were nervous about buying and selling at the same time but Kim handled every detail without us ever feeling pressured or in doubt of things working out. We got what we asked for from our house and actually got the house we had been looking at and wanting before even speaking to her. She was always accessible on top of any questions we had and couldn’t be more friendly!\n\nMy family is so pleased and can’t recommend her highly enough.",
    date: "February 2024",
    rating: 5,
    year: 2024,
    id: "AbFvOqmX_jlCui7RnktmzKbxXpmFi0h6U_bJWvRwRdMjRuseiMIdVLoYPNDEqXFwaHueQcZZ-k2r",
  },
  {
    name: "Wendy Porter",
    text: "I've had friends use Kim Pelham for their real estate needs, so she came with wonderful, verifiable reviews.  I knew when I need a Realtor to work with, she would be my first choice and she did did not disappoint.  She is a gem but also,  the people she referred me to for loan information and getting it ready to sell, were as professional as she is.",
    date: "November 2023",
    rating: 5,
    year: 2023,
    id: "AbFvOqnDfl0jeOQD5MykOm018o3srwIL24bNEZJ7tZOTvJlA2xTFDsEX9VeuT_SuF0bb96ELZYqaeA",
  },
  {
    name: "Mark Neuhauser",
    text: "From the beginning Kim was great.  Prompt to respond, quick to start the conversation and jumped on things immediately.  We were moving from out of state.  She made us feel like we were working with a kind and knowledgeable human right from the start on our Zoom call.  We were fortunate enough to start searching homes that she sent us daily and we had a good list to go search when we made it up to Washington for a quick trip.  Kim was so helpful, she was recommended by an old friend who is also amazing, shout out to Dan Bayla and team from The True Lending Company!  When we arrived at her office she walked us through things and made things clear on the process.  We had 2 great days searching with Kim and her assistant, she was laid up with an injury and still made the trek to every house with us!  Dedicated to her craft, for sure!!  We had a short time in Washington, 3 and 1/2 days, somehow everything worked out amazingly!  We were like how does this happen so perfect, when you hear horror stories of buying houses!  Our experience was bar none outstanding!  Another thing I thought was pretty amazing was that her husband Brian is a General Contractor and now he is able to help us with some projects we want done with our home.  If you are looking for a wonderful human to work with to buy a home, look no further than Kim Pelham!  She is awesome and we are so happy she was our partner to find our first home.  We love it, it’s perfect, we can’t wait to move in!",
    date: "December 2022",
    rating: 5,
    year: 2022,
    id: "AbFvOqmXHo9seNARXYh5SeX2ZvhSTHBD78C74g-xQWIdE_zKq1iAX_E-ZGSnSIMcNRXo5nD7T-JZYA",
  },
  {
    name: "Alex Sorge",
    text: "Kim and her team really helped guide my wife and I through the home buying process. They made everything easy.",
    date: "August 2022",
    rating: 5,
    year: 2022,
    id: "AbFvOqnoeRegY4LHXcHYgUI401Du3dWpoIYQP7RvyZIPQmpv9WbX_NPFeIHi6LHHuqJ5tANMwFkkrw",
  },
  {
    name: "Lisa McKay",
    text: "Kim was amazing at helping us understand how to stage to sell our place and what to look for in a new home.  Additionally, she connected us with a lender that was able to work with us and make our dream of owning a house a dream come true.  The care that Kim takes with her clients is top notch and I highly recommend her to anyone looking to buy or sell a home!",
    date: "December 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqn6WNC50vZQqJ29F-MCJMN_R0I5iER3m9JbSOtMpXwvUnkpQyOwliA2mJt32vhQPrO_sa2bpQ",
  },
  {
    name: "Rebecca Jackson",
    text: "I used Kim Pelham 5 years ago to purchase my current house and I used her again to sell my house and purchase a new home. I really liked dealing with her both times. Kim and her team are wonderful and they stay on top of everything. I knew from 5 years ago that once I made a decision on what and where I was going that Kim had control and things would move very fast. I would definitely use her again if I decide to move ever again.",
    date: "November 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqkiiglZu0hvRIeDsxL_q1au9Uy2HE6BUHQPD2wT9cdY1NcU8nk8JnIr6BZJDbyHwJDApOg1",
  },
  {
    name: "Emily Schwartz",
    text: "From the moment we reached out for Kim’s help, she was responsive, ready, and available to help my husband and I search for a home. As a first time home-buyer, there is so much I don’t know. Kim shared her knowledge and offered helpful advice. Overall, she helped make the process of buying a home something fun and exciting, rather than what could have easily been stressful and overwhelming. I highly recommend Kim as a realtor!",
    date: "November 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqkexpJUHFJuz4IcwfSd5onpwHhefB64-qYseP1iWB1eAuKt53B8Hg6fehZHavzxbm9iHwt6eg",
  },
  {
    name: "Suzanne Martin",
    text: "Kim was very helpful and took the time to explain the long process in buying a house. Even though we are in a seller market, Kim looked after my best interest as a buyer.  With Kim help we were able to negotiate a better deal that satisfies both me and the seller and now I am enjoying my first home.",
    date: "September 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqlQcFH7rbybsJDuuwPMMGy_Cjc9PA3PunvDvfeKIjS2BLn48rEajogNToUjy4TgmMLO_VXKzA",
  },
  {
    name: "Brandon Stover",
    text: "Kim made my home buying pretty seamless! She sent me home listings every morning and really kept my head down to earth when I was trying to venture into homes that were beyond my means. In the end we found the perfect home for me at just the right price! Her advisement is likely what got me to win when I put in my offer against others.  She was always quick to respond to any question I had.",
    date: "August 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqmAKaKpQToI5Br4gbZQRFSpi60kVPAlNSOvdNh8lt4PiZ7aKj9ZwRe9h0cgpANzEf-EWR_O9g",
  },
  {
    name: "Barbara Blakistone",
    text: "Kim stayed on top of the process. and that meant a lot to me in this sizzling hot market. She told me things to change in my house for the best Buyer appeal and followed the selling process from the moment of listing to reviewing the offers. I chose Kim because I bought this house from her and already had a great working relationship with her. I knew she would still be the friendly, responsive professional I met a few years ago. Major kudos to Kim!",
    date: "August 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqm2OgivU5uyPPJ9_US2RbYJPa7k9EbJsZDeKuKXgNIAZi76wj55mbL0QajvrHui8wG9fi81Gw",
  },
  {
    name: "Laura Giordano",
    text: "Kim worked with our family for months, patiently guiding us toward our dream home. She worked around the clock; communicating with brokers in the area to get information about comps, helping us secure contractors to work on our home so it was ready for sale, and navigating the constantly changing rules surrounding the Pandemic. We would highly recommend her!",
    date: "May 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqk7AvgbidwDVaywbrY8mAXSXteCnJtVB2SeUVAifodvPS8QRIRMJUjxgWleBnZuL1vopVBGSA",
  },
  {
    name: "Edwin Smith",
    text: "Kim and her team worked tirelessly to find the right home for us! We were first time home buyers and the whole process was somewhat daunting, especially in the current housing market. Kim was there every step of the way to talk us through the details and advise us on how best to position ourselves. She is incredibly responsive, flexible, professional and an overall lovely person to work with. If she's still in the game when it comes time for our next home purchase, we know who we'll be working with.",
    date: "April 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqm5_KHIGQo0lLbcg_twV5JS_2oOCgePM6f7it5vlyUGPks9y8EQHSlTFbQTfhFAhQAhsnZR7A",
  },
  {
    name: "Jennifer Perry",
    text: "Kim has been a dream to work with.  She is extremely professional and really understands the market.  She taught us a lot about staging our home and we even purchased her book to assist with making it look ready to sell.  The cards she puts around the home to highlight the fantastic things about a home really do help in the sales cycle.  I would recommend Kim to anyone looking to buy or sell a home.",
    date: "April 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqknBBDisU_ZzJ4MIHt1AXTn8LwB6Rvm89CJEQKfkr7v80SCVO3MF4sBQ3ijOOvolwqsn3kq-w",
  },
  {
    name: "Candi Kidd",
    text: "Beyond Impressed my Kim!  We had a very complicated real estate need (purchasing a Christmas tree farm business & home on the same property).  Kim held our hand the entire way. We could have NEVER done it without her. She was very prompt, responsive and professional.   But what impressed me the most is that she genuinely cared about my family and always had our best interest at heart.      I would highly recommend Kim.",
    date: "February 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqntd3NrJxgtfBrSoI6DNwc69Uqnc3GtKp49dziQQWnXoM8CxscR1WE-Mp0wwpikZhAcv08W",
  },
  {
    name: "Monica Hubinette",
    text: "Kim has a great breadth of knowledge and has helped so many of my friends buy or sell their home. She always comes highly recommended. I love that she is able to stage your home and has the ability to fix any issue/problems with the home you are trying to sell. I would not hesitate asking for her help!",
    date: "February 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqmqZ6x7omftUEiKenzt_KRGYrysDcS0WHwuxHbgESxN13vPL51ht84FEHiUi7jwYRr2jBKuWA",
  },
  {
    name: "Michele Rowley",
    text: "What I love about Kim and her business is that she is one stop shopping.  She can stage, spruce up, list, sell and knows the market!  She makes it easy to sell.",
    date: "February 2021",
    rating: 5,
    year: 2021,
    id: "AbFvOqlKJMgJrgMRgOGNyYviv2NevBPx2FWcXfw2fLzLUkWarjjUQymQzfPbCUCVw7U7ih0Shxr7cw",
  },
  {
    name: "Daniel Bayla",
    text: "Kim is simply AMAZING!  She helped my family to save a ton on a great home in an outstanding neighborhood.  Her negotiation skills have allowed my family to spend the saved money on changes and things that are important for us to make this home our own.  I am forever grateful for her help and professionalism.  She is great at what she does!  Thank you, Kim!",
    date: "August 2020",
    rating: 5,
    year: 2020,
    id: "AbFvOqlNxT6LDykWew_1cVcr4rWIhuylQWYt5iV7sQ0qwuEX2igaXsBtv8VMlingwaQ5m48RWGci",
  },
  {
    name: "Melody Moore",
    text: "Kim is a top-notch professional! I found Kim online while doing a Google search for realtors in our area. Without looking at her existing reviews, I cold called her, and explained our more complicated situation. Within a few minutes of speaking to her, I knew she was the agent we were looking for! Throughout the entire process Kim was attentive, understanding, thorough, and most of all, such a pleasure to work with! She is extremely knowledgeable and brings years of experience to the table, which was a HUGE benefit for us. From the initial phone call to the closing of our home, she was always there walk us through the different stages of the home buying process and answer all of the questions we had. She made the experience comfortable and her calming presence is always a delight. We highly recommend Kim for any real estate needs you and your family may have!",
    date: "July 2020",
    rating: 5,
    year: 2020,
    id: "AbFvOqlvmw5xHmRRMbFsW69RXjzjuLRhLUFuCK09wFQPjPerQh-teTD5ZT5uxRk6iHEJ1s_f5Tocig",
  },
  {
    name: "Marc Havner",
    text: "Kim was a dream come true for our first home buying experience. She walked us through the process step by step and was always available to talk through anything that came up. Her knowledge of the industry is second to none and I highly recommend her for any real estate needs you may have. With Kim’s help we were able to get into our dream home in one weekend of house hunting! She was to the point and took the extra time to get to know us and our needs. We never felt pressured to try to get into something we wouldn’t be completely satisfied with. Amazing realtor!!!",
    date: "September 2019",
    rating: 5,
    year: 2019,
    id: "AbFvOqmtlxe1qz8Xi6NIU9MI720UnLaafVV3F2cMATmwIDC9T6qw5uNiNBHwJQHyapcCPc6HqDstjw",
  },
  {
    name: "Jim Flores",
    text: "The best ! It was a pleasure working with Kim. Could not be happier with the service she provided me.\nEverything ran smoothly from beginning to end. Great job Kim : )",
    date: "April 2019",
    rating: 5,
    year: 2019,
    id: "AbFvOqnKfsxMXlEUPCkKEIYXY1EcbZOUKw3hiWZBckdvAPtoS2qj2pO0YDde_-zbtOqf0igmcghSsw",
  },
  {
    name: "Lynda Goodrich",
    text: "I highly recommend Kim Pelham for your real estate needs.  She went way above and beyond to help me find a house within my budget in this highly competitive market... and my circumstances did not make her job easy!  She is very knowledgeable and fights for her clients.  I don't normally write reviews, but Kim deserves to have the world know that she is top notch!\nLG",
    date: "April 2019",
    rating: 5,
    year: 2019,
    id: "AbFvOqngdBxdJKLP8WrS2ysgEYzuH344XJzlRLgXvrnNOEdyPKAZ7g_PpAGuym1k1TvslYAJBAnNkQ",
  },
  {
    name: "Jazz J",
    text: "Kim is incredible. I'm a first-time homebuyer and the first in my immediate family to buy a home. I had done my research, but there was still so much that goes into the process I would not have been able to navigate alone. Kim had my back the whole way through. Her strategy for the offer on the home beat out the other competitors, while still keeping my cost low. Negotiations after the home inspection resulted in even lower cost. She never pressured me. She ensured I was knowledgeable about each step. I felt confident with her as my broker and have already recommended her to everyone I know in the market for a new home. You can't go wrong with Kim on your side!",
    date: "March 2019",
    rating: 5,
    year: 2019,
    id: "AbFvOqlxddq1dnVA02rywKe1MmeLafEfUiuel47fKYXYDNK0993SvmXqrdFaJhb2KqmWM5Xe_AVLdA",
  },
  {
    name: "Stephanie Rothermel",
    text: "We met Kim Pelham at an open house in Everett, Washington, when we started looking for a condo. She immediately impressed us as a knowledgeable and creative real estate professional. Kim worked as our \"buyer's representative\" and found us a wonderful home. She is well connected to a wide network of   professionals in many fields and has previous experience in construction and business, which adds to the depth of her expertise in real estate. She understands the market, works very hard for her clients, communicates clearly,  and responds quickly. I have a chronic health condition and was looking for specific features in our new home. Kim kept my interests front and center, even when I got distracted by other properties. She is one of the nicest people I have met since moving to this area and I feel like we gained a real friend by working with her. My husband and I give Kim our highest recommendation.",
    date: "December 2018",
    rating: 5,
    year: 2018,
    id: "AbFvOqnTbLcMniVseObDNpclVtzbTCqVWG0KXkyMejmSjvkHLD9qzgkFSRPdmn2bneDlj6905swzmw",
  },
  {
    name: "Estelle Rosatto",
    text: "Kim helped me and my Husband buy our first home. The Process of buying a home is a lot and can be very stressful but Kim was amazing. She took her time to help us though the process and did her best to make it as easy as possible. My Husband was in contact with Kim most of the time but she would reach out and check in with me on a regular basis as well, just to ensure I didn't have questions, concerns, etc.. Talking to my Husband, he said he loved Kim's strong communication skills and extensive knowledge. We both agree that Kim is great at her job, she is the only Real Estate agent that we will ever use.",
    date: "November 2018",
    rating: 5,
    year: 2018,
    id: "AbFvOqnX8Ta_6y1VotRRrdsXcvtmuUNAKhgWKNBIqi7W16tQDhDmaQF-vo0caEm-DhlMvWdu9B7FSQ",
  },
  {
    name: "Molly Klipp",
    text: "\"What's that saying...You had me at Hello! That is Kim Pelham, Real Estate Agent Extraordinaire! The week of the house going on the market, Kim brought her incredible team in and went to work. It took them 2 days to stage our house to make it into a Better Homes and Garden beautiful home! The weekend of the open house, Kim held 2 open houses, Over 200 people came in, we had 6 offers, had a bidding war, went $74,000 over the asking price and Kim negotiated all of that for us. We just sat back and watched her do her magic. Don't think. Don't wait. If you are even thinking about selling your home, call Kim today to make the experience of selling your home a profitable process that makes it worth the effort!\"",
    date: "November 2018",
    rating: 5,
    year: 2018,
    id: "AbFvOqk3b47LbNS7iR0oVc3o8lsd61tPkQJhsT5uB0u7DuPLP5eOy2uhgUwZCdk575DFPuT4PkZepw",
  },
  {
    name: "kimberly",
    text: "My husband and I knew we wanted Kim to sell our house after visiting one of her open houses she had staged and was hosting.  When we gave the go ahead call for ours, she showed up next day to start the process of paper signing, staging, photo shoot, listing and an open house weekend. From start to finish 11 days with 4 offers and a signed contract on day 12.  Brilliant! Kim is a master, and her commitment to her client's needs AND peace of mind is so clear and so deeply appreciated.",
    date: "November 2018",
    rating: 5,
    year: 2018,
    id: "AbFvOqnJZ-PIQorO5e8it-8bdrX67HYch9Ho1QzmBm0uc3-gb9ySTf_7fPeJY_ZGAwgc6fBbwoSQ9w",
  },
  {
    name: "Matthew Delgado",
    text: "My husband and I knew we wanted to work with Kim from day one. She helped a couple we know find their first home and they were eager to recommend Kim. From the start, Kim was able to answer a lot of questions my husband and I had about the home buying process. She alleviated a lot of the anxiety we had before starting our search. In less than two months, we found and closed on our first home. I highly recommend Kim.",
    date: "November 2018",
    rating: 5,
    year: 2018,
    id: "AbFvOqlBbbK7vjU6mjt6MWQpBizs2yOgjJAoDIJXkvGA0qmSRUV-WzL319EZhZoOh-oQwkad8-G0DQ",
  },
  {
    name: "Jeannie Forrest",
    text: "Kim Pelham is a skilled professional. I met Kim at a women’s networking event in the fall of 2017 and I quickly realized that she was a ‘cut above’ her peers in the industry.  Kim represents her clients with a business strategy that she follows up with good old-fashioned hard work and effort.  She   clearly communicates her strategy and executes it accordingly.  Kim maintains deep market knowledge and utilizes it to achieve her client’s best interests.  Her core values and personal integrity enabled me to trust her; I came to believe that her business decisions and instincts would help me achieve my goal.\n\nThe Pelham Group is a full-service team and I took advantage of all of their services including repairs, staging, photography, and marketing.  I am fully convinced that I received the best value for my investment with The Pelham Group.  I believe that the whole team gave me, and my property, their very best and their efforts exceeded my expectations.\n\nAs a result of Kim's efforts, my home in Snohomish, WA sold in two days.  We went on the market on 9/14 and it closed on 10/4.  Kim's ability to effectively manage me (a crazy busy person) and the buyers (young and demanding) was nothing less than exceptional.\n\nI highly encourage you to engage Kim Pelham and The Pelham Group to fulfill your sell/purchase needs.",
    date: "October 2018",
    rating: 5,
    year: 2018,
    id: "AbFvOqm8ZytaQVPTIwjB4mqWT6x2Jnrlpcy0E9zA8YP2MO41hVTHn9kTJAqC_uAWdBjb6HPOcDFH",
  },
];

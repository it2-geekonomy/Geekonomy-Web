import type { BlogData } from "../types";
import type { BlogContentItem } from "../utils";
import { contentToSections, p, h2, h3, img, list } from "../utils";

const coverImage =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/c43ae4ed-2c7c-47de-8dea-ff3bf89fdf71-Local SEO Mistakes St. Joseph.webp";
const buyingFakingReviewsImage =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/a416e8a9-3828-4117-ae5a-ebaa1ad4ab5b-buying and faking reviews.webp";
const expectingOvernightResultsImage =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/29cbb3f3-d02c-40a3-92fa-928327d10d6f-Expecting overnight results.webp";

const stJosephLocalSEOMistakesContent: BlogContentItem[] = [
  p(
    "A resident of St. Joseph tries to find a roofer after a storm. Three companies appear on the map. One has a phone that goes to voicemail, one has hours that go to 2 years ago, and one picks up on the second ring and has a crisp page of exactly what the resident needs."
  ),
  p(
    "Of those businesses, only one gets the work – and it’s seldom the one with the most budget to spend. Local search is about rewarding the business that’s easy to find, easy to trust, and easy to reach. Most of the pain comes from a few easy-to-avoid mistakes."
  ),
  p(
    "This guide explains the typical local SEO errors St. Joseph, Missouri companies stumble over – sorted by the places they occur: Your Google profile, your website, your reviews, your content, and how you track success. For every one, you’ll find a simple repair you can begin this week, plus a candid note about what local SEO never delivers."
  ),
  p(
    '<div class="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#69AE44] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 text-center max-w-full box-border"><p class="text-white font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-xl md:text-2xl leading-tight break-words">Looking for Local SEO in St. Joseph, MO?</p><p class="text-white/70 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-snug break-words">Geekonomy helps St. Joseph businesses fix critical local SEO errors, optimize Google Business Profiles, and dominate local search.</p><a href="/seo-company-st-joseph-mo" data-blog-cta class="inline-block bg-[#69AE44] text-white font-bold py-2.5 px-4 text-sm sm:py-3.5 sm:px-6 sm:text-base md:py-3.5 md:px-8 rounded-full no-underline transition-all duration-300 ease-in-out hover:opacity-90">Talk to Our Local SEO Team</a></div>'
  ),

  h2("Why a regional hub like St. Joseph feels these errors sooner"),
  p(
    "St. Joseph is a regional market. Customers travel from throughout Buchanan County and surrounding areas on both sides of the Missouri River to shop, including Kansas communities like Elwood and Troy. A business might cater to healthcare patients, farm families, farmers, Missouri Western students and longtime shoppers on Main Street all within the same week."
  ),
  p(
    "That mix has two implications: Customers also search in two different ways: a new customer types in maps and reviews, a resident in a business name they’ve heard from a neighbor. And the smaller the market, the more quickly the good listings get noticed – and the bad ones can fall behind."
  ),
  p(
    "All of this can be done with a budget that is not big. It requires paying attention to details that many competitors ignore."
  ),

  h2("Where the Google Business Profile usually goes wrong"),
  p(
    "In many local searches, the first impression customers have of you is via your Google Business Profile. Mistakes will do damage long before they get to your website."
  ),

  h3("Leaving the profile unclaimed or unmanaged"),
  p(
    "Some never claimed their listing and Google created one from publicly available data. Others claimed it years ago and forgot about it. Both mean customers get incorrect info and you have no say."
  ),
  p("The fix costs about an hour. Follow these steps:"),
  list(`<ol class="list-disc pl-6 space-y-2">
  <li>How do I find my business? Search for your business name and see if there is an existing profile.</li>
  <li>Make a Claim and get it Verified the way Google does.</li>
  <li>Delete ex-employees and past agencies from managers.</li>
  <li>Verify that at least two people you trust have owner access.</li>
</ol>`),
  p(
    'The profile check is another opportunity for the guys from <a href="/" class="underline text-[#6FAF4E]">Geekonomy</a> to get started on a local client. They assess what exists before what changes should be made as a starting point because many initial issues are just simple, outdated mistakes.'
  ),

  h3("Stuffing keywords into the business name"),
  p(
    "Make “Miller Plumbing” into “Miller Plumbing St. Joseph Best Plumber 24 Hour” It just seems like an easy way out. Google states your business profile name should be your company’s real world business name and including keywords may get your profile suspended."
  ),
  p(
    "Categories Get found for “plumber” and “St. Joseph”. Use the name on your sign, your invoices and your website. Categories, Services & Content The best way to get found for “plumber” and “St. Joseph” is to earn it."
  ),

  h3("Choosing categories that do not match the business"),
  p(
    "The main category is one of the most powerful signals you have control over. Sometimes businesses will choose a general one or load on multiple to appear in more searches."
  ),
  list(`<ul class="list-disc pl-6 space-y-2">
  <li>Select the main industry that most accurately characterizes your main offering. A restaurant primarily offering barbecue should not be kept generic.</li>
  <li>Add secondary categories for each service you are actually offering.</li>
  <li>Update them annually, as Google regularly adds and removes categories.</li>
</ul>`),

  h3("Letting hours and details go stale"),
  p(
    "“Drive to a closed store” rarely returns a customer, and too often writes it in a review. Missouri weather is another factor: Ice and snow can close a business without warning."
  ),
  p(
    "Compare your hours each month with your door and your website. Post holiday hours and change your profile immediately after weather closure. A one line update on when you will reopen is sufficient."
  ),

  h2("What goes wrong on the page customers land on"),
  p(
    "All visitors coming in from the map arrive on your website. If the page isn’t right for them, they will leave your site and choose someone else."
  ),

  h3("Putting every service and town on one page"),
  p(
    "A single page to list plumbing, heating, drain cleaning and all the neighboring towns, that aims to answer it all, and doesn’t do it well. Search engines are unable to understand what the page is really about, and visitors walk away empty handed."
  ),
  p(
    "Use one page for every big service you have, for a single need. For a page about water heater replacement, address water heater replacement like a homeowner who’s looking out for something to worry about."
  ),

  h3("Cloning pages for nearby towns"),
  p(
    "Many sites build a separate page for each town, copying one page and changing the name. They provide the reader with nothing on these pages, and Google has been telling you for years about the risks of identical pages built for different locations."
  ),
  p(
    "Have a genuine reason to be serving a nearby community? For real – include when you typically get to your clients, where you work, and the types of requests you typically get. If you don’t have a valid reason, don’t add the page – just name the place on your profile."
  ),

  h3("Hiding the basics"),
  p(
    "Speedy visitors shouldn’t be searching for how to get to you. Make sure this is visible on each vital page:"
  ),
  list(`<ul class="list-disc pl-6 space-y-2">
  <li>Number for your phone, tap on your device.</li>
  <li>Where you live and who you provide service to</li>
  <li>Your hours</li>
  <li>A clear next step, e.g. call, book or request a quote</li>
</ul>`),

  h3("Ignoring the mobile experience"),
  p(
    "Almost a third of local searches are carried out on a phone, often on the move. A web page that is slow to load or contains small text or requires pinching and zooming will turn visitors away."
  ),
  p(
    "Create your own website on your mobile with regular mobile connection. If you don’t see the number for the business within a few seconds, neither will a customer."
  ),

  h2("How reviews get mishandled, and what to do instead"),
  p(
    "Reviews influence Google’s perception of the visibility of your business, and they can make the difference between two nearly identical listings. This is also where shortcuts can do the most damage."
  ),

  h3("Never asking for reviews"),
  p(
    "Happy Customers Just Don’t Leave Reviews Regularly Without a nudge, most happy customers don’t leave reviews. If you leave reviews up to chance, you’ll typically receive only the nastiest reviews from your angriest customers."
  ),
  p("Give this quick check a go:"),
  list(`<ol class="list-disc pl-6 space-y-2">
  <li>Find out from the customer when you are at your best, for example immediately after a job is completed.</li>
  <li>Send a quick text or email including your direct review link.</li>
  <li>Send one polite reminder a few days later, and no more.</li>
  <li>Respond to new reviews within a matter of days.</li>
</ol>`),

  h3("Ignoring reviews, or arguing with reviewers"),
  p(
    "A review that goes unanswered seems negligent. An angry response looks worse. They both are read by future customers."
  ),
  p(
    "Respond to all reviews. Thank customers for their favorable ones and comment on their visit, too. If they left a complaint, be patient, recognize the concern, work to resolve it offline, and never disclose private information. A measured response can inspire more confidence than a perfect score."
  ),

  h3("Buying, faking or gating reviews"),
  img(buyingFakingReviewsImage, "Buying, faking or gating reviews"),
  p(
    "Some companies get reviews, write them themselves, give gifts for them or ask only their happy customers to leave reviews. Google’s policies frown on all of these. If you get a review that violates the rules, Google can remove it, and sometimes even suspend a business profile altogether."
  ),
  list(`<ul class="list-disc pl-6 space-y-2">
  <li>Purchase nothing. Write no reviews.</li>
  <li>No free gifts or discounts in return.</li>
  <li>Do not question only the jubilant customers while redirecting the withdrawn ones elsewhere.</li>
</ul>`),
  p(
    "Gradual, authentic growth is more persuasive, after all. Reviews that name a particular service or employee serve prospective customers better than a series of five stars."
  ),

  h2("Keyword and content habits that waste effort"),
  p(
    "Even the most polished website and profile can only do so much if people aren’t actually searching for that. If it’s the incorrect content no matter how well you can write."
  ),

  h3("Chasing broad keywords"),
  p(
    "Fresh companies frequently strive to rank for “plumber” or “dentist.” These keywords pull a mass of different intent and high competition. Tighter phrases, such as “emergency plumber St. Joseph MO” or “family dentist accepting new patients,” pull in folks who are prepared to take action."
  ),
  p(
    "You don’t have to win every search. You only need to win the ones that result in customers, and even a small team can take on much more local specific words than more general ones."
  ),

  h3("Skipping the questions customers actually ask"),
  p(
    "Your customers are already telling you what to write about, in phone calls, emails and questions they ask at the counter. Too many businesses ignore them and publish what they find interesting."
  ),
  list(`<ul class="list-disc pl-6 space-y-2">
  <li>Gather your team’s daily questions.</li>
  <li>Provide a clear answer to each question, placing the response within the first one or two sentences.</li>
  <li>Cover all costs, schedule and fit, even when you can only explain the mechanics.</li>
</ul>`),

  h3("Publishing generic content with no local detail"),
  p(
    "An article that could be found on any website in the country doesn’t give your prospective patient a reason to choose you. Content is most effective when it is relevant to your community and patient base."
  ),
  p(
    "Name the neighborhood, usual homes or buildings, time of year and your customers’ situation, challenges. Include actual photos of your staff or your projects, and only make claims you can take responsibility for. Never make up client case stories."
  ),

  h2("Judging the results the wrong way"),
  p(
    "Many of the costliest errors are made at the tail end when owners assess the completed work ineffectively."
  ),

  h3("Judging success by rankings alone"),
  p(
    "A high rank doesn’t matter much if no one is searching for it. Rankings vary depending on the individual searcher and geography, so the rank you see in your own device is just one data point."
  ),
  p(
    "We’ll track: the calls, directions, bookings, form submissions and new customers who tell you they found you on the internet. You’ll find most of them in your Google Business Profile and Search Console."
  ),

  h3("Expecting overnight results"),
  img(expectingOvernightResultsImage, "Expecting overnight results"),
  p(
    "Detailed fixes, like fixing hours or selecting a more appropriate category, can take a matter of days or weeks. Reviews, reputation, and content can take months. A business that gives up after a few weeks is quitting right before the business benefit appears."
  ),
  p(
    "Competition and season are factors. A busy category will take longer than a slow one, and a slow winter can make a good month look worse than it really is."
  ),

  h3("Changing too much at once"),
  p(
    "If a company reorganizes its website, changes its categories and releases new pages all within a week, it’s impossible to know what benefited it and what damaged it."
  ),
  list(`<ul class="list-disc pl-6 space-y-2">
  <li>Alter a few things at a time.</li>
  <li>Detail what you modified and the time you modified it.</li>
  <li>Allow some weeks to see the results before switching to more.</li>
</ul>`),

  h2("How to choose an SEO company in St. Joseph, MO that avoids these errors"),
  p(
    "Most owners will be able to do such corrections themselves. It requires patience and care, not expertise. External assistance should be taken into account when the work keeps slipping, when you are managing more than one place, when you are in a suspended or duplicated profile, or when you wish to coordinate your profile, website and contents planning."
  ),
  p(
    "If you want to explore, begin with inquiring about the way a provider gets started. A good seo business in St. Joseph, MO asks about your customers, your region and your present listings just before making any suggestions."
  ),

  h3("Signs of a careful provider"),
  list(`<ul class="list-disc pl-6 space-y-2">
  <li>It is easy to understand. They know how to explain what they are going to do and why, in simple words.</li>
  <li>“You are asked to retain ownership of your profile, website and accounts.”</li>
  <li>They speak of gradual progress and frank limitations, not pledges.</li>
</ul>`),

  h3("Questions worth asking"),
  list(`<ol class="list-disc pl-6 space-y-2">
  <li>Can I request to promote certain keywords and pages?</li>
  <li>Who will do the work? How frequently will I hear from you?</li>
  <li>How do you get reviews without violating Google’s terms of service?</li>
  <li>What will you report, and how do you measure progress?</li>
</ol>`),
  p(
    'Be wary of guarantees promising a fixed ranking, a specific number of calls, or bulk reviews. Search results differ for each user, and no provider can control them. Those seeking <a href="/seo-company-st-joseph-mo" class="underline text-[#6FAF4E]">local SEO assistance in St. Joseph</a> can use these questions to evaluate their choices.'
  ),

  h2("Frequently Asked Questions"),
  h3("What is the biggest local SEO mistake a St. Joseph business can make?"),
  p(
    "Lacking a Google Business Profile is the most prevalent and the most expensive: If hours are wrong, if the business isn’t claimed or if it’s listed in the wrong category it’ll send people to someone else’s site before they ever get to yours. Claim it, verify everything and check monthly."
  ),
  h3("Can local SEO mistakes get a business penalized?"),
  p(
    "Some will. Violating Google guidelines – like keyword stuffing your business name or purchasing reviews – can get your reviews removed or your profile suspended. Other types of violations don’t incur a penalty, but they do have the unwanted side effect of decreasing your visibility and discouraging clicks."
  ),
  h3("How long does it take to fix local SEO mistakes?"),
  p(
    "Easy adjustments, like fixing hours or uploading pictures can start to make a difference in a matter of days or weeks. Others, like ratings, reviews, content and reputation can take months to impact. Results will fluctuate depending on your competition and season, so look at the longer term."
  ),

  h2("Closing thoughts"),
  p(
    "Most local SEO issues are neither clever, nor difficult. They’re unclaimed listings, outdated information, thin pages and silent customers. And most of the time, correcting them doesn’t require a lot of money – and it provides more than anything new ever could."
  ),
  p(
    "The strategy for St. Joseph companies is simple. Take a look at your listing and your website from the point of view of a complete stranger, fix what’s wrong and maintain a minimal level of reviews, fresh content and regular maintenance. If you do that consistently, your next potential customer can contact you with confidence."
  ),
  p(
    '<div class="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#69AE44] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 text-center max-w-full box-border"><p class="text-white font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-xl md:text-2xl leading-tight break-words">Ready to Fix Your Local SEO in St. Joseph, MO?</p><p class="text-white/70 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-snug break-words">Geekonomy builds structured local SEO and review strategies that turn map listings and searches into real customers.</p><a href="/contact-us" data-blog-cta class="inline-block bg-[#69AE44] text-white font-bold py-2.5 px-4 text-sm sm:py-3.5 sm:px-6 sm:text-base md:py-3.5 md:px-8 rounded-full no-underline transition-all duration-300 ease-in-out hover:opacity-90">Talk to Our Local SEO Team</a></div>'
  ),
];

export const stJosephLocalSEOMistakes: BlogData = {
  slug: "st-joseph-local-seo-mistakes",
  heading: "Local SEO Mistakes St. Joseph, Missouri Businesses Should Avoid",
  coverImage,
  sections: contentToSections(
    stJosephLocalSEOMistakesContent,
    {
      src: coverImage,
      alt: "Local SEO Mistakes St. Joseph, Missouri Businesses Should Avoid",
    },
    {
      introTitle:
        "Local SEO Mistakes St. Joseph, Missouri Businesses Should Avoid",
    }
  ),
};

export const stJosephLocalSEOMistakesSEO = {
  title: "Avoid These Local SEO Mistakes in St. Joseph, MO",
  description:
    "Learn the local SEO mistakes St. Joseph, Missouri businesses should avoid, from profile errors to weak pages, and how to fix each one.",
  url: "https://thegeekonomy.com/blog/st-joseph-local-seo-mistakes",
  canonical: "https://thegeekonomy.com/blog/st-joseph-local-seo-mistakes",
  image: coverImage,
  twitterHandle: "@Geekonomy",
};


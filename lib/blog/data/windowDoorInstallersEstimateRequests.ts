import type { BlogData } from "../types";
import type { BlogContentItem } from "../utils";
import { contentToSections, p, h2, h3, img, list } from "../utils";

const coverImage =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/403fadb3-cda6-4824-ac66-ded2435067d7-Window-and-door-companies.webp";
const buildingQaPagesImage =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/239d371c-f96d-4f39-a759-58b5d236fe99-building-QA-pages.webp";
const respondFastImage =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/83817699-8940-4649-97c0-b4c93722c6d4-respond-fast.webp";

const windowDoorInstallersEstimateRequestsContent: BlogContentItem[] = [
  p(
    "A homeowner who lands on your website after a cold, drafty week, or after another contractor quoted a price that felt too high for a new entry door, is closer to a decision than most visitors you will ever get. They already know they need the work. What they are still deciding is who to trust with it."
  ),
  p(
    "Yet many window and door installers watch that traffic arrive, see people scroll for a few seconds, and then see nothing happen. The site gets visits, but the phone stays quiet and the inbox stays empty."
  ),
  p(
    "This article is about closing that gap. It explains what homeowners are trying to settle when they land on your site, how to build pages and forms that make asking for an estimate easy, and how to find out which parts of your website are producing leads. It also says plainly where a website cannot fix the problem, because some of the causes sit outside the site itself."
  ),
  p('<div class="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#69AE44] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 text-center max-w-full box-border"><p class="text-white font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-xl md:text-2xl leading-tight break-words">Want More Estimate Requests for Your Window and Door Business?</p><p class="text-white/70 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-snug break-words">Make it easier for homeowners to trust your team, request an estimate, and choose your services.</p><a href="/contact-us" data-blog-cta class="inline-block bg-[#69AE44] text-white font-bold py-2.5 px-4 text-sm sm:py-3.5 sm:px-6 sm:text-base md:py-3.5 md:px-8 rounded-full no-underline transition-all duration-300 ease-in-out hover:opacity-90">Talk to Our Marketing Team</a></div>'),
  img(coverImage, "Window and door companies"),

  h2("Why Visitors Leave Without Asking for an Estimate"),
  p(
    "The short answer is that the site asks the visitor to do too much work. A homeowner arrives with a practical question: can these people replace my windows, what will it cost, and can I trust them in my home? If the page does not answer quickly, the visitor returns to the search results and opens the next company."
  ),
  p("Three problems show up again and again on installer websites:"),
  list(`<ul class="list-disc pl-6 space-y-2">
    <li>The main message is about the company (&quot;Quality since 1998&quot;) instead of the homeowner's problem.</li>
    <li>The route to an estimate is hidden in a menu, a footer, or a long contact page.</li>
    <li>The pages say what the company sells but not what happens after someone asks for an estimate.</li>
  </ul>`),
  p(
    "These are clarity failures, and they can be fixed without a full redesign. Window and door work is also a considered purchase, and people rarely buy on the first visit. Your site therefore has two jobs: convince the visitor that you are a safe choice, and make the next step feel small and low-risk."
  ),

  h2("What a Homeowner Is Deciding on Your Website"),
  p(
    "A homeowner looking at installers is usually weighing four things at once, whether or not they say so out loud."
  ),
  p(
    "<strong>First, fit.</strong> Do you work on the type of job they have, whether that is replacement windows in an older house, a sliding patio door, or a new-construction package?"
  ),
  p(
    "<strong>Second, trust.</strong> Will a crew treat the house with care, show up when promised, and stand behind the work?"
  ),
  p(
    "<strong>Third, effort.</strong> How much of their time will an estimate take, and will someone pressure them afterward?"
  ),
  p(
    "<strong>Fourth, cost.</strong> They rarely expect an exact figure online, but they want a sense of whether they are in the right range."
  ),
  p(
    "A page that speaks to all four, in short and plain language, tends to earn the form fill. A page that speaks to only one, usually &quot;we are the best,&quot; leaves the visitor to guess at the rest."
  ),

  h2("Put the Estimate Request Where Visitors Already Look"),
  p(
    "The most common fix is also the simplest: make the request for an estimate impossible to miss without making it pushy."
  ),
  h3("The top of the page"),
  p(
    "A line to identify what you install and where – &ldquo;Replacement windows and entry doors for homes throughout the Dallas and surrounding areas,&rdquo; for example – paired with a bright button that says &ldquo;Request a free estimate,&rdquo; can do more than a flickering slideshow of generic photos."
  ),
  h3("The phone number on a mobile screen"),
  p(
    "Most homeowners browsing for an installer do it on a phone, often while standing in the room they want to change. The phone number should be a tap-to-call link, visible without scrolling, and the estimate button should stay reachable as the page scrolls. Test this yourself: open your site on a mid-range phone over a normal mobile connection and try to request an estimate with one thumb. If you give up, so will a visitor."
  ),
  h3("A button that says what happens"),
  p(
    "&quot;Submit&quot; and &quot;Contact us&quot; tell the visitor nothing. &quot;Request a free estimate&quot; or &quot;Book a home measurement&quot; names the outcome. It is a small wording change, but it removes uncertainty at the moment a visitor is deciding whether to proceed."
  ),

  h2("Build Service Pages That Answer the Questions Homeowners Bring"),
  p(
    "A single &quot;Services&quot; page that lists windows, doors, and everything else rarely ranks well and rarely persuades. Homeowners search for specific things, such as double-hung window replacement, patio door installation, or storm door options, and they respond best to pages that match what they searched for."
  ),
  p("Each main service deserves its own page with a consistent set of content:"),
  list(`<ol class="list-disc pl-6 space-y-2">
    <li><strong>What the job involves.</strong> Describe the process in plain steps, from the first measurement to cleanup.</li>
    <li><strong>Who it suits.</strong> Say which homes and situations the service is right for, and when a different option is better.</li>
    <li><strong>What affects price.</strong> Explain the real cost drivers, such as frame material, glass type, size, number of openings, and the condition of the existing frames.</li>
    <li><strong>What the result looks like.</strong> Show real project photos from your own jobs, not stock images.</li>
    <li><strong>The next step.</strong> Place the estimate button after the explanation, not only at the top.</li>
  </ol>`),
  p(
    "The third point deserves care. You do not have to publish prices, and many installers cannot because every house differs. But explaining why two similar-looking jobs can cost very different amounts builds more trust than a vague &quot;contact us for pricing.&quot; It also filters out people who were never a fit, which saves your estimators' time."
  ),
  h3("Answer the direct questions in plain sentences"),
  p(
    "Search engines and AI assistants increasingly pull short, direct answers from pages. If a page asks &quot;How long does window replacement take?&quot; and answers it in two clear sentences, that answer is easy to quote and easy for a homeowner to trust. Cover the questions you hear on the phone: how long the work takes, whether someone needs to be home, how you handle rot or lead paint found during removal, and what the warranty covers. The best source for this list is the person who answers your calls. Ask them what homeowners question first, and put those answers on your pages."
  ),

  h2("What Proof Homeowners Look for Before Calling"),
  img(buildingQaPagesImage, "Building quality and trust pages for window and door installers"),
  p(
    "Replacing windows or doors is a significant expense, and the installer will be inside the home. That raises the bar for trust, and generic claims will not meet it."
  ),
  p("Useful proof for an installer site includes:"),
  list(`<ul class="list-disc pl-6 space-y-2">
    <li>Reviews that mention specifics, such as the crew's punctuality, tidiness, or how a problem was handled, rather than only star ratings.</li>
    <li>Photos of finished work with the town or neighborhood named, ideally with a before-and-after on an older home.</li>
    <li>Licensing and insurance details shown clearly, with your license number where your region allows it.</li>
    <li>Names and short bios of the owner or lead installers, so visitors know who will be at the door.</li>
  </ul>`),
  p(
    "Be careful with numbers. Do not claim &ldquo;thousands of happy customers&rdquo; or &ldquo;100% satisfaction&rdquo; unless you can back it up. A smaller, true statement, such as how long you have been installing locally or which towns you serve, reads as more credible than an inflated one. Reviews also need to be recent and real: ask customers for a review while the job is fresh, never write testimonials on a customer&rsquo;s behalf, and do not publish reviews you cannot link back to an actual customer.&nbsp;"
  ),

  h2("Make the Estimate Form Short, but Not Empty"),
  p(
    "Form length is a trade-off. A very short form brings more submissions but may leave your team chasing details. A long form screens better but loses people. For most installers, a middle path works: ask for what you need to make a useful first call, and leave the rest for that conversation."
  ),
  p(`<div class="my-6 w-full overflow-x-auto">
  <table class="w-full border-collapse border border-gray-600 text-sm">
    <thead>
      <tr class="bg-black text-white">
        <th class="border border-gray-600 px-4 py-3 text-left">Ask on the form</th>
        <th class="border border-gray-600 px-4 py-3 text-left">Leave for the first call</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-black border-b border-gray-600">
        <td class="border-r border-gray-600 px-4 py-3 text-white">Name, phone number, email</td>
        <td class="px-4 py-3 text-white">Exact window sizes and counts</td>
      </tr>
      <tr class="bg-black border-b border-gray-600">
        <td class="border-r border-gray-600 px-4 py-3 text-white">Property address or postcode</td>
        <td class="px-4 py-3 text-white">Preferred frame materials and finishes</td>
      </tr>
      <tr class="bg-black border-b border-gray-600">
        <td class="border-r border-gray-600 px-4 py-3 text-white">Project type (windows, doors, or both)</td>
        <td class="px-4 py-3 text-white">Budget range</td>
      </tr>
      <tr class="bg-black border-b border-gray-600">
        <td class="border-r border-gray-600 px-4 py-3 text-white">A short free-text box (&quot;Tell us about your project&quot;)</td>
        <td class="px-4 py-3 text-white">Timeline details beyond &quot;soon&quot; or &quot;planning ahead&quot;</td>
      </tr>
      <tr class="bg-black border-b border-gray-600">
        <td class="border-r border-gray-600 px-4 py-3 text-white">Preferred contact method and time</td>
        <td class="px-4 py-3 text-white">Photos, unless the visitor chooses to add them</td>
      </tr>
    </tbody>
  </table>
</div>`),
  p(
    "Two practical notes. First, require the phone number only if your team really calls first; some visitors prefer email, and a forced phone field costs you those leads. Second, tell visitors what happens after they submit. A single line such as &quot;We reply within one business day to book a time to measure&quot; reduces the worry that they will be flooded with calls. If you offer a photo upload, keep it optional, since a required upload on a phone is a common reason people abandon a form."
  ),

  h2("Reach the Right Visitors in the First Place"),
  p(
    "Better pages help, but they only work on the visitors who arrive. If the traffic is wrong, such as people searching for DIY installation guides or for companies in another city, even a well-built site will produce few estimated requests."
  ),
  p(
    'This is where digital marketing for window and door companies has to match the way homeowners actually search. The terms that tend to bring buyers are specific and local: replacement windows, entry door installation, patio door replacement, each paired with a town or region. Local search profiles, service-area pages and paid search for high-intent terms each have a role, and the right mix depends on your market, your budget and how many jobs your crews can take on. If you want to see how this kind of work is structured for installers, the page on <a href="/digital-marketing-for-window-and-door-companies" class="underline text-[#6FAF4E]">digital marketing for window and door companies</a> explains the approach in more detail.'
  ),
  p(
    "An honest limit applies here. Search visibility takes time to build, and results depend on competition in your area. A small installer in a crowded metro market will see slower movement than one in a smaller town. Anyone who promises a fixed number of leads in a fixed number of weeks is guessing."
  ),

  h2("Respond Fast, Because the Form Is Only the Start"),
  img(respondFastImage, "Respond fast to window and door estimate requests"),
  p(
    "A form submission is not a lead until someone responds, and the speed of that response often decides whether the visitor becomes a customer. Homeowners who request estimates usually contact two or three installers in the same few days. The company that replies first, politely and with a clear next step, has an advantage that no amount of website design can replace."
  ),
  p("A few habits make a real difference:"),
  list(`<ul class="list-disc pl-6 space-y-2">
    <li>Send an automatic confirmation email or text immediately, so the visitor knows the request arrived.</li>
    <li>Assign one person to check new requests during working hours, including Saturdays if your market expects it.</li>
    <li>Call first, then follow up in writing. Many homeowners answer an unknown number only if they were expecting it.</li>
    <li>Offer two or three specific time slots for the measurement visit instead of asking &quot;when are you free?&quot;</li>
  </ul>`),
  p(
    "Missed calls deserve the same attention. If your office closes at five, a homeowner who calls at six should reach a voicemail that promises a callback time, or an answering service that books the visit."
  ),

  h2("Measure Which Pages and Sources Produce Estimates"),
  p(
    "Without measurement, every change is a guess. You do not need an expensive setup, but you do need to know where visitors come from, which pages they view before asking for an estimate, and which source produced each booked job. Start with these steps:"
  ),
  list(`<ol class="list-disc pl-6 space-y-2">
    <li>Track form submissions and tap-to-call clicks as separate events in your analytics tool.</li>
    <li>Use a call tracking number or a clear &quot;How did you hear about us?&quot; question to connect phone calls back to their source.</li>
    <li>Record in your own system which estimate requests became booked measurements and which became signed jobs.</li>
    <li>Review the figures monthly, not daily. Small installers get modest traffic, and daily numbers swing too much to read.</li>
  </ol>`),
  p(
    'The third step matters most and is the one most often skipped. A source that sends many form fills but no signed jobs is costing you time, while a quieter source that produces steady signed work may deserve more attention. A marketing partner such as <a href="/" class="underline text-[#6FAF4E]">Geekonomy</a> can help set up this tracking so that the data from your website, search profile and ads can be read together, though the job records from your own team are still the part only you can supply.'
  ),
  p(
    "Be realistic about sample size. If your site gets a few hundred visits a month, a single week's change in form fills may be noise. Look for patterns across several months before deciding that a page change worked or failed."
  ),

  h2("Small Mistakes That Quietly Cost Estimate Requests"),
  p(
    "Subtle mistakes can undermine good work without raising the alarm, even on a solid site."
  ),
  p(
    "'The slow pages' is a common one, often down to large project photos that haven&rsquo;t been compressed. View the site on a mobile connection and not your office wi-fi as that&rsquo;s where most homeowners will be viewing it."
  ),
  p(
    "Page overlay pop-ups annoy visitors, and especially on a mobile phone. If you have one, set a delay, and be sure there&rsquo;s a quick way for visitors to dismiss it."
  ),
  p(
    "Lose trust An outdated phone number, expired offer, or copyright date from last century indicates a business that isn&rsquo;t paying attention."
  ),
  p(
    "Visitors can be paralysed by over choice. Between six buttons, three telephone numbers, and a chat widget on one page, you might be making your visitors pull in different directions. Choose one primary action (the estimate request works well) and support it with everything else."
  ),

  h2("Frequently Asked Questions"),
  h3("How many estimate requests should a window and door website get?"),
  p(
    "There is no reliable standard number, because it depends on traffic, local competition, season and how well the site matches what people search for. A better question is whether your own rate is improving. Compare form submissions and calls against website visitors month over month and look for steady movement, rather than chasing a figure from another company's results."
  ),
  h3("Is a longer or shorter estimate form better?"),
  p(
    "For most installers, a short form works best: name, phone, email, address or postcode, project type and a free-text box. Longer forms can screen visitors better, but they also lose more of them, particularly on phones. Ask only for what your team needs to make a useful first call, and collect the rest during that conversation."
  ),

  h2("Final Thoughts"),
  p(
    "Turning website visitors into estimated requests rarely depends on one dramatic change. It comes from a site that is clear about what you install and where, honest about how pricing works, backed by proof a homeowner can check, and easy to act on from a phone. After that, the speed and quality of your reply decide who wins the job. Start with the basics, measure the results over a few months, and adjust based on what your own numbers show."
  ),
  p('<div class="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#69AE44] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 text-center max-w-full box-border"><p class="text-white font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-xl md:text-2xl leading-tight break-words">Ready to Turn More Website Visitors Into Estimate Requests?</p><p class="text-white/70 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-snug break-words">Geekonomy helps window and door installers improve their digital presence and connect with more homeowners.</p><a href="/contact-us" data-blog-cta class="inline-block bg-[#69AE44] text-white font-bold py-2.5 px-4 text-sm sm:py-3.5 sm:px-6 sm:text-base md:py-3.5 md:px-8 rounded-full no-underline transition-all duration-300 ease-in-out hover:opacity-90">Talk to Our Marketing Team</a></div>'),
];

export const windowDoorInstallersEstimateRequests: BlogData = {
  slug: "window-door-installers-estimate-requests",
  heading: "How Window and Door Installers Can Turn Website Visitors into Estimate Requests",
  coverImage,
  sections: contentToSections(
    windowDoorInstallersEstimateRequestsContent,
    {
      src: coverImage,
      alt: "Window and door installers generating estimate requests",
    },
    {
      introTitle: "How Window and Door Installers Can Turn Website Visitors into Estimate Requests",
    }
  ),
};

export const windowDoorInstallersEstimateRequestsSEO = {
  title: "Window and Door Website Tips for More Estimates",
  description:
    "Practical ways window and door installers can turn website visitors into estimate requests, from page layout to forms and follow-up.",
  url: "https://thegeekonomy.com/blog/window-door-installers-estimate-requests",
  canonical:
    "https://thegeekonomy.com/blog/window-door-installers-estimate-requests",
  image: coverImage,
  twitterHandle: "@Geekonomy",
};

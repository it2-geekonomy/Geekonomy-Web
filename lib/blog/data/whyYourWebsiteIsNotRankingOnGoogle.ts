import type { BlogData } from "../types";
import type { BlogContentItem } from "../utils";
import { contentToSections, p, h2, h3, img } from "../utils";

const coverImage =
  "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/blog-image/10-Reasons-Why-Your-Website-is-Not-Ranking-on-Google/10-Reasons-Why-Your-Website-is-Not-Ranking-on-Google.webp";

const imageDir =
  "/blog image/10 Reasons Why Your Website is Not Ranking on Google";

const whyYourWebsiteIsNotRankingOnGoogleContent: BlogContentItem[] = [
  p("Do you see poor performance of your site in the search results of Google?"),
  p("Do you know why your site is not ranking as high as you had hoped, or why your old site is not appearing at all?"),
  p("It is the irritating truth of many web masters that they have created a site, and it still fails to appear on Google, despite their best intentions to prevent a Google penalty and get their site up to best practice standards."),
  p("It may be a complicated riddle to find out why your site is not ranking."),
  p("We will discuss 10 reasons why your site is not ranking in Google and the ways that you can work on your ranking on the site."),

  p('<div class="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#69AE44] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 text-center max-w-full box-border"><p class="text-white font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-xl md:text-2xl leading-tight break-words">Why Isn\'t Your Website Ranking on Google?</p><p class="text-white/70 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-snug break-words">Get an SEO audit that finds the reasons and fixes them. Improve visibility, traffic, and rankings.</p><a href="/contact-us" data-blog-cta class="inline-block bg-[#69AE44] text-white font-bold py-2.5 px-4 text-sm sm:py-3.5 sm:px-6 sm:text-base md:py-3.5 md:px-8 rounded-full no-underline transition-all duration-300 ease-in-out hover:opacity-90">Schedule Your Free Consultation</a></div>'),

  img(coverImage, "10 Reasons Why Your Website is Not Ranking on Google"),

  h2("Understanding Google Rankings"),
  img(`${imageDir}/Understanding Google Rankings.webp`, "Understanding Google Rankings"),
  h3("What Are Google Ranking Factors?"),
  p("Google has a very complicated algorithm that achieves ranking of websites, and it takes into consideration numerous ranking factors that assist Google in identifying the finest content."),
  p("These ranking factors are indicators to Google of the quality, relevancy, and user experience of your website, which influences your ranking in search results."),
  p("There are certain popular Google ranking factors, such as optimization of your keyword, relevance and quantity of your backlinks, speed of your site, and mobile friendliness of your site, as well as freshness of your content, which are necessary to make your site visible on Google."),
  p("Moreover, user engagement data, such as click-through rates and how much time one spends on the page, can also be taken into consideration by Google."),
  p("Unless your website is appropriately responding to these ranking parameters, it is a potential reason why your page is not ranking on Google or why your old webpage is not even being indexed."),
  h3("How Google Ranks Your Website"),
  p("The ranking system of Google works by crawling and indexing the websites in order to get knowledge about their content and then to determine whether Google is ranking the sites properly."),
  p("This implies that the bots of Google search through your site, reading the text, images, and the organization of your site, and classifying it in its enormous index."),
  p("When a person searches, Google is used to filter the results that are the most relevant based on its index to discover the best and highest-quality results that can rank and dominate the first page of search engine web pages."),
  p("The algorithm takes into account several signals that rank these search results and then decides on the priority in which they should appear."),
  p("In order to rank higher, it is important to make Google know what your site is all about and why it needs to be viewed as a useful resource to the users, as per their search purpose, therefore providing Google with clear indications."),
  p("One of the 10 reasons your website is not ranking is ignoring this process."),
  h3("The Importance of SEO in Ranking"),
  p("The most important is SEO, or search engine optimization, to enhance the ranking of your website in the search results of Google."),
  p("Effective SEO entails maximizing different aspects of your site to make it visible to the search engines, especially Google."),
  p("An effective SEO strategy is geared towards optimization of your content according to the existing relevant keywords, creation of high-quality backlinks, a user-friendly experience on your website, and enhancement of the speed of your site."),
  p("One of the most obvious causes that your website is not appearing in Google can be ignorance of SEO."),
  p("A properly done strategy of SEO will significantly boost your organic ranking and make your webpage begin to rank higher on the search engine results pages."),
  p("Failure to do this could be among the factors contributing to the failure of your website to rank."),

  h2("Common Reasons Your Website is Not Ranking"),
  img(`${imageDir}/Common Reasons Your Website is Not Ranking.webp`, "Common Reasons Your Website is Not Ranking"),
  h3("1. Poor Keyword Optimization"),
  p("Poor keyword optimization is one of the most typical reasons why your site is not appearing in Google."),
  p("Unless you are using the correct keywords, or using them in the wrong way, Google will not comprehend the contents of what you are offering, thus causing Google to avoid indexing pages of the search engines."),
  p("This would go a long way towards affecting your ranking."),
  p("Do proper keyword research to find out the words that your target audience is seeking."),
  p("Next, place these keywords in a strategic manner on the title tags, meta descriptions, headings, and the body of your website so that Google understands what you are saying."),
  p("Keyword stuffing should be avoided, as Google does not like it, and it can harm the presence of your website in the search results of Google."),
  p("It is very important to incorporate proper keyword integration to make Google perceive your content and stand higher in the Google search results, which makes Google believe that you have valuable content."),
  h3("2. Lack of Quality Content"),
  p("The quality of your content is another important aspect that will determine where you are ranked in the search results."),
  p("Google puts emphasis on those websites that present meaningful, informative, and entertaining information to its users."),
  p("When you have thin content, bad writing, or you do not match the search purpose of your target audience, then it is not likely to be ranked high."),
  p("Production of original high-quality content that meets the needs of the users is the key to success in the SEO green belt, because it makes Google find out that your content fits the search intent."),
  p("Pay attention to detailed information, the answers to popular questions, and personal opinion."),
  p("Consistently refresh your content to enable it to be current and pertinent since Google might like constantly updated materials, and this will enable Google to learn about your web page in a more efficient manner."),
  p("This is achievable by producing useful content regularly, and by doing so, you will be able to climb the ranking ladder and be considered an expert in your niche. Google will rank you well."),
  p("This is possibly one of the main 10 reasons that your particular site is not ranking on Google in the first position in the first place."),
  h3("3. Technical SEO Issues"),
  p("Technical SEO issues may seriously impair the ranking of your site on Google and prevent a possible Google penalty that will adversely affect your presence on the search engine results page."),
  p("The problems of slow webpage speed, unfriendliness on mobile, broken links, and poor site structure could hurt the appearance of your site in the Google search results and user experience."),
  p("Make sure that you optimize your site for mobile devices because Google relies on mobile-first indexing."),
  p("Google Search Console helps to track and correct possible technical issues that could be negatively impacting the crawlability and index of your site."),
  p("An organized site that has a good structure is a site that is easily crawled and indexed by Google."),
  p('These <a href="https://thegeekonomy.com/blog/difference-between-technical-seo-and-content-seo-audits" class="underline text-[#6FAF4E]">technical SEO factors</a>, including strong backlinks, are essential in improving your exposure as well as making sure that your site appears on the first page, which implies that Google will be more perceptive of the relevance of your site.'),
  p("Failure to handle the technical SEO issues can be one of the 10 reasons your site isn’t."),

  h2("Struggling to Rank on Google?"),
  img(`${imageDir}/Struggling to Rank on Google.webp`, "Struggling to Rank on Google"),
  h3("Identifying Possible Reasons Why Your Page is Not Ranking"),
  p("When you are not ranking on Google, it is vital to know the reasons why your page is not ranking, which can include poor SEO practices, and it does not correspond to the search intent."),
  p("It can be attributed to a lot of possible reasons, and knowing them becomes the first measure to getting better in search results."),
  p("Factors that lead to this are common, with some being that a new site may require weeks of Google search to be indexed and visible, and is slow to be recognized and earn the confidence of Google in the first place."),
  p("Technical SEO issues, i.e., slow connectivity speed or mobile incompatibility, may also adversely affect your capacity to persuade Google that your information is pertinent."),
  p("In a systematic way of dealing with these possible problems, you can find out why your particular site is not ranking highly."),
  p("Why my site is not performing as expected is important at all because Google takes into account many factors, so make efforts to correct the situation so that your particular site will meet these requirements."),
  p("This will assist Google in understanding your content to match the search intent of your audience, meaning that Google will make your content more visible to Google."),
  h3("Analyzing Your Site's Indexing Status"),
  p("The process of confirming the position on the page of your site can be an eye-opener to the actual performance of your site in the Google search results."),
  p("Index status is an essential way of finding out why your site is not ranking."),
  p("Unless your pages are optimized to be search engine-friendly, then Google is not able to rank your pages, and it is not even able to tell whether Google is ranking your pages or not."),
  p("Use Google Search Console to verify which of your pages are indexed and whether Google is ranking them, and find out whether there are any problems preventing visibility that assist Google in scouting your materials."),
  p("Other common indexing issues are the blocking of the robots.txt file, noindex meta tags, and sitemap errors that may cripple the way Google views your site."),
  p("By resolving these, it would mean that Google would be able to assist in finding your content and determining your visibility appropriately, which is critical in raising your likelihood of ranking higher."),
  p("Google might not index a new site very fast, and if the content of your site is not optimized, you might not see it in the search results until several weeks have passed."),
  h3("Understanding Page Rankings and Their Impact"),
  p("It is important to know how the speed of the page relates to your site in Google, as far as optimization is concerned."),
  p("Understanding how different factors operate and how they influence the visibility is essential to optimizing your site in Google."),
  p("The increased ranking will result in more organic traffic, brand awareness, and eventually, conversions."),
  p("Why your website does not provide Google with a clear idea of what it tries to do means that Google cannot rank your website effectively or help Google find out what is on it."),
  p("Poor rankings are discouraging when you find that your site is not appearing in the search results."),
  p("The ability to make your results in Google search positions much higher in terms of click-through rate greatly influences whether or not your site will actually receive traffic to it on Google at all."),
  p("The first results page Google captures an unrealistically high portion of the number of clicks, and the following pages actually obtain much smaller portions."),
  p("To achieve better rankings, you need a complex approach with such strategies as optimization of your content in terms of the relevant keywords, high-quality backlinking, a user-friendly experience on your website, and alignment of your content with the search purpose."),
  p("In case your site is not performing well in the ranking position of your webpage, you should determine why your webpage is not ranking well and be ranked in Google to drive organic traffic."),

  h2("Improving Your Website's Visibility"),
  img(`${imageDir}/Improving Your Website.webp`, "Improving Your Website"),
  h3("Strategies to Rank Higher in Google"),
  p("In order to appear in a high ranking in the Google search engine, it is necessary to adopt a detailed SEO strategy that tackles different ranking provisions on the site."),
  p("Some of the main steps that can be taken as an excellent starting point include:"),
  p("Carry out extensive research on keywords to find out the keywords that are being searched by your target audience."),
  p("Maximize your meta descriptions, title tags, and content on your website with such keywords."),
  p("Develop a good quality of backlinks of reputable sites in order to make your site more authoritative and credible in the eyes of the search engines."),
  p("Making your site user-friendly by making it mobile-friendly, fast loading, and easy navigation is also a key to ranking high in Google because Google also takes into consideration the user interaction as one of its ranking factors."),
  p("Following these measures will go a long way in ensuring that your site has better chances of ranking in Google and your material will be aligned with the search intent and will draw more organic traffic."),
  h3("Using Tools to Analyze Google Rankings"),
  p("It is important to use tools that will help analyze your Google rankings and determine where you are falling short to assist Google in recognizing the value of your website."),
  p("The Google Search Console offers useful data on the performance of a site, such as the ranking of keywords, crawling errors, and indexation."),
  p("Monitor your organic traffic, bounce rates, and time on page to evaluate user engagement by using Google Analytics, which means that Google can be used to uncover the performance of your website."),
  p("SEO software and keyword tools have options that assist in enhancing your web page ranking, keyword ranking tracking, backlink analysis, and competitor research."),
  p("Using these, you can better understand what is happening with your site and how Google captures your content ranking performance and can make a data-driven choice to improve your site on Google."),
  p("To enhance the content on your site, make sure it is optimized in order to rank in Google."),
  h3("Best Practices for Showing Up on Google"),
  p("The best practices must be followed because they serve as essential elements for achieving a Google presence, together with better website ranking results."),
  p("To reach this goal, multiple components of your website, together with its content, need to receive specific monitoring."),
  p("The monitoring process requires tracking all aspects of your website, which includes monitoring meta descriptions and relevant keywords."),
  p("Your WordPress website will achieve better Google ranking through its mobile compatibility, quick loading speed, and secure HTTPS protection."),
  p("The search engines need your website to have high-quality original content that matches user search intent because this content helps them display your website on their results pages."),
  p("The base elements require optimization, so content matches the search intent of your target audience."),
  p("Keyword SEO practices must be followed because they establish the foundation for your website to reach search engine visibility."),
  p("Your website should avoid keyword stuffing, while you must establish high-quality backlinks through credible websites to improve your site's Google ranking."),
  p("The sitemap submission, together with your site structure, will help Google to crawl and index your website in a more effective manner."),
  p("You should conduct routine monitoring of your website through Google Search Console and Analytics to find and solve any performance problems."),
  p("The search engines need time to include your new website in their ranking systems."),
  p("Your old WordPress website fails to achieve better Google rankings because Google is working to crawl and index your website."),
  p("Google search rankings depend on exactitude because they do not depend on random chance."),

  p('<div class="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#69AE44] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 text-center max-w-full box-border"><p class="text-white font-bold mb-2 sm:mb-3 md:mb-4 text-base sm:text-xl md:text-2xl leading-tight break-words">Ready to Fix Your Google Rankings?</p><p class="text-white/70 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg leading-snug break-words">We find why your site isn\'t ranking and fix it. Get a clear audit and actionable steps to appear on the first page.</p><a href="/contact-us" data-blog-cta class="inline-block bg-[#69AE44] text-white font-bold py-2.5 px-4 text-sm sm:py-3.5 sm:px-6 sm:text-base md:py-3.5 md:px-8 rounded-full no-underline transition-all duration-300 ease-in-out hover:opacity-90">Book Your Free SEO Audit</a></div>'),
];

export const whyYourWebsiteIsNotRankingOnGoogle: BlogData = {
  slug: "why-your-website-is-not-ranking-on-google",
  heading: "10 Reasons Why Your Website is Not Ranking on Google",
  coverImage,
  sections: contentToSections(
    whyYourWebsiteIsNotRankingOnGoogleContent,
    {
      src: coverImage,
      alt: "10 Reasons Why Your Website is Not Ranking on Google",
    },
    { introTitle: "10 Reasons Why Your Website is Not Ranking on Google" }
  ),
};

export const whyYourWebsiteIsNotRankingOnGoogleSEO = {
  title: "10 Reasons Why Your Website is Not Ranking on Google",
  description:
    "Discover 10 reasons why your website is not ranking on Google and learn practical SEO fixes to improve visibility, increase traffic, and grow online.",
  url: "https://thegeekonomy.com/blog/why-your-website-is-not-ranking-on-google",
  canonical:
    "https://thegeekonomy.com/blog/why-your-website-is-not-ranking-on-google",
  image:
    "https://thegeekonomy.comhttps://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/blog-image/10-Reasons-Why-Your-Website-is-Not-Ranking-on-Google/10-Reasons-Why-Your-Website-is-Not-Ranking-on-Google.webp",
  twitterHandle: "@Geekonomy",
};


/**
 * Author mapping for blog posts
 * Maps blog slugs to their respective authors
 */

export type AuthorName = "Rahul Dutta" | "Aaron Roshan";

export interface AuthorInfo {
  name: AuthorName;
  role: string;
  image: string;
  mainImage?: string;
  /**
   * Short SEO-friendly description (used for meta description)
   */
  metaDescription?: string;
  biography?: string;
}

export const AUTHOR_INFO: Record<AuthorName, AuthorInfo> = {
  "Rahul Dutta": {
    name: "Rahul Dutta",
    role: "SEO STRATEGIST",
    image: "/author/Rahul author.webp",
    mainImage: "/author/Rahul main.webp",
    metaDescription:
      "Rahul Dutta is an SEO Strategist at Geekonomy specializing in semantic SEO, technical audits, and strategies that grow organic traffic and qualified leads.",
    biography: "An SEO Strategist At Geekonomy Specializing In Semantic SEO, Technical Audits, And Search-Focused Content Strategy. He Helps Businesses Across The USA, UK, And India Improve Search Rankings, Grow Organic Traffic, And Generate Qualified Leads Through Structured, Data-Driven SEO Frameworks.<br/><br/>His Strategies Have Helped Brands Achieve Up To 3X Organic Traffic Growth And Secure Top-Page Rankings For Competitive Keywords. At Geekonomy, Rahul Shares Actionable Insights On SEO Trends, Search Algorithms, And Performance-Driven Digital Marketing Strategies Designed For Global Markets.",
  },
  "Aaron Roshan": {
    name: "Aaron Roshan",
    role: "CONTENT WRITER",
    image: "/author/Aaron author.webp",
    mainImage: "/author/Aaron main.webp",
    metaDescription:
      "Aaron Roshan is a content writer at Geekonomy who creates clear, research-driven articles on branding, digital marketing, web development, and growth.",
    biography: "A Content Writer At Geekonomy Who Focuses On Creating Clear, Practical, And Research-Driven Articles About Branding, Digital Marketing, Web Development, And Business Growth. His Work Helps Startups And Businesses Understand Complex Digital Concepts In Simple Terms And Apply Them To Improve Their Online Presence. Aaron Regularly Contributes To Geekonomy's Blog With Guides, Industry Insights, And Actionable Strategies For Modern Businesses.",
  },
};

/**
 * Mapping of blog slugs to authors
 * Based on the provided blog lists
 */
export const BLOG_AUTHOR_MAP: Record<string, AuthorName> = {
  // Rahul Dutta's blogs (SEO-related)
  "best-seo-services-for-startups-in-bangalore": "Rahul Dutta",
  "seo-for-startups-a-step-by-step-growth-strategy": "Rahul Dutta",
  "how-much-does-seo-cost-in-manchester": "Rahul Dutta",
  "how-much-does-seo-cost-in-birmingham": "Rahul Dutta",
  "how-much-does-seo-cost-in-new-york": "Rahul Dutta",
  "how-much-does-seo-cost-in-london": "Rahul Dutta",
  "how-much-does-seo-cost-in-houston": "Rahul Dutta",
  "how-much-does-seo-cost-in-seattle": "Rahul Dutta",
  "how-much-does-seo-cost-in-boston": "Rahul Dutta",
  "how-much-does-seo-cost-in-san-francisco": "Rahul Dutta",
  "how-much-does-seo-cost-in-bangalore": "Rahul Dutta",
  "how-much-does-digital-marketing-cost-in-bangalore": "Rahul Dutta",
  "how-to-create-white-label-seo-reports-and-automate-them": "Rahul Dutta",
  "sosoactive-seo-news-digital-marketing-trends-future-lifestyle": "Rahul Dutta",
  "how-important-is-branding-for-seo": "Rahul Dutta",
  "which-ecommerce-platform-is-best-for-seo": "Rahul Dutta",
  "what-do-you-need-to-balance-when-doing-seo": "Rahul Dutta",
  "how-much-does-seo-cost-in-australia": "Rahul Dutta",
  "why-white-label-seo-reporting-is-important-for-agencies": "Rahul Dutta",
  "how-to-use-screaming-frog-to-improve-on-page-seo": "Rahul Dutta",
  "seo-for-estate-planning-lawyers-complete-guide": "Rahul Dutta",
  "best-tools-for-seo-topical-map-boost-your-seo": "Rahul Dutta",
  "enterprise-seo-audits-complete-guide-for-large-websites": "Rahul Dutta",
  "best-practices-for-seo-enhancing-ai-visibility": "Rahul Dutta",
  "why-seo-for-personal-injury-lawyers-matters": "Rahul Dutta",
  "how-to-check-if-your-seo-is-working": "Rahul Dutta",
  "how-does-ben-stace-do-semantic-seo": "Rahul Dutta",
  "how-ai-seo-tools-help-scale-agile-solutions-faster": "Rahul Dutta",
  "how-to-rank-nationally-in-seo": "Rahul Dutta",
  "seo-for-addiction-treatment-centers-complete-guide": "Rahul Dutta",
  "360-international-seo-service-complete-guide": "Rahul Dutta",
  "best-funeral-home-seo-company-for-growth": "Rahul Dutta",
  "seo-for-msps-best-practices-and-local-seo": "Rahul Dutta",
  "fashion-seo-agency-seo-strategies-to-grow": "Rahul Dutta",
  "seo-for-auto-body-shops-strategies-to-boost-local-seo": "Rahul Dutta",
  "common-seo-mistakes-small-businesses-make": "Rahul Dutta",
  "local-seo-for-tradies-get-more-trade-business-with-seo": "Rahul Dutta",
  "how-celebrity-seo-servies-build-online-authority": "Rahul Dutta",
  "seo-for-home-inspectors-business-best-seo-strategies": "Rahul Dutta",
  "how-the-best-fintech-seo-agency-help-you-rank": "Rahul Dutta",
  "local-seo-for-roadside-assistance-providers-best-strategies": "Rahul Dutta",
  "how-much-does-seo-cost-in-chennai": "Rahul Dutta",
  "how-much-does-seo-cost-in-pune": "Rahul Dutta",
  "how-much-does-seo-cost-in-kolkata": "Rahul Dutta",
  "how-much-does-seo-cost-in-ahmedabad": "Rahul Dutta",
  "10-proven-seo-strategies-to-boost-seo-organic-traffic": "Rahul Dutta",
  "how-to-use-python-for-nlp-and-semantic-seo": "Rahul Dutta",
  "seo-for-beauty-industry-brands-complete-guide": "Rahul Dutta",
  "seo-for-physiotherapists-rank-higher": "Rahul Dutta",
  "why-seo-is-important-for-businesses-in-nyc": "Rahul Dutta",
  "b2b-seo-audit-strategies": "Rahul Dutta",
  "carpet-cleaning-seo-services-complete-guide": "Rahul Dutta",
  "how-much-does-seo-cost-in-los-angeles": "Rahul Dutta",
  "how-much-does-seo-cost-in-chicago": "Rahul Dutta",
  "how-much-does-seo-cost-in-hyderabad": "Rahul Dutta",
  "how-much-does-seo-cost-in-delhi-ncr": "Rahul Dutta",
  "how-much-does-seo-cost-in-mumbai": "Rahul Dutta",
  "how-much-do-seo-services-cost-in-houston": "Rahul Dutta",
  "7-reasons-why-your-business-should-invest-in-seo": "Rahul Dutta",
  "seo-for-immigration-attorneys-get-more-clients": "Rahul Dutta",
  "local-seo-for-hotels-boost-visibility": "Rahul Dutta",
  "seo-strategy-funnel": "Rahul Dutta",
  "difference-between-technical-seo-and-content-seo-audits": "Rahul Dutta",
  "how-to-improve-wordpress-seo-for-oxfordshire-sites": "Rahul Dutta",
  "how-a-travel-seo-company-helps-you-rank-higher": "Rahul Dutta",
  "best-local-seo-strategies-for-general-contractors": "Rahul Dutta",
  "seo-platform-for-b2b-companies": "Rahul Dutta",
  "choose-the-best-searchgpt-seo-agency": "Rahul Dutta",
  "how-do-local-seo-agencies-use-rapid-url-indexer": "Rahul Dutta",
  "best-foundation-repair-seo-strategies": "Rahul Dutta",
  "local-seo-for-carpenters-complete-guide": "Rahul Dutta",
  "seo-for-banks-proven-tactics": "Rahul Dutta",
  "how-long-does-it-take-for-medical-seo-to-work": "Rahul Dutta",
  "seo-for-dentists-local-seo-to-get-more-patients": "Rahul Dutta",
  "what-elements-are-foundational-for-seo-with-ai": "Rahul Dutta",
  "how-wordpress-seo-services-improve-traffic": "Rahul Dutta",
  "outsource-seo-india-smart-choice-for-companies": "Rahul Dutta",
  "best-cleaning-service-seo-strategies": "Rahul Dutta",
  "local-seo-for-orthodontists-best-strategies": "Rahul Dutta",
  "seo-for-architects-best-strategies": "Rahul Dutta",
  "can-adding-more-pictures-improve-seo": "Rahul Dutta",
  "what-triggers-an-ai-overview-seo": "Rahul Dutta",
  "how-a-hotel-seo-consultant-helps-you-rank": "Rahul Dutta",
  "can-international-seo-efforts-be-enhanced-with-rapid-url-indexer": "Rahul Dutta",
  "seo-for-legal-firms-complete-guide": "Rahul Dutta",
  "how-to-choose-the-best-ecommerce-seo-company": "Rahul Dutta",
  "local-seo-service-Explained": "Rahul Dutta",
  "local-seo-for-bangalore-businesses": "Rahul Dutta",
  "automotive-seo-for-car-dealerships": "Rahul Dutta",
  "how-seo-audit-services-improve-seo": "Rahul Dutta",
  "local-seo-for-estate-agents": "Rahul Dutta",
  "nursing-homes-seo-company-help-you-rank": "Rahul Dutta",
  "seo-for-plumbers-proven-techniques-to-rank": "Rahul Dutta",
  "seo-for-financial-services-strategies": "Rahul Dutta",
  "best-b2b-saas-seo-agency-strategies": "Rahul Dutta",
  "how-much-does-seo-cost-in-uk": "Rahul Dutta",
  "why-indexceptional-is-the-best-website-indexing-tool-for-seo": "Rahul Dutta",
  "seo-friendly-cms-find-the-best": "Rahul Dutta",
  "why-branding-is-important-for-bangalore-businesses": "Rahul Dutta",
  "seo-vs-google-ads-for-bangalore-businesses":"Rahul Dutta",

  // Aaron Roshan's blogs (Development, PPC, UX/UI related)
  "benefits-of-bespoke-website-development": "Aaron Roshan",
  "ecommerce-website-development-services-help-you-grow": "Aaron Roshan",
  "choose-the-right-custom-software-development-company": "Aaron Roshan",
  "b2b-ecommerce-website-development-strategies": "Aaron Roshan",
  "ppc-home-services-complete-guide": "Aaron Roshan",
  "multilingual-ppc-services-reach-global-customers-faster": "Aaron Roshan",
  "ux-ui-design-explained-for-uk-business-owners": "Aaron Roshan",
  "what-makes-a-good-business-website-in-the-uk": "Aaron Roshan",
  "how-to-reduce-website-cost-uk": "Aaron Roshan",
  "web-development-cost-in-bangalore-for-small-businesses": "Aaron Roshan",
  "white-label-ppc-services-usa": "Aaron Roshan",
  "how-much-does-branding-cost-in-the-uk": "Aaron Roshan",
  "omnichannel-marketing": "Aaron Roshan",
  "rebranding-services-in-bangalore-when-and-why-you-need": "Aaron Roshan",
  "build-strong-brand-for-startup-in-bangalore": "Aaron Roshan",
  "personal-branding-for-founders-in-bangalore-guide": "Aaron Roshan",
  "best-branding-agency-in-bangalore-for-startups": "Aaron Roshan",
  "best-digital-marketing-strategies-for-bangalore-businesses": "Aaron Roshan",
  "branding-cost-in-bangalore":"Aaron Roshan",
  "corporate-branding-services-bangalore-guide":"Aaron Roshan",
  "startup-branding-strategy-bangalore-entrepreneurs":"Aaron Roshan",
};

/**
 * Get author info for a blog slug
 */
export function getAuthorForBlog(slug: string): AuthorInfo {
  const authorName = BLOG_AUTHOR_MAP[slug] || "Rahul Dutta"; // Default to Rahul Dutta
  return AUTHOR_INFO[authorName];
}

/**
 * Publish date per blog (from file mtime as of last run). When you edit a blog file and save, it will show "Updated" with the new date.
 */
export const BLOG_PUBLISHED_DATES: Record<string, string> = {
  "10-proven-seo-strategies-to-boost-seo-organic-traffic": "March 12, 2026",
  "360-international-seo-service-complete-guide": "March 11, 2026",
  "7-reasons-why-your-business-should-invest-in-seo": "March 11, 2026",
  "automotive-seo-for-car-dealerships": "March 11, 2026",
  "b2b-ecommerce-website-development-strategies": "March 12, 2026",
  "b2b-seo-audit-strategies": "March 12, 2026",
  "benefits-of-bespoke-website-development": "March 11, 2026",
  "best-cleaning-service-seo-strategies": "March 12, 2026",
  "best-foundation-repair-seo-strategies": "March 12, 2026",
  "best-funeral-home-seo-company-for-growth": "March 11, 2026",
  "best-b2b-saas-seo-agency-strategies": "March 12, 2026",
  "best-seo-services-for-startups-in-bangalore": "March 12, 2026",
  "best-tools-for-seo-topical-map-boost-your-seo": "March 11, 2026",
  "best-local-seo-strategies-for-general-contractors": "March 12, 2026",
  "best-practices-for-seo-enhancing-ai-visibility": "March 11, 2026",
  "how-the-best-fintech-seo-agency-help-you-rank": "March 11, 2026",
  "how-much-does-branding-cost-in-the-uk": "March 11, 2026",
  "can-adding-more-pictures-improve-seo": "March 11, 2026",
  "can-international-seo-efforts-be-enhanced-with-rapid-url-indexer": "March 11, 2026",
  "carpet-cleaning-seo-services-complete-guide": "March 12, 2026",
  "choose-the-best-searchgpt-seo-agency": "March 12, 2026",
  "choose-the-right-custom-software-development-company": "March 12, 2026",
  "common-seo-mistakes-small-businesses-make": "March 11, 2026",
  "difference-between-technical-seo-and-content-seo-audits": "March 12, 2026",
  "ecommerce-website-development-services-help-you-grow": "March 11, 2026",
  "enterprise-seo-audits-complete-guide-for-large-websites": "March 11, 2026",
  "fashion-seo-agency-seo-strategies-to-grow": "March 11, 2026",
  "how-a-hotel-seo-consultant-helps-you-rank": "March 11, 2026",
  "how-a-travel-seo-company-helps-you-rank-higher": "March 12, 2026",
  "how-ai-seo-tools-help-scale-agile-solutions-faster": "March 11, 2026",
  "how-celebrity-seo-servies-build-online-authority": "March 11, 2026",
  "how-does-ben-stace-do-semantic-seo": "March 11, 2026",
  "how-do-local-seo-agencies-use-rapid-url-indexer": "March 12, 2026",
  "how-important-is-branding-for-seo": "March 11, 2026",
  "how-long-does-it-take-for-medical-seo-to-work": "March 11, 2026",
  "how-much-does-seo-cost-in-ahmedabad": "March 12, 2026",
  "how-much-does-seo-cost-in-australia": "March 11, 2026",
  "how-much-does-seo-cost-in-bangalore": "March 11, 2026",
  "how-much-does-digital-marketing-cost-in-bangalore": "March 12, 2026",
  "how-much-does-seo-cost-in-birmingham": "March 12, 2026",
  "how-much-does-seo-cost-in-boston": "March 12, 2026",
  "how-much-does-seo-cost-in-chennai": "March 12, 2026",
  "how-much-does-seo-cost-in-chicago": "March 12, 2026",
  "how-much-does-seo-cost-in-delhi-ncr": "March 11, 2026",
  "how-much-does-seo-cost-in-hyderabad": "March 11, 2026",
  "how-much-does-seo-cost-in-kolkata": "March 12, 2026",
  "how-much-does-seo-cost-in-london": "March 12, 2026",
  "how-much-does-seo-cost-in-los-angeles": "March 12, 2026",
  "how-much-does-seo-cost-in-manchester": "March 12, 2026",
  "how-much-does-seo-cost-in-mumbai": "March 11, 2026",
  "how-much-does-seo-cost-in-new-york": "March 11, 2026",
  "how-much-does-seo-cost-in-pune": "March 12, 2026",
  "how-much-does-seo-cost-in-san-francisco": "March 11, 2026",
  "how-much-does-seo-cost-in-seattle": "March 11, 2026",
  "how-much-does-seo-cost-in-uk": "March 11, 2026",
  "how-much-do-seo-services-cost-in-houston": "March 11, 2026",
  "how-to-check-if-your-seo-is-working": "March 11, 2026",
  "how-to-choose-the-best-ecommerce-seo-company": "March 11, 2026",
  "how-to-create-white-label-seo-reports-and-automate-them": "March 11, 2026",
  "how-to-improve-wordpress-seo-for-oxfordshire-sites": "March 11, 2026",
  "how-to-rank-nationally-in-seo": "March 11, 2026",
  "how-to-reduce-website-cost-uk": "March 11, 2026",
  "how-to-use-python-for-nlp-and-semantic-seo": "March 12, 2026",
  "how-to-use-screaming-frog-to-improve-on-page-seo": "March 11, 2026",
  "how-wordpress-seo-services-improve-traffic": "March 12, 2026",
  "local-seo-for-carpenters-complete-guide": "March 12, 2026",
  "local-seo-for-estate-agents": "March 11, 2026",
  "local-seo-for-hotels-boost-visibility": "March 11, 2026",
  "local-seo-for-orthodontists-best-strategies": "March 12, 2026",
  "local-seo-for-roadside-assistance-providers-best-strategies": "March 11, 2026",
  "local-seo-for-tradies-get-more-trade-business-with-seo": "March 11, 2026",
  "local-seo-service-Explained": "March 12, 2026",
  "local-seo-for-bangalore-businesses": "March 13, 2026",
  "logo-designers-in-bangalore-how-to-choose-the-best": "March 12, 2026",
  "multilingual-ppc-services-reach-global-customers-faster": "March 11, 2026",
  "nursing-homes-seo-company-help-you-rank": "March 11, 2026",
  "omnichannel-marketing": "March 11, 2026",
  "on-page-seo-checklist-for-service-based-websites": "March 12, 2026",
  "outsource-seo-india-smart-choice-for-companies": "March 12, 2026",
  "ppc-home-services-complete-guide": "March 11, 2026",
  "rebranding-services-in-bangalore-when-and-why-you-need": "March 13, 2026",
  "build-strong-brand-for-startup-in-bangalore": "March 13, 2026",
  "seo-cost-in-bristol": "March 11, 2026",
  "seo-cost-in-leeds": "March 12, 2026",
  "seo-for-addiction-treatment-centers-complete-guide": "March 11, 2026",
  "seo-for-architects-best-strategies": "March 12, 2026",
  "seo-for-auto-body-shops-strategies-to-boost-local-seo": "March 12, 2026",
  "seo-for-banks-proven-tactics": "March 12, 2026",
  "seo-for-beauty-industry-brands-complete-guide": "March 12, 2026",
  "seo-for-dentists-local-seo-to-get-more-patients": "March 12, 2026",
  "seo-for-estate-planning-lawyers-complete-guide": "March 11, 2026",
  "seo-for-financial-services-strategies": "March 11, 2026",
  "seo-for-home-inspectors-business-best-seo-strategies": "March 11, 2026",
  "seo-for-immigration-attorneys-get-more-clients": "March 11, 2026",
  "seo-for-legal-firms-complete-guide": "March 11, 2026",
  "seo-for-msps-best-practices-and-local-seo": "March 11, 2026",
  "seo-for-physiotherapists-rank-higher": "March 12, 2026",
  "seo-for-plumbers-proven-techniques-to-rank": "March 11, 2026",
  "seo-for-startups-a-step-by-step-growth-strategy": "March 11, 2026",
  "seo-friendly-cms-find-the-best": "March 11, 2026",
  "seo-platform-for-b2b-companies": "March 12, 2026",
  "seo-strategy-funnel": "March 11, 2026",
  "how-seo-audit-services-improve-seo": "March 11, 2026",
  "sosoactive-seo-news-digital-marketing-trends-future-lifestyle": "March 11, 2026",
  "technical-seo-mistakes-that-kill-google-rankings": "March 12, 2026",
  "ux-ui-design-explained-for-uk-business-owners": "March 11, 2026",
  "web-development-cost-in-bangalore-for-small-businesses": "March 12, 2026",
  "what-do-you-need-to-balance-when-doing-seo": "March 11, 2026",
  "what-elements-are-foundational-for-seo-with-ai": "March 12, 2026",
  "what-makes-a-good-business-website-in-the-uk": "March 11, 2026",
  "what-triggers-an-ai-overview-seo": "March 11, 2026",
  "which-ecommerce-platform-is-best-for-seo": "March 11, 2026",
  "white-label-ppc-services-usa": "March 12, 2026",
  "why-indexceptional-is-the-best-website-indexing-tool-for-seo": "March 11, 2026",
  "why-seo-for-personal-injury-lawyers-matters": "March 11, 2026",
  "why-seo-is-important-for-businesses-in-nyc": "March 12, 2026",
  "why-white-label-seo-reporting-is-important-for-agencies": "March 11, 2026",
  "why-your-website-is-not-ranking-on-google": "March 12, 2026",
  "personal-branding-for-founders-in-bangalore-guide" : "March 23,2026",
  "best-branding-agency-in-bangalore-for-startups":"March 23,2026",
  "why-branding-is-important-for-bangalore-businesses" : "March 23, 2026",
  "best-digital-marketing-strategies-for-bangalore-businesses": "March 23,2026",
  "seo-vs-google-ads-for-bangalore-businesses":"March 24, 2026",
  "branding-cost-in-bangalore":"March 24, 2026",
  "corporate-branding-services-bangalore-guide":"March 25, 2026",
  "startup-branding-strategy-bangalore-entrepreneurs":" March 24, 2026",
};

/**
 * Get published date for a blog slug (manual only; server uses file mtime when needed).
 */
export function getPublishedDate(slug: string): string | null {
  return BLOG_PUBLISHED_DATES[slug] || null;
}

/**
 * Get updated date for a blog slug. Manual updates removed; server uses file mtime.
 */
export function getUpdatedDate(slug: string): string | null {
  return null;
}

/**
 * Convert date string (e.g., "March 3, 2026") to ISO format for structured data
 */
export function dateToISO(dateString: string): string {
  try {
    // Parse date string like "March 3, 2026"
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString();
    }
    // If parsing fails, try alternative format
    const parts = dateString.match(/(\w+)\s+(\d+),\s+(\d+)/);
    if (parts) {
      const [, month, day, year] = parts;
      const dateObj = new Date(`${month} ${day}, ${year}`);
      if (!isNaN(dateObj.getTime())) {
        return dateObj.toISOString();
      }
    }
    // Fallback to default
    return new Date("2026-03-03").toISOString();
  } catch {
    // If all parsing fails, return default ISO date
    return new Date("2026-03-03").toISOString();
  }
}

/**
 * Get published date in ISO format for structured data
 */
export function getPublishedDateISO(slug: string): string | null {
  const date = getPublishedDate(slug);
  if (!date) return null;
  return dateToISO(date);
}

/**
 * Get updated date in ISO format for structured data
 */
export function getUpdatedDateISO(slug: string): string | null {
  const date = getUpdatedDate(slug);
  if (!date) return null;
  return dateToISO(date);
}

/**
 * Convert author name to URL slug
 * Example: "Rahul Dutta" -> "rahul-dutta"
 */
export function getAuthorSlug(authorName: AuthorName): string {
  return authorName.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Get author info by slug
 */
export function getAuthorBySlug(slug: string): AuthorInfo | null {
  const authorName = Object.keys(AUTHOR_INFO).find(
    (name) => getAuthorSlug(name as AuthorName) === slug
  ) as AuthorName | undefined;
  
  if (authorName) {
    return AUTHOR_INFO[authorName];
  }
  return null;
}

/**
 * Get all blog slugs for an author
 */
export function getBlogsByAuthor(authorName: AuthorName): string[] {
  return Object.entries(BLOG_AUTHOR_MAP)
    .filter(([_, author]) => author === authorName)
    .map(([slug]) => slug);
}

/**
 * Get the display date info (published or updated)
 * Returns object with date and label ("Published" or "Updated")
 */
export function getDateInfo(slug: string): { date: string; label: "Published" | "Updated" } | null {
  const updatedDate = getUpdatedDate(slug);
  const publishedDate = getPublishedDate(slug);
  
  // If there's an updated date, show that with "Updated" label
  if (updatedDate) {
    return { date: updatedDate, label: "Updated" };
  }
  
  // Otherwise, show published date with "Published" label
  if (publishedDate) {
    return { date: publishedDate, label: "Published" };
  }
  
  // Default fallback
  return { date: "March 3, 2026", label: "Published" };
}

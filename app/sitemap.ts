import { MetadataRoute } from 'next'
import { allBlogsData } from '@/components/Blogs/blogs'
import { caseStudies } from '@/lib/case-studies/data'

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thegeekonomy.com'
  const currentDate = new Date('2026-02-19T03:57:01+00:00').toISOString()

  // Static pages with priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/what-we-do`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/success-lab`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // Case studies - using first category for canonical URL
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies
    .filter(cs => {
      // Only include the 4 case studies from the sitemap
      const includedSlugs = ['divyasree-builders', 'mushashi-delta', 'hindustan-power', 'vst-group']
      return includedSlugs.includes(cs.slug)
    })
    .map(cs => {
      const categorySlug = slugify(cs.category[0] || 'case-study')
      return {
        url: `${baseUrl}/case-studies/${categorySlug}/${cs.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }
    })

  // Blog posts with priorities based on the provided sitemap
  const blogPriorities: Record<string, number> = {
    'best-seo-services-for-startups-in-bangalore': 0.64,
    'seo-for-startups-a-step-by-step-growth-strategy': 0.64,
    'how-much-does-seo-cost-in-manchester': 0.64,
    'how-much-does-seo-cost-in-birmingham': 0.64,
    'how-much-does-seo-cost-in-new-york': 0.64,
    'how-much-does-seo-cost-in-london': 0.64,
    '10-proven-seo-strategies-to-boost-seo-organic-traffic': 0.51,
    'how-wordpress-seo-services-improve-traffic': 0.51,
    'how-do-local-seo-agencies-use-rapid-url-indexer': 0.51,
    'seo-for-banks-proven-tactics': 0.51,
    'best-tools-for-seo-topical-map-boost-your-seo': 0.51,
    'enterprise-seo-audits-complete-guide-for-large-websites': 0.51,
    'carpet-cleaning-seo-services-complete-guide': 0.51,
    'seo-for-home-inspectors-business-best-seo-strategies': 0.51,
    'seo-for-plumbers-proven-techniques-to-rank': 0.51,
    'seo-strategy-funnel': 0.51,
    'how-ai-seo-tools-help-scale-agile-solutions-faster': 0.51,
    'how-to-choose-the-best-ecommerce-seo-company': 0.51,
    'b2b-seo-audit-strategies': 0.51,
    'how-much-do-seo-services-cost-in-houston': 0.51,
    'how-much-does-seo-cost-in-ahmedabad': 0.41,
    'seo-platform-for-b2b-companies': 0.41,
    'what-elements-are-foundational-for-seo-with-ai': 0.41,
    'why-seo-is-important-for-businesses-in-nyc': 0.41,
    'how-to-use-python-for-nlp-and-semantic-seo': 0.41,
    'best-foundation-repair-seo-strategies': 0.41,
    'local-seo-for-carpenters-complete-guide': 0.41,
    'seo-for-physiotherapists-rank-higher': 0.41,
    'seo-for-estate-planning-lawyers-complete-guide': 0.41,
    'best-practices-for-seo-enhancing-ai-visibility': 0.41,
    'seo-for-architects-best-strategies': 0.41,
    'best-local-seo-strategies-for-general-contractors': 0.41,
    'how-celebrity-seo-servies-build-online-authority': 0.41,
    'how-the-best-fintech-seo-agency-help-you-rank': 0.41,
    'best-b2b-saas-seo-agency-strategies': 0.41,
    'can-adding-more-pictures-improve-seo': 0.41,
    'how-to-check-if-your-seo-is-working': 0.41,
    'common-seo-mistakes-small-businesses-make': 0.41,
    'local-seo-for-hotels-boost-visibility': 0.41,
    'difference-between-technical-seo-and-content-seo-audits': 0.41,
    'how-does-ben-stace-do-semantic-seo': 0.41,
    'how-to-rank-nationally-in-seo': 0.41,
    'seo-for-legal-firms-complete-guide': 0.41,
    'local-seo-service-Explained': 0.41,
    'local-seo-for-orthodontists-best-strategies': 0.41,
    'how-much-does-seo-cost-in-seattle': 0.41,
    'how-much-does-seo-cost-in-pune': 0.33,
    'how-much-does-seo-cost-in-kolkata': 0.33,
    'how-much-does-seo-cost-in-chennai': 0.33,
    'how-much-does-seo-cost-in-delhi-ncr': 0.33,
    'how-much-does-seo-cost-in-bangalore': 0.33,
    'how-much-does-seo-cost-in-mumbai': 0.33,
    'how-much-does-seo-cost-in-hyderabad': 0.33,
    'choose-the-best-searchgpt-seo-agency': 0.33,
    'seo-for-dentists-local-seo-to-get-more-patients': 0.33,
    'outsource-seo-india-smart-choice-for-companies': 0.33,
    'seo-for-beauty-industry-brands-complete-guide': 0.33,
    'how-long-does-it-take-for-medical-seo-to-work': 0.33,
    'how-to-use-screaming-frog-to-improve-on-page-seo': 0.33,
    'why-seo-for-personal-injury-lawyers-matters': 0.33,
    'how-much-does-seo-cost-in-chicago': 0.33,
    'how-a-travel-seo-company-helps-you-rank-higher': 0.33,
    'local-seo-for-tradies-get-more-trade-business-with-seo': 0.33,
    'seo-friendly-cms-find-the-best': 0.33,
    'b2b-ecommerce-website-development-strategies': 0.33,
    'what-triggers-an-ai-overview-seo': 0.33,
    'seo-for-auto-body-shops-strategies-to-boost-local-seo': 0.33,
    '7-reasons-why-your-business-should-invest-in-seo': 0.33,
    'how-to-improve-wordpress-seo-for-oxfordshire-sites': 0.33,
    'seo-for-addiction-treatment-centers-complete-guide': 0.33,
    'how-a-hotel-seo-consultant-helps-you-rank': 0.33,
    'can-international-seo-efforts-be-enhanced-with-rapid-url-indexer': 0.33,
    'automotive-seo-for-car-dealerships': 0.33,
    'best-cleaning-service-seo-strategies': 0.33,
    'how-much-does-seo-cost-in-boston': 0.33,
    'ecommerce-website-development-services-help-you-grow': 0.26,
    'best-funeral-home-seo-company-for-growth': 0.26,
    'sosoactive-seo-news-digital-marketing-trends-future-lifestyle': 0.26,
    'fashion-seo-agency-seo-strategies-to-grow': 0.26,
    'how-much-does-seo-cost-in-san-francisco': 0.26,
    'how-to-create-white-label-seo-reports-and-automate-them': 0.26,
    'why-white-label-seo-reporting-is-important-for-agencies': 0.26,
    'how-much-does-seo-cost-in-los-angeles': 0.26,
    'local-seo-for-roadside-assistance-providers-best-strategies': 0.26,
    'choose-the-right-custom-software-development-company': 0.26,
    'seo-for-immigration-attorneys-get-more-clients': 0.26,
    '360-international-seo-service-complete-guide': 0.26,
    'ppc-home-services-complete-guide': 0.26,
    'multilingual-ppc-services-reach-global-customers-faster': 0.26,
    'how-seo-audit-services-improve-seo': 0.26,
    'which-ecommerce-platform-is-best-for-seo': 0.21,
    'benefits-of-bespoke-website-development': 0.21,
    'seo-for-financial-services-strategies': 0.21,
    'why-indexceptional-is-the-best-website-indexing-tool-for-seo': 0.21,
    'seo-for-msps-best-practices-and-local-seo': 0.21,
    'how-important-is-branding-for-seo': 0.21,
    'how-much-does-seo-cost-in-australia': 0.21,
    'white-label-ppc-services-usa': 0.21,
    'local-seo-for-estate-agents': 0.21,
    'what-do-you-need-to-balance-when-doing-seo': 0.17,
    'how-to-reduce-website-cost-uk': 0.17,
    'how-much-does-branding-cost-in-the-uk': 0.17,
    'ux-ui-design-explained-for-uk-business-owners': 0.17,
    'what-makes-a-good-business-website-in-the-uk': 0.13,
    'how-much-does-seo-cost-in-uk': 0.13,
    'omnichannel-marketing': 0.11,
    'nursing-homes-seo-company-help-you-rank': 0.09,
  }

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = allBlogsData.map(blog => {
    const priority = blogPriorities[blog.slug] || 0.5
    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority,
    }
  })

  return [...staticPages, ...caseStudyPages, ...blogPages]
}

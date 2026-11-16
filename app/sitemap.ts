import { MetadataRoute } from 'next'
import { allBlogsData } from '@/lib/blog'
import { getBlogFileLastModified } from '@/lib/blog/blogDatesServer'
import { caseStudies } from '@/lib/case-studies/data'
import landingPagesBySlug from '@/lib/landingpage/landingpageslug.json'
import { generateLandingPageIndex } from '@/scripts/generate-landing-slugs.mjs'
import { getDateInfoServer } from '@/lib/blog/blogDatesServer'
import { dateToISO } from '@/lib/blog/authorMapping'

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
      priority: 0.4,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/blog/author/aaron-roshan`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/blog/author/rahul-dutta`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.2,
    },
  ]

  // Landing pages with priority 0.8
  const pageIndex: Record<string, { lastModified: string }> = process.env.NODE_ENV === 'development'
    ? generateLandingPageIndex(process.cwd())
    : landingPagesBySlug
  const landingPages: MetadataRoute.Sitemap = Object.entries(pageIndex).map(([slug, page]) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: page.lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Case studies - using first category for canonical URL
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies
    .filter(cs => {
      // Only include the 4 case studies from the sitemap
      const includedSlugs = ['divyasree-builders', 'musashi-delta', 'hindustan-power', 'vst-group']
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

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = allBlogsData.map(blog => {
    const dateInfo = getDateInfoServer(blog.slug)
    const lastModified = dateInfo.updatedDate
      ? dateToISO(dateInfo.updatedDate)
      : dateToISO(dateInfo.publishedDate)

    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: getBlogFileLastModified(blog.slug),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }
  })

  return [...staticPages, ...landingPages, ...caseStudyPages, ...blogPages]
}

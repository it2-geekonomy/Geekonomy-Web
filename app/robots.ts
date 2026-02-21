import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/', '/secret-page.html', '/cdn-cgi/'],
    },
    sitemap: 'https://thegeekonomy.com/sitemap.xml',
  }
}

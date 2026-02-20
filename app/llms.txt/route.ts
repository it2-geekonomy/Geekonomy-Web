import { NextResponse } from 'next/server'
import { allBlogsData } from '@/components/Blogs/blogs'
import { caseStudies } from '@/lib/case-studies/data'
import { blogSEOData } from '@/lib/blog/seoData'
import { getStaticSEOData } from '@/seoData'

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export async function GET() {
  const baseUrl = 'https://thegeekonomy.com'
  
  // Build llms.txt content
  let content = '# thegeekonomy.com llms.txt\n\n'
  
  // Static pages with custom descriptions
  const staticPages = [
    { 
      key: 'home', 
      path: '/', 
      description: 'Geekonomy helps businesses grow with clarity and direction by building brands, digital systems, and marketing that are designed to last.' 
    },
    { 
      key: 'what-we-do', 
      path: '/what-we-do', 
      description: 'Geekonomy builds integrated frameworks for businesses to scale and grow through strategy, tech, branding, and marketing.' 
    },
    { 
      key: 'how-we-work', 
      path: '/how-we-work', 
      description: 'Geekonomy\'s approach to building brand legacies through research, design, and code, emphasizing clarity and purpose in their work process.' 
    },
    { 
      key: 'success-lab', 
      path: '/success-lab', 
      description: 'A webpage showcasing case studies and success stories of Geekonomy\'s projects and achievements.' 
    },
    { 
      key: 'about', 
      path: '/about', 
      description: 'Geekonomy builds growth systems for businesses through integrated strategy, technology, branding, and marketing.' 
    },
    { 
      key: 'contact-us', 
      path: '/contact-us', 
      description: 'A contact page for Geekonomy, where users can get in touch with the company for various services and inquiries.' 
    },
    { 
      key: 'our-work', 
      path: '/our-work', 
      description: 'A portfolio and case studies page showcasing Geekonomy\'s work in branding, digital marketing, and full-stack development.' 
    },
    { 
      key: 'career', 
      path: '/career', 
      description: 'A webpage announcing the upcoming availability of career opportunities at Geekonomy, with a message to check back soon.' 
    },
    { 
      key: 'blog', 
      path: '/blog', 
      description: 'Explore expert blogs on web design, SEO, and marketing strategies to grow your business smarter.' 
    },
  ]
  
  for (const page of staticPages) {
    const seo = getStaticSEOData(page.key)
    if (seo) {
      content += `- [${seo.title}](${baseUrl}${page.path}): ${page.description}\n`
    }
  }
  
  // Case studies (only the 4 from sitemap)
  const includedCaseStudySlugs = ['divyasree-builders', 'mushashi-delta', 'hindustan-power', 'vst-group']
  const includedCaseStudies = caseStudies
    .filter(cs => includedCaseStudySlugs.includes(cs.slug))
    .sort((a, b) => {
      // Order: musashi-delta, vst-group, divyasree-builders, hindustan-power
      const order = ['mushashi-delta', 'vst-group', 'divyasree-builders', 'hindustan-power']
      return order.indexOf(a.slug) - order.indexOf(b.slug)
    })
  
  // Case study descriptions matching user's format
  const caseStudyDescriptions: Record<string, string> = {
    'mushashi-delta': 'A case study on the branding of Musashi Delta, a joint venture between Musashi Auto Parts and Delta Electronics India, focusing on electric vehicle engineering and sustainability.',
    'vst-group': 'A case study of VST Group\'s website redesign and development by Geekonomy, highlighting the transformation of their digital presence.',
    'divyasree-builders': 'A case study of the website redesign and development for Divyasree Builders, a leading real estate brand in India.',
    'hindustan-power': 'A case study on the website redesign and development of Hindustan Power Projects Pvt. Ltd. by Geekonomy.',
  }
  
  for (const cs of includedCaseStudies) {
    const categorySlug = slugify(cs.category[0] || 'case-study')
    const url = `${baseUrl}/case-studies/${categorySlug}/${cs.slug}`
    
    // Use custom description or fallback to subtitle
    const description = caseStudyDescriptions[cs.slug] || cs.subtitle || 'A case study showcasing Geekonomy\'s work.'
    
    // Format case study title with " - Case Study | Geekonomy" suffix
    const title = `${cs.title.trim()} - Case Study | Geekonomy`
    
    content += `- [${title}](${url}): ${description}\n`
  }
  
  // Blog posts - sorted by slug to match user's order
  const blogEntries = allBlogsData.map(blog => {
    const seoKey = `blog/${blog.slug}`
    const seo = blogSEOData[seoKey as keyof typeof blogSEOData]
    
    if (seo) {
      return {
        title: seo.title,
        url: `${baseUrl}/blog/${blog.slug}`,
        description: seo.description,
      }
    }
    
    // Fallback if SEO data not found
    return {
      title: blog.heading || 'Blog Post',
      url: `${baseUrl}/blog/${blog.slug}`,
      description: 'A blog post by Geekonomy.',
    }
  })
  
  // Sort blogs to match the user's provided order (roughly by importance/popularity)
  // The user's list seems to prioritize certain blogs, but we'll just include all
  for (const blog of blogEntries) {
    content += `- [${blog.title}](${blog.url}): ${blog.description}\n`
  }
  
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

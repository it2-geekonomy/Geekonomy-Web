import { blogSEOData } from "@/lib/blog/seoData";

export interface SEOData {
  title: string;
  description: string;
  url: string;
  canonical: string;
  image?: string;
  twitterHandle?: string;
}

export function getBaseUrl(): string {
  // Check if we're on the client side
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://thegeekonomy.com';
}

export async function getBaseUrlFromHeaders(): Promise<string> {
  try {
    // Only import headers if we're on the server
    if (typeof window === 'undefined') {
      const { headers } = await import('next/headers');
      const headersList = await headers();
      const host = headersList.get('host');
      const protocol = headersList.get('x-forwarded-proto') || 'http';
      
      if (host) {
        return `${protocol}://${host}`;
      }
    }
  } catch {
  }
  
  return getBaseUrl();
}

export function getDynamicSEOData(key: string): SEOData {
  return normalizeSeoData(key, getBaseUrl());
}

export async function getDynamicSEODataFromHeaders(key: string): Promise<SEOData> {
  const baseUrl = await getBaseUrlFromHeaders();
  return normalizeSeoData(key, baseUrl);
}

// Static SEO data (non-blog pages)
const seoData: Record<string, SEOData> = {
  home: {
    title: "Geekonomy | Branding, Marketing & Development",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://thegeekonomy.com",
    canonical: "https://thegeekonomy.com",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@Geekonomy",
  },

  about: {
    title: "Our Story | Branding | Web development | Customer Retention",
    description:
      "Discover Geekonomy's journey building growth systems for businesses through integrated strategy, technology, branding, and marketing solutions.",
    url: "https://thegeekonomy.com/about",
    canonical: "https://thegeekonomy.com/about",
    image: "https://thegeekonomy.com/assets/og-about.jpg",
    twitterHandle: "@Geekonomy",
  },

  "what-we-do": {
    title: "What We Do | Branding, Marketing & Development Services",
    description:
      "Geekonomy builds integrated frameworks for businesses to scale and grow through strategy, tech, branding, and marketing services.",
    url: "https://thegeekonomy.com/what-we-do",
    canonical: "https://thegeekonomy.com/what-we-do",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@Geekonomy",
  },

  "how-we-work": {
    title: "How We Work | Our Process & Approach",
    description:
      "Learn about Geekonomy's approach to building brand legacies through research, design, and code, emphasizing clarity and purpose.",
    url: "https://thegeekonomy.com/how-we-work",
    canonical: "https://thegeekonomy.com/how-we-work",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@Geekonomy",
  },

  "success-lab": {
    title: "Success Lab | Case Studies & Success Stories",
    description:
      "Explore Geekonomy's case studies and success stories showcasing real results in branding, digital marketing, and full-stack development.",
    url: "https://thegeekonomy.com/success-lab",
    canonical: "https://thegeekonomy.com/success-lab",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@Geekonomy",
  },

  "contact-us": {
    title: "Contact Us | Get in Touch with Geekonomy",
    description:
      "Get in touch with Geekonomy for branding, digital marketing, and development services. Let's build your brand legacy together.",
    url: "https://thegeekonomy.com/contact-us",
    canonical: "https://thegeekonomy.com/contact-us",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@Geekonomy",
  },

  "our-work": {
    title: "Our Work | Portfolio & Case Studies",
    description:
      "View Geekonomy's portfolio showcasing innovative branding, digital marketing campaigns, and full-stack development projects.",
    url: "https://thegeekonomy.com/our-work",
    canonical: "https://thegeekonomy.com/our-work",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@Geekonomy",
  },

  career: {
    title: "Career | Join Our Team",
    description:
      "Join Geekonomy's team of creative professionals. Explore career opportunities in branding, marketing, and development.",
    url: "https://thegeekonomy.com/career",
    canonical: "https://thegeekonomy.com/career",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@Geekonomy",
  },

  blog: {
    title: "Geekonomy Insights | Web, SEO & Marketing Trends",
    description:
      "Explore expert blogs on web design, SEO, and marketing by Geekonomy. Learn digital strategies to grow your business smarter.",
    url: "https://thegeekonomy.com/blog",
    canonical: "https://thegeekonomy.com/blog",
    image: "https://thegeekonomy.com/assets/og-blog.jpg",
    twitterHandle: "@Geekonomy",
  },
};

/**
 * Get all SEO data (static + blog SEO data)
 */
function getAllSEOData(): Record<string, SEOData> {
  return {
    ...seoData,
    ...(blogSEOData as Record<string, SEOData>),
  };
}

export function getStaticSEOData(key: string): SEOData {
  return getAllSEOData()[key] || getAllSEOData().home;
}

export function getPreferredBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";
}

/** Stable pathname from any absolute URL (drops duplicate slashes, bad host data in content files cannot skew canonical). */
function pathnameFromAbsoluteUrl(absoluteUrl: string): string {
  const pathname = new URL(absoluteUrl).pathname;
  return "/" + pathname.split("/").filter(Boolean).join("/");
}

const BLOG_POST_SEO_PREFIX = "blog/";

function slugFromBlogPostSeoKey(key: string): string | null {
  if (!key.startsWith(BLOG_POST_SEO_PREFIX)) return null;
  const slug = key.slice(BLOG_POST_SEO_PREFIX.length);
  if (!slug || slug.includes("/")) return null;
  return slug;
}

/** Canonical URL for a blog post — use anywhere you need the definitive production URL. */
export function getBlogPostCanonicalUrl(slug: string): string {
  const path = "/" + ["blog", slug].join("/");
  return `${getPreferredBaseUrl()}${path}`;
}

function normalizeSeoData(key: string, baseUrl: string): SEOData {
  const productionBaseUrl = getPreferredBaseUrl();
  const data = getAllSEOData()[key] || getAllSEOData().home;

  const postSlug = slugFromBlogPostSeoKey(key);
  if (postSlug) {
    const path = "/" + ["blog", postSlug].join("/");
    return {
      ...data,
      url: `${baseUrl}${path}`,
      canonical: `${productionBaseUrl}${path}`,
    };
  }

  try {
    const urlPath = pathnameFromAbsoluteUrl(data.url);
    const canonicalPath = pathnameFromAbsoluteUrl(data.canonical);

    return {
      ...data,
      url: `${baseUrl}${urlPath}`,
      canonical: `${productionBaseUrl}${canonicalPath}`,
    };
  } catch (error) {
    console.warn(`Failed to normalise SEO data for "${key}", using defaults.`, error);
    return data;
  }
}

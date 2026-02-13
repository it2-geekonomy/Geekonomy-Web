// Import SEO data from individual blog files
import { sosoactiveSeoNewsSEO } from "@/lib/blog/data/sosoactiveSeoNews";
import { howToCreateWhiteLabelSEOReportsAndAutomateThemSEO } from "@/lib/blog/data/howToCreateWhiteLabelSEOReportsAndAutomateThem";
import { howImportantIsBrandingForSEOSEO } from "@/lib/blog/data/howImportantIsBrandingForSEO";
import { whichEcommercePlatformIsBestForSEOSEO } from "@/lib/blog/data/whichEcommercePlatformIsBestForSEO";
import { whatDoYouNeedToBalanceWhenDoingSEOSEO } from "@/lib/blog/data/whatDoYouNeedToBalanceWhenDoingSEO";
import { howMuchDoesSEOCostInAustraliaSEO } from "@/lib/blog/data/howMuchDoesSEOCostInAustralia";
import { whyWhiteLabelSEOReportingIsImportantForAgenciesSEO } from "@/lib/blog/data/whyWhiteLabelSEOReportingIsImportantForAgencies";

export interface SEOData {
  title: string;
  description: string;
  url: string;
  canonical: string;
  image?: string;
  twitterHandle?: string;
}

/**
 * Get the base URL dynamically based on environment
 * For server-side: uses NEXT_PUBLIC_BASE_URL or falls back to production URL
 * For client-side: uses window.location.origin
 */
export function getBaseUrl(): string {
  // Check if we're on the client side
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  // Server-side: use environment variable or default to production
  return process.env.NEXT_PUBLIC_BASE_URL || 'https://thegeekonomy.com';
}

/**
 * Get the base URL from Next.js headers (for server components)
 * This is used to determine the actual host the site is being served from
 */
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
    // If headers are not available, fall back to default
    console.warn('Headers not available, using fallback URL');
  }
  
  return getBaseUrl();
}

/**
 * Get SEO data with dynamic URLs based on current environment
 */
export function getDynamicSEOData(key: string): SEOData {
  return normalizeSeoData(key, getBaseUrl());
}

/**
 * Get SEO data with dynamic URLs based on request headers (for server-side metadata)
 * Use this in generateMetadata functions
 */
export async function getDynamicSEODataFromHeaders(key: string): Promise<SEOData> {
  const baseUrl = await getBaseUrlFromHeaders();
  return normalizeSeoData(key, baseUrl);
}

// Static SEO data (non-blog pages)
const seoData: Record<string, SEOData> = {
  home: {
    title: "Geekonomy Technology | Branding, Marketing & Development",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://thegeekonomy.com",
    canonical: "https://thegeekonomy.com",
    image: "https://thegeekonomy.com/assets/og-home.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  about: {
    title: "Our Story | Branding | Web development | Customer Retention",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://thegeekonomy.com/about-us",
    canonical: "https://thegeekonomy.com/about-us",
    image: "https://thegeekonomy.com/assets/og-about.jpg",
    twitterHandle: "@GeekonomyTech",
  },

  blog: {
    title: "Geekonomy Insights | Web, SEO & Marketing Trends",
    description:
      "Explore expert blogs on web design, SEO, and marketing by Geekonomy Technology. Learn digital strategies to grow your business smarter.",
    url: "https://thegeekonomy.com/blog",
    canonical: "https://thegeekonomy.com/blog",
    image: "https://thegeekonomy.com/assets/og-blog.jpg",
    twitterHandle: "@GeekonomyTech",
  },
};

// Aggregate blog SEO data from individual blog files
const blogSEOData: Record<string, SEOData> = {
  "blogs/sosoactive-seo-news-digital-marketing-trends-future-lifestyle": sosoactiveSeoNewsSEO,
  "blogs/how-to-create-white-label-seo-reports-and-automate-them": howToCreateWhiteLabelSEOReportsAndAutomateThemSEO,
  "blogs/how-important-is-branding-for-seo": howImportantIsBrandingForSEOSEO,
  "blogs/which-ecommerce-platform-is-best-for-seo": whichEcommercePlatformIsBestForSEOSEO,
  "blogs/what-do-you-need-to-balance-when-doing-seo": whatDoYouNeedToBalanceWhenDoingSEOSEO,
  "blogs/how-much-does-seo-cost-in-australia": howMuchDoesSEOCostInAustraliaSEO,
  "blogs/why-white-label-seo-reporting-is-important-for-agencies": whyWhiteLabelSEOReportingIsImportantForAgenciesSEO,
};

/**
 * Get all SEO data (static + blog SEO data)
 */
function getAllSEOData(): Record<string, SEOData> {
  return {
    ...seoData,
    ...blogSEOData,
  };
}

/**
 * Get SEO data without any environment inference. Useful for build-time or
 * metadata generation that must run entirely on the server without streaming.
 */
export function getStaticSEOData(key: string): SEOData {
  return getAllSEOData()[key] || getAllSEOData().home;
}

export function getPreferredBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";
}

function normalizeSeoData(key: string, baseUrl: string): SEOData {
  const data = getAllSEOData()[key] || getAllSEOData().home;

  try {
    const urlPath = new URL(data.url).pathname;
    const canonicalPath = new URL(data.canonical).pathname;
    
    // Always use production URL for canonical (never localhost/staging)
    const productionBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://thegeekonomy.com';

    return {
      ...data,
      url: `${baseUrl}${urlPath}`, // Current domain (localhost in dev, production in prod)
      canonical: `${productionBaseUrl}${canonicalPath}`, // Always production URL
    };
  } catch (error) {
    console.warn(`Failed to normalise SEO data for "${key}", using defaults.`, error);
    return data;
  }
}

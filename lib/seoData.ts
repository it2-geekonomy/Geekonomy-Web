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

/**
 * Get SEO data without any environment inference. Useful for build-time or
 * metadata generation that must run entirely on the server without streaming.
 */
export function getStaticSEOData(key: string): SEOData {
  return seoData[key] || seoData.home;
}

export function getPreferredBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";
}

function normalizeSeoData(key: string, baseUrl: string): SEOData {
  const data = seoData[key] || seoData.home;

  try {
    const urlPath = new URL(data.url).pathname;
    const canonicalPath = new URL(data.canonical).pathname;

    return {
      ...data,
      url: `${baseUrl}${urlPath}`,
      canonical: `${baseUrl}${canonicalPath}`,
    };
  } catch (error) {
    console.warn(`Failed to normalise SEO data for "${key}", using defaults.`, error);
    return data;
  }
}

const seoData: Record<string, SEOData> = {
  home: {
    title: "Geekonomy | Branding, Marketing & Development",
    description:
      "From branding and digital marketing to full-stack development, Geekonomy builds unforgettable brand legacies powered by research, design, and code.",
    url: "https://thegeekonomy.com",
    canonical: "https://thegeekonomy.com",
    twitterHandle: "@Geekonomy",
  },
  "case-studies": {
    title: "Case Studies | Our Success Stories | Geekonomy",
    description:
      "Explore our case studies showcasing successful branding, marketing, and development projects. See how Geekonomy helps businesses grow with clarity over chaos.",
    url: "https://thegeekonomy.com/case-studies",
    canonical: "https://thegeekonomy.com/case-studies",
    twitterHandle: "@Geekonomy",
  },
};

export default seoData;

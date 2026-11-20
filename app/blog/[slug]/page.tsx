import dynamic from "next/dynamic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogsData } from "@/lib/blog";
import {
  getBlogPostCanonicalUrl,
  getDynamicSEODataFromHeaders,
} from "@/seoData";
import BlogsPageLoading from "@/app/blog/BlogsPageLoading";
import { getAuthorForBlog, getBlogBylineDates, getBlogDates } from "@/lib/blog/authorMapping";
import slugToFilePath from "@/lib/blog/slugToFilePath.json";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSchemaBaseUrl, orgId } from "@/lib/schema/constants";
import { getBaseUrlFromHeaders } from "@/seoData";

const blogFiles: Record<string, { lastModified: string | null } | undefined> = slugToFilePath;

const BlogDetailClient = dynamic(
  () => import("@/app/blog/[slug]/BlogDetailClient"),
  { loading: () => <BlogsPageLoading /> }
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = allBlogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const seoKey = `blog/${slug}`;
  const seoData = await getDynamicSEODataFromHeaders(seoKey);
  const authorInfo = getAuthorForBlog(slug);
  const { published, updated } = getBlogDates(slug);

  return {
    title: seoData.title,
    description: seoData.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: seoData.canonical,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.url,
      siteName: "Geekonomy",
      type: "article",
      images: seoData.image ? [{ url: seoData.image }] : [],
      publishedTime: published?.iso,
      modifiedTime: updated?.iso,
      authors: authorInfo ? [authorInfo.name] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: seoData.image ? [seoData.image] : [],
      creator: seoData.twitterHandle,
    },
  };
}

export async function generateStaticParams() {
  return allBlogsData.map(({ slug }) => {
    if (!getBlogDates(slug).published) {
      throw new Error(
        `Missing or invalid publication date for /blog/${slug}. Set its original publication date in BLOG_PUBLISHED_DATES.`
      );
    }
    return { slug };
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = allBlogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const seoKey = `blog/${slug}`;
  const seoData = await getDynamicSEODataFromHeaders(seoKey);
  const authorInfo = getAuthorForBlog(slug);
  const dates = getBlogDates(slug);
  const bylineDates = getBlogBylineDates(dates, blogFiles[slug]?.lastModified);
  const blogUrl = getBlogPostCanonicalUrl(slug);
  const schemaBase = getSchemaBaseUrl();
  const originForAssets = new URL(blogUrl).origin;

  const articleBody = [
    seoData.description,
    ...blog.sections.map((s) => s.description),
  ]
    .filter(Boolean)
    .join(" ");

  const keywords = blog.heading
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2)
    .slice(0, 8);

  const imageUrl = seoData.image
    ? `${await getBaseUrlFromHeaders()}${seoData.image}`
    : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${blogUrl}#article`,
    headline: blog.heading,
    description: seoData.description,
    image: seoData.image ? [seoData.image] : [],
    mainEntityOfPage: blogUrl,
    datePublished: dates.published?.iso,
    dateModified: dates.updated?.iso,
    inLanguage: "en",
    isPartOf: { "@id": `${getSchemaBaseUrl()}/blog#blog` },
    author: {
      "@type": "Person",
      name: authorInfo.name,
      jobTitle: authorInfo.role,
    },
    publisher: {
      "@type": "Organization",
      "@id": orgId(await getBaseUrlFromHeaders()),
      name: "Geekonomy",
      logo: {
        "@type": "ImageObject",
        url: `${await getBaseUrlFromHeaders()}/Logo.png`,
      },
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogDetailClient blogSlug={slug} dateInfo={bylineDates} />
    </>
  );
}

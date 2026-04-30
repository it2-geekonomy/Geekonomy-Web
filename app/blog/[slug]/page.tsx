import dynamic from "next/dynamic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogsData } from "@/lib/blog";
import {
  getBlogPostCanonicalUrl,
  getDynamicSEODataFromHeaders,
  getPreferredBaseUrl,
} from "@/seoData";
import BlogsPageLoading from "@/app/blog/BlogsPageLoading";
import { getAuthorForBlog, dateToISO } from "@/lib/blog/authorMapping";
import { getDateInfoServer } from "@/lib/blog/blogDatesServer";

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
  const dateInfo = getDateInfoServer(slug);
  const articlePublishedTime = dateToISO(dateInfo.publishedDate);
  const articleModifiedTime = dateInfo.updatedDate
    ? dateToISO(dateInfo.updatedDate)
    : articlePublishedTime;

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
      publishedTime: articlePublishedTime || undefined,
      modifiedTime: articleModifiedTime || undefined,
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
  return allBlogsData.map((blog) => ({
    slug: blog.slug,
  }));
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
  const dateInfo = getDateInfoServer(slug);
  const publishedDateISO = dateToISO(dateInfo.publishedDate);
  const updatedDateISO = dateInfo.updatedDate ? dateToISO(dateInfo.updatedDate) : publishedDateISO;
  const blogUrl = getBlogPostCanonicalUrl(slug);
  const siteOrigin = getPreferredBaseUrl();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.heading,
    description: seoData.description,
    image: seoData.image ? [seoData.image] : [],
    datePublished: publishedDateISO,
    dateModified: updatedDateISO,
    author: {
      "@type": "Person",
      name: authorInfo.name,
      jobTitle: authorInfo.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Geekonomy",
      logo: {
        "@type": "ImageObject",
        url: `${siteOrigin}/Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": blogUrl,
    },
    url: blogUrl,
  };

  return (
    <>
      {/* Article Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <BlogDetailClient blogSlug={slug} dateInfo={{ date: dateInfo.date, label: dateInfo.label }} />
    </>
  );
}

import dynamic from "next/dynamic";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogsData } from "@/lib/blog";
import {
  getBlogPostCanonicalUrl,
  getDynamicSEODataFromHeaders,
} from "@/seoData";
import BlogsPageLoading from "@/app/blog/BlogsPageLoading";
import { getAuthorForBlog, dateToISO } from "@/lib/blog/authorMapping";
import { getDateInfoServer } from "@/lib/blog/blogDatesServer";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSchemaBaseUrl, orgId } from "@/lib/schema/constants";

function absoluteFromOrigin(origin: string, pathOrUrl: string) {
  if (pathOrUrl.startsWith("http")) return pathOrUrl;
  return `${origin}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

function authorProfileUrl(base: string, authorName: string) {
  if (authorName.includes("Aaron")) return `${base}/authors/aaron`;
  if (authorName.includes("Rahul")) return `${base}/authors/rahul`;
  return `${base}/authors/${authorName.toLowerCase().replace(/\s+/g, "-")}`;
}

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
    ? absoluteFromOrigin(originForAssets, seoData.image)
    : undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${blogUrl}#article`,
        headline: blog.heading,
        ...(imageUrl
          ? {
              image: {
                "@type": "ImageObject",
                url: imageUrl,
                width: 1200,
                height: 630,
              },
            }
          : {}),
        description: seoData.description,
        author: {
          "@type": "Person",
          name: authorInfo.name,
          url: authorProfileUrl(schemaBase, authorInfo.name),
        },
        publisher: {
          "@type": "Organization",
          "@id": orgId(schemaBase),
        },
        datePublished: publishedDateISO,
        dateModified: updatedDateISO,
        mainEntity: { "@type": "Article" },
        articleBody,
        articleSection: blog.sections[0]?.title ?? "Blog",
        keywords,
        inLanguage: "en",
        isPartOf: { "@id": `${schemaBase}/blog#blog` },
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <BlogDetailClient blogSlug={slug} dateInfo={{ date: dateInfo.date, label: dateInfo.label }} />
    </>
  );
}

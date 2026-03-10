import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAuthorBySlug,
  getBlogsByAuthor,
  AuthorName,
} from "@/lib/blog/authorMapping";
import { allBlogsData } from "@/lib/blog";
import AuthorPageClient from "./AuthorPageClient";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "author-slug": string }>;
}): Promise<Metadata> {
  const { "author-slug": authorSlug } = await params;
  const authorInfo = getAuthorBySlug(authorSlug);
  const url = `${baseUrl}/blog/author/${authorSlug}`;

  if (!authorInfo) {
    return {
      title: "Author Not Found - Geekonomy",
      description: "The requested author could not be found.",
    };
  }

  return {
    title: `${authorInfo.name} - ${authorInfo.role} | Geekonomy Blog`,
    description:
      authorInfo.metaDescription ||
      authorInfo.biography ||
      `${authorInfo.name} is a ${authorInfo.role} at Geekonomy.`,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${authorInfo.name} - ${authorInfo.role} | Geekonomy Blog`,
      description:
        authorInfo.metaDescription ||
        authorInfo.biography ||
        `${authorInfo.name} is a ${authorInfo.role} at Geekonomy.`,
      url,
      type: "profile",
      siteName: "Geekonomy Blog",
      images: authorInfo.mainImage
        ? [{ url: authorInfo.mainImage }]
        : authorInfo.image
        ? [{ url: authorInfo.image }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${authorInfo.name} - ${authorInfo.role} | Geekonomy Blog`,
      description:
        authorInfo.metaDescription ||
        authorInfo.biography ||
        `${authorInfo.name} is a ${authorInfo.role} at Geekonomy.`,
      images: authorInfo.mainImage
        ? [authorInfo.mainImage]
        : authorInfo.image
        ? [authorInfo.image]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const authors: AuthorName[] = ["Rahul Dutta", "Aaron Roshan"];
  return authors.map((author) => ({
    "author-slug": author.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ "author-slug": string }>;
}) {
  const { "author-slug": authorSlug } = await params;
  const authorInfo = getAuthorBySlug(authorSlug);

  if (!authorInfo) {
    notFound();
  }

  const blogSlugs = getBlogsByAuthor(authorInfo.name);
  const authorBlogs = allBlogsData.filter((blog) => blogSlugs.includes(blog.slug));

  return <AuthorPageClient authorInfo={authorInfo} blogs={authorBlogs} />;
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAuthorBySlug, getBlogsByAuthor, AuthorName } from "@/lib/blog/authorMapping";
import { allBlogsData } from "@/lib/blog";
import AuthorPageClient from "./AuthorPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ "author-slug": string }>;
}): Promise<Metadata> {
  const { "author-slug": authorSlug } = await params;
  const authorInfo = getAuthorBySlug(authorSlug);

  if (!authorInfo) {
    return {
      title: "Author Not Found - Geekonomy",
      description: "The requested author could not be found.",
    };
  }

  return {
    title: `${authorInfo.name} - ${authorInfo.role} | Geekonomy Blog`,
    description: authorInfo.biography || `${authorInfo.name} is a ${authorInfo.role} at Geekonomy.`,
    robots: {
      index: true,
      follow: true,
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

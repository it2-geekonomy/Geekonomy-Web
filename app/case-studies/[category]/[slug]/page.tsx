import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";
import CaseStudyLayout from "@/components/case-studies/CaseStudyLayout";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;

  const post = caseStudies.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!post) {
    return {
      title: "Case Study Not Found - Geekonomy",
      description: "The requested case study could not be found.",
    };
  }

  const requestedCategory = category.toLowerCase();
  const hasCategory = post.category
    .map(slugify)
    .some((cat) => cat === requestedCategory);

  // Always use the first category for canonical URL to avoid duplicate content issues
  const canonicalCategory = slugify(post.category[0] || "case-study");
  // Canonical URL should always point to the first category, regardless of which URL is accessed
  const canonicalUrl = `/case-studies/${canonicalCategory}/${slug}`;
  // Current URL for OpenGraph (can be the requested one)
  const currentUrl = `/case-studies/${hasCategory ? requestedCategory : canonicalCategory}/${slug}`;

  return {
    title: `${post.title} - Case Study | Geekonomy`,
    description:
      post.subtitle ||
      `Explore our ${post.title} case study showcasing our expertise in ${post.category.join(", ")}.`,
    keywords: post.category.join(", "),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title} - Case Study | Geekonomy`,
      description:
        post.subtitle ||
        `Explore our ${post.title} case study showcasing our expertise in ${post.category.join(", ")}.`,
      url: currentUrl,
      siteName: "Geekonomy",
      type: "article",
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Case Study | Geekonomy`,
      description:
        post.subtitle ||
        `Explore our ${post.title} case study showcasing our expertise in ${post.category.join(", ")}.`,
      images: post.image ? [post.image] : [],
    },
  };
}

export async function generateStaticParams() {
  return caseStudies.flatMap((caseStudy) =>
    (caseStudy.category && caseStudy.category.length > 0
      ? caseStudy.category
      : ["case-study"]) // fallback category
      .map((cat) => ({ category: slugify(cat), slug: caseStudy.slug }))
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;

  const post = caseStudies.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!post) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <Link href="/case-studies">
          <Button variant="primary">Back to Case Studies</Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-black text-white">
      <CaseStudyLayout post={post} />
    </main>
  );
}



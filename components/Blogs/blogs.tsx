import Image from "next/image";
import type { BlogData, BlogTableComponentKey } from "@/lib/blog";
import { MumbaiSEOPackagesTable, SmallPackageSEOTable } from "./Table";

// Import all individual blog data files
import { howToCreateWhiteLabelSEOReportsAndAutomateThem } from "@/lib/blog/data/howToCreateWhiteLabelSEOReportsAndAutomateThem";
import { sosoactiveSeoNews } from "@/lib/blog/data/sosoactiveSeoNews";
import { howImportantIsBrandingForSEO } from "@/lib/blog/data/howImportantIsBrandingForSEO";
import { whichEcommercePlatformIsBestForSEO } from "@/lib/blog/data/whichEcommercePlatformIsBestForSEO";
import { whatDoYouNeedToBalanceWhenDoingSEO } from "@/lib/blog/data/whatDoYouNeedToBalanceWhenDoingSEO";
import { howMuchDoesSEOCostInAustralia } from "@/lib/blog/data/howMuchDoesSEOCostInAustralia";
import { whyWhiteLabelSEOReportingIsImportantForAgencies } from "@/lib/blog/data/whyWhiteLabelSEOReportingIsImportantForAgencies";

// Centralized blog data aggregation - all blogs are registered here
export const allBlogsData: BlogData[] = [
  howToCreateWhiteLabelSEOReportsAndAutomateThem,
  sosoactiveSeoNews,
  howImportantIsBrandingForSEO,
  whichEcommercePlatformIsBestForSEO,
  whatDoYouNeedToBalanceWhenDoingSEO,
  howMuchDoesSEOCostInAustralia,
  whyWhiteLabelSEOReportingIsImportantForAgencies,
];

/** Section shape expected by StickyScroll (with React nodes) */
export interface BlogSection {
  title: string;
  description: string;
  image?: React.ReactNode;
  table?: React.ReactNode;
}

export interface Blog {
  slug: string;
  heading: string;
  coverImage: string;
  sections: BlogSection[];
}

const TABLE_COMPONENTS: Record<BlogTableComponentKey, React.ReactNode> = {
  MumbaiSEOPackagesTable: <MumbaiSEOPackagesTable />,
  SmallPackageSEOTable: <SmallPackageSEOTable />,
};

function hydrateBlog(data: BlogData): Blog {
  return {
    slug: data.slug,
    heading: data.heading,
    coverImage: data.coverImage,
    sections: data.sections.map((section, index) => ({
      title: section.title,
      description: section.description,
      image: (
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          className="object-cover rounded-xl"
          priority={index === 0}
        />
      ),
      ...(section.tableComponent && {
        table: TABLE_COMPONENTS[section.tableComponent],
      }),
    })),
  };
}

/** All blogs with hydrated sections (Image + Table components). Used by /blog and /blog/[slug]. */
export const BLOGS: Blog[] = allBlogsData.map(hydrateBlog);

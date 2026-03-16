import Image from "next/image";
import type { BlogData, BlogTableComponentKey } from "@/lib/blog";
import { allBlogsData } from "@/lib/blog/dataIndex";
import { BangaloreSEOPackagesTable, MumbaiSEOPackagesTable, SmallPackageSEOTable } from "./Table";

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
  BangaloreSEOPackagesTable: <BangaloreSEOPackagesTable />
};

/** Use unoptimized for local paths so images with spaces in paths work in production. */
function isLocalPath(path: string): boolean {
  return path.startsWith("/") && !path.startsWith("//");
}

function hydrateBlog(data: BlogData): Blog {
  return {
    slug: data.slug,
    heading: data.heading,
    coverImage: data.coverImage,
    sections: data.sections.map((section, index) => ({
      title: index === 0 ? `${data.heading} | Geekonomy` : section.title,
      description: section.description,
      image: isLocalPath(section.image.src) ? (
        <Image
          src={section.image.src}
          alt={section.image.alt}
          fill
          className="object-cover rounded-xl"
          priority={index === 0}
        />
      ) : (
        <img
          src={section.image.src}
          alt={section.image.alt}
          className="w-full h-full object-cover rounded-xl"
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

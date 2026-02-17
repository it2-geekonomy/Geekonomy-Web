/**
 * Table component keys - must match components used in Blogs/Table.tsx
 */
export type BlogTableComponentKey =
  | "MumbaiSEOPackagesTable"
  | "SmallPackageSEOTable"
  | "BangaloreSEOPackagesTable";

export interface BlogSectionData {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  /** Optional table component key for this section */
  tableComponent?: BlogTableComponentKey;
}

export interface BlogData {
  slug: string;
  heading: string;
  coverImage: string;
  sections: BlogSectionData[];
}

import type { AuthorInfo, BlogDates } from "@/lib/blog/authorMapping";

export interface StickyScrollContent {
  title: string;
  description: string;
  image?: React.ReactNode;
  table?: React.ReactNode;
}

export interface StickyScrollProps {
  content: StickyScrollContent[];
  contentClassName?: string;
  authorInfo?: AuthorInfo;
  dateInfo?: BlogDates;
}

export type { AuthorInfo, BlogDates };

import type { AuthorInfo, BlogDateDisplayLabel } from "@/lib/blog/authorMapping";

export interface StickyScrollContent {
  title: string;
  description: string;
  image?: React.ReactNode;
  table?: React.ReactNode;
}

export interface DateInfo {
  date: string;
  label: BlogDateDisplayLabel;
}

export interface StickyScrollProps {
  content: StickyScrollContent[];
  contentClassName?: string;
  authorInfo?: AuthorInfo;
  dateInfo?: DateInfo | null;
}

export type { AuthorInfo };

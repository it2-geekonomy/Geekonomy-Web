export interface StickyScrollContent {
  title: string;
  description: string;
  image?: React.ReactNode;
  table?: React.ReactNode;
}

export interface AuthorInfo {
  name: string;
  role: string;
  image: string;
}

export interface DateInfo {
  date: string;
  label: "Published" | "Updated";
}

export interface StickyScrollProps {
  content: StickyScrollContent[];
  contentClassName?: string;
  authorInfo?: AuthorInfo;
  dateInfo?: DateInfo | null;
}

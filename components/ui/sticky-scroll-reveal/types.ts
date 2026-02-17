export interface StickyScrollContent {
  title: string;
  description: string;
  image?: React.ReactNode;
  table?: React.ReactNode;
}

export interface StickyScrollProps {
  content: StickyScrollContent[];
  contentClassName?: string;
}

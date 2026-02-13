import React from "react";

export type ContentItem =
  | {
      type: "paragraph";
      text: string;
      className?: string;
    }
  | {
      type: "heading";
      text: string;
      className?: string;
    }
  | {
      type: "h3";
      text: string;
      className?: string;
    }
  | {
      type: "list";
      text: string; // HTML string (<ul><li>...</li></ul>)
      className?: string;
    }
  | {
      type: "table";
      text: string; // HTML string (<table>...</table>)
      className?: string;
    }
  | {
      type: "image";
      text: string; // image src
      className?: string;
      alt?: string;
    };

export interface CaseStudy {
  id: number;
  title: string;
  internalTitle: string;
  subtitle: string;
  image: string;
  slug: string;
  pdfUrl: string;
  banner: string;
  imageGrid1?: string[];
  imageGrid2?: Array<{
    img: string;
    icon: string;
    title: string;
    text: string;
  }>;
  contentSections: Array<{
    id: number;
    content: string;
  }>;
  imageGridOptional?: string[];
  button: {
    label: string;
    link: string;
  };
  category: string[];
}
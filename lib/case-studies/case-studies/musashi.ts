import { CaseStudy } from "@/types";
import { contentToHTML } from "../utils";
import { MusashiContent1 } from "../content/musashi-content";

export const musashiCaseStudy: CaseStudy = {
  id: 1,
  title: "Musashi Delta",
  internalTitle: "Musashi Delta ",
  subtitle: "How Geekonomy helped Musashi Delta strengthen brand clarity, digital presence, and scalable growth systems.",
  image: "/case-studies/image1.webp",
  slug: "musashi-delta",
  pdfUrl: "/case-studies/Musashi.pdf",
  banner: "/case-studies/image1.webp",
  imageGrid1: [
    "/case-studies/1.webp",
    "/case-studies/2.webp",
    "/case-studies/3.webp",
    "/case-studies/4.webp",
  ],
  contentSections: [
    { id: 1, content: contentToHTML(MusashiContent1) },
  ],
  imageGridOptional: [
    "/case-studies/1.webp",
    "/case-studies/2.webp",
    "/case-studies/3.webp",
    "/case-studies/4.webp",
  ],
  button: {
    label: "Learn More",
    link: "/contact",
  },
  category: ["Branding"],
};

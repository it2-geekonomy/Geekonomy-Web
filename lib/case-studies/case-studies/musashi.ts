import { CaseStudy } from "@/types";
import { contentToHTML } from "../utils";
import { MusashiContent1 } from "../content/musashi-content";

export const musashiCaseStudy: CaseStudy = {
  id: 1,
  title: "Mushashi Delta",
  internalTitle: "Musashi Delta ",
  subtitle: "Musashi Auto Parts India Pvt. Ltd., a subsidiary of Japan's Musashi Seimitsu Industry Co. Ltd. is known worldwide for its precision and excellence in automotive engineering.",
  image: "/case-studies/image1.webp",
  slug: "mushashi-delta",
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

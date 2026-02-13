import { CaseStudy } from "@/types";
import { contentToHTML } from "../utils";
import { DivyasreeContent1, DivyasreeContent2 } from "../content/divyasree-content";

export const divyasreeCaseStudy: CaseStudy = {
  id: 3,
  title: " Divyasree Builders",
  internalTitle: "Website redesign and development",
  subtitle: "DivyaSree Developers is one of India's most trusted real estate brands, known for landmark commercial and residential projects across Bangalore, Hyderabad, and Chennai.",
  image: "/case-studies/image2.webp",
  slug: "divyasree-builders",
  pdfUrl: "/case-studies/DivyaSree.pdf",
  banner: "/case-studies/image2.webp",
  imageGrid2: [
    {
      img: "/case-studies/5.webp",
      icon: "/case-studies/Container.webp",
      title: "2.29",
      text: "Pages per session.",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (1).webp",
      title: "66.1%",
      text: "Bounce rate.",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (4).webp",
      title: "24 Seconds",
      text: "Average visit duration.",
    },
  ],
  contentSections: [
    { id: 2, content: "<p>Improved navigation and page speed encouraged visitors to stay longer and explore more</p>" },
    { id: 1, content: contentToHTML(DivyasreeContent1) },
    { id: 4, content: contentToHTML(DivyasreeContent2) },
  ],
  button: {
    label: "Learn More",
    link: "/contact",
  },
  category: ["Custom Development"],
};

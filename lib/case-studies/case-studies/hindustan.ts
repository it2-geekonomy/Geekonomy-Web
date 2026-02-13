import { CaseStudy } from "@/types";
import { contentToHTML } from "../utils";
import { HindustanContent1, HindustanContent2 } from "../content/hindustan-content";

export const hindustanCaseStudy: CaseStudy = {
  id: 4,
  title: "Hindustan Power",
  internalTitle: "Website redesign and development \n Social Media Creatives",
  subtitle: "Hindustan Power Projects Pvt. Ltd. is one of India's leading power infrastructure companies with a strong presence in thermal, hydro, solar, and renewable energy sectors",
  image: "/case-studies/image3.webp",
  slug: "hindustan-power",
  pdfUrl: "/case-studies/Hindustan.pdf",
  banner: "/case-studies/image3.webp",
  imageGrid2: [
    {
      img: "/case-studies/5.webp",
      icon: "/case-studies/Container (4).webp",
      title: "2.3 Seconds",
      text: "Pages per session.",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (1).webp",
      title: "45.44%",
      text: "Bounce rate.",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (4).webp",
      title: "29 Seconds",
      text: "Average visit duration.",
    },
  ],
  contentSections: [
    { id: 2, content: "<p> Improved navigation and page speed encouraged visitors to stay longer and explore more</p>" },
    { id: 1, content: contentToHTML(HindustanContent1) },
    { id: 4, content: contentToHTML(HindustanContent2) },
  ],
  button: {
    label: "Learn More",
    link: "/contact",
  },
  category: ["Custom Development", "Graphic Design"],
};

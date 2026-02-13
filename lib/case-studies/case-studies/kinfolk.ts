import { CaseStudy } from "@/types";
import { contentToHTML } from "../utils";
import { KinfolkContent1, KinfolkContent2 } from "../content/kinfolk-content";

export const kinfolkCaseStudy: CaseStudy = {
  id: 5,
  title: "Kinfolk Montessori ",
  internalTitle: "SEO & PPC Campaign",
  subtitle: "Kinfolk Montessori is a Bangalore-based early learning school that nurtures children through curiosity, independence, and creativity.",
  image: "/case-studies/image5.webp",
  slug: "kinfolk-montessori",
  pdfUrl: "/case-studies/Kinfolk.pdf",
  banner: "/case-studies/image5.webp",
  imageGrid2: [
    {
      img: "/case-studies/5.webp",
      icon: "/case-studies/Container (4).webp",
      title: "1.4M",
      text: "Impression.",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (1).webp",
      title: "23.1K Clicks",
      text: "(CTR: 1.61%).",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (4).webp",
      title: "112",
      text: "Conversions (Leads).",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (2).webp",
      title: "11.8%",
      text: "Conversion Rate.",
    },
    {
      img: "/case-studies/6.webp",
      icon: "/case-studies/Container (4).webp",
      title: "+50% in six months",
      text: "Organic Traffic Growth.",
    },
  ],
  contentSections: [
    { id: 1, content: contentToHTML(KinfolkContent1) },
    { id: 4, content: contentToHTML(KinfolkContent2) },
  ],
  button: {
    label: "Learn More",
    link: "/contact",
  },
  category: ["Performance Marketing", "SEO"],
};

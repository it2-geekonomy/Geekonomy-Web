import { CaseStudy } from "@/types";
import { contentToHTML } from "../utils";
import { VSTContent1, VSTContent2 } from "../content/vst-content";

export const vstCaseStudy: CaseStudy = {
  id: 2,
  title: "VST Group",
  internalTitle: "Website redesign and development",
  subtitle: "VST Group is one of South India's most established automotive networks, representing some of the world's most trusted automobile brands. With a strong legacy across retail, distribution, and logistics",
  image: "/case-studies/image4.webp",
  slug: "vst-group",
  pdfUrl: "/case-studies/VST.pdf",
  banner: "/case-studies/image4.webp",
  // imageGrid1: [
  //   "/case-studies/1.webp",
  //   "/case-studies/2.webp",
  //   "/case-studies/3.webp",
  //   "/case-studies/4.webp",
  // ],
  imageGrid2: [
    {
      img: "/case-studies/5.webp",
      icon: "/case-studies/Container.webp",
      title: "1.97",
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
      title: "40 Seconds",
      text: "Average visit duration.",
    },
    {
      img: "/case-studies/1.webp",
      icon: "/case-studies/Container (2).webp",
      title: "2034",
      text: "Monthly visits.",
    },
  ],
  contentSections: [
    { id: 1, content: contentToHTML(VSTContent1) },
    { id: 4, content: contentToHTML(VSTContent2) },
  ],
  button: {
    label: "Learn More",
    link: "/contact",
  },
  category: ["Custom Development"],
};

import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  BookOpen,
  Settings,
  FileText,
  Link,
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "Our Moreno Valley SEO Service",
  intro: [
    "An SEO Campaign isn‘t just about planting keywords on your website. Geekonomy implements a comprehensive campaign that takes into consideration your website's technical health, content, relevancy to the local area, search intent, and conversion potential. Our campaign will be developed to suit the Moreno Valley market so your website can strengthen its position for searches that will benefit your business.",
  ],


  card: [
    {
      icon: Settings,
      title: "Technical SEO",
      desc: [
        "A technically sound website helps search engines crawl, understand, and index your pages effectively. Geekonomy audits site architecture, page speed, mobile usability, Core Web Vitals, indexing, broken links, and redirects to improve website performance and user experience for Moreno Valley customers.",
      ],
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      desc: [
        "We optimize title tags, meta descriptions, headings, website content, URLs, internal links, and relevant structured data. Each page is aligned with search intent to help visitors understand your services and improve your website's relevance in search results.",
      ],
    },
    {
      icon: BookOpen,
      title: "Content Strategy",
      desc: [
        "Quality content helps answer customer questions and establish your website's topical relevance. Geekonomy develops useful, service-focused content around the needs, concerns, and search interests of your Moreno Valley audience, with every piece supporting your broader SEO strategy.",
      ],
    },
    {
      icon: Link,
      title: "Authority and Off-Page SEO",
      desc: [
        "Your website's credibility can grow through relevant external signals. Geekonomy develops an off-page SEO strategy that includes local citations, quality backlinks, brand visibility, and relevant outreach opportunities to strengthen your website's authority naturally and sustainably.",
      ],
    },
  ],

};
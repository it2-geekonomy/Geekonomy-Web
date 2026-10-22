import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Search,
  Target,
  FileText,
  MapPin,
  TrendingUp,
} from "lucide-react";

export const SeoStrategy: IconCardLayout = {
  label: "SEO Strategy",
  heading: "Our Camarillo SEO Strategy",
  intro: [
    "SEO is not as simple as just stuffing a website with keywords. Geekonomy creates a comprehensive plan based upon your objectives, target customers, competition and what type of queries can result in valuable opportunities in Camarillo.",
  ],

  card: [
    {
      icon: Search,
      title: "SEO Audit and Competitor Research",
      desc: [
        "When analyzing your needs we start by looking into your website technical health, rankings, content, backlinks, local presence and conversion experience. Then we analyze the businesses of your competitors of your most valuable Camarillo keywords in order to understand what is missing and what opportunities we can capitalize on.",
      ],
    },
    {
      icon: Target,
      title: "Keyword Research and Search Intent",
      desc: [
        "Keyword research is about knowing what your customers are actually searching for. We target terms that have commercial intent, local searches, specific services and longer tails that can generate the most qualified traffic to your site.",
      ],
    },
    {
      icon: FileText,
      title: "Content and On-Page Optimization",
      desc: [
        "Enhance your crucial pages so they effectively articulate the value of your services to properly align with the intent of those searching for them. This may involve working on headings, page copy, page title tags, page descriptions, internal links, service pages, and location specific content.",
      ],
    },
    {
      icon: MapPin,
      title: "Building Local Relevance",
      desc: [
        "For companies that market to Camarillo, local markets must be compelling. We optimize signals that tell the search engines where you are located and who you do business with. We also build targeted, useful content based on the local economy of Ventura County in general.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Continuous SEO Improvement",
      desc: [
        "Search Engine Optimization (SEO) is a continuous process, not a set it and forget it project. We keep an eye on the rankings, organic traffic, conversions, technical health and new opportunities, adjusting the approach with shifts in search habits and your company‘s objectives.",
      ],
    },
  ],
};
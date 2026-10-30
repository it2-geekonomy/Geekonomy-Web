import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Search,
  FileText,
  BarChart3,
} from "lucide-react";

export const SeoStrategy: IconCardLayout = {
  label: "SEO Strategy",
  heading: "A Secane-Focused SEO Strategy That Drives Results",
  intro: [
    "A successful local SEO campaign should reflect the market it serves. Geekonomy develops strategies around Secane search behavior, local competition, customer intent, and the specific services your business wants to promote. Rather than using a one-size-fits-all approach, we identify opportunities that can build sustainable organic visibility.",
  ],

card: [
  {
    icon: Search,
    title: "Research Your Local Market",
    desc: [
      "First, we analyze your industry, customers, and competition to pinpoint the search queries that matter to your business. We identify opportunities to plug any gaps in your website’s ability to satisfy the search intent of your visitors, and how to get to your most valuable customers.",
    ],
  },
  {
    icon: MapPin,
    title: "Target Location-Based Search Terms",
    desc: [
      "Actually, your future clients might search for the same service in Secane and the vicinity using a different expression. We identify the local keywords and integrate them organically into your website scheme and content.",
    ],
  },
  {
    icon: FileText,
    title: "Optimize Pages for Local Intent",
    desc: [
      "Build secane business expertise on each secane business product page we can add local conversion elements to each secane business page tell the world what we do and where we do it. We localize signals, content, on-page structure and call-to-actions to make it easy for secane leads to see how the service relates to them.",
    ],
  },
  {
    icon: BarChart3,
    title: "Track Rankings, Traffic, and Conversions",
    desc: [
      "But search engine rankings are just the start. We track your organic traffic, your presence in the search results, your organic rankings, engagement, leads and other key real-world metrics to understand what’s working and refine as we go.",
    ],
  },
],
};
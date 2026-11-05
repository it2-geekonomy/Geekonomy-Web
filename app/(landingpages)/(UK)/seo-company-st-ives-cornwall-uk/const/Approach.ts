import {
  MapPin,
  Eye,
  FileText,
  Search,
  Settings,
  Brain,
} from "lucide-react";
import type { IconCardLayout } from "@/lib/constants/Landingpagetypes";

export const approachContent: IconCardLayout = {
  label: "SEO Approach",
  heading: "A Practical SEO Approach Built Around Your Goals",
  intro: [
    "Your SEO should be a reflection on who you are as a business not about reacting to a generic checklist. We develop strategies based on your existing website, your audience, your offering, the search environment and what it is you want your customers to do.",
    "We combine the technical and the creative to give the strongest possible foundation for long term organic visibility.",
  ],
  card: [
    {
      icon: Brain,
      title: "Data-Led Strategy",
      desc: [
        "By leveraging search data, website analytics and competitor research you can find the opportunities that matter and determine which SEO activities need to be tackled first.",
      ],
    },
    {
      icon: Settings,
      title: "Technical Foundations",
      desc: [
        "Amend problems that may hinder crawling, indexing, website performance, and search access.",
      ],
    },
    {
      icon: Search,
      title: "Search Intent",
      desc: [
        "Align pages and content to the “search intent” people are bringing when they arrive on your site.",
      ],
    },
    {
      icon: MapPin,
      title: "Local Relevance",
      desc: [
        "Enhance your visibility for relevant searches associated with St Ives and areas serviced by your business.",
      ],
    },
    {
      icon: FileText,
      title: "Useful Content",
      desc: [
        "Develop and refine content that answers real questions from your customers and showcases your products, services and knowledge.",
      ],
    },
    {
      icon: Eye,
      title: "Transparent Reporting",
      desc: [
        "Identify and track relevant SEO metrics and communicate effectively about what you have optimized,what‘s changing and what opportunities are still available.",
      ],
    },
  ],
  bottom: [
    "Working in our capacity as a **St Ives SEO Company**, our intention is to plan an SEO campaign which can be measured, refined, and adapted to meet the evolving needs of your business.",
  ],
};

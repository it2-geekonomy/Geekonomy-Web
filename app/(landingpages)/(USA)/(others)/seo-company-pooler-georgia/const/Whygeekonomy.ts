import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Target,
  MapPin,
  BarChart3,
  FileText,
  TrendingUp,
} from "lucide-react";

export const whyGeekonomyContent: IconCardLayout = {
  label: "Why Geekonomy",
  heading: "Why Choose Geekonomy as Your Pooler SEO Partner?",
  intro: [
    "When selecting a SEO partner focus not only on their search engine rankings but on how they leverage search engine visibility to the achievement of your long term business objectives.",
    "Geekonomy brings together local search marketing, technical search engine optimization, content planning and now search engine performance management.",
  ],

card: [
  {
    icon: Target,
    title: "Customized SEO Strategies",
    desc: [
      "No two campaigns are the same. They are all built around your website, industry, target markets, competitors and business goals, not by a methodology that applies to all companies.",
    ],
  },
  {
    icon: MapPin,
    title: "Local Search Expertise",
    desc: [
      "We focus on location-specific optimization to help businesses optimize for their searches and discovery points that matter locally.",
    ],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Optimization",
    desc: [
      "Search engine optimization analyses are based on website performance, search opportunities, competitive research, and ongoing campaign reporting/data.",
    ],
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    desc: [
      "Communicating clearly enables you to see what work is being done, what is being achieved and what is still having a focus.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Focus on Qualified Leads and Growth",
    desc: [
      "To bring in targeted visitors who are more inclined to use your services, call in your business or become clients.",
    ],
  },
],
  cta: {
    title: "Ready to Grow in Pooler?",
    description: "Get a customized SEO roadmap designed to turn local searches into revenue.",
    buttonText: "Get Free SEO Audit",
  },
};


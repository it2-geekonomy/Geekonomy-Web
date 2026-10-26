import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Target,
  Search,
  Map,
  TrendingUp,
} from "lucide-react";

export const Results: IconCardLayout = {
  label: "SEO Results",
  heading: "How Geekonomy Helps You Compete in Redmond Search Results",
  intro: [
    "To win in the Redmond Search Space you need a plan with your specific services, market and competitors in mind. Geekonomy will put together a plan of research, technical optimization, content and continual tracking to build a SEO effort based on consistent organic growth.",
  ],

  cta: {
  title: "Ready to Grow in Redmond?",
  description: "Get a customized SEO strategy designed to boost local visibility, attract more customers, and grow your business.",
  buttonText: "Get Free SEO Audit",
  },
  
card: [
  {
    icon: Search,
    title: "Detailed SEO Audit",
    desc: [
      "The first thing we do on your website is audit it for technical problems, content issues, on-page opportunities, indexing challenges, and many other aspects that might be holding back your search engine rankings. This enables us to have a point of reference upon which to base your SEO plan.",
    ],
  },
  {
    icon: Target,
    title: "Competitor & Keyword Research",
    desc: [
      "Discover who is ranking for your previous searches. By understanding competition websites, keyword targeting, content strategies and search intent, we identify gaps where you can compete to outrank your competitors.",
    ],
  },
  {
    icon: Map,
    title: "Custom SEO Roadmap",
    desc: [
      "Your approach is focused on the SEO opportunities with the highest potential instead of fulfilling every possible task. We will create a plan that includes technical SEO, content development, local SEO, link acquisition and others to move you forward.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    desc: [
      "Search results and customer behaviors evolve. Geekonomy tracks the results and takes action based on feature trend changes, position fluctuations, quality of traffic and movements from competitors, so you stay on the path of opportunity that yields results.",
    ],
  },
],


};
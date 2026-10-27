import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Users,
  MousePointerClick,
  TrendingUp,
  BarChart3,
} from "lucide-react";

export const BusinessGoal: IconCardLayout = {
  label: "Business Goal",
  heading: "SEO Strategies Designed Around Your Business Goals",
  intro: [
    "More than traffic – Get the right visitors to your website from search engines. A well-optimized search engine marketing campaign will not only help your business achieve higher rankings and get traffic to your website, it will attract the right kind of traffic that will lead to conversions. Geekonomy focuses on SEO campaigns to meet your business needs.",
  ],

  bottom:[
    "Adopting a data-driven marketing approach based on tangible objectives and ongoing changes, Geekonomy can assist you in positioning yourself better online whilst you focus on organic growth."
  ],
  
card: [
  {
    icon: TrendingUp,
    title: "Improve Organic Rankings and Search Visibility",
    desc: [
      "Search visibility starts with understanding how your customers are searching. We research search terms, analyze competing pages and make your website more discoverable by optimizing navigation and page content to be more relevant to those queries. We constantly improve so you can compete for better results in organic search results.",
    ],
  },
  {
    icon: Users,
    title: "Attract Relevant Traffic and Qualified Leads",
    desc: [
      "Not all visitors to your website will be a customer. Search engine optimization through search intent and audience targeting is focused on bringing the right visitors to your site who are likely to require your products and services. Our optimizations target landing pages and calls to action that better meet customer needs and guide them to inquiry.",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Build a Website That Converts Visitors",
    desc: [
      "Your site will be intuitive. As a user, it should be simple for users to find the information they need and take the next step. We will identify areas to enhance navigation, page architecture, mobile friendliness, service messaging, and contact methods for your visitors.",
    ],
  },
  {
    icon: BarChart3,
    title: "Measure SEO Performance and Growth",
    desc: [
      "What Our Tracking Tell Us It shows us the performance of your current approach, and guides us to where we need to tweak it. We monitor metrics that matter, like organic traffic, keyword impressions, inbound enquiries, conversions and engagement. This insight better shows how SEO fits into your overall business plan.",
    ],
  },
],
};

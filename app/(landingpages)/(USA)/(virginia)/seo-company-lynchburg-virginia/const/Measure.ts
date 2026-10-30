import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Target,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export const Measure : IconCardLayout = {
  label: "Measure",
  heading: "Measure What Matters With SEO",
  intro: [
    "Instead of relying on a search ranking for a single keyword phrase as the success of an SEO campaign, the real success of an SEO campaign can be determined by measuring the results of the campaign in terms of your business. Geekonomy measures these important performance metrics so you can track how your website is doing and where the next opportunities might be.",
  ],

card: [
  {
    icon: TrendingUp,
    title: "Rankings and Visibility",
    desc: [
      "We track key keyword rankings and the overall visibility of your website. This allows us to measure how your website is performing compared to your competitors in your target areas. We can track increases, decreases and potential for further improvements.",
    ],
  },
  {
    icon: Users,
    title: "Organic Traffic",
    desc: [
      "Increase Your Relevant Organic Traffic Reach a broader audience who are already interested in your products and services. We monitor traffic patterns and landing page metrics to identify the sections of your site that attract valuable visitors.",
    ],
  },
  {
    icon: Target,
    title: "Leads and Conversions",
    desc: [
      "Conversion Our main focus is on converting visits to sales. We track a variety of conversions including inquiries, phone calls, submissions, appointments and any other conversion actions that demonstrate real customer interest.",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Growth",
    desc: [
      "The goal is ultimately to prove a direct link between the results of the search engine optimization efforts and your business objectives. By integrating visibility, traffic, engagement and conversion metrics, we are able to keep optimizing your strategy based on Lynchburg opportunities.",
    ],
  },
],

};
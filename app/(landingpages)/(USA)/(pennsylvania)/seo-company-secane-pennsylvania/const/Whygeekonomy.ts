import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Target,
  BarChart3,
  FileText,
  TrendingUp,
} from "lucide-react";

export const whyGeekonomyContent: IconCardLayout = {
  label: "Why Geekonomy",
  heading: "Why Choose Geekonomy for SEO in Secane?",
  intro: [
    "If you are looking for the SEO company to solve your problems, find a team that knows what you are trying to accomplish and then create a plan that is based upon the types of customers you wish to acquire. Geekonomy takes a performance, action-based approach to web page optimization that offers a long-term plan.",
  ],

  cta: {
    title: "Ready to Grow in Secane?",
    description: "Get a customized SEO strategy designed to boost local visibility, attract more customers, and grow your business.",
    buttonText: "Get Free SEO Audit",
  },

  card: [
    {
      icon: Target,
      title: "Customized SEO Strategies",
      desc: [
        "Your, Your Competitors & Your Services are Different We create a tailored plan for your company, based on your website, your industry, the local market opportunities and your prospects & customers – not a cookie cutter SEO package.",
      ],
    },
    {
      icon: BarChart3,
      title: "Data-Driven Optimization",
      desc: [
        "We use data to gain insights that help us determine what actions to continue and where improvements can be made. Patterns in keywords, organic traffic, rankings, user behavior, and conversions guide our ongoing optimization efforts.",
      ],
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      desc: [
        "Gauge the progress of your SEO investment You should be able to see how well your campaigns are performing. We’ll highlight the key activities and metrics so that you are in control of your online exposure.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Long-Term Organic Growth",
      desc: [
        "That’s not all! We continue creating your content, technical elements, local signals, and authority activity to provide your business with an improved foundation for long-term organic visibility.",
      ],
    },
  ],

};

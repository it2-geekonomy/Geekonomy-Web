import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Users,
  BarChart3,
  TrendingUp,
  Target,
  Settings
} from "lucide-react";

export const whyGeekonomyContent: IconCardLayout = {
  label: "Why Geekonomy",
  heading: "Why Choose Geekonomy as Your SEO Company in Chesterfield?",
  intro: [
    "Your SEO Partner If not selected wisely, your SEO partner can affect the amount of customers you will get through organic search. At Geekonomy, we believe your SEO should be centered around your business goals, your target audience, your current website performance and opportunities in your market. We offer results-oriented, traffic-driven and long-lasting SEO in Chesterfield. Not rankings.",
  ],

  bottom:[
    "What are the most effective SEO techniques for businesses in Chesterfield? SEO efforts should link the local interest with bigger online marketing campaigns. We at Geekonomy want to help you grasp the areas where your website needs those extra tune-ups, and how search engine optimization can foster your major business plans."
  ],

  card: [
    {
      icon: Target,
      title: "SEO Strategies Tailored to Your Business",
      desc: [
        "Your business and your audiences are unique. So what works well for your site might not be what we recommend to other clients. We review your website’s existing performance, define your audiences, and understand your service offerings and commercial aims to determine the most appropriate approach.",
      ],
    },
    {
      icon: Users,
      title: "A Focus on Qualified Traffic and Leads",
      desc: [
        "Increased web traffic isn’t always the best thing, if that traffic isn’t the right kind. We look at search intent – the keywords potential customers use when they do a search, or when they compare services and providers. Our aim is to attract more visitors who are interested in your business and will ask for your services.",
      ],
    },
    {
      icon: Settings,
      title: "Technical Expertise and Content Relevance",
      desc: [
        "What makes a good SEO, SEO is more than keywords in web pages. Technical performance, structure, navigation, contextual content and search intent all play a part. We look for elements that can work together to bring about positive impacts to organic performance, navigation and content.",
      ],
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting and Clear Priorities",
      desc: [
        "You shouldn’t have to decipher an unwieldy report to know where your SEO progress stands. The right reports show what activity is being carried out and what goal is being worked towards. If you’re tracking search engine optimization success the metrics that you could see are organic search traffic, search visibility, relevant inquiries and conversions.",
      ],
    },
    {
      icon: TrendingUp,
      title: "A Long-Term Approach to Organic Growth",
      desc: [
        "SEO is never finished. Instead, it is a programme of ongoing measurement, analysis, testing and development to accommodate changes to your website, your competitors and where search traffic is headed. Our approach prioritises implementation of a solid base, and where subsequent optimisation can make a difference.",
      ],
    },
  ],
};

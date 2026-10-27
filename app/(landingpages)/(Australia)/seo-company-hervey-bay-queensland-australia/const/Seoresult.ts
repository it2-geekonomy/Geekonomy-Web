import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Search,
  Sprout,
  TrendingUp,
  Target,
  BarChart3,
} from "lucide-react";

export const SeoResult: IconCardLayout = {
  label: "SEO Results",
  heading: "SEO Results, Reporting and Business Growth",
  intro: [
    "Keyword rankings are important, but a good SEO campaign will ensure your business is more easily discovered online, attracts relevant visitors and provides opportunities for enquiries and sales. Geekonomy emphasizes monitoring the right metrics so that clients can see how their search presence is evolving and where optimizations can be made.",
  ],

  bottom:[
    "Our aim is to improve and grow your web presence through continuous improvement, relevant traffic, and measurable business goals, rather than promising specific rankings or guaranteed results."
  ],

card: [
  {
    icon: TrendingUp,
    title: "Track Organic Traffic and Search Visibility",
    desc: [
      "Follow Organic Traffic Understanding how many people are finding your website from un-paid search results will be key in sharing your online success with the rest of the business. Track search impressions and clicks, click-through rate and keywords to learn which pages are making an impact and which could do with extra optimization.",
    ],
  },
  {
    icon: Target,
    title: "Measure Leads and Customer Enquiries",
    desc: [
      "Your website traffic is even more useful if it has goals. Tracking conversions like submitted forms, phone calls, appointment requests and other actions can provide you with a picture of if website visitors are potential clients that are searching for the services that you provide.",
    ],
  },
  {
    icon: Search,
    title: "Identify Opportunities for Improvement",
    desc: [
      "Performance may vary by page, keyword, or audience segment. Look at your performance data to identify content gaps, underperforming pages, technical issues, and new opportunities for engaging audiences. Use this to identify opportunities for future optimization.",
    ],
  },
  {
    icon: Sprout,
    title: "Understand SEO as a Long-Term Investment",
    desc: [
      "Results with SEO can take a while. There are a lot of factors involved in success including; competition, website health, your site content, authority and your work rate. There can be some quick wins but the best organic results usually come from multiple smaller ones.",
    ],
  },
  {
    icon: BarChart3,
    title: "Make Informed Decisions With Clear Reporting",
    desc: [
      "Consistent reports will link SEO efforts with real-life results. We will analyze appropriate metrics and benchmarks against time to show a business how far they’ve come, and what to do next.",
    ],
  },
],
};
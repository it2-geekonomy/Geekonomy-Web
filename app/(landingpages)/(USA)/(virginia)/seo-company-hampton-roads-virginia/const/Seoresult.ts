import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  BarChart3,
  TrendingUp,
  Users,
} from "lucide-react";

export const SeoResult: IconCardLayout = {
  label: "SEO Results",
  heading: "SEO Results You Can Measure",
  intro: [
    "An effective SEO campaign will achieve more than just higher rankings. Businesses want to know if they are seeing results: Is their website becoming more visible? Are they receiving the right kinds of visitors? Are the right kinds of visitors converting into real leads? For businesses in Hampton Roads, it all adds up.",
    "Using search engine and website data, Geekonomy can help a company understand what stage they are at on the organic search journey,  discover opportunities and what path to take next.  Tracking a benchmark and measuring K. P. I’s will enable your business to succeed with your organic search.",
  ],

  bottom: [
    "SEO results are unique to your own website, level of competition, quality of execution, and many other factors. We don’t tell you what rankings you will get or how much traffic we will generate. At Geekonomy, we concentrate on tracking our progress, learning from the data, and adjusting accordingly."
  ],

  card: [
    {
      icon: BarChart3,
      title: "Organic Impressions, Clicks, and Relevant Rankings",
      desc: [
        "Organic impressions indicate how often your website appears in unpaid search results, while clicks reflect how frequently users visit your pages from those results. Trends in keyword rankings offer further context about your visibility for key searches. These indicators together help determine if your content is reaching the target audience and where additional optimization might be needed.",
      ],
    },
    {
      icon: Users,
      title: "Qualified Leads, Calls, and Form Submissions",
      desc: [
        "When the visitors to your website are actual potential customers, traffic has even more value. By monitoring enquiry forms, phone calls, quote requests, and so on you get to see if organic search is helping you to acquire customers. Whether your business is based in Norfolk, Virginia Beach, Chesapeake or anywhere else in Hampton Roads, this type of data can help.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Conversion Rates and Organic Search Revenue",
      desc: [
        "Conversion rate is the percentage of visitors who take a desired action (e.g., fill out a contact form, request a consultation). If conversion tracking and revenue tracking are available, businesses can also calculate the financial value of organic traffic. These metrics offer insight into which pages are most effective, as well as barriers in the customer’s path to conversion and opportunities to optimize landing pages.",
      ],
    },
  ],
};
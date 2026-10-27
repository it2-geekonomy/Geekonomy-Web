import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Search,
  FileText,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

export const SeoStrategy: IconCardLayout = {
  label: "SEO Strategy",
  heading: "Our SEO Strategy for Woodstock Businesses",
  intro: [
    "Building an SEO strategy that works takes time, patience and persistence. Geekonomy believes that nothing will top the results of a structured approach when it comes to online visibility. Whether you are working to improve your Woodstock, Georgia website’s overall performance, target opportunities of high relevance, or grow a permanent organic footprint – each campaign will be customized around your services, business goals, ideal customers and competition.",
  ],
  
  bottom:[
    "Having a seo company woodstock on your team, your organization will create a seo strategy centered on possible exposure, greater consumer engagement and quantifiable growth."
  ],

card: [
  {
    icon: ClipboardCheck,
    title: "Website and SEO Audit",
    desc: [
      "In the initial phase we audit your website for a range of issues, including technical problems, issues with content, on-page optimization areas, and things that could be hindering your search visibility. This lays the foundation of your campaign and guides in prioritising efforts that will lead to the greatest impact.",
    ],
  },
  {
    icon: Search,
    title: "Local Keyword and Search Intent Research",
    desc: [
      "From your knowledge of who your likely buyers are, we can create website content that will be more pertinent. We do keyword research for other services, for location-specific searches and for customer questions that bring them to Woodstock and the surrounding areas. We examine the search intent to ensure that each page provides what they want.",
    ],
  },
  {
    icon: FileText,
    title: "Website Optimization and Content Development",
    desc: [
      "Now it’s about the key opportunities, by tweaking some parts of your website and developing content considering what you do and the skills you have. This can mean restructuring page titles & headings, links, service & product descriptions and calls to action. We aim to make sure that your pages are useful to your visitors and clear to the search engines.",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO Implementation",
    desc: [
      "Local Optimization Attracts Customers To You Local optimization gets potential customers to find you by showing searchers the right information about your business in Google Search and Google Maps. We optimize your Google Business Profile (a.k.a. – Google My Business listing), business information matching, location pages, and more so you’re highly visible to Woodstock searchers in local Search.",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Tracking and Continuous Improvement",
    desc: [
      "Any SEO work undertaken should be measured in terms of real business objectives. We track your SEO through some key metrics such as organic search, search impressions, key phrase visibility, visitor engagement, conversions (where applicable) etc. We monitor these metrics on an ongoing basis to see what has worked and what is to come.",
    ],
  },
],
};
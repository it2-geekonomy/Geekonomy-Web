import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  FileText,
  Settings,
  Search,
  Link,
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "Comprehensive SEO Services for Downingtown Businesses",
  intro: [
    "Every business has its own set of objectives, competitors, and difficulties in reaching potential customers. Geekonomy has a few SEO services to enhance your website, improve your search visibility, and help customers find what they’re looking for. We combine technical improvements, related content, and local search optimization for sustainable online growth.",
  ],

  bottom:[
    "With an extensive search engine optimization campaign a company can improve all facets of its web presence simultaneously rather than individual optimization tools."
  ],

card: [
  {
    icon: MapPin,
    title: "Local SEO and Google Business Profile Optimization",
    desc: [
      "Local SEO helps your business rank higher in local searches performed by local customers when they are searching for your products or services. We optimize your Google Business Profile, ensure your business information is accurate, identify local keywords, and optimize your local landing pages.",
    ],
  },
  {
    icon: Search,
    title: "On-Page SEO and Keyword Research",
    desc: [
      "We analyze keywords, optimize title tags and meta descriptions, structure headings well and optimize web pages for search intent. All of this makes your pages easy for search engines to interpret and makes information more transparent to your visitors.",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO and Website Performance",
    desc: [
      "Ensuring your website is fundamentally solid is the key to crawlability, indexability and user experience. Geekonomy is here to identify issues with your site architecture, mobile usability, page load speed, internal linking and indexation issues, and then help you work towards a solution.",
    ],
  },
  {
    icon: FileText,
    title: "Content Marketing and SEO Copywriting",
    desc: [
      "Helpful content answers the questions your customer has, builds your authority, and pulls in qualifying organic traffic. We create search engine optimization service pages, content and blogs, and website content that is aligned to what your audience needs to hear from you in a friendly but un-salesy way.",
    ],
  },
  {
    icon: Link,
    title: "Link Building and Authority Development",
    desc: [
      "To build a reputable online presence you need to build relevant links and earn the trust of the industry you are operating in. We focus on types of links including Authoritative business directories, trade magazines and relevant content assets.",
    ],
  },
],
};
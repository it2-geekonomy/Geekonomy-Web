import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Building2,
  FileText,
  Settings,
  Search,
  Link,
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "Our SEO Services for Businesses in Secane",
  intro: [
    "Secane is a collection of individual businesses, each with its own customers, competitors, and business growth potential. Geekonomy relies on proven SEO techniques in combination with local market insights to craft a plan that will grow exposure and generate more relevant traffic.",
  ],

  card: [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: [
      "We develop and customize your web presence and local search footprint around the areas that your customers are actually searching for you in. Utilizing location based content, local ranking signals, and other geographic based techniques.",
    ],
  },
  {
    icon: Building2,
    title: "Google Business Profile Optimization",
    desc: [
      "Be found by your local customers when they’re searching for you. We optimize your Google Business Profile/Listing in its entirety so that your local customers can easily find you in Google Search and Maps, discover your company and contact you.",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: [
      "Enhance the aspects of your website to improve your online visibility including headings, page content, internal links, title tags, and location signals so that search engines can easily discover your business and relate it to customers in Secane.",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    desc: [
      "Technical SEO A strong technical foundation is critical to not only visibility in the search engines, but for a great user experience too. We identify and fix crawlability, indexability, site architecture, mobile usability, page speed and other technical issues.",
    ],
  },
  {
    icon: Search,
    title: "Keyword Research and Content Strategy",
    desc: [
      "Learn what types of search terms the people you want to buy from you are searching for when they are looking for Secane businesses & services. Our team generates a local content strategy based on the local searches and high value keywords.",
    ],
  },
  {
    icon: Link,
    title: "Local Citation and Link Building",
    desc: [
      "Establish relevant local signals & business consistency signals will aid in organic discovery. Our methodology of building credibility signals in your local ecosystem that gives you an advantage in organic discoverability.",
    ],
  },
],
};
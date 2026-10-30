import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Search,
  Settings,
  FileText,
  Link,
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "Our SEO Services for Lynchburg Businesses",
  intro: [
    "Your Lynchburg business has a unique customer base, competition, products and services, and goals for growth. Geekonomy will create an all-encompassing SEO plan that focuses on the factors that will boost your web’s ranking and attract relevant local traffic.",
    "No matter what service you want to take advantage of, from technical SEO to content marketing and local search, the services we offer complement each other to build a more powerful search presence for your business in front of Lynchburg clients.",
  ],

card: [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: [
      "Local Search We maximize your local search visibility so that when your prospective customers are searching for your product and services in and around Lynchburg, they find your business! This is local signals, location-specific content, Business Info, and other factors that contribute to more prominent local rankings.",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: [
      "Your website must deliver a clear message about what your business does. We optimize headings, your page content, title tags, interlinking, URL structure and other on page factors to make your pages more relevant to both the search engines and to your prospective customers.",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    desc: [
      "Technical SEO Technological problems can hinder search engines from crawling, indexing, and understanding your website. We discover issues related to a website’s architecture, the individual webpages of the site, mobile usability, redirects, indexing and other technological factors that can influence organic rankings.",
    ],
  },
  {
    icon: Search,
    title: "Keyword Research and Content Strategy",
    desc: [
      "Analysis of search opportunities available for you and your services to reach your Lynchburg audience. We use these ideas to develop content that helps you answer customer questions, meet local needs, add to necessary service pages and generate other opportunities to get reached by. qualified organic traffic.",
    ],
  },
  {
    icon: Link,
    title: "Link Building and Authority Development",
    desc: [
      "It also must have credibility – we spend a lot of time building our authority and relevant signals that help a site build its rep and grow over time.",
    ],
  },
],
};
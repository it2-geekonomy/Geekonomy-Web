import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Users,
  Search,
  Settings,
  BarChart3,
} from "lucide-react";

export const GrowingBusinesses: IconCardLayout = {
  label: "Grow your Business",
  heading: "How Our SEO Company in Castle Rock Builds Your Online Visibility",
  intro: [
    "What does a SEO campaign entail? It begins with an evaluation of your current situation and determination of which areas have the best potential for growth. At Geekonomy, our approach is to walk you through the process of getting your website found by search engines, increase relevance for specific searches and help you reach new customers across Castle Rock, Colorado."
  ],

  bottom: [
    "With an ongoing, data-driven approach, Geekonomy guides each client business toward improved, strengthened foundations for organic search, and a path to sustainable increases in both web traffic and qualified website visitors.",
  ],
card: [
  {
    icon: Users,
    title: "Discover Your Target Audience and Competitors",
    desc: [
      "Firstly, we learn about your services, who your customers are, your commercial objectives and your existing online presence. We investigate the competition for each of your services in the Castle Rock market to identify content gaps, profitable keywords and how you could optimize your website.",
    ],
  },
  {
    icon: Search,
    title: "Identify High-Intent Keywords and Ranking Opportunities",
    desc: [
      "How Keyword Research can help you to determine what search terms your customers are searching for Search term research enables us to understand how searchers are searching for your product or service. We examine both intent, relevance and competition to understand what search terms and markets align to your goal.",
    ],
  },
  {
    icon: Settings,
    title: "Optimize Your Website and Local Search Presence",
    desc: [
      "We then take a look at your site elements including page titles, headings, descriptions of services offered, on-site navigation links, responsiveness for mobile devices and speed. We improve local SEO indicators like your Google My Business profile and location service pages on your site (if relevant).",
    ],
  },
  {
    icon: BarChart3,
    title: "Measure Results and Refine Your SEO Strategy",
    desc: [
      "Effective SEO is an on-going process of review, to see what is working, and what is not. We track the KPIs, target pages that are not getting noticed and optimize to ensure that your site is reactive to changing searches and opportunities in your local area.",
    ],
  },
],
};
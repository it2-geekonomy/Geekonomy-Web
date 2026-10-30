import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Search,
  FileText,
  Link,
} from "lucide-react";

export const SeoStrategy: IconCardLayout = {
  label: "SEO Strategy",
  heading: "Local SEO Strategies Built for Gettysburg Businesses",
  intro: [
    "Local search behavior in Gettysburg can vary significantly depending on whether customers are residents, nearby communities, or visitors looking for businesses while planning or experiencing a trip. Geekonomy creates local SEO campaigns based on these different search behaviors so your business can reach people at the moments that matter.",
  ],

  card: [
  {
    icon: MapPin,
    title: "Optimize Your Google Business Profile",
    desc: [
      "Your Google Business Profile offers essential information about your Gettysburg business that helps current and potential customers learn more about your operations and get in touch. Whether it’s information, images, or reviews, we can help you make sure your profile is set up so that it accurately reflects your Gettysburg business.",
    ],
  },
  {
    icon: Link,
    title: "Build Local Citations and Authority",
    desc: [
      "Build a strong presence in quality directories and relevant local sites by using consistent business information in directories and citing sources. We focus on consistent listings and relevant local citations, and you’d be amazed how this helps search engines recognize you.",
    ],
  },
  {
    icon: Search,
    title: "Target Gettysburg-Specific Search Intent",
    desc: [
      "You may want a company in Gettysburg but the keywords you use to search can differ depending on what type of company you need. We identify the key location related searches that are relevant to your services and craft content that is based on these searches to improve your website’s relevance to the local searchers.",
    ],
  },
  {
    icon: FileText,
    title: "Strengthen Local Landing Pages",
    desc: [
      "Location & Service-specific pages help your business rank for specific Gettysburg search opportunities without creating thin or duplicate pages. We develop educational pages that define your services, set your business apart as a local authority, and include all the details potential customers are searching for.",
    ],
  },
],

};
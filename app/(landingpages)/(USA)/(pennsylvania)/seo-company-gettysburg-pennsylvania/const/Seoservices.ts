import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Building2,
  FileText,
  Settings,
  Search,
  Link,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "Our Gettysburg SEO Services",
  intro: [
    "A Gettysburg SEO strategy by Geekonomy Our approach to search engine optimization develops a plan around your Gettysburg business to reach the people seeking your products and services. We integrate website optimization, local search, content, technical SEO, and link strength to grow organic visibility over time.",
  ],

  cta: {
    title: "Ready to Grow in Gettysburg?",
    description: "Get a customized SEO strategy designed to boost local visibility, attract more customers, and grow your business.",
    buttonText: "Get Free SEO Audit",
  },

card: [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: [
      "local search Our process involves refining your online presence to get your business found for relevant local searches. Location signals are enhanced, your Google Business Profile is optimized, locally relevant content is created and your citations are improved.",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: [
      "Every customer facing page on your website should include obvious visibility of what it is that you do, and the location that you serve. We optimize for: headers, page copy, internal linking, meta data, page URLs and other on-page factors.",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    desc: [
      "Good Website=Solid Foundation to Grow For organic growth, website technical issues, we find and address issues with crawling, indexing, site architecture, mobile usability, page performance, duplicate content and more, which may limit a site’s ability to show up in search results.",
    ],
  },
  {
    icon: Search,
    title: "Keyword Research",
    desc: [
      "We evaluate the keywords prospective clients use to search for your business and services in the Gettysburg area. This allows us to discover the most valuable opportunities according to search volume, competition, relevance, and the business services you want to target.",
    ],
  },
  {
    icon: BookOpen,
    title: "Content Marketing",
    desc: [
      "Great, Targeted Content Relevant content can assist your website in answering customer questions and grow for great opportunities. Our team creates content with your services, customers, and Gettysburg in mind.",
    ],
  },
  {
    icon: Building2,
    title: "Google Business Profile Optimization",
    desc: [
      "Locally, let customers discover you. Your Business Profile may play a role in discovery. We will work to optimize relevant profile information and signals of local intent to deliver a more transparent and trustworthy experience when consumers search for the services you provide.",
    ],
  },
  {
    icon: Link,
    title: "Link Building",
    desc: [
      "Links from high quality sites can also lend some authority and credibility to your site. We concentrate on quality signals which will help your site become a sustainable organic search result.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "SEO Audits",
    desc: [
      "Prior to crafting a plan we can analyze your current website for possibilities and challenges. The SEO audit reveals technical issues, missing content, local opportunities, targets your competitor’s weak links, and identifies how your current website can drive more visibility in the search engines.",
    ],
  },
],

};
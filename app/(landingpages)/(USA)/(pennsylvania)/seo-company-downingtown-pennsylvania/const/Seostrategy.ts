import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Building2,
  FileText,
  Map,
  MousePointerClick,
} from "lucide-react";

export const SeoStrategy: IconCardLayout = {
  label: "SEO Strategy",
  heading: "Local SEO Strategies That Help You Reach More Customers",
  intro: [
    "When people are searching on the internet for the products and services that you have, the higher you are listed in the local search results, the more attention your business gets and the more inquiries you receive. Geekonomy creates local SEO campaigns that will put your business in front of people actively looking for the products or services you offer in the Downingtown PA area.",
  ],

  bottom:[
    "Together, they enable Geekonomy to provide organizations with an even stronger foundation for local search visibility, engagement and growing success."
  ],
  
  cta: {
    title: "Ready to Grow in Downingtown?",
    description: "Get a custom SEO strategy designed to boost your local visibility and attract more customers. Let’s help your business get found by the people searching for your services.",
    buttonText: "Get Free SEO Audit",
  },

card: [
  {
    icon: Building2,
    title: "Improve Your Google Business Profile",
    desc: [
      "A thorough and precise Google Business Profile provides potential customers the information they need to know what products and services you provide, where you provide those offerings, and how to get in touch with you. We highlight the most relevant business categories, your services, current contact information, real reviews, and practical business information.",
    ],
  },
  {
    icon: MapPin,
    title: "Target Location-Specific Search Terms",
    desc: [
      "Customers frequently search with a city, neighborhood or location in mind. We compile local search terms and include them strategically on the website on your services pages, in headings, metadata, and other content so your website ranks well without keyword stuffing.",
    ],
  },
  {
    icon: FileText,
    title: "Build Helpful Local Landing Pages",
    desc: [
      "Localized pages enable your business to offer your service to customers within specific communities. We produce helpful, unique content that educates prospects about what you do, demonstrates local relevance, and delivers the next steps to take for visitors rather than duplicate pages with only a variation of location name.",
    ],
  },
  {
    icon: Map,
    title: "Strengthen Local Business Citations",
    desc: [
      "Ensure your Business Info Is Consistent across Relevant Sites Consistent business information across all high quality directories and relevant website listings will enable consumers to discover the precise details regarding your business. We have the ability to tell you where and how to fix inconsistencies and discrepancies in your business directory listings.",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Turn Local Website Visits Into Inquiries",
    desc: [
      "Visibility is only the first step to a strong local marketing plan. Well-defined product or service pages, a mobile-optimized site structure, visible contact information and strong calls to action help to guide visitors along the conversion path whether they’re requesting a quote, calling your company, or scheduling a consultation.",
    ],
  },
],
};
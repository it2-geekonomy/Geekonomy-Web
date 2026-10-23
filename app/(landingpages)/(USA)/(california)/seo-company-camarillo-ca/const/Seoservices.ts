import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Settings,
  FileText,
  PenTool,
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "SEO Services Built for Camarillo Businesses",

  card: [
    {
      icon: MapPin,
      title: "Local SEO That Connects You With Nearby Customers",
      desc: [
        "Local Customers Camarillo Your potential local customers in Camarillo are searching on google to find a particular service or local business comparison shop, or they are ready to make a purchase. We optimize your presence to make sure your business shows up for relevant local searches and boost your visibility on Google Search and Maps.",
      ],
    },
    {
      icon: Settings,
      title: "Technical SEO for a Stronger Website",
      desc: [
        "By having a technically good site it helps the search engines understand your business better and makes it easier for your customers to navigate your site. We solve problems like crawlability, indexation, mobile performance, page speed, broken links, and Core Web Vitals to give an SEO boost.",
      ],
    },
    {
      icon: FileText,
      title: "On-Page SEO Focused on Search Intent",
      desc: [
        "All significant pages should aim at addressing a customer need. We focus on research on headings, content, internal link structure, meta-data and page layout around the corresponding search intent so that visitors can formulate your value proposition fast.",
      ],
    },
    {
      icon: PenTool,
      title: "Content Strategy for the Camarillo Market",
      desc: [
        "Generic content doesn’t generate significant local visibility. We create valuable, locally relevant content related to the services, questions, and search patterns of our customers in Camarillo & other parts of Ventura County, enabling your website to develop topical relevance with your.",
      ],
    },
  ],
};
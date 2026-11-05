import {
  StickyNote,
  FileText,
  Phone,
  Search,
  Rocket,
  Funnel,
} from "lucide-react";
import type { IconCardLayout } from "@/lib/constants/Landingpagetypes";

export const seoStrategyContent: IconCardLayout = {
  label: "SEO Strategy",
  heading: "Focus on Traffic That Can Become Customers",
  intro: [
    "Getting ranked for keywords is merely one aspect of an effective SEO strategy. The key question being, does the search engine traffic you receive attract the right people to your site and lead them efficiently to a sale?",
    "Our way of working SEO St Ives is to make search visibility contribute to your other business goals. We work toward driving targeted people to your site.",
    "What We Focus On",
  ],
  card: [
    {
      icon: Search,
      title: "Relevant Search Terms",
      desc: ["Target keywords related to your products, services, and customer needs."],
    },
    {
      icon: Rocket,
      title: "Qualified Organic Traffic",
      desc: ["Bring in traffic who have a real intention to do business with you."],
    },
    {
      icon: StickyNote,
      title: "Seize Landing Pages",
      desc: [
        "Ensure pages are popular, prominent, clear, relevant, and user-friendly in relation to the search desires.",
      ],
    },
    {
      icon: FileText,
      title: "Improved User Journeys",
      desc: [
        "Make it easy for visitors to locate the information they require and comprehend the subsequent steps.",
      ],
    },
    {
      icon: Phone,
      title: "Lead Generation",
      desc: [
        "Enable actions such as enquiries, calls, bookings, contact-form submissions.",
      ],
    },
    {
      icon: Funnel,
      title: "Conversion Tracking",
      desc: [
        "Calculate the behavior of your organic visitors on your website and identify areas of improvement.",
      ],
    },
  ],
  bottom: [
    "The goal is to develop an SEO that allows you to be there during every moment of the customer journey, from the moment they search on Google until the conversion that is valuable to you.",
  ],
};

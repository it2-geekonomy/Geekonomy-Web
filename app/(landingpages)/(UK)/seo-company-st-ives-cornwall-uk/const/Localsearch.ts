import {
  Search,
  MapPin,
  CircleCheck,
  ALargeSmall,
  CircleUser,
  MapPinned,
  FileText,
} from "lucide-react";
import type { IconCardLayout } from "@/lib/constants/Landingpagetypes";

export const localSearchContent: IconCardLayout = {
  label: "Local SEO Services",
  heading: "Build Stronger Local Visibility in St Ives",
  intro: [
    "When people search for your type of service locally, even just appearing in relevant local search results can have a huge impact on your capacity to attract new customers. We ‘re local search engine optimization platform is designed to help make your website and business profile more relevant to the search terms that count in St Ives.",
    "As **St Ives SEO Company**, we approach your local search performance from various perspectives, including your website, Google Business Profile, location-specific optimization, reviews, and local search intent.",
    "What We Focus On",
  ],
  card: [
    {
      icon: ALargeSmall,
      title: "Local Keyword Targeting",
      desc: ["discover what searches bring your solution to customers near St Ives."],
    },
    {
      icon: CircleUser,
      title: "Google Business Profile",
      desc: ["Enhance your business listing and local relevance."],
    },
    {
      icon: FileText,
      title: "Location Pages",
      desc: [
        "Use the anchor text to create and optimize informative pages that tell search engines exactly what services and areas you are covering.",
      ],
    },
    {
      icon: MapPin,
      title: "Local Citations",
      desc: ["Keep business information consistent on all relevant listings."],
    },
    {
      icon: CircleCheck,
      title: "Reviews",
      desc: [
        "assist in developing a more robust approach for obtaining and managing real customer reviews.",
      ],
    },
    {
      icon: MapPinned,
      title: "Local Relevance",
      desc: [
        "how your website content should be relevant to what your local customers need and want i.e. the kind of questions, products, services and locations they are interested in.",
      ],
    },
    {
      icon: Search,
      title: "Search Visibility",
      desc: [
        "Track organic and local search engine traffic to see where you can continuously improve.",
      ],
    },
  ],
  bottom: [
    "It is not just about having your nice face optimized for a local search term. It’s about having a persistent local identity so that someone can find you and your business and learn about your business and your services and move on.",
  ],
};

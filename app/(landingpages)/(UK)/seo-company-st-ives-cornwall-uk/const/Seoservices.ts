import {
  MapPin,
  Settings,
  FileText,
  Link,
  Funnel,
  ALargeSmall,
  CircleUser,
  StickyNote,
  Search,
  ShoppingCart,
} from "lucide-react";
import type { IconCardLayout } from "@/lib/constants/Landingpagetypes";

export const seoServicesContent: IconCardLayout = {
  label: "SEO Services",
  heading: "SEO Services for Businesses in St Ives",
  intro: [
    "Each business is unique with different customers, competitors and search opportunities. Our **SEO services in St Ives** are tailored to focus on the factors that can have the greatest impact on your organic visibility and website.",
    "We customize your strategy by building on the technical enhancement and optimization of local search to how customers search and what is needed for the business to grow.",
  ],
  card: [
    {
      icon: MapPin,
      title: "Local SEO",
      desc: [
        "Increase your chance of being found in location-specific searches and enable customers in and around St Ives to find you.",
      ],
    },
    {
      icon: Settings,
      title: "Technical SEO",
      desc: [
        "Resolve technical issues which can impact crawling, indexing, website performance and search visibility.",
      ],
    },
    {
      icon: StickyNote,
      title: "On-Page SEO",
      desc: [
        "Maximize page titles, headings, content, internal linking, and so on, based on the intended search they are targeting.",
      ],
    },
    {
      icon: ALargeSmall,
      title: "Keyword Research",
      desc: [
        "Determine appropriate keywords and look for opportunities by considering your services, target market(s), geography and competitors.",
      ],
    },
    {
      icon: CircleUser,
      title: "Google Business Profile Optimization",
      desc: [
        "Improve the information displayed and the accuracy of your Google Business Profile to strengthen your local visibility.",
      ],
    },
    {
      icon: FileText,
      title: "Content & Semantic SEO",
      desc: [
        "Develop relevant, topic-driven content that answers the questions, services and related concepts used by potential customers searching for you.",
      ],
    },
    {
      icon: Link,
      title: "Link Building",
      desc: [
        "Develop the appropriate authority to your website through a strategic link acquisition process that will underpin the long term SEO development of your website.",
      ],
    },
    {
      icon: Search,
      title: "SEO Audits",
      desc: [
        "Discover your current website‘s SEO opportunities in Technical, Content, On-Page and Local by doing a comprehensive analysis.",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce SEO",
      desc: [
        "Help online stores find their customers by optimizing product, category and supporting pages, to the maximum.",
      ],
    },
    {
      icon: Funnel,
      title: "Conversion-Focused SEO",
      desc: [
        "Improve the pages and journeys that can convert organic visitors into enquiries, calls or customers than just buying traffic.",
      ],
    },
  ],
  cta: {
    title: "Not sure where to start?",
    description:
      "We help St Ives businesses improve search visibility, attract the right customers, and grow with a tailored SEO strategy.",
    buttonText: "Get a Free Plan",
  },
};

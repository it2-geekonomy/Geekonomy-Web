import {
  Eye,
  Sparkles,
  MessageSquare,
  FileText,
  Link,
  LandPlot,
} from "lucide-react";
import type { IconCardLayout } from "@/lib/constants/Landingpagetypes";

export const brandIdentityContent: IconCardLayout = {
  label: "Brand Identity",
  heading: "From Logo to a Complete Brand Identity",
  intro: [
    "Your logo is an essential aspect of your brand, but it is just one element of a brand identity. Creating a distinctive brand requires a strategic approach to messaging, design and customer interaction.",
  ],
  card: [
    {
      icon: LandPlot,
      title: "Your Brand Positioning",
      desc: [
        "Your positioning establishes your place in the marketplace, your target customer, your points of differentiation, and what you have to offer.",
      ],
    },
    {
      icon: Sparkles,
      title: "Your Brand Personality",
      desc: [
        "Your brand personality, which is established through good branding and marketing, gives your business its personality, appearance, tone of voice, and mode of communication. It provides a personality that customers associate with your business and interact with.",
      ],
    },
    {
      icon: Eye,
      title: "Your Visual Identity",
      desc: [
        "Your logo, colour palate, typeface, imagery, graphic components and overall style are a unified visual language.",
      ],
    },
    {
      icon: MessageSquare,
      title: "Your Brand Messaging",
      desc: [
        "Always include a tagline, value proposition, brand story, website copy, voice and tone of communication that echo and reinforce what your business embodies and what you design.",
      ],
    },
    {
      icon: FileText,
      title: "Your Brand Guidelines",
      desc: [
        "Provide your team and marketing partners with comprehensive guidelines so the brand is consistently represented across websites, social media, advertising, packaging, presentations and other collateral.",
      ],
    },
    {
      icon: Link,
      title: "Your Customer Touchpoints",
      desc: [
        "Your Brand is perceived everywhere your customer encounters your business from a Google search or your website visit to sales calls, your product, packaging and follow-up.",
      ],
    },
  ],
  bottom: [
    "This is why our methodology extends far beyond logo designing. As a branding agency in Bangalore, Geekonomy unites these aspects into one holistic brand identity that is memorable, consistent and forward-thinking to help your business scale new heights.",
  ],
};

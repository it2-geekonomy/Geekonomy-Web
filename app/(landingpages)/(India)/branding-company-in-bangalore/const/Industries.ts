import {
  Building,
  HeartPlus,
  Box,
  GraduationCap,
  Utensils,
  Rocket,
  BriefcaseBusiness,
  Cpu,
} from "lucide-react";
import type { IconCardLayout } from "@/lib/constants/Landingpagetypes";

export const industriesContent: IconCardLayout = {
  label: "Industries",
  heading: "Branding for Bangalore’s Most Competitive Industries",
  intro: [
    "Various brand positioning strategies will be effective for different industries. For example, a startup company from a high tech industry would need the ability to convey credibility and innovation, whereas a D2C Brand may be required to establish a visual identity that encourages near immediate recognition and defines consumer preferencing which is essential for high branding.",
    "From there, their team of branding and marketing consultants will create brand strategies specifically targeted to your industry, designed for your audience, and going head-to-head with your competition, a way that synergizes well with top branding agencies.",
  ],
  card: [
    {
      icon: Rocket,
      title: "Startups & SaaS",
      desc: "Develop a unique brand identity that will represent the value of your product, will help you to become credible and will provide your startup business with a solid background for growth through brand design.",
    },
    {
      icon: Cpu,
      title: "Technology & IT Companies",
      desc: "Distinct your technology business from competitors with a defined positioning strategy, targeted professional messaging and a scalable visual identity.",
    },
    {
      icon: Box,
      title: "D2C & eCommerce Brands",
      desc: "Designs consumer brands that are memorable, have a clear identity, with relevant messaging, and deliver compelling packaging, websites, market platforms, and social media, by tapping into the knowledge of top branding experts.",
    },
    {
      icon: Building,
      title: "Real Estate & Property Businesses",
      desc: "Establish credibility and meaning via branding, brand messaging, visual identity, and marketing tools and collateral specifically tailored to property buyers and investors, drawing on our roots as one of the world‘s top 10 branding agencies.",
    },
    {
      icon: HeartPlus,
      title: "Healthcare & Wellness",
      desc: "Create a trustworthy and accessible brand that exudes authority but inspires trust in patients, customers and collaborators, one of our branding firm core objectives.",
    },
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      desc: "Develop an identity that resonates with students, parents, institutions, or professional learners while advertising your value and positioning.",
    },
    {
      icon: Utensils,
      title: "Hospitality, Food & Retail",
      desc: "Build strong brands that are recognizable by their unique visual identities, packaging, communication and customer experiences. It is one of the top branding services in Bangalore.",
    },
    {
      icon: BriefcaseBusiness,
      title: "B2B & Professional Services",
      desc: "Transform sophisticated proposals into a simple, compelling brand proposition that will persuade decision makers to see your expertise and confidently select your business using marketing savvy.",
    },
  ],
  bottom: [
    "Are you creating a new venture or repositioning an existing one? Our branding methodology is flexible and evolves to complement the latest dynamics of the market you operate in and the clients you aim to serve.",
  ],
};

import { Search, TrendingUp } from "lucide-react";
import type { HeroContent } from "@/lib/constants/Landingpagetypes";

export const heroContent: HeroContent = {
  label: "Bangalore Branding Agency",
  headingMain: "Bangalore Branding Company",
  headingHighlight: "That Builds Brands People Remember",
  paragraphs: [
    "Your brand isn‘t just a logo, your brand is your whole brand experience. People will identify your brand and identity, and learn what you stand for, and whether they can trust you, which is key for your global branding. At Geekonomy, we craft unique brands and position them with our strategy, voice and message, color and logo.",
    "As a branding company in Bangalore we work with start ups, growing business and established business to build brands that are distinguishable in those markets. We put together the brand positioning to a comprehensive identity system for your business ideas.. We are committed towards providing the perfect branding solutions to boost your growth.",
    "Build a brand with intent and let a branding agency be the conduit to your vision. Build a brand worth remembering.",
  ],
  buttonText: "Start Your Branding Project",
  image:
    "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/bangalorehcity.png",
  imageAlt: "Bangalore city",
  badges: [
    {
      icon: TrendingUp,
      title: "+ Qualified Leads",
      subtitle: "Calls & quote requests up",
      position: "left-6 top-6",
    },
    {
      icon: Search,
      title: "#1 Local Visibility",
      subtitle: "Google Search & Maps",
      position: "bottom-6 right-6",
    },
  ],
  stats: [
    { value: "50+", label: "Brands Built for Growth" },
    { value: "Strategy → Identity", label: "From Positioning to Recognition" },
    { value: "Bangalore-Focused", label: "Branding That Fits Your Market" },
  ],
  bannerText: "Strategy-Led Branding across every customer touchpoint",
  keywords: [
    "Brand Strategy",
    "Brand Positioning",
    "Logo Design",
    "Visual Identity",
    "Brand Messaging",
    "Packaging Design",
  ],
};

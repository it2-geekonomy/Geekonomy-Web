import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Target,
  MapPin,
  FileText,
  MousePointerClick,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export const Difference : IconCardLayout = {
  label: "Difference",
  heading: "What Makes Geekonomy Different?",
  intro: [
    "SEOs should be aligned with your overall business objectives and not considered a list of disjointed activities. Geekonomy applies a strategic methodology integrating local search, technical SEO, content, authority and conversion-enhancing strategies to build a robust digital footprint for Redmond businesses.",
  ],

card: [
  {
    icon: Target,
    title: "No One-Size-Fits-All Campaigns",
    desc: [
      "You and your business have different services, target audiences, competitors, and a place in the market. We develop your SEO strategy with this in mind so that the work responds to what’s right for you and not a list of boxes to tick.",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO Aligned With Business Goals",
    desc: [
      "However, if you’re after more calls, quote requests, appointments, online sales or high-quality website leads no matter what the email or phone call actually is we concentrate on the search visibility and website enhancement that aid your objectives.",
    ],
  },
  {
    icon: MapPin,
    title: "Local and Organic Search Combined",
    desc: [
      "Your local presence and our efforts to improve organic ranking in traditional areas work hand in hand to give more and more potential customers the opportunity to find your business. We optimize all of the above for your target clients and the areas you serve.",
    ],
  },
  {
    icon: FileText,
    title: "Content Built Around Customers",
    desc: [
      "Rather than building pages with the sole purpose of building pages we build out topics and search phrases that enable potential customers to better educate themselves about what you do, begin to answer those questions, and eventually make contact.",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Conversion Optimization",
    desc: [
      "Become more action-oriented When visitors come to your website, we work on making that action to take a step towards conversion as easy as possible. We identify areas in your messaging, calls to action, pages layout and overall user experience that can be optimized for more organic visitors to convert into leads.",
    ],
  },
  {
    icon: BarChart3,
    title: "Clear Performance Tracking",
    desc: [
      "We also track important SEO metrics, and make the data available to guide and measure your ongoing SEO efforts. This means you know what is being added and can see your campaign is making meaningful progress.",
    ],
  },
],

};
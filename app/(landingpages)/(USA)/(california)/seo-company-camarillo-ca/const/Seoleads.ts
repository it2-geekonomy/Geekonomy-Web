import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Target,
  MousePointerClick,
  BarChart3,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export const SeoLeads: IconCardLayout = {
  label: "SEO Leads",
  heading: "Camarillo SEO Company Focused on Leads, Not Just Rankings",
  intro: [
    "Achieving a high ranking in Google only makes sense if it gets your business in front of the right customers. Geekonomy applies a conversion-centric SEO strategy, linking search visibility to the activities that can lead to business opportunities.",
  ],

  card: [
    {
      icon: Target,
      title: "Attract High-Intent Customers",
      desc: [
        "Bidding on real business related searches that show real interest in your products and services. Targeting appropriate commercial and local searches will deliver your website to people searching for a business like yours rather than large volumes of untargeted traffic.",
      ],
    },
    {
      icon: MousePointerClick,
      title: "Turn Website Visitors Into Inquiries",
      desc: [
        "While it‘s important to drive visitors to your site, that‘s just the start. We can enhance the pages that visitors reach by providing concise messaging, resonant service details, powerful calls to action and a user experience that compels a potential client to take the leap.",
      ],
    },
    {
      icon: BarChart3,
      title: "Measure What Actually Matters",
      desc: [
        "In addition to analysis based solely on keyword rankings, we also measure the success of your organic traffic by tracking the achievement of your desired end results. For most businesses, this might mean phone calls, contact form submissions, quote requests, appointments, reservations, or other key conversions.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Build Sustainable Organic Growth",
      desc: [
        "Build a better site and online presence rather than seeking quick ranking boosts. We aim to develop your site and online presence into something that can keep drawing relevant customers in the long term.",
      ],
    },
    {
      icon: Briefcase,
      title: "Turn Search Visibility Into Business Opportunities",
      desc: [
        "What results should an effective SEO campaign generate for you? Another advantage that makes Geekonomy unique is that we not only develop a powerful search strategy, but also couple that with targeted conversion optimization so that more of the people finding your business in Google become qualified leads.",
      ],
    },
  ],
};
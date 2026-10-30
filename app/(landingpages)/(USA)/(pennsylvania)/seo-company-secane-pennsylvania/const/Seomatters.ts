import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Users,
  Target,
  MousePointerClick,
} from "lucide-react";

export const SeoMatters: IconCardLayout = {
  label: "SEO Matters",
  heading: "Why Local SEO Matters for Secane Businesses",
  intro: [
    "Customers often use Google to search for a location, compare local businesses, or make a purchase. For businesses in Secane, appearing prominently in these searches helps them connect with people who already know what they need.",
  ],

card: [
  {
    icon: Target,
    title: "Connect With High-Intent Local Customers",
    desc: [
      "Local search gets your company in front of customers who are already searching for what you have to offer in your local community. In other words, you’re essentially warming up potential customers by aligning your message to their intent.",
    ],
  },
  {
    icon: Users,
    title: "Compete With Nearby Businesses",
    desc: [
      "In addition to trying to generate local sales traffic, Secane businesses are also vying for awareness in the local pack in Google. By emphasizing the keyword themes relevant to you and your local areas, your website can gain relevance and stand out from the crowd.",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Turn Search Traffic Into Leads",
    desc: [
      "Getting found is only the first step. When someone in your city finds your website they need to be able to read what you do, be compelled to consider your service and then be easily able to call, get information or book an appointment online. This is how you take relevant organic traffic and create new sales.",
    ],
  },
],
};

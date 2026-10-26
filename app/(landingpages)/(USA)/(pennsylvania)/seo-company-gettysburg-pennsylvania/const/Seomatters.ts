import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Target,
  TrendingUp,
} from "lucide-react";

export const SeoMatters: IconCardLayout = {
  label: "SEO Matters",
  heading: "Why SEO Matters for Businesses in Gettysburg",
  intro: [
    "Gettysburg & Adams County’s Local Market Gettysburg’s local market is influenced by the residents, the surrounding communities, tourism, hospitality, professional services, and business patrons to the area. Being able to dominate the search space allows you to reach those individuals who are actively seeking your product or service.",
  ],
  
card: [
  {
    icon: MapPin,
    title: "Reach Customers Searching in Gettysburg",
    desc: [
      "Before they buy, they‘re looking for a local business. Google is often the first place people go when they‘re searching for a local business, comparing options in the area, or doing research before they make a decision. You can rank for these searches with a well-optimized website.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Build Stronger Local Search Visibility",
    desc: [
      "Local Visibility Is A Lot Of Things You can’t simply insert a city name into a page and hope for the best. Your website should contain service relevant information, signals to establish location, valuable content, solid technical platform, and ongoing local optimization. Geekonomy combines all of these factors for a more powerful Gettysburg local search presence.",
    ],
  },
  {
    icon: Target,
    title: "Turn Search Traffic Into Qualified Leads",
    desc: [
      "SEO should be about more than rankings. By focusing on searches that are relevant to your services and customer intention, we can help bring in visitors that are more inclined to call, inquire, book or buy.",
    ],
  },
],
};

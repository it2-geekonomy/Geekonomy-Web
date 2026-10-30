import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  TrendingUp,
  Globe,
  MapPin,
  Target,
  BarChart3,
} from "lucide-react";

export const Measure : IconCardLayout = {
  label: "Measure",
  heading: "Measure the Results of Your SEO Campaign",
  intro: [
    "When measuring the success of your SEO campaign you should not depend on one position, but take other relevant data into consideration. Always look at several indicators of data so you know how your website is actually doing and how to improve it.",
  ],

  card: [
  {
    icon: TrendingUp,
    title: "Organic Rankings",
    desc: [
      "Track the ranking of your important pages and targeted search terms over time to spot changes in your search visibility.",
    ],
  },
  {
    icon: Globe,
    title: "Website Traffic",
    desc: [
      "In the Organic Traffic section, assess if your more targeted visitors are finding and using your site through search.",
    ],
  },
  {
    icon: MapPin,
    title: "Local Search Visibility",
    desc: [
      "Check that your business shows up in the local searches that are most relevant to you and on Google Maps.",
    ],
  },
  {
    icon: Target,
    title: "Leads and Conversions",
    desc: [
      "Track occurrences of: contact forms filled out, call, request for consultation, and other valuable conversions through organic channels.",
    ],
  },
  {
    icon: BarChart3,
    title: "Google Business Profile Performance",
    desc: [
      "Provide profile interactions, searches, website visits, calls, and other obtainable data that show customer behavior with your local business presence.",
    ],
  },
],
};
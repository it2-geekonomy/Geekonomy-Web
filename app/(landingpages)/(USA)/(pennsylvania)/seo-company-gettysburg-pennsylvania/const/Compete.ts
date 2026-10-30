import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Users,
  FileText,
  Link,
} from "lucide-react";

export const Compete: IconCardLayout = {
  label: "Compete With Business",
  heading: "Compete With Businesses Across Gettysburg and Adams County",
  intro: [
    "Connecting with customers in Gettysburg goes beyond just optimizing your website for a specific location. You might be competing with other Gettysburg-based businesses for customers in neighboring towns and in Adams County, so a broad local search strategy will get you better results in the future.",
  ],
  
  
card: [
  {
    icon: Users,
    title: "Understand Your Local Competition",
    desc: [
      "Competitor Analysis We evaluate the online competitors for your industry and determine: the service they promote, the keywords they are targeting, how their website is built and where they have created search authority. This allows us to highlight the gaps and opportunities your business can take advantage of online.",
    ],
  },
  {
    icon: MapPin,
    title: "Target Location-Based Search Opportunities",
    desc: [
      "Our service allows potential customers to search by different combinations of business type, service and location. We build pages and content that effectively match these variations in a natural way, bringing your business to customers across the spectrum of buying intent in Gettysburg and nearby communities.",
    ],
  },
  {
    icon: FileText,
    title: "Create Content With Local Relevance",
    desc: [
      "Generic content often does not carry sufficient local value to differentiate it. What we do: We develop relevant content to the services, needs, and search behavior of those in the Gettysburg area so that your website can better showcase the local authority you have.",
    ],
  },
  {
    icon: Link,
    title: "Build Authority Beyond Your Website",
    desc: [
      "Presence in your own backyard This could be on your website, relevant business directories, local references, networks you have in your industry and strong backlinks to your website. This all sends additional signals of reputation and credibility in your locality.",
    ],
  },
],

};

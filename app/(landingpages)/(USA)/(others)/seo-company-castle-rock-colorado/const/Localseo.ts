import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  Building2,
  FileText,
} from "lucide-react";

export const LocalSeo: IconCardLayout = {
  label: "Local SEO",
  heading: "Local SEO Strategies Built Around Castle Rock Customers",
  intro: [
    "Castle Rock is full of businesses that deliver to and serve our residents, families, property owners and businesses in our County. To get your brand in front of them online, you need a local SEO marketing strategy that matches how your target customers are searching. Geekonomy builds local content and search rankings around the services and locations that matter most.",
  ],

  bottom: [
    "By creating a customized local approach, Geekonomy allows your company to develop a higher level of engagement with Castle Rock consumers, increase your visibility online, and generate more leads.",
  ],

card: [
  {
    icon: MapPin,
    title: "Optimize for Location-Based Search Queries",
    desc: [
      "People commonly search for services by adding a city, neighborhood, or local landmark to their search. We’re able to determine what location-based keywords are related to your business and include them strategically within service pages and on-site content, titles and meta data on your website so search engines can contextualize your location.",
    ],
  },
  {
    icon: Building2,
    title: "Strengthen Your Presence in Local Search Results",
    desc: [
      "Full Google Business Profile, uniform business information, pertinent customer feedback, and helpful website content all work together to enhance your visibility in local searches. We assist companies in finding prospects for all these aspects and make it simple for your audiences to locate your address, contact information, and services.",
    ],
  },
  {
    icon: FileText,
    title: "Create Relevant Content for Castle Rock and Douglas County",
    desc: [
      "Content local to where your customers are Local content is about serving the communities where your customers are located. If your customers are in Downtown Castle Rock, The Meadows, Founders Village, or other areas of Douglas County, service content that genuinely helps answer their questions about how your business helps serve their needs. This isn’t about putting up pages that copycat the location name.",
    ],
  },
],
};
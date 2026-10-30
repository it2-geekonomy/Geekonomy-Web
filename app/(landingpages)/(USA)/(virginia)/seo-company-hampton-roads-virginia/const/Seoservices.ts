import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  FileText,
  Settings,
  Search,
  Link,
  BarChart3
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "Comprehensive SEO Services in Hampton Roads, Virginia",
  intro: [
    "Keywords alone won’t make your business competitive. In an effective SEO strategy, technical health of your website, creating relevant content, improving local visibility and continuous performance analysis are as important. Geekonomy customises SEO packages for businesses in Hampton Roads that increases search visibility and drives the right audience to your website so you will have more enquiries.",
    "No matter if you target prospects and clients in Norfolk, Virginia Beach, Chesapeake, or Newport News, our methodology centers on identifying website enhancements and search opportunities that fit your business type, industry, and audience.",
  ],

  bottom: [
    "Consolidating these services enables Geekonomy to implement an SEO campaign tailored to your website’s requirements for long-term organic growth within your broader market."
  ],

  card: [
    {
      icon: MapPin,
      title: "Local SEO Services",
      desc: [
        "Local Search Engine Optimization (SEO) Local SEO is intended to rank your business higher in search results for consumers who are close to you and searching specifically for what you have to offer. Our local SEO efforts consist of location-based keyword research, Google Business Profile (if applicable) optimization,  local landing pages,  data consistency, and local citations.",
      ],
    },
    {
      icon: Settings,
      title: "Technical SEO",
      desc: [
        "Technical SEO remedies issues with your website that prevent search engines from discovering, crawling, indexing, and comprehending your pages.  We might work on your site architecture, XML sitemaps, canonical tags, mobile usability, page speed, and Core Web Vitals.  Eliminating these technical issues will give your SEO work and content a stronger footing to build on.",
      ],
    },
    {
      icon: FileText,
      title: "On-Page SEO and Content Optimization",
      desc: [
        "Communicate what your product or service is – exactly. Tell your customers who your product is for, and how your product can meet your customers’ needs. On-page SEO includes work on title tags, meta descriptions,  heading tags, internal links, page content, etc. We work to match search intent and semantic relevance,  so that each page of your site does not duplicate keywords.",
      ],
    },
    {
      icon: Search,
      title: "Keyword Research and Competitor Analysis",
      desc: [
        "This can tell you what searches your potential customers are making when they are looking for you,  doing comparison shopping or researching a solution to a problem. We analyze search intent,  commercial intent of keywords and search volume,  as well as competition,  for keywords and we construct opportunities for your website based on them. Competitors’ keywords are also analyzed.",
      ],
    },
    {
      icon: Link,
      title: "Link Building and Website Authority",
      desc: [
        "Develop backlinks that matter Backlinks are the way search engines learn about your content and see how sites relate to one another. Our team works within this system by hunting for genuine outreach, providing relevant editorial channels, and making content valuable enough to deserve attention. We’re interested in earning relevant links and establishing authority.",
      ],
    },
    {
      icon: BarChart3,
      title: "SEO Reporting and Performance Tracking",
      desc: [
        "When measuring SEO performance, keyword positions alone don’t mean very much. We track the available analytics and search performance data to report on organic clicks, impression data, relevant landing-page visits, leads, and conversions. We can then report regularly on what’s working, what’s underperforming, and what activity should be up next.",
      ],
    },
  ],
};
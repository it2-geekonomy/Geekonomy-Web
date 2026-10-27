import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  BookOpen,
  FileText,
  Settings,
  Search,
  Link,
  Smartphone
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "Complete SEO Services for Sustainable Business Growth",
  intro: [
    "To rank well in organic search, all these elements have to come together in the right way – regularly. Geekonomy can provide a broad SEO strategy that will help your website be more useful, more discoverable and set you up to keep getting better.",
    "Our SEO work is designed to optimize what search engines and your potential customers pay attention to, enabling your website to effectively convey the message you want to, while improving the findability of your key pages.",
  ],

card: [
  {
    icon: FileText,
    title: "On-Page SEO and Content Optimization",
    desc: [
      "On-Page SEO Your site’s structure informs search engines about who you are and how relevant you are for prospective customers. We optimize the page titles and meta descriptions, headings, internal links, and the website copy while ensuring a seamless reading experience.",
      "We look for chances to enhance your content, address customers’ questions and present information about your products and services. We help to make a website that’s useful for visitors and relevant to the search intent.",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO Audits",
    desc: [
      "Technical SEO Technical issues may impact the crawling, and indexing of your website by search engines, and also how they understand your site. Our technical SEO audit looks at issues like indexing, crawlability, broken links, redirects, duplicate content, XML sitemaps and structured data when relevant.",
      "We can assist you to improve on this by reviewing and implementing recommendations to ensure your website is optimised for both visitors and search engines to understand. This ensures your website is accessible and easily optimised.",
    ],
  },
  {
    icon: Search,
    title: "Keyword Research and Competitor Analysis",
    desc: [
      "Great Search Engine Optimization Begins with understanding what your prospects are searching for and how the top sites are meeting their needs. We research possible keywords, examine search engine intent, and identify content gaps that you can take advantage of.",
      "A competitor analysis can show you where there is a gap in your website, your local area and your service coverage. It allows you to have a practical and achievable plan and not just to rank for certain keywords.",
    ],
  },
  {
    icon: Smartphone,
    title: "Website Speed and Mobile Optimization",
    desc: [
      "A mobile-friendly, fast website improves the ability for visitors to browse your products and get in touch. Our analysis will highlight any technical errors in relation to page speed, mobile compatibility, optimized images and other areas to help the overall experience.",
    ],
  },
  {
    icon: BookOpen,
    title: "Content Marketing and SEO Copywriting",
    desc: [
      "Content that engages answers questions, demonstrates authority and levels up traffic at different parts of the purchase process. We generate content ideas based on related services, informational searches, and questions.",
      "Whether it is on a service page or an education article, the goal is to give value to help establish credibility and value to your website for the overall search strategy.",
    ],
  },
  {
    icon: Link,
    title: "Ethical Link Building and Website Authority",
    desc: [
      "Links from relevant, trustworthy websites help search engines find out what industry your website belongs to. We invest in sustainable strategies to earn links to you from relevant content, trade relationships and authentic opportunities.",
      "When integrated in a coordinated marketing plan, the services offered by Geekonomy create a greater search presence and a website that provides for the future of a company’s marketing plan.",
    ],
  },
],
};
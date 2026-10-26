import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  MapPin,
  BookOpen,
  Settings,
  FileText,
  Link,
} from "lucide-react";

export const SeoServices: IconCardLayout = {
  label: "SEO Services",
  heading: "SEO Services Built for Redmond Businesses",
  intro: [
    "You have your own customers, your own competition and your own goals to grow your business. Geekonomy uses a layered approach integrating local seo, on page seo, technical seo, content seo and authority-building seo to build a unique seo campaign tailored to your business, not a cookiecutter checklist. Our aim is to make you more visible to important searches and enable more qualified prospects to discover you.",
  ],
  
card: [
  {
    icon: MapPin,
    title: "Local SEO",
    desc: [
      "We make sure that the visibility of your local search results is improved so that people searching for a service in their area in Redmond can find you more easily. This involves Google Business Profile optimization, local landing pages, citations, location signals, and other strategies to improve your rankings in local organic results and Google Map Packs.",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    desc: [
      "If someone‘s searching to buy directly from you, they shouldn‘t immediately have to go to your ‘homepage’ because that page is more focused on B2B than B2C. We tailor page titles, headings, content, internal links, URL structure and on-page elements according to consumer search intent.",
    ],
  },
  {
    icon: Settings,
    title: "Technical SEO",
    desc: [
      "Technical issues would otherwise hinder high quality pages from ranking well. Geekonomy assesses your website‘s crawlability, indexability, architecture, experience, page speed, and other technical aspects to help lay a solid foundation for your organic growth.",
    ],
  },
  {
    icon: BookOpen,
    title: "SEO Content Strategy",
    desc: [
      "Content is built around questions, services, and topics that are important to your prospective customers. Whether it’s service pages, location-focused content, or learning resources, our approach helps build topical relevance while providing valuable information to prospective customers along their search process.",
    ],
  },
  {
    icon: Link,
    title: "Link Building & Authority",
    desc: [
      "A website also needs authority. We create targeted link-building and authority plans that help to drive profile strength and build authority for your website to help you rank for harder keywords without unnatural links or spam.",
    ],
  },
],

};
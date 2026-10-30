import { IconCardLayout } from "@/lib/constants/Landingpagetypes";
import {
  Target,
  MessageSquare,
  FileText,
} from "lucide-react";

export const Difference : IconCardLayout = {
  label: "Difference",
  heading: "What Makes Our SEO Approach Different?",
  intro: [
    "How to Choose the Right Search Engine Optimization Partner for Your Business Not all rankings are equal. Your business requires an optimization strategy that accurately reflects your services, your visitors, your competition and your real, achievable goals. Geekonomy specializes in authentic optimization, relevant content and traceable results for Castle Rock businesses to establish an online brand and drive traffic.",
  ],
card: [
  {
    icon: Target,
    title: "Customized Strategies Instead of Generic SEO Packages",
    desc: [
      "Everyone has a different obstacle in their search ranking. When we do our SEO work for you, we factor in the performance of your website, your industry, your markets and your competitors to make those recommendations. That way we’re not using the same solution for every business – we know what matters.",
    ],
  },
  {
    icon: MessageSquare,
    title: "Clear Communication and Actionable Reporting",
    desc: [
      "Your SEO campaign should not be complicated. We only track what counts, report transparently and give you insight and guidance on how your site is performing and where your efforts should go. You have the visibility you need to make the right decisions as your campaign unfolds.",
    ],
  },
  {
    icon: FileText,
    title: "Content and Optimization Built Around Castle Rock Searchers",
    desc: [
      "Ranking well means speaking to the people actually searching for you. We build content and on-page optimization around the terms Castle Rock customers use, the questions they ask and the neighborhoods you serve. Every page, heading and piece of copy is written to be useful to real visitors first, which also gives search engines clear signals about what your business offers and who it’s for.",
    ],
  },
],
};
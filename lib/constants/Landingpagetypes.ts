import { LucideIcon } from "lucide-react";

/* ---------- Hero ---------- */
export interface HeroBadge {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  position: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  label: string;
  headingMain: string;
  headingHighlight: string;
  paragraphs: string[]; // use **double asterisks** for bold
  buttonText: string;
  image: string;
  imageAlt: string;
  aspect?: string;
  badges: HeroBadge[];
  stats: HeroStat[];
  bannerText: string;
  keywords: string[];
}

export interface HeroProps {
  content: HeroContent;
}


/* ---------- CTA ---------- */
export interface CTAContent {
  heading: string;
  paragraphs: string[];
  buttonText: string;
}

export interface CTAProps {
  content: CTAContent;
}


/* ---------- CTA button ---------- */
export interface CTAButtonProps {
  text: string;
  href?: string;
}


/* ---------- FAQ ---------- */
export interface FAQItem {
  q: string;
  a: string[];
}

export interface FAQContent {
  label: string;
  heading: string;
  intro?: string[];
  faqs: FAQItem[];
}

export interface FAQProps {
  content: FAQContent;
}


/* ---------- Icon cards ---------- */
export interface CardContent {
  icon: LucideIcon;
  title: string;
  desc: string | string[];
}

export interface CTACard {
  title: string;
  description: string;
  buttonText: string;
}

export interface IconCardLayout {
  label: string;
  heading: string;
  intro?: string[];
  card: CardContent[];
  bottom?: string[];
  cta?: CTACard;
}

export interface SectionProps {
  content: IconCardLayout;
}


/* ---------- Image card ---------- */
export interface CardItem {
  image: string;
  title: string;
  desc: string | string[];
}

export interface ImageCardContent {
  label: string;
  heading: string;
  intro: string[];
  bottom?: string[];
  items: CardItem[];
  columns?: 3 | 4;
}

export const gridCols = {
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;

export interface ImageCardProps {
  content: ImageCardContent;
}


/* ---------- Image content ---------- */
export interface ImageContentList {
  label: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

export interface ImageContentProps {
  content: ImageContentList;
}


/* ---------- Serving Nearby ---------- */
export interface ServingNearbyContent {
  label: string;
  heading: string;
  intro: string[];
  image: string;
  imageAlt: string;
  areas: string[];
  bottom?: string[];
}

export interface ServingNearbyProps {
  content: ServingNearbyContent;
}

/* ---------- Step cards ---------- */
export interface ProcessStep {
  n: string | number;
  title: string;
  desc: string[];
}

export interface OurProcessContent {
  label: string;
  heading: string;
  intro: string[];
  bottom?: string[];
  steps: ProcessStep[];
}

export interface OurProcessProps {
  content: OurProcessContent;
}


/* ---------- Text content ---------- */
export interface TextSectionContent {
  label: string;
  heading: string;
  paragraphs: string[];
}

export interface TextSectionProps {
  content: TextSectionContent;
}
export const NAVIGATION_ITEMS = [
  { label: "HOME", href: "/", isActive: false },
  { label: "WHAT WE DO", href: "/what-we-do", isActive: false },
  { label: "HOW WE WORK", href: "/how-we-work", isActive: false },
  { label: "PROOF", href: "/proof", isActive: false },
  { label: "ABOUT", href: "/about", isActive: false },
  { label: "CONTACT", href: "/contact", isActive: false },
] as const;

export interface ProcessPhase {
  number: string;
  name: string;
  keyQuestion: string;
}

export const PROCESS_PHASES: readonly ProcessPhase[] = [
  {
    number: "01",
    name: "Diagnosis",
    keyQuestion: "Where does your business actually stand today vs. where you think it stands?",
  },
  {
    number: "02",
    name: "Definition",
    keyQuestion: "Where are you trying to go, and is that destination realistic with current resources?",
  },
  {
    number: "03",
    name: "Design",
    keyQuestion: "What systems need to be built to bridge the gap between today and tomorrow?",
  },
  {
    number: "04",
    name: "Deployment",
    keyQuestion: "How do we execute with precision while maintaining agility for change?",
  },
] as const;

export interface Service {
  number: string;
  name: string;
  description: string;
}

export const SERVICES: readonly Service[] = [
  {
    number: "01",
    name: "Brand Foundry",
    description: "We help businesses define how they should be seen, understood and remembered before a single design decision is made.",
  },
  {
    number: "02",
    name: "Code Craft",
    description: "We design and build websites, applications and custom systems engineered for performance, scalability and longevity",
  },
  {
    number: "03",
    name: "Digi 360",
    description: "We create focused growth strategies that prioritise meaningful outcomes over vanity metrics",
  },
] as const;
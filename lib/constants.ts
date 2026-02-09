export const NAVIGATION_ITEMS = [
  { label: "HOME", href: "/", isActive: false },
  { label: "WHAT WE DO", href: "/what-we-do", isActive: false },
  { label: "HOW WE WORK", href: "/how-we-work", isActive: false },
  { label: "SUCCESS LAB", href: "/proof", isActive: false },
  { label: "ABOUT", href: "/about", isActive: false },
  { label: "CONTACT", href: "/contact", isActive: false },
] as const;

export const FOOTER_NAV_ITEMS = [
  { label: "INDUSTRIES", href: "/industries" },
  { label: "OUR WORK", href: "/our-work" },
  { label: "ABOUT GEEKONOMY", href: "/about" },
  { label: "CAREER", href: "/career" },
  { label: "BLOGS", href: "/blogs" },
  { label: "CONTACT US", href: "/contact" },
] as const;

export const ADDRESS = {
  lines: [
    "No. 1357, Ground Floor, 9th Cross, ITI Layout,JP Nagar 1st Phase, Bengaluru, Karnataka - 560 078",
  ],
  mapUrl:
    "https://www.google.com/maps?q=No.+1357,+Ground+Floor,+9th+Cross,+ITI+Layout,+JP+Nagar+1st+Phase,+Bengaluru,+Karnataka+560078&output=embed",
};
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

export const HEADING_TEXT =
  "Over the years, Geekonomy has worked across industries from real estate and manufacturing to education, automotive and enterprise services";

export const CLIENTS = [
  {
    name: "DivyaSree",
    logo: "/IndustryServicesImages/divyasreelogo.png",
    image: "/IndustryServicesImages/IS1.webp",
    width: 180,
    height: 100,
  },
  {
    name: "Musashi",
    logo: "/IndustryServicesImages/mushashilogo.png",
    image: "/IndustryServicesImages/IS2.webp",
    width: 130,
    height: 50,
  },
  {
    name: "Hindustan Power",
    logo: "/IndustryServicesImages/hindusthanlogo.png",
    image: "/IndustryServicesImages/IS3.webp",
    width: 240,
    height: 100,
  },
  {
    name: "VST Group",
    logo: "/IndustryServicesImages/VSTlogo.png",
    image: "/IndustryServicesImages/IS4.webp",
    width: 200,
    height: 140,
  },
];

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

export interface CoreCapability {
  number: string;
  title: string;
  description: string;
  includes: string[];
}

export const CORE_CAPABILITIES: readonly CoreCapability[] = [
  {
    number: "01",
    title: "Strategy & Direction",
    description: "Every engagement begins with understanding the business and its direction. We help define priorities, clarify positioning and map the path forward ensuring every effort serves a larger purpose.",
    includes: [
      "Business and digital strategy",
      "Brand positioning and narrative",
      "Growth planning and system mapping",
    ],
  },
  {
    number: "02",
    title: "Brand & Experience",
    description: "Brands are built through consistency and clarity. We develop brand frameworks that guide how businesses present themselves across platforms, ensuring every touchpoint feels intentional and aligned.",
    includes: [
      "Brand identity and messaging",
      "Experience and interface design",
      "Digital presence development",
    ],
  },
  {
    number: "03",
    title: "Technology & Platforms",
    description: "Technology enables scale when it is built with purpose. We develop platforms and tools that support operations, efficiency, and adaptability as businesses grow.",
    includes: [
      "Websites and digital platforms",
      "Custom applications and integrations",
      "Scalable system architecture",
    ],
  },
  {
    number: "04",
    title: "Marketing & Momentum",
    description: "Sustained visibility comes from structured effort. We create marketing frameworks that support ongoing engagement, demand, and momentum - built to perform consistently over time.",
    includes: [
      "Marketing strategy and execution",
      "Content and performance marketing",
      "SEO and paid media systems",
    ],
  },
] as const;

export interface GrowthSystemPhase {
  number: string;
  name: string;
}

export const GROWTH_SYSTEM_PHASES: readonly GrowthSystemPhase[] = [
  { number: "STEP 01", name: "Clear brand positioning and digital identity" },
  { number: "STEP 02", name: "Technology platforms that support operations and scale" },
  { number: "STEP 03", name: "Marketing systems that create consistency and demand" },
  { number: "STEP 04", name: "Processes that bring clarity and reduce friction" },
  { number: "STEP 05", name: "Each part is built to support the whole." },
] as const;

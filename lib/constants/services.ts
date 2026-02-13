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

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

export interface HowWeWorkPhase {
  number: string;
  name: string;
  description: string;
  bullets?: string[];
  conclusion?: string;
}

export const HOW_WE_WORK_PHASES: readonly HowWeWorkPhase[] = [
  {
    number: "01",
    name: "Communication should create focus, not noise.",
    description: "Effective collaboration relies on predictable communication. Clients work with defined points of contact, structured updates and purposeful interactions rather than constant noise. Meetings are held with discussed intent, documentation is shared across every stakeholder and expectations remain visible to you throughout the engagement. This keeps projects calm and focused, even when complexity increases.",
  },
  {
    number: "02",
    name: "Delivery is never the finish line.",
    description: "Geekonomy stays involved where value continues, for example, supporting evolution, optimisation and future initiatives whenever you need it. Many of our relationships extend across multiple phases of a business's journey. We believe, growth rarely happens in a single step, so we plan accordingly.",
  },
  {
    number: "03",
    name: "Alignment matters on both sides.",
    description: "We work best with businesses that:",
    bullets: [
      "value thoughtful decision-making",
      "respect structured processes",
      "see digital investments as long-term assets",
    ],
    conclusion: "This alignment allows both sides to focus on meaningful outcomes rather than constant recalibration.",
  },
] as const;

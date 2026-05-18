import { getSchemaBaseUrl, orgId } from "./constants";

const OG = (path: string) => `${getSchemaBaseUrl()}${path}`;

export function buildHowWeWorkJsonLd() {
  const base = getSchemaBaseUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${base}/how-we-work#webpage`,
        url: `${base}/how-we-work`,
        name: "How We Work - Geekonomy Process",
        description:
          "Our 4-phase process: Diagnosis, Definition, Design, and Deployment.",
        publisher: { "@type": "Organization", "@id": orgId(base) },
      },
      {
        "@type": "HowTo",
        "@id": `${base}/how-we-work#process`,
        name: "The Geekonomy 4-Phase Process",
        description:
          "Our strategic approach to building growth systems with clarity and precision.",
        image: {
          "@type": "ImageObject",
          url: OG("/assets/og-home.jpg"),
        },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Phase 01: Diagnosis",
            text: "We conduct a deep dive into your business to understand your current state vs. where you think you stand. Key Question: Where does your business actually stand today vs. where you think it stands?",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Phase 02: Definition",
            text: "We clarify your destination and validate if it's realistic with current resources. Key Question: Where are you trying to go, and is that destination realistic with current resources?",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Phase 03: Design",
            text: "We design the systems needed to bridge the gap between today and tomorrow. Key Question: What systems need to be built to bridge the gap between today and tomorrow?",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Phase 04: Deployment",
            text: "We execute with precision while maintaining agility for change. Key Question: How do we execute with precision while maintaining agility for change?",
          },
        ],
      },
    ],
  };
}

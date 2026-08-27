import { TermsSection } from "./TermsData";

export const termsSections4: TermsSection[] = [
  {
    id: "taxes",
    title: "16. Taxes",
    paragraphs: [
      "Unless explicitly stated otherwise, fees quoted by Geekonomy may not include applicable taxes, duties, levies, or government charges.",
      "Clients are responsible for applicable taxes associated with their purchase of services, except taxes imposed on Geekonomy's net income where required by law.",
    ],
  },
  {
    id: "confidentiality",
    title: "17. Confidentiality",
    paragraphs: [
      "Each party may receive confidential information belonging to the other party during a business relationship.",
      "Each party agrees to use reasonable measures to protect confidential information and not disclose it except:",
    ],
    list: [
      "To authorized personnel or service providers who need the information",
      "Where required by law",
      "Where necessary to perform the applicable agreement",
      "With the other party's permission",
    ],
    subsections: [
      {
        paragraphs: [
          "Where a separate confidentiality or non-disclosure agreement exists, that agreement will govern confidential information to the extent of any conflict.",
        ],
      },
    ],
  },
  {
    id: "personal-information-privacy",
    title: "18. Personal Information and Privacy",
    paragraphs: [
      "Geekonomy may collect and process personal information when you use our website or services.",
      "Our handling of personal information is described in our Privacy Policy.",
      "By using the website, you acknowledge that you have reviewed our Privacy Policy.",
      "Where Geekonomy processes personal data on behalf of a client, additional contractual data-processing terms may apply.",
    ],
  },
  {
    id: "security",
    title: "19. Security",
    paragraphs: [
      "We take reasonable measures to maintain the security and availability of our website and systems.",
      "However, no online service can guarantee absolute security.",
      "You are responsible for maintaining the confidentiality of credentials or access information provided to you and for notifying us if you believe your account or credentials have been compromised.",
    ],
  },
  {
    id: "website-availability",
    title: "20. Website Availability",
    paragraphs: [
      "We aim to keep the website available and functioning properly but do not guarantee uninterrupted or error-free availability.",
      "The website may occasionally be unavailable because of:",
    ],
    list: [
      "Maintenance",
      "Updates",
      "Technical problems",
      "Hosting issues",
      "Security incidents",
      "Internet or network failures",
      "Third-party service interruptions",
      "Events beyond our reasonable control",
    ],
    subsections: [
      {
        paragraphs: [
          "We may modify, suspend, or discontinue any portion of the website without prior notice where reasonably necessary.",
        ],
      },
    ],
  },
];

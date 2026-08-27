import type { PrivacySection } from "./PrivacyPolicyTypes";

export const privacySections2: PrivacySection[] = [
  {
    id: "cookies",
    title: "6. Cookies and Similar Technologies",
    paragraphs: [
      "Geekonomy may use cookies, pixels, tags, local storage, and similar technologies.",
      "These technologies may be used for:",
    ],
    list: [
      "Essential website functionality",
      "Security",
      "Website performance",
      "Analytics",
      "Remembering preferences",
      "Marketing attribution",
      "Advertising",
      "Measuring campaign performance",
    ],
    subsections: [
      {
        title: "Essential Technologies",
        paragraphs: [
          "Some technologies may be necessary for the website to function correctly.",
        ],
      },
      {
        title: "Analytics and Marketing Technologies",
        paragraphs: [
          "Where legally required, we will obtain your consent before using non-essential cookies or similar tracking technologies.",
          "You may manage cookies through our cookie preference mechanism, where available, or through your browser settings.",
          "Disabling certain cookies may affect website functionality.",
        ],
      },
    ],
  },
  {
    id: "analytics",
    title: "7. Analytics",
    paragraphs: [
      "We may use analytics services to understand how visitors use our website and improve our website, content, services, and marketing.",
      "Analytics technologies may collect information such as:",
    ],
    list: [
      "IP address",
      "Device information",
      "Browser information",
      "Pages visited",
      "Referral information",
      "Website interactions",
      "Approximate location",
      "Cookie or device identifiers",
    ],
    subsections: [
      {
        paragraphs: [
          "Geekonomy will identify the specific analytics providers used on the website in its cookie notice or applicable vendor disclosure.",
        ],
      },
    ],
  },
  {
    id: "advertising-remarketing",
    title: "8. Advertising and Remarketing",
    paragraphs: [
      "Geekonomy may use online advertising and remarketing technologies to promote its services and measure advertising performance.",
      "These technologies may allow advertising providers to recognize a browser or device and provide advertisements based on previous interactions with websites or advertising campaigns.",
      "Depending on the technology used, information may be processed by third-party advertising platforms.",
      "Where required by applicable law, we will obtain consent or provide an appropriate opt-out mechanism.",
    ],
  },
  {
    id: "how-we-share",
    title: "9. How We Share Personal Information",
    paragraphs: [
      "We may share personal information with trusted third parties when reasonably necessary to operate our business, provide services, or fulfill the purposes described in this Privacy Policy.",
      "These recipients may include:",
    ],
    list: [
      "Website hosting providers",
      "Cloud service providers",
      "CRM providers",
      "Email providers",
      "Analytics providers",
      "Advertising platforms",
      "Marketing platforms",
      "Payment providers",
      "IT and security providers",
      "Professional advisers",
      "Contractors and service providers",
      "Business partners",
      "Government authorities where legally required",
    ],
    subsections: [
      {
        paragraphs: [
          "We do not permit service providers to use personal information for unauthorized purposes.",
        ],
      },
    ],
  },
  {
    id: "selling-sharing",
    title: "10. Selling or Sharing Personal Information",
    paragraphs: [
      "Geekonomy does not intend to sell personal information for monetary consideration.",
      `However, privacy laws in certain jurisdictions may define "sale," "sharing," or targeted advertising more broadly than a conventional sale of information.`,
      `If Geekonomy's use of advertising, analytics, or similar technologies constitutes a "sale," "sharing," or targeted advertising activity under a law applicable to you, we will provide the rights and opt-out mechanisms required by that law.`,
      `Where applicable, California residents may see a "Your Privacy Choices" or "Do Not Sell or Share My Personal Information" option.`,
    ],
  },
];

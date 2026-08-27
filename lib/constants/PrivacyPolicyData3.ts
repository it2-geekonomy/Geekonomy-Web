import type { PrivacySection } from "./PrivacyPolicyTypes";

export const privacySections3: PrivacySection[] = [
  {
    id: "california-privacy-rights",
    title: "11. California Privacy Rights",
    paragraphs: [
      `This section applies to California residents to the extent Geekonomy is subject to the California Consumer Privacy Act, as amended by the California Privacy Rights Act ("CCPA/CPRA").`,
      "Depending on applicable law, California residents may have rights concerning their personal information, including the right to:",
    ],
    list: [
      "Know what personal information is collected",
      "Know how personal information is used",
      "Know how personal information is disclosed",
      "Request access to personal information",
      "Request correction of inaccurate information",
      "Request deletion of personal information",
      "Opt out of the sale or sharing of personal information, where applicable",
      "Opt out of certain targeted advertising activities",
      "Limit certain uses of sensitive personal information, where applicable",
      "Receive equal treatment when exercising applicable privacy rights",
    ],
    subsections: [
      {
        title: "Categories of Information",
        paragraphs: ["Depending on your interaction with Geekonomy, we may collect:"],
        list: [
          "Identifiers — such as name, email address, telephone number, IP address, and online identifiers",
          "Professional information — such as company name, job title, business information, and professional details",
          "Internet or electronic activity — such as pages visited, website interactions, browser information, and referring URLs",
          "Geolocation information — such as approximate location derived from technical information where applicable",
          "Commercial information — such as information about services requested or business interactions",
          "Inferences — information that may reasonably be derived from interactions with our website or marketing activities",
        ],
      },
      {
        title: "California Privacy Requests",
        paragraphs: ["Eligible California residents may submit a request by contacting:"],
        list: [
          "Email: [INSERT PRIVACY EMAIL]",
          "Privacy Request Form: [INSERT URL IF AVAILABLE]",
        ],
      },
      {
        paragraphs: [
          "We may need to verify your identity before fulfilling certain requests.",
          "We will respond within the timeframe required by applicable law.",
          "If you use an authorized agent, we may require evidence that the agent is authorized to act on your behalf.",
          "Geekonomy will not unlawfully discriminate against you for exercising privacy rights provided by applicable law.",
        ],
      },
    ],
  },
  {
    id: "other-us-state-rights",
    title: "12. Other U.S. State Privacy Rights",
    paragraphs: [
      "Privacy laws in several U.S. states provide residents with privacy rights.",
      "Depending on applicable law and whether Geekonomy meets the relevant legal thresholds, these rights may include:",
    ],
    list: [
      "Right to access",
      "Right to correct",
      "Right to delete",
      "Right to obtain a copy of certain information",
      "Right to opt out of targeted advertising",
      "Right to opt out of certain sales of personal data",
      "Right to opt out of certain profiling",
      "Right to appeal a privacy decision",
      "Other rights provided under applicable state law",
    ],
    subsections: [
      {
        paragraphs: [
          "The availability and scope of these rights vary by state.",
          "Geekonomy will comply with applicable U.S. state privacy laws that apply to our business and processing activities.",
        ],
      },
    ],
  },
  {
    id: "eu-eea-uk-rights",
    title: "13. EU/EEA and UK Privacy Rights",
    paragraphs: [
      "If GDPR, UK GDPR, or another applicable data protection law applies to you, you may have the right to:",
    ],
    list: [
      "Access your personal data",
      "Correct inaccurate personal data",
      "Request deletion",
      "Restrict processing",
      "Object to certain processing",
      "Receive certain personal data in a portable format",
      "Withdraw consent",
      "Object to direct marketing",
      "Obtain information about international transfers",
      "Receive information about automated decision-making where applicable",
      "Lodge a complaint with a competent supervisory authority",
    ],
    subsections: [
      {
        paragraphs: [
          "These rights are subject to applicable legal conditions and exceptions.",
        ],
      },
      {
        title: "Exercising Your Rights",
        paragraphs: ["To exercise your rights, contact:"],
        list: ["Privacy Email: [INSERT PRIVACY EMAIL]"],
      },
      {
        paragraphs: [
          "We may request information reasonably necessary to verify your identity and protect against unauthorized requests.",
          "We will respond within the timeframe required by applicable law.",
        ],
      },
    ],
  },
  {
    id: "right-to-object-marketing",
    title: "14. Right to Object to Marketing",
    paragraphs: [
      "Where applicable law gives you the right to object to direct marketing, you may do so at any time.",
      "You can unsubscribe from promotional emails using the unsubscribe link included in the communication or by contacting us.",
      "Even if you opt out of marketing communications, we may continue sending necessary transactional or service-related communications.",
    ],
  },
  {
    id: "international-transfers",
    title: "15. International Data Transfers",
    paragraphs: [
      "Geekonomy operates from India and may use service providers located in India, the United States, the EEA, the UK, or other countries.",
      "As a result, personal information may be transferred to and processed in countries outside your country of residence.",
      "Where applicable law requires safeguards for international transfers, we will use an appropriate lawful transfer mechanism, which may include:",
    ],
    list: [
      "An adequacy decision",
      "Standard Contractual Clauses",
      "Other legally recognized transfer mechanisms",
      "Additional safeguards where required",
    ],
    subsections: [
      {
        paragraphs: [
          "You may contact us for information about applicable safeguards.",
        ],
      },
    ],
  },
];

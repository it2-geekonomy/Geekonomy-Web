import type { PrivacySection } from "./PrivacyPolicyTypes";

export const privacySections1: PrivacySection[] = [
  {
    id: "about",
    title: "1. About Geekonomy",
    paragraphs: [
      "Geekonomy is a branding, technology, and digital marketing company based in Bengaluru, India.",
      "Geekonomy\nNo. 1357, Ground Floor, 9th Cross,\nITI Layout, JP Nagar 1st Phase,\nBengaluru, Karnataka 560078, India",
      "Website: [thegeekonomy.com](https://thegeekonomy.com)",
      "Privacy Contact: connect@thegeekonomy.com",
      "For personal information collected directly through our website and business interactions, Geekonomy may act as the data controller or equivalent responsible entity under applicable privacy laws.",
      "When we process personal information on behalf of a business client as part of providing contracted services, Geekonomy may act as a processor or service provider, while the client remains responsible for determining the purposes of processing.",
    ],
  },
  {
    id: "info-we-collect",
    title: "2. Information We Collect",
    paragraphs: [
      "We collect information that you provide directly, information automatically generated when you use our website, and information we may receive from legitimate third-party sources.",
    ],
    subsections: [
      {
        title: "2.1 Information You Provide",
        paragraphs: ["You may provide personal information when you:"],
        list: [
          "Submit a contact or inquiry form",
          "Request a consultation",
          "Request a proposal or estimate",
          "Subscribe to communications",
          "Contact us by email or telephone",
          "Engage Geekonomy for services",
          "Communicate with our team",
          "Apply for an employment opportunity",
          "Participate in a survey or other business activity",
        ],
      },
      {
        paragraphs: ["This information may include:"],
        list: [
          "Name",
          "Business email address",
          "Phone number",
          "Company name",
          "Job title",
          "Website URL",
          "Business location",
          "Services of interest",
          "Project requirements",
          "Marketing or business information you choose to provide",
          "Information contained in your communications with us",
          "Other information you voluntarily provide",
        ],
      },
      {
        paragraphs: [
          "Please do not provide sensitive personal information through our website unless specifically requested and necessary for a legitimate purpose.",
        ],
      },
      {
        title: "2.2 Information Collected Automatically",
        paragraphs: [
          "When you access our website, we may automatically collect certain technical and usage information, including:",
        ],
        list: [
          "IP address",
          "Browser type",
          "Device type",
          "Operating system",
          "Language preferences",
          "Screen resolution",
          "Approximate geographic location",
          "Pages viewed",
          "Links clicked",
          "Referring URLs",
          "Date and time of access",
          "Session information",
          "Website interaction information",
          "Cookie identifiers",
          "Advertising or analytics identifiers, where applicable",
        ],
      },
      {
        paragraphs: [
          "Some of this information may constitute personal data or personal information under applicable law.",
        ],
      },
    ],
  },
  {
    id: "info-from-third-parties",
    title: "3. Information From Third Parties",
    paragraphs: [
      "We may receive information about you from legitimate third-party sources, including:",
    ],
    list: [
      "Business partners",
      "Referral partners",
      "Public business directories",
      "Professional networking platforms",
      "Advertising platforms",
      "Analytics providers",
      "Lead-generation services",
      "Social media platforms",
      "Your organization or employer",
    ],
    subsections: [
      {
        paragraphs: [
          "We will use such information only for legitimate purposes and in accordance with applicable privacy laws.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "4. How We Use Personal Information",
    paragraphs: ["We may use personal information for the following purposes."],
    subsections: [
      {
        title: "Responding to You",
        paragraphs: ["We may use your information to:"],
        list: [
          "Respond to inquiries",
          "Answer questions",
          "Schedule consultations",
          "Discuss your requirements",
          "Prepare proposals",
          "Provide estimates",
          "Communicate about potential projects",
        ],
      },
      {
        title: "Providing Our Services",
        paragraphs: ["We may use information to:"],
        list: [
          "Deliver services",
          "Manage client relationships",
          "Communicate about projects",
          "Provide reports",
          "Provide support",
          "Manage contracts",
          "Maintain business records",
        ],
      },
      {
        title: "Website Operations",
        paragraphs: ["We may process information to:"],
        list: [
          "Operate our website",
          "Maintain website security",
          "Troubleshoot technical problems",
          "Improve website performance",
          "Analyze website usage",
          "Prevent fraud, abuse, or unauthorized activity",
        ],
      },
      {
        title: "Marketing and Advertising",
        paragraphs: ["Where permitted by law, we may use information to:"],
        list: [
          "Send marketing communications",
          "Promote our services",
          "Measure campaign performance",
          "Understand advertising effectiveness",
          "Build or manage advertising audiences",
          "Improve marketing campaigns",
          "Personalize marketing experiences",
        ],
      },
      {
        paragraphs: [
          "Where consent is required, we will obtain consent before carrying out the relevant processing.",
        ],
      },
      {
        title: "Legal and Business Purposes",
        paragraphs: ["We may process information to:"],
        list: [
          "Comply with applicable laws",
          "Respond to lawful requests",
          "Establish or defend legal claims",
          "Enforce agreements",
          "Protect our rights",
          "Protect users and clients",
          "Detect security incidents",
          "Prevent fraud",
          "Maintain financial and business records",
        ],
      },
    ],
  },
  {
    id: "legal-bases-eu-uk",
    title: "5. Legal Bases for Processing — EU/EEA and UK",
    paragraphs: [
      "If GDPR, UK GDPR, or another applicable data protection law applies to you, we process personal data only where we have an appropriate legal basis.",
      "Depending on the circumstances, our legal bases may include:",
    ],
    subsections: [
      {
        title: "Consent",
        paragraphs: [
          "We may process personal data when you have given us consent, including where required for certain cookies, marketing communications, or other optional processing.",
          "You may withdraw consent at any time. Withdrawal does not affect processing that occurred before withdrawal.",
        ],
      },
      {
        title: "Contract",
        paragraphs: [
          "We may process personal data when necessary to enter into or perform a contract with you or your organization.",
        ],
      },
      {
        title: "Legitimate Interests",
        paragraphs: [
          "We may process personal data where necessary for legitimate business interests, provided those interests do not override your rights and freedoms.",
          "These interests may include:",
        ],
        list: [
          "Managing business relationships",
          "Improving our services",
          "Securing our website",
          "Preventing fraud",
          "Conducting appropriate business marketing",
          "Operating and improving our business",
        ],
      },
      {
        title: "Legal Obligations",
        paragraphs: [
          "We may process personal data when necessary to comply with a legal or regulatory obligation.",
        ],
      },
      {
        title: "Protection of Vital Interests",
        paragraphs: [
          "In limited circumstances, we may process information where necessary to protect someone's vital interests.",
        ],
      },
    ],
  },
];

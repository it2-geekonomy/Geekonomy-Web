


export interface PrivacySubsection {
  title?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface PrivacySection {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: PrivacySubsection[];
}

export const privacyMeta = {
  effectiveDate: "August 25, 2026",
  lastUpdated: "August 25, 2026",
};


export const privacySections: PrivacySection[] = [
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
  {
    id: "data-retention",
    title: "16. Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy.",
      "The retention period may depend on:",
    ],
    list: [
      "The nature of the information",
      "The purpose for which it was collected",
      "Whether we have an ongoing business relationship",
      "Legal requirements",
      "Accounting requirements",
      "Dispute-resolution requirements",
      "Security and fraud-prevention needs",
    ],
    subsections: [
      {
        paragraphs: [
          "When information is no longer required, we may securely delete, anonymize, or otherwise dispose of it in accordance with applicable law.",
        ],
      },
    ],
  },
  {
    id: "data-security",
    title: "17. Data Security",
    paragraphs: [
      "We use reasonable technical and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.",
      "These measures may include:",
    ],
    list: [
      "Access controls",
      "Authentication mechanisms",
      "Secure communications",
      "System monitoring",
      "Security procedures",
      "Vendor security controls",
      "Employee and contractor access restrictions",
    ],
    subsections: [
      {
        paragraphs: [
          "However, no method of internet transmission or electronic storage is completely secure.",
          "Accordingly, we cannot guarantee absolute security.",
        ],
      },
    ],
  },
  {
    id: "data-breaches",
    title: "18. Data Breaches",
    paragraphs: [
      "If we become aware of a security incident involving personal information, we will investigate and take appropriate measures.",
      "Where applicable law requires notification to affected individuals, regulators, or other parties, we will provide notification within the required timeframe.",
    ],
  },
  {
    id: "third-party-websites",
    title: "19. Third-Party Websites",
    paragraphs: [
      "Our website may contain links to third-party websites, applications, social networks, or services.",
      "Third-party websites operate independently from Geekonomy and may have their own privacy policies.",
      "We are not responsible for the privacy practices, content, security, or policies of websites that we do not control.",
      "We encourage you to review the privacy policy of any third-party website before providing personal information.",
    ],
  },
  {
    id: "processed-for-clients",
    title: "20. Personal Information Processed for Clients",
    paragraphs: [
      "Geekonomy may process personal information on behalf of clients while providing services such as:",
    ],
    list: [
      "Website development",
      "Digital marketing",
      "SEO",
      "Advertising",
      "Analytics",
      "CRM implementation",
      "Technology services",
    ],
    subsections: [
      {
        paragraphs: [
          "Where Geekonomy acts as a processor or service provider, the relevant client may determine the purposes and means of processing.",
          "In those circumstances, privacy requests concerning information controlled by the client may need to be directed to that client.",
          "Geekonomy will provide reasonable assistance to clients concerning applicable privacy obligations as required by our contractual arrangements and applicable law.",
        ],
      },
    ],
  },
  {
    id: "service-providers-subprocessors",
    title: "21. Service Providers and Subprocessors",
    paragraphs: [
      "We may use third-party service providers to help operate our business.",
      "These providers may support:",
    ],
    list: [
      "Hosting",
      "Cloud infrastructure",
      "Analytics",
      "CRM",
      "Email",
      "Advertising",
      "Marketing automation",
      "Customer support",
      "Security",
      "Payment processing",
      "Project management",
      "Communications",
    ],
    subsections: [
      {
        paragraphs: [
          "We take reasonable steps to ensure that service providers handling personal information on our behalf provide appropriate privacy and security protections.",
        ],
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "22. Children's Privacy",
    paragraphs: [
      "Our website and services are intended primarily for businesses and adults.",
      "We do not knowingly collect personal information from children where such collection is prohibited by applicable law.",
      "If you believe a child has provided personal information to us, please contact us so that we can take appropriate action.",
    ],
  },
  {
    id: "automated-decision-making",
    title: "23. Automated Decision-Making and Profiling",
    paragraphs: [
      "Geekonomy may use analytics and marketing technologies to understand website usage and advertising performance.",
      "We do not intend to make decisions producing legal or similarly significant effects on individuals solely through automated processing based on information collected through this website.",
      "If our practices change, we will update this Privacy Policy and provide any disclosures and rights required by applicable law.",
    ],
  },
  {
    id: "do-not-track",
    title: "24. Do Not Track",
    paragraphs: [
      `Some browsers provide a "Do Not Track" setting.`,
      "Because there is no universally consistent standard for responding to all Do Not Track signals, our website may not respond to every such signal.",
      "Where applicable law requires recognition of a specific privacy preference signal, Geekonomy will implement the mechanism required by that law.",
    ],
  },
  {
    id: "global-privacy-control",
    title: "25. Global Privacy Control",
    paragraphs: [
      "Where required by applicable law, Geekonomy will recognize qualifying universal opt-out preference signals, such as Global Privacy Control, for applicable processing activities.",
      "The effect of such signals may depend on the laws applicable to you and the processing activities involved.",
    ],
  },
  {
    id: "your-responsibilities",
    title: "26. Your Responsibilities",
    paragraphs: [
      "When submitting personal information to Geekonomy, you should ensure that the information you provide is accurate and does not unlawfully contain another individual's personal information.",
      "If you provide information relating to another individual, you should ensure that you have the appropriate authority or lawful basis to provide that information to us.",
    ],
  },
  {
    id: "changes-to-policy",
    title: "27. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes to:",
    ],
    list: [
      "Our services",
      "Our website",
      "Our technology",
      "Our data-processing practices",
      "Third-party providers",
      "Applicable laws",
      "Business operations",
    ],
    subsections: [
      {
        paragraphs: [
          'When we make changes, we will update the "Last Updated" date at the top of this Privacy Policy.',
          "Where required by law, we may provide additional notice or obtain consent for material changes.",
        ],
      },
    ],
  },
  {
    id: "contact-us",
    title: "28. Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy, our privacy practices, or your personal information, please contact us.",
      "Geekonomy\nNo. 1357, Ground Floor, 9th Cross,\nITI Layout, JP Nagar 1st Phase,\nBengaluru, Karnataka 560078, India",
      "Privacy Email: connect@thegeekonomy.com",
      "Website: [thegeekonomy.com](https://thegeekonomy.com)",
      "For privacy requests, please include enough information for us to understand and process your request.",
    ],
  },
  {
    id: "applicable-notices",
    title: "29. Applicable Notices",
    paragraphs: [
      "Depending on the service or interaction, additional privacy notices may apply, including:",
    ],
    list: [
      "Cookie Policy",
      "Cookie consent preferences",
      "Terms of Service",
      "Client agreements",
      "Employment or recruitment privacy notices",
      "Other service-specific privacy notices",
    ],
    subsections: [
      {
        paragraphs: [
          "Where a specific notice applies, it should be read together with this Privacy Policy.",
        ],
      },
    ],
  },
  {
    id: "effective-date",
    title: "30. Effective Date",
    paragraphs: [
      "This Privacy Policy is effective from August 25, 2026.",
      "Last Updated: August 25, 2026",
    ],
  },
];
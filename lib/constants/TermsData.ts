
import { termsSections1 } from "./TermsData1";
import { termsSections2 } from "./TermsData2";
import { termsSections3 } from "./TermsData3";
import { termsSections4 } from "./TermsData4";
import { termsSections5 } from "./TermsData5";
import { termsSections6 } from "./TermsData6";
import { termsSections7 } from "./TermsData7";

export interface TermsSubsection {
  title?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface TermsSection {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: TermsSubsection[];
}

export const termsMeta = {
  effectiveDate: "August 25, 2026",
  lastUpdated: "August 25, 2026",
};

export const termsIntro: string[] = [
  `Welcome to Geekonomy. These Terms and Conditions ("Terms") govern your access to and use of thegeekonomy.com and any services, content, features, or resources provided by Geekonomy.`,
  `By accessing or using our website, submitting an inquiry, requesting a consultation, or engaging Geekonomy for services, you acknowledge that you have read, understood, and agree to these Terms.`,
  `If you do not agree with these Terms, please do not use our website or services.`,
];

export const termsSections: TermsSection[] = [
  ...termsSections1,
  ...termsSections2,
  ...termsSections3,
  ...termsSections4,
  ...termsSections5,
  ...termsSections6,
  ...termsSections7,
];
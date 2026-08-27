
import { privacySections1 } from "./PrivacyPolicyData1";
import { privacySections2 } from "./PrivacyPolicyData2";
import { privacySections3 } from "./PrivacyPolicyData3";
import { privacySections4 } from "./PrivacyPolicyData4";
import { privacySections5 } from "./PrivacyPolicyData5";
import { privacySections6 } from "./PrivacyPolicyData6";


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
  ...privacySections1,
  ...privacySections2,
  ...privacySections3,
  ...privacySections4,
  ...privacySections5,
  ...privacySections6,
];

export type CareerTeam =
  | "BRANDFOUNDRY"
  | "CODECRAFT"
  | "DIGI360"
  | "SALES"
  | "OPERATIONS";

export type CareerFilter = "ALL" | CareerTeam;

export interface CareerJob {
  id: string;
  title: string;
  team: CareerTeam;
  location: string;
  employmentType: string;
  experience: string;
  recruitmentId?: string;
  applicationUrl?: string;
}

export const CAREER_FILTERS: { id: CareerFilter; label: string }[] = [
  { id: "ALL", label: "ALL ROLES" },
  { id: "BRANDFOUNDRY", label: "BRANDFOUNDRY" },
  { id: "CODECRAFT", label: "CODECRAFT" },
  { id: "DIGI360", label: "DIGI360" },
  { id: "SALES", label: "SALES" },
  { id: "OPERATIONS", label: "OPERATIONS" },
];

export const CAREER_JOBS: CareerJob[] = [
  {
    id: "content-writer",
    title: "Content Writer",
    team: "DIGI360",
    location: "Bengaluru",
    employmentType: "Full-time",
    experience: "Write content people actually want to read!",
    recruitmentId: "13",
    applicationUrl:
      "https://people.geekonomy.in/recruitment/application-form?recruitmentId=13",
  },
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    team: "DIGI360",
    location: "Bengaluru",
    employmentType: "Full-time",
    experience: "Create scroll-stopping content and conversations!",
    recruitmentId: "12",
    applicationUrl:
      "https://people.geekonomy.in/recruitment/application-form?recruitmentId=12",
  },
  {
    id: "seo-strategist-intern",
    title: "SEO Strategist - Intern",
    team: "DIGI360",
    location: "Bengaluru",
    employmentType: "Internship",
    experience:
      "Learn how brands win visibility in the age of search and AI!",
    recruitmentId: "14",
    applicationUrl:
      "https://people.geekonomy.in/recruitment/application-form?recruitmentId=14",
  },
  {
    id: "sales-manager",
    title: "Sales Manager",
    team: "SALES",
    location: "Bengaluru",
    employmentType: "Full-time",
    experience:
      "Turn conversations into partnerships and opportunities into revenue!",
    recruitmentId: "9",
    applicationUrl:
      "https://people.geekonomy.in/recruitment/application-form?recruitmentId=9",
  },
  {
    id: "bdr-intern",
    title: "Business Development Representative Interns",
    team: "SALES",
    location: "Bengaluru",
    employmentType: "Internship",
    experience: "Learn sales by doing, not by watching!",
    recruitmentId: "10",
    applicationUrl:
      "https://people.geekonomy.in/recruitment/application-form?recruitmentId=10",
  },
];

export const CAREER_APPLICATION_POSITIONS: {
  value: string;
  label: string;
  recruitmentId?: string;
}[] = [
  { value: "", label: "Select a role" },
  ...CAREER_JOBS.map((job) => ({
    value: job.id,
    label: job.title,
    recruitmentId: job.recruitmentId,
  })),
  { value: "general", label: "General application" },
];

export const CAREER_SECTION_ORDER: CareerTeam[] = [
  "BRANDFOUNDRY",
  "CODECRAFT",
  "DIGI360",
  "SALES",
  "OPERATIONS",
];

/** Shown when a team has no active openings. */
export const CAREER_EMPTY_TEAM_COPY: Record<
  CareerTeam,
  { headline: string; body: string }
> = {
  BRANDFOUNDRY: {
    headline: "No brand roles open right now",
    body: "Our BrandFoundry studio is fully staffed for the current cycle. If you specialise in strategy, identity or visual systems, send your portfolio to hr@geekonomy.in — we review exceptional profiles for upcoming projects.",
  },
  CODECRAFT: {
    headline: "No engineering openings at the moment",
    body: "The CodeCraft team is focused on delivery across active builds. We are not hiring developers right now, but we welcome introductions from engineers who care about performance, maintainability and thoughtful product craft.",
  },
  DIGI360: {
    headline: "No marketing roles available currently",
    body: "Digi360 is not expanding headcount at this stage. When we open roles in growth strategy, performance marketing or analytics, they will appear here first. Check back or reach out if you would like to be considered for future opportunities.",
  },
  SALES: {
    headline: "No sales roles open right now",
    body: "Our business development team is at capacity. If you have a strong B2B track record in agency or consulting sales, you are welcome to share your profile for consideration when the next seat opens.",
  },
  OPERATIONS: {
    headline: "No operations roles at this time",
    body: "We do not have openings in operations, finance or internal systems today. As Geekonomy scales, roles that keep the studio running smoothly will be listed here — thank you for your interest in how we work behind the scenes.",
  },
};

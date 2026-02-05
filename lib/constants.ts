export const NAVIGATION_ITEMS = [
  { label: "HOME", href: "/", isActive: false },
  { label: "WHAT WE DO", href: "/what-we-do", isActive: false },
  { label: "HOW WE WORK", href: "/how-we-work", isActive: false },
  { label: "PROOF", href: "/proof", isActive: false },
  { label: "ABOUT", href: "/about", isActive: false },
  { label: "CONTACT", href: "/contact", isActive: false },
] as const;

export const FOOTER_NAV_ITEMS = [
  { label: "INDUSTRIES", href: "/industries" },
  { label: "OUR WORK", href: "/our-work" },
  { label: "ABOUT", href: "/about" },
  { label: "GEEKONOMY", href: "/geekonomy" },
  { label: "CAREER", href: "/career" },
  { label: "BLOGS", href: "/blogs" },
  { label: "CONTACT US", href: "/contact" },
] as const;

export const ADDRESS = {
  lines: [
    "No. 1357, Ground Floor, 9th Cross, ITI Layout,JP Nagar 1st Phase, Bengaluru, Karnataka - 560 078",
  ],
  mapUrl:
    "https://www.google.com/maps?q=No.+1357,+Ground+Floor,+9th+Cross,+ITI+Layout,+JP+Nagar+1st+Phase,+Bengaluru,+Karnataka+560078&output=embed",
};
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

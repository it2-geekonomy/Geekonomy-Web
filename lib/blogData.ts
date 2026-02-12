export interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  comments?: number;
  slug?: string;
  image: string;
  overlayColor: string; // "orange" or "gray"
}

export interface ComingSoonPost {
  id: string;
  category: string;
  title: string;
  year: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    category: "News",
    title: "Introducing the Ciridae",
    date: "8/9/25",
    image: "/blog-images/ciridae-intro.jpg",
    overlayColor: "orange",
  },
  {
    id: "2",
    category: "Case study",
    title: "Restoration Rebuttal Automation",
    date: "8/1/25",
    image: "/blog-images/restoration-automation.jpg",
    overlayColor: "orange",
  },
  {
    id: "3",
    category: "News",
    title: "The Future of Coding Is Orchestration",
    date: "7/31/25",
    comments: 23,
    image: "/blog-images/coding-orchestration.jpg",
    overlayColor: "gray",
  },
];

export const COMING_SOON_POSTS: ComingSoonPost[] = [
  {
    id: "cs1",
    category: "Case study",
    title: "Automating AR/AP with AI-Powered Workflows",
    year: "2026",
  },
  {
    id: "cs2",
    category: "Insights",
    title: "Evolving from Human-in-Loop to Human-in-Command",
    year: "2026",
  },
  {
    id: "cs3",
    category: "News",
    title: "Turning Data Into Decisions",
    year: "2026",
  },
  {
    id: "cs4",
    category: "Case study",
    title: "A New Engine for Roofing",
    year: "2026",
  },
  {
    id: "cs5",
    category: "News",
    title: "Cutting Claims Backlogs with AI",
    year: "2026",
  },
];

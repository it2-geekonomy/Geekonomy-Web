import { CaseStudy } from "../types";

interface ContentItem {
  type: string;
  text: string;
  className?: string;
}

export const contentToHTML = (contentArray: ContentItem[]): string => {
  return contentArray
    .map((item) => {
      switch (item.type) {
        case "heading":
          return `
            <div class="my-2 ">
              <h2 class="text-[clamp(1.3rem,1.5vw,2rem)] md:text-[clamp(1.35rem,3vw,2.2rem)]  font-medium ${item.className || ""}">
                ${item.text}
              </h2>
            </div>
          `;
        case "paragraph":
          return `
            <p class="leading-[1.3] text-justify text-[#FFFFFFB2] text-opacity-70 text-[clamp(1rem,1vw,1.5rem)] ${item.className || ""}">
              ${item.text}
            </p>
          `;
        case "list":
          return `
            <ul class="list-disc list-inside mb-4 ${item.className || ""}">
              ${item.text
                .split(";")
                .map((li) => `<li>${li.trim()}</li>`)
                .join("")}
            </ul>
          `;
        default:
          return "";
      }
    })
    .join("\n");
};

const VSTContent1 = [
  { type: "heading", text: "Client Overview", className: "text-white" },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "VST Group is one of South India’s most established automotive networks, representing some of the world’s most trusted automobile brands. With a strong legacy across retail, distribution, and logistics, the company wanted its digital presence to reflect the same trust, scale, and precision that define its offline reputation",
  },

  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "However, the earlier website lacked structure, visual harmony, and navigational clarity. The content was not being showcased effectively, leading to poor engagement and limited interaction.",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Geekonomy was brought in to redesign and rebuild the website from the scratch, creating a platform that felt modern, cohesive, and aligned with VST Group’s stature in the automotive industry.",
  },
];

const VSTContent2 = [
  { type: "heading", text: "The Transformation", className: "text-white" },
  {
    type: "paragraph",
    text: "The redesign was all about simplifying and unifying",
  },
   {
    type: "paragraph",
    text: "We restructured the entire website to bring VST Group's multiple business divisions under one digital roof.",
  },
   {
    type: "paragraph",
    text: "The new design focused on clarity, balance, and flow. A modular layout helped organize content seamlessly, while a refined visual system, consistent typography, and responsive interface.",
  },
   {
    type: "paragraph",
    text: "Every page was crafted to make navigation effortless, helping users move from one vertical to another without friction.",
  },
];


const MusashiContent1 = [
  { type: "heading", text: "About the Client & Partnership", className: "text-white" },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Musashi Auto Parts India Pvt. Ltd., a subsidiary of Japan’s Musashi Seimitsu Industry Co. Ltd., is known worldwide for its precision and excellence in automotive engineering.",
  },

  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "In partnership with Delta Electronics India, a pioneer in power and thermal-management solutions, Musashi introduced its Electric Vehicle (EV) division, a step toward building smarter, more sustainable mobility systems for the future.",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Geekonomy collaborated with Musashi Delta to establish and create the brand identity for this new division.",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Our objective was to build a unified visual and strategic foundation that combines Musashi's Japanese engineering with Delta's vision for clean-energy innovation, shaping a segment which stands for precision, motion and sustainability in the electric era.",
  },
];

const DivyasreeContent1 = [
  { type: "heading", text: "Client Overview", className: "text-white" },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "DivyaSree Developers are one of India’s most trusted real estate brands, with landmark commercial and residential developments across Bangalore, Hyderabad, and Chennai. Known for its architectural excellence and design-led spaces, DivyaSree wanted its digital presence to match the same sense of scale, precision, and innovation that defines its physical projects.",
  },

  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "The earlier website, however, felt dated with fragmented navigation, inconsistent visuals, and limited SEO visibility",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Geekonomy partnered with DivyaSree to completely redesign and redevelop their corporate website, building a seamless, performance-driven platform that reflects the brand’s leadership in modern real estate",
  },
];
const DivyasreeContent2 = [
  { type: "heading", text: "Our Solution", className: "text-white" },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Our objective was to translate DivyaSree’s design legacy into a digital experience that feels modern, intuitive, and trustworthy.",
  },

  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "The new website features a refined, grid-based visual system inspired by architectural symmetry, simplified user journeys and responsive design across all devices.",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Beyond aesthetics, the site was built for performance, optimized for Core Web Vitals, SEO structure, and faster load times.",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "The result was a cohesive, responsive, and search-ready platform that communicates trust, innovation, and accessibility across every property vertical.",
  },
];

const HindustanContent1 = [
  { type: "heading", text: "Client Overview", className: "text-white" },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Hindustan Power Projects Pvt. Ltd. (HPPPL) is one of India’s leading power-infrastructure companies, with a strong presence across thermal, hydro, solar, and renewable energy sectors.",
  },

  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Despite its industry leadership and decades of technical expertise, the brand’s digital presence felt dated and fragmented. The website lacked structure, the design didn’t reflect its scale or credibility, and its social media platforms lacked the consistency and authority expected from a market leader",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Geekonomy partnered with Hindustan Power to bridge this gap, redefining the brand’s digital identity across web and social platforms through a complete design transformation.",
  },
];
const HindustanContent2 = [
  { type: "heading", text: "Our Solution", className: "text-white" },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "The redesign focused on building a seamless and performance-led digital experience that could communicate Hindustan Power’s scale and credibility with clarity.The new website was restructured around speed, accessibility, and storytelling, featuring an intuitive navigation system, refined typography, and a clean visual grid inspired by the brand’s operational precision. The result was a modern, responsive platform that feels both sophisticated and effortless to explore.",
  },

  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "In parallel, a unified visual language for LinkedIn was developed to bring design consistency across all digital touchpoints. Each post, from corporate announcements to project milestones follows a clear, minimal, and professional aesthetic that strengthens brand recognition and trust.",
  },
   
];


const KinfolkContent1 = [
  { type: "heading", text: "Client Overview", className: "text-white" },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Kinfolk Montessori is a Bangalore-based early learning school that focuses on nurturing children through curiosity, independence, and creativity.",
  },

  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Geekonomy collaborated with kinfolk with a clear goal of building stronger digital visibility and increasing admission inquiries during the enrolment season.",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "We designed and managed a multi-platform PPC campaign across Google, Facebook, and Instagram, ensuring the school reached parents where they were most active, through both search intent and social discovery..",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: " The campaign aimed to create a balance between awareness and performance, communicating Kinfolk’s values while driving measurable results.",
  },
];
const KinfolkContent2 = [
  { type: "heading", text: "Campaign Overview", className: "text-white" },
  {
    type: "paragraph",
    className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Over the course of six months, the campaign helped Kinfolk Montessori achieve strong visibility and engagement across all platforms, generating over 1.44 million impressions and 23,100 clicks with a healthy CTR of 1.61%.",
  },
  {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "The ads delivered 112 verified admission inquiries, driving steady growth in both lead volume and quality.",
  },
  {
    type: "paragraph" ,className: "text-[#FFFFFFB2] text-opacity-70",
    text: "Beyond paid results, the campaign also boosted website engagement, with more than 3,900 search-driven sessions and 14,000 homepage visits",
  },
   
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "To complement the paid campaigns, we also implemented a comprehensive SEO strategy by conducting keyword research, optimizing on-page and off-page elements, and improving technical health for better indexing led to a 50% increase in organic traffic within six months, with top keyword rankings for core education-related search terms",
  },
   {
    type: "paragraph",className: "text-[#FFFFFFB2] text-opacity-70",
    text: "By balancing both paid marketing and SEO, the campaign positioned Kinfolk Montessori as one of the most visible and trusted Montessori schools in its locality by setting a scalable model for future admission seasons.",
  },
];

export const caseStudies: CaseStudy[] = [

   {
    id: 1,
    title: "Mushashi Delta",
    internalTitle: "Musashi Delta ",
    subtitle: "Musashi Auto Parts India Pvt. Ltd., a subsidiary of Japan’s Musashi Seimitsu Industry Co. Ltd. is known worldwide for its precision and excellence in automotive engineering.",
    image: "/case-studies/image1.webp",
    slug: "mushashi-delta",
    pdfUrl: "/case-studies/Musashi.pdf",
    banner: "/case-studies/image1.webp",
    imageGrid1: [
      "/case-studies/1.webp",
      "/case-studies/2.webp",
      "/case-studies/3.webp",
      "/case-studies/4.webp",
    ],


   contentSections: [
      { id: 1, content: contentToHTML(MusashiContent1)  },
    ],

imageGridOptional: [
  "/case-studies/1.webp",
  "/case-studies/2.webp",
  "/case-studies/3.webp",
  "/case-studies/4.webp",
 
],

    button: {
      label: "Learn More",
      link: "/contact",
    },

    category: ["Branding"],
  },
 

  {
    id: 2,
    title: "VST Group",
    internalTitle: "Website redesign and development",
    subtitle: "VST Group is one of South India’s most established automotive networks, representing some of the world’s most trusted automobile brands. With a strong legacy across retail, distribution, and logistics",
    image: "/case-studies/image4.webp",
    slug: "vst-group",
    pdfUrl: "/case-studies/VST.pdf",

    banner: "/case-studies/image4.webp",
    imageGrid1: [
      "/case-studies/1.webp",
      "/case-studies/2.webp",
      "/case-studies/3.webp",
      "/case-studies/4.webp",
    ],
   imageGrid2: [
  {
    img: "/case-studies/5.webp",
    icon: "/case-studies/Container.webp",
    title: "1.97",
    text: "Pages per session."
  },
  {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (1).webp",
    title: "45.44%",
    text: "Bounce rate."
  },
   {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (4).webp",
    title: "40 Seconds",
    text: "Average visit duration."
  },
  {
    img: "/case-studies/1.webp",
    icon: "/case-studies/Container (2).webp",
    title: "2034",
    text: "Monthly visits."
  }
],

   contentSections: [
  { id: 1, content: contentToHTML(VSTContent1)  },

  { id: 4, content: contentToHTML(VSTContent2) },

],

    button: {
      label: "Learn More",
      link: "/contact",
    },
    category: ["Custom Development"],
  },


  
  {
    id: 3,
    title: " Divyasree Builders",
    internalTitle:"Website redesign and development",
    subtitle: "DivyaSree Developers is one of India’s most trusted real estate brands, known for landmark commercial and residential projects across Bangalore, Hyderabad, and Chennai.",
    image: "/case-studies/image2.webp",
    slug: "divyasree-builders",
    pdfUrl: "/case-studies/DivyaSree.pdf",

    banner: "/case-studies/image2.webp",
   imageGrid2: [
  {
    img: "/case-studies/5.webp",
    icon: "/case-studies/Container.webp",
    title: "2.29",
    text: "Pages per session."
  },
  {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (1).webp",
    title: "66.1%",
    text: "Bounce rate."
  },
   {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (4).webp",
    title: "24 Seconds",
    text: "Average visit duration."
  },
 
],

   contentSections: [
   
  
   { id: 2, content: "<p>Improved navigation and page speed encouraged visitors to stay longer and explore more</p>"  },
{ id: 1, content: contentToHTML(DivyasreeContent1)  },
  { id: 4, content: contentToHTML(DivyasreeContent2) },

],

    button: {
      label: "Learn More",
      link: "/contact",
    },

    category: ["Custom Development"],
  },



 {
    id: 4,
    title: "Hindustan Power",
    internalTitle: "Website redesign and development \n Social Media Creatives",
    subtitle: "Hindustan Power Projects Pvt. Ltd. is one of India’s leading power infrastructure companies with a strong presence in thermal, hydro, solar, and renewable energy sectors",
    image: "/case-studies/image3.webp",
    slug: "hindustan-power",
    pdfUrl: "/case-studies/Hindustan.pdf",

    banner: "/case-studies/image3.webp",

   imageGrid2: [
  {
    img: "/case-studies/5.webp",
    icon: "/case-studies/Container (4).webp",
    title: "2.3 Seconds",
    text: "Pages per session."
  },
  {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (1).webp",
    title: "45.44%",
    text: "Bounce rate."
  },
   {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (4).webp",
    title: "29 Seconds",
    text: "Average visit duration."
  },

],

   contentSections: [
    { id: 2, content:"<p> Improved navigation and page speed encouraged visitors to stay longer and explore more</p>"  },
  { id: 1, content: contentToHTML(HindustanContent1)  },

  { id: 4, content: contentToHTML(HindustanContent2) },

],



    button: {
      label: "Learn More",
      link: "/contact",
    },

    category: ["Custom Development","Graphic Design"],
  },


  
 {
    id: 5,
    title: "Kinfolk Montessori ",
    internalTitle: "SEO & PPC Campaign",
    subtitle: "Kinfolk Montessori is a Bangalore-based early learning school that nurtures children through curiosity, independence, and creativity.",
    image: "/case-studies/image5.webp",
    slug: "kinfolk-montessori",
    pdfUrl: "/case-studies/Kinfolk.pdf",

    banner: "/case-studies/image5.webp",

   imageGrid2: [
  {
    img: "/case-studies/5.webp",
    icon: "/case-studies/Container (4).webp",
    title: "1.4M",
    text: "Impression."
  },
  {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (1).webp",
    title: "23.1K Clicks",
    text: "(CTR: 1.61%)."
  },
   {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (4).webp",
    title: "112",
    text: "Conversions (Leads)."
  },
    {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (2).webp",
    title: "11.8%",
    text: "Conversion Rate."
  },
   {
    img: "/case-studies/6.webp",
    icon: "/case-studies/Container (4).webp",
    title: "+50% in six months",
    text: "Organic Traffic Growth."
  },

],

   contentSections: [
   
  { id: 1, content: contentToHTML(KinfolkContent1)  },

  { id: 4, content: contentToHTML(KinfolkContent2) },

],

    button: {
      label: "Learn More",
      link: "/contact",
    },

    category: ["Performance Marketing" ,"SEO"],
  },

];
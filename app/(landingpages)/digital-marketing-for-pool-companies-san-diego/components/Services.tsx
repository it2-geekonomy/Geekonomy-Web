import {
  MapPin,
  Search,
  Megaphone,
  LayoutTemplate,
  FileText,
  Share2,
  Award,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const services = [
  {
    num: "01",
    icon: MapPin,
    title: "Local SEO for Pool Companies",
    desc: "Put your pool business on the map and in front of customers searching for local businesses. We optimize for local search by revamping your Google Business Profile, optimizing for local search terms, service-area optimization, citations, reviews, and locally relevant content.",
  },
  {
    num: "02",
    icon: Search,
    title: "SEO for Pool Services",
    desc: "Create organic visibility for the services your customers are searching for. We create customized SEO programs for pool cleaning, pool maintenance and repair, remodeling, resurfacing, construction, equipment installation, and specialty services.",
  },
  {
    num: "03",
    icon: Megaphone,
    title: "Google Ads for Pool Companies",
    desc: "You can reach potential clients when they are actively looking to hire. We set up and optimize Google Ads campaigns targeting high-intent keywords, appropriate locations, dedicated landing pages for conversion, call tracking, and continuously monitor campaign results.",
  },
  {
    num: "04",
    icon: LayoutTemplate,
    title: "Website Design & Conversion Optimization",
    desc: "Your site should not just appear professional. We will help your website generate leads. We optimize service pages, landing pages, forms, calls to action, mobile experience, page speeds, and trust signals to make it easy for potential customers to contact your business.",
  },
  {
    num: "05",
    icon: FileText,
    title: "Content Marketing for Pool Businesses",
    desc: "Develop informative content that provides solutions to your customers’ queries and increases your search visibility. Our content program can focus on pool maintenance, repairs, remodeling, installation, equipment, costs, seasonal maintenance, and more all topics pool owners in San Diego are searching for.",
  },
  {
    num: "06",
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Promote your skills and projects through social media to increase awareness and build credibility. We can create plans for project overhauls, before/after photos, client stories, education, seasonal campaigns, and localized marketing.",
  },
  {
    num: "07",
    icon: Award,
    title: "Reputation Management",
    desc: "Reviews can be a big factor in the decision of a homeowner choosing one pool company over another. Our reputation strategies assist companies in generating more reviews, building and defending their positive online image, tracking reviews, and increasing customer trust.",
  },
  {
    num: "08",
    icon: BarChart3,
    title: "Lead Tracking & Marketing Analytics",
    desc: "Understand what is working. Count the key actions that lead to business, including phone calls, quote requests, form submissions, organic traffic, paid leads, conversion rate, and cost per lead.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              WHAT WE DO
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl"
          >
            Pool Marketing Services for San Diego Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Each pool business has a different mix of services offered, target markets served, and growth objectives. Customized marketing approaches like Geekonomy allow us to create the most targeted set of channels for your pool business, from local search package results to pay-per-lead generation campaigns to conversion.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ num, icon: Icon, title, desc }) => (
            <div
              key={num}
              className="relative w-full max-w-[380px] mx-auto md:max-w-none md:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40"
            >
              <span className="absolute right-6 top-6 text-sm font-extrabold text-[#69AE44]/40">
                {num}
              </span>
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}

          <div className="flex flex-col justify-center w-full max-w-[380px] mx-auto md:max-w-none md:mx-0 rounded-[20px] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7">
            <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
              Not sure where to start?
            </Typography>
            <Typography variant="body-lg" className="mb-5 text-black/70">
              We will build a custom strategy around the channels most
              relevant to your pool business.
            </Typography>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get a Free Plan
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div> 
      </div>
    </section>
  );
}
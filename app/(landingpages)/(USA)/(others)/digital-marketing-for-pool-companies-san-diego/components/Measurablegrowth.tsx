import {
  Phone,
  TrendingUp,
  MapPin,
  LayoutGrid,
  LayoutTemplate,
  Clock,
  Check,
  BriefcaseBusiness,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const metrics = [
  {
    icon: Phone,
    title: "Track Qualified Pool Leads",
    desc: "We target high-value conversions including quote requests, consultation requests, contact form submissions, and phone calls from potential clients interested in your services.",
  },
  {
    icon: TrendingUp,
    title: "Measure Organic Search Growth",
    desc: "Indicators of SEO success will include increases in organic visibility, keyword rankings, relevant search traffic, local search visibility, and interaction with critical service pages.",
  },
  {
    icon: MapPin,
    title: "Monitor Google Maps Performance",
    desc: "Be search-friendly for a local pool business. For a local pool business, Google Maps visibility can be significant for customer engagement. We look after appropriate local search performance and engagements, such as website visits, phone calls, and direction requests for tracked keywords.",
  },
  {
    icon: LayoutGrid,
    title: "Analyze Paid Advertising Performance",
    desc: "With regard to Google Ads and other paid campaigns, campaign-level metrics are tracked, such as impressions, clicks, conversion rate, and cost per lead, so we can look out for areas of improvement.",
  },
  {
    icon: LayoutTemplate,
    title: "Improve Website Conversion Rates",
    desc: "More traffic doesn’t mean more customers. We analyze how visitors are converting on your landing pages and identify ways to improve your calls to action, forms, messaging, trust signals, and other conversion elements.",
  },
  {
    icon: Clock,
    title: "Understand Your Cost Per Lead",
    desc: "Having visibility into the costs involved in producing a lead enables you to make smarter marketing choices. We watch your cost per lead and compare performance between campaigns, services, and acquisition channels.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Connect Marketing to Business Growth",
    desc: "The goal is to get beneath the surface numbers and learn how marketing helps your pipeline.By measuring each stage, we will show you where your marketing is working and where adjustments will have a big impact on your business.",
  },
];

const tags = [
  "Qualified leads",
  "Phone calls",
  "Quote requests",
  "Consultation requests",
  "Organic traffic",
  "Local search visibility",
  "Google Maps actions",
  "Keyword rankings",
  "Conversion rate",
  "Cost per lead",
  "Paid advertising performance",
  "Landing-page performance",
  "Customer acquisition trends",
];

export default function Results() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              MEASURABLE GROWTH
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            Pool Marketing Results That Matter
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            The goal of a good pool marketing campaign is not to bring in visitors to your website. However, to develop new business, it should enable your company to receive qualified leads, minimize your marketing investment, and establish a direct relationship from your web presence to your bottom line.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Quantifies how well you are progressing through the entire marketing funnel. So you understand how your campaign is contributing to business.
          </Typography>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>

        <div className="rounded-[20px] border border-[#69AE44] bg-[#69AE44]/10 p-9">
          <Typography variant="h3" as="h3" className="mb-5 text-white font-semibold">
            Marketing Metrics We Can Track
          </Typography>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-[18px] py-2.5 text-sm font-medium text-white/80"
              >
                <Check className="h-3.5 w-3.5 text-[#69AE44]" strokeWidth={3} />
                {tag}
              </span>
            ))}
          </div>
        </div>
         <Typography variant="body-xl" className="mt-6 max-w-7xl leading-relaxed text-white font-semibold">
        Improved measurement means better decisions, and better decisions mean a more efficient pool marketing plan.
        </Typography>

      </div>
    </section>
  );
}
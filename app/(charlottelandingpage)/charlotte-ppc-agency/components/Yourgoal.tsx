import {
  MapPin,
  Phone,
  Box,
  Users,
  ArrowRight,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const items = [
  {
    icon: Phone,
    title: "Lead Generation",
    desc: "Create qualified leads from people actively looking for your offerings. Campaigns can be optimized using calls, form submissions, consultations, bookings, and other meaningful conversions.",
  },
  {
    icon: Box,
    title: "Ecommerce Sales",
    desc: "Utilize the powerful targeting capabilities to drive high-intention traffic to your e-commerce site. Also optimize your campaigns for product searches, product purchases, revenue, as well as ad spend. Product advertising, in particular, helps you connect products to potential buyers.",
  },
  {
    icon: MapPin,
    title: "Local Business Growth",
    desc: "Target customers seeking businesses or services in Charlotte metro and surrounding markets. By using a combination of geo-targeting, local search intent, location-oriented messaging, and conversion tracking, we put your ad dollars in the markets that count.",
  },
  {
    icon: Users,
    title: "B2B & Professional Services",
    desc: "Identify prospects and decision-makers looking for that niche. Pay-per-click (PPC) campaigns can deliver commercial-sounding keywords and customized messaging to prospects further along in the purchase funnel.",
  },

];

export default function YourGoal() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              BUILT AROUND YOUR GOALS
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            PPC Campaigns Built Around Your Business Goals
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Each business has its own reason for investing in paid advertising. For the Geekonomy PPC system, we create a system designed to deliver the result you want, whether it be more local leads, more online sales, or higher-end prospects.       
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-[380px] max-w-full mx-auto md:w-auto md:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-[13px] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}

          <div className="flex flex-col justify-center w-full max-w-[380px] mx-auto md:max-w-none md:mx-0 rounded-[20px] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7 ">
            <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
              Running ads already?
            </Typography>
            <Typography variant="body-lg" className="mb-5 text-black/70">
              We can audit your existing Google Ads account and find quick wins before optimizing.
            </Typography>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Get an Ad Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
import {
  Settings,
  Search,
  Users,
  Target,
  Share2,
  Layers,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const items = [
  {
    icon: Search,
    title: "Google Search Ads",
    desc: "Bring your potential clients to your landing page by keyword-rich search campaigns that tell the benefits you deliver to them.  Improve the quality of your traffic and results by refining your ad copy, keywords, negative keywords and landing pages.",
  },
  {
    icon: Share2,
    title: "Google Display Ads",
    desc: "Go beyond search engine results by advertising on the Google Display Network. Display campaigns are suitable for branding, engagement and remarketing.",
  },
  {
    icon: Layers,
    title: "Performance Max Campaigns",
    desc: "Use Google's Performance Max campaigns to reach potential customers across all Google properties in one campaign. Track campaign success relative to your set conversion goals and business objectives.",
  },
  {
    icon: Users,
    title: "Remarketing Campaigns",
    desc: "Reconnect with Business Website Visitors Who Have Previously Visited your business website or done work for your Business. These Can Re-Engage Visitors to your Business or Website When they Are Ready To Purchase.",
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    desc: "Accurate measurement connects what we do in advertising with business outcomes. We measure the critical actions that lead to business success: the calls, the forms, the orders, the bookings, the conversions.",
  },
  {
    icon: Settings,
    title: "Ongoing Campaign Optimization",
    desc: "Google Ads performance becomes volatile, as search habits, competitors, budgets and conversions change. Ongoing optimization erases wastage, sharpens focus, makes ads more effective, refines bidding and reallocates budgets where they are more likely to be successful.",
  },
];

export default function GoogleAds() {
  return (
    <section id="why" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              GOOGLE ADS
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Google Ads Management for Charlotte Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Google Ads will always show your business to potential customers who are searching for what you sell.  The Google Ads campaigns that Geekonomy manages are relevant to the most likely search intent,  saving ad dollars and monitored for conversions and results.       
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
        </div>
      </div>
    </section>
  );
}
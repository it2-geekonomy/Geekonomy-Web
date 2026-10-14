import { Search, TrendingUp, MapPin, LineChart } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const items = [
  {
    icon: Search,
    title: "Reach Customers Searching for Pool Services",
    desc: "Your customers could be searching for simple weekly pool service or extensive backyard renovations. We develop customized campaigns built around high-intent search queries related to your services to help your business earn the best local visibility.",
  },
  {
    icon: TrendingUp,
    title: "Generate More Qualified Pool Leads",
    desc: "More visitors to your website is not always good. Our target is to bring you those visitors that are searching for a pool contractor and are ready to take an action, such as calling you, requesting a quote, or booking a consultation.",
  },
  {
    icon: MapPin,
    title: "Build Visibility Across Google",
    desc: "Consumers will find your business in search results, Google Maps, local directories, and paid adverts. Developing a consistent approach can allow your company to market to these critical decision-making stages instead of depending on one marketing channel.",
  },
  {
    icon: LineChart,
    title: "Turn Local Visibility Into Revenue",
    desc: "Your entire marketing funnel is relevant from your initial search all the way through to your final inquiry. We develop and optimize your website, landing pages, calls to action, campaigns, and tracking to understand which tactics are producing leads and to identify areas that need improvement.",
  },
];

export default function ValueGrid() {
  return (
    <section id="grow" className="bg-black py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80">
                WHY LOCAL STRATEGY WINS
              </Typography>
            </div>
            <Typography
              variant="display-xl"
              as="h2"
              className="text-white text-2xl sm:text-4xl lg:text-5xl"
            >
              Grow Your Pool Business With a San Diego Marketing Strategy
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              Attracting additional pool leads in San Diego just isn’t about having a website or doing some advertising here and there. Pool companies are battling for those lucrative local search terms where customers are comparing companies, reading reviews, viewing project pictures, and seeking someone they can trust.
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              A targeted pool marketing approach places your business in front of these customers at the optimum point in the buying cycle. Whether your business is focused on pool cleaning and maintenance or remodeling, repair, resurfacing, or new pool builders, your marketing should be consistent with your offerings.
            </Typography>
            <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
              Geekonomy develops a marketing campaign based on your business goals, geography, competition, and how customers search for your business. We maximize organic and paid strategies to grow your company’s visibility, attract quality leads, and convert more website visitors into customers.
            </Typography>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[420px] lg:mx-0">
            <div className="relative aspect-[4/4.4] overflow-hidden border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/strategy2.jpg"
                alt="San Diego pool marketing strategy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-8 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#69AE44] transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#69AE44]/10 text-[#69AE44] sm:h-12 sm:w-12">
                <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
                {title}
              </Typography>
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>

        <Typography variant="body-xl" className="mt-10 max-w-7xl leading-relaxed text-white font-semibold">
          You’re not just trying to rank higher. You’re trying to help your San Diego pool business attract, convert, and retain more profitable customers.
        </Typography>
      </div>
    </section>
  );
}
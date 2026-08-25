import { Eye, TrendingUp, Search, ArrowRight, MapPin, Waypoints, BarChart3 } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

export default function Hero() {
  return (
    <section id="top" className="relative w-full bg-black overflow-hidden">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#69AE44]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#69AE44]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-4 md:py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-2 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white text-nowrap">
                Pool Marketing Agency—San Diego, California
              </Typography>
            </div>

            <Typography variant="display-xl" as="h1" className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Digital Marketing for Pool Companies in San Diego That Gets More{" "}
              <span className="text-[#69AE44]">Local Customers</span>
            </Typography>

            <Typography variant="body-xl" className="mt-6 leading-relaxed text-white px-6 lg:px-0 lg:max-w-xl text-left">
              Convert local searches into quality pool customers with a data-driven digital marketing plan for pool service providers, contractors, pool builders, and pool remodelers in San Diego.
            </Typography>

            <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
              Geekonomy leverages{" "}
              <span className="text-[#FFFFFF] font-semibold"> local SEO, Google Ads, content marketing, conversion optimization, and reputation management</span> to ensure that your pool business gets found by customers searching for your services.
            </Typography>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
              <a href="#contact" className="inline-flex w-72 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-black transition-transform hover:scale-[1.03] sm:w-auto">
                <Typography variant="body-lg" className="font-semibold text-black">
                  Get Your Free Pool Marketing Strategy
                </Typography>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <Typography variant="body-xl" className="mt-6 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
              From boosting your presence in Google Search and Maps to
              transforming visitors into calls and requests for quotes, we
              concentrate on those marketing efforts that will grow your
              business.
            </Typography>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
              <a href="#contact" className="inline-flex w-72 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto">
                <Typography variant="body-lg" className="font-semibold text-white">
                  Explore Services
                </Typography>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.4] w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 mx-auto sm:max-w-[420px] lg:max-w-[520px] lg:mx-0">
              <img
                src="https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/herosection.jpg"
                alt="Pool company marketing and San Diego local visibility"
                className="h-full w-full object-cover"
              />

              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#69AE44]/10 text-[#69AE44]">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="body-sm" className="font-bold text-black">
                    + Qualified Leads
                  </Typography>
                  <Typography variant="caption" className="text-black/50">
                    Calls & quote requests up
                  </Typography>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#69AE44]/10 text-[#69AE44]">
                  <Search className="h-5 w-5" />
                </div>
                <div>
                  <Typography variant="body-sm" className="font-bold text-black">
                    #1 Local Visibility
                  </Typography>
                  <Typography variant="caption" className="text-black/50">
                    Google Search & Maps
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-y-8 text-center sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:px-6 sm:text-left md:px-14 lg:flex lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-y-8 lg:px-0">
          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <MapPin className="h-6 w-6 shrink-0 text-[#69AE44]" />
              <Typography variant="display-xl" as="p" className="text-[#69AE44]">
                15+
              </Typography>
            </div>
            <Typography variant="body-lg" className="text-white">
              San Diego communities served
            </Typography>
          </div>
          <div className="sm:justify-self-end lg:justify-self-auto">
            <div className="flex items-center justify-center gap-2 sm:justify-end lg:justify-start">
              <Waypoints className="h-6 w-6 shrink-0 text-[#69AE44]" />
              <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                Search<span className="text-[#69AE44]">→</span>Lead
              </Typography>
            </div>
            <Typography variant="body-lg" className="text-white sm:text-left">
              Full-funnel focus
            </Typography>
          </div>
          <div className="sm:col-span-2 sm:justify-self-center sm:text-center lg:col-span-auto lg:justify-self-auto lg:text-left">
            <div className="flex items-center justify-center gap-2">
              <BarChart3 className="h-6 w-6 shrink-0 text-[#69AE44]" />
              <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                ROI-first
              </Typography>
            </div>
            <Typography variant="body-lg" className="text-white">
              Measurable growth
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-10 text-center lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <Typography variant="body-lg" className="rounded-full bg-[#69AE44]/20 px-4 py-2 text-white font-semibold">
            FULL-FUNNEL GROWTH ACROSS EVERY CUSTOMER TOUCHPOINT
          </Typography>

          <div className="flex max-w-md flex-wrap justify-center gap-4 lg:justify-start">
            {[
              "Local SEO",
              "Google Ads",
              "Content Marketing",
              "Conversion Optimization",
              "Reputation Management",
            ].map((service) => (
              <span key={service} className="w-fit whitespace-nowrap rounded-full border border-[#69AE44]/90 bg-white/5 px-4 py-2.5">
                <Typography variant="body-sm" className="font-semibold text-white">
                  {service}
                </Typography>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
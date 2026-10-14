import { Typography } from "@/components/ui/Typography";
import { metrics } from "../const/Measurewhatmatters";

export default function Measures() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              MEASURE WHAT MATTERS
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white leading-tight"
          >
            Charlotte PPC Results That Matter to Your Business
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90 mb-5">
            Depending on your business and campaign goals, PPC performance can be evaluated through:
          </Typography>

        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto sm:w-auto sm:mx-0 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40"
            >
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-5.5 w-5.5" strokeWidth={1.8} />
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


        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-8">
                <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
                    Turn PPC Data Into Better Campaign Decisions
                </Typography>
                <Typography variant="body-lg" className="leading-relaxed text-white/90">
                    The campaign data serves to point to where the campaign will be optimized on an ongoing basis. If we look at the data for keyword performance, search terms, landing page engagement, conversion paths, and spend patterns, we can determine the effectiveness of the campaign.
                </Typography>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-8">
                <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
                    See How Geekonomy Can Improve Your PPC Performance
                </Typography>
                <Typography variant="body-lg" className="leading-relaxed text-white/90">
                    Feel free to include confirmed results of Geekonomy case studies, campaign goals & results, or client testimonials here when they are available. Do not publish unsupported percentages and performance claims.            
                </Typography>
            </div>
        </div>

      </div>
    </section>
  );
}
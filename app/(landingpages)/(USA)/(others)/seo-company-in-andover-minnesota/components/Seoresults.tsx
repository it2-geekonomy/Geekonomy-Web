import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Seoresults";

export default function SeoResults () {
  return (
    <section id="result" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-9 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               SEO Results
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            SEO Results That Support Real Business Growth
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Ranking isn‘t the only way to gauge SEO performance. You‘ll want to choose the metrics that are most appropriate for your objectives, competitive landscape, baseline, and campaign approach.
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Geekonomy measures some kinds of meaningful metrics so we can monitor how you are doing with respect to your SEO.
          </Typography>
          <Typography variant="display-xl" as="h3" className="mt-6 text-white font-semibold">
            What We Measure
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-[0.8125rem] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>

               {Array.isArray(desc) ? (
                <div className="space-y-2">
                  {desc.map((line, i) => (
                    <Typography
                      key={i}
                      variant="body-lg"
                      className="leading-relaxed text-white/90"
                    >
                      {line}
                    </Typography>
                  ))}
                </div>
              ) : (
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
              )}
            </div>
          ))}
        </div>
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          All businesses begin at a different time, the seo results should be measured against past records and business goals.
        </Typography>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          As measurement continues and your site, competitors, and search landscape change, your SEO tactic can shift with it.
        </Typography>
      </div>
    </section>
  );
}
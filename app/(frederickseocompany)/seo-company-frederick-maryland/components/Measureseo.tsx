
import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Measureseo";

export default function MeasureSeo() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-4xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
                SEO Measures
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Measure SEO by More Than Rankings
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Your SEO should not only give you a list of rank positions, but it should grow your business. Geekonomy provides the metrics that show your search strategy is reaching the appropriate audience and building genuine opportunities.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We track <span className="text-[#FFFFFF] font-semibold">organic traffic, keyword ranking, local search, Google Maps, enquiries, conversions and landing-page performance</span> so we can identify what is successful and what needs attention.
          </Typography>
          <Typography variant="display-xl" as="h3" className="mt-6 text-white font-semibold">
            What We Track
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
          Frequent reporting provides a more detailed snapshot of the SEO effort and directs you toward the optimization stage.
          </Typography>
      </div>
    </section>
  );
}


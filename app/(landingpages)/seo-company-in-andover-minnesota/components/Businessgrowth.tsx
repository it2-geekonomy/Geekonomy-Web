import { Typography } from "@/components/ui/Typography";
import { flow, Items } from "../const/Businessgrowth";

export default function BusinessGrowth() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-7 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Business Growth
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            More Than Rankings: SEO Focused on Business Growth
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Achieving better search visibility is beneficial only if it delivers the right visitors to your site. Geekonomy thrives on linking SEO efforts to business-appropriate activities, including relevant searches, website visits, as well as calls, form fills and customer inquiries.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Our approach follows a simple path:
          </Typography>
        </div>

        <div className="mb-10 overflow-x-auto lg:overflow-visible rounded-[20px] border border-[#69AE44] bg-[#69AE44]/10 p-7">
          <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
            {flow.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === flow.length - 1
                      ? "bg-[#69AE44] text-black"
                      : "border border-white/10 bg-white/10 text-white/80"
                    }`}
                >
                  {s}
                </span>
                {i < flow.length - 1 && <span className="text-[#69AE44]">→</span>}
              </div>
            ))}
          </div>
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
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
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
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          As an <span className="text-[#FFFFFF] font-semibold">SEO Company Andover</span>, Geekonomy concentrates on constructing search prominence that leads to a quantifiable customer journey, not just ranks of more keywords in search listings.
        </Typography>
      </div>
    </section>
  );
}
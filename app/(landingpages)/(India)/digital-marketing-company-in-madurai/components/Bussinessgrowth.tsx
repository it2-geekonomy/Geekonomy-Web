
import { Typography } from "@/components/ui/Typography";
import { steps, types } from "../const/Bussinessgrowth";

export default function BusinessGrowth() {
  return (
    <section id="how" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Business Growth
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Measure Marketing by Leads and Business Growth
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          The effectiveness of digital marketing is not determined by the number of impressions, followers, or clicks your campaign receives, but by how it benefits your business.       
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          We set out to link marketing activity to measurable results so you will know who’s getting the results of your marketing investment and where activities are falling short.      
          </Typography>

          <Typography variant="h2" as="h3" className="mt-5 text-white font-semibold">
            Track the Metrics That Matter
          </Typography>
          <Typography variant="body-xl" className="mt-4 max-w-3xl mx-auto leading-relaxed text-white/90">
          We look at the numbers that actually show if your digital marketing is growing your business– not just clicks or impressions.     
          </Typography>
        </div>

        <div className="grid gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="step-glow-card relative grid grid-cols-[auto_1fr] items-start gap-6 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7 transition-transform hover:translate-x-1.5 sm:p-8"
            >
              <span className="flex h-14.5 w-14.5 flex-none items-center justify-center rounded-[0.8125rem] bg-[#69AE44] text-2xl font-extrabold text-black">
                {s.n}
              </span>
              <div>
                <Typography variant="h3" as="h4" className="mb-2 text-white font-semibold">
                  {s.title}
                </Typography>

              {s.desc.map((sentence, i) => (
                          <Typography
                              key={i}
                              variant="body-lg"
                              className={`leading-relaxed text-white/90 ${i > 0 ? "mt-2" : ""}`}>
                              {sentence}
                          </Typography>
                      ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
            {types.map(({ image, title, desc }) => (
            <div
                key={title}
                className="mt-6 w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40"
            >
                <div className="mb-4 overflow-hidden rounded-[0.8125rem] border border-white/10 bg-white/[0.03]">
                <img
                    src={image}
                    alt={title}
                    className="aspect-[16/10] w-full object-cover object-top"
                />
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

      </div>
    </section>
  );
}

import { Typography } from "@/components/ui/Typography";
import { steps } from "../const/Seostrategy";

export default function SeoStrategy() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              SEO Strategy
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            How Our Waco SEO Strategy Works
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Good SEO begins with knowledge of your business, market and the searches that will deliver you targeted visitors. Our methodology integrates technical SEO, search intent, content, geographic optimization and authority building into a single cohesive approach.
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
                <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
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
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Our structured processes and systems enable our <span className="text-[#FFFFFF] font-semibold">Waco SEO company</span> team to constantly identify opportunities, enhance performance and grow your SEO investment in a sustainable way.
        </Typography>
      </div>
    </section>
  );
}
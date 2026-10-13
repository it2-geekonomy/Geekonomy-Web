import { Plus } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { FAQProps } from "@/lib/constants/Landingpagetypes";

export default function FAQ({ content }: Readonly<FAQProps>) {
  const { label, heading, intro, faqs } = content;

  return (
    <section id="faq" className="flex w-full flex-col items-center bg-black my-8 lg:my-10">
      <div className="flex w-full flex-col items-center gap-10 px-4 sm:px-6 lg:gap-14 lg:px-8">

        <div className="flex max-w-4xl flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="size-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              {label}
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
            {heading}
          </Typography>

          {!!intro?.length && (
            <div className="flex flex-col gap-4">
              {intro.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {paragraph}
                </Typography>
              ))}
            </div>
          )}
        </div>

        <div className="flex w-full max-w-3xl flex-col divide-y divide-white/20">
          {faqs.map(({ q, a }, i) => (
            <details key={q} name="faq-accordion" className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 marker:content-none">
                <Typography as="h3" variant="h3" className="text-lg font-semibold text-white">
                  {q}
                </Typography>
                <span className="flex size-8 flex-none items-center justify-center rounded-[0.625rem] bg-white/5 transition-colors group-open:bg-[#69AE44]">
                  <Plus className="size-4 text-[#69AE44] transition-transform duration-300 group-open:rotate-45 group-open:text-black" />
                </span>
              </summary>

              <div className="flex pr-10 flex-col gap-2 pb-3">
                {a.map((line, j) => (
                  <Typography key={j} variant="body-lg" className="leading-relaxed text-white">
                    {line}
                  </Typography>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
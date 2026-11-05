import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { Boldtext } from "./Boldtext";
import { SectionProps } from "@/lib/constants/Landingpagetypes";

export default function CardSection({ content }: Readonly<SectionProps>) {
  const { heading, intro, card, label, bottom, cta, flow } = content;

  return (
    <section id="iconcard" className="flex w-full flex-col items-center bg-black py-6 lg:py-10">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-6 lg:gap-14 lg:px-8">
        <div className="flex w-full lg:w-4/5 flex-col items-center gap-5 self-center text-center">
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
            <div className="flex w-full flex-col gap-4">
              {intro.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {Boldtext(paragraph)}
                </Typography>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-3">
          {card.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-[#111111] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-[#111111] md:w-full"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44] sm:size-12">
                <Icon className="size-4.5 sm:size-6" strokeWidth={1.8} />
              </div>

              <div className="flex flex-col">
                <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                  {title}
                </Typography>

                {Array.isArray(desc) ? (
                  <div className="flex flex-col gap-2">
                    {desc.map((line, i) => (
                      <Typography key={i} variant="body-lg" className="leading-relaxed text-white/90">
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
            </div>
          ))}

          {cta && (
            <div className="flex w-full flex-col justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7">
              <div className="flex flex-col">
                <Typography variant="h3" as="p" className="pb-2 text-black font-bold">
                  {cta.title}
                </Typography>
                {Array.isArray(cta.description) ? (
                  <div className="flex flex-col gap-2 pb-5">
                    {cta.description.map((paragraph, i) => (
                      <Typography key={i} variant="body-lg" className="text-black/70">
                        {paragraph}
                      </Typography>
                    ))}
                  </div>
                ) : (
                  <Typography variant="body-lg" className="pb-5 text-black/70">
                    {cta.description}
                  </Typography>
                )}
              </div>

              <Link
                href="#contact"
                onClick={handleScrollToContact}
                className="group inline-flex w-fit self-center items-center justify-center gap-2 bg-black text-white border-2 border-transparent px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              >
                <Typography as="span" variant="body-lg" className="text-white transition-colors duration-200">
                  {cta.buttonText}
                </Typography>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </div>

        {!!flow?.length && (
          <div className="overflow-x-auto rounded-2xl border border-[#69AE44] bg-[#69AE44]/10 p-7 lg:overflow-visible">
            <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
              {flow.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span
                    className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${
                      i === flow.length - 1
                        ? "bg-[#69AE44] text-black"
                        : "border border-white/10 bg-white/10 text-white/80"
                    }`}
                  >
                    {step}
                  </span>
                  {i < flow.length - 1 && (
                    <span className="text-[#69AE44]">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!!bottom?.length && (
          <div className="flex w-full flex-col gap-4">
            {bottom.map((paragraph, i) => (
              <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                {Boldtext(paragraph)}
              </Typography>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
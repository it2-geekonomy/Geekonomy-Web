import { ArrowRight, type LucideIcon } from "lucide-react";
<<<<<<< HEAD
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { Boldtext } from "./Boldtext";

export interface CardContent {
  icon: LucideIcon;
  title: string;
  desc: string | string[];
}

export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
}

export interface IconCardLayout {
  label: string;
  heading: string;
  intro?: string[];
  card: CardContent[];
  bottom?: string[];
  cta?: CTAContent;
}

interface SectionProps {
  content: IconCardLayout;
}
 
export default function CardSection({ content }: SectionProps) {
  const { heading, intro, card, label, bottom, cta } = content; 

  return (
    <section id="iconcard" className="bg-black py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
=======
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { Boldtext } from "./Boldtext";
import { SectionProps } from "@/lib/constants/Landingpagetypes";

export default function CardSection({ content }: Readonly<SectionProps>) {
  const { heading, intro, card, label, bottom, cta } = content;

  return (
    <section id="iconcard" className="flex w-full flex-col items-center bg-black py-6 lg:py-10">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-6 lg:gap-14 lg:px-8">
        <div className="flex w-full lg:w-4/5 flex-col items-center gap-5 self-center text-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="size-1.5 rounded-full bg-[#69AE44]" />
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
            <Typography variant="overline" className="text-white/80">
              {label}
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
            {heading}
          </Typography>
<<<<<<< HEAD
          {intro && intro.length > 0 &&(
          <div className="mt-5 space-y-4">
            {intro.map((paragraph, i) => (
              <Typography
                key={i}
                variant="body-xl"
                className="leading-relaxed text-white/90"
              >
                {Boldtext(paragraph)}
              </Typography>
            ))}
          </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {card.map(({ icon: Icon, title, desc }) => (
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
=======

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
              className="flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/5 md:w-full"
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
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
            </div>
          ))}

          {cta && (
<<<<<<< HEAD
            <div className="flex flex-col justify-center w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.25rem] bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7">
              <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
                {cta.title}
              </Typography>
              <Typography variant="body-lg" className="mb-2 text-black/70">
                {cta.description}
              </Typography>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex w-fit items-center gap-2 mt-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                {cta.buttonText}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}

        </div>

        {bottom && (
          <div className="mt-5 space-y-4">
=======
            <div className="flex w-full flex-col justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#69AE44] to-[#4d8a2f] p-7 md:w-full">
              <div className="flex flex-col">
                <Typography variant="h3" as="p" className="mb-2 text-black font-bold">
                  {cta.title}
                </Typography>
                <Typography variant="body-lg" className="mb-2 text-black/70">
                  {cta.description}
                </Typography>
              </div>

              <Link
                href="#contact"
                onClick={handleScrollToContact}
                className="group inline-flex w-auto items-center justify-center gap-2 bg-[#69AE44] text-white border-2 border-transparent px-10 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-transparent hover:border-[#69AE44] hover:scale-105"
              >
                <Typography as="span" variant="body-lg" className="text-white group-hover:text-[#69AE44] transition-colors duration-200">
                  {cta.buttonText}
                </Typography>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </div>

        {!!bottom?.length && (
          <div className="flex w-full flex-col gap-4">
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8

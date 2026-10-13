import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/ui/Typography";
import { Boldtext } from "./Boldtext";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { HeroProps } from "@/lib/constants/Landingpagetypes";

export default function Hero({ content }: Readonly<HeroProps>) {
  const { label, headingMain, headingHighlight, paragraphs, buttonText, image, imageAlt, badges, stats, bannerText, keywords, } = content;

  return (
    <section id="top" className="relative flex w-full flex-col items-center overflow-hidden bg-black">
      <div
        className="pointer-events-none absolute inset-0 flex flex-col justify-between"
      >
        <div className="size-75 self-end bg-gradient-to-bl from-[#69AE44]/55 to-transparent blur-[7.25rem]" />
        <div className="size-65 self-start bg-gradient-to-tr from-[#69AE44]/20 to-transparent blur-[6.25rem]" />
      </div>

      <div className="relative flex max-w-7xl flex-col gap-12 px-6 py-4 md:py-8 lg:gap-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white text-nowrap">
                {label}
              </Typography>
            </div>

            <div className="flex w-full flex-col items-center gap-4 lg:items-start">
              <Typography variant="display-2xl" as="h1" className="text-white leading-tight">
                {headingMain} <span className="text-[#69AE44]">{headingHighlight}</span>
              </Typography>

              <div className="flex w-full flex-col gap-4">
                {paragraphs.map((paragraph, i) => (
                  <Typography
                    key={i}
                    variant="body-xl"
                    className="leading-relaxed text-white/90"
                  >
                    {Boldtext(paragraph)}
                  </Typography>
                ))}
              </div>
            </div>

            <Link
              href="#contact"
              onClick={handleScrollToContact}
              className="group inline-flex w-auto items-center justify-center gap-2 bg-[#69AE44] text-white border-2 border-transparent px-10 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-transparent hover:border-[#69AE44] hover:scale-105"
            >
              <Typography as="span" variant="body-lg" className="text-white group-hover:text-[#69AE44] transition-colors duration-200">
                {buttonText}
              </Typography>
              <ArrowRight className="h-4 w-4 group-hover:text-[#69AE44] transition-colors duration-200" />
            </Link>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 ">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 420px, 320px"
                className="object-cover"
              />

              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className={`absolute ${badge.position} flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl`}
                >
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#69AE44]/10 text-[#69AE44]">
                    <badge.icon className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <Typography variant="body-sm" className="font-bold text-black">
                      {badge.title}
                    </Typography>
                    <Typography variant="caption" className="text-black/50">
                      {badge.subtitle}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:text-left">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                {stat.value}
              </Typography>
              <Typography variant="body-lg" className="text-white">
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex w-full justify-center border-t border-white/30">
        <div className="grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-10 text-center lg:grid-cols-[3fr_2fr] lg:gap-12 lg:px-8 lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Typography
              variant="body-lg"
              className="rounded-full bg-[#69AE44]/20 px-4 py-2 text-white font-semibold uppercase"
            >
              {bannerText}
            </Typography>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="w-fit whitespace-nowrap rounded-full border border-[#69AE44]/90 bg-white/5 px-4 py-2.5"
              >
                <Typography variant="body-sm" className="font-semibold text-white">
                  {keyword}
                </Typography>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
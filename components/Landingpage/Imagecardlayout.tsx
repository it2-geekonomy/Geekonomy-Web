import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { Boldtext } from "./Boldtext";
import { gridCols, ImageCardProps } from "@/lib/constants/Landingpagetypes";

export default function ImageCardSection({ content }: Readonly<ImageCardProps>) {
  const { label, heading, intro, bottom, items, columns = 4 } = content;

  return (
    <section id="results" className="flex w-full flex-col items-center bg-black py-8 lg:py-10">
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

          <div className="flex w-full flex-col gap-4">
            {intro.map((paragraph, i) => (
              <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                {Boldtext(paragraph)}
              </Typography>
            ))}
          </div>
        </div>

        <div className={`grid justify-items-center gap-5 md:justify-items-stretch ${gridCols[columns]}`}>
          {items.map(({ image, title, desc }) => {
            const lines = Array.isArray(desc) ? desc : [desc];

            return (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40 hover:bg-white/5 md:w-full"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex flex-col">
                  <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                    {title}
                  </Typography>

                  <div className="flex flex-col gap-2">
                    {lines.map((line, i) => (
                      <Typography key={i} variant="body-lg" className="leading-relaxed text-white/90">
                        {line}
                      </Typography>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
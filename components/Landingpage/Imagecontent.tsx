import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { Boldtext } from "./Boldtext";
import { ImageContentProps } from "@/lib/constants/Landingpagetypes";

export default function ImageContent({ content }: Readonly<ImageContentProps>) {
  const { label, heading, paragraphs, image, imageAlt } = content;

  return (
    <section id="strategy" className="flex w-full flex-col items-center bg-black py-6 lg:py-10">
      <div className="flex w-full max-w-7xl flex-col px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 flex w-full flex-col items-center gap-5 text-center lg:items-start lg:text-left">
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
              {paragraphs.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {Boldtext(paragraph)}
                </Typography>
              ))}
            </div>
          </div>

          <div className="order-2 flex w-full justify-center">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:max-w-none">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
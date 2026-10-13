import Image from "next/image";
import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { ServingNearbyProps } from "@/lib/constants/Landingpagetypes";

export default function ServingNearby({ content }: Readonly<ServingNearbyProps>) {
  const { label, heading, intro, image, imageAlt, areas, bottom } = content;

  return (
    <section id="areas" className="flex w-full flex-col items-center bg-black py-6 lg:py-10">
      <div className="flex w-full max-w-7xl flex-col gap-10 px-6 lg:gap-12 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 flex w-full flex-col items-start gap-5">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="size-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 ">
                {label}
              </Typography>
            </div>

            <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
              {heading}
            </Typography>

            <div className="flex w-full flex-col gap-4">
              {intro.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {paragraph}
                </Typography>
              ))}
            </div>
          </div>

          <div className="order-2 flex w-full justify-center lg:justify-end">
            <div
              className="relative w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 sm:w-3/4 lg:w-full aspect-video"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <Typography
              key={area}
              as="span"
              variant="body-lg"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 transition-all hover:-translate-y-0.5 hover:border-[#69AE44]/40 hover:bg-[#69AE44]/10 hover:text-white"
            >
              <MapPin className="size-3.5 text-[#69AE44]" />
              {area}
            </Typography>
          ))}
        </div>

        {!!bottom?.length && (
          <div className="flex w-full flex-col gap-4">
            {bottom.map((paragraph, i) => (
              <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                {paragraph}
              </Typography>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
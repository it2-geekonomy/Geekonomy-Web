<<<<<<< HEAD
import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const nearbyAspects = {
  "6/4": "aspect-[6/4]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
} as const;

export type ServingNearbyAspect = keyof typeof nearbyAspects;

export interface ServingNearbyContent {
  label: string;
  heading: string;
  intro: string[];
  image: string;
  imageAlt: string;
  aspect?: ServingNearbyAspect;
  areas: string[];
  bottom?: string[];
}

interface ServingNearbyProps {
  content: ServingNearbyContent;
}

export default function ServingNearby({ content }: ServingNearbyProps) {
  const { label, heading, intro, image, imageAlt, aspect = "6/4", areas, bottom } = content;

  return (
    <section id="areas" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80 uppercase">
=======
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
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
                {label}
              </Typography>
            </div>

            <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
              {heading}
            </Typography>

<<<<<<< HEAD
            <div className="mt-5 space-y-4">
=======
            <div className="flex w-full flex-col gap-4">
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
              {intro.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {paragraph}
                </Typography>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div
              className={`w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] ${nearbyAspects[aspect]}`}
            >
              <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
=======
          <div className="order-2 flex w-full justify-center lg:justify-end">
            <div
              className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:w-3/4 lg:w-full aspect-video"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
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
<<<<<<< HEAD
              <MapPin className="h-3.5 w-3.5 text-[#69AE44]" />
=======
              <MapPin className="size-3.5 text-[#69AE44]" />
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
              {area}
            </Typography>
          ))}
        </div>

<<<<<<< HEAD
        {bottom && bottom.length > 0 && (
          <div className="mt-7 space-y-4">
=======
        {!!bottom?.length && (
          <div className="flex w-full flex-col gap-4">
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
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
import { Typography } from "@/components/ui/Typography";
import { Boldtext } from "./Boldtext";

const AspectRatioSize = {
  "4/5": "aspect-[4/5]",
  "4.5/5": "aspect-[4.5/5]",
  "5/5": "aspect-[5/5]",
  "6/5": "aspect-[6/5]",
  "1/1": "aspect-square",
} as const;

export type AspectRatio = keyof typeof AspectRatioSize;

export interface ImageContentList {
  label: string;
  heading: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  aspect?: AspectRatio;
}

interface ImageContentProps {
  content: ImageContentList;
}

export default function ImageContent({ content }: ImageContentProps) {
  const { label, heading, paragraphs, image, imageAlt, aspect = "4/5" } = content;

  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
              <Typography variant="overline" className="text-white/80">
                {label}
              </Typography>
            </div>

            <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
              {heading}
            </Typography>

            <div className="mt-5 space-y-4">
              {paragraphs.map((paragraph, i) => (
                <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
                  {Boldtext(paragraph)}
                </Typography>
              ))}
            </div>
          </div>

          <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div
              className={`w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] ${AspectRatioSize[aspect]}`}
            >
              <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
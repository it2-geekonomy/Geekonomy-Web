import { Typography } from "@/components/ui/Typography";
import { Boldtext } from "./Boldtext";
<<<<<<< HEAD

export interface TextSectionContent {
  label: string;
  heading: string;
  paragraphs: string[];
}

interface TextSectionProps {
  content: TextSectionContent;
}

export default function TextSection({ content }: TextSectionProps) {
  const { label, heading, paragraphs } = content;

  return (
    <section id="result" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
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
=======
import { TextSectionProps } from "@/lib/constants/Landingpagetypes";

export default function TextSection({ content }: Readonly<TextSectionProps>) {
  const { label, heading, paragraphs } = content;

  return (
    <section id="result" className="flex w-full flex-col items-center bg-black py-8 lg:py-10">
      <div className="flex w-full max-w-5xl flex-col items-center gap-5 px-6 text-center lg:px-8">
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
            <Typography key={i} variant="body-xl" className="leading-relaxed text-white">
              {Boldtext(paragraph)}
            </Typography>
          ))}
>>>>>>> 90330df232d63e4529553dd5d67ba34e58ee68f8
        </div>
      </div>
    </section>
  );
}
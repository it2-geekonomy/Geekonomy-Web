import { Plus } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

export interface FAQItem {
  q: string;
  a: string[];
}

export interface FAQContent {
  label: string;
  heading: string;
  intro?: string[];
  faqs: FAQItem[];
}

interface FAQProps {
  content: FAQContent;
}

export default function FAQ({ content }: FAQProps) {
  const { label, heading, intro, faqs } = content;

  return (
    <section id="faq" className="bg-white/[0.02] py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              {label}
            </Typography>
          </div>
          <Typography variant="display-2xl" as="h2" className="text-white leading-tight">
            {heading}
          </Typography>
          {intro && intro.length > 0 &&(
          <div className="mt-5 space-y-4">
            {intro.map((paragraph, i) => (
              <Typography
                key={i}
                variant="body-xl"
                className="leading-relaxed text-white/90"
              >
                {paragraph}
              </Typography>
            ))}
          </div>
          )}
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-white/20">
          {faqs.map(({ q, a }, i) => (
            <details key={q} name="faq-accordion" className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 marker:content-none">
                <Typography as="h3" variant="h3" className="text-lg font-semibold text-white">
                  {q}
                </Typography>
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[0.625rem] bg-white/5 transition-colors group-open:bg-[#69AE44]">
                  <Plus className="h-4 w-4 text-[#69AE44] transition-transform duration-300 group-open:rotate-45 group-open:text-black" />
                </span>
              </summary>
              <div className="max-w-[92%] space-y-2 pb-3">
                {a.map((line, j) => (
                  <Typography key={j} variant="body-lg" className="leading-relaxed text-white/90">
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
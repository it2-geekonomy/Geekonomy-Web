import { Plus } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const faqs = [
  {
    q: "How much does PPC management cost in Charlotte?",
    a: "The fee will depend upon how large the campaign you want managed is, your advertising budget, the level of competition, and your level of targeting, as well as the level of ongoing optimization that will be necessary. Usually, your advertising spend is separate from your PPC management fee.",
  },
  {
    q: "How much should a Charlotte business spend on Google Ads?",
    a: "No, there is no one-size-fits-all Google Ads budget. Your starting budget should be determined based on the type of industry or product, average customer value, level of competition, conversion rate, and number of qualified leads or sales you hope to obtain.",
  },
  {
    q: "How long does PPC take to generate results?",
    a: "PPC will immediately begin driving traffic and conversions as campaigns go live; however, optimization is a slow process. Running campaigns will show what is converting and what is not, and this determines how to alter the campaign.",
  },
  {
    q: "Is Google Ads better than SEO for a Charlotte business?",
    a: "PPC (Google Ads) and SEO are different kinds of channels. PPC can give you immediate visibility to relevant search terms; PPC can give you long-term organic visibility. (Businesses tend to implement both as a general search marketing plan.",
  },
  {
    q: "What does a PPC agency do?",
    a: "An agency specializing in PPC will handle all paid advertising strategy, keyword and ad copy creation, campaign set-up, audience and location selection and optimization, conversion tracking, bids and budget management, and reporting.",
  },
  {
    q: "Can PPC target specific Charlotte neighborhoods?",
    a: "Yes. Geographical targeting of ad campaigns can be done for any location or service area. Location strategy could be based on customers’ location or yours.",
  },
  {
    q: "How do you measure PPC campaign performance?",
    a: "One or more of the following: conversions, qualified leads, cost per lead, conversion rate, click-through rate, conversion value, and return on ad spend can be used to measure PPC performance. Interpretation based on your business objectives is where the real value lies.",
  },
  {
    q: "Can you manage an existing Google Ads account?",
    a: "Yes. An account already in place can be audited to check for improvements that are available in terms of campaign structure, keywords, search terms, ads, targeting, conversion tracking, budget and performance before beginning work on an optimization schedule.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white/[0.02] py-8 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              ANSWERS
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Frequently Asked Questions About Charlotte PPC
          </Typography>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-white/20">
          {faqs.map(({ q, a }, i) => (
            <details key={q} name="faq-accordion" className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 marker:content-none">
                <Typography as="h3" variant="h3" className="text-lg font-semibold text-white">
                  {q}
                </Typography>
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[10px] bg-white/5 transition-colors group-open:bg-[#69AE44]">
                  <Plus className="h-4 w-4 text-[#69AE44] transition-transform duration-300 group-open:rotate-45 group-open:text-black" />
                </span>
              </summary>
              <Typography variant="body-lg" className="max-w-[92%] pb-6 leading-relaxed text-white/90">
                {a}
              </Typography>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Plus } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const faqs = [
  {
    q: "What does a Carlsbad SEO company do?",
    a: "A Carlsbad SEO firm offers a free benefit of sorts to your business. A Carlsbad SEO firm helps your business rank highly in the organic search results for your business’ targeted products, services and local search terms. This can include anything from technical SEO, on-page optimization, content & link building and conversion optimization.",
  },
  {
    q: "How can SEO help my Carlsbad business?",
    a: "Using Search Engine Optimization (SEO), your business can attract the people already searching for what you sell. An effective campaign will enable your business to boost organic visibility, drive relevant traffic, create leads and sustain in local search.",
  },
  {
    q: "Do you provide local SEO in Carlsbad?",
    a: "Yes. Geekonomy provides local SEO services that will optimize the website to rank high in relevant Carlsbad searches. It may include optimization of Google Business Profile, local content, citation cleanup, local authority construction, as well as local Google Maps rankings.",
  },
  {
    q: "Can SEO help improve Google Maps rankings?",
    a: "Local SEO. Local SEO offers the opportunity to enhance the signals for your Google Business Profile and local presence. Factors such as business relevance, business proximity, business prominence, reviews, website signals, business data consistency, etc. can impact local search visibility.",
  },
  {
    q: "How long does SEO take to produce results?",
    a: "The SEO timeframes are different, depending on your website health, competition, industry, authority and the size of your SEO strategy. Some results can be noticed very quickly, and others take years for real organic visibility and reputation building.",
  },
  {
    q: "What SEO services does Geekonomy provide?",
    a: "In the world of the seo, Geekonomy offers a number of services, including Local SEO, technical SEO, on-page SEO, semantic SEO, content SEO, link building, Google Maps SEO, and AI search optimization. Targeted strategies should be customized for each organization, according to search opportunities in place.",
  },
  {
    q: "How do I get started with Geekonomy?",
    a: "Start with an SEO strategy or audit for your current capability. Geekonomy can evaluate your search presence and competition, your technical platform, content and local presence and develop a laser-targeted SEO plan for your business.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white/[0.02] py-8 lg:py-10">
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
            Carlsbad SEO Company FAQs
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            The questions we hear most from Carlsbad businesses.
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
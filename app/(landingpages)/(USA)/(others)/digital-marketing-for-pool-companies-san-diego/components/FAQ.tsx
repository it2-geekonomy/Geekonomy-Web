import { Plus } from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const faqs = [
  {
    q: "What does a pool marketing agency do?",
    a: "What a pool marketing agency would do to generate leads for a pool company would be to generate leads through digital media like local SEO, Google Ads, content marketing, website enhancement, social media, and online reputation management. It would be designed around the company offering, its target audience, and growth objectives.",
  },
  {
    q: "How can I get more pool service leads in San Diego?",
    a: "Local Search engine optimization (SEO). Setting up a Google Business Profile, combined with local SEO strategies, running Google Ads, creating service-specific landing pages, along with reviews, content marketing, and conversion rate optimization, can bring your business in front of the people searching for Pool services in San Diego.",
  },
  {
    q: "How much does pool marketing cost in San Diego?",
    a: "Marketing costs for pool marketing are very variable depending on your service, your competitors, coverage area, your website(s), your marketing channels, and your goal for generating leads. A tailored campaign works better than implementing the same marketing package for each pool business.",
  },
  {
    q: "How long does pool SEO take to produce results?",
    a: "SEO isn’t a quick fix but, as a broad explanation, it is a long-term tactic that can take anywhere from several months to consistent improvements, depending on the level of competition, the existing authority of the website, the technical health of the website, the quality of the content created, and the services and locations targeted.",
  },
  {
    q: "Is SEO or Google Ads better for pool companies?",
    a: "Both can make sense for different reasons. Google Ads can help create visibility and potential leads quickly. SEO can help create sustainable organic visibility over time. Both together can help businesses capture demand in the short term and grow search performance long-term.",
  },
  {
    q: "Can you help my pool company rank on Google Maps?",
    a: "Yes. Local search can benefit from Google Business Profile, category and service areas optimization, reputation management tactics, local relevance, Citations, and others.",
  },
  {
    q: "Do you work with pool builders and remodelers?",
    a: "Different types of pool businesses, such as pool builders, remodelers, repair companies, cleaning companies, maintenance, resurfacing, and commercial pool service, represent targets for a marketing strategy.",
  },
  {
    q: "Can you target specific San Diego neighborhoods?",
    a: "Yes. Relevant service areas and communities can be identified and marketing initiatives planned. Location should not just be addressed by creating additional pages with the only difference being that the name of the location changes, but rather by providing truly useful local information.",
  },
  {
    q: "How do you measure pool marketing ROI?",
    a: "We can measure stats like how many leads generated are quality leads, phone calls received, quote requests received, conversion rates, cost per lead, organic search optimization, paid search marketing, and any other business-related variables.",
  },
  {
    q: "Can you manage both SEO and PPC?",
    a: "Absolutely, Search Engine Optimization (SEO) and Pay-Per-Click (PPC) marketing can definitely be used cohesively as two well-connected channels. The Investment in organic sales through SEO can be further capitalized through PPC advertising, which also provides valuable data.",
  },
  {
    q: "How do I get started with a pool marketing agency in San Diego?",
    a: "The initial step is to analyze your present website as well as your current search visibility, your competitors, your services, your service areas, as well as the lead-generation goals you are aiming for. The best customized marketing strategy can then be prepared, targeting the areas of most significant opportunities for your business.",
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
            Frequently Asked Questions About Pool Marketing in San Diego
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Pool marketing in San Diego - the questions we hear most.
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
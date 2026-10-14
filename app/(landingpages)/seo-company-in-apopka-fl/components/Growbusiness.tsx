import { Typography } from "@/components/ui/Typography";

export default function GrowBusiness() {
  return (
    <section id="strategy" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 w-full lg:max-w-2xl text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Grow Business
            </Typography>
          </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Local SEO for Apopka Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            The visibility of local search can be crucial in whether or not your location is found when searchers are looking for services nearby. Good local SEO will improve how relevant your website and business details are in relation to a search in that location.
          </Typography>

          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            For Apopka SEO Company, such as Geekonomy, the search tactic is designed to raise a company‘s local presence through optimizing their website, improving their Google Business Profile, creating localized content and citations, and using location specific keywords. The purpose of this search element is to establish a consistent and valuable online presence for Apopka companies.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Local SEO is more than putting the city or location you want to rank in on the website content. Google takes into account business information, website relevance, location signals, content quality, technical performance and online consistency. These are all encompassed in a solid SEO campaign.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            If your business has customers in the Apopka area, developing a local search driven strategy can give your business a boost by providing the right market with the right search results at the exact moment that the customer is making their decision.Geekonomy develops location specific SEO campaigns to match your business, your services and your target market.
          </Typography>
        </div>

        <div className="order-2 mx-auto w-full max-w-95 lg:mx-0 lg:max-w-130 lg:justify-self-end">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[1rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <img
                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/Apopka-h2.webp"
                alt="Apopka Business"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
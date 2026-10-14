
import { Typography } from "@/components/ui/Typography";
import { Lists } from "../const/Industries";

export default function Industries() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Industries
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
           SEO for Carmel Indiana Businesses Across Different Industries
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Search engine optimization efforts can be most effective when they align with the industry‘s specific customer search patterns. A homeowner looking for a local contractor will search differently than a business owner searching for a professional service and the differences should be incorporated into keywords, content, landing pages, and conversion strategy.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            Depending on the products/services, customers and competitors of the firm, the Geekonomy approach will be different.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {Lists.map(({  image, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >

              <div className="mb-4 overflow-hidden rounded-[0.8125rem] border border-white/10 bg-white/[0.03]">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <Typography variant="h3" as="h3" className="mb-2 text-white font-semibold">
                {title}
              </Typography>

              {Array.isArray(desc) ? (
                <div className="space-y-2">
                  {desc.map((line, i) => (
                    <Typography
                      key={i}
                      variant="body-lg"
                      className="leading-relaxed text-white/90"
                    >
                      {line}
                    </Typography>
                  ))}
                </div>
              ) : (
                <Typography variant="body-lg" className="leading-relaxed text-white/90">
                  {desc}
                </Typography>
              )}
            </div>
          ))}
        </div>
        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          No matter what industry you are in, the bottom line is the same; market your website in relation to those searches that are truly relevant to your business. A Carmel SEO agency should customize its strategy to your industry, instead of an identical campaign for all.
          </Typography>
      </div>
    </section>
  );
}
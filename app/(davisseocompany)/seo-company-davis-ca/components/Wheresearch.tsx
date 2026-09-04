 
import { Typography } from "@/components/ui/Typography";
import { Lists } from "../const/Wheresearch";

export default function WhereSearch() {
  return (
    <section id="results" className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Searching
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
           Get Found Where Davis Customers Are Searching
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Your customers might find your business in Google maps, local searches, service pages or in the knowledge panels, even before contacting you. Consequently, you should target several search experiences and not just a single ranking.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            From a Davis SEO Company, Geekonomy helps you reach the right searches at varying steps in the buying cycle. We enhance your web site and local presence to help search engines more clearly comprehend your services, local area, experience, and where your potential customers are.
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
          Davis SEO easy is part of the mission: to just enable your business to be discovered easily when any of the Davis residents are searching for whatever product and/or service you have to offer.
          </Typography>
      </div>
    </section>
  );
}
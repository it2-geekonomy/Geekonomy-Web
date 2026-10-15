
import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Localseo";

export default function LocalSeo() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
                Local SEO Services
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Local SEO Services Built for Miramar Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            For Miramar businesses generic SEO strategies are not going to be enough. Achieving local search marketing success means being able to target individuals in the local community who are searching for the particular product or service. Geekonomy creates targeted localized efforts for companies to step their way through the local search rankings.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We focus on your services, your audience, your competition, your website‘s architecture, and local searcher intention; then we build relevant content and local indicators that aid in better recognition.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {Items.map(({  image, title, desc }) => (
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
      </div>
    </section>
  );
}


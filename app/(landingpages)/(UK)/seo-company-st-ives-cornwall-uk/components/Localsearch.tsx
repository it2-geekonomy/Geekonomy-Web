
import { Typography } from "@/components/ui/Typography";
import { Items } from "../const/Localsearch";

export default function LocalSearch() {
  return (
    <section id="service" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
                Local SEO Services
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Build Stronger Local Visibility in St Ives
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            When people search for your type of service locally, even just appearing in relevant local search results can have a huge impact on your capacity to attract new customers. We ‘re local search engine optimization platform is designed to help make your website and business profile more relevant to the search terms that count in St Ives.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            As <span className="text-[#FFFFFF] font-semibold">St Ives SEO Company</span>, we approach your local search performance from various perspectives, including your website, Google Business Profile, location-specific optimization, reviews, and local search intent.
          </Typography>
          <Typography variant="display-xl" as="h3" className="mt-6 text-white font-semibold">
            What We Focus On
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-[0.8125rem] bg-[#69AE44]/10 text-[#69AE44]">
                <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" strokeWidth={1.8} />
              </div>
              <Typography variant="h3" className="mb-2 text-white font-semibold">
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
        <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          It is not just about having your nice face optimized for a local search term. It’s about having a persistent local identity so that someone can find you and your business and learn about your business and your services and move on.
        </Typography>
      </div>
    </section>
  );
}
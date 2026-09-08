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
            variant="display-2xl"
            as="h2"
            className="text-white leading-tight"
          >
           SEO for Different Types of Palm Harbor Businesses
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            Every industry attracts different user groups and each business has its own sets of offerings. An effective SEO campaign should adapt uniquely to your industry, line of service, target markets, and local standards. Geekonomy creates search campaigns based on the factors, terms, and concepts that matter most to how consumers, in your line of service, think.
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
            We can tailor SEO campaigns for a wide range of Palm Harbor businesses, including:
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
          When you adapt the strategy to your market with our <span className="text-[#FFFFFF] font-semibold">SEO company Palm Harbor FL</span> then it allows your business to rank for searches that are aimed toward the type of customers you want to attract.
        </Typography>
      </div>
    </section>
  );
}
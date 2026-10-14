
import { Typography } from "@/components/ui/Typography";
import { StrategyBussinessItems } from "../const/Strategybussiness";

export default function StrategyBussiness() {
  return (
    <section id="strategy" className="bg-black py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
             <Typography variant="overline" className="text-white/80">
               Built for Your Business
             </Typography>
           </div>

          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Marketing Strategies Built for Window & Door Companies
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          The average window and door buyer usually doesn't call the first person they find. He will weigh options such as product selection, installation options, customer reviews, warranties, service areas, pricing information, and competitors before asking for an estimate from window companies. You need to market to him throughout that process and offer a compelling reason to select your company.         
          </Typography>
          <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          Geekonomy develops a digital marketing approach based on the behavior of how homeowners look for, compare, and buy from window companies, utilizing email marketing to engage potential customers.        
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {StrategyBussinessItems.map(({  image, title, desc }) => (
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
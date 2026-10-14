import { Typography } from "@/components/ui/Typography";
import { types } from "../const/logisticstypelist"

export default function LogisticsType() {
  return (
    <section id="types" className="bg-white/[0.02] py-6 lg:py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              By Logistics Type
            </Typography>
          </div>
    
          
          <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Marketing Strategies Built Around Your Logistics Services
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
            All Logistics Companies sell to a different market, but they can benefit from understanding industrial marketing principles. For example, a freight company sells to shippers, and a 3PL will need to access manufacturers, retailers, and eCommerce companies. Your digital marketing strategy should be based around your services, clients, geographies, competitor market, and the nuances of industrial marketing.
          </Typography>

        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {types.map(({ image, title, desc }) => (
            <div
              key={title}
              className="w-95 max-w-full mx-auto md:w-auto md:mx-0 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40"
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
              <Typography variant="body-lg" className="leading-relaxed text-white/90">
                {desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

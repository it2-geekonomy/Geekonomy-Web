
import { Typography } from "@/components/ui/Typography";
import { flow } from "../const/Localsearch";

export default function LocalSearch() {
  return (
    <section id="how" className="bg-white/[0.02] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              Paving Leads
            </Typography>
          </div>

            <Typography variant="display-2xl" as="h2" className="text-white  leading-tight">
            Turn Local Searches Into Paving Leads
          </Typography>
          <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
          Getting found is only the start of working with a digital marketing agency. When people search for paving companies online, your digital marketing should convert a Google search into a request for a quote.       
          </Typography>
           <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          We integrate your entire stream of marketing so that every step naturally flows to the next. Use search engine marketing / optimization and paid search on those people searching for your paving services, then convince visitors to take an action and become a lead. Use targeted landing pages, a powerful message, positive reviews and calls to action.        
          </Typography>
           <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90">
          The result is a more integrated online marketing program that is designed to take advantage of local search demand and find a steady stream of residential and commercial paving jobs.      
          </Typography>
        </div>

        <div className="mt-11 overflow-x-auto lg:overflow-visible rounded-[1.25rem] border border-[#69AE44] bg-[#69AE44]/10 p-7">
          <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
            {flow.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <span
                  className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === flow.length - 1
                      ? "bg-[#69AE44] text-black"
                      : "border border-white/10 bg-white/10 text-white/80"
                    }`}
                >
                  {s}
                </span>
                {i < flow.length - 1 && <span className="text-[#69AE44]">→</span>}
              </div>
            ))}
          </div>
        </div> 
      </div>
    </section>
  );
}
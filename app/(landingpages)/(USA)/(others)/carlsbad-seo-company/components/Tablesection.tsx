import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { rows } from "../const/Tablesection";

export default function Comparison() {
  return (
    <section className="bg-black py-8 lg:py-10">
      <div className="mx-auto max-w-[90rem] px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80 text-nowrap">
              CLEAR COMPARISON
            </Typography>
          </div>

          <Typography
            variant="display-2xl"
            as="h2"
            className="mx-auto max-w-5xl text-white leading-tight"
          >
            How Working With a Dedicated Carlsbad SEO Company Compares
          </Typography>

          <Typography variant="body-xl" className="mx-auto max-w-3xl mt-5 leading-relaxed text-white/90">
            Carlsbad companies have numerous alternatives for gaining additional search exposure, from handling SEO internally to hiring a generalist agency. Below is how a dedicated Carlsbad SEO approach stacks up regarding increasing local searches, conversions, and customers:
          </Typography>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.25rem] border border-white/30">
          <div className="overflow-x-auto">
            <table className="w-full min-w-250 border-collapse">
              <thead>
                <tr className="bg-[#69AE44]/30">
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      What Your Carlsbad Business Needs
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Geekonomy
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Generalist Agency
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Self-Managed SEO
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.need}
                    className={`border-t border-white/30 ${
                      i % 2 === 1 ? "bg-white/[0.03]" : "bg-transparent"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="text-white">
                        {row.need}
                      </Typography>
                    </td>
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="font-semibold text-[#69AE44]">
                        {row.geekonomy}
                      </Typography>
                    </td>
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="text-white">
                        {row.generalist}
                      </Typography>
                    </td>
                    <td className="px-6 py-4">
                      <Typography variant="body-lg" className="text-white">
                        {row.selfManaged}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
        <span className="text-[#69AE44]">Why this version is stronger: </span>It goes further than saying “local SEO” and communicates the tangible elements that a Carlsbad organization must optimize in order to perform in local search: Google Business Profile, map dominance, service page optimization, local signals, technical optimization, reputation signals, and lead tracking.        
        </Typography>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex w-full max-w-65 items-center justify-center rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-center text-black transition-transform hover:scale-[1.03] sm:w-auto sm:max-w-none"
          >
            <Typography variant="body-lg" className="font-semibold text-black">
              Get a Free Consultation
            </Typography>
          </a>
        </div>
      </div>
    </section>
  );
}
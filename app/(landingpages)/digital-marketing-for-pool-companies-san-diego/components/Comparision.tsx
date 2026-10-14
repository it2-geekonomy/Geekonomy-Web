import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

const rows = [
  {
    need: "Google Ads targeted to SD neighbourhoods",
    geekonomy: "City and zip code precision",
    generalist: "Broad regional targeting",
    selfManaged: "Possible but setup is complex",
  },
  {
    need: "Pool company SEO for local SD searches",
    geekonomy: "Google Business + location pages",
    generalist: "Generic approach, slow local gains",
    selfManaged: "Usually skipped or inconsistent",
  },
  {
    need: "Facebook ads targeting SD homeowners",
    geekonomy: "SD-audience parameters built in",
    generalist: "Often a separate add-on cost",
    selfManaged: "Creative and targeting quality varies",
  },
  {
    need: "Social media management for pool company",
    geekonomy: "Managed with SD-specific content",
    generalist: "Generic content, not SD-focused",
    selfManaged: "Sporadic, no consistent strategy",
  },
  {
    need: "Email marketing for lead nurture",
    geekonomy: "Segmented sequences from day one",
    generalist: "Rarely included at base price",
    selfManaged: "Almost never implemented",
  },
  {
    need: "Reputation management across SD platforms",
    geekonomy: "Google, Yelp, Houzz, Nextdoor",
    generalist: "Not typically SD-platform focused",
    selfManaged: "Reactive, no proactive approach",
  },
  {
    need: "PPC managed by licensed specialists",
    geekonomy: "Vetted, credentialed team",
    generalist: "Often junior-level accounts",
    selfManaged: "High budget risk without expertise",
  },
  {
    need: "Registered and licensed agency",
    geekonomy: "Fully registered and licensed",
    generalist: "Varies by agency",
    selfManaged: "Not applicable",
  },
];

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
            variant="display-xl"
            as="h2"
            className="mx-auto max-w-5xl text-white text-2xl sm:text-4xl lg:text-5xl leading-[1.1]"
          >
            The Benefits of Working With a Dedicated San Diego
            Pool Marketing Agency
          </Typography>

          <Typography variant="body-xl" className="mx-auto max-w-3xl mt-5 leading-relaxed text-white/90">
            Pool companies in San Diego have attempted all levels of marketing
            from in house to generalist agencies to simple self-managed
            advertising. Here&apos;s how they stack up against a specific
            local pool marketing strategy.
          </Typography>
        </div>

        <div className="mt-12 overflow-hidden rounded-[20px] border border-white/30">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead>
                <tr className="bg-[#69AE44]/30">
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      What Your Pool Business Needs
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Geekonomy (SD-Specific)
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Generalist Agency
                    </Typography>
                  </th>
                  <th className="px-6 py-5 text-left">
                    <Typography variant="body-xl" className="font-bold text-white">
                      Self-Managed Ads
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

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex w-full max-w-[260px] items-center justify-center rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-center text-black transition-transform hover:scale-[1.03] sm:w-auto sm:max-w-none"
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
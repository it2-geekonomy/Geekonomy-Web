import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

const rows = [
  {
    need: "Carlsbad-focused keyword strategy",
    geekonomy: "Built around local search intent",
    generalist: "Broad regional keyword targeting",
    selfManaged: "Often focused on obvious keywords",
  },
  {
    need: "Google Business Profile optimization",
    geekonomy: "Optimized for local visibility & leads",
    generalist: "Usually a standard setup",
    selfManaged: "Easy to overlook key factors",
  },
  {
    need: "Carlsbad location targeting",
    geekonomy: "City, neighborhood & service-level targeting",
    generalist: "Generic location targeting",
    selfManaged: "Limited local strategy",
  },
  {
    need: "Local SEO & map visibility",
    geekonomy: "Ongoing local SEO management",
    generalist: "May be an add-on service",
    selfManaged: "Inconsistent optimization",
  },
  {
    need: "Service pages that attract local buyers",
    geekonomy: "Built around services + Carlsbad search intent",
    generalist: "Template-based pages",
    selfManaged: "Usually basic service content",
  },
  {
    need: "Local citations & directory consistency",
    geekonomy: "Managed across relevant platforms",
    generalist: "Often handled periodically",
    selfManaged: "Rarely maintained consistently",
  },
  {
    need: "Reviews & local reputation signals",
    geekonomy: "Strategy focused on building local trust",
    generalist: "Basic review monitoring",
    selfManaged: "Usually reactive",
  },
  {
    need: "Technical SEO & site performance",
    geekonomy: "Ongoing technical improvements",
    generalist: "Audited occasionally",
    selfManaged: "Difficult to identify and fix issues",
  },
  {
    need: "SEO content strategy",
    geekonomy: "Content mapped to local customer journeys",
    generalist: "Generic industry content",
    selfManaged: "Content created when time allows",
  },
  {
    need: "Local schema & search signals",
    geekonomy: "Structured for stronger local relevance",
    generalist: "Depends on the agency",
    selfManaged: "Commonly missed",
  },
   {
    need: "SEO reporting & lead tracking",
    geekonomy: "Focused on rankings, traffic & qualified leads",
    generalist: "Often focused on traffic and rankings",
    selfManaged: "Limited measurement",
  },
   {
    need: "Strategy built around business growth",
    geekonomy: "SEO aligned with your services and revenue goals",
    generalist: "One-size-fits-most approach",
    selfManaged: "Trial-and-error approach",
  },
  {
    need: "Dedicated SEO expertise",
    geekonomy: "Specialists managing your SEO strategy",
    generalist: "Mixed-experience team",
    selfManaged: "Requires learning SEO yourself",
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
            How Working With a Dedicated Carlsbad SEO Company Compares
          </Typography>

          <Typography variant="body-xl" className="mx-auto max-w-3xl mt-5 leading-relaxed text-white/90">
            Carlsbad companies have numerous alternatives for gaining additional search exposure, from handling SEO internally to hiring a generalist agency. Below is how a dedicated Carlsbad SEO approach stacks up regarding increasing local searches, conversions, and customers:
          </Typography>
        </div>

        <div className="mt-12 overflow-hidden rounded-[20px] border border-white/30">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
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
        <span className="text-[#69AE44]">Why this version is stronger: </span>It goes further than saying “local SEO” and communicates the tangible elements that a Carlsbad organization must optimize in order to perform in local search: Google Business Profile, map dominance, service page optimization, local signals, technical optimization,  reputation signals, and lead tracking.        
        </Typography>
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
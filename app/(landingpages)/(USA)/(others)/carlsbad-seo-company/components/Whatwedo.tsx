import { Typography } from "@/components/ui/Typography";
import { services } from "../const/Whatwedo";

export default function Services() {
    return (
        <section id="services" className="bg-black py-6 lg:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
                        <Typography variant="overline" className="text-white/80">
                            WHAT WE DO
                        </Typography>
                    </div>
                    <Typography
                        variant="display-2xl"
                        as="h2"
                        className="text-white leading-tight"
                    >
                        Carlsbad SEO Services That Drive Qualified Leads
                    </Typography>
                    <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
                        The benefit of ranking higher is getting your business visible to the right customers. Geekonomy integrates technical search engine optimization, content, local search optimization, and authority building to help your business be found where it counts.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {services.map(({ num, icon: Icon, title, desc }) => (
                        <div
                            key={num}
                            className="relative w-full max-w-95 mx-auto md:max-w-none md:mx-0 rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40"
                        >
                            <span className="absolute right-6 top-6 text-sm font-extrabold text-[#69AE44]/40">
                                {num}
                            </span>
                            <div className="mb-4 flex h-12.5 w-12.5 items-center justify-center rounded-[0.625rem] bg-[#69AE44]/10 text-[#69AE44]">
                                <Icon className="h-6 w-6" strokeWidth={1.8} />
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
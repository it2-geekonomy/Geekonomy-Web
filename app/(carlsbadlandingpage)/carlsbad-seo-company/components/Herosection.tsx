import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";
import { badges, HeroKeywords, stats } from "../const/Herosection";

export default function Hero() {
    return (
        <section id="top" className="relative w-full bg-black overflow-hidden">
            <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-[#69AE44]/20 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 rounded-full bg-[#69AE44]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-4 md:py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="text-center lg:text-left">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
                            <Typography variant="overline" className="text-white text-nowrap">
                                Carlsbad SEO Company
                            </Typography>
                        </div>

                        <Typography variant="display-2xl" as="h1" className="text-white leading-tight">
                            Carlsbad SEO Company That Helps{" "}
                            <span className="text-[#69AE44]">Turn Searches Into Customers</span>
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                            Geekonomy is a  <span className="text-[#FFFFFF] font-semibold">Carlsbad SEO</span> company. We help local companies get more searches by expanding your organic visibility, bringing in more pre-sale customers, and converting more legitimate leads from search. Our methods include a blend of
                           <span className="text-[#FFFFFF] font-semibold"> local SEO,</span> technical, <span className="text-[#FFFFFF] font-semibold"> semantic</span> optimization, on and off-page 
                           <span className="text-[#FFFFFF] font-semibold"> content and authority</span> optimization to help get your business in front of searchers.
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                        From increasing your ranking in Google to optimizing your presence in local search, or growing your website organically over time, we develop an SEO plan based on your business objectives-not a cookie-cutter approach.                        </Typography>

                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
                            <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-72 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-black transition-transform hover:scale-[1.03] sm:w-auto">
                                <Typography variant="body-lg" className="font-semibold text-black">
                                    Get Your Free SEO Strategy
                                </Typography>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
                            <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-72 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto">
                                <Typography variant="body-lg" className="font-semibold text-white">
                                    Request a Free SEO Audit
                                </Typography>
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-[4/4.4] w-full max-w-[20rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 mx-auto sm:max-w-105 lg:max-w-130 lg:mx-0">
                            <img
                                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/herosection.png"
                                alt="Carlsbad SEO Company local visibility"
                                className="h-full w-full object-cover"
                            />

                            {badges.map((badge) => (
                                <div
                                    key={badge.title}
                                    className={`absolute ${badge.position} flex items-center gap-3 rounded-[1rem] bg-white px-4 py-3 shadow-xl`}
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-[0.5rem] bg-[#69AE44]/10 text-[#69AE44]">
                                        <badge.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <Typography variant="body-sm" className="font-bold text-black">
                                            {badge.title}
                                        </Typography>
                                        <Typography variant="caption" className="text-black/50">
                                            {badge.subtitle}
                                        </Typography>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center gap-y-8 text-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:text-left">
                    {stats.map((stat) => (
                        <div key={stat.value}>
                            <Typography variant="display-xl" as="p" className="text-[#69AE44] whitespace-nowrap">
                                {stat.value}
                            </Typography>
                            <Typography variant="body-lg" className="text-white">
                                {stat.label}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative border-t border-white/30">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-10 text-center lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
                    <Typography variant="body-lg" className="rounded-full bg-[#69AE44]/20 px-4 py-2 text-white font-semibold uppercase">
                        A complete search foundation across every ranking factor
                    </Typography>

                    <div className="flex max-w-md flex-wrap justify-center gap-4 lg:justify-start">
                        {HeroKeywords.map((service) => (
                            <span key={service} className="w-fit whitespace-nowrap rounded-full border border-[#69AE44]/90 bg-white/5 px-4 py-2.5">
                                <Typography variant="body-sm" className="font-semibold text-white">
                                    {service}
                                </Typography>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
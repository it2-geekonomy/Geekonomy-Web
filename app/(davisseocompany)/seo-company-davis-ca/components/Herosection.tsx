import { ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { badges, HeroKeywords, stats } from "../const/Herosection";
import { handleScrollToContact } from "@/components/Scrolltosection/Scrolltocontact";

export default function Hero() {
    return (
        <section id="top" className="relative w-full bg-black overflow-hidden">
            <div className="pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full bg-[#69AE44]/20 blur-[7.5rem] " />
            <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 rounded-full bg-[#69AE44]/10 blur-[6.25rem]" />

            <div className="relative mx-auto max-w-7xl px-6 py-4 md:py-8 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="text-center lg:text-left">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
                            <Typography variant="overline" className="text-white text-nowrap">
                              Davis SEO Agency
                            </Typography>
                        </div>

                        <Typography variant="display-2xl" as="h1" className="text-white  leading-tight">
                            Davis SEO Company{" "}
                            <span className="text-[#69AE44]">That Helps Businesses Grow Online</span>
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                          Potential customers are already looking for your products and services. The hard part is getting found on Google when they are searching for you. We are a Davis SEO Company and we help companies rank higher in the search engines, gain targeted local traffic and convert more searches into leads and customers.
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                          Our comprehensive approach integrates local SEO and technical, content, keyword and authority building strategies around the goals of your business. Whether your goal is to enhance your presence in Davis, attract the surrounding market, or rank for more competitive keywords, we formulate an SEO plan based on how your customers search.
                        </Typography>
                        <Typography variant="body-xl" className="mt-4 leading-relaxed text-white/90 px-6 lg:px-0 lg:max-w-xl text-left">
                          Are you searching for an SEO Davis CA company that your business can trust? Begin with a focus on visibility, traffic levels, and real, trackable business growth for local businesses rather than vanity rankings.
                        </Typography>

                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:flex-wrap sm:justify-center lg:justify-start">
                            <a href="#contact" onClick={handleScrollToContact} className="inline-flex w-72 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#69AE44] to-[#8FCB63] px-7 py-4 text-black transition-transform hover:scale-[1.03] sm:w-auto">
                                <Typography variant="body-lg" className="font-semibold text-black">
                                  Get Your Free SEO Strategy
                                </Typography>
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative aspect-[3.4/4.4] w-full max-w-[20rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 mx-auto sm:max-w-105 lg:max-w-130 lg:mx-0">
                            <img
                                src= "https://pub-67a4c50822e240c78b2f040321a1da26.r2.dev/landing-pages/davis-city.png"
                                alt="Company in Davis"
                                className="h-full w-full  object-cover"
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
                      DATA-DRIVEN SEO THAT TURNS DAVIS SEARCHES INTO CUSTOMERS
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
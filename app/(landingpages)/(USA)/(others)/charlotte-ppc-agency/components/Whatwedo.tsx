import { Typography } from "@/components/ui/Typography";
import { services } from "../const/Whatwedo";

export default function Services() {
    return (
        <section id="services" className="bg-black py-6 lg:py-10 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-4xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
                        <Typography variant="overline" className="text-white/80">
                            WHAT WE DO
                        </Typography>
                    </div>
                    <Typography
                        variant="display-xl"
                        as="h2"
                        className="text-white leading-tight"
                    >
                        PPC Services Built for Charlotte Businesses
                    </Typography>
                    <Typography variant="body-xl" className="mt-5 leading-relaxed text-white/90">
                        Geekonomy offers complete PPC management from Charlotte to help businesses reach people actively searching for what they have to offer. Campaign architecture, keyword research, conversion measurement, and ongoing program optimization everything related to your paid search program is designed to be the most effective for your campaign.
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
                            <div className="mb-4 flex h-12.5 w-12.5 items-center justify-center rounded-[0.8125rem] bg-[#69AE44]/10 text-[#69AE44]">
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
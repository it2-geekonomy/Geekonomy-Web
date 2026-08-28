import {
    Settings,
    Search,
    Target,
    Share2,
    Monitor,
    Users,
    ChartColumnIncreasing,
    ArrowRight,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const services = [
    {
        num: "01",
        icon: Target,
        title: "Google Ads Management",
        desc: "Develop and direct Google Ads campaigns to target potential customers when they are seeking what you have to offer. We enhance targeting, ad groups, bids, budgets, and search terms for greater campaign effectiveness.",
    },
    {
        num: "02",
        icon: Settings,
        title: "PPC Campaign Management",
        desc: "Run your paid media campaigns from planning to implementation to ongoing campaign optimization. Regularly analyze campaigns to find ways to gain more quality traffic and conversions at a lower cost.",
    },
    {
        num: "03",
        icon: Search,
        title: "Keyword Research & Intent Targeting",
        desc: "Identify keywords with high value and fit, in relation to relevance, competition, and buyer intent. We group our keywords into various phases of the purchase process while implementing negative keywords to avoid irrelevant clicks.",
    },
    {
        num: "04",
        icon: Share2,
        title: "Search & Display Advertising",
        desc: "It is useful to reach potential customers in Google Search at the time they are searching for what you offer and use Display campaigns to create awareness or re-engage previous website visitors.",
    },
    {
        num: "05",
        icon: Users,
        title: "Remarketing",
        desc: "Reach out to previous visitors and ad responders. Remarketing campaigns keep your business/website in front of interested prospects so they’ll return and take action.",
    },
    {
        num: "06",
        icon: Monitor,
        title: "Landing Page Optimization",
        desc: "Paid traffic demands a destination that converts. We review the messaging, calls to action, forms, page experience, and conversion paths of landing pages.",
    },
    {
        num: "07",
        icon: ChartColumnIncreasing,
        title: "PPC Reporting & Optimization",
        desc: "Monitor campaign success using key performance metrics: conversions, cost per lead, click-through rate, conversion rate, and return on ad spend. Continually optimize campaigns so they adapt to changing search habits and performance metrics.",
    },

];

export default function Services() {
    return (
        <section id="services" className="bg-black py-6 lg:py-10 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
                        <Typography variant="overline" className="text-white/80">
                            WHAT WE DO
                        </Typography>
                    </div>
                    <Typography
                        variant="display-xl"
                        as="h2"
                        className="text-white text-2xl sm:text-4xl lg:text-5xl"
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
                            className="relative w-full max-w-[380px] mx-auto md:max-w-none md:mx-0 rounded-[20px] border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40"
                        >
                            <span className="absolute right-6 top-6 text-sm font-extrabold text-[#69AE44]/40">
                                {num}
                            </span>
                            <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-[13px] bg-[#69AE44]/10 text-[#69AE44]">
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
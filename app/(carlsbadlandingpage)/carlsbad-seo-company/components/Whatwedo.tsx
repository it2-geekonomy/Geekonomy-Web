import {
    MapPin,
    FileSearch,
    Wrench,
    MousePointerClick,
    Network,
    Files,
    Link2,
    Award,
    MapPinned,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import { Typography } from "@/components/ui/Typography";

const services = [
    {
        num: "01",
        icon: MapPin,
        title: "Local SEO",
        desc: "Enhance your business’s findability among customers looking for your products and services in Carlsbad. Our services optimize your local search presence, Google Business Profile, citations, location, and locally relevant content.",
    },
    {
        num: "02",
        icon: FileSearch,
        title: "On-Page SEO",
        desc: "All key website features have been optimized for search intent, entities, topics, and usability. Your title tags, heading elements, internal links, content hierarchy, and page relevance are all integrated to maximize the search engines’ and customers’ understanding of your site.",
    },
    {
        num: "03",
        icon: Wrench,
        title: "Technical SEO",
        desc: "Everything begins with a technically sound website. We diagnose and fix crawling and indexing problems, architecture issues, Core Web Vitals, mobile usability, redirection and canonicalization problems, structured data issues, and other technical challenges that prevent your website from performing in organic search.",
    },
    {
        num: "04",
        icon: MousePointerClick,
        title: "Website Design & Conversion Optimization",
        desc: "Your site should not just appear professional. We will help your website generate leads. We optimize service pages, landing pages, forms, calls to action, mobile experience, page speeds, and trust signals to make it easy for potential customers to contact your business.",
    },
    {
        num: "05",
        icon: Network,
        title: "Semantic SEO",
        desc: "Our approach is to create content based on topics, entities, relationships, and search intent as opposed to just individual keywords. This helps us create topical relevancy and helps search engines better comprehend the areas in which you are an expert, your services, and the problems that your business solves.",
    },
    {
        num: "06",
        icon: Files,
        title: "Content SEO",
        desc: "Develop valuable search-intent content to reinforce your commercial pages and establish topical authority. We develop a content ecosystem by seamlessly tying together your service pages, location content, supportive content, and internal link structure to target search engine audiences.",
    },
    {
        num: "07",
        icon: Link2,
        title: "Link Building",
        desc: "Build the authority of your website by acquiring relevant and quality links. Our link acquisition efforts aim to create good relevance of your brand with respected websites, publications, local authorities, and other industry-related sources.",
    },
    {
        num: "08",
        icon: MapPinned,
        title: "Google Maps SEO",
        desc: "Enhance your visibility in local searches listed on the first page of the Google local search results. Our Local Search Strategy will ensure that your business appears in Google Maps results by creating visibility through business profile enhancement, local relevance, citations, reviews, and local consistency.",
    },
     {
        num: "09",
          icon: Sparkles,
        title: "AI Search Optimization",
        desc: "Sights is increasing coverage beyond traditional blue links. We optimize your site’s content, entities, brand signals, and authority signals to increase the discoverability and presentation of your business in next-generation AI search experiences.",
    },
];

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
                        variant="display-xl"
                        as="h2"
                        className="text-white text-2xl sm:text-4xl lg:text-5xl"
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
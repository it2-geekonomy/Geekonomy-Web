// // import { Check, Search } from "lucide-react";
// // import { Typography } from "@/components/ui/Typography";
// // import highIntentImage from "../images/hightintent.jpg";

// // const points = [
// //   {
// //     title: "Target the searches that drive leads",
// //     desc: "Rather than using just general search terms, we discover variations that clearly show a willingness to buy.We will create additional content for your site based on the common questions customers ask before they hire a pool company, further increasing the usefulness and visibility of your website.",
// //   },
// //   {
// //     title: "Improve Google Maps visibility",
// //     desc: "For local pool companies, being visible in the local results on Google can still bring some high-value calls, website visits, and direction requests. Our local SEO campaign can consist of Google Business Profile optimization, category and service optimization, review strategies, local citations, consistent business information, and locally relevant content.",
// //   },
// //   {
// //     title: "Build service-specific landing pages",
// //     desc: "One page can often be too much for the most relevant services. We will give each highly relevant service its own dedicated page when the services include pool cleaning, repair, remodeling, resurfacing, construction, and maintenance.",
// //   },
// //   {
// //     title: "Strengthen San Diego Geographic Relevance",
// //     desc: "Your clients will look for pool builders in various communities all over the San Diego region. We automatically generate local relevance through helpful local content, service-area pages, project examples, and local optimization, not through lightweight pages that are just rebranded with a different city name.",
// //   },
// //   {
// //     title: "Capture Customers Beyond Organic Search",
// //     desc: "SEO is one element of the search experience. For competitive or high-value services, Google Ads can enable your company to gain visibility for relevant searches straight away as you wait for your organic rankings to build up. A mixture of paid and organic search can provide stronger cover for your customers’ search path.",
// //   },
// //   {
// //     title: "Turn Search Traffic Into Pool Leads",
// //     desc: "Getting discovered is just the beginning. Your landing pages need to be friendly to your visitors, making the obvious (what you do), the compelling (why they should trust your company), and the next step (what you want them to do).",
// //   },
// // ];

// // const flow1 = ["Search", "Landing Page", "Trust", "Inquiry", "Consultation", "Customer"];
// // const flow2 = [
// //   "Local Visibility",
// //   "Qualified Traffic",
// //   "Engagement",
// //   "Leads",
// //   "Appointments",
// //   "Customers",
// //   "Revenue",
// // ];

// // function FlowRow({ steps }: { steps: string[] }) {
// //   return (
// //     <div className="overflow-x-auto lg:overflow-visible rounded-[20px] border border-[#69AE44] bg-[#69AE44]/10 p-7">
// //       <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
// //         {steps.map((s, i) => (
// //           <div key={s} className="flex items-center gap-3">
// //             <span
// //               className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === steps.length - 1
// //                 ? "bg-[#69AE44] text-black"
// //                 : "border border-white/10 bg-white/10 text-white/80"
// //                 }`}
// //             >
// //               {s}
// //             </span>
// //             {i < steps.length - 1 && (
// //               <span className="text-[#69AE44]">→</span>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default function HighIntent() {
// //   return (
// //     <section id="high-intent" className="bg-black py-6 lg:py-10">
// //       <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //         <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
// //           {/* Intro + points: first on mobile, left column / top row on desktop */}
// //           <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-1">
// //             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
// //               <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
// //               <Typography variant="overline" className="text-white/80">
// //                 HIGH-INTENT SEARCH
// //               </Typography>
// //             </div>
// //             <Typography
// //               variant="display-xl"
// //               as="h2"
// //               className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
// //             >
// //               Marketing That Targets High-Intent Searches
// //             </Typography>
// //             <Typography variant="body-xl" className="mt-5 mb-7 leading-relaxed text-white/90">
// //               When homeowners search for pool service, they will run to the internet, usually Google, to compare local businesses, read reviews, view services, and request quotes. Appearing in the search results for the right keywords can place your company in front of potential customers at the right moment.
// //             </Typography>
// //             <Typography variant="body-xl" className="mt-5 mb-7 leading-relaxed text-white/90">
// //               The search strategy that Geekonomy creates utilizes local SEO, service-based SEO, content optimization for Google Maps, and paid search to fulfill the demand for the whole San Diego area.
// //             </Typography>

// //             <div className="grid gap-4">
// //               {points.map((p) => (
// //                 <div key={p.title} className="flex items-start gap-3.5">
// //                   <span className="mt-0.5 flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] bg-[#69AE44]/10 text-[#69AE44]">
// //                     <Check className="h-4 w-4" strokeWidth={2.5} />
// //                   </span>
// //                   <Typography variant="body-lg" className="leading-relaxed text-white/90">
// //                     <strong className="font-semibold text-white">
// //                       {p.title}
// //                     </strong>{" "}
// //                     - {p.desc}
// //                   </Typography>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Image: second on mobile (between points and closing line), right column spanning both rows on desktop */}
// //           <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 relative aspect-[4/4.6] w-full max-w-[380px] mx-auto lg:max-w-none lg:mx-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
// //             <img
// //               src={highIntentImage.src}
// //               alt="High-intent search marketing for pool businesses"
// //               className="h-full w-full object-cover"
// //             />
// //           </div>

// //           {/* Closing line: last on mobile, left column / bottom row on desktop */}
// //           <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
// //             <Typography variant="body-xl" className="leading-relaxed text-white/90">
// //               We optimize the journey from:
// //             </Typography>
// //           </div>
// //         </div>

// //         <div className="mt-8">
// //           <FlowRow steps={flow1} />
// //         </div>

// //         <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
// //           The result is a search method that is less ranking-centric and more geared toward providing you with qualified opportunities for your San Diego pool business.
// //         </Typography>
// //       </div>
// //     </section>
// //   );
// // }

// // export { FlowRow, flow2 };


// import { Check, Search } from "lucide-react";
// import { Typography } from "@/components/ui/Typography";
// import highIntentImage from "../images/hightintent.jpg";

// const points = [
//   {
//     title: "Target the searches that drive leads",
//     desc: "Rather than using just general search terms, we discover variations that clearly show a willingness to buy.We will create additional content for your site based on the common questions customers ask before they hire a pool company, further increasing the usefulness and visibility of your website.",
//   },
//   {
//     title: "Improve Google Maps visibility",
//     desc: "For local pool companies, being visible in the local results on Google can still bring some high-value calls, website visits, and direction requests. Our local SEO campaign can consist of Google Business Profile optimization, category and service optimization, review strategies, local citations, consistent business information, and locally relevant content.",
//   },
//   {
//     title: "Build service-specific landing pages",
//     desc: "One page can often be too much for the most relevant services. We will give each highly relevant service its own dedicated page when the services include pool cleaning, repair, remodeling, resurfacing, construction, and maintenance.",
//   },
//   {
//     title: "Strengthen San Diego Geographic Relevance",
//     desc: "Your clients will look for pool builders in various communities all over the San Diego region. We automatically generate local relevance through helpful local content, service-area pages, project examples, and local optimization, not through lightweight pages that are just rebranded with a different city name.",
//   },
//   {
//     title: "Capture Customers Beyond Organic Search",
//     desc: "SEO is one element of the search experience. For competitive or high-value services, Google Ads can enable your company to gain visibility for relevant searches straight away as you wait for your organic rankings to build up. A mixture of paid and organic search can provide stronger cover for your customers’ search path.",
//   },
//   {
//     title: "Turn Search Traffic Into Pool Leads",
//     desc: "Getting discovered is just the beginning. Your landing pages need to be friendly to your visitors, making the obvious (what you do), the compelling (why they should trust your company), and the next step (what you want them to do).",
//   },
// ];

// const flow1 = ["Search", "Landing Page", "Trust", "Inquiry", "Consultation", "Customer"];
// const flow2 = [
//   "Local Visibility",
//   "Qualified Traffic",
//   "Engagement",
//   "Leads",
//   "Appointments",
//   "Customers",
//   "Revenue",
// ];

// function FlowRow({ steps }: { steps: string[] }) {
//   return (
//     <div className="overflow-x-auto lg:overflow-visible rounded-[20px] border border-[#69AE44] bg-[#69AE44]/10 p-7">
//       <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
//         {steps.map((s, i) => (
//           <div key={s} className="flex items-center gap-3">
//             <span
//               className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === steps.length - 1
//                 ? "bg-[#69AE44] text-black"
//                 : "border border-white/10 bg-white/10 text-white/80"
//                 }`}
//             >
//               {s}
//             </span>
//             {i < steps.length - 1 && (
//               <span className="text-[#69AE44]">→</span>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function HighIntent() {
//   return (
//     <section id="high-intent" className="bg-black py-6 lg:py-10">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Centered intro: overline, heading, and the two paragraphs */}
//         <div className="mx-auto max-w-4xl text-center">
//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
//             <Typography variant="overline" className="text-white/80">
//               HIGH-INTENT SEARCH
//             </Typography>
//           </div>
//           <Typography
//             variant="display-xl"
//             as="h2"
//             className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
//           >
//             Marketing That Targets High-Intent Searches
//           </Typography>
//           <Typography variant="body-xl" className="mt-5 mb-7 leading-relaxed text-white/90">
//             When homeowners search for pool service, they will run to the internet, usually Google, to compare local businesses, read reviews, view services, and request quotes. Appearing in the search results for the right keywords can place your company in front of potential customers at the right moment.
//           </Typography>
//           <Typography variant="body-xl" className="mb-7 leading-relaxed text-white/90">
//             The search strategy that Geekonomy creates utilizes local SEO, service-based SEO, content optimization for Google Maps, and paid search to fulfill the demand for the whole San Diego area.
//           </Typography>
//         </div>

//         {/* Points on the left, image on the right */}
//         <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
//           <div className="grid gap-4">
//             {points.map((p) => (
//               <div key={p.title} className="flex items-start gap-3.5">
//                 <span className="mt-0.5 flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] bg-[#69AE44]/10 text-[#69AE44]">
//                   <Check className="h-4 w-4" strokeWidth={2.5} />
//                 </span>
//                 <Typography variant="body-lg" className="leading-relaxed text-white/90">
//                   <strong className="font-semibold text-white">
//                     {p.title}
//                   </strong>{" "}
//                   - {p.desc}
//                 </Typography>
//               </div>
//             ))}
//           </div>

//           <div className="relative aspect-[4/4.6] w-full max-w-[380px] mx-auto lg:max-w-none lg:mx-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
//             <img
//               src={highIntentImage.src}
//               alt="High-intent search marketing for pool businesses"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Closing line, unchanged */}
//         <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
//           We optimize the journey from:
//         </Typography>

//         <div className="mt-8">
//           <FlowRow steps={flow1} />
//         </div>

//         <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
//           The result is a search method that is less ranking-centric and more geared toward providing you with qualified opportunities for your San Diego pool business.
//         </Typography>
//       </div>
//     </section>
//   );
// }

// export { FlowRow, flow2 };

import { Check, Search } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import highIntentImage from "../images/highintent1.jpg";

const points = [
  {
    title: "Target the searches that drive leads",
    desc: "Rather than using just general search terms, we discover variations that clearly show a willingness to buy.We will create additional content for your site based on the common questions customers ask before they hire a pool company, further increasing the usefulness and visibility of your website.",
  },
  {
    title: "Improve Google Maps visibility",
    desc: "For local pool companies, being visible in the local results on Google can still bring some high-value calls, website visits, and direction requests. Our local SEO campaign can consist of Google Business Profile optimization, category and service optimization, review strategies, local citations, consistent business information, and locally relevant content.",
  },
  {
    title: "Build service-specific landing pages",
    desc: "One page can often be too much for the most relevant services. We will give each highly relevant service its own dedicated page when the services include pool cleaning, repair, remodeling, resurfacing, construction, and maintenance.",
  },
  {
    title: "Strengthen San Diego Geographic Relevance",
    desc: "Your clients will look for pool builders in various communities all over the San Diego region. We automatically generate local relevance through helpful local content, service-area pages, project examples, and local optimization, not through lightweight pages that are just rebranded with a different city name.",
  },
  {
    title: "Capture Customers Beyond Organic Search",
    desc: "SEO is one element of the search experience. For competitive or high-value services, Google Ads can enable your company to gain visibility for relevant searches straight away as you wait for your organic rankings to build up. A mixture of paid and organic search can provide stronger cover for your customers’ search path.",
  },
  {
    title: "Turn Search Traffic Into Pool Leads",
    desc: "Getting discovered is just the beginning. Your landing pages need to be friendly to your visitors, making the obvious (what you do), the compelling (why they should trust your company), and the next step (what you want them to do).",
  },
];

const flow1 = ["Search", "Landing Page", "Trust", "Inquiry", "Consultation", "Customer"];
const flow2 = [
  "Local Visibility",
  "Qualified Traffic",
  "Engagement",
  "Leads",
  "Appointments",
  "Customers",
  "Revenue",
];

function FlowRow({ steps }: { steps: string[] }) {
  return (
    <div className="overflow-x-auto lg:overflow-visible rounded-[20px] border border-[#69AE44] bg-[#69AE44]/10 p-7">
      <div className="flex w-max items-center gap-3 lg:w-full lg:flex-wrap lg:justify-center">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <span
              className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold ${i === steps.length - 1
                ? "bg-[#69AE44] text-black"
                : "border border-white/10 bg-white/10 text-white/80"
                }`}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <span className="text-[#69AE44]">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HighIntent() {
  return (
    <section id="high-intent" className="bg-black py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered intro: overline, heading, and the two paragraphs */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#69AE44]" />
            <Typography variant="overline" className="text-white/80">
              HIGH-INTENT SEARCH
            </Typography>
          </div>
          <Typography
            variant="display-xl"
            as="h2"
            className="text-white text-2xl sm:text-4xl lg:text-5xl leading-tight"
          >
            Marketing That Targets High-Intent Searches
          </Typography>
          <Typography variant="body-xl" className="mt-5 mb-7 leading-relaxed text-white/90">
            When homeowners search for pool service, they will run to the internet, usually Google, to compare local businesses, read reviews, view services, and request quotes. Appearing in the search results for the right keywords can place your company in front of potential customers at the right moment.
          </Typography>
          <Typography variant="body-xl" className="mb-7 leading-relaxed text-white/90">
            The search strategy that Geekonomy creates utilizes local SEO, service-based SEO, content optimization for Google Maps, and paid search to fulfill the demand for the whole San Diego area.
          </Typography>
        </div>

        {/* Points on the left, image on the right */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16 lg:items-stretch">
          <div className="grid gap-4">
            {points.map((p) => (
              <div key={p.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] bg-[#69AE44]/10 text-[#69AE44]">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <Typography variant="body-lg" className="leading-relaxed text-white/90">
                  <strong className="font-semibold text-white">
                    {p.title}
                  </strong>{" "}
                  - {p.desc}
                </Typography>
              </div>
            ))}
          </div>

          <div className="relative aspect-[4/4.6] lg:aspect-auto w-full max-w-[380px] mx-auto lg:max-w-none lg:mx-0 lg:h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
            <img
              src={highIntentImage.src}
              alt="High-intent search marketing for pool businesses"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Closing line, unchanged */}
        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          We optimize the journey from:
        </Typography>

        <div className="mt-8">
          <FlowRow steps={flow1} />
        </div>

        <Typography variant="body-xl" className="mt-7 leading-relaxed text-white/90">
          The result is a search method that is less ranking-centric and more geared toward providing you with qualified opportunities for your San Diego pool business.
        </Typography>
      </div>
    </section>
  );
}

export { FlowRow, flow2 };
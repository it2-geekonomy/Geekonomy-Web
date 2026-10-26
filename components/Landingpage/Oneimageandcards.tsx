// import Image from "next/image";
// import { Typography } from "@/components/ui/Typography";
// import { Boldtext } from "./Boldtext";
// import type { ValueGridProps } from "@/lib/constants/Landingpagetypes";

// export default function ValueGrid({ content }: Readonly<ValueGridProps>) {
//   const { label, heading, intro, image, imageAlt, card, bottom } = content;

//   return (
//     <section id="grow" className="flex w-full flex-col items-center bg-black py-6 lg:py-10">
//       <div className="flex w-full max-w-7xl flex-col gap-10 px-6 lg:gap-14 lg:px-8">
//         {/* Text + image */}
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
//           {/* Text column */}
//           <div className="flex w-full flex-col items-start gap-5">
//             <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#69AE44]/30 px-4 py-2">
//               <span className="size-1.5 rounded-full bg-[#69AE44]" />
//               <Typography variant="overline" className="text-white/80">
//                 {label}
//               </Typography>
//             </div>

//             <Typography
//               variant="display-xl"
//               as="h2"
//               className="text-white text-2xl sm:text-4xl lg:text-5xl"
//             >
//               {heading}
//             </Typography>

//             <div className="flex w-full flex-col gap-4">
//               {intro.map((paragraph, i) => (
//                 <Typography key={i} variant="body-xl" className="leading-relaxed text-white/90">
//                   {Boldtext(paragraph)}
//                 </Typography>
//               ))}
//             </div>
//           </div>

//           {/* Image column */}
//           <div className="flex w-full justify-center">
//             <div className="relative aspect-[4/4.4] w-full overflow-hidden border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.25)] sm:w-3/4 lg:w-full">
//               <Image
//                 src={image}
//                 alt={imageAlt}
//                 fill
//                 sizes="(min-width: 1024px) 40vw, (min-width: 640px) 75vw, 100vw"
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//           {card.map(({ icon: Icon, title, desc }) => {
//             const lines = Array.isArray(desc) ? desc : [desc];

//             return (
//               <div
//                 key={title}
//                 className="group relative flex flex-col gap-5 overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] p-8 transition-all hover:-translate-y-1.5 hover:border-[#69AE44]/40 hover:bg-white/[0.05]"
//               >
//                 <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#69AE44] transition-transform duration-300 group-hover:scale-x-100" />

//                 <div className="flex size-9 items-center justify-center rounded-2xl bg-[#69AE44]/10 text-[#69AE44] sm:size-12">
//                   <Icon className="size-4 sm:size-6" strokeWidth={1.8} />
//                 </div>

//                 <div className="flex flex-col">
//                   <Typography variant="h3" as="h3" className="mb-2.5 text-white font-semibold">
//                     {title}
//                   </Typography>

//                   <div className="flex flex-col gap-2">
//                     {lines.map((line, i) => (
//                       <Typography key={i} variant="body-lg" className="leading-relaxed text-white/90">
//                         {line}
//                       </Typography>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom text */}
//         {!!bottom?.length && (
//           <div className="flex w-full flex-col gap-4">
//             {bottom.map((paragraph, i) => (
//               <Typography key={i} variant="body-xl" className="leading-relaxed text-white font-semibold">
//                 {Boldtext(paragraph)}
//               </Typography>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
// import Image from "next/image";
// import Link from "next/link";
// import { CaseStudy } from "@/types";
// import CaseStudyForm from "@/components/case-studies/casestudyform";
// import LastSection from "./LastSection";
// interface CaseStudyLayoutProps {
//   post: CaseStudy;
// }

// export default function CaseStudyLayout({ post }: CaseStudyLayoutProps) {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Banner Image */}
//       {post.banner && (
//         <div className="relative w-full h-[60vh] md:h-[70vh]">
//           <Image
//             src={post.banner}
//             alt={post.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
//         {/* Title Section */}
//         {/* <div className="mb-8 md:mb-12">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             {post.title}
//           </h1>
//           {post.internalTitle && (
//             <p className="text-xl md:text-2xl text-[#6FAF4E] mb-4">
//               {post.internalTitle}
//             </p>
//           )}
//           {post.subtitle && (
//             <p className="text-lg md:text-xl text-white/70 max-w-3xl">
//               {post.subtitle}
//             </p>
//           )}
//         </div> */}

//         {/* Image Grid 1 */}
//         {post.imageGrid1 && post.imageGrid1.length > 0 && (
//           <div className="mb-12 md:mb-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//               {post.imageGrid1.map((img, index) => (
//                 <div key={index} className="relative w-full h-[300px] md:h-[400px]">
//                   <Image
//                     src={img}
//                     alt={`${post.title} - Image ${index + 1}`}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Content Sections */}
//         {post.contentSections && post.contentSections.length > 0 && (
//           <div className="mb-12 md:mb-16 space-y-8">
//             {post.contentSections.map((section) => (
//               <div
//                 key={section.id}
//                 className="prose prose-invert max-w-none"
//                 dangerouslySetInnerHTML={{ __html: section.content }}
//               />
//             ))}
//           </div>
//         )}

//         {/* Image Grid 2 (with stats) */}
//         {post.imageGrid2 && post.imageGrid2.length > 0 && (
//           <div className="mb-12 md:mb-16">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//               {post.imageGrid2.map((item, index) => (
//                 <div key={index} className="flex items-center gap-3">
//                   {item.icon && (
//                     <div className="relative w-12 h-12 shrink-0">
//                       <Image
//                         src={item.icon}
//                         alt=""
//                         width={48}
//                         height={48}
//                         className="object-contain"
//                       />
//                     </div>
//                   )}
//                   <div>
//                     <h3 className="text-xl md:text-2xl font-bold text-[#6FAF4E]">
//                       {item.title}
//                     </h3>
//                     <p className="text-white/70 text-sm md:text-base">{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Optional Image Grid */}
//         {post.imageGridOptional && post.imageGridOptional.length > 0 && (
//           <div className="mb-12 md:mb-16">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//               {post.imageGridOptional.map((img, index) => (
//                 <div key={index} className="relative w-full h-[250px] md:h-[300px]">
//                   <Image
//                     src={img}
//                     alt={`${post.title} - Optional Image ${index + 1}`}
//                     fill
//                     className="object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <CaseStudyForm post={post} />
//       <LastSection />
//     </div>
//   );
// }

import Image from "next/image";
import { CaseStudy } from "@/types";
import CaseStudyForm from "@/components/case-studies/casestudyform";
import LastSection from "./LastSection";
import OptionalGrid from "@/components/case-studies/OptionalGrid";
import { Typography } from "../ui/Typography";
interface CaseStudyLayoutProps {
  post: CaseStudy;
}

export default function CaseStudyLayout({ post }: CaseStudyLayoutProps) {
  const improvedContent = post.contentSections?.find((s) => s.id === 2);
  const overviewContent = post.contentSections?.find((s) => s.id === 1);
  const solutionContent = post.contentSections?.find((s) => s.id === 4);

  return (
    <section className="w-full pb-12 bg-black text-white">
      {/* Banner */}
      <div className="relative aspect-[3/1] overflow-hidden mx-auto mb-6">
        <Image
          src={post.banner || post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>

       {/* Title */}
      {post.internalTitle && (
        <Typography
          as="h1"
          variant="2xl"
          className="text-[clamp(1.1rem,1vw,2rem)] md:text-[clamp(1.35rem,3vw,2.5rem)] xl:text-[clamp(1.25rem,4vw,2.5rem)] drop-shadow-lg text-center capitalize mb-6 lg:mb-24"
        >
          {post.internalTitle}
        </Typography>
      )}
     {/* Metrics */}
      {post.imageGrid2 && post.imageGrid2.length > 0 && (
        <div className="my-12">
          <Typography
            as="h2"
            variant="2xl"
            className="font-medium max-w-[85%] md:max-w-[70%] mx-auto  
              mb-4 lg:mb-8"
          >
            Metrics
          </Typography>

          <div
            className={`grid gap-4 mb-10 max-w-[85%] md:max-w-[70%] mx-auto ${post.imageGrid2.length === 3 || post.imageGrid2.length === 5
                ? "grid-cols-2 sm:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4"
              }`}
          >
            {post.imageGrid2.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center rounded-lg pt-4 pb-6 bg-[#18181B] bg-opacity-80 border border-gray-700"
              >
                {item.icon && (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 relative mb-3">
                    <Image
                      src={item.icon}
                      alt={`icon-${i}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}

                 <Typography
                  as="h3"
                  variant="lg"
                  className="font-normal mb-1 text-white"
                >
                  {item.title}
                </Typography>

               <Typography
                  as="p"
                  variant="base"
                  className="text-[#FFFFFF99] text-opacity-60 mb-8 px-3"
                >
                  {item.text}
                </Typography>

                {/* Gradient line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#6FAF4E] to-transparent shadow-[0_0_12px_#6FAF4E]" />
              </div>
            ))}
          </div>

          {/* Improved Content */}
         {improvedContent?.content && (
  <div className="max-w-[85%] md:max-w-[70%] mx-auto mt-8">
    <Typography
      as="div"
      variant="base"
      className="text-[#FFFFFF99] leading-relaxed [&_p]:mb-4"
    >
      <div dangerouslySetInnerHTML={{ __html: improvedContent.content }} />
    </Typography>
  </div>
)}

        </div>
      )}
      {/*overview content */}
    {overviewContent?.content && (
  <div className="max-w-[85%] md:max-w-[70%] mx-auto mb-24">
    <div className="relative rounded-lg bg-[#18181B] bg-opacity-80 border border-gray-700 p-6 md:p-8">
      <Typography
        as="div"
        variant="lg"
        className="text-[#FFFFFF99] leading-relaxed [&_p]:mb-4"
      >
        <div dangerouslySetInnerHTML={{ __html: overviewContent.content }} />
      </Typography>
    </div>
  </div>
)}

      {/* ✅ Optional Grid – Only Mushashi Delta */}
      {post.imageGridOptional && post.imageGridOptional.length > 0 && (
        <OptionalGrid images={post.imageGridOptional} />
      )}

     {solutionContent?.content && (
  <div className="max-w-[85%] md:max-w-[70%] mx-auto mb-24">
    <Typography
      as="div"
      variant="lg"
      className="text-[#FFFFFF99] leading-relaxed [&_p]:mb-4"
    >
      <div dangerouslySetInnerHTML={{ __html: solutionContent.content }} />
    </Typography>
  </div>
)}


      {/* ❌ Form untouched */}
      <CaseStudyForm post={post} />
      <LastSection />
    </section>
  );
}

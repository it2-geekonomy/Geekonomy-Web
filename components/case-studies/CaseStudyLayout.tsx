import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/types";

interface CaseStudyLayoutProps {
  post: CaseStudy;
}

export default function CaseStudyLayout({ post }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Banner Image */}
      {post.banner && (
        <div className="relative w-full h-[60vh] md:h-[70vh]">
          <Image
            src={post.banner}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Title Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          {post.internalTitle && (
            <p className="text-xl md:text-2xl text-[#6FAF4E] mb-4">
              {post.internalTitle}
            </p>
          )}
          {post.subtitle && (
            <p className="text-lg md:text-xl text-white/70 max-w-3xl">
              {post.subtitle}
            </p>
          )}
        </div>

        {/* Image Grid 1 */}
        {post.imageGrid1 && post.imageGrid1.length > 0 && (
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {post.imageGrid1.map((img, index) => (
                <div key={index} className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src={img}
                    alt={`${post.title} - Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Sections */}
        {post.contentSections && post.contentSections.length > 0 && (
          <div className="mb-12 md:mb-16 space-y-8">
            {post.contentSections.map((section) => (
              <div
                key={section.id}
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            ))}
          </div>
        )}

        {/* Image Grid 2 (with stats) */}
        {post.imageGrid2 && post.imageGrid2.length > 0 && (
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {post.imageGrid2.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.icon && (
                    <div className="relative w-12 h-12 shrink-0">
                      <Image
                        src={item.icon}
                        alt=""
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#6FAF4E]">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optional Image Grid */}
        {post.imageGridOptional && post.imageGridOptional.length > 0 && (
          <div className="mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {post.imageGridOptional.map((img, index) => (
                <div key={index} className="relative w-full h-[250px] md:h-[300px]">
                  <Image
                    src={img}
                    alt={`${post.title} - Optional Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Button */}
        {post.button && (
          <div className="mt-12 md:mt-16 text-center">
            <Link
              href={post.button.link}
              className="inline-block bg-[#6FAF4E]/80 text-white border-2 border-transparent px-10 py-3 rounded-full font-semibold uppercase transition-all duration-200 hover:bg-transparent hover:border-[#6FAF4E] hover:text-[#6FAF4E] hover:scale-105"
            >
              {post.button.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

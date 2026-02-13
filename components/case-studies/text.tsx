

import React from "react";

interface TextSectionItem {
  id: number;
  content: string;
}

interface TextSectionProps {
  contentSections: TextSectionItem[];
}

const TextSection: React.FC<TextSectionProps> = ({ contentSections }) => {
  return (
    <div className="max-w-[85%] md:max-w-[70%] mx-auto space-y-12 [&_p]:mb-4 [&_ul]:mb-4">
      {contentSections.map((section) => (
        <div
          key={section.id}
          className={`grid grid-cols-1 gap-1 text-[clamp(1rem,1vw,1.6rem)] leading-[2.5] ${
            section.id === 1
              ? "bg-[#18181B] bg-opacity-80 p-4 md:p-8 rounded-lg text-white border border-gray-700"
              : "text-[#C5C4C3]"
          }`}
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      ))}
    </div>
  );
};

export default TextSection;


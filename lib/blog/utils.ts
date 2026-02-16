import type { BlogSectionData } from "./types";

/**
 * Content item for blog posts (paragraph, heading, h1, h3, image).
 * Images are never rendered inline—only used as section side images in the layout.
 */
export interface BlogContentItem {
  type: "paragraph" | "heading" | "h1" | "h3" | "image" | "list";
  text: string;
  className?: string;
}

/**
 * Helper functions to create BlogContentItem objects more concisely
 * Usage: p("text"), h1("main title"), h2("title"), h3("subtitle"), img("/path", "alt"), list("<ul>...</ul>")
 */
export const p = (text: string): BlogContentItem => ({ type: "paragraph", text });
export const h1 = (text: string, className?: string): BlogContentItem => ({
  type: "h1",
  text,
  className: className || "mt-6 mb-3",
});
export const h2 = (text: string, className?: string): BlogContentItem => ({
  type: "heading",
  text,
  className: className || "mt-6 mb-3",
});
export const h3 = (text: string, className?: string): BlogContentItem => ({
  type: "h3",
  text,
  className: className || "mt-4 mb-2",
});
export const img = (src: string, alt: string): BlogContentItem => ({
  type: "image",
  text: src,
  className: alt,
});
export const list = (html: string): BlogContentItem => ({ type: "list", text: html });

/** Renders only text content (paragraph, heading, h1, h3, list). Image items are ignored—used for side panel only. */
export function contentToHTML(items: BlogContentItem[]): string {
  return items
    .map((item) => {
      switch (item.type) {
        case "h1":
          return `<h1 class="text-[clamp(1.5rem,2vw,2.5rem)] font-bold mt-6 mb-3 ${item.className || ""}">${item.text}</h1>`;
        case "heading":
          return `<h2 class="text-[clamp(1.3rem,1.5vw,2rem)] font-medium mt-6 mb-3 ${item.className || ""}">${item.text}</h2>`;
        case "h3":
          return `<h3 class="text-xl font-semibold mt-4 mb-2 ${item.className || ""}">${item.text}</h3>`;
        case "paragraph":
          return `<p class="leading-relaxed text-[#FFFFFFB2] text-[clamp(1rem,1vw,1.5rem)] mb-4">${item.text}</p>`;
        case "list":
          return `<div class="[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:ml-6 mb-4 text-[#FFFFFFB2] text-[clamp(1rem,1vw,1.5rem)]">${item.text}</div>`;
        case "image":
          return ""; // Images only on the side, never inline
        default:
          return "";
      }
    })
    .join("\n");
}

export interface ContentToSectionsOptions {
  /** Title for the intro section (content before first heading). If omitted, no intro section is added. */
  introTitle?: string;
}

/**
 * Split content by main "heading" into sections. Each section gets title, description HTML,
 * and the first image found in that chunk (or defaultImage). Used by any blog that stores
 * content as BlogContentItem[].
 *
 * Prevents the default/cover image from appearing "in between": sections without their own
 * image (after the intro) use the next section's image so the cover only shows for the first section.
 */
export function contentToSections(
  content: BlogContentItem[],
  defaultImage: { src: string; alt: string },
  options: ContentToSectionsOptions = {}
): BlogSectionData[] {
  const sections: BlogSectionData[] = [];
  const { introTitle } = options;

  // Only split by H1 (main sections), H2 stays as content within sections
  const firstHeadingIndex = content.findIndex((item) => item.type === "h1");
  const introItems = firstHeadingIndex === -1 ? content : content.slice(0, firstHeadingIndex);

  if (introItems.length > 0 && introTitle) {
    const firstImage = introItems.find((item) => item.type === "image");
    const introTextOnly = introItems.filter((item) => item.type !== "image");
    sections.push({
      title: introTitle,
      description: contentToHTML(introTextOnly),
      image: firstImage
        ? { src: firstImage.text, alt: firstImage.className || introTitle }
        : defaultImage,
    });
  }

  if (firstHeadingIndex === -1) return sections;

  let i = firstHeadingIndex;
  while (i < content.length) {
    const item = content[i];
    // Only H1 creates new sections, H2 stays as content
    if (item.type !== "h1") {
      i++;
      continue;
    }
    const title = item.text;
    const chunk: BlogContentItem[] = [];
    let firstImageInSection: { src: string; alt: string } | null = null;
    i++;
    // Include H2 ("heading") as content, only stop at next H1
    while (i < content.length && content[i].type !== "h1") {
      const el = content[i];
      chunk.push(el);
      if (el.type === "image" && !firstImageInSection) {
        firstImageInSection = { src: el.text, alt: el.className || title };
      }
      i++;
    }
    const chunkTextOnly = chunk.filter((c) => c.type !== "image");
    sections.push({
      title,
      description: contentToHTML(chunkTextOnly),
      image: firstImageInSection || defaultImage,
    });
  }

  // So the cover image only shows for the first section: later sections without their own
  // image use the next section's image (no cover image "in between").
  for (let j = sections.length - 1; j >= 1; j--) {
    if (sections[j].image.src !== defaultImage.src) continue;
    if (j + 1 < sections.length) {
      sections[j].image = { ...sections[j + 1].image };
    } else {
      sections[j].image = { ...sections[j - 1].image };
    }
  }

  return sections;
}

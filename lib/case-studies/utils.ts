interface ContentItem {
  type: string;
  text: string;
  className?: string;
}

export const contentToHTML = (contentArray: ContentItem[]): string => {
  return contentArray
    .map((item) => {
      switch (item.type) {
        case "heading":
          return `
            <div class="my-2 ">
              <h2 class="text-[clamp(1.3rem,1.5vw,2rem)] md:text-[clamp(1.35rem,3vw,2.2rem)]  font-medium ${item.className || ""}">
                ${item.text}
              </h2>
            </div>
          `;
        case "paragraph":
          return `
            <p class="leading-[1.3] text-justify text-[#FFFFFFB2] text-opacity-70 text-[clamp(1rem,1vw,1.5rem)] ${item.className || ""}">
              ${item.text}
            </p>
          `;
        case "list":
          return `
            <ul class="list-disc list-inside mb-4 ${item.className || ""}">
              ${item.text
                .split(";")
                .map((li) => `<li>${li.trim()}</li>`)
                .join("")}
            </ul>
          `;
        default:
          return "";
      }
    })
    .join("\n");
};

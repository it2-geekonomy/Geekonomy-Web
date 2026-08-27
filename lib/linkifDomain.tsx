


/**
 * Examples:
 *   "Website: [thegeekonomy.com](https://thegeekonomy.com)"
 *
 *   "Read more about [The Geekonomy](https://thegeekonomy.com/about)"
 */


import { Fragment, type ReactNode } from "react";

export function renderWithLinks(text: string): ReactNode {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    const [fullMatch, label, url] = match;
    const matchStart = match.index;

    // Push plain text before this link
    if (matchStart > lastIndex) {
      parts.push(text.slice(lastIndex, matchStart));
    }

    const isExternal = /^https?:\/\//.test(url);

    parts.push(
      <a
        key={key++}
        href={url}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="text-[#69AE44] hover:underline underline-offset-2 "
      >
        {label}
      </a>
    );

    lastIndex = matchStart + fullMatch.length;
  }

  // Push any remaining plain text after the last link
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // If no links were found, parts is just [text] — return the plain string
  if (parts.length === 1 && typeof parts[0] === "string") {
    return parts[0];
  }

  return <Fragment>{parts}</Fragment>;
}
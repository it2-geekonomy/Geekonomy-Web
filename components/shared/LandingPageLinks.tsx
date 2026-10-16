import { Fragment } from "react";
import landingPageSlugs from "@/lib/landingpage/landingpageslug.json"; 

export default function LandingPageLinks() {
  return (
    <nav className="sr-only">
      {landingPageSlugs.map((slug) => (
        <Fragment key={slug}>
          <a href={`/${slug}`} tabIndex={-1}>
            {slug}
          </a>
          <a href={`/${slug}/thank-you`} tabIndex={-1}>
            {slug}
          </a>
        </Fragment>
      ))}
    </nav>
  );
}
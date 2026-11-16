import landingPagesBySlug from "@/lib/landingpage/landingpageslug.json";

export default function LandingPageLinks() {
  return (
    <nav className="sr-only">
      {Object.keys(landingPagesBySlug).map((slug) => (
        <a key={slug} href={`/${slug}`} tabIndex={-1}>
          {slug}
        </a>
      ))}
    </nav>
  );
}

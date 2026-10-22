import landingPageSlugs from "@/lib/landingpage/landingpageslug.json"; 

export default function LandingPageLinks() {
  return (
    <nav className="sr-only">
      {landingPageSlugs.map((slug) => (
          <a href={`/${slug}`} tabIndex={-1}>
            {slug}
          </a>
      ))}
    </nav>
  );
}
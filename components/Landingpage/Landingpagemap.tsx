
import { LANDING_PAGE_MAPS, LandingPageMapKey } from "@/lib/constants/LandingpageMaps";

interface LandingPageMapProps {
  location: LandingPageMapKey;
  title?: string;
  className?: string;
}

export function LandingPageMap({
  location,
  title = "Service area map",
  className = "",
}: LandingPageMapProps) {
  return (
    <section id="map" className="w-full max-w-5xl mx-auto bg-black px-6 py-8 lg:py-10 font-sans">
      <div
        className={`w-full h-76 overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${className}`}
      >
        <iframe
          src={LANDING_PAGE_MAPS[location]}
          title={title}
          className="h-full w-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
interface LandingPageMapProps {
  mapSrc: string;
  title?: string;
  className?: string;
}

export function LandingPageMap({
  mapSrc,
  title = "Service area map",
  className = "",
}: LandingPageMapProps) {
  return (
    <section id="map" className="bg-neutral-950 px-4 sm:px-6 lg:px-10 py-9 lg:py-10  lg:pb-15 font-sans">
      <div className={`w-full max-w-5xl mx-auto h-75 rounded-[1rem] overflow-hidden ${className}`}>
        <iframe
          src={mapSrc}
          title={title}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
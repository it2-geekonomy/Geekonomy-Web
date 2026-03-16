import { Typography } from "@/components/ui/Typography";
import { ADDRESS } from "@/lib/constants/company";

interface FooterAddressProps {
  alignment?: "center" | "left";
  showUnderline?: boolean;
  mapMaxWidth?: string;
  mapHeight?: string;
  addressVariant?: "body-xl" | "body-lg";
  maxWidth?: string;
  containerClassName?: string;
}

export function FooterAddress({
  alignment = "center",
  showUnderline = true,
  mapMaxWidth = "max-w-[250px]",
  mapHeight = "h-[160px]",
  addressVariant = "body-xl",
  maxWidth = "max-w-[310px]",
  containerClassName = "",
}: FooterAddressProps) {
  const alignClass = alignment === "center" ? "items-center" : "items-start";
  const textAlign = alignment === "center" ? "text-center" : "text-left";
  const underlineClass = showUnderline 
    ? "after:block after:h-[2px] after:w-full after:bg-white after:mt-1.5 sm:after:hidden"
    : "";

  return (
    <div className={`flex flex-col gap-2 ${alignClass} ${containerClassName}`}>
      <div className="w-full mx-auto sm:mx-0">
        <Typography
          variant="body-xl"
          className={`uppercase mb-0.5 sm:mb-1 inline-block ${textAlign} relative ${underlineClass} text-white`}
        >
          ADDRESS
        </Typography>
      </div>

      <div className={`mb-1.5 w-full flex flex-col ${alignClass} gap-0.5`}>
        {ADDRESS.lines.map((line, index) => (
          <Typography
            key={index}
            as="p"
            variant={addressVariant}
            className={`w-full text-white mb-0.5 ${textAlign} break-words ${maxWidth}`}
          >
            {line}
          </Typography>
        ))}
      </div>

      {/* Map */}
      <div className={`rounded-lg overflow-hidden border border-gray-800 w-full ${mapMaxWidth} ${mapHeight}`}>
        <iframe
          src={ADDRESS.mapUrl}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

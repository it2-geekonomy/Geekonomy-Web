import Image from "next/image";

interface OptionalGridProps {
  images: string[]; // [col1-img1, col1-img2, col2-img, col3-img]
}

const OptionalGrid: React.FC<OptionalGridProps> = ({ images }) => {
  return (
    <>
   <h2 className="max-w-[85%] md:max-w-[70%] mx-auto text-[clamp(1.5rem,2vw,3rem)] mt-18">
  Visual Identity System
</h2>

<div className="grid grid-cols-3 gap-2 lg:gap-4 mt-8 max-w-[85%] md:max-w-[70%] mx-auto">
  {/* First column: 2 images stacked */}
  <div className="flex flex-col gap-4">
    {images[0] && (
      <div className="w-full">
        <Image
          src={images[0]}
          alt="Column 1 - Image 1"
          width={600}
          height={400}
          className="rounded-lg object-contain w-full h-auto"
        />
      </div>
    )}
    {images[1] && (
      <div className="w-full">
        <Image
          src={images[1]}
          alt="Column 1 - Image 2"
          width={600}
          height={400}
          className="rounded-lg object-contain w-full h-auto"
        />
      </div>
    )}
  </div>

  {/* Second column: single image */}
  {images[2] && (
    <div className="w-full">
      <Image
        src={images[2]}
        alt="Column 2"
        width={600}
        height={800}
        className="rounded-lg object-contain w-full h-auto"
      />
    </div>
  )}

  {/* Third column: single image */}
  {images[3] && (
    <div className="w-full">
      <Image
        src={images[3]}
        alt="Column 3"
        width={600}
        height={800}
        className="rounded-lg object-contain w-full h-auto"
      />
    </div>
  )}
</div>

    </>
  );
};

export default OptionalGrid;

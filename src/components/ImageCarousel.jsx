import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ImageCarousel({ images = [], alt = "gallery" }) {
  const [idx, setIdx] = useState(0);

  if (images.length === 0) return null;
  const hasMultiple = images.length > 1;

  const next = () => setIdx((idx + 1) % images.length);
  const prev = () => setIdx((idx - 1 + images.length) % images.length);

  return (
    <div className="relative rounded-xl overflow-hidden border border-gray-800">
      {/* Preload other images */}
      {images.map((img, i) =>
        i !== idx ? (
          <link key={i} rel="preload" as="image" href={img} imagesrcset={img} />
        ) : null
      )}

      {/* Main image */}
      <img
        src={images[idx]}
        alt={`${alt} ${idx + 1}`}
        className="w-full object-cover aspect-[4/3] max-h-100"
        loading="eager"
        decoding="async"
      />

      {/* Navigation buttons */}
      {hasMultiple && (
        <>
          <button
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Pagination dots */}
      {hasMultiple && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 w-3 rounded-full cursor-pointer ${
                i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

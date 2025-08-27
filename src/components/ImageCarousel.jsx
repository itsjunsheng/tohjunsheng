import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ImageCarousel({ images, alt = "gallery", customClass = "" }) {
  const [idx, setIdx] = useState(0);
  const has = Array.isArray(images) && images.length > 0;
  if (!has) return null;

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
      <img
        src={images[idx]}
        alt={`${alt} ${idx + 1}`}
        className={`w-full object-cover ${customClass || "aspect-[4/3] max-h-80"}`}
      />

      {/* Navigation buttons */}
      <button
        aria-label="Prev"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIdx(i)}
            className={[
              "h-1.5 w-3 rounded-full cursor-pointer",
              i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}


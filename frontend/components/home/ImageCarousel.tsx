"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (images.length === 0) return null;

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-full min-h-80">
      <img
        src={images[index]}
        alt={`গ্যালারি ছবি ${index + 1}`}
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="আগের ছবি"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="পরের ছবি"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}
    </div>
  );
}

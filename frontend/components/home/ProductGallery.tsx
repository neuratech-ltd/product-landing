import React from "react";
import Image from "next/image";
import gellery1 from "@/assets/images/workit.png"

export default function ProductGallery() {
  const galleryImages = [
    { id: 1, src: gellery1, alt: "Premium Headphone Angle View" },
    { id: 2, src: gellery1, alt: "Close up Detail View" },
    { id: 3, src: gellery1, alt: "Product Packaging Box" },
    { id: 4, src: gellery1, alt: "Product in Use Lifestyle" },
  ];

  return (
    <section className="py-16 bg-[var(--our-bg)]">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[var(--our-dark)] mb-3">
            Product Gallery
          </h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            আমাদের প্রিমিয়াম ডিভাইসের প্রতিটি কোণ এবং ডিটেইলস এক্সপ্লোর করুন
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                sizes="(max-w-768px) 100vw, 280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--our-dark)]/80 via-[var(--our-dark)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold bg-[var(--our-primary)] px-3 py-1.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Detail
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/assets/images/image a.png";
import image2 from "@/assets/images/image b.png";
import image3 from "@/assets/images/image c.png";
import image4 from "@/assets/images/image d.png";

export default function ProductGallery() {
  const images = [
    { id: 1, src: image1, alt: "Headphone Front View" },
    { id: 2, src: image2, alt: "Headphone Side View" },
    { id: 3, src: image3, alt: "Headphone Detail View" },
    { id: 4, src: image4, alt: "Headphone Lifestyle View" },
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="py-12 bg-[var(--our-bg)] w-full flex justify-center items-center">
      <div className="container mx-auto px-4 max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full aspect-[4/3] md:aspect-square max-h-[500px] rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm flex items-center justify-center">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                className="object-contain p-4 transition-all duration-300 ease-in-out"
                sizes="(max-w-1024px) 100vw, 600px"
              />
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs font-bold text-[var(--our-primary)] uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">
                Premium Collection
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[var(--our-dark)] mt-3 mb-2">
                Explore Every Detail
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                নিচের থাম্বনেইলগুলোতে ক্লিক করে প্রোডাক্টটির প্রতিটি অ্যাঙ্গেল
                এবং নিখুঁত ডিজাইন প্রিভিউ করে দেখুন।
              </p>
            </div>
            <div className="grid grid-cols-4 gap-3 w-full mb-5">
              {images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-[var(--our-bg)] border-2 transition-all duration-200 p-1 min-h-[70px] ${
                    activeImage.id === img.id
                      ? "border-[var(--our-primary)] shadow-md scale-95"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="py-4 text-center">
              <button className="bg-[var(--our-primary)] hover:bg-[var(--our-bg-hover)] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import HeroImage from "../../assets/images/product banner.webp";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url('${HeroImage.src || HeroImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center right",
      }}
    >
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Premium Face Cream
          </h1>
          <p className="text-base md:text-lg text-gray-300">
            Discover the amazing features and benefits of our product. Get
            glowing skin naturally.
          </p>

          <div className="pt-2">
            <button className="bg-[var(--our-primary)] hover:bg-[var(--our-dark)] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors">
              Buy Now
            </button>
          </div>   
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
};

export default HeroSection;

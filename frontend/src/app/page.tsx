// import CustomerReviews, { CarouselSize } from "@/components/home/CustomerReviews";
import { CustomerRivews } from "@/components/home/CustomerRivews";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import ProductGallery from "@/components/home/ProductGallery";
import StockCounter from "@/components/home/StockCounter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <StockCounter />
      <HowItWorks />
      <CustomerRivews/>
      <ProductGallery />
    </div>
  );
}

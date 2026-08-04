// import CustomerReviews, { CarouselSize } from "@/components/home/CustomerReviews";
import { CustomerRivews } from "@/components/home/CustomerRivews";
import FaqWhyUs from "@/components/home/FaqWhyUs";
import FeaturesSpecs from "@/components/home/FeaturesSpecs";
import GalleryVideo from "@/components/home/GalleryVideo";
import HeroOffer from "@/components/home/HeroOffer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import OrderForm from "@/components/home/OrderForm";
import ProductDescription from "@/components/home/ProductDescription";
import ProductGallery from "@/components/home/ProductGallery";
import StockCounter from "@/components/home/StockCounter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroOffer />
      <ProductDescription />
      {/* <HeroSection /> */}
      {/* <StockCounter /> */}
      {/* <HowItWorks /> */}
      <GalleryVideo />
      <FeaturesSpecs />
      <CustomerRivews/>
      <FaqWhyUs />
      {/* <ProductGallery /> */}
      {/* <OrderForm/> */}
    </div>
  );
}

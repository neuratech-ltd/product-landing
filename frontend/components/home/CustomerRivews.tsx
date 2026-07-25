"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react"; 
import profileimg1 from "@/assets/images/profile.jpg"

export function CustomerRivews() {
  const reviewsData = [
    {
      id: 1,
      name: "জাহিদুল ইসলাম",
      role: "Verified Buyer",
      image: profileimg1.src, 
      comment: "প্রোডাক্টের কোয়ালিটি অসাধারণ! ডেলিভারিও খুব ফাস্ট পেয়েছি। নেক্সটে আবার অর্ডার করার ইচ্ছা আছে।",
      rating: 5
    },
    {
      id: 2,
      name: "নাসরিন আক্তার",
      role: "Premium User",
      image: profileimg1.src,
      comment: "বিল্ড কোয়ালিটি প্রিমিয়াম এবং সাউন্ড একদম ক্রিস্টাল ক্লিয়ার। প্রাইস অনুযায়ী বেস্ট চয়েস নিঃসন্দেহে।",
      rating: 5
    },
    {
      id: 3,
      name: "তানভীর আহমেদ",
      role: "Tech Enthusiast",
      image: profileimg1.src,
      comment: "খুবই কমফোর্টেবল। দীর্ঘক্ষণ ব্যবহার করলেও কানে কোনো সমস্যা হয় না। কাস্টমার সাপোর্ট টিম বেশ হেল্পফুল ছিল।",
      rating: 4
    },
    {
      id: 4,
      name: "রাফসান সানি",
      role: "Regular Customer",
      image: profileimg1.src,
      comment: "লুকিং অনেক জোস! ম্যাট ফিনিশিংটা প্রিমিয়াম ভাইব দেয়। ফ্রেন্ডদেরও রিকমেন্ড করেছি এটা নেওয়ার জন্য।",
      rating: 5
    }
  ];

  return (
    <div className="w-full flex justify-center px-8 sm:px-12 py-12 bg-gray-50/50"> 
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl"
      >
        <CarouselContent className="-ml-4">
          
          {reviewsData.map((review) => (
            <CarouselItem
              key={review.id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2 h-full">
                <Card className="h-full border-gray-100 shadow-sm rounded-2xl bg-white hover:shadow-md transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center justify-between p-6 h-full min-h-[380px]">
                    
                   
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-100 bg-gray-50 relative mb-2 flex-shrink-0">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>

                    
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    
                    <div className="text-center flex-1 flex flex-col justify-start mt-2">
                      <h3 className="text-base font-bold text-gray-800">
                        {review.name} 
                      </h3>
                      <span className="text-xs text-gray-400 font-medium block mb-3">
                        {review.role}
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed font-normal italic">
                        "{review.comment}" 
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 sm:-left-12" />
        <CarouselNext className="-right-6 sm:-right-12" />
      </Carousel>
    </div>
  );
}
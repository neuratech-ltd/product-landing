"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Rayna Korsgaard",
    date: "15/04/2021",
    avatar: "/avatar1.png", 
    rating: 5,
    text: "Amazing apartments. It's new, clean, comfortable, there are all needs. I was feeling like home. Cozy bedroom. Family of owners are very helpful and friendly. It's a kids and pet friendly.",
  },
  {
    id: 2,
    name: "Rayna Korsgaard",
    date: "15/04/2021",
    avatar: "/avatar1.png",
    rating: 5,
    text: "Amazing apartments. It's new, clean, comfortable, there are all needs. I was feeling like home. Cozy bedroom. Family of owners are very helpful and friendly. It's a kids and pet friendly.",
  },
  {
    id: 3,
    name: "Rayna Korsgaard",
    date: "15/04/2021",
    avatar: "/avatar1.png",
    rating: 5,
    text: "Amazing apartments. It's new, clean, comfortable, there are all needs. I was feeling like home. Cozy bedroom. Family of owners are very helpful and friendly. It's a kids and pet friendly.",
  },
  {
    id: 4,
    name: "John Doe",
    date: "20/05/2022",
    avatar: "/avatar1.png",
    rating: 5,
    text: "Great experience! The customer service was top-notch and the tech products perform seamlessly. Highly recommended for everyone looking for premium quality.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-[var(--our-bg)] overflow-hidden">
      <div className="container mx-auto px-12 max-w-6xl relative">
        
        <h2 className="text-3xl font-black text-center text-[var(--our-bg-hover)] mb-12">
          Customer Review 
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="flex -ml-4">
            {reviews.map((review) => (
              <CarouselItem 
                key={review.id} 
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between h-full min-h-[320px] relative overflow-hidden group hover:shadow-md transition-shadow">
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 border">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-[var(--our-bg-hover)]">
                            {review.name}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {review.date}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-5 h-5 flex-shrink-0">
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                          <path
                            fill="#EA4335"
                            d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.466 0-6.277-2.85-6.277-6.36s2.811-6.358 6.277-6.358c1.583 0 3.022.585 4.136 1.547l3.076-3.13C19.345 2.502 16.012 1.2 12.24 1.2 6.166 1.2 1.2 6.166 1.2 12.24s4.966 11.04 11.04 11.04c6.313 0 10.51-4.436 10.51-10.706 0-.745-.067-1.309-.15-2.289H12.24z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-amber-400 text-amber-400" 
                        />
                      ))}
                    </div>

                   
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {review.text}
                    </p>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none opacity-60" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

        
          <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[var(--our-primary)] text-white hover:bg-[var(--our-bg-hover)] hover:text-white border-none w-10 h-10 shadow-md" />
          <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-[var(--our-primary)] text-white hover:bg-[var(--our-bg-hover)] hover:text-white border-none w-10 h-10 shadow-md" />
        </Carousel>

      </div>
    </section>
  );
}
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CustomerRivews() {
  return (
    <div className="w-full flex justify-center px-8 sm:px-12"> 
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl"
      >
        <CarouselContent className="-ml-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2 h-full">
                <Card className="h-full border-gray-100 shadow-sm rounded-2xl">
                  <CardContent className="flex flex-col items-center justify-between p-6 h-full min-h-[350px]">
                    <div className="w-20 h-20 rounded-full overflow-hidden border bg-gray-50 relative mb-4 flex-shrink-0">
                      <img
                        src="/placeholder.svg"
                        alt="Customer Review"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center flex-1 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Client Name {index + 1}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
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
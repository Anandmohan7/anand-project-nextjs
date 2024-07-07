"use client";
import { useState, useEffect, SetStateAction } from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const totalSlides = 3;

  const handleSlideChange = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (api) {
      api.on("select", () => {
        handleSlideChange(api.selectedScrollSnap());
      });
    }
  }, [api]);

  return (
    <div className="relative w-130 h-130 bg-primary-foreground">
      <Carousel
        className="w-full h-full"
        opts={{ loop: false }}
        setApi={setApi}
      >
        <CarouselContent className="h-full">
          <CarouselItem className="flex items-center justify-between h-full">
            <div className="w-1/2 pl-20 text-secondary-heading">
              <h1 className="text-6xl font-bold">Lessons and Insights</h1>
              <h1 className="text-6xl text-secondary-light font-bold">
                from 8 years
              </h1>
              <p className="mt-2 text-muted">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <Button className="bg-secondary-light mt-8 pr-8 pl-8">
                Register
              </Button>
            </div>
            <div className="w-1/3">
              <img
                src="/Illustration.png"
                className="w-full pr-20"
                alt="Illustration"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-between h-full">
            <div className="w-1/2 pl-20">
              <h1 className="text-6xl font-bold">Lessons and Insights</h1>
              <h1 className="text-6xl text-secondary-light font-bold">
                from 8 years
              </h1>
              <p className="mt-2 text-muted">
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <div className="w-1/3">
              <img
                src="/Illustration.png"
                className="w-full pr-20"
                alt="Illustration"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="flex items-center justify-between h-full">
            <div className="w-1/2 pl-20">
              <h1 className="text-6xl font-bold">Lessons and Insights</h1>
              <h1 className="text-6xl text-secondary-light font-bold">
                from 8 years
              </h1>
              <p className="mt-2 text-muted">
                Where to grow your business as a photographer: site or social
                media?
              </p>
            </div>
            <div className="w-1/3">
              <img
                src="/Illustration.png"
                className="w-full pr-20"
                alt="Illustration"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-4 space-x-2 pb-8">
        {[...Array(totalSlides)].map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index
                ? "bg-accent-activeLight"
                : "bg-accent-notActiveLight"
            }`}
            onClick={() => api && api.scrollTo(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

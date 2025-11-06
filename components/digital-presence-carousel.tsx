"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DigitalPresenceCarouselProps {
  images: string[]
}

export default function DigitalPresenceCarousel({ images }: DigitalPresenceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const nextSlide = () => {
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const getVisibleImages = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(images[(currentIndex + i) % images.length])
    }
    return visible
  }

  const visibleImages = getVisibleImages()

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      <Button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#f9f5ef] hover:bg-[#f9f5ef]/90 text-brand-red rounded-full w-12 h-12 p-0 shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {visibleImages.map((image, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className={`relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-out ${
              direction === "right"
                ? "animate-in slide-in-from-right-10 fade-in"
                : "animate-in slide-in-from-left-10 fade-in"
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Social media post ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#f9f5ef] hover:bg-[#f9f5ef]/90 text-brand-red rounded-full w-12 h-12 p-0 shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left")
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#f9f5ef] w-8" : "bg-[#f9f5ef]/30 hover:bg-[#f9f5ef]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

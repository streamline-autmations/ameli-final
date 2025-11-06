"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface InstagramPostsCarouselProps {
  images: string[]
  aspectRatio?: string
}

export default function InstagramPostsCarousel({ images, aspectRatio = "3/4" }: InstagramPostsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleScroll = () => {
    if (scrollContainerRef.current && !isDragging) {
      const container = scrollContainerRef.current
      const scrollPosition = container.scrollLeft
      const itemWidth = container.offsetWidth / 3
      const newIndex = Math.round(scrollPosition / itemWidth)
      setCurrentIndex(newIndex)
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const itemWidth = container.offsetWidth / 3
      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "auto"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 0.5
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.scrollBehavior = "smooth"
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      container.scrollLeft += e.deltaY
    }

    container.addEventListener("scroll", handleScroll)
    container.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      container.removeEventListener("scroll", handleScroll)
      container.removeEventListener("wheel", handleWheel)
    }
  }, [isDragging])

  return (
    <div className="relative max-w-7xl mx-auto">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth px-8 md:px-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85%] md:w-[calc(33.333%-1rem)] snap-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group" style={{ aspectRatio }}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-brand-red w-8" : "bg-brand-red/30 hover:bg-brand-red/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  slug: string
  title: string
  category: string
  cover: string
  mobileCover?: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    snapToNearestCard()
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    snapToNearestCard()
  }

  const snapToNearestCard = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const cardWidth = container.offsetWidth
    const newIndex = Math.round(container.scrollLeft / cardWidth)
    setCurrentIndex(newIndex)
    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    })
  }

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    scrollContainerRef.current?.scrollTo({
      left: newIndex * (scrollContainerRef.current?.offsetWidth || 0),
      behavior: "smooth",
    })
  }

  const handleNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    scrollContainerRef.current?.scrollTo({
      left: newIndex * (scrollContainerRef.current?.offsetWidth || 0),
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex">
          {projects.map((project) => (
            <div key={project.slug} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 snap-start">
              <Link href={`/projects/${project.slug}`} className="block group relative">
                <div className="relative aspect-square overflow-hidden rounded-[14px]">
                  <Image
                    src={isMobile && project.mobileCover ? project.mobileCover : project.cover || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-end p-4 sm:p-6">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <h3 className="title-playfair text-white font-bold text-base sm:text-lg md:text-xl mb-1">
                        {project.title}
                      </h3>
                      <p className="title-script text-white/90 text-sm sm:text-base">{project.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white/90 hover:bg-white text-brand-red rounded-full shadow-lg"
        aria-label="Previous projects"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white/90 hover:bg-white text-brand-red rounded-full shadow-lg"
        aria-label="Next projects"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex sm:hidden justify-center gap-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx)
              scrollContainerRef.current?.scrollTo({
                left: idx * (scrollContainerRef.current?.offsetWidth || 0),
                behavior: "smooth",
              })
            }}
            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-[#f9f5ef] w-6" : "bg-[#f9f5ef]/50"}`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

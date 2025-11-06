"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg",
  "/images/hero/hero-5.jpg",
  "/images/hero/hero-6.jpg",
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setNextIndex((currentIndex + 1) % heroImages.length)

      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % heroImages.length)
        setIsTransitioning(false)
      }, 1000)
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Split images */}
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full">
          <Image
            src={heroImages[currentIndex] || "/placeholder.svg"}
            alt="Portfolio work"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-1/2 h-full">
          <Image
            src={heroImages[(currentIndex + 1) % heroImages.length] || "/placeholder.svg"}
            alt="Portfolio work"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Crossfade overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 flex animate-fade-in">
          <div className="relative w-1/2 h-full">
            <Image
              src={heroImages[nextIndex] || "/placeholder.svg"}
              alt="Portfolio work"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-1/2 h-full">
            <Image
              src={heroImages[(nextIndex + 1) % heroImages.length] || "/placeholder.svg"}
              alt="Portfolio work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-20">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="altTitle text-6xl md:text-8xl mb-4 text-balance">Ameli van Zyl</h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">Chase perfection. Create excellence.</p>
          <Button
            asChild
            size="lg"
            className="bg-brand-deep-orange hover:bg-brand-warm-red text-white font-medium px-8 py-6 text-lg"
          >
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const desktopLeftImages = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371950/Mental_Health_Tip_Cards_Box_5x-8_ywzqtd.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374037/Chew_Good_Poster_5x-8_zmzzv6.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365199/Habitat_Wristband_2_5x-8_lbvci0.webp",
]

const desktopRightImages = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371949/Mental_Health_Poster_5x-8_fwen7i.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374035/Chew_Good_Insta_Profile_5x-8_fqhc6y.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365199/Habitat_Towel_1_5x-8_dtf54s.webp",
]

const mobileImages = [
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762414067/Chicken_SHop_date_Mobile_Banner_2x-8_yyp8kp.png",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371949/Mental_Health_Booklet_5x-8_tp1dpu.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366295/Week_6_Today_is_the_day_post_d1gwru.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366291/WEEK_1_Vibe-Mood_1_auantv.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365197/Habitat_Logo_1_5x-8_jayqof.webp",
  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366291/WEEK_2_Headliner_Reveal_2_ogydni.webp",
]

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function SplitHero() {
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    if (isMobile) {
      // Mobile: fade images every 5s
      const mobileInterval = setInterval(() => {
        setMobileIndex((prev) => (prev + 1) % mobileImages.length)
      }, 5000)
      return () => clearInterval(mobileInterval)
    } else {
      // Desktop: left images fade every 7s
      const leftInterval = setInterval(() => {
        setLeftIndex((prev) => (prev + 1) % desktopLeftImages.length)
      }, 7000)

      // Right images fade every 10s with 2s delay
      const rightTimeout = setTimeout(() => {
        const rightInterval = setInterval(() => {
          setRightIndex((prev) => (prev + 1) % desktopRightImages.length)
        }, 10000)
        return () => clearInterval(rightInterval)
      }, 2000)

      return () => {
        clearInterval(leftInterval)
        clearTimeout(rightTimeout)
      }
    }
  }, [prefersReducedMotion, isMobile])

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      {/* Desktop Split Images */}
      <div className="hidden md:flex absolute inset-0">
        {/* Left Side */}
        <div className="relative w-1/2 h-full">
          {desktopLeftImages.map((src, idx) => (
            <Image
              key={src}
              src={src || "/placeholder.svg"}
              alt="Hero image left"
              fill
              className={cn(
                "object-cover transition-opacity duration-1000",
                idx === leftIndex ? "opacity-100" : "opacity-0",
              )}
              priority={idx === 0}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="relative w-1/2 h-full">
          {desktopRightImages.map((src, idx) => (
            <Image
              key={src}
              src={src || "/placeholder.svg"}
              alt="Hero image right"
              fill
              className={cn(
                "object-cover transition-opacity duration-1000",
                idx === rightIndex ? "opacity-100" : "opacity-0",
              )}
              priority={idx === 0}
            />
          ))}
        </div>
      </div>

      {/* Mobile Single Image */}
      <div className="md:hidden absolute inset-0">
        {mobileImages.map((src, idx) => (
          <Image
            key={src}
            src={src || "/placeholder.svg"}
            alt="Hero image mobile"
            fill
            className={cn(
              "object-cover transition-opacity duration-1000",
              idx === mobileIndex ? "opacity-100" : "opacity-0",
            )}
            priority={idx === 0}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Text content with enhanced shadows for readability */}
      <div className="absolute inset-0 flex items-center justify-center md:items-center md:justify-center">
        <div className="text-center p-6 sm:p-8 md:p-12 lg:p-16 max-w-3xl md:translate-y-[-10%] md:translate-x-[5%] relative z-10">
          <h1
            className="title-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#f9f5ef] mb-3 sm:mb-4"
            style={{
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.3),
                0 4px 8px rgba(0, 0, 0, 0.4),
                0 8px 16px rgba(0, 0, 0, 0.5),
                0 12px 24px rgba(0, 0, 0, 0.6),
                0 16px 32px rgba(0, 0, 0, 0.7)
              `,
            }}
          >
            Ameli Van Zyl
          </h1>
          <p
            className="title-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#f9f5ef] mb-6 sm:mb-8"
            style={{
              textShadow: `
                0 2px 4px rgba(0, 0, 0, 0.3),
                0 4px 8px rgba(0, 0, 0, 0.4),
                0 8px 16px rgba(0, 0, 0, 0.5),
                0 12px 24px rgba(0, 0, 0, 0.6)
              `,
            }}
          >
            Graphic designer
          </p>
          <Button
            asChild
            size="lg"
            className="bg-brand-red hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-2 border-brand-red rounded-lg px-10 py-6 text-lg sm:text-xl shadow-lg transition-all"
          >
            <Link href="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

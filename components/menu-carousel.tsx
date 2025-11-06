"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function MenuCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [isPaused, setIsPaused] = useState(false)

  const menuImages = [
    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267962/Menu_1_j8h5wm.webp",
    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267965/Menu_3_c3iz9c.webp",
    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267965/Menu_2_fuha9f.webp",
    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267966/Menu_4_hpcpik.webp",
    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267966/Menu_5_c0x5q4.webp",
    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267968/Menu_6_u8uvve.webp",
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = scrollContainer.scrollLeft
    const scrollSpeed = 0.5

    const scroll = () => {
      if (!isPaused) {
        scrollAmount += scrollSpeed

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }

        scrollContainer.scrollLeft = scrollAmount
      }
      animationRef.current = requestAnimationFrame(scroll)
    }

    animationRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  const handleClick = () => {
    setIsPaused((prev) => !prev)
  }

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        onClick={handleClick}
        className="flex gap-6 overflow-x-hidden cursor-pointer"
        style={{ scrollBehavior: "auto" }}
      >
        {[...menuImages, ...menuImages].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[400px] relative aspect-[1414/2000] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Menu page ${(index % menuImages.length) + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

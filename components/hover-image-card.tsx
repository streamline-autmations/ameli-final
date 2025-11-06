"use client"

import { useState } from "react"
import Image from "next/image"

interface HoverImageCardProps {
  defaultImage: string
  hoverImage: string
  alt: string
}

export default function HoverImageCard({ defaultImage, hoverImage, alt }: HoverImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? hoverImage : defaultImage}
        alt={alt}
        fill
        className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-all duration-500" />
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"

interface LabeledImageCardProps {
  defaultImage: string
  hoverImage?: string
  alt: string
  label?: string // Made label optional
}

export default function LabeledImageCard({ defaultImage, hoverImage, alt, label }: LabeledImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg cursor-pointer group perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Front face */}
        <div className="absolute inset-0 backface-hidden">
          <Image src={defaultImage || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        </div>

        {/* Back face - only if hover image exists */}
        {hoverImage && (
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <Image src={hoverImage || "/placeholder.svg"} alt={`${alt} - alternate`} fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"

interface MerchandiseItem {
  defaultImage: string
  hoverImage?: string
  alt: string
}

interface HabitatMerchandiseGridProps {
  items: MerchandiseItem[]
}

export default function HabitatMerchandiseGrid({ items }: HabitatMerchandiseGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Ensure we have exactly 6 items
  const [item1, item2, item3, item4, item5, item6] = items

  const renderItem = (item: MerchandiseItem, index: number, className: string) => {
    const hasHover = !!item?.hoverImage

    return (
      <div
        key={index}
        className={`relative rounded-2xl overflow-hidden shadow-xl ${hasHover ? "cursor-pointer group perspective-1000" : "group"} ${className}`}
        onMouseEnter={() => hasHover && setHoveredIndex(index)}
        onMouseLeave={() => hasHover && setHoveredIndex(null)}
      >
        {hasHover ? (
          <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
            {/* Front face */}
            <div className="absolute inset-0 backface-hidden">
              <Image
                src={item?.defaultImage || "/placeholder.svg"}
                alt={item?.alt || "Merchandise"}
                fill
                className="object-cover"
              />
            </div>

            {/* Back face */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <Image
                src={item.hoverImage || "/placeholder.svg"}
                alt={`${item.alt} - alternate`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <Image
            src={item?.defaultImage || "/placeholder.svg"}
            alt={item?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="hidden lg:grid lg:grid-cols-2 gap-6">
        {/* Row 1: Two equal height squares */}
        {item1 && renderItem(item1, 0, "aspect-square")}
        {item2 && renderItem(item2, 1, "aspect-square")}

        {/* Row 2: Left 2000x1333 (3:2), Right portrait ~0.92:1 (1838x2000) */}
        {item3 && renderItem(item3, 2, "aspect-[2000/1333]")}
        {item4 && renderItem(item4, 3, "aspect-[0.92/1]")}

        {/* Row 3: Left ~1.14:1 (2000x1750), Right ~1.41:1 (2000x1420) */}
        {item5 && renderItem(item5, 4, "aspect-[1.14/1]")}
        {item6 && renderItem(item6, 5, "aspect-[1.41/1]")}
      </div>

      {/* Tablet Grid */}
      <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
        {item1 && renderItem(item1, 0, "aspect-square")}
        {item2 && renderItem(item2, 1, "aspect-square")}
        <div className="col-span-2">{item3 && renderItem(item3, 2, "aspect-[2000/1333]")}</div>
        <div className="col-span-2">{item4 && renderItem(item4, 3, "aspect-square")}</div>
        {item5 && renderItem(item5, 4, "aspect-[1.14/1]")}
        {item6 && renderItem(item6, 5, "aspect-[1.41/1]")}
      </div>

      {/* Mobile Grid */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {items.map((item, index) => renderItem(item, index, "aspect-square"))}
      </div>
    </div>
  )
}

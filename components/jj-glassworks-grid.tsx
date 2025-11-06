"use client"

import Image from "next/image"

interface JJGlassworksGridProps {
  items: {
    defaultImage: string
    alt: string
    label?: string
    aspectRatio: string
  }[]
}

export default function JJGlassworksGrid({ items }: JJGlassworksGridProps) {
  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-6 max-w-7xl mx-auto">
      {/* Billboard - 3:2 - spans 8 cols */}
      <div className="col-span-12 md:col-span-8">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group" style={{ aspectRatio: "3/2" }}>
          <Image
            src={items[0].defaultImage || "/placeholder.svg"}
            alt={items[0].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      {/* Business Card - 1:1 - spans 4 cols */}
      <div className="col-span-12 md:col-span-4">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group" style={{ aspectRatio: "1/1" }}>
          <Image
            src={items[1].defaultImage || "/placeholder.svg"}
            alt={items[1].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      {/* Hat - 1:1 - spans 4 cols */}
      <div className="col-span-12 md:col-span-4">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group" style={{ aspectRatio: "1/1" }}>
          <Image
            src={items[2].defaultImage || "/placeholder.svg"}
            alt={items[2].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      {/* Overall - 3:4 - spans 5 cols */}
      <div className="col-span-12 md:col-span-5">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group" style={{ aspectRatio: "3/4" }}>
          <Image
            src={items[3].defaultImage || "/placeholder.svg"}
            alt={items[3].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      {/* Pen - 21:9 - spans 7 cols (wider) */}
      <div className="col-span-12 md:col-span-7">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group" style={{ aspectRatio: "21/9" }}>
          <Image
            src={items[4].defaultImage || "/placeholder.svg"}
            alt={items[4].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      {/* Team Photo - 2:1 - full width */}
      <div className="col-span-12">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group" style={{ aspectRatio: "2/1" }}>
          <Image
            src={items[5].defaultImage || "/placeholder.svg"}
            alt={items[5].alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  )
}

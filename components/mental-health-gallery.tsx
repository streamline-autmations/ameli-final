"use client"

import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
}

interface MentalHealthGalleryProps {
  images: GalleryImage[]
}

export default function MentalHealthGallery({ images }: MentalHealthGalleryProps) {
  if (images.length < 5) {
    console.error("MentalHealthGallery requires at least 5 images")
    return null
  }

  return (
    <div className="w-full px-4 md:px-0">
      {/* Mobile: Single Column (≤640px) */}
      <div className="block sm:hidden">
        <div className="space-y-4">
          {/* Row 1: heroSquareA */}
          <div className="relative aspect-square rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[0].src || "/placeholder.svg"}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 2: heroSquareB */}
          <div className="relative aspect-square rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[1].src || "/placeholder.svg"}
              alt={images[1].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 3: tallLeft */}
          <div className="relative aspect-[0.45/1] rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[2].src || "/placeholder.svg"}
              alt={images[2].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 4: midRight1 */}
          <div className="relative aspect-[0.81/1] rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[3].src || "/placeholder.svg"}
              alt={images[3].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Row 5: midRight2 */}
          <div className="relative aspect-[2000/1884] rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[4].src || "/placeholder.svg"}
              alt={images[4].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Tablet: Two Columns (641–1024px) */}
      <div className="hidden sm:grid lg:hidden gap-5 grid-cols-2">
        {/* Row 1: heroSquareA & heroSquareB */}
        <div className="relative aspect-square rounded-4xl overflow-hidden bg-[#071C28]">
          <Image
            src={images[0].src || "/placeholder.svg"}
            alt={images[0].alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="relative aspect-square rounded-4xl overflow-hidden bg-[#071C28]">
          <Image
            src={images[1].src || "/placeholder.svg"}
            alt={images[1].alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Row 2: tallLeft & midRight stacked */}
        <div className="space-y-5">
          <div className="relative aspect-[0.81/1] rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[3].src || "/placeholder.svg"}
              alt={images[3].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="relative aspect-[2000/1884] rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[4].src || "/placeholder.svg"}
              alt={images[4].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="relative aspect-[0.45/1] rounded-4xl overflow-hidden bg-[#071C28]">
          <Image
            src={images[2].src || "/placeholder.svg"}
            alt={images[2].alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Desktop: Custom Grid (≥1025px) */}
      <div className="hidden lg:grid lg:gap-6">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* heroSquareA */}
          <div className="relative aspect-square rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[0].src || "/placeholder.svg"}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* heroSquareB */}
          <div className="relative aspect-square rounded-4xl overflow-hidden bg-[#071C28]">
            <Image
              src={images[1].src || "/placeholder.svg"}
              alt={images[1].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Second row: tall portrait on left, 2 stacked on right */}
        <div className="grid grid-cols-3 gap-6">
          {/* tallLeft - spans full height of 2 stacked images */}
          <div className="relative rounded-4xl overflow-hidden bg-[#071C28]" style={{ aspectRatio: "0.45 / 1" }}>
            <Image
              src={images[2].src || "/placeholder.svg"}
              alt={images[2].alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right column: 2 stacked images */}
          <div className="col-span-2 flex flex-col gap-6">
            {/* midRight1 */}
            <div
              className="relative rounded-4xl overflow-hidden bg-[#071C28] flex-1"
              style={{ aspectRatio: "1.54 / 1" }}
            >
              <Image
                src={images[3].src || "/placeholder.svg"}
                alt={images[3].alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* midRight2 */}
            <div
              className="relative rounded-4xl overflow-hidden bg-[#071C28] flex-1"
              style={{ aspectRatio: "2000 / 1884" }}
            >
              <Image
                src={images[4].src || "/placeholder.svg"}
                alt={images[4].alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

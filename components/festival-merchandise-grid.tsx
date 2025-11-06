"use client"

import Image from "next/image"

interface MerchandiseImage {
  src: string
  alt: string
  aspectRatio: "square" | "landscape" | "portrait" | "4:3" | "16:10"
}

interface FestivalMerchandiseGridProps {
  images: MerchandiseImage[]
}

export default function FestivalMerchandiseGrid({ images }: FestivalMerchandiseGridProps) {
  // Ensure we have exactly 6 images
  const [img1, img2, img3, img4, img5, img6] = images

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6">
      {/* Desktop Grid - 12 column grid with specific spans */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-6">
        <div className="col-span-6 relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img1?.src || "/placeholder.svg"}
            alt={img1?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="col-span-6 relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img2?.src || "/placeholder.svg"}
            alt={img2?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img3?.src || "/placeholder.svg"}
            alt={img3?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img4?.src || "/placeholder.svg"}
            alt={img4?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img5?.src || "/placeholder.svg"}
            alt={img5?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img6?.src || "/placeholder.svg"}
            alt={img6?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4">
        {/* Row 1: Two squares side-by-side */}
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img1?.src || "/placeholder.svg"}
            alt={img1?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img2?.src || "/placeholder.svg"}
            alt={img2?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Row 2: T-shirts full width */}
        <div className="col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img3?.src || "/placeholder.svg"}
            alt={img3?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Row 3: Badge full width */}
        <div className="col-span-2 relative aspect-square rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img4?.src || "/placeholder.svg"}
            alt={img4?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Row 4: Bucket + Ticket side-by-side */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img5?.src || "/placeholder.svg"}
            alt={img5?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-[#0f0f16]">
          <Image
            src={img6?.src || "/placeholder.svg"}
            alt={img6?.alt || "Merchandise"}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden">
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-[#0f0f16]">
          <Image src={img1?.src || "/placeholder.svg"} alt={img1?.alt || "Merchandise"} fill className="object-cover" />
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-[#0f0f16]">
          <Image src={img2?.src || "/placeholder.svg"} alt={img2?.alt || "Merchandise"} fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-[#0f0f16]">
          <Image src={img3?.src || "/placeholder.svg"} alt={img3?.alt || "Merchandise"} fill className="object-cover" />
        </div>
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg bg-[#0f0f16]">
          <Image src={img4?.src || "/placeholder.svg"} alt={img4?.alt || "Merchandise"} fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-[#0f0f16]">
          <Image src={img5?.src || "/placeholder.svg"} alt={img5?.alt || "Merchandise"} fill className="object-cover" />
        </div>
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg bg-[#0f0f16]">
          <Image src={img6?.src || "/placeholder.svg"} alt={img6?.alt || "Merchandise"} fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

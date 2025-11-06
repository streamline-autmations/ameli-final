import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  slug: string
  title: string
  category: string
  description?: string
  cover: string
  isFullWidth?: boolean
}

export default function ProjectCard({
  slug,
  title,
  category,
  description,
  cover,
  isFullWidth = false,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
        <Image
          src={cover || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="title-playfair text-white text-2xl lg:text-3xl mb-2">{title}</h3>
          <p className="body text-white/90 text-sm lg:text-base mb-4">{category}</p>
          {description && (
            <p className="hidden md:block body text-white/80 text-sm mb-4 line-clamp-3 max-w-md">{description}</p>
          )}
          <span className="body text-white text-sm lg:text-base font-medium">
            <span className="md:hidden">View Project</span>
            <span className="hidden md:inline">View Case Study</span>
          </span>
        </div>
      </div>
    </Link>
  )
}

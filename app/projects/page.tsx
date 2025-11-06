"use client"
import ProjectCard from "@/components/project-card"
import projects from "@/src/data/projects.json"
import Image from "next/image"

const categories = ["All", "Brand Identity", "Editorial & Print", "Motion & Video", "Brand Refresh"]

export default function ProjectsPage() {
  return (
    <main>
      <section className="section--cream py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Decorative Image - Left */}
            <div className="absolute left-0 top-0 w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 -translate-x-4 sm:-translate-x-8 md:-translate-x-12 lg:-translate-x-16 translate-y-8 sm:translate-y-12 md:translate-y-16 hidden sm:block">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762076087/ameli-van-zyl_hhuix1.webp"
                  alt="Portfolio decoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Decorative Image - Right */}
            <div className="absolute right-0 bottom-0 w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 translate-x-4 sm:translate-x-8 md:translate-x-12 lg:translate-x-16 translate-y-8 sm:translate-y-12 md:translate-y-16 hidden sm:block">
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762076087/ameli-van-zyl_hhuix1.webp"
                  alt="Portfolio decoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-6 lg:space-y-8 relative z-10 max-w-5xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
              <p className="text-brand-red text-sm sm:text-base md:text-lg tracking-wider uppercase">The Portfolio</p>
              <h1 className="text-brand-red">
                <span className="font-allura text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">Crafting</span>
                <span className="title-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl block leading-tight">
                  Ideas, Shaping
                </span>
                <span className="title-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl block leading-tight">
                  Brands, Driving{" "}
                  <span className="font-allura text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Impact</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-brand-red/80 max-w-3xl mx-auto leading-relaxed">
                A curated collection of brand identities, editorial designs, and creative campaigns that transform ideas
                into memorable experiences. Each project represents a unique journey of collaboration, innovation, and
                strategic thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section--cream py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-8 lg:space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-brand-red title-playfair text-3xl sm:text-4xl md:text-5xl">My Work</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
              {projects.map((project, index) => {
                // Create masonry pattern: first two are side-by-side, third is full-width, repeat
                const isFullWidth = index % 3 === 2

                return (
                  <div key={project.slug} className={isFullWidth ? "sm:col-span-2" : ""}>
                    <ProjectCard
                      slug={project.slug}
                      title={project.title}
                      category={project.category}
                      description={project.overview.problem}
                      cover={project.cover}
                      isFullWidth={isFullWidth}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

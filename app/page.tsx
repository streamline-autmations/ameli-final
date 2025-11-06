import SplitHero from "@/components/split-hero"
import ProjectCarousel from "@/components/project-carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import projects from "@/src/data/projects.json"

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <main>
      <SplitHero />

      <section className="section--cream py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl">
            {/* Accent Tag */}
            <p className="accent-tag mb-4 sm:mb-6">CREATIVE DIRECTION • BRAND IDENTITY</p>

            {/* Headline with underline */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              <h2 className="title-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-red leading-tight mb-4">
                Chase perfection.
                <br />
                Create excellence.
              </h2>
              <div className="w-24 sm:w-32 h-0.5 bg-brand-red"></div>
            </div>

            <p className="body text-base sm:text-lg md:text-xl text-brand-red/80 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              Every project is an opportunity to push boundaries and deliver work that's beautiful, intentional, and
              effective.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-brand-red hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-2 border-brand-red rounded-lg px-8 py-4 text-base sm:text-lg shadow-lg transition-all"
            >
              <Link href="#projects">See My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="section--red py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="title-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-[#f9f5ef] mb-4 sm:mb-6">
            My Projects
          </h2>
          <p className="body text-center text-[#f9f5ef]/90 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">
            Selected work across brand identity, editorial, and motion.
          </p>
          <ProjectCarousel projects={featuredProjects} />
        </div>
      </section>

      <section className="section--cream py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative aspect-[3/4] sm:aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762076087/ameli-van-zyl_hhuix1.webp"
                alt="Ameli van Zyl"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="title-playfair text-4xl sm:text-5xl md:text-6xl text-brand-red">About Me</h2>
              <p className="body text-base sm:text-lg text-brand-red/80 leading-relaxed">
                I'm a graphic designer focused on brand identity, print/editorial, and motion graphics. I combine
                expressive visuals with strategic clarity.
              </p>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
                {["Brand Identity", "Editorial", "Motion/Video", "Illustration"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-brand-red text-xs sm:text-sm rounded-full border border-brand-red/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-red hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-2 border-brand-red rounded-lg transition-all"
                >
                  <Link href="/about">About Me</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all"
                >
                  <Link href="/contact">Have a project in mind?</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--cream py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="title-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-brand-red mb-8 sm:mb-12">
            Showreel
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://iframe.mediadelivery.net/embed/527462/928f4935-df69-4fbe-8023-9185913171f1?autoplay=true&loop=true&muted=true&preload=true&responsive=true&controls=false"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette, Music, Film, BookOpen, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <section className="section--cream py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="title-script text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center text-brand-red mb-12 lg:mb-16">
            Ameli van Zyl
          </h1>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762076087/ameli-van-zyl_hhuix1.webp"
                alt="Ameli van Zyl"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="body text-base lg:text-lg leading-relaxed text-brand-red">
                I focus on <span className="font-bold">marketing and branding design</span>, creating visual identities
                and campaigns that connect with audiences in meaningful ways. My goal is to bring a sense of{" "}
                <span className="font-bold">creativity and originality</span> into every project by blending{" "}
                <span className="font-bold">strategic thinking</span> with{" "}
                <span className="font-bold">expressive design</span>. I enjoy combining{" "}
                <span className="font-bold">illustration and motion graphics</span> to add personality, depth, and
                movement to my work — transforming ideas into visuals that are both{" "}
                <span className="font-bold">engaging and memorable</span>. Through this mix of creativity and strategy,
                I aim to design brands that not only look good but also <span className="font-bold">tell a story</span>{" "}
                and leave a lasting impression.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-transparent text-[#f9f5ef] hover:text-brand-red border-2 border-brand-red rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <Link href="/projects">See my work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section--red py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="title-playfair text-4xl lg:text-5xl text-[#f9f5ef] mb-8 lg:mb-12">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            <ul className="body space-y-3 text-base lg:text-lg text-[#f9f5ef] list-disc list-inside">
              <li>Branding & Visual Identity</li>
              <li>Print & Packaging Design</li>
              <li>Advertising & Campaign Design</li>
              <li>Motion Graphics / Video Editing</li>
              <li>Social Media</li>
            </ul>
            <div className="grid grid-cols-3 gap-4 max-w-sm">
              <div className="aspect-square bg-[#f9f5ef] rounded-2xl flex items-center justify-center shadow-md transition-transform hover:scale-105">
                <span className="text-brand-red font-bold text-5xl lg:text-6xl">Pr</span>
              </div>
              <div className="aspect-square bg-[#f9f5ef] rounded-2xl flex items-center justify-center shadow-md transition-transform hover:scale-105">
                <span className="text-brand-red font-bold text-5xl lg:text-6xl">Ai</span>
              </div>
              <div className="aspect-square bg-[#f9f5ef] rounded-2xl flex items-center justify-center shadow-md transition-transform hover:scale-105">
                <span className="text-brand-red font-bold text-5xl lg:text-6xl">Ae</span>
              </div>
              <div className="aspect-square bg-[#f9f5ef] rounded-2xl flex items-center justify-center shadow-md transition-transform hover:scale-105">
                <span className="text-brand-red font-bold text-5xl lg:text-6xl">Ps</span>
              </div>
              <div className="aspect-square bg-[#f9f5ef] rounded-2xl flex items-center justify-center shadow-md transition-transform hover:scale-105">
                <span className="text-brand-red font-bold text-5xl lg:text-6xl">Id</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--cream py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="title-playfair text-5xl lg:text-6xl text-brand-red mb-8 text-center md:text-left">
                Education
              </h2>
              <div className="bg-white/50 rounded-2xl p-6 lg:p-8 shadow-md border-2 border-brand-red/10">
                <p className="body text-sm lg:text-base text-brand-red/70 font-semibold mb-2">2023 – Present</p>
                <h3 className="title-playfair text-2xl lg:text-3xl text-brand-red mb-3 font-bold">
                  BA Graphic Design — EDUVOS
                </h3>
                <p className="body text-base lg:text-lg text-brand-red/80 italic mb-4">
                  Currently completing final year of studies.
                </p>
                <a
                  href="https://www.eduvos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red/70 transition-colors font-semibold"
                >
                  Visit EDUVOS <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="title-playfair text-5xl lg:text-6xl text-brand-red mb-8 text-center md:text-left">
                Interests
              </h2>
              <div className="space-y-6">
                <div className="flex justify-center md:justify-start gap-6 mb-6">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Palette className="w-7 h-7 lg:w-8 lg:h-8 text-brand-red" />
                  </div>
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Music className="w-7 h-7 lg:w-8 lg:h-8 text-brand-red" />
                  </div>
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <Film className="w-7 h-7 lg:w-8 lg:h-8 text-brand-red" />
                  </div>
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <BookOpen className="w-7 h-7 lg:w-8 lg:h-8 text-brand-red" />
                  </div>
                </div>
                <p className="body text-base lg:text-lg leading-relaxed text-brand-red">
                  Beyond design, I draw inspiration from{" "}
                  <span className="font-bold">art, music, film, and literature</span>. In my spare time, I explore{" "}
                  <span className="font-bold">watercolour illustration</span>, creating custom greeting cards and
                  artworks that celebrate life's special moments. This personal creative practice keeps my eye sharp for
                  color, composition, and emotional storytelling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--cream py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="title-playfair text-4xl lg:text-5xl text-brand-red mb-8 lg:mb-12">My Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <Link href="/projects/jimmys-burger-bar" className="block">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762082053/jimmys-burger-bar-about-compressed_v5pilo.webp"
                    alt="Jimmy's Burger Bar"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <Link href="/projects/jimmys-burger-bar" className="block group">
                <h3 className="title-playfair text-2xl lg:text-3xl text-brand-red group-hover:text-brand-red/80 transition-colors">
                  Jimmy's Burger Bar
                </h3>
              </Link>
              <p className="body text-base lg:text-lg font-medium text-brand-red">June 2024 - Present</p>
              <p className="body text-base lg:text-lg leading-relaxed text-brand-red/80">
                I currently design for Jimmy's Burger Bar on a part-time basis, where I developed the brand's full
                visual identity and continue to create marketing materials including flyers, posters, and weekly social
                media content.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-transparent text-[#f9f5ef] hover:text-brand-red border-2 border-brand-red rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <Link href="/projects/jimmys-burger-bar">View Experience</Link>
              </Button>
            </div>
            <div className="space-y-4">
              <Link href="/projects/jj-glassworks" className="block">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762370723/JJ_Banner_5x-8_ncaims.webp"
                    alt="JJ Glassworks"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <Link href="/projects/jj-glassworks" className="block group">
                <h3 className="title-playfair text-2xl lg:text-3xl text-brand-red group-hover:text-brand-red/80 transition-colors">
                  JJ Glassworks
                </h3>
              </Link>
              <p className="body text-base lg:text-lg font-medium text-brand-red">January 2025</p>
              <p className="body text-base lg:text-lg leading-relaxed text-brand-red/80">
                I previously worked with JJ Glassworks to refresh and modernise their brand identity, updating their
                visual style while maintaining key elements of the original design.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-brand-red hover:bg-transparent text-[#f9f5ef] hover:text-brand-red border-2 border-brand-red rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <Link href="/projects/jj-glassworks">View Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

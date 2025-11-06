import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"
import projects from "@/src/data/projects.json"
import MenuCarousel from "@/components/menu-carousel"
import LabeledImageCard from "@/components/labeled-image-card"
import InstagramPostsCarousel from "@/components/instagram-posts-carousel"
import HabitatVideo from "@/components/habitat-video"
import HabitatMerchandiseGrid from "@/components/habitat-merchandise-grid"
import JJGlassworksGrid from "@/components/jj-glassworks-grid"
import MentalHealthGallery from "@/components/mental-health-gallery"
import ChickenShopVideo from "@/components/chicken-shop-video"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const prevProject = projects[projectIndex - 1]
  const nextProject = projects[projectIndex + 1]

  if (slug === "chicken-shop-date") {
    return (
      <main className="bg-[#f9f5ef]">
        {/* Hero Banner with Cover Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[70vh] lg:h-[80vh]">
          <Image src={project.cover || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        {/* Project Overview - Red Section with Cream Text */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="title-playfair text-4xl md:text-5xl lg:text-6xl text-brand-red">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 body text-lg">
              <span className="text-brand-red">{project.category}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.year}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.role}</span>
            </div>
            <div className="space-y-4 pt-4 border-t-2 border-brand-red/20">
              <h2 className="title-playfair text-2xl md:text-3xl text-brand-red">Overview</h2>
              <p className="body text-lg leading-relaxed max-w-3xl mx-auto text-brand-red bg-[#f9f5ef] p-6 rounded-lg">
                A reimagined motion graphics identity for Chicken Shop Date, blending humor, nostalgia, and contemporary
                aesthetics. Animated intro sequences and promotional content that aligned with the show's offbeat charm
                while enhancing visual consistency across platforms.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Videos Section - Cream */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Motion Graphics</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Dynamic animations and branded content for Chicken Shop Date's digital presence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <ChickenShopVideo
                src="https://res.cloudinary.com/dnlgohkcc/video/upload/v1762423755/Ident_dpk9cc.mp4"
                title="Chicken Shop Date Ident"
              />
              <ChickenShopVideo
                src="https://res.cloudinary.com/dnlgohkcc/video/upload/v1762423755/Snipe_jl1mls.mp4"
                title="Chicken Shop Date Snipe"
              />
              <ChickenShopVideo
                src="https://res.cloudinary.com/dnlgohkcc/video/upload/v1762423755/Donation_caigkv.mp4"
                title="Chicken Shop Date Donation"
              />
              <ChickenShopVideo
                src="https://res.cloudinary.com/dnlgohkcc/video/upload/v1762423755/Subscribe_diitkn.mp4"
                title="Chicken Shop Date Subscribe"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Credits - Red Section */}
        {project.credits && (
          <SectionWrapper variant="red" pad="sm">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="title-script text-3xl text-brand-red">Credits</h3>
              <ul className="space-y-2 body text-brand-red">
                {project.credits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        )}

        {/* Navigation - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            {prevProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">{prevProject.title}</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  <span className="hidden md:inline">{nextProject.title}</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </SectionWrapper>
      </main>
    )
  }

  if (slug === "jimmys-burger-bar") {
    return (
      <main className="bg-[#f9f5ef]">
        {/* Hero Banner with Cover Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[70vh] lg:h-[80vh]">
          {/* Mobile banner */}
          <Image
            src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762430897/Untitled_design_42_lqwkn2.png"
            alt={project.title}
            fill
            className="object-cover md:hidden"
            priority
          />
          {/* Desktop banner */}
          <Image
            src={project.cover || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>

        {/* Project Overview - Red Section with Cream Text */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="title-playfair text-4xl md:text-5xl lg:text-6xl text-brand-red">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 body text-lg">
              <span className="text-brand-red">{project.category}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.year}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.role}</span>
            </div>
            <div className="space-y-4 pt-4 border-t-2 border-brand-red/20">
              <h2 className="title-playfair text-2xl md:text-3xl text-brand-red">Overview</h2>
              <p className="body text-lg leading-relaxed max-w-3xl mx-auto text-brand-red bg-[#f9f5ef] p-6 rounded-lg">
                Developed a complete brand identity for a fast-growing restaurant chain. Focused on balancing a bold,
                urban aesthetic with approachable warmth to reflect the brand's lively dining experience. Delivered
                cohesive visual assets spanning logo, menus, packaging, and digital marketing.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Brand Identity Section - Cream */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Brand Identity</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Creating a bold, playful brand identity that captures the essence of Jimmy's Burger Bar.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267957/Jimmys_Sauce_5x-8_1_oiqpsx.webp"
                  alt="Jimmy's Burger Bar - Sauce Bottle"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <LabeledImageCard
                defaultImage="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267958/Jimmys_Tshirt_Back_Black_5x-8_q1xlpw.webp"
                hoverImage="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267961/Jimmys_Tshirt_Back_White_5x-8_pos8ps.webp"
                alt="Jimmy's Burger Bar - T-Shirt Back"
              />
              <LabeledImageCard
                defaultImage="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267957/Jimmys_Hat_V1_5x-8_tifq3l.webp"
                hoverImage="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267957/Jimmys_Hat_V2_5x-8_e7ypkd.webp"
                alt="Jimmy's Burger Bar - Hat"
              />
              <LabeledImageCard
                defaultImage="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267961/Jimmys_Tshirt_Front_Black_5x-8_xhbilr.webp"
                hoverImage="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267961/Jimmys_Tshirt_Front_White_5x-8_k4qgje.webp"
                alt="Jimmy's Burger Bar - T-Shirt Front"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Digital Presence</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Social media templates and digital assets maintain brand consistency across all online platforms.
              </p>
            </div>
            <div className="px-4 md:px-0">
              <InstagramPostsCarousel
                images={[
                  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762428719/Insta_Post_Iphone_6_1__1_hzckq6.webp",
                  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762427785/Insta_Post_Iphone_1_jr6aqn.png",
                  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267956/Insta_Post_Iphone_3_1_qiia8k.webp",
                  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267956/Insta_Post_Iphone_5_1_fusszz.webp",
                  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267955/Insta_Post_Iphone_4_1_wthfhj.webp",
                  "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762267955/Insta_Post_Iphone_2_1_tdlzdc.webp",
                ]}
                aspectRatio="625/1275"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Menu Carousel - Red Section */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Our Menu</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                A comprehensive menu system that's both functional and beautiful. Click to pause.
              </p>
            </div>
            <MenuCarousel />
          </div>
        </SectionWrapper>

        {/* Credits - Cream Section */}
        {project.credits && (
          <SectionWrapper variant="cream" pad="sm">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="title-script text-3xl text-brand-red">Credits</h3>
              <ul className="space-y-2 body text-brand-red">
                {project.credits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        )}

        {/* Navigation - Red Section */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            {prevProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-2 border-[#f9f5ef] rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">{prevProject.title}</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-2 border-[#f9f5ef] rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  <span className="hidden md:inline">{nextProject.title}</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </SectionWrapper>
      </main>
    )
  }

  if (slug === "habitat-cosmic-oasis") {
    return (
      <main className="bg-[#f9f5ef]">
        {/* Hero Banner with Cover Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[70vh] lg:h-[80vh]">
          <Image src={project.cover || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        {/* Project Overview - Red Section with Cream Text */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="title-playfair text-4xl md:text-5xl lg:text-6xl text-brand-red">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 body text-lg">
              <span className="text-brand-red">Social Media</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">Merchandise</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">Music Festival</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.year}</span>
            </div>
            <div className="space-y-4 pt-4 border-t-2 border-brand-red/20">
              <h2 className="title-playfair text-2xl md:text-3xl text-brand-red">Overview</h2>
              <p className="body text-lg leading-relaxed max-w-3xl mx-auto text-brand-red bg-[#f9f5ef] p-6 rounded-lg">
                Developed a cohesive social media strategy and design system for a sustainability-focused brand.
                Designed content templates, photography direction, and tone-of-voice visuals that aligned with
                eco-conscious values and storytelling.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Merchandise Section - Cream */}
        <SectionWrapper variant="cream" pad="sm" className="py-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Merchandise</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Festival merchandise that captures the cosmic oasis vibe with bold designs and sustainable materials.
              </p>
            </div>
            <HabitatMerchandiseGrid
              items={[
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365198/Habitat_Poster_5x-8_u0s5t7.webp",
                  alt: "Habitat Festival Poster",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365199/Habitat_Wristband_1_5x-8_e8um5x.webp",
                  hoverImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365199/Habitat_Wristband_2_5x-8_lbvci0.webp",
                  alt: "Habitat Festival Wristband",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762369225/Front-Back-Man-T-shirt-Mockup_u2fbco.webp",
                  alt: "Habitat Festival T-Shirts",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365197/Habitat_Logo_1_5x-8_jayqof.webp",
                  hoverImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365198/Habitat_Logo_2_5x-8_kftfpt.webp",
                  alt: "Habitat Festival Logo Badge",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365198/Habitat_Hat_1_5x-8_qqhxjb.webp",
                  hoverImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365198/Habitat_Hat_2_5x-8_mykhfm.webp",
                  alt: "Habitat Festival Bucket Hat",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365199/Habitat_Towel_1_5x-8_dtf54s.webp",
                  hoverImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762365199/Habitat_Towel_2_5x-8_dncbtn.webp",
                  alt: "Habitat Festival Towel",
                },
              ]}
            />
          </div>
        </SectionWrapper>

        {/* Instagram Posts - Cream Section */}
        <SectionWrapper variant="cream" pad="sm" className="py-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Instagram Posts</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Social media content that builds excitement and community around the festival experience.
              </p>
            </div>
            <InstagramPostsCarousel
              images={[
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366290/WEEK_1_Giveaway_Post_o03x2p.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366291/WEEK_2_Headliner_Reveal_2_ogydni.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366291/WEEK_2_Supporting_1_1_u2lnxo.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366292/WEEK_3_Final_Line-Up_post_aq7obi.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366291/WEEK_1_Vibe-Mood_1_auantv.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366293/Week_5_Merchandise_1_a2fzl1.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366292/WEEK_3_Glamping_Post_fcbdzq.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366295/Week_6_Today_is_the_day_post_d1gwru.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366291/WEEK_2_Early_Bird_Ticket_Post_jgk2dz.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366294/Week_6_2_days_to_go_Hype_post_1_tqvuju.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762366293/Week_5_Phase_2_Post_wrpqfq.webp",
              ]}
            />
          </div>
        </SectionWrapper>

        {/* Social Media Videos - Cream Section */}
        <SectionWrapper variant="cream" pad="sm" className="py-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Social Media Videos</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Dynamic video content designed to capture attention and drive engagement across social platforms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <HabitatVideo
                src="https://res.cloudinary.com/dnlgohkcc/video/upload/v1762426130/1st_eh1cwy.mov"
                title="Habitat Video 1"
              />
              <HabitatVideo
                src="https://res.cloudinary.com/dnlgohkcc/video/upload/v1762426228/2nd_nw0vz8.mov"
                title="Habitat Video 2"
              />
              <HabitatVideo
                src="https://res.cloudinary.com/dnlgohkcc/video/upload/v1762426226/3rd_aiwhwf.mov"
                title="Habitat Video 3"
              />
            </div>
          </div>
        </SectionWrapper>

        {/* Credits - Red Section */}
        {project.credits && (
          <SectionWrapper variant="red" pad="sm">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="title-script text-3xl text-brand-red">Credits</h3>
              <ul className="space-y-2 body text-brand-red">
                {project.credits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        )}

        {/* Navigation - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            {prevProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">{prevProject.title}</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  <span className="hidden md:inline">{nextProject.title}</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </SectionWrapper>
      </main>
    )
  }

  if (slug === "jj-glassworks") {
    return (
      <main className="bg-[#f9f5ef]">
        {/* Hero Banner with Cover Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[70vh] lg:h-[80vh]">
          <Image
            src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762432544/Untitled_design_42_bvzrlj.png"
            alt={project.title}
            fill
            className="object-cover md:hidden"
            priority
          />
          {/* Desktop banner */}
          <Image
            src={project.cover || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>

        {/* Project Overview - Red Section with Cream Text */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="title-playfair text-4xl md:text-5xl lg:text-6xl text-brand-red">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 body text-lg">
              <span className="text-brand-red">{project.category}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">Glass Repair</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.year}</span>
            </div>
            <div className="space-y-4 pt-4 border-t-2 border-brand-red/20">
              <h2 className="title-playfair text-2xl md:text-3xl text-brand-red">Overview</h2>
              <p className="body text-lg leading-relaxed max-w-3xl mx-auto text-brand-red bg-[#f9f5ef] p-6 rounded-lg">
                Modernized an established glass manufacturing brand while maintaining its craftsmanship roots. The
                project emphasized a refined minimal identity system with timeless typography and color palette,
                supported by a versatile logo suite adaptable to signage and print.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Brand Work Grid - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Brand Work</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                A comprehensive brand system spanning marketing, merchandise, and team identity.
              </p>
            </div>
            <JJGlassworksGrid
              items={[
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762370963/JJ_Billboard_5x-8_usxtvv.webp",
                  alt: "JJ Glassworks Billboard",
                  label: "Marketing",
                  aspectRatio: "3/2",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762370964/JJ_Business_Cards_5x-8_u439z0.webp",
                  alt: "JJ Glassworks Business Cards",
                  label: "Branding",
                  aspectRatio: "1/1",
                },
                {
                  defaultImage: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762370965/JJ_Hat_5x-8_kmwfg7.webp",
                  alt: "JJ Glassworks Hat",
                  label: "Merchandise",
                  aspectRatio: "1/1",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762405755/Untitled_design_41_qhy2nl.webp",
                  alt: "JJ Glassworks Overall",
                  label: "Merchandise",
                  aspectRatio: "3/4",
                },
                {
                  defaultImage: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762370967/JJ_Pen_5x-8_hw2g2z.webp",
                  alt: "JJ Glassworks Pen",
                  label: "Merchandise",
                  aspectRatio: "21/9",
                },
                {
                  defaultImage:
                    "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762370968/JJ_Photo_5x-8_qcn49o.webp",
                  alt: "JJ Glassworks Team Photo",
                  label: "Team",
                  aspectRatio: "2/1",
                },
              ]}
            />
          </div>
        </SectionWrapper>

        {/* Credits - Red Section */}
        {project.credits && (
          <SectionWrapper variant="red" pad="sm">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="title-script text-3xl text-brand-red">Credits</h3>
              <ul className="space-y-2 body text-brand-red">
                {project.credits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        )}

        {/* Navigation - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            {prevProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">{prevProject.title}</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  <span className="hidden md:inline">{nextProject.title}</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </SectionWrapper>
      </main>
    )
  }

  if (slug === "social-anxiety") {
    return (
      <main className="bg-[#f9f5ef]">
        {/* Hero Banner with Cover Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[70vh] lg:h-[80vh]">
          <Image src={project.cover || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        {/* Project Overview - Red Section with Cream Text */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="title-playfair text-4xl md:text-5xl lg:text-6xl text-brand-red">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 body text-lg">
              <span className="text-brand-red">{project.category}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.year}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.role}</span>
            </div>
            <div className="space-y-4 pt-4 border-t-2 border-brand-red/20">
              <h2 className="title-playfair text-2xl md:text-3xl text-brand-red">Overview</h2>
              <p className="body text-lg leading-relaxed max-w-3xl mx-auto text-brand-red bg-[#f9f5ef] p-6 rounded-lg">
                Designed a thoughtful campaign addressing mental health awareness through editorial print materials and
                minimalist poster design. Focused on soft, human-centered visuals and typography that encouraged empathy
                and understanding.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Gallery - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Campaign Materials</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Print materials designed to foster empathy and understanding around mental health awareness.
              </p>
            </div>
            <MentalHealthGallery
              images={[
                {
                  src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371948/Bental_Health_Booklet_Cover_5x-8_nc1rks.webp",
                  alt: "Mental Health Booklet Cover",
                },
                {
                  src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371949/Mental_Health_Poster_5x-8_fwen7i.webp",
                  alt: "Mental Health Poster",
                },
                {
                  src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371949/Mental_Health_Booklet_5x-8_tp1dpu.webp",
                  alt: "Mental Health Booklet",
                },
                {
                  src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762415652/Mental_Health_Tip_Cards_5x-8_is3ada.png",
                  alt: "Mental Health Tip Cards",
                },
                {
                  src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371950/Mental_Health_Tip_Cards_Box_5x-8_ywzqtd.webp",
                  alt: "Mental Health Tip Cards Box",
                },
                {
                  src: "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762371949/Mental_Health_Poster_5x-8_fwen7i.webp",
                  alt: "Mental Health Campaign Material",
                },
              ]}
            />
          </div>
        </SectionWrapper>

        {/* Credits - Red Section */}
        {project.credits && (
          <SectionWrapper variant="red" pad="sm">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="title-script text-3xl text-brand-red">Credits</h3>
              <ul className="space-y-2 body text-brand-red">
                {project.credits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        )}

        {/* Navigation - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            {prevProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">{prevProject.title}</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  <span className="hidden md:inline">{nextProject.title}</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </SectionWrapper>
      </main>
    )
  }

  if (slug === "extra-chew-good") {
    return (
      <main className="bg-[#f9f5ef]">
        {/* Hero Banner with Cover Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[70vh] lg:h-[80vh]">
          <Image
            src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762432022/chew-good-mobile_raodry.png"
            alt={project.title}
            fill
            className="object-cover md:hidden"
            priority
          />
          {/* Desktop banner */}
          <Image
            src={project.cover || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>

        {/* Project Overview - Red Section with Cream Text */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="title-playfair text-4xl md:text-5xl lg:text-6xl text-brand-red">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 body text-lg">
              <span className="text-brand-red">{project.category}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.year}</span>
              <span className="text-brand-red">•</span>
              <span className="text-brand-red">{project.role}</span>
            </div>
            <div className="space-y-4 pt-4 border-t-2 border-brand-red/20">
              <h2 className="title-playfair text-2xl md:text-3xl text-brand-red">Overview</h2>
              <p className="body text-lg leading-relaxed max-w-3xl mx-auto text-brand-red bg-[#f9f5ef] p-6 rounded-lg">
                Created a Gen-Z focused extension of Orbit's Chew Good campaign, designing playful and colorful visuals
                that linked flavor profiles to moods. Produced poster series, social content, and limited-edition
                packaging that conveyed fun and self-expression.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Campaign Visuals - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Campaign Visuals</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Bold, colorful designs that connect flavor profiles to moods and self-expression.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374037/Chew_Good_Poster_5x-8_zmzzv6.webp"
                    alt="Chew Good Poster"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374035/Chew_Good_Insta_Profile_5x-8_fqhc6y.webp"
                    alt="Chew Good Instagram Profile"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Social Media - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Social Media</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Engaging social content designed to resonate with Gen-Z audiences and drive brand awareness.
              </p>
            </div>
            <InstagramPostsCarousel
              images={[
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374055/Insta_Mockup_9_gtcuhc.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374052/Insta_Mockup_8_gckdc4.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374051/Insta_Mockup_7_ewz56o.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374048/Insta_Mockup_6_dqrol9.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374046/Insta_Mockup_5_r4clpj.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374044/Insta_Mockup_4_rsgvgc.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374041/Insta_Mockup_2_zs3rl0.webp",
                "https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374039/Insta_Mockup_1_xsueqo.webp",
              ]}
            />
          </div>
        </SectionWrapper>

        {/* Packaging - Red Section */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
            <div className="text-center space-y-3">
              <h2 className="title-playfair text-3xl md:text-4xl text-brand-red">Packaging</h2>
              <p className="body text-brand-red max-w-2xl mx-auto leading-relaxed">
                Limited-edition packaging that brings the campaign's playful energy to life.
              </p>
            </div>

            {/* 3 images in 1 row - 1:1 ratio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374032/Chew_Good_Gum_60_pc_3_5x-8_sdem7s.webp"
                  alt="Chew Good Gum 60pc Package 1"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374028/Chew_Good_Gum_60_pc_1_5x-8_muboug.webp"
                  alt="Chew Good Gum 60pc Package 2"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374030/Chew_Good_Gum_60_pc_2_5x-8_hz13a4.webp"
                  alt="Chew Good Gum 60pc Package 3"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </div>

            {/* 1 big landscape image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374026/Chew_Good_Box_5x-8_lurrlh.webp"
                alt="Chew Good Box Display"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* 2 rows of 2 images - 1:1 ratio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374024/Chew_Good_Box_3_5x-8_bkugap.webp"
                  alt="Chew Good Box 3"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374023/Chew_Good_Box_2_5x-8_stshrc.webp"
                  alt="Chew Good Box 2"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374152/Chew_Good_Gum_Package_1_5x-8_dh1ure.webp"
                  alt="Chew Good Gum Package"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://res.cloudinary.com/dnlgohkcc/image/upload/v1762374022/Chew_Good_Box_1_5x-8_a7qpjw.webp"
                  alt="Chew Good Box 1"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Credits - Red Section */}
        {project.credits && (
          <SectionWrapper variant="red" pad="sm">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="title-script text-3xl text-brand-red">Credits</h3>
              <ul className="space-y-2 body text-brand-red">
                {project.credits.map((credit, index) => (
                  <li key={index}>{credit}</li>
                ))}
              </ul>
            </div>
          </SectionWrapper>
        )}

        {/* Navigation - Cream Section */}
        <SectionWrapper variant="cream" pad="sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            {prevProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">{prevProject.title}</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Button
                asChild
                size="lg"
                className="bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] border-2 border-brand-red rounded-lg transition-all px-4 py-2 md:px-6 md:py-3"
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  <span className="hidden md:inline">{nextProject.title}</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </SectionWrapper>
      </main>
    )
  }

  if (slug === "jimmys-burger-bar" || slug === "jj-glassworks" || slug === "social-anxiety") {
    return (
      <main className="bg-[#f9f5ef]">
        {/* Hero Banner with Cover Image */}
        <div className="relative aspect-square md:aspect-auto md:h-[70vh] lg:h-[80vh]">
          <Image src={project.cover || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        {/* Project Overview - Red Section with Cream Text */}
        <SectionWrapper variant="red" pad="sm">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="title-playfair text-4xl md:text-5xl lg:text-6xl text-[#f9f5ef]">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
              <Badge variant="outline" className="border-[#f9f5ef] text-[#f9f5ef]">
                {project.category}
              </Badge>
              <span className="text-[#f9f5ef]">•</span>
              <span className="text-[#f9f5ef]">{project.year}</span>
              <span className="text-[#f9f5ef]">•</span>
              <span className="text-[#f9f5ef]">{project.role}</span>
            </div>
            <p className="body text-lg leading-relaxed max-w-3xl mx-auto text-[#f9f5ef]">{project.description}</p>
          </div>
        </SectionWrapper>

        {/* Credits - Cream Section */}
        <SectionWrapper
          variant={slug === "jimmys-burger-bar" ? "cream" : "red"}
          pad="sm"
          className={slug === "jimmys-burger-bar" ? "" : "text-[#f9f5ef]"}
        >
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3
              className={`title-script text-3xl ${slug === "jimmys-burger-bar" ? "text-brand-red" : "text-[#f9f5ef]"}`}
            >
              Credits
            </h3>
            <ul className="space-y-2 body">
              {project.credits.map((credit, index) => (
                <li key={index}>{credit}</li>
              ))}
            </ul>
          </div>
        </SectionWrapper>

        {/* Navigation - Red Section or Cream Section */}
        <SectionWrapper variant={slug === "jimmys-burger-bar" ? "red" : "cream"} pad="sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
            {prevProject ? (
              <Button
                asChild
                size="lg"
                className={`bg-transparent hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-2 border-[#f9f5ef] rounded-lg transition-all px-4 py-2 md:px-6 md:py-3 ${
                  slug === "jimmys-burger-bar"
                    ? "hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-[#f9f5ef]"
                    : ""
                }`}
              >
                <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden md:inline">{prevProject.title}</span>
                  <span className="md:hidden">Previous</span>
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Button
                asChild
                size="lg"
                className={`bg-transparent hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-2 border-[#f9f5ef] rounded-lg transition-all px-4 py-2 md:px-6 md:py-3 ${
                  slug === "jimmys-burger-bar"
                    ? "hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red border-[#f9f5ef]"
                    : ""
                }`}
              >
                <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                  <span className="hidden md:inline">{nextProject.title}</span>
                  <span className="md:hidden">Next</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </SectionWrapper>
      </main>
    )
  }

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-brand-deep-orange">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-4xl">
            <h1 className="font-script text-5xl md:text-7xl text-balance">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
              <span>{project.role}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <Badge variant="outline" className="border-white text-white">
                {project.category}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <SectionWrapper variant="cream" pad="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-script text-2xl text-brand-deep-orange mb-3">Problem</h3>
              <p className="text-muted leading-relaxed">{project.overview.problem}</p>
            </div>
            <div>
              <h3 className="font-script text-2xl text-brand-deep-orange mb-3">Approach</h3>
              <p className="text-muted leading-relaxed">{project.overview.approach}</p>
            </div>
            <div>
              <h3 className="font-script text-2xl text-brand-deep-orange mb-3">Outcome</h3>
              <p className="text-muted leading-relaxed">{project.overview.outcome}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery */}
      <SectionWrapper variant="cream" pad="lg" className="pt-0">
        <div className="max-w-6xl mx-auto space-y-8">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className={index % 3 === 0 ? "w-full" : index % 3 === 1 ? "grid md:grid-cols-2 gap-8" : ""}
            >
              {index % 3 === 1 && index + 1 < project.gallery.length ? (
                <>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.gallery[index + 1] || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </>
              ) : index % 3 === 0 ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Credits */}
      {project.credits && (
        <SectionWrapper variant="orange" pad="md">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-script text-3xl mb-6 text-center">Credits</h3>
            <ul className="space-y-2 text-center">
              {project.credits.map((credit, index) => (
                <li key={index} className="text-bg-cream/90">
                  {credit}
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      {/* Next/Prev Navigation */}
      <div className="sticky bottom-0 bg-ink text-white py-4 border-t border-muted">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {prevProject ? (
            <Button asChild variant="ghost" className="text-white hover:text-brand-deep-orange hover:bg-white/10">
              <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden md:inline">{prevProject.title}</span>
                <span className="md:hidden">Previous</span>
              </Link>
            </Button>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Button asChild variant="ghost" className="text-white hover:text-brand-deep-orange hover:bg-white/10">
              <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                <span className="hidden md:inline">{nextProject.title}</span>
                <span className="md:hidden">Next</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  )
}

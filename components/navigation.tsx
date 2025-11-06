"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 border-b border-[#f9f5ef]/20 transition-all duration-300",
          isScrolled ? "bg-brand-red/80 backdrop-blur-md" : "bg-brand-red/95 backdrop-blur-sm",
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="title-script text-xl sm:text-2xl md:text-3xl text-[#f9f5ef] hover:scale-105 transition-transform"
          >
            Ameli van Zyl
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 sm:gap-6 md:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs sm:text-sm md:text-base font-medium transition-all hover:scale-110 inline-block",
                    pathname === link.href
                      ? "text-[#f9f5ef] underline underline-offset-4 decoration-2"
                      : "text-[#f9f5ef] hover:underline hover:underline-offset-4 hover:decoration-2",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#f9f5ef] hover:scale-110 transition-transform z-[60] relative"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={cn(
                  "absolute left-0 w-6 h-0.5 bg-[#f9f5ef] transition-all duration-300 ease-in-out",
                  isMobileMenuOpen ? "top-3 rotate-45" : "top-1 rotate-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 w-6 h-0.5 bg-[#f9f5ef] transition-all duration-300 ease-in-out",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 w-6 h-0.5 bg-[#f9f5ef] transition-all duration-300 ease-in-out",
                  isMobileMenuOpen ? "top-3 -rotate-45" : "top-5 rotate-0",
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 md:hidden z-50 bg-brand-red flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-[#f9f5ef] hover:scale-110 transition-transform z-[60]"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute left-0 top-3 w-6 h-0.5 bg-[#f9f5ef] rotate-45" />
              <span className="absolute left-0 top-3 w-6 h-0.5 bg-[#f9f5ef] -rotate-45" />
            </div>
          </button>

          {/* Menu items - vertically and horizontally centered */}
          <ul className="flex flex-col items-center justify-center gap-8 w-full px-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "title-playfair text-5xl sm:text-6xl font-normal text-[#f9f5ef] transition-opacity hover:opacity-80",
                    pathname === link.href && "opacity-80",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

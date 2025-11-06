import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-red relative">
      <div className="h-1 bg-[#f9f5ef]" />

      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 text-center sm:text-left">
          {/* Contact */}
          <div>
            <h3 className="title-playfair text-xl text-[#f9f5ef] mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 text-sm sm:text-base text-[#f9f5ef]/80">
              <p className="font-medium text-[#f9f5ef]">Ameli van Zyl</p>
              <p>
                <a href="mailto:ami1vanzyl@gmail.com" className="hover:text-[#f9f5ef] hover:underline transition-all">
                  ami1vanzyl@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+27727431971" className="hover:text-[#f9f5ef] hover:underline transition-all">
                  072 743 1971
                </a>
              </p>
              <p>South Africa</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="title-playfair text-xl text-[#f9f5ef] mb-3 sm:mb-4">Links</h3>
            <ul className="space-y-2 text-sm sm:text-base text-[#f9f5ef]/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#f9f5ef] hover:underline transition-all inline-block hover:translate-x-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#f9f5ef] hover:underline transition-all inline-block hover:translate-x-1"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#f9f5ef] hover:underline transition-all inline-block hover:translate-x-1"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#f9f5ef] hover:underline transition-all inline-block hover:translate-x-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="title-playfair text-xl text-[#f9f5ef] mb-3 sm:mb-4">Social</h3>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://www.linkedin.com/in/ameli-van-zyl-34b506261/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#f9f5ef] bg-transparent hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/ameli.graphics/profilecard/?igsh=MTY0a3pjdGh0OGx5OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#f9f5ef] bg-transparent hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.behance.net/amelivanzyl2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#f9f5ef] bg-transparent hover:bg-[#f9f5ef] text-[#f9f5ef] hover:text-brand-red flex items-center justify-center transition-all hover:scale-110"
                aria-label="Behance"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#f9f5ef]/20 pt-8 text-center">
          <p className="text-base sm:text-lg md:text-xl text-[#f9f5ef] font-medium">
            © 2025 Ameli van Zyl — Graphic Designer
          </p>
        </div>
      </div>
    </footer>
  )
}

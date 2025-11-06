import type React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  variant?: "cream" | "orange"
  pad?: "sm" | "md" | "lg"
  className?: string
}

export default function SectionWrapper({ children, variant = "cream", pad = "lg", className }: SectionWrapperProps) {
  const paddingClasses = {
    sm: "py-12",
    md: "py-20",
    lg: "py-32",
  }

  return (
    <section
      className={cn(
        paddingClasses[pad],
        variant === "cream" ? "bg-bg-cream text-ink" : "bg-brand-deep-orange text-bg-cream",
        className,
      )}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}

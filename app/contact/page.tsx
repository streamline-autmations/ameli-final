"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({})
  const [showThankYou, setShowThankYou] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    if (!phone) return true // Optional field
    const phoneRegex = /^[\d\s\-+()]+$/
    const digitsOnly = phone.replace(/\D/g, "")
    return phoneRegex.test(phone) && digitsOnly.length >= 10
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    // Validate
    const newErrors: { email?: string; phone?: string } = {}
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)"
    }
    if (phone && !validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits)"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setFormState("submitting")

    try {
      const response = await fetch("https://dockerfile-1n82.onrender.com/webhook/ameli-messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          preferredContact: formData.get("preferredContact"),
        }),
      })

      if (response.ok) {
        setFormState("success")
        setShowThankYou(true)
        e.currentTarget.reset()
        setTimeout(() => {
          setShowThankYou(false)
          setFormState("idle")
        }, 3000)
      } else {
        setFormState("error")
        setTimeout(() => setFormState("idle"), 3000)
      }
    } catch (error) {
      setFormState("error")
      setTimeout(() => setFormState("idle"), 3000)
    }
  }

  return (
    <main>
      <section className="section--cream py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="title-playfair text-4xl md:text-6xl lg:text-7xl text-brand-red mb-3 lg:mb-4 text-balance">
              Let's work together
            </h1>
            <p className="text-lg lg:text-xl text-brand-red/80 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Fill out the form below or reach out directly via email
              or social media.
            </p>
          </div>
        </div>
      </section>

      <section className="section--cream pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-brand-red">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="border-brand-red/30 focus:border-brand-red bg-transparent text-brand-red placeholder:text-brand-red/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-brand-red">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="border-brand-red/30 focus:border-brand-red bg-transparent text-brand-red placeholder:text-brand-red/50"
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-brand-red">
                      Phone Number <span className="text-brand-red/50">(Optional)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+27 72 743 1971"
                      className="border-brand-red/30 focus:border-brand-red bg-transparent text-brand-red placeholder:text-brand-red/50"
                    />
                    {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-brand-red">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-brand-red/30 focus:border-brand-red resize-none bg-transparent text-brand-red placeholder:text-brand-red/50"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-brand-red">Preferred Contact Method</Label>
                    <RadioGroup name="preferredContact" defaultValue="email" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp" className="border-brand-red text-brand-red" />
                        <Label htmlFor="whatsapp" className="text-brand-red text-sm cursor-pointer font-normal">
                          WhatsApp
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" className="border-brand-red text-brand-red" />
                        <Label htmlFor="email-contact" className="text-brand-red text-sm cursor-pointer font-normal">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-contact" className="border-brand-red text-brand-red" />
                        <Label htmlFor="phone-contact" className="text-brand-red text-sm cursor-pointer font-normal">
                          Phone
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === "submitting"}
                    className="w-full bg-brand-red hover:bg-transparent text-[#f9f5ef] hover:text-brand-red border-2 border-brand-red transition-all"
                  >
                    {formState === "idle" && "Send Message"}
                    {formState === "submitting" && "Sending..."}
                    {formState === "success" && "✓ Message Sent!"}
                    {formState === "error" && "✗ Error - Try Again"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h3 className="title-script text-2xl lg:text-3xl text-brand-red mb-4 lg:mb-6">Get in touch</h3>
                  <p className="text-brand-red/80 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    vision. Whether you need a complete brand identity or help with a specific design challenge, let's
                    talk.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:ami1vanzyl@gmail.com"
                    className="flex items-center gap-3 text-brand-red hover:opacity-80 transition-opacity group"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-red/10 rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-brand-red group-hover:text-[#f9f5ef] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm text-brand-red/70">Email</p>
                      <p className="font-medium text-sm lg:text-base">ami1vanzyl@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+27727431971"
                    className="flex items-center gap-3 text-brand-red hover:opacity-80 transition-opacity group"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-red/10 rounded-full flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-brand-red group-hover:text-[#f9f5ef] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm text-brand-red/70">Phone</p>
                      <p className="font-medium text-sm lg:text-base">072 743 1971</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 text-brand-red">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-brand-red" />
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm text-brand-red/70">Location</p>
                      <p className="font-medium text-sm lg:text-base">South Africa</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 lg:pt-8 border-t border-brand-red/20">
                  <h4 className="title-script text-xl lg:text-2xl text-brand-red mb-3 lg:mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/ameli-van-zyl-34b506261/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-brand-red bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] flex items-center justify-center transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/ameli.graphics/profilecard/?igsh=MTY0a3pjdGh0OGx5OQ%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-brand-red bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] flex items-center justify-center transition-all hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.behance.net/amelivanzyl2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border-2 border-brand-red bg-transparent hover:bg-brand-red text-brand-red hover:text-[#f9f5ef] flex items-center justify-center transition-all hover:scale-110"
                      aria-label="Behance"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="pt-6 lg:pt-8 border-t border-brand-red/20">
                  <h4 className="title-script text-xl lg:text-2xl text-brand-red mb-3 lg:mb-4">Response Time</h4>
                  <p className="text-brand-red/80 leading-relaxed text-sm lg:text-base">
                    I typically respond to inquiries within 24-48 hours. For urgent projects, please mention that in
                    your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-[#f9f5ef] rounded-2xl p-8 max-w-md mx-4 shadow-2xl border-2 border-brand-red">
            <h3 className="title-playfair text-3xl text-brand-red mb-4 text-center">Thank You!</h3>
            <p className="body text-brand-red/80 text-center">
              I've received your message and will get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </main>
  )
}

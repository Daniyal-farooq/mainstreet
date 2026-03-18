"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-wider">
              MAIN STREET
            </span>
            <span className="text-xs md:text-sm text-primary tracking-[0.3em] -mt-1">
              CAFE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-6"
            >
              <a
                href="https://wa.me/923009669433"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-secondary border-t border-secondary transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:text-primary transition-colors py-2 text-sm uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none w-full mt-2"
          >
            <a
              href="https://wa.me/923009669433"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Order via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

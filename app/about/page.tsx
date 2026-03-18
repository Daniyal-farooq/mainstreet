import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { AnimatedPageHero } from "@/components/animated-about-hero"
import { AnimatedAboutStory } from "@/components/animated-about-story"
import { AnimatedAboutStats } from "@/components/animated-about-stats"
import { AnimatedValueCard } from "@/components/animated-value-card"
import { AnimatedAboutChef } from "@/components/animated-about-chef"
import { AnimatedCTA } from "@/components/animated-cta"

export const metadata: Metadata = {
  title: "About Us - Main Street Cafe | Faisalabad",
  description: "Learn about Main Street Cafe's story, our passion for quality food, and our commitment to delivering exceptional dining experiences in Faisalabad.",
}

const stats = [
  { value: "5+", label: "Years of Excellence" },
  { value: "50+", label: "Menu Items" },
  { value: "10K+", label: "Happy Customers" },
  { value: "100%", label: "Quality Commitment" },
]

const values = [
  {
    iconName: "Award",
    title: "Quality First",
    description: "We source only the finest ingredients to ensure every dish meets our high standards.",
  },
  {
    iconName: "Heart",
    title: "Passion for Food",
    description: "Every recipe is crafted with love and dedication by our experienced culinary team.",
  },
  {
    iconName: "Users",
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    iconName: "Coffee",
    title: "Warm Hospitality",
    description: "Experience genuine Pakistani hospitality in a modern, comfortable setting.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery1.jpg"
            alt="Main Street Cafe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="relative z-10">
          <AnimatedPageHero
            subtitle="Our Story"
            title="About Us"
            description="Discover the passion and dedication behind Main Street Cafe"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedAboutStory />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedAboutStats stats={stats} />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <AnimatedValueCard
                key={value.title}
                value={value}
                index={values.indexOf(value)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team/Chef Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedAboutChef />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/steak.jpg"
            alt="Visit Main Street Cafe"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Join Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience Main Street Cafe
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            We invite you to visit us and discover why Main Street Cafe has become
            a beloved destination in Faisalabad. Come chase the flavour with us!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923009669433"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-semibold transition-colors"
            >
              Make a Reservation
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary px-8 py-4 font-semibold transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

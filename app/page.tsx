import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedCategoryCard } from "@/components/animated-category-card"
import { AnimatedFeatureCard } from "@/components/animated-feature-card"
import { AnimatedAbout } from "@/components/animated-about"
import { AnimatedCTA } from "@/components/animated-cta"

const featuredCategories = [
  { name: "Desserts", image: "/images/dessert.jpg", href: "/menu#desserts" },
  { name: "Steaks", image: "/images/steak.jpg", href: "/menu#steaks" },
  { name: "Pizza", image: "/images/pizza.jpg", href: "/menu#pizza" },
  { name: "Burgers", image: "/images/burger.jpg", href: "/menu#burgers" },
]

const features = [
  {
    iconName: "Utensils",
    title: "Premium Quality",
    description: "Finest ingredients sourced fresh daily for exceptional taste",
  },
  {
    iconName: "Clock",
    title: "Quick Service",
    description: "Fast and efficient service without compromising quality",
  },
  {
    iconName: "Star",
    title: "5-Star Experience",
    description: "Luxurious ambiance with world-class hospitality",
  },
  {
    iconName: "MapPin",
    title: "Prime Location",
    description: "Conveniently located in the heart of Faisalabad",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mt.jpg"
            alt="Main Street Cafe ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/40" />
        </div>

        <div className="relative z-10">
          <AnimatedHero />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
              Our Specialties
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Categories
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <AnimatedCategoryCard
                key={category.name}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedAbout />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Main Street Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedFeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/icecream.jpg"
            alt="Delicious ice cream"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="relative z-10">
          <AnimatedCTA />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

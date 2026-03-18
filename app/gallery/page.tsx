"use client"

import Image from "next/image"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/hero.jpg",
    alt: "Main Street Cafe Interior",
    category: "ambiance",
  },
  {
    src: "/images/dessert.jpg",
    alt: "Signature Dessert",
    category: "desserts",
  },
  {
    src: "/images/steak.jpg",
    alt: "Premium Steak",
    category: "mains",
  },
  {
    src: "/images/pizza.jpg",
    alt: "Artisan Pizza",
    category: "mains",
  },
  {
    src: "/images/burger.jpg",
    alt: "Gourmet Burger",
    category: "mains",
  },
  {
    src: "/images/icecream.jpg",
    alt: "Ice Cream Selection",
    category: "desserts",
  },
  {
    src: "/images/gallery1.jpg",
    alt: "Cafe Interior",
    category: "ambiance",
  },
  {
    src: "/images/gallery2.jpg",
    alt: "Fresh Fish",
    category: "mains",
  },
  {
    src: "/images/gallery3.jpg",
    alt: "BBQ Platter",
    category: "mains",
  },
  {
    src: "/images/gallery4.jpg",
    alt: "Cold Coffee",
    category: "beverages",
  },
  {
    src: "/images/gallery5.jpg",
    alt: "Gourmet Sandwich",
    category: "mains",
  },
  {
    src: "/images/gallery6.jpg",
    alt: "Fresh Salad",
    category: "mains",
  },
]

const categories = ["all", "desserts", "mains", "beverages", "ambiance"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery1.jpg"
            alt="Gallery showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Visual Journey
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the flavors and ambiance of Main Street Cafe
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Experience It Yourself
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Pictures can only tell part of the story. Come experience the flavors, 
            aromas, and ambiance of Main Street Cafe in person.
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
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary px-8 py-4 font-semibold transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

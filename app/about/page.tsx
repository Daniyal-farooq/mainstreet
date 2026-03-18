import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Award, Users, Heart, Coffee, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

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
    icon: Award,
    title: "Quality First",
    description: "We source only the finest ingredients to ensure every dish meets our high standards.",
  },
  {
    icon: Heart,
    title: "Passion for Food",
    description: "Every recipe is crafted with love and dedication by our experienced culinary team.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Coffee,
    title: "Warm Hospitality",
    description: "Experience genuine Pakistani hospitality in a modern, comfortable setting.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
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
        
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Our Story
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the passion and dedication behind Main Street Cafe
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
                Since 2019
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Chase the Flavour
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Main Street Cafe was born from a simple vision: to create a place where 
                exceptional food meets warm hospitality. Located in the heart of Faisalabad, 
                we have been serving our community with passion and dedication since 2019.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our journey began with a love for desserts - our signature Molten Lava Cake 
                and Chocolate Volcano quickly became local favorites. As our reputation grew, 
                so did our menu. Today, we proudly offer a diverse selection that spans from 
                premium steaks and artisan pizzas to refreshing beverages and healthy salads.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                What sets us apart is not just the food we serve, but the experience we create. 
                Every dish is prepared with care, every guest is treated like family, and every 
                visit is an opportunity to chase new flavours.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-semibold transition-colors"
              >
                Explore Our Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/hero.jpg"
                  alt="Main Street Cafe dining experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary p-6 flex flex-col justify-center items-center">
                <span className="text-5xl font-bold text-primary-foreground">5+</span>
                <span className="text-primary-foreground text-sm text-center">Years Serving Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
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
              <div
                key={value.title}
                className="bg-card p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Chef Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/images/dessert.jpg"
                alt="Our culinary creations"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
                Our Commitment
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Crafted with Care
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Behind every dish at Main Street Cafe is a team of passionate culinary 
                professionals. Our chefs bring years of experience and a deep love for 
                food to create dishes that delight and inspire.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our signature desserts that have made us famous to our perfectly 
                grilled steaks and fresh salads, every item on our menu is prepared 
                with meticulous attention to detail and a commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that great food brings people together. Whether you are 
                celebrating a special occasion, enjoying a casual meal with friends, 
                or simply treating yourself, Main Street Cafe is here to make every 
                moment memorable.
              </p>
            </div>
          </div>
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

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, Star, Clock, MapPin, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredCategories = [
  { name: "Desserts", image: "/images/dessert.jpg", href: "/menu#desserts" },
  { name: "Steaks", image: "/images/steak.jpg", href: "/menu#steaks" },
  { name: "Pizza", image: "/images/pizza.jpg", href: "/menu#pizza" },
  { name: "Burgers", image: "/images/burger.jpg", href: "/menu#burgers" },
]

const features = [
  {
    icon: Utensils,
    title: "Premium Quality",
    description: "Finest ingredients sourced fresh daily for exceptional taste",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Fast and efficient service without compromising quality",
  },
  {
    icon: Star,
    title: "5-Star Experience",
    description: "Luxurious ambiance with world-class hospitality",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Conveniently located in the heart of Faisalabad",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Main Street Cafe ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <p className="text-primary text-sm md:text-base uppercase tracking-[0.3em] mb-4">
              Welcome to
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-2 tracking-wider">
              MAIN STREET
            </h1>
            <p className="text-xl md:text-2xl text-primary tracking-[0.4em] mb-6">
              CAFE
            </p>
            <div className="inline-block border border-primary px-6 py-2 mb-8">
              <span className="text-primary-foreground text-lg md:text-xl tracking-wider">
                CHASE THE FLAVOUR
              </span>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience exquisite desserts, premium steaks, and a diverse culinary journey 
              in the heart of Faisalabad
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-base"
              >
                <Link href="/menu">
                  Explore Menu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary rounded-none px-8 py-6 text-base"
              >
                <a
                  href="https://wa.me/923009669433"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </div>
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
              <Link
                key={category.name}
                href={category.href}
                className="group relative h-80 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                      {category.name}
                    </h3>
                    <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                      View Menu
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src="/images/gallery1.jpg"
                  alt="Main Street Cafe interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary p-6 flex flex-col justify-center items-center">
                <span className="text-5xl font-bold text-primary-foreground">5+</span>
                <span className="text-primary-foreground text-sm text-center">Years of Excellence</span>
              </div>
            </div>
            
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                A Culinary Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Main Street Cafe brings together the finest flavors from around the world, 
                serving premium desserts, succulent steaks, artisan pizzas, and much more. 
                Our passion for quality and dedication to excellence has made us a beloved 
                destination in Faisalabad.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From our signature Molten Lava Cake to perfectly grilled steaks, every dish 
                is crafted with love and served with warmth. Experience dining that goes 
                beyond food - it is a journey of flavors.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
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
              <div
                key={feature.title}
                className="text-center p-8 border border-border hover:border-primary transition-colors duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
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
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Ready to Order?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Craving Something Delicious?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Order your favorite dishes directly via WhatsApp for quick and easy service. 
            We deliver right to your doorstep!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-base"
            >
              <a
                href="https://wa.me/923009669433"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary rounded-none px-8 py-6 text-base"
            >
              <Link href="/contact">
                Visit Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

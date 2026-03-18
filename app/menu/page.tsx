import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"
import { AnimatedMenuHero } from "@/components/animated-menu-hero"
import { AnimatedMenuCategory, AnimatedMenuItem } from "@/components/animated-menu-category"

export const metadata: Metadata = {
  title: "Menu - Main Street Cafe | Faisalabad",
  description: "Explore our diverse menu featuring desserts, ice cream, steaks, pizza, fish, sandwiches, burgers, barbeque, salads, and beverages at Main Street Cafe.",
}

const menuCategories = [
  {
    id: "desserts",
    name: "Desserts",
    subtitle: "Sugar Affairs",
    items: [
      { name: "Main Street Special Sizzler Brownie", price: "595", variant: "With Ice Cream" },
      { name: "Main Street Special Sizzler Brownie", price: "399", variant: "Without Ice Cream" },
      { name: "Molten Lava Cake", price: "850", variant: "With Ice Cream" },
      { name: "Molten Lava Cake", price: "690", variant: "Without Ice Cream" },
      { name: "Cadbury Lava Cake", price: "1200", variant: "Signature Dessert" },
      { name: "Chocolate Volcano", price: "1120", variant: "Signature Dessert" },
      { name: "Tower Hit Me Cake", price: "1250", variant: "Signature Dessert - Belgium Chocolate & Peanut Crunch" },
      { name: "Lotus Pull Me", price: "1090", variant: "Signature Dessert" },
    ],
  },
  {
    id: "icecream",
    name: "Ice Cream",
    subtitle: "Per Scoop",
    items: [
      { name: "Chocolate Ice Cream", price: "160", variant: "Per Scoop" },
      { name: "Vanilla Ice Cream", price: "160", variant: "Per Scoop" },
      { name: "Strawberry Ice Cream", price: "160", variant: "Per Scoop" },
      { name: "Mango Ice Cream", price: "160", variant: "Per Scoop" },
      { name: "Cookie Dough Ice Cream", price: "180", variant: "Per Scoop" },
      { name: "Salted Caramel Ice Cream", price: "180", variant: "Per Scoop" },
    ],
  },
  {
    id: "coldcoffee",
    name: "Cold Coffee",
    subtitle: "Refreshing Beverages",
    items: [
      { name: "Cold Coffee", price: "450", variant: "Chocolate / Vanilla / Hazelnut / Caramel" },
      { name: "Latte Caramel Custard", price: "450", variant: "" },
      { name: "Vanilla Frap", price: "450", variant: "" },
      { name: "Ice Latte Caramel", price: "450", variant: "" },
      { name: "Mocha Frappe", price: "490", variant: "" },
      { name: "Oreo Shake", price: "420", variant: "" },
    ],
  },
  {
    id: "hotcoffee",
    name: "Hot Coffee & Tea",
    subtitle: "Warm Beverages",
    items: [
      { name: "Espresso", price: "250", variant: "" },
      { name: "Black Coffee", price: "290", variant: "" },
      { name: "Cafe Latte", price: "490", variant: "" },
      { name: "Cappuccino Flavor", price: "495", variant: "Chocolate / Cinnamon / Vanilla" },
      { name: "Cappuccino", price: "450", variant: "" },
      { name: "Cafe Mocha", price: "450", variant: "White Chocolate / Caramel" },
      { name: "Hot Chocolate", price: "400", variant: "" },
      { name: "Tea", price: "240", variant: "" },
      { name: "Cardamom Tea", price: "250", variant: "" },
      { name: "Green Tea", price: "150", variant: "" },
    ],
  },
  {
    id: "steaks",
    name: "Steaks",
    subtitle: "Premium Cuts",
    items: [
      { name: "Chicken Steak", price: "890", variant: "With Mushroom Sauce" },
      { name: "Beef Steak", price: "1290", variant: "Premium Cut with Pepper Sauce" },
      { name: "Tenderloin Steak", price: "1590", variant: "Chef Special" },
      { name: "BBQ Chicken Steak", price: "950", variant: "With BBQ Glaze" },
      { name: "Sizzling Steak Platter", price: "1450", variant: "Served on Hot Plate" },
    ],
  },
  {
    id: "pizza",
    name: "Pizza",
    subtitle: "Wood-Fired Favorites",
    items: [
      { name: "Margherita Pizza", price: "790", variant: "Classic Cheese" },
      { name: "Pepperoni Pizza", price: "950", variant: "With Premium Pepperoni" },
      { name: "BBQ Chicken Pizza", price: "990", variant: "BBQ Sauce Base" },
      { name: "Veggie Supreme", price: "890", variant: "Loaded Vegetables" },
      { name: "Meat Lovers", price: "1150", variant: "Triple Meat Combo" },
      { name: "Four Cheese Pizza", price: "1050", variant: "Quattro Formaggi" },
    ],
  },
  {
    id: "fish",
    name: "Fish",
    subtitle: "Fresh Catches",
    items: [
      { name: "Fish & Chips", price: "890", variant: "Classic British Style" },
      { name: "Grilled Fish Fillet", price: "1190", variant: "With Lemon Butter Sauce" },
      { name: "Fish Tikka", price: "950", variant: "Spiced & Grilled" },
      { name: "Crispy Fried Fish", price: "790", variant: "Golden Crispy" },
    ],
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    subtitle: "Handcrafted",
    items: [
      { name: "Club Sandwich", price: "650", variant: "Triple Decker" },
      { name: "Chicken Tikka Sandwich", price: "590", variant: "Spicy Grilled Chicken" },
      { name: "Beef Steak Sandwich", price: "790", variant: "Premium Beef" },
      { name: "Veggie Delight", price: "450", variant: "Fresh Garden Vegetables" },
      { name: "Grilled Cheese Sandwich", price: "390", variant: "Classic Comfort" },
    ],
  },
  {
    id: "burgers",
    name: "Burgers",
    subtitle: "Gourmet Selection",
    items: [
      { name: "Classic Beef Burger", price: "690", variant: "100% Beef Patty" },
      { name: "Zinger Burger", price: "590", variant: "Crispy Chicken" },
      { name: "Double Trouble", price: "950", variant: "Double Patty" },
      { name: "Cheese Burger", price: "750", variant: "Extra Cheese" },
      { name: "Mushroom Swiss Burger", price: "850", variant: "Sauteed Mushrooms" },
      { name: "BBQ Bacon Burger", price: "890", variant: "Smoky BBQ Flavor" },
    ],
  },
  {
    id: "barbeque",
    name: "Barbeque",
    subtitle: "Smoky Flavors",
    items: [
      { name: "BBQ Chicken Wings", price: "690", variant: "8 Pieces" },
      { name: "Seekh Kebab", price: "550", variant: "4 Pieces" },
      { name: "Chicken Tikka", price: "750", variant: "Half Plate" },
      { name: "Mixed Grill Platter", price: "1890", variant: "Chef's Selection" },
      { name: "BBQ Ribs", price: "1290", variant: "Slow Cooked" },
      { name: "Malai Boti", price: "850", variant: "Creamy & Tender" },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    subtitle: "Fresh & Healthy",
    items: [
      { name: "Caesar Salad", price: "590", variant: "With Grilled Chicken" },
      { name: "Greek Salad", price: "490", variant: "Feta & Olives" },
      { name: "Garden Fresh Salad", price: "390", variant: "Seasonal Vegetables" },
      { name: "Chicken Tikka Salad", price: "650", variant: "Spiced Chicken" },
      { name: "Pasta Salad", price: "550", variant: "Mediterranean Style" },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    subtitle: "Refreshments",
    items: [
      { name: "Fresh Lime Soda", price: "190", variant: "Sweet / Salty" },
      { name: "Mint Margarita", price: "250", variant: "Refreshing Mint" },
      { name: "Mango Lassi", price: "290", variant: "Creamy Mango" },
      { name: "Fresh Juice", price: "320", variant: "Orange / Apple / Mixed" },
      { name: "Soft Drinks", price: "120", variant: "Assorted" },
      { name: "Mineral Water", price: "80", variant: "500ml" },
    ],
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/dessert.jpg"
            alt="Our delicious menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="relative z-10">
          <AnimatedMenuHero />
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-20 z-40 bg-background border-b border-border py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 min-w-max">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category) => (
            <AnimatedMenuCategory
              key={category.id}
              id={category.id}
              name={category.name}
              subtitle={category.subtitle}
            >
              {category.items.map((item, itemIndex) => (
                <AnimatedMenuItem key={`${category.id}-${itemIndex}`}>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    {item.variant && (
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.variant}
                      </p>
                    )}
                  </div>
                  <div className="ml-4 text-right">
                    <span className="text-2xl font-bold text-primary">
                      {item.price}
                    </span>
                    <span className="text-primary text-sm">/-</span>
                  </div>
                </AnimatedMenuItem>
              ))}
            </AnimatedMenuCategory>
          ))}
        </div>
      </section>

      {/* Original Menu Reference */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Original Menu
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            View Our Original Menu
          </h2>
          <div className="relative bg-card rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-04ZpITitL4jjJGIiaXaXznt7zseU3b.png"
              alt="Main Street Cafe Original Menu"
              width={800}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Contact us directly via WhatsApp for quick and easy ordering
          </p>
          <a
            href="https://wa.me/923009669433?text=Hi! I would like to place an order from Main Street Cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 font-semibold transition-colors"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

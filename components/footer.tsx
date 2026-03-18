import Link from "next/link"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary-foreground tracking-wider">
                MAIN STREET
              </h3>
              <p className="text-xs text-primary tracking-[0.3em]">CAFE</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Chase the Flavour - Experience the finest desserts, premium steaks, 
              and a diverse culinary journey at Main Street Cafe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  C478+FCF, Owais Rd, Kohinoor City, Madina Town, Faisalabad, 38000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+923009669433"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  0300 9669433
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Daily: 12:00 PM - 12:00 AM
                </span>
              </li>
            </ul>
          </div>

          {/* Social & WhatsApp */}
          <div>
            <h4 className="text-primary font-semibold mb-4 uppercase tracking-wider text-sm">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
            <a
              href="https://wa.me/923009669433"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Main Street Cafe. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Chase the Flavour
          </p>
        </div>
      </div>
    </footer>
  )
}

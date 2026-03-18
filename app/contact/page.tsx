"use client"

import Image from "next/image"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MapPin, Phone, Clock, Mail, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery1.jpg"
            alt="Contact Main Street Cafe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We would love to hear from you. Reach out for reservations, inquiries, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
                Visit Us
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Find Us Here
              </h2>

              <div className="flex flex-col gap-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      C478+FCF, Owais Rd, Kohinoor City<br />
                      Madina Town, Faisalabad, 38000<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+923009669433"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      0300 9669433
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@mainstreetcafe.pk"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@mainstreetcafe.pk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday<br />
                      12:00 PM - 12:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-secondary p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  Quick Order via WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Skip the wait! Order directly through WhatsApp for faster service.
                </p>
                <a
                  href="https://wa.me/923009669433?text=Hi! I would like to place an order from Main Street Cafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
                Send a Message
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500 text-green-700">
                  Thank you for your message! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="0300 1234567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation</option>
                      <option value="inquiry">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="catering">Catering Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8 py-6 text-base w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8761776692584!2d73.0731891!3d31.4247222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269f3bfffffe7%3A0x1b5c8b43b0e33b2e!2sKohinoor%20City%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Main Street Cafe Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        
        {/* Map Overlay Card */}
        <div className="absolute bottom-8 left-4 sm:left-8 bg-card p-6 shadow-xl max-w-sm">
          <h3 className="text-xl font-bold text-card-foreground mb-2">
            Main Street Cafe
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            C478+FCF, Owais Rd, Kohinoor City, Madina Town, Faisalabad
          </p>
          <a
            href="https://www.google.com/maps/dir//Kohinoor+City,+Faisalabad,+Punjab,+Pakistan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
          >
            Get Directions
            <MapPin className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923009669433?text=Hi! I would like to place an order from Main Street Cafe"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function AnimatedCTA() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    >
      <motion.p variants={itemVariants} className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
        Ready to Order?
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
        Craving Something Delicious?
      </motion.h2>
      <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
        Order your favorite dishes directly via WhatsApp for quick and easy service.{" "}
        We deliver right to your doorstep!
      </motion.p>
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary rounded-none px-8 py-6 text-base"
        >
          <Link href="/contact">
            Visit Us
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}

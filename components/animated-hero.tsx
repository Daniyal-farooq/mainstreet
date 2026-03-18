"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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

export function AnimatedHero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center px-4 max-w-4xl mx-auto"
    >
      <motion.p variants={itemVariants} className="text-primary text-sm md:text-xl uppercase tracking-[0.3em] mb-4">
        Welcome to
      </motion.p>
      <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-2 tracking-wider">
        MAIN STREET
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl md:text-2xl text-primary tracking-[0.4em] mb-6">
        CAFE
      </motion.p>
      <motion.div variants={itemVariants} className="inline-block border border-primary px-6 py-2 mb-8">
        <span className="text-primary-foreground text-lg md:text-xl tracking-wider">
          CHASE THE FLAVOUR
        </span>
      </motion.div>
      <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        Experience exquisite desserts, premium steaks, and a diverse culinary journey{" "}
        in the heart of Faisalabad
      </motion.p>
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary rounded-none px-8 py-6 text-base"
        >
          <a
            href="https://wa.me/923009669433"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}

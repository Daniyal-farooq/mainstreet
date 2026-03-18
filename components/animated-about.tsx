"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const badgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.4,
    },
  },
}

const textVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.2 + i * 0.1,
    },
  }),
}

export function AnimatedAbout() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div variants={imageVariants} className="relative">
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src="/images/gallery1.jpg"
            alt="Main Street Cafe interior"
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          variants={badgeVariants}
          className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary p-6 flex flex-col justify-center items-center"
        >
          <span className="text-5xl font-bold text-primary-foreground">5+</span>
          <span className="text-primary-foreground text-sm text-center">Years of Excellence</span>
        </motion.div>
      </motion.div>

      <motion.div variants={textVariants}>
        <motion.p
          custom={0}
          variants={itemVariants}
          className="text-primary text-sm uppercase tracking-[0.2em] mb-3"
        >
          Our Story
        </motion.p>
        <motion.h2
          custom={1}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
        >
          A Culinary Journey
        </motion.h2>
        <motion.p
          custom={2}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          Main Street Cafe brings together the finest flavors from around the world,
          serving premium desserts, succulent steaks, artisan pizzas, and much more.
          Our passion for quality and dedication to excellence has made us a beloved
          destination in Faisalabad.
        </motion.p>
        <motion.p
          custom={3}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed mb-8"
        >
          From our signature Molten Lava Cake to perfectly grilled steaks, every dish
          is crafted with love and served with warmth. Experience dining that goes
          beyond food - it is a journey of flavors.
        </motion.p>
        <motion.div custom={4} variants={itemVariants}>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-8"
          >
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

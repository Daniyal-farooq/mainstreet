"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function AnimatedAboutStory() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div variants={imageVariants} className="relative order-2 lg:order-1">
        <div className="relative h-[500px] overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Main Street Cafe dining experience"
            fill
            className="object-cover"
          />
        </div>
        <motion.div
          variants={badgeVariants}
          className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary p-6 flex flex-col justify-center items-center"
        >
          <span className="text-5xl font-bold text-primary-foreground">5+</span>
          <span className="text-primary-foreground text-sm text-center">Years Serving Excellence</span>
        </motion.div>
      </motion.div>

      <motion.div variants={textVariants} className="order-1 lg:order-2">
        <motion.p
          custom={0}
          variants={itemVariants}
          className="text-primary text-sm uppercase tracking-[0.2em] mb-3"
        >
          Since 2019
        </motion.p>
        <motion.h2
          custom={1}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          Chase the Flavour
        </motion.h2>
        <motion.p
          custom={2}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          Main Street Cafe was born from a simple vision: to create a place where
          exceptional food meets warm hospitality. Located in the heart of Faisalabad,
          we have been serving our community with passion and dedication since 2019.
        </motion.p>
        <motion.p
          custom={3}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          Our journey began with a love for desserts - our signature Molten Lava Cake
          and Chocolate Volcano quickly became local favorites. As our reputation grew,
          so did our menu. Today, we proudly offer a diverse selection that spans from
          premium steaks and artisan pizzas to refreshing beverages and healthy salads.
        </motion.p>
        <motion.p
          custom={4}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed mb-8"
        >
          What sets us apart is not just the food we serve, but the experience we create.
          Every dish is prepared with care, every guest is treated like family, and every
          visit is an opportunity to chase new flavours.
        </motion.p>
        <motion.div custom={5} variants={itemVariants}>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 font-semibold transition-colors"
          >
            Explore Our Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

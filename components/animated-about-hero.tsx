"use client"

import { motion } from "framer-motion"

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

interface AnimatedPageHeroProps {
  subtitle: string
  title: string
  description: string
}

export function AnimatedPageHero({ subtitle, title, description }: AnimatedPageHeroProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center px-4"
    >
      <motion.p variants={itemVariants} className="text-primary text-sm uppercase tracking-[0.2em] mb-3">
        {subtitle}
      </motion.p>
      <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
        {title}
      </motion.h1>
      <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto">
        {description}
      </motion.p>
    </motion.div>
  )
}

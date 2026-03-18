"use client"

import { motion } from "framer-motion"

interface MenuCategoryProps {
  id: string
  name: string
  subtitle: string
  children: React.ReactNode
}

const headerVariants = {
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

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function AnimatedMenuCategory({ id, name, subtitle, children }: MenuCategoryProps) {
  return (
    <div id={id} className="mb-20 last:mb-0 scroll-mt-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {name}
        </h2>
        <p className="text-muted-foreground uppercase tracking-wider text-sm">
          {subtitle}
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-4" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={gridVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {children}
      </motion.div>
    </div>
  )
}

export function AnimatedMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-start justify-between p-6 border border-border hover:border-primary transition-colors group"
    >
      {children}
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"

interface Stat {
  value: string
  label: string
}

interface AnimatedAboutStatsProps {
  stats: Stat[]
}

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
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function AnimatedAboutStats({ stats }: AnimatedAboutStatsProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="grid grid-cols-2 md:grid-cols-4 gap-8"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={itemVariants}
          className="text-center"
        >
          <span className="block text-5xl md:text-6xl font-bold text-primary-foreground mb-2">
            {stat.value}
          </span>
          <span className="text-primary-foreground/80 text-sm uppercase tracking-wider">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  )
}

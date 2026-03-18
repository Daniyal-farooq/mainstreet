"use client"

import { motion } from "framer-motion"
import * as Icons from "lucide-react"

interface Feature {
  iconName: string
  title: string
  description: string
}

interface AnimatedFeatureCardProps {
  feature: Feature
  index: number
}

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
}

export function AnimatedFeatureCard({ feature, index }: AnimatedFeatureCardProps) {
  const Icon = (Icons as any)[feature.iconName]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      className="text-center p-8 border border-border hover:border-primary transition-colors duration-300 group"
    >
      <motion.div
        variants={iconVariants}
        className="w-16 h-16 mx-auto mb-6 bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
      >
        <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
      </motion.div>
      <h3 className="text-xl font-bold text-foreground mb-3">
        {feature.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

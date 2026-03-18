"use client"

import { motion } from "framer-motion"
import * as Icons from "lucide-react"

interface Value {
  iconName: string
  title: string
  description: string
}

interface AnimatedValueCardProps {
  value: Value
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

export function AnimatedValueCard({ value, index }: AnimatedValueCardProps) {
  const Icon = (Icons as any)[value.iconName]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
      className="bg-card p-8 text-center hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div variants={iconVariants} className="w-16 h-16 mx-auto mb-6 bg-primary/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>
      <h3 className="text-xl font-bold text-card-foreground mb-3">
        {value.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  )
}

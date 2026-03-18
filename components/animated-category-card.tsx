"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Category {
  name: string
  image: string
  href: string
}

interface AnimatedCategoryCardProps {
  category: Category
  index: number
}

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -100,
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

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
}

export function AnimatedCategoryCard({ category, index }: AnimatedCategoryCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={category.href}
        className="group relative h-80 overflow-hidden block"
      >
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-end p-6"
          variants={contentVariants}
        >
          <div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-2">
              {category.name}
            </h3>
            <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
              View Menu
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

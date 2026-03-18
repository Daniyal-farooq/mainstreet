"use client"

import { motion } from "framer-motion"
import { AnimatedGalleryItem } from "./animated-gallery-item"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface AnimatedGalleryGridProps {
  images: GalleryImage[]
  onImageClick: (src: string) => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export function AnimatedGalleryGrid({ images, onImageClick }: AnimatedGalleryGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {images.map((image, index) => (
        <AnimatedGalleryItem
          key={index}
          image={image}
          index={index}
          onImageClick={onImageClick}
        />
      ))}
    </motion.div>
  )
}

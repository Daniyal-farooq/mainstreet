"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface GalleryImage {
  src: string
  alt: string
  category: string
}

interface AnimatedGalleryItemProps {
  image: GalleryImage
  index: number
  onImageClick: (src: string) => void
}

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function AnimatedGalleryItem({ image, index, onImageClick }: AnimatedGalleryItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={itemVariants}
      transition={{ delay: index * 0.05 }}
      className="relative aspect-square overflow-hidden cursor-pointer group"
      onClick={() => onImageClick(image.src)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <motion.div
        animate={{ backgroundColor: isHovered ? "rgba(14, 14, 14, 0.6)" : "rgba(14, 14, 14, 0)" }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary-foreground font-semibold text-center px-4"
        >
          {image.alt}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

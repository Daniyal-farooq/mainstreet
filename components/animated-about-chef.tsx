"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

export function AnimatedAboutChef() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div variants={imageVariants} className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/dessert.jpg"
          alt="Our culinary creations"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div variants={textVariants}>
        <motion.p
          custom={0}
          variants={itemVariants}
          className="text-primary text-sm uppercase tracking-[0.2em] mb-3"
        >
          Our Commitment
        </motion.p>
        <motion.h2
          custom={1}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          Crafted with Care
        </motion.h2>
        <motion.p
          custom={2}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          Behind every dish at Main Street Cafe is a team of passionate culinary
          professionals. Our chefs bring years of experience and a deep love for
          food to create dishes that delight and inspire.
        </motion.p>
        <motion.p
          custom={3}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          From our signature desserts that have made us famous to our perfectly
          grilled steaks and fresh salads, every item on our menu is prepared
          with meticulous attention to detail and a commitment to excellence.
        </motion.p>
        <motion.p
          custom={4}
          variants={itemVariants}
          className="text-muted-foreground leading-relaxed"
        >
          We believe that great food brings people together. Whether you are
          celebrating a special occasion, enjoying a casual meal with friends,
          or simply treating yourself, Main Street Cafe is here to make every
          moment memorable.
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

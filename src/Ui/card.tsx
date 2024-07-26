"use client"

import { animate, motion } from 'framer-motion'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({className, children }: any) => {
  return (
    <motion.div
    variants={{
        initial:{
            scale:0.5,
            y:50,
            opacity:0,
        },
        animate:{
            scale:1,
            y:0,
            opacity: 1
        }
    }}
    whileHover={{
        scale:1.2
    }}
    transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
    }}
    className={twMerge("w-fit max-w-72 sm:max-w-60 p-3 rounded-xl bg-white text-center text-foreground border-foreground border shadow-xl", className)}>
        {children}
    </motion.div>
  )
}

export default Card
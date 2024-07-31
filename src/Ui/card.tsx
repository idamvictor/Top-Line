"use client"
import React, { useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import AOS from "aos";
import 'aos/dist/aos.css';

const Card = ({className, children }: any) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <motion.div
    data-aos="fade-up"
    className={twMerge("w-fit max-w-72 sm:max-w-60 p-3 rounded-xl bg-white text-center text-foreground border-foreground border shadow-xl", className)}>
        {children}
    </motion.div>
  )
}

export default Card
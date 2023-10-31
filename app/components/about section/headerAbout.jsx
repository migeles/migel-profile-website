"use client";
//react
import React from "react";
import { useEffect, useRef } from "react";

// Framer Motion
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const headerAbout = () => {

  const title = [
    "About ",
    "Me"
  ]
  const subtitle = [
    "Crafting visually stunning and modern yet",  
    "authentic design so that your brand will",
    "stand out in today's competitive era"
  ]

  return (
    <motion.div className='flex flex-col  relative text-white gap-5 z-10'>
      <motion.div >
        <TitleMask title={title}/>
      </motion.div>

      <motion.div className='textFont text-sm flex flex-col gap-3'>
        <p className='text-justify'>
          Crafting visually stunning and modern yet authentic design so that
          your brand will stand out in today’s competitive era
        </p>
      </motion.div>
    </motion.div>
  )
}

function TitleMask({title}){
  return (
    <div className='titleFont text-5xl'>
      {
        title.map((title ,index) => {
          return <div key={index} className="lineMask"><h1>{title}</h1></div>
        })
      }
    </div>
  )
}

export default headerAbout;

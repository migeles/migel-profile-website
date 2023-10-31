"use client";
//react
import React from "react";
import { useEffect } from "react";

// Framer Motion
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const heroTitle = () => {
  let windowHeight = window.innerHeight;
  const { scrollY } = useScroll();
  const x1 = useTransform(scrollY, [0, windowHeight], [0, -600]);
  const x2 = useTransform(scrollY, [0, windowHeight], [0, -500]);
  const spring_x1 = useSpring(x1, { stiffness: 600, damping: 100 });
  const spring_x2 = useSpring(x2, { stiffness: 600, damping: 100 });

  return (
    <motion.div className='flex flex-col px-7 pt-24 fixed text-white gap-5 z-10 '>
      <motion.div
        style={{ x: spring_x1 }}
        >
        <h1 className='textFont text-xl'>Hello I'm</h1>
      </motion.div>

      <motion.div
        className='titleFont text-5xl flex flex-col gap-3'
        style={{ x: spring_x2 }}
       >
        <span className='text-primary'>Migel</span>
        <span>Sastrawan</span>
        <span>Sugiarto</span>
      </motion.div>
    </motion.div>
  );
};

export default heroTitle;

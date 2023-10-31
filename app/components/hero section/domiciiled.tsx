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
} from "framer-motion";

const domiciiled = () => {
  let windowHeight = window.innerHeight;
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, windowHeight], [0, 600]);
  const spring_x = useSpring(x, { stiffness: 600, damping: 100 });
  return (
    <motion.div
      className='fixed h-14 w-80 bottom-10 -right-28 bg-[#E4E4E4] flex flex-row rounded-full'
      style={{ x: spring_x }}>
      <div className='rounded-full flex flex-col h-full w-14 p-2 ml-1  border-black'>
        <div className='border-2 border-black w-full h-full rounded-full'>
          <div className='h-1/2 rounded-t-full w-full bg-red-600'></div>

          <div className='h-1/2 rounded-b-full w-full bg-white'></div>
        </div>
      </div>

      <div className='p-2 text-sm flex items-start justify-center flex-col'>
        <p>Domiciled In</p>
        <p>Indonesia</p>
      </div>
    </motion.div>
  );
};

export default domiciiled;

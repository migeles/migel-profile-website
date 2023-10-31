"use client";

import Image from "next/image";
import HeroImage from "../../assets/images/profile-image 4.png";

//react
import React from "react";
import { useEffect } from "react";

// Framer Motion
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const heroImage = () => {
  let windowHeight = window.innerHeight;
  const { scrollY } = useScroll();
  const indicator = useTransform(scrollY, [0, windowHeight], ["100%", "20%"]);
  const opacity = useTransform(scrollY, [0, windowHeight], ["100%", "0%"]);


  return (
    <motion.div
      className='fixed w-full bottom-0 z-0'
      initial={{ y: 250 }}
      animate={{ y: 0 }}
      transition={{delay: 0.1, duration:0.8}}
      style={{opacity}}
      >
      <Image
        className='hero-image'
        src={HeroImage}
        alt='Picture of Migel Sastrawan Sugiarto'
        style={{
          // opacity: opacity,
          width: "100%",
          height: "auto",
          filter: `saturate(100%) brightness(100%)`,
        }}
      />
      
    </motion.div>
  );
};

export default heroImage;

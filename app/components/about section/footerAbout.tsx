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

import Affilations from "./affiliations";

const footerAbout = () => {
  return (
    <div className="flex flex-col items-end gap-6">
      <div className='w-full overflow-hidden titleFont flex justify-end'>
        <h1 className='text-5xl text-primary text-right'>
          WEB
          <br />
          DESIGNER &nbsp;<span className='text-white'>&</span>
          <br />
          <p className='text-left'>DEVELOPER</p>
        </h1>
      </div>
      <div >
        <Affilations />
      </div>
    </div>
  );
};

export default footerAbout;

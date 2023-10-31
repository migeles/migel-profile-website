"use client";
//react
import React from "react";
import Image from "next/image";
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

import Bca from "../../assets/images/company and brand logo/logo-bca.png";
import Createams from "../../assets/images/company and brand logo/logo-createams.png";
import Kawakawa from "../../assets/images/company and brand logo/KawalogoNOBG.png";

const affiliations = () => {
  return (
    <div className='flex flex-row w-full textFont text-right h-full justify-center items-center gap-4'>
      <div>
        <p className='text-white text-sm'>Professional Affiliations: </p>
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-white p-1 rounded-md  ">
            <Image className="h-7 w-auto" src={Bca} alt="bca-logo" />
        </div>
        {/* <div className="bg-white p-1 rounded-md">
            <Image className="h-7 w-auto" src={Createams} alt="bca-logo" />
        </div> */}
        <div className="bg-white p-1 rounded-md">
            <Image className="h-7 w-auto" src={Kawakawa} alt="bca-logo" />
        </div>
      </div>
    </div>
  );
};

export default affiliations;

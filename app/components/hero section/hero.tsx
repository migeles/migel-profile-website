"use client";

import React from "react";
import HeroTitle from './heroTitle'
import Domiciled from './domiciiled'
import HeroImage from "./heroImage";
import HeroImageOverlay from "./heroImageOverlay";


const hero = () => {

  let windowHeight = window.innerHeight;
  
  return (
    <div className="relative w-full overflow-hidden"
    style={{"height": windowHeight}}>
      <HeroImageOverlay />
      <HeroImage />
      <HeroTitle />
      <Domiciled />
     
    </div>
  );
};

export default hero;

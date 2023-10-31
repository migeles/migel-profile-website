"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero section/hero";
import About from "./components/about section/about";
import Project from "./components/project section/project";
import Menu from "./components/menu/menuButton";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className='bg-default-bg text-black w-full h-full relative  scroll-smooth'>
      <Navbar />
      <Menu />

      {/* START main page component */}
      <Hero />
      <About />
      {/* <Project /> */}
    </main>
  );
}

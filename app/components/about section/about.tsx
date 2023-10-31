"use client";
import HeaderAbout from "./headerAbout";
import FooterAbout from "./footerAbout";

const about = () => {
  let windowHeight = window.innerHeight;

  return (
    <div className='w-full relative px-7 pt-10 pb-6 justify-between flex-col flex' style={{ height: windowHeight }}>
      <HeaderAbout />
      <FooterAbout />
    </div>
  );
};

export default about;

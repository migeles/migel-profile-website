import React from "react";

const navbar = () => {
  return (
    <header className='bg-none w-full h-14 textFont text-white text-xs px-7 border-b-[1px] border-white absolute'>
      <div className="flex justify-between items-center w-full h-full">
        <div className="">
          2023 Edition
        </div>

        <div>
          <ul className="inline">
            {/* <li className="inline">About</li>
            <li className="inline px-4">Portfolio</li> */}
            <li className="inline">Menu +</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default navbar;

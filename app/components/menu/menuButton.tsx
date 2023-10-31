'use client'

import '../../styles/menu/menu.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const menuButton = () => {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname]);

  return (
    
  <div className="header">
    <div onClick={() => {setIsActive(!isActive)}} className="button">
      <div className={`burger ${isActive ? `burgerActive`  : ""}`}></div>
    </div>
  </div>
  )
}

export default menuButton
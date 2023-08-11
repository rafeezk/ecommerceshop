import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import Logo from '../img/logo.svg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  const {itemAmmount} = useContext(CartContext);
  const handleSidebarClick = () => setIsOpen(!isOpen);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return ( 
  <header className={`${isActive ? 'bg-white shadow-md p-4':'bg-none'} fixed z-10 w-full transition-all p-2`}>
    <div className='flex p-2 justify-between'>
   <div>
    <Link to={'/'}>
    <img src={Logo} alt="logo rusak" className='w-[2rem] h-[2rem]'/>
    </Link>
    </div>
   <div onClick={handleSidebarClick} className='cursor-pointer flex relative'>
    <BsBag className='text-2xl'/>
    <div className='bg-red-500 absolute left-2 -bottom-0  text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center'>{itemAmmount}</div>
   </div>
    </div>
   </header>
  )
};

export default Header;

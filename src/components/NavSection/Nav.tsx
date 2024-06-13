'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { useState, useEffect } from 'react';
import NavDrop from './NavDrop';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const handleClick = () => {
    setMenuToggle(!menuToggle);
  };
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-button') && !target.closest('.menu-dropdown')) {
      setMenuToggle(false);
    }
  };
  useEffect(() => {
    if (menuToggle) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuToggle]);

  return (
    <div className="w-full flex items-center relative justify-center laptop:px-[64px] tablet:px-[32px] h-[64px] px-[16px]">
      <div className="text-[16px] font-black leading-[24px] tracking-[0.12em] flex items-center jsutify-center self-center ">
        JAY HEO
      </div>
      {/* HOVER HAMBURGER MENU */}
      <button
        onClick={handleClick}
        className={`flex tablet:hidden menu-button flex-col absolute right-0 laptop:mr-[64px] tablet:mr-[32px] mr-[16px] gap-[8px] justify-center items-center w-[40px] h-[40px]`}
      >
        <div
          className={`w-[24px] rounded-[20px] border-[0.5px] border-white relative transition-transform  ${
            menuToggle && 'translate-y-[-4px]'
          } duration-300`}
        />
        <Image
          src={'/navIcons/arrowMenu.svg'}
          alt={'arrow'}
          width={8}
          height={10}
          className={` w-1/3 absolute ease-in-out h-1/2 transition-all duration-300  ${
            menuToggle ? 'opacity-100' : 'opacity-0'
          }  before:-rotate-90 after:rotate-90`}
        />
        <div
          className={`w-[24px] rounded-[20px] border-[0.5px] ease-in-out border-white  ${
            menuToggle ? 'opacity-0' : 'opacity-100'
          } duration-100 transition-opacity`}
        />
        <div
          className={`w-[24px] rounded-[20px] border-[0.5px] border-white  ${
            menuToggle && 'translate-y-[4px]'
          } duration-300`}
        />
        {/* HOVER DROPDOWN MENU */}
        <div
          className={`${
            menuToggle ? 'opacity-100 visible' : 'opacity-0 collapse'
          } absolute top-[56px] right-[20px]  opacity-0 delay-150  duration-500 transition-all  ease-in-out`}
        >
          <NavDrop />
        </div>
      </button>
      <button
        onClick={handleClick}
        className={`hidden tablet:flex group menu-button flex-col absolute right-0 laptop:mr-[64px] tablet:mr-[32px] mr-[16px] gap-[8px] justify-center items-center w-[40px] h-[40px]`}
      >
        <div className="w-[24px] rounded-[20px] border-[0.5px] border-white relative transition-transform group-hover:translate-y-[-4px] duration-300 " />
        <Image
          src={'/navIcons/arrowMenu.svg'}
          alt={'arrow'}
          width={8}
          height={10}
          className="opacity-0 w-1/3  absolute ease-in-out h-1/2 group-focus-visible:hover: transition-all duration-300 group-hover:opacity-100 before:-rotate-90 after:rotate-90"
        />
        <div className="w-[24px] rounded-[20px] border-[0.5px] ease-in-out border-white group-hover:opacity-0 duration-100 transition-opacity" />
        <div className="w-[24px] rounded-[20px] border-[0.5px] border-white group-hover:translate-y-[4px] duration-300" />
        {/* HOVER DROPDOWN MENU */}
        <div
          className={`absolute top-[64px] right-[20px] group-hover:visible opacity-0 delay-150 group-hover:opacity-100 collapse duration-500 transition-all  ease-in-out`}
        >
          <NavDrop />
        </div>
      </button>
    </div>
  );
};

export default Navbar;

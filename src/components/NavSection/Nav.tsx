'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import NavDrop from './NavDrop';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const [hoveringDropdown, setHoveringDropdown] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    if (menuToggle && !hoveringDropdown) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuToggle, hoveringDropdown]);

  const handleMouseEnter = () => {
    if (!menuToggle) {
      setMenuToggle(true);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuToggle(false);
    }, 2000);
  };

  return (
    <div className="w-full flex items-center relative justify-center laptop:px-[64px] tablet:px-[32px] h-[64px] px-[16px] z-10">
      <Link
        href={'/'}
        className="text-[16px] font-black leading-[24px] tracking-[0.12em] flex items-center jsutify-center self-center "
      >
        JAY HEO
      </Link>
      {/* HOVER HAMBURGER MENU */}
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex flex-col absolute right-0 laptop:mr-[64px] tablet:mr-[32px] mr-[16px] gap-[8px] justify-center items-center w-[40px] h-[40px]`}
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
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseEnter}
          className={`${
            menuToggle || hoveringDropdown
              ? 'opacity-100 visible'
              : 'opacity-0 collapse'
          } absolute top-[56px] right-[20px]  opacity-0 delay-150  duration-500 transition-all ease-in-out`}
        >
          <NavDrop handleMouseEnter={handleMouseEnter} />
        </div>
      </button>
    </div>
  );
};

export default Navbar;
{
  /* <button
onClick={handleClick}
onMouseEnter={() => setMenuToggle(true)}
// onMouseLeave={() => setMenuToggle(false)}
className={`hidden tablet:flex group menu-button flex-col absolute right-0 laptop:mr-[64px] tablet:mr-[32px] mr-[16px] gap-[8px] justify-center items-center w-[40px] h-[40px]`}
>
<div className="w-[24px] rounded-[20px] border-[0.5px] border-white relative transition-transform group-hover:translate-y-[-4px] duration-300 " />
<Image
  src={'/navIcons/arrowMenu.svg'}
  alt={'arrow'}
  width={8}
  height={10}
  className="opacity-0 w-1/3 absolute ease-in-out h-1/2  transition-all duration-300 group-hover:opacity-100 before:-rotate-90 after:rotate-90"
/>
<div className="w-[24px] rounded-[20px] border-[0.5px] ease-in-out border-white group-hover:opacity-0 duration-100 transition-opacity" />
<div className="w-[24px] rounded-[20px] border-[0.5px] border-white group-hover:translate-y-[4px] duration-300" />
<div
  onMouseEnter={() => setMenuToggle(true)}
  className={`absolute top-[64px] right-[20px] group-hover:visible opacity-0 delay-150 group-hover:opacity-100 collapse duration-500 transition-all  ease-in-out`}
>
  <NavDrop />
</div>
</button>
 */
}

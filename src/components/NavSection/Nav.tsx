'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { useState } from 'react';
import NavDrop from './NavDrop';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <div className="w-full flex items-center justify-end tablet:px-[64px] h-[64px] px-[32px] bg-black ">
      <button className="flex group flex-col gap-[8px] justify-center items-center w-[40px] h-[40px] relative">
        <div className="w-[24px] rounded-[20px] border-[0.5px] border-white transition-transform group-hover:translate-y-[-4px] duration-300 " />
        <Image
          src={'/navIcons/arrowMenu.svg'}
          alt={'arrow'}
          width={8}
          height={10}
          className="opacity-0 w-1/3 absolute ease-in-out h-1/2 transition-all duration-300 group-hover:opacity-100 before:-rotate-90 after:rotate-90"
        />

        <div className="w-[24px] rounded-[20px] border-[0.5px] ease-in-out border-white  group-hover:opacity-0 duration-100 transition-opacity" />
        <div className="w-[24px] rounded-[20px] border-[0.5px] border-white group-hover:translate-y-[4px] duration-300" />
        <div className="absolute top-[64px] right-[20px] group-hover:visible opacity-0 delay-150 group-hover:opacity-100 collapse duration-500 transition-all ease-in-out">
          <NavDrop />
        </div>
      </button>
    </div>
  );
};

export default Navbar;
{
  /* <Image
          src={'/navIcons/arrowMenu.svg'}
          alt={'arrow'}
          width={8}
          height={10}
          className="opacity-0 w-1/3 absolute ease-in-out h-1/2 transition-all duration-300 group-hover:opacity-100 before:-rotate-90 after:rotate-90"
        /> */
}

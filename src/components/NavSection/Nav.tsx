'use client';

import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { useState } from 'react';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  return (
    <div className="w-full h-[44px] flex items-center justify-center">
      <nav
        className={`flex justify-between bg-[#181818] items-center w-full z-10  tablet:px-[64px] px-[32px] h5 ${
          menuToggle
            ? 'bg-gradient-to-b from-white to-black max-h-[44px] border h-[64px]'
            : 'bg-inherit h-full'
        } max-w-[1440px]`}
      >
        <Link
          href="/"
          className="hover:opacity-90 active:opacity-100 text-white opacity-80"
        >
          <span>Jay Heo</span>
        </Link>
        <NavMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      </nav>
    </div>
  );
};

export default Navbar;

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navMenuIcons, MenuTypes } from '@/constants/menuIcons';
import Button from '../Button';
import { MdMenu } from 'react-icons/md';
import NavProjectBox from './NavProjectBox';
import NavMenuDropdown from './NavMenuDropdown';
import { MdClose } from 'react-icons/md';

const NavMenu = () => {
  const [projectToggle, setProjectToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const MenuIcons = ({ name, image, href }: MenuTypes) => {
    return (
      <Link href={href} className="flex gap-[8px] group">
        <Image
          alt={name}
          height={24}
          width={24}
          src={image}
          className="group-hover:opacity-80 select-none"
        />
        <span className="group-hover:opacity-80 select-none">{name}</span>
      </Link>
    );
  };

  return (
    <>
      <div className="hidden tablet:flex justify-between gap-[32px] items-center h5 relative">
        <Button toggle={projectToggle} setToggle={setProjectToggle}>
          <Image
            src={'/navIcons/projects.svg'}
            alt={'Projects'}
            height={24}
            width={24}
            className=" group-hover:opacity-80 select-none"
          />
          <span className="group-hover:opacity-80 select-none">Projects</span>
        </Button>
        <div
          className={`absolute top-[36px] left-[-10px] bg-red-300 h-[40px] w-[120px] ${
            projectToggle
              ? 'translate-y-[-5px] delay-75 visible'
              : 'translate-y-[8px] collapse '
          }  transition-transform ease-in duration-150`}
        >
          <NavProjectBox />
        </div>

        {navMenuIcons.map((item) => (
          <MenuIcons
            name={item.name}
            image={item.image}
            href={item.href}
            key={item.name}
          />
        ))}
      </div>
      {/* FOR MOBILE SCREENS */}
      <div className="tablet:hidden flex items-center z-30 justify-center overflow-hidden ">
        <button onClick={() => setMenuToggle(!menuToggle)}>
          <div
            className={`transition-all will-change-transform ease-in duration-500 delay-150`}
          >
            {menuToggle ? (
              <MdClose className="select-none" />
            ) : (
              <MdMenu className="select-none" />
            )}
          </div>
        </button>
      </div>
      <div
        className={`absolute ${
          menuToggle ? 'translate-y-[300px] opacity-100 flex' : ' opacity-50'
        } transition-all ease-in z-20 w-full right-[0px] top-[-300px] duration-300 tablet:hidden`}
      >
        <div className="w-screen h-1/5">
          <NavMenuDropdown
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
          />
        </div>
      </div>
    </>
  );
};

export default NavMenu;

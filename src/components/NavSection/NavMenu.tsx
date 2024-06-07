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

interface INavMenuProps {
  menuToggle: boolean;
  setMenuToggle: (val: boolean) => void;
}

const NavMenu = ({ menuToggle, setMenuToggle }: INavMenuProps) => {
  const [projectToggle, setProjectToggle] = useState(false);
  // const [menuToggle, setMenuToggle] = useState(false);
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
      <div className="hidden tablet:flex justify-between gap-[32px] items-center p2 relative">
        <Button toggle={projectToggle} setToggle={setProjectToggle}>
          <Image
            src={'/navIcons/projects.svg'}
            alt={'Projects'}
            height={24}
            width={24}
            className="group-hover:opacity-90 select-none"
          />
          <span className="group-hover:opacity-90 select-none">Projects</span>
        </Button>
        <div
          className={`absolute top-[36px] left-[-16px] h-[40px] w-[128px] ${
            projectToggle
              ? 'translate-y-[-8px] visible duration-300 delay-150 opacity-100'
              : 'delay-300 collapse duration-500 opacity-50'
          }  transition-all ease-in duration-300 group-aria-pressed:translate-y-[16px]`}
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
      <div className="tablet:hidden flex items-center z-20 justify-center overflow-hidden ">
        <button onClick={() => setMenuToggle(!menuToggle)}>
          <div className="relative">
            <MdClose
              className={`absolute select-none transition-all duration-150 ease-in-out ${
                menuToggle
                  ? ' visible opacity-100 hover:opacity-60'
                  : 'collapse opacity-0'
              }`}
            />
            <MdMenu
              className={` select-none transition-all duration-150 ease-in-out ${
                !menuToggle
                  ? 'visible opacity-100 hover:opacity-60'
                  : 'collapse opacity-0'
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`absolute ${
          menuToggle
            ? 'visible translate-y-[300px] opacity-100 flex h-full'
            : 'collapse opacity-50 h-1/5'
        } transition-all ease-in-out duration-500 -z-10 w-full bg-opacity-5 bg-black backdrop-blur-sm right-[0px] top-[-304px] tablet:hidden`}
      >
        <div className="w-screen h-full pt-[64px] ">
          <NavMenuDropdown
            menuToggle={menuToggle}
            setMenuToggle={setMenuToggle}
          />
        </div>
      </div>
      {navMenuIcons.map((item) => (
        <MenuIcons
          name={item.name}
          image={item.image}
          href={item.href}
          key={item.name}
        />
      ))}
    </>
  );
};

export default NavMenu;

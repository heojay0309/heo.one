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
      <Link href={href} className="flex gap-[8px]">
        <Image alt={name} height={24} width={24} src={image} />
        <span>{name}</span>
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
            className=" group-hover:opacity-80"
          />
          <span className="group-hover:opacity-80">Projects</span>
        </Button>
        {projectToggle && (
          <div
            className={`absolute top-[36px] translate-x-[-8px] h-[40px] w-[120px] opacity-0 ${
              projectToggle && 'opacity-100'
            }  transition-all ease-in`}
          >
            <NavProjectBox />
          </div>
        )}
        {navMenuIcons.map((item) => (
          <MenuIcons
            name={item.name}
            image={item.image}
            href={item.href}
            key={item.name}
          />
        ))}
      </div>
      <div className="tablet:hidden flex items-center z-20 justify-center overflow-hidden ">
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
        } transition-all ease-in w-full right-[0px] top-[-300px] duration-300`}
      >
        <div className="w-screen h-1/5">
          <NavMenuDropdown menuToggle={menuToggle} />
        </div>
      </div>
    </>
  );
};

export default NavMenu;

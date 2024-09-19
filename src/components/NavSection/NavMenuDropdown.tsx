'use client';
import Link from 'next/link';
import Image from 'next/image';
import { navMenuIcons, MenuTypes } from '@/constants/menuIcons';
import { useEffect, useState } from 'react';

const ProjectMenu = () => {
  return (
    <div className="flex flex-col">
      <Link
        href={'/projects/Preps'}
        className="flex gap-[8px] px-[8px] py-[16px] bg-[#F0F0F0] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10"
      >
        <Image
          src={'/projectIcons/project_preps.svg'}
          width={24}
          height={24}
          alt={'preps'}
        />
        <span className="opacity-80">Preps</span>
      </Link>
      <Link
        href={'/projects/Mustadd'}
        className="flex gap-[8px] px-[8px] py-[16px] bg-[#F0F0F0] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10"
      >
        <Image
          src={'/projectIcons/project_mustadd.svg'}
          width={24}
          height={24}
          alt={'mustadd'}
        />
        <span className="opacity-80">Mustadd</span>
      </Link>
      {/* <Link
        href={'/projects/Mellow'}
        className="flex gap-[8px] px-[8px] py-[16px] bg-[#F0F0F0] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10 "
      >
        <Image
          src={'/projectIcons/project_mellow.svg'}
          width={24}
          height={24}
          alt={'mellow'}
        />
        <span className="opacity-80">Mellow</span>
      </Link> */}
      <Link
        href={'/projects/ShineResumes'}
        className="flex gap-[8px] px-[8px] py-[16px] bg-[#F0F0F0] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10 "
      >
        <Image
          src={'/projectIcons/project_shine.svg'}
          width={24}
          height={24}
          alt={'ShineResumes'}
        />
        <span className="opacity-80">ShineResumes</span>
      </Link>
      <Link
        href={'/projects/Giverr'}
        className="flex gap-[8px] px-[8px] py-[16px] bg-[#F0F0F0] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10"
      >
        <Image
          src={'/projectIcons/project_giverr.svg'}
          width={24}
          height={24}
          alt={'giverr'}
        />
        <span className="opacity-80">Giverr</span>
      </Link>
    </div>
  );
};

const NavMenuDropdown = ({
  menuToggle,
  setMenuToggle,
}: {
  menuToggle: boolean;
  setMenuToggle: (val: boolean) => void;
}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!menuToggle) {
      setToggle(false);
    }
  }, [menuToggle]);

  const MenuIcons = ({ name, image, href }: MenuTypes) => {
    return (
      <Link
        href={href}
        onClick={() => {
          setMenuToggle(false);
        }}
        className="flex gap-[16px] px-[32px] z-20 py-[16px] bg-opacity-5 rounded-[8px] bg-black hover:bg-opacity-20"
      >
        <Image alt={name} height={24} width={24} src={image} />
        <span>{name}</span>
      </Link>
    );
  };

  return (
    <div className="h-full flex flex-col h4 ">
      {navMenuIcons.map((item) => (
        <MenuIcons
          name={item.name}
          image={item.image}
          href={item.href}
          key={item.name}
        />
      ))}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="relative"
      >
        <div
          className={`flex gap-[16px] w-full bg-black z-10 px-[32px] py-[16px] hover:bg-opacity-20 ${
            toggle ? 'bg-opacity-20' : 'bg-opacity-5'
          }`}
        >
          <Image
            src={'/navIcons/projects.svg'}
            alt={'Projects'}
            height={24}
            width={24}
            className=" group-hover:opacity-80"
          />
          <span className="group-hover:opacity-80">Projects</span>
        </div>
        <div
          className={`${
            toggle ? 'translate-y-[224px] -z-20 visible' : 'collapse'
          } flex-col absolute w-full top-[-168px] rounded-b-[4px] bg-opacity-5 bg-black -z-30 pl-[60px] gap-[16px] duration-300 ease-in-out transition-all`}
        >
          <ProjectMenu />
        </div>
      </button>
    </div>
  );
};

export default NavMenuDropdown;

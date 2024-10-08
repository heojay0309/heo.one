"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import NavDrop from "./NavDrop";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const [hoveringDropdown, setHoveringDropdown] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setMenuToggle(!menuToggle);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".menu-button") && !target.closest(".menu-dropdown")) {
      setMenuToggle(false);
    }
  };

  useEffect(() => {
    if (menuToggle && !hoveringDropdown) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
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
    <div className="sticky z-10 h-[48px] w-full px-[16px] py-[8px] tablet:h-[64px] tablet:px-[32px] tablet:py-[16px]">
      <Link
        href={"/"}
        className="flex h-full w-full items-center justify-center self-center text-center text-[16px] font-black leading-[24px] tracking-[0.12em] text-white text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
      >
        JAY HEO
      </Link>
    </div>
  );
};

export default Navbar;

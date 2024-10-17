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
    <div className="sticky z-10 flex h-[60px] w-full snap-start justify-between py-[16px]">
      <Link
        href={"/"}
        className="h-[40px] text-center text-[16px] font-semibold leading-[24px] tracking-[0.12em] text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
      >
        heo.one
      </Link>
      <div className="flex justify-between gap-[16px] tablet:gap-[32px]">
        <Link
          href={"https://www.github.com/heojay0309"}
          className="h-[40px] text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
        >
          GitHub
        </Link>
        <Link
          href={"https://www.linkedin.com/in/heo"}
          className="h-[40px] text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
        >
          LinkedIn
        </Link>
        <Link
          href={"/resume"}
          className="h-[40px] text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

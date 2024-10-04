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
    <div className="relative z-10 flex h-[64px] w-full items-center justify-center px-[16px] tablet:px-[32px] laptop:px-[64px]">
      <Link
        href={"/"}
        className="jsutify-center flex items-center self-center text-[16px] font-black leading-[24px] tracking-[0.12em]"
      >
        JAY HEO
      </Link>
    </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky z-10 flex h-[60px] w-full snap-start flex-col justify-between gap-[8px] py-[16px] tablet:flex-row tablet:gap-[0px]">
      <Link
        href={"/"}
        className="h-[40px] text-center text-[16px] font-semibold leading-[24px] tracking-[0.12em] text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
      >
        heo.one
      </Link>
      <div className="flex justify-between gap-[8px] text-[16px] leading-[24px] tablet:gap-[32px]">
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
        <Link
          href={"#contact"}
          className="h-[40px] text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

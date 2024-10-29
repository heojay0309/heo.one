"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed left-0 z-10 h-[64px] w-full px-[16px] py-[8px] text-black tablet:h-[80px] tablet:px-[64px]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-[8px] rounded-3xl bg-white bg-opacity-70 px-[16px] py-[8px] hover:bg-opacity-80 tablet:h-[80px] tablet:gap-[0px] tablet:px-[32px] tablet:py-[16px]">
        <Link
          href={"/"}
          className="flex h-full items-center justify-center gap-[16px] text-center text-[16px] font-bold leading-[24px] tracking-[0.12em] text-black drop-shadow-lg transition-all duration-200 hover:scale-105 hover:text-opacity-90 active:text-opacity-80"
        >
          <Image
            src={"/me2.svg"}
            alt={"me"}
            width={56}
            height={56}
            className="h-[40px] w-[40px] tablet:h-[56px] tablet:w-[56px]"
          />
          heo.one
        </Link>
        <div className="flex h-full items-center justify-between gap-[24px] text-[16px] leading-[24px] tablet:gap-[32px] tablet:text-[16px] tablet:leading-[24px]">
          <Link
            href={"https://www.github.com/heojay0309"}
            className="text-shadow text-white text-opacity-100 transition-all duration-200 hover:scale-105 hover:text-opacity-80 hover:drop-shadow-lg active:text-opacity-60"
          >
            <Image
              src={"/new/icons/icon-github.svg"}
              alt={"github"}
              width={24}
              height={24}
              className="block tablet:hidden"
            />
            <span className="hidden tablet:block">GitHub</span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/heo"}
            className="text-shadow text-white transition-all duration-200 hover:scale-105 hover:text-opacity-80 hover:drop-shadow-lg active:text-opacity-60"
          >
            <Image
              src={"/new/icons/icon-linkedin.svg"}
              alt={"linkedin"}
              width={24}
              height={24}
              className="block tablet:hidden"
            />
            <span className="hidden tablet:block">LinkedIn</span>
          </Link>
          <Link
            href={"/resume"}
            className="text-shadow text-white transition-all duration-200 hover:scale-105 hover:text-opacity-80 hover:drop-shadow-lg active:text-opacity-60"
          >
            <Image
              src={"/new/icons/icon-resume.svg"}
              alt={"resume"}
              width={24}
              height={24}
              className="block tablet:hidden"
            />
            <span className="hidden tablet:block">Resume</span>
          </Link>
          <Link
            href={"#contact"}
            className="text-shadow text-white transition-all duration-200 hover:scale-105 hover:text-opacity-80 hover:drop-shadow-lg active:text-opacity-60"
          >
            <Image
              src={"/new/icons/icon-contact.svg"}
              alt={"contact"}
              width={24}
              height={24}
              className="block tablet:hidden"
            />
            <span className="hidden tablet:block">Contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-10 mx-auto flex h-[48px] w-full items-center justify-center bg-transparent text-black tablet:h-[64px]">
      <div className="flex h-full items-center justify-between gap-[32px] rounded-3xl bg-white bg-opacity-50 px-[16px] py-[8px] hover:bg-opacity-70 tablet:w-1/2 tablet:gap-[0px] tablet:px-[32px] tablet:py-[16px]">
        <Link
          href={"/"}
          className="flex border-spacing-96 items-center gap-[16px] rounded-full border border-white text-center text-[16px] font-bold leading-[24px] tracking-[0.12em] text-opacity-60 opacity-80 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
        >
          <Image
            src={"/me2.svg"}
            alt={"me"}
            width={56}
            height={56}
            className="h-[32px] w-[32px] tablet:h-[40px] tablet:w-[40px]"
          />
        </Link>
        <div className="flex h-full items-center justify-between gap-[32px] text-[16px] leading-[24px] tablet:text-[16px] tablet:leading-[24px]">
          <Link
            href={"https://www.github.com/heojay0309"}
            className="text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
          >
            <Image
              src={"/new/icons/icon-github.svg"}
              alt={"github"}
              width={24}
              height={24}
            />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/heo"}
            className="text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
          >
            <Image
              src={"/new/icons/icon-linkedin.svg"}
              alt={"linkedin"}
              width={24}
              height={24}
            />
          </Link>
          <Link
            href={"/resume"}
            className="text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
          >
            <Image
              src={"/new/icons/icon-resume.svg"}
              alt={"resume"}
              width={24}
              height={24}
            />
          </Link>
          <Link
            href={"#contact"}
            className="text-opacity-60 transition-all duration-200 hover:scale-105 hover:text-opacity-80 active:text-opacity-100"
          >
            <Image
              src={"/new/icons/icon-contact.svg"}
              alt={"contact"}
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

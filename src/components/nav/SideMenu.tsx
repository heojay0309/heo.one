"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
interface SideMenuProps {
  activeSection?: string | null;
}

const SideMenu = ({ activeSection }: SideMenuProps) => {
  const path = usePathname();
  const menuContentRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScroll();
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    setScrollHeight(document.documentElement.scrollHeight);
  }, []);
  const translateY = useTransform(
    scrollY,
    [0, Math.max(0, scrollHeight - windowHeight)],
    [0, Math.max(0, windowHeight - menuHeight - 144)],
    {
      clamp: true,
    },
  );
  const isActive = (sectionId: string) => {
    return activeSection === sectionId ? "bg-opacity-10" : "bg-opacity-0";
  };
  useEffect(() => {
    const updateHeights = () => {
      if (menuContentRef.current) {
        const height = menuContentRef.current.offsetHeight;
        setMenuHeight(height);
        setWindowHeight(window.innerHeight);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <div
      className={`fixed top-[144px] hidden h-full flex-col tablet:right-[0px] tablet:block`}
    >
      <motion.div
        ref={menuContentRef}
        style={{
          translateY,
          transition: "transform 0.1s ease-out",
        }}
        className={`${path === "/resume" && "hidden"} flex flex-col items-center gap-[16px] rounded-lg bg-white bg-opacity-10 transition-all duration-500 tablet:px-[8px] tablet:py-[8px]`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Link
          href={"#intro"}
          className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-all duration-200 ${isActive("intro")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[48px] tablet:w-[48px]`}
        >
          <Image
            src={"/new/icons/home.svg"}
            alt={"home"}
            height={24}
            width={24}
            className="select-none"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>
        <Link
          href={"#ShineResumes"}
          onClick={() => track("shine_link_clicked")}
          className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-all duration-200 ${isActive("ShineResumes")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[48px] tablet:w-[48px]`}
        >
          <Image
            src={"/new/icons/project_shine.svg"}
            alt={"ShineResumes"}
            height={24}
            width={24}
            className="select-none tablet:h-[32px] tablet:w-[32px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Preps"}
          onClick={() => track("preps_link_clicked")}
          className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-all duration-200 ${isActive("Preps")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[48px] tablet:w-[48px]`}
        >
          <Image
            src={"/new/icons/project_preps.svg"}
            alt={"Preps AI"}
            height={24}
            width={24}
            className="select-none tablet:h-[32px] tablet:w-[32px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Mustadd"}
          onClick={() => track("mustadd_link_clicked")}
          className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-all duration-200 ${isActive("Mustadd")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[48px] tablet:w-[48px]`}
        >
          <Image
            src={"/new/icons/project_mustadd.svg"}
            alt={"Mustadd"}
            height={24}
            width={24}
            className="select-none tablet:h-[32px] tablet:w-[32px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Giverr"}
          onClick={() => track("giverr_link_clicked")}
          className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-all duration-200 ${isActive("Giverr")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[48px] tablet:w-[48px]`}
        >
          <Image
            src={"/new/icons/project_giverr.svg"}
            alt={"Giverr"}
            height={32}
            width={32}
            className="select-none tablet:h-[32px] tablet:w-[32px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Mellow"}
          onClick={() => track("mellow_link_clicked")}
          className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-all duration-200 ${isActive("Mellow")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[48px] tablet:w-[48px]`}
        >
          <Image
            src={"/new/icons/project_mellow.svg"}
            alt={"Mellow"}
            height={24}
            width={32}
            className="select-none tablet:h-[32px] tablet:w-[32px]"
          />
        </Link>
      </motion.div>
    </div>
  );
};
export default SideMenu;

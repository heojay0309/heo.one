"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

const SideMenu = ({
  activeSection,
}: {
  activeSection?:
    | "nav"
    | "ShineResumes"
    | "Preps"
    | "Mustadd"
    | "Giverr"
    | "Mellow"
    | "contact"
    | null;
}) => {
  const [offsetY, setOffsetY] = useState("0%");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Map section ids to their respective vertical offset values for positioning
    const sectionOffsets = {
      nav: "0%",
      ShineResumes: "10%",
      Preps: "20%", // Adjust these values based on desired gap or position
      Mustadd: "30%",
      Giverr: "40%",
      Mellow: "45%",
      contact: "45%",
    };

    if (activeSection && sectionOffsets[activeSection] !== undefined) {
      setOffsetY(sectionOffsets[activeSection]);
    }
    if (activeSection === "contact") {
      setTimeout(() => setIsVisible(true), 500); // Adjust to match your transition duration
    } else {
      setIsVisible(true);
    }
  }, [activeSection]);

  return (
    <div className="fixed right-[0px] top-[120px] h-full tablet:right-[24px] tablet:gap-[64px] laptop:right-[64px]">
      <div
        className={`flex flex-col items-center gap-[16px] rounded-lg bg-white bg-opacity-70 transition-transform duration-500 ease-in-out tablet:gap-[32px] tablet:p-[8px] translate-y-[${offsetY}px]`}
        style={{ transform: `translateY(${offsetY})` }}
      >
        <Link
          href={"#intro"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/home.svg"}
            alt={"home"}
            height={24}
            width={24}
            className="h-[22px] w-[22px] select-none tablet:h-[24px] tablet:w-[24px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>
        <Link
          href={"#ShineResumes"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_shine.svg"}
            alt={"ShineResumes"}
            height={32}
            width={32}
            className="h-[22px] w-[22px] select-none tablet:h-[24px] tablet:w-[24px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>
        <Link
          href={"#Preps"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_preps.svg"}
            alt={"Preps AI"}
            height={32}
            width={32}
            className="h-[24px] w-[24px] select-none tablet:h-[24px] tablet:w-[32px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Mustadd"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_mustadd.svg"}
            alt={"Mustadd"}
            height={40}
            width={40}
            className="h-[28px] w-[28px] select-none tablet:h-[36px] tablet:w-[36px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Giverr"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_giverr.svg"}
            alt={"Giverr"}
            height={32}
            width={32}
            className="h-[22px] w-[22px] select-none tablet:h-[26px] tablet:w-[26px]"
          />
        </Link>
        <div className="w-[24px] border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Mellow"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_mellow.svg"}
            alt={"Mellow"}
            height={24}
            width={32}
            className="h-[24px] w-[24px] select-none tablet:h-[26px] tablet:w-[32px]"
          />
        </Link>
      </div>
    </div>
  );
};
export default SideMenu;

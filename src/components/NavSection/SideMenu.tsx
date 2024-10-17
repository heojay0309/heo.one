"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

const SideMenu = ({
  activeSection,
}: {
  activeSection:
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
      Preps: "30%", // Adjust these values based on desired gap or position
      Mustadd: "45%",
      Giverr: "60%",
      Mellow: "75%",
      contact: "75%",
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
    <div className="fixed right-[0px] top-[60px] h-full gap-[64px] px-[16px] py-[64px] tablet:px-[64px]">
      <div
        className={`flex flex-col items-center justify-center gap-[32px] transition-transform duration-500 ease-in-out translate-y-[${offsetY}px]`}
        style={{ transform: `translateY(${offsetY})` }}
      >
        <Link
          href={"#intro"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/home.svg"}
            alt={"ShineResumes"}
            height={24}
            width={24}
            className="select-none"
          />
        </Link>
        <div className="w-[40px] border border-black border-opacity-10"></div>
        <Link
          href={"#ShineResumes"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_shine.svg"}
            alt={"ShineResumes"}
            height={24}
            width={24}
            className="select-none"
          />
        </Link>
        <div className="w-[40px] border border-black border-opacity-10"></div>

        <Link
          href={"#Preps"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_preps.svg"}
            alt={"Preps AI"}
            height={24}
            width={24}
            className="select-none"
          />
        </Link>
        <div className="w-[40px] border border-black border-opacity-10"></div>

        <Link
          href={"#Mustadd"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_mustadd.svg"}
            alt={"Mustadd"}
            height={24}
            width={24}
            className="select-none"
          />
        </Link>
        <div className="w-[40px] border border-black border-opacity-10"></div>

        <Link
          href={"#Giverr"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_giverr.svg"}
            alt={"Giverr"}
            height={24}
            width={24}
            className="select-none"
          />
        </Link>
        <div className="w-[40px] border border-black border-opacity-10"></div>

        <Link
          href={"#Mellow"}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10"
        >
          <Image
            src={"/new/icons/project_mellow.svg"}
            alt={"Mellow"}
            height={24}
            width={24}
            className="select-none"
          />
        </Link>
      </div>
    </div>
  );
};
export default SideMenu;

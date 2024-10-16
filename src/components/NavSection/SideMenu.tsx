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
      // nav: 0,
      // ShineResumes: 64,
      // Preps: 128, // Adjust these values based on gap or position
      // Mustadd: 192,
      // Giverr: 220,
      // Mellow: 256,
      // contact: 256,
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
    <div className="fixed right-[0px] top-[60px] h-full gap-[64px] px-[16px] tablet:px-[64px]">
      <div
        className={`flex flex-col items-center justify-center gap-[64px] transition-transform duration-500 ease-in-out translate-y-[${offsetY}px]`}
        style={{ transform: `translateY(${offsetY})` }}
      >
        <Link href={"#ShineResumes"}>
          <Image
            src={"/new/icons/project_shine.svg"}
            alt={"ShineResumes"}
            height={32}
            width={32}
            className="select-none"
          />
        </Link>
        <Link href={"#Preps"}>
          <Image
            src={"/new/icons/project_preps.svg"}
            alt={"Preps AI"}
            height={32}
            width={32}
            className="select-none"
          />
        </Link>
        <Link href={"#Mustadd"}>
          <Image
            src={"/new/icons/project_mustadd.svg"}
            alt={"Mustadd"}
            height={32}
            width={32}
            className="select-none"
          />
        </Link>
        <Link href={"#Giverr"}>
          <Image
            src={"/new/icons/project_giverr.svg"}
            alt={"Giverr"}
            height={32}
            width={32}
            className="select-none"
          />
        </Link>
        <Link href={"#Mellow"}>
          <Image
            src={"/new/icons/project_mellow.svg"}
            alt={"Mellow"}
            height={32}
            width={32}
            className="select-none"
          />
        </Link>
        <Link
          href={"#intro"}
          className={`${activeSection === "contact" ? "opacity-100" : "opacity-0"} transition-all duration-500 ${isVisible ? "block" : "hidden"}`}
        >
          <Image
            src={"/new/icons/arrow.svg"}
            alt={"scroll to top"}
            height={32}
            width={32}
            className="select-none"
          />
        </Link>
      </div>
    </div>
  );
};
export default SideMenu;

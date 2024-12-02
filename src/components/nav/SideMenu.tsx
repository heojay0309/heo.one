"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";

interface SideMenuProps {
  activeSection?: string | null;
}

const SideMenu = ({ activeSection }: SideMenuProps) => {
  const path = usePathname();
  const isActive = (sectionId: string) => {
    return activeSection === sectionId ? "bg-opacity-10" : "bg-opacity-0";
  };

  return (
    <div
      className={`fixed top-[160px] hidden h-full tablet:right-[0px] tablet:block tablet:gap-[64px]`}
    >
      <div
        className={`${path === "/resume" && "hidden"} transition-all duration-700 ${activeSection === "intro" || activeSection === "top" ? "translate-x-[calc(100%+16px)] opacity-0 tablet:translate-x-[calc(100%+64px)]" : "max-h-full translate-x-0 opacity-100"} flex flex-col items-center gap-[16px] rounded-lg bg-white bg-opacity-10 tablet:gap-[16px] tablet:px-[8px] tablet:py-[8px]`}
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
      </div>
    </div>
  );
};
export default SideMenu;

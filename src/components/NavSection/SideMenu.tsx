"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SideMenuProps {
  activeSection?: string | null;
}

const SideMenu = ({ activeSection }: SideMenuProps) => {
  const path = usePathname();
  // Helper function to determine if a section is active
  const isActive = (sectionId: string) => {
    return activeSection === sectionId ? "bg-opacity-10" : "bg-opacity-0";
  };
  return (
    <div
      className={`fixed top-[184px] hidden h-full tablet:right-[8px] tablet:block tablet:gap-[64px] laptop:right-[64px]`}
    >
      <div
        className={`${path === "/resume" && "hidden"} flex flex-col items-center gap-[16px] rounded-lg bg-white bg-opacity-30 hover:bg-opacity-40 tablet:gap-[16px] tablet:px-[8px] tablet:py-[16px]`}
      >
        {/* <Link
          href={"#intro"}
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
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
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
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
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
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
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
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
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
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
          className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
        >
          <Image
            src={"/new/icons/project_mellow.svg"}
            alt={"Mellow"}
            height={24}
            width={32}
            className="h-[24px] w-[24px] select-none tablet:h-[26px] tablet:w-[32px]"
          />
        </Link> */}
        <Link
          href={"#intro"}
          className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black ${isActive("intro")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]`}
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
          className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black ${isActive("ShineResumes")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]`}
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
          className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black ${isActive("Preps")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]`}
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
          className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black ${isActive("Mustadd")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]`}
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
          className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black ${isActive("Giverr")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]`}
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
          className={`flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black ${isActive("Mellow")} hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]`}
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

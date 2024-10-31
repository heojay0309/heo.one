import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="fixed bottom-[0px] left-[0px] flex w-full items-center justify-center px-[16px] pb-[16px] tablet:hidden">
      <div
        className={`icons w-3/4 rounded-3xl bg-white bg-opacity-10 px-[8px] py-[8px] backdrop-blur-2xl tablet:w-1/2`}
      >
        <Link
          href={"#intro"}
          className="icon hiddenText flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
        >
          <Image
            src={"/new/icons/home.svg"}
            alt={"home"}
            height={24}
            width={24}
            className="h-[22px] w-[22px] select-none tablet:h-[24px] tablet:w-[24px]"
          />
        </Link>
        <div className="w-[24px] rotate-90 border border-black border-opacity-10 tablet:w-[40px]"></div>
        <Link
          href={"#ShineResumes"}
          className="icon hiddenText flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
        >
          <Image
            src={"/new/icons/project_shine.svg"}
            alt={"ShineResumes"}
            height={32}
            width={32}
            className="h-[22px] w-[22px] select-none tablet:h-[24px] tablet:w-[24px]"
          />
        </Link>
        <div className="w-[24px] rotate-90 border border-black border-opacity-10 tablet:w-[40px]"></div>
        <Link
          href={"#Preps"}
          className="icon hiddenText flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
        >
          <Image
            src={"/new/icons/project_preps.svg"}
            alt={"Preps AI"}
            height={32}
            width={32}
            className="h-[24px] w-[24px] select-none tablet:h-[24px] tablet:w-[32px]"
          />
        </Link>
        <div className="w-[24px] rotate-90 border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Mustadd"}
          className="icon hiddenText flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
        >
          <Image
            src={"/new/icons/project_mustadd.svg"}
            alt={"Mustadd"}
            height={40}
            width={40}
            className="h-[28px] w-[28px] select-none tablet:h-[36px] tablet:w-[36px]"
          />
        </Link>
        <div className="w-[24px] rotate-90 border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Giverr"}
          className="icon hiddenText flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
        >
          <Image
            src={"/new/icons/project_giverr.svg"}
            alt={"Giverr"}
            height={32}
            width={32}
            className="h-[22px] w-[22px] select-none tablet:h-[26px] tablet:w-[26px]"
          />
        </Link>
        <div className="w-[24px] rotate-90 border border-black border-opacity-10 tablet:w-[40px]"></div>

        <Link
          href={"#Mellow"}
          className="icon hiddenText flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10 tablet:h-[40px] tablet:w-[40px]"
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

export default Footer;

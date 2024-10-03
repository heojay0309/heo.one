import Image from "next/image";
import Card from "../wrapper/Card";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="col-span-4 row-span-2 grid h-full items-start justify-start gap-[16px] tablet:gap-[32px] laptop:col-span-3 laptop:col-start-2 laptop:row-span-3 laptop:row-start-1 laptop:flex laptop:grid-flow-col laptop:flex-col">
      <div className="hidden w-full items-start justify-between gap-[32px] laptop:col-span-3 laptop:col-start-2 laptop:row-span-2 laptop:row-start-2 laptop:flex">
        <Card
          col={2}
          row={2}
          type={"one"}
          order={5}
          orderMobile={5}
          orderTablet={5}
          className="h-full w-full hover:bg-opacity-20 active:bg-opacity-40"
        >
          <Link
            href={"https://www.shine-resumes.com"}
            className="flex w-full items-center justify-center gap-[16px] p-[16px] tablet:gap-[32px] tablet:p-[64px]"
          >
            <div className="flex h-full w-full flex-col gap-[16px] text-start text-[14px] font-normal leading-[21px] tracking-[0.12em] text-white text-opacity-80 tablet:text-[16px] tablet:leading-[24px]">
              <div className="flex h-full flex-nowrap items-center justify-center gap-[8px] text-[16px] font-[400] text-white text-opacity-80">
                <Image
                  src={"/projectIcons/project_shine.svg"}
                  alt={"shine"}
                  height={32}
                  width={32}
                />
                <span className="flex gap-[8px] font-[600] text-white text-opacity-100">
                  ShineResumes{" "}
                </span>
                <Image
                  src={"/projectIcons/project_shine.svg"}
                  alt={"shine"}
                  height={32}
                  width={32}
                />
              </div>
            </div>
          </Link>
        </Card>
        <Card
          col={2}
          row={2}
          type={"one"}
          order={5}
          orderMobile={5}
          orderTablet={5}
          className="h-full w-full hover:bg-opacity-20 active:bg-opacity-40"
        >
          <Link
            href={"https://preps-ai.com"}
            className="flex w-full items-center justify-center gap-[16px] p-[16px] tablet:gap-[32px] tablet:p-[64px]"
          >
            <div className="flex h-full w-full flex-col gap-[16px] text-start text-[14px] font-normal leading-[21px] tracking-[0.12em] text-white text-opacity-80 tablet:text-[16px] tablet:leading-[24px]">
              <div className="flex h-full items-center justify-center gap-[8px] text-[16px] font-[400] text-white text-opacity-80">
                <Image
                  src={"/projectIcons/project_preps.svg"}
                  alt={"preps"}
                  height={32}
                  width={32}
                />
                <span className="flex gap-[8px] font-[600] text-white text-opacity-100">
                  Preps AI{" "}
                </span>
                <Image
                  src={"/projectIcons/project_preps.svg"}
                  alt={"preps"}
                  height={32}
                  width={32}
                />
              </div>
            </div>
          </Link>
        </Card>
      </div>

      <div className="col-span-4 row-span-2 grid h-full items-start justify-start gap-[16px] laptop:col-span-3 laptop:col-start-2 laptop:row-span-2 laptop:row-start-2 laptop:flex laptop:grid-flow-col laptop:flex-col">
        <Card
          col={2}
          row={2}
          type="main"
          order={5}
          orderMobile={5}
          orderTablet={5}
          className="h-full"
        >
          <div className="flex h-full flex-col items-center justify-center gap-[16px] p-[16px] tablet:flex-row tablet:gap-[32px] tablet:p-[32px]">
            <Image
              src={"/selfie_1.svg"}
              alt="profile"
              priority={true}
              width={192}
              height={192}
              className="rounded-full object-fill tablet:h-[192px] tablet:w-[192px]"
            />
            <div className="text-start text-[14px] font-normal leading-[21px] tracking-[0.12em] text-white text-opacity-80 tablet:text-[16px] tablet:leading-[28px]">
              Hello, <br /> I am a full-stack software engineer with extensive
              experience in developing front-end applications. My passion for
              building high-quality products comes from my love of challenging
              difficult problems and discovering robust solutions.
              <br />I also love Costco food!
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Intro;

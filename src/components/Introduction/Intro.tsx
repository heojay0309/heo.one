import Image from "next/image";
import Card from "../wrapper/Card";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="col-span-4 row-span-2 flex grid-flow-row grid-rows-subgrid gap-[16px] tablet:col-span-4 tablet:row-span-2 tablet:grid-flow-row tablet:grid-cols-2 tablet:grid-rows-1 tablet:gap-[32px] laptop:col-span-3 laptop:col-start-2 laptop:row-span-3 laptop:row-start-1 laptop:grid laptop:grid-flow-col laptop:grid-cols-1 laptop:grid-rows-3">
      <div className="col-span-2 col-start-2 row-span-1 row-start-2 flex h-full w-full flex-col items-start justify-between gap-[16px] tablet:col-span-1 tablet:col-start-1 tablet:row-span-1 tablet:gap-[32px] laptop:col-span-1 laptop:row-span-1 laptop:flex-row">
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
            className="flex w-full items-center justify-center gap-[16px] p-[16px] tablet:gap-[32px] laptop:p-[64px]"
          >
            <div className="h-full gap-[16px] text-start text-[14px] font-normal leading-[21px] tracking-[0.12em] text-white text-opacity-80 tablet:text-[16px] tablet:leading-[24px]">
              <div className="flex h-full w-full items-center justify-center gap-[8px] text-[16px] font-[400] text-white text-opacity-80">
                <Image
                  src={"/projectIcons/project_shine.svg"}
                  alt={"shine"}
                  height={32}
                  width={32}
                  className="hidden tablet:block"
                />
                <span className="flex font-[600] text-white text-opacity-100 tablet:w-auto">
                  Shine
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
            className="flex w-full items-center justify-center gap-[16px] p-[16px] tablet:gap-[32px] laptop:p-[64px]"
          >
            <div className="h-full gap-[16px] text-start text-[14px] font-normal leading-[21px] tracking-[0.12em] text-white text-opacity-80 tablet:text-[16px] tablet:leading-[24px]">
              <div className="flex h-full w-full items-center justify-center gap-[8px] text-[16px] font-[400] text-white text-opacity-80">
                <Image
                  src={"/projectIcons/project_preps.svg"}
                  alt={"preps"}
                  height={50}
                  width={50}
                  className="hidden tablet:block"
                />
                <span className="flex text-nowrap font-[600] text-white text-opacity-100 tablet:w-auto">
                  Preps
                </span>
                <Image
                  src={"/projectIcons/project_preps.svg"}
                  alt={"preps"}
                  height={50}
                  width={50}
                />
              </div>
            </div>
          </Link>
        </Card>
      </div>

      <div className="flex h-full w-full laptop:col-span-1 laptop:row-span-2 laptop:row-start-2">
        <Card
          col={2}
          row={2}
          type="main"
          order={5}
          orderMobile={5}
          orderTablet={5}
          className=""
        >
          <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-[8px] overflow-scroll p-[16px] tablet:flex-row tablet:p-[16px]">
            <Image
              src={"/selfie_1.svg"}
              alt="profile"
              priority={true}
              width={96}
              height={96}
              className="h-[80px] w-[80px] rounded-full object-fill tablet:h-[96px] tablet:w-[96px] laptop:h-[172px] laptop:w-[172px]"
            />
            <div className="block text-center text-[12px] font-normal leading-[18px] tracking-[0.12em] text-white text-opacity-80 tablet:hidden laptop:text-[16px] laptop:leading-[28px]">
              Hello, <br /> I am a full-stack software engineer with extensive
              experience in developing front-end applications.
            </div>
            <div className="hidden text-[14px] font-normal leading-[21px] tracking-[0.12em] text-white text-opacity-80 tablet:block tablet:text-center laptop:text-[16px] laptop:leading-[28px]">
              Hello, <br /> I am a full-stack software engineer with extensive
              experience in developing front-end applications. My passion for
              building high-quality products comes from my love of challenging
              difficult problems and discovering robust solutions.
              {/* <br />I also love Costco food! 🌭 */}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Intro;

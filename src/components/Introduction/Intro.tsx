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
          <div className="flex h-full items-center justify-center gap-[16px] p-[16px] tablet:gap-[32px] tablet:p-[32px]">
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

// <div className="laptop:col-start-2 laptop:row-start-2 grid laptop:flex items-start h-full justify-start laptop:col-span-3 laptop:row-span-2 laptop:grid-flow-col col-span-4 row-span-2 gap-[16px]">
// <Card
//   col={2}
//   row={2}
//   type="main"
//   order={5}
//   orderMobile={5}
//   orderTablet={5}
//   className="h-full"
// >
//   <div className=" flex tablet:p-[32px] p-[16px] justify-center items-center h-full tablet:gap-[32px] gap-[16px]">
//     <Image
//       src={'/selfie.png'}
//       alt="profile"
//       priority={true}
//       width={192}
//       height={192}
//       className="object-fill tablet:w-[192px] tablet:h-[192px] h-[64px] w-[64px]"
//     />
//     <div className="text-start tablet:leading-[24px] tablet:text-[16px] text-[14px] leading-[21px] font-normal tracking-[0.12em]">
//       Hello, <br /> I am a full-stack software engineer with extensive
//       experience in developing front-end applications. My passion for
//       building high-quality products comes from my love of challenging
//       difficult problems and discovering robust solutions.
//     </div>
//   </div>
// </Card>
// </div>

// const Intro = () => {
//   return (
//     <div className="flex justify-center max-h-1/3 items-center flex-col">
//       <div className="flex flex-col items-center justify-between gap-[16px] ">
//         <div className="">
//           <Image
//             src={'/selfie.png'}
//             alt="profile"
//             priority={true}
//             className="object-fill"
//             width={200}
//             height={200}
//           />
//         </div>
//         <div className="font-bold text-[64px] leading-[72px] tracking-[0.12em]">
//           JAY HEO
//         </div>
//         <div className=" min-w-3/5 max-w-[692px] w-full text-center tracking-[0.12em] leading-[24px] text-[16px] font-normal">
//           <span>
//             Hello, <br /> I am a full-stack software engineer with extensive
//             experience in developing front-end applications. My passion for
//             building high-quality products comes from my love of challenging
//             difficult problems and discovering robust solutions.
//           </span>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Intro;

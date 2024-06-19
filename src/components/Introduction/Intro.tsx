import Image from 'next/image';
import Card from '../wrapper/Card';

const Intro = () => {
  return (
    <div className="laptop:col-start-2 laptop:row-start-2 grid laptop:flex items-start h-full justify-start laptop:col-span-3 laptop:row-span-2 laptop:grid-flow-col col-span-4 row-span-2 gap-[16px]">
      <Card
        col={2}
        row={2}
        type="main"
        order={5}
        orderMobile={5}
        orderTablet={5}
        className="h-full"
      >
        <div className=" flex tablet:p-[32px] p-[16px] justify-center items-center h-full tablet:gap-[32px] gap-[16px]">
          <Image
            src={'/selfie.png'}
            alt="profile"
            priority={true}
            width={192}
            height={192}
            className="object-fill tablet:w-[192px] tablet:h-[192px] h-[64px] w-[64px]"
          />
          <div className="text-start tablet:leading-[24px] tablet:text-[16px] text-[14px] leading-[21px] font-normal tracking-[0.12em]">
            Hello, <br /> I am a full-stack software engineer with extensive
            experience in developing front-end applications. My passion for
            building high-quality products comes from my love of challenging
            difficult problems and discovering robust solutions.
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Intro;

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

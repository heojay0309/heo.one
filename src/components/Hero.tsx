"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const describeMe = [
    "full-stack",
    "front-end",
    "observant",
    "scalable",
    "innovative",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(false); // Start fading out
      // Wait until the fade-out animation is complete before changing the text
      const fadeTimeout = setTimeout(() => {
        setIndex((prev) => (prev === describeMe.length - 1 ? 0 : prev + 1));
        setFade(true); // Start fading in with new text
      }, 1000); // Duration of fade-out

      return () => clearTimeout(fadeTimeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [describeMe.length, index]);

  return (
    <div className="-z-10 flex h-full w-full select-none flex-row justify-start gap-[32px] overflow-x-clip text-white tablet:min-h-[100vh] tablet:flex-col tablet:gap-[64px]">
      <div className="mt-[72px] flex w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col-reverse items-center justify-center tablet:flex-row">
          <div className="flex min-h-[720px] w-full flex-col items-center justify-center">
            <div className="flex flex-col flex-wrap justify-center gap-[32px] text-nowrap text-center text-[32px] font-[500] leading-[48px] drop-shadow-lg tablet:flex-row tablet:text-[40px] tablet:leading-[60px]">
              <div className="text-shadow">I am a </div>
              <div className="relative flex min-w-[160px] items-center justify-center gap-[16px] drop-shadow-lg tablet:min-w-[240px] tablet:items-start">
                <div
                  className={`text-center text-[32px] font-[700] leading-[48px] tracking-wide text-yellow-300 transition-opacity duration-500 will-change-contents tablet:text-[44px] tablet:leading-[60px] ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span>{describeMe[index]}</span>
                </div>
                <div className="absolute top-[48px] -z-10 h-[4px] w-full rounded-lg bg-white shadow-lg tablet:top-[56px]"></div>{" "}
              </div>
              <div className="text-shadow">developer.</div>
            </div>
          </div>
          <div className="flex min-h-[720px] w-full flex-col items-center justify-center gap-[32px] text-center tablet:w-full tablet:gap-[64px] tablet:text-start">
            <div className="hideText flex flex-col gap-[16px]">
              <div className="text-shadow text-[32px] font-[600] leading-[48px] tracking-widest drop-shadow-lg tablet:text-[40px] tablet:leading-[60px]">
                <div className="flex flex-col items-center justify-center text-wrap tablet:items-center">
                  <span className="text-wrap">Hello,</span>
                  <span>I&apos;m Jay Heo.</span>
                </div>
              </div>
              <div className="text-shadow w-full text-center text-[16px] font-light leading-[24px] tracking-widest drop-shadow-lg tablet:text-center tablet:text-[22px] tablet:leading-[36px]">
                Driven by complex challenges and innovation.
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div
          className={`hidden w-2/3 items-center justify-between gap-[64px] rounded-lg px-[16px] tablet:flex`}
        >
          <Link
            href={"#ShineResumes"}
            className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-transform duration-200 ${index === 0 ? "scale-150" : "scale-100"} bg-black bg-opacity-0 transition-transform hover:bg-opacity-5 active:bg-opacity-10`}
          >
            <Image
              src={"/new/icons/project_shine.svg"}
              alt={"ShineResumes"}
              height={32}
              width={32}
              className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
            />
          </Link>
          <Link
            href={"#Preps"}
            className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-transform duration-200 ${index === 1 ? "scale-150" : "scale-100"} bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10`}
          >
            <Image
              src={"/new/icons/project_preps.svg"}
              alt={"Preps AI"}
              height={32}
              width={32}
              className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
            />
          </Link>

          <Link
            href={"#Mustadd"}
            className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black bg-opacity-0 transition-transform duration-200 ${index === 2 ? "scale-150" : "scale-100"} hover:bg-opacity-5 active:bg-opacity-10`}
          >
            <Image
              src={"/new/icons/project_mustadd.svg"}
              alt={"Mustadd"}
              height={32}
              width={32}
              className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
            />
          </Link>
          <Link
            href={"#Giverr"}
            className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black bg-opacity-0 transition-transform duration-200 hover:bg-opacity-5 active:bg-opacity-10 ${index === 3 ? "scale-150" : "scale-100"} `}
          >
            <Image
              src={"/new/icons/project_giverr.svg"}
              alt={"Giverr"}
              height={32}
              width={32}
              className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
            />
          </Link>
          <Link
            href={"#Mellow"}
            className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black bg-opacity-0 transition-transform duration-200 hover:bg-opacity-5 active:bg-opacity-10 ${index === 4 ? "scale-150" : "scale-100"} `}
          >
            <Image
              src={"/new/icons/project_mellow.svg"}
              alt={"Mellow"}
              height={32}
              width={32}
              className={`h-[24px] w-[24px] select-none tablet:h-[32px] tablet:w-[32px]`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   const describeMe = [
//     "full-stack",
//     "front-end",
//     "observant",
//     "scalable",
//     "innovative",
//   ];
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setFade(false); // Start fading out
//       // Wait until the fade-out animation is complete before changing the text
//       const fadeTimeout = setTimeout(() => {
//         setIndex((prev) => (prev === describeMe.length - 1 ? 0 : prev + 1));
//         setFade(true); // Start fading in with new text
//       }, 1000); // Duration of fade-out

//       return () => clearTimeout(fadeTimeout);
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, [describeMe.length, index]);

//   return (
//     <div className="-z-10 flex h-full min-h-[960px] w-full select-none flex-col items-center justify-center gap-[32px] overflow-x-clip text-white tablet:flex-row laptop:gap-[64px]">
//       <div className="flex h-full w-full flex-col items-center justify-center gap-[32px] tablet:max-h-[400px] tablet:w-full tablet:items-center tablet:justify-start">
//         <div className="flex flex-col gap-[64px]">
//           <div className="hideText flex flex-col gap-[16px]">
//             <div className="text-shadow text-[32px] font-[600] leading-[48px] text-white drop-shadow-lg">
//               Hello,
//             </div>
//             <div className="flex flex-col gap-[2px] text-white tablet:gap-[8px]">
//               <div className="text-shadow text-[32px] font-[600] leading-[48px] tracking-widest drop-shadow-lg tablet:text-nowrap tablet:text-[40px] tablet:leading-[60px]">
//                 <span className="">my name is </span>
//                 <span className="text-[32px] font-[700] leading-[48px] tablet:text-[48px] tablet:leading-[60px]">
//                   Jay Heo
//                 </span>
//                 .
//               </div>
//               <div className="flex w-full flex-wrap gap-[10px] text-nowrap text-[32px] font-[500] leading-[48px] drop-shadow-lg tablet:flex-nowrap tablet:text-[40px] tablet:leading-[60px]">
//                 <div className="text-shadow">I am a </div>
//                 <div className="relative flex min-w-[160px] items-center justify-center drop-shadow-lg tablet:min-w-[240px]">
//                   <div className="absolute bottom-[0px] -z-10 h-[4px] w-full rounded-lg bg-white shadow-lg"></div>{" "}
//                   <span
//                     className={`text-center text-[32px] font-[700] leading-[48px] tracking-wide text-yellow-300 transition-opacity duration-500 will-change-contents tablet:text-[44px] tablet:leading-[60px] ${
//                       fade ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     {describeMe[index]}
//                   </span>
//                 </div>
//                 <div className="text-shadow">developer.</div>
//               </div>
//             </div>
//             <div className="text-shadow w-full text-[16px] font-light leading-[24px] tracking-widest drop-shadow-lg tablet:text-[22px] tablet:leading-[36px]">
//               Driven by complex challenges and innovation.
//             </div>
//           </div>

//           {/* Projects */}
//           <div
//             className={`flex w-full items-center justify-between gap-[16px] rounded-lg tablet:gap-[16px] tablet:px-[8px] tablet:py-[16px]`}
//           >
//             <Link
//               href={"#ShineResumes"}
//               className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-transform duration-200 ${index === 0 ? "scale-150" : "scale-100"} bg-black bg-opacity-0 transition-transform hover:bg-opacity-5 active:bg-opacity-10`}
//             >
//               <Image
//                 src={"/new/icons/project_shine.svg"}
//                 alt={"ShineResumes"}
//                 height={32}
//                 width={32}
//                 className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
//               />
//             </Link>
//             <Link
//               href={"#Preps"}
//               className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-transform duration-200 ${index === 1 ? "scale-150" : "scale-100"} bg-black bg-opacity-0 hover:bg-opacity-5 active:bg-opacity-10`}
//             >
//               <Image
//                 src={"/new/icons/project_preps.svg"}
//                 alt={"Preps AI"}
//                 height={32}
//                 width={32}
//                 className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
//               />
//             </Link>

//             <Link
//               href={"#Mustadd"}
//               className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black bg-opacity-0 transition-transform duration-200 ${index === 2 ? "scale-150" : "scale-100"} hover:bg-opacity-5 active:bg-opacity-10`}
//             >
//               <Image
//                 src={"/new/icons/project_mustadd.svg"}
//                 alt={"Mustadd"}
//                 height={32}
//                 width={32}
//                 className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
//               />
//             </Link>
//             <Link
//               href={"#Giverr"}
//               className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black bg-opacity-0 transition-transform duration-200 hover:bg-opacity-5 active:bg-opacity-10 ${index === 3 ? "scale-150" : "scale-100"} `}
//             >
//               <Image
//                 src={"/new/icons/project_giverr.svg"}
//                 alt={"Giverr"}
//                 height={32}
//                 width={32}
//                 className={`h-[32px] w-[32px] select-none tablet:h-[32px] tablet:w-[32px]`}
//               />
//             </Link>
//             <Link
//               href={"#Mellow"}
//               className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black bg-opacity-0 transition-transform duration-200 hover:bg-opacity-5 active:bg-opacity-10 ${index === 4 ? "scale-150" : "scale-100"} `}
//             >
//               <Image
//                 src={"/new/icons/project_mellow.svg"}
//                 alt={"Mellow"}
//                 height={32}
//                 width={32}
//                 className={`h-[24px] w-[24px] select-none tablet:h-[32px] tablet:w-[32px]`}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

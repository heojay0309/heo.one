"use client";

import { stringText } from "@/constants/stringText";
import dynamic from "next/dynamic";
const CustomAnimation = dynamic(
  () => import("../components/utils/CustomAnimation"),
  {
    ssr: false,
  },
);
const Hero = () => {
  return (
    <div className="bg-linear-to-br relative z-10 flex h-full w-full select-none flex-row justify-start gap-[32px] overflow-clip text-white tablet:min-h-[100vh] tablet:flex-col tablet:gap-[64px]">
      <div className="absolute flex w-full flex-col items-center justify-center gap-[16px] rounded-full text-white text-opacity-30 tablet:gap-[64px]">
        {stringText.map((arr, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className={`inline-flex font-bold tracking-[0.8em] transition-transform`}
            >
              {arr.map((char, charIndex) => {
                const delay = (rowIndex * 10 + charIndex) * 100;
                return (
                  <CustomAnimation
                    key={`${char}-${rowIndex}-${charIndex}`}
                    delay={delay}
                    rowIndex={rowIndex}
                    charIndex={charIndex}
                  >
                    {char}
                  </CustomAnimation>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="relative flex w-full flex-col items-center justify-center tablet:mt-[80px]">
        <div className="flex h-full w-full flex-col-reverse items-center justify-between tablet:flex-row">
          <div className="flex min-h-[720px] w-full flex-col items-center justify-center gap-[32px] text-center tablet:w-full tablet:gap-[64px] tablet:text-start">
            <div className="hideText flex flex-col gap-[16px]">
              <div className="text-shadow text-[32px] font-[600] leading-[48px] tracking-widest drop-shadow-lg tablet:text-[40px] tablet:leading-[60px]">
                <div className="flex flex-col items-center justify-center text-wrap text-opacity-80 tablet:items-center">
                  <span className="text-wrap">Hello there,</span>
                  <span>I&apos;m Jay Heo.</span>
                </div>
              </div>
              <div className="text-shadow w-full text-center text-[16px] font-light leading-[24px] tracking-widest drop-shadow-lg tablet:text-center tablet:text-[22px] tablet:leading-[36px]">
                Driven by complex challenges and innovation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

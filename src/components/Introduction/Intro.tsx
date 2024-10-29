import Image from "next/image";
import Card from "../wrapper/Card";
import Link from "next/link";
import { useEffect, useState } from "react";

const Intro = () => {
  const describeMe = ["Full-Stack", "Passionate", "Scalable", "Innovative"];
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
    }, 2000);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="-z-10 flex h-full min-h-[540px] w-full select-none snap-start flex-col items-center gap-[32px] overflow-x-clip text-white tablet:min-h-[960px] tablet:flex-row tablet:justify-center laptop:gap-[64px]">
      <div className="flex h-full w-full flex-col justify-center gap-[32px] self-center tablet:max-h-[400px] tablet:w-full tablet:items-center tablet:justify-start">
        <div className="flex flex-col gap-[32px]">
          <div className="text-shadow text-[36px] font-[600] leading-[48px] drop-shadow-lg tablet:text-[48px] tablet:leading-[64px]">
            Hello,
          </div>
          <div className="text-[36px] font-[500] leading-[48px] drop-shadow-lg tablet:text-nowrap tablet:text-[48px] tablet:leading-[64px]">
            <span className="text-shadow">My name is </span>
            <span className="text-shadow font-[600] tracking-wide">
              Jay Heo
            </span>
            .
          </div>
          <div className="flex w-full flex-wrap gap-[10px] text-nowrap text-[36px] font-[500] leading-[48px] drop-shadow-lg tablet:flex-nowrap tablet:justify-center tablet:text-[48px] tablet:leading-[64px]">
            <div className="text-shadow">I am a </div>
            <div className="relative flex min-w-[160px] items-center justify-center drop-shadow-lg tablet:min-w-[240px]">
              <div className="absolute bottom-[4px] h-[3px] w-full bg-white"></div>{" "}
              <span
                className={`text-center shadow-none transition-opacity duration-500 will-change-contents ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {describeMe[index]}
              </span>
            </div>
            <div className="text-shadow">Developer.</div>
          </div>
          <span className="text-shadow text-[14px] font-light leading-[24px] tracking-wider drop-shadow-lg tablet:text-[24px] tablet:leading-[36px]">
            Driven by complex challenges and innovation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;

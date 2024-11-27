"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PuzzleBackground from "./Background";

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

  const array = new Array(10).fill("");
  const [transitionPoint, setTransitionPoint] = useState(
    "translate-y-[40px] tablet:translate-y-[64px]",
  );
  const [isGoingDown, setIsGoingDown] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionPoint((prev) =>
        prev === "translate-y-[40px] tablet:translate-y-[64px]"
          ? "translate-y-[0px] tablet:translate-y-[0px]"
          : "translate-y-[40px] tablet:translate-y-[64px]",
      );
      setIsGoingDown((prev) => !prev);
    }, 1500); // Change direction every 1 second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="relative z-10 flex h-full w-full select-none flex-row justify-start gap-[32px] overflow-x-clip bg-gradient-to-br text-white tablet:min-h-[100vh] tablet:flex-col tablet:gap-[64px]">
      <div className="absolute left-0 top-[128px] flex flex-col gap-[16px] text-white text-opacity-30 tablet:left-[18%] tablet:top-[0%] tablet:gap-[64px]">
        {array.map((str, index) => {
          let delayTime = `delay-[${index * 150}ms]`;
          return (
            <div
              key={index}
              className={`font-bold tracking-[0.8em] transition-transform duration-500 tablet:tracking-[1.3em] ${transitionPoint} ${delayTime}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              buildwithapurposebuildwithapurpose
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

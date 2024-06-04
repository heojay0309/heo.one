'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { useMotionValueEvent, useScroll } from 'framer-motion';
import { projectData, ProjectDataType } from '@/constants/projects';

const ProjectDetails = ({
  currentProject,
}: {
  currentProject: ProjectDataType;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentXIndex, setCurrentXIndex] = useState(0);
  const [dots, setDots] = useState([]);

  // const { scrollYProgress, scrollXProgress } = useScroll({});

  const cardLength = currentProject.images.length;

  useEffect(() => {
    const pageCounter = async (counter: number) => {
      const script = [];
      for (let i = 0; i < counter; i++) {
        script.push(i);
      }
      // setDots(script);
    };
    if (currentProject.images) {
      pageCounter(currentProject.images.length);
    }
  }, [currentProject.images]);

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   const cardsBreakpoints = currentProject.images.map(
  //     (_, index) => index / cardLength
  //   );
  //   const closestBreakpointIndex = cardsBreakpoints.reduce(
  //     (acc, breakpoint, index) => {
  //       const distance = Math.abs(latest - breakpoint);
  //       if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
  //         return index;
  //       }
  //       return acc;
  //     },
  //     0
  //   );
  //   setCurrentIndex(closestBreakpointIndex);
  // });

  // useMotionValueEvent(scrollXProgress, 'change', (latest) => {
  //   const cardsBreakpoints = currentProject.images.map(
  //     (_, index) => index / cardLength
  //   );
  //   const closestBreakpointIndex = cardsBreakpoints.reduce(
  //     (acc, breakpoint, index) => {
  //       const distance = Math.abs(latest - breakpoint);
  //       if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
  //         return index;
  //       }
  //       return acc;
  //     },
  //     0
  //   );
  //   setCurrentXIndex(closestBreakpointIndex);
  // });

  return (
    <div className="flex fixed h-full flex-col-reverse laptop:flex-row gap-[64px] laptop:gap-[32px] w-full max-h-[100vh] laptop:max-h-none laptop:max-w-[1440px] tablet:max-w-[768px] laptop:mx-auto laptop:px-[64px] px-[16px] laptop:overflow-y-auto overflow-x-auto overflow-y-clip pb-[128px] laptop:py-[0px]">
      <div className="flex sticky top-[380px] h-full min-h-[210px] laptop:min-h-[290px] laptop:max-h-[290px] flex-col gap-[32px] items-center laptop:items-start self-center laptop:self-auto justify-start laptop:justify-between w-full tablet:w-full max-h-[210px]">
        <div className="flex flex-col gap-[8px] text-center laptop:text-start ">
          <div className="h4">{currentProject.projectName}</div>
          <div className="p2">{currentProject.yearsWorked}</div>
        </div>
        <div className="h6 flex-1 laptop:text-start text-center w-1/2 tablet:w-1/2 laptop:w-2/3 min-h-[80px] laptop:h-[210px]">
          {currentProject.description[currentIndex]}
        </div>
        <Link
          className="bg-black text-white px-[8px] py-[8px] w-1/2 tablet:w-1/2 laptop:w-1/3 text-center rounded-[4px] h6"
          href={currentProject?.url}
        >
          View Prototype
        </Link>
        <div className="flex max-h-[248px] laptop:hidden w-1/3 pt-[32px] justify-between gap-[32px] items-center h-full">
          {dots.map((dot, index) => {
            return (
              <button
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`rounded-full h-[10px] w-[10px] bg-black ${
                  index === currentXIndex ? 'bg-opacity-80' : 'bg-opacity-30'
                }`}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="sticky max-h-[320px] top-[100px] laptop:left-1/2 laptop:w-full laptop:top-[340px] flex laptop:flex-row flex-col justify-center tablet:justify-center laptop:gap-[128px] items-center ">
        <Image
          src={currentProject.images[currentIndex]}
          width={400}
          height={320}
          alt={currentProject.projectName}
          className="select-none laptop:flex hidden"
        />
        <Image
          src={currentProject.images[currentXIndex]}
          width={400}
          height={320}
          alt={currentProject.projectName}
          className="select-none flex laptop:hidden"
        />
        <div className="hidden flex-col max-h-[248px] laptop:flex justify-between gap-[32px] items-center h-full">
          {dots.map((dot, index) => {
            return (
              <button
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`rounded-full h-[10px] w-[10px] bg-black ${
                  index === currentIndex ? 'bg-opacity-80' : 'bg-opacity-30'
                }`}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDataType } from "@/constants/projects";

const ProjectDetails = ({
  currentProject,
}: {
  currentProject: ProjectDataType;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentXIndex, setCurrentXIndex] = useState(0);
  const [dots, setDots] = useState([]);

  const cardLength = currentProject.images.length;

  useEffect(() => {
    const pageCounter = async (counter: number) => {
      const script = [];
      for (let i = 0; i < counter; i++) {
        script.push(i);
      }
    };
    if (currentProject.images) {
      pageCounter(currentProject.images.length);
    }
  }, [currentProject.images]);

  return (
    <div className="fixed flex h-full max-h-[100vh] w-full flex-col-reverse gap-[64px] overflow-x-auto overflow-y-clip px-[16px] pb-[128px] tablet:max-w-[768px] laptop:mx-auto laptop:max-h-none laptop:max-w-[1440px] laptop:flex-row laptop:gap-[32px] laptop:overflow-y-auto laptop:px-[64px] laptop:py-[0px]">
      <div className="sticky top-[380px] flex h-full max-h-[210px] min-h-[210px] w-full flex-col items-center justify-start gap-[32px] self-center tablet:w-full laptop:max-h-[290px] laptop:min-h-[290px] laptop:items-start laptop:justify-between laptop:self-auto">
        <div className="flex flex-col gap-[8px] text-center laptop:text-start">
          <div className="h4">{currentProject.projectName}</div>
          <div className="p2">{currentProject.yearsWorked}</div>
        </div>
        <div className="h6 min-h-[80px] w-1/2 flex-1 text-center tablet:w-1/2 laptop:h-[210px] laptop:w-2/3 laptop:text-start">
          {currentProject.description[currentIndex]}
        </div>
        <Link
          className="h6 w-1/2 rounded-[4px] bg-black px-[8px] py-[8px] text-center text-white tablet:w-1/2 laptop:w-1/3"
          href={currentProject?.url}
        >
          View Prototype
        </Link>
        <div className="flex h-full max-h-[248px] w-1/3 items-center justify-between gap-[32px] pt-[32px] laptop:hidden">
          {dots.map((dot, index) => {
            return (
              <button
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`h-[10px] w-[10px] rounded-full bg-black ${
                  index === currentXIndex ? "bg-opacity-80" : "bg-opacity-30"
                }`}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="sticky top-[100px] flex max-h-[320px] flex-col items-center justify-center tablet:justify-center laptop:left-1/2 laptop:top-[340px] laptop:w-full laptop:flex-row laptop:gap-[128px]">
        <Image
          src={currentProject.images[currentIndex]}
          width={400}
          height={320}
          alt={currentProject.projectName}
          className="hidden select-none laptop:flex"
        />
        <Image
          src={currentProject.images[currentXIndex]}
          width={400}
          height={320}
          alt={currentProject.projectName}
          className="flex select-none laptop:hidden"
        />
        <div className="hidden h-full max-h-[248px] flex-col items-center justify-between gap-[32px] laptop:flex">
          {dots.map((dot, index) => {
            return (
              <button
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`h-[10px] w-[10px] rounded-full bg-black ${
                  index === currentIndex ? "bg-opacity-80" : "bg-opacity-30"
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

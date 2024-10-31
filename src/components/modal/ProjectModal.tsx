"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDataType } from "@/constants/projects";

const ProjectModal = ({
  currentProject,
}: {
  currentProject: ProjectDataType;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardLength = currentProject.images.length;
  const [dots, setDots] = useState(new Array(cardLength).fill(""));
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

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cardLength - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    return;
  };
  const handleRightClick = () => {
    if (currentIndex === cardLength - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    return;
  };

  return (
    <div className="flex h-full w-full flex-col items-center gap-[16px] py-[32px]">
      <div className="flex w-full flex-col items-center gap-[16px] py-[8px]">
        <div className="flex w-full items-center">
          <button
            onClick={handleLeftClick}
            // className="flex items-center z-10 justify-center tablet:w-[40px] tablet:h-[40px] h-full w-full"
            className="flex items-center justify-center tablet:h-[40px] tablet:w-[40px]"
          >
            <Image
              src={"/etc/leftArrow.png"}
              width={40}
              height={40}
              alt="left"
              className="h-full w-full hover:opacity-80 active:opacity-60"
            />
          </button>
          <Image
            src={currentProject.images[currentIndex]}
            width={322}
            height={202}
            alt={currentProject.projectName}
            placeholder="blur"
            blurDataURL={currentProject.blurHash[currentIndex]}
            className="select-none object-contain"
          />
          <button
            onClick={handleRightClick}
            // className="flex items-center justify-center tablet:w-[40px] tablet:h-[40px] h-full w-full"
            className="flex items-center justify-center tablet:h-[40px] tablet:w-[40px]"
          >
            <Image
              src={"/etc/rightArrow.png"}
              width={40}
              height={40}
              alt="right"
              className="hover:opacity-80 active:opacity-60"
            />
          </button>
        </div>
        <div className="flex h-full items-center justify-between gap-[8px]">
          {dots.map((dot, index) => {
            return (
              <button
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`h-[8px] w-[8px] rounded-full bg-black ${
                  index === currentIndex ? "bg-opacity-80" : "bg-opacity-30"
                }`}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[8px] self-center text-center">
        <div className="flex flex-col items-center justify-center gap-[8px]">
          <h4 className="">{currentProject.projectName}</h4>
          <div className="p2">{currentProject.yearsWorked}</div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-[16px]">
          <div className="p1 text-center">{currentProject.description[0]}</div>
          <Link
            className="max-h-[40px] rounded-[4px] bg-black px-[16px] py-[8px] text-center text-white"
            href={currentProject?.url}
          >
            <h6>View More ➔</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

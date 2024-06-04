'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectDataType } from '@/constants/projects';

const ProjectModal = ({
  currentProject,
}: {
  currentProject: ProjectDataType;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardLength = currentProject.images.length;
  const [dots, setDots] = useState(new Array(cardLength).fill(''));
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
    <div className="flex flex-col h-full w-full items-center gap-[16px] p-[32px]">
      <div className="flex flex-col gap-[16px] items-center w-full py-[8px]">
        <div className="flex items-center ">
          <button
            onClick={handleLeftClick}
            className="flex items-center justify-center w-[40px] h-[40px]"
          >
            <Image
              src={'/etc/leftArrow.png'}
              width={40}
              height={40}
              alt="left"
              className="h-[40px] w-[40px] "
            />
          </button>
          <Image
            src={currentProject.images[currentIndex]}
            width={336}
            height={160}
            alt={currentProject.projectName}
            className="select-none object-contain"
          />
          <button
            onClick={handleRightClick}
            className="flex items-center justify-center w-[40px] h-[40px] "
          >
            <Image
              src={'/etc/rightArrow.png'}
              width={40}
              height={40}
              alt="right"
              className="h-[40px] w-[40px]"
            />
          </button>
        </div>
        <div className="flex justify-between items-center gap-[8px]">
          {dots.map((dot, index) => {
            return (
              <button
                onClick={() => setCurrentIndex(index)}
                key={index}
                className={`rounded-full h-[8px] w-[8px] bg-black ${
                  index === currentIndex ? 'bg-opacity-80' : 'bg-opacity-30'
                }`}
              ></button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[16px] text-center items-center ">
        <div className="flex flex-col gap-[8px] text-center">
          <div className="h4">{currentProject.projectName}</div>
          <div className="p2">{currentProject.yearsWorked}</div>
        </div>
        <div className="flex flex-col gap-[16px] w-full items-center">
          <div className="p1 text-center ">{currentProject.description[0]}</div>
          <Link
            className="bg-black text-white px-[16px] py-[8px] text-center rounded-[4px] max-h-[40px] h6"
            href={currentProject?.url}
          >
            View More ➔
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

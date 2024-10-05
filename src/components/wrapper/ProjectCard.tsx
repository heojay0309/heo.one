"use client";
import Image from "next/image";
import Card from "@/components/wrapper/Card";
import CustomScrollbar from "./CustomScrollbar";
import { projectData, IProjectData } from "@/constants/projects";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ name }: { name: keyof IProjectData }) => {
  return (
    <Card
      type={"description"}
      className="relative items-start justify-start overflow-y-scroll"
    >
      <CustomScrollbar>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex h-full flex-col items-center gap-[16px] pt-[32px] tablet:pt-[0px]">
              <Image
                src={`/projectSlides/${name}.png`}
                alt={name}
                width={420}
                height={304}
                className="h-[169px] w-[240px] object-contain tablet:h-[304px] tablet:w-[420px]"
              />
              <span className="h3 tablet:leading-10 leading-8 self-start text-[24px] font-bold tracking-[.12em] text-white text-opacity-80 tablet:self-auto tablet:text-center tablet:text-[32px]">
                {name === "shineresumes"
                  ? "ShineResumes"
                  : name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            </div>
            <div className="flex flex-col gap-[32px] py-[16px]">
              <div className="flex flex-col gap-[8px]">
                <span className="h4 font-[700] tracking-[0.12em] text-white text-opacity-80">
                  Introduction
                </span>
                <div className="tablet:text-base tablet:leading-6 leading-4 text-sm h-full w-full font-normal tracking-wider text-white text-opacity-80 tablet:pl-[32px]">
                  {projectData[name].introduction}
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="h4 font-[700] tracking-[0.12em] text-white text-opacity-80">
                  Features and Functionality
                </span>
                <div className="tablet:text-base tablet:leading-6 leading-4 text-sm flex h-full w-full flex-col gap-[8px] font-normal tracking-wider text-white text-opacity-80 tablet:pl-[32px]">
                  {projectData[name].features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <span className="font-semibold text-white text-opacity-80">
                          {feature.title}:{" "}
                        </span>
                        {feature.description}
                      </li>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="h4 font-[700] tracking-[0.12em] text-white text-opacity-80">
                  Technologies Used
                </span>
                <div className="tablet:text-base tablet:leading-6 leading-4 text-sm h-full w-full font-normal tracking-wider text-white text-opacity-80 tablet:pl-[32px]">
                  {projectData[name].tech}
                </div>
              </div>
              {projectData[name].achievements && (
                <div className="flex flex-col gap-[8px]">
                  <span className="h4 font-[700] tracking-[0.12em] text-white text-opacity-80">
                    Achievements
                  </span>
                  <div className="tablet:text-base tablet:leading-6 leading-4 text-sm flex h-full w-full flex-col gap-[8px] font-normal tracking-wider text-white text-opacity-80 tablet:pl-[32px]">
                    {projectData[name].achievements?.map(
                      (achievement, index) => {
                        return (
                          <li key={index}>
                            <span className="font-semibold text-white text-opacity-80">
                              {achievement.title}:{" "}
                            </span>
                            {achievement.description}
                          </li>
                        );
                      },
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </CustomScrollbar>
    </Card>
  );
};

export default ProjectCard;

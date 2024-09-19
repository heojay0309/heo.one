'use client';
import Image from 'next/image';
import Card from '@/components/wrapper/Card';
import CustomScrollbar from './CustomScrollbar';
import { projectData, IProjectData } from '@/constants/projects';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ name }: { name: keyof IProjectData }) => {
  return (
    <Card type={'description'} className="relative">
      <CustomScrollbar>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-[16px] pt-[32px] tablet:pt-[0px]">
              <Image
                src={`/projectSlides/${name}.png`}
                alt={name}
                width={420}
                height={304}
                className="object-contain tablet:w-[420px] tablet:h-[304px] w-[240px] h-[169px]"
              />
              <span className="text-center text-white h3 font-bold tablet:leading-10 tablet:text-[32px] leading-8 text-[24px] text-opacity-80 tracking-[.12em]">
                {name === 'shineresumes'
                  ? 'ShineResumes'
                  : name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            </div>
            <div className="flex flex-col gap-[32px] py-[16px]">
              <div className="flex flex-col gap-[8px]">
                <span className="font-[700] h4 tracking-[0.12em] text-white text-opacity-80">
                  Introduction
                </span>
                <div className="font-normal tablet:pl-[32px] text-white h-full w-full text-opacity-80 tablet:text-base tablet:leading-6 leading-4 text-sm tracking-wider">
                  {projectData[name].introduction}
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-[700] h4 tracking-[0.12em] text-white text-opacity-80">
                  Features and Functionality
                </span>
                <div className="font-normal tablet:pl-[32px] text-white h-full w-full text-opacity-80 tablet:text-base tablet:leading-6 leading-4 text-sm tracking-wider  gap-[8px] flex flex-col">
                  {projectData[name].features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <span className="font-semibold text-opacity-80 text-white">
                          {feature.title}:{' '}
                        </span>
                        {feature.description}
                      </li>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <span className="font-[700] h4 tracking-[0.12em] text-white text-opacity-80">
                  Technologies Used
                </span>
                <div className="font-normal tablet:pl-[32px] text-white h-full w-full text-opacity-80 tablet:text-base tablet:leading-6 leading-4 text-sm tracking-wider">
                  {projectData[name].tech}
                </div>
              </div>
              {projectData[name].achievements && (
                <div className="flex flex-col gap-[8px]">
                  <span className="font-[700] h4 tracking-[0.12em] text-white text-opacity-80">
                    Achievements
                  </span>
                  <div className="font-normal tablet:pl-[32px] text-white h-full w-full text-opacity-80 tablet:text-base tablet:leading-6 leading-4 text-sm tracking-wider gap-[8px] flex flex-col">
                    {projectData[name].achievements?.map(
                      (achievement, index) => {
                        return (
                          <li key={index}>
                            <span className="font-semibold text-opacity-80 text-white">
                              {achievement.title}:{' '}
                            </span>
                            {achievement.description}
                          </li>
                        );
                      }
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

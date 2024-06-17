import { projectData } from '@/constants/projects';
import Image from 'next/image';
import ProjectDetails from '@/components/ProjectInfo/ProjectDetails';
import Card from '@/components/wrapper/Card';
import ProjectWrapper from '@/components/wrapper/ProjectWrapper';

type ParamsType = {
  project: 'Preps' | 'Giverr' | 'Mustadd' | 'Mellow';
};

interface IProjectPageProps {
  params: ParamsType;
}

const ProjectPage = ({ params }: IProjectPageProps) => {
  const { project } = params;
  const currentProject = projectData[`${project}`];

  return (
    // <div className="grid laptop:grid-flow-col grid-flow-row laptop:grid-rows-4 laptop:grid-cols-6 tablet:grid-rows-5 tablet:grid-cols-4 grid-cols-4 tablet:gap-[32px] gap-[16px] h-full">
    <div className="grid laptop:grid-flow-col grid-flow-row laptop:grid-rows-4 laptop:grid-cols-6 tablet:grid-rows-5 tablet:grid-cols-4 grid-cols-4 tablet:gap-[32px] gap-[16px] h-full">
      {/* <div className="laptop:row-span-4 laptop:col-span-2 row-span-1 col-span-4"> */}
      {/* <div className="flex flex-col laptop:gap-[32px] gap-[16px] col-span-2 row-span-full"> */}
      <ProjectWrapper
        label={'Preps'}
        order={1}
        orderMobile={15}
        orderTablet={3}
        start={1}
      />
      <ProjectWrapper
        label={'Mellow'}
        order={2}
        orderMobile={19}
        orderTablet={4}
        start={2}
      />
      <ProjectWrapper
        label={'Mustadd'}
        order={3}
        orderMobile={23}
        orderTablet={3}
        start={3}
      />
      <ProjectWrapper
        label={'Giverr'}
        order={4}
        orderMobile={27}
        orderTablet={4}
        start={4}
      />
      <Card type={'description'}>
        <div className="flex scroll-smooth relative flex-row h-full w-full pr-[16px] overflow-y-scroll  gap-[16px]">
          <div className="flex flex-col  items-center h-full  pr-[16px] gap-[16px]">
            <div className="flex flex-col items-center gap-[16px]">
              <Image
                src={`/projectSlides/${'Preps'}.png`}
                alt={'preps'}
                width={420}
                height={304}
                className=" object-contain tablet:w-[420px] tablet:h-[304px] w-[240px] h-[169px]"
              />
              <span className="text-center text-white font-bold tablet:leading-[40px] tablet:text-[32px] leading-[32px] text-[24px] text-opacity-80 tracking-[0.12em]">
                Preps
              </span>
            </div>
            <div className="font-normal text-white h-full w-full text-opacity-80 tablet:text-[16px] tablet:leading-[24px] leading-[16px] text-[14px]  tracking-[0.12em]">
              Hello,
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris.
            </div>
          </div>
          <div className="flex flex-col bg-red-300 overflow-visible relative h-full gap-[16px]  max-w-[40px] w-full justify-start items-center">
            <Image
              src={'/etc/close.svg'}
              alt={'close'}
              width={40}
              height={40}
              className="absolute top-0"
            />
            <div className="sticky custom-scrollbar group top-[56px] bg-red-300">
              <div
                className={` custom-scrollbar-thumb will-change-scroll`}
              ></div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectPage;
{
  /* <div className="flex flex-col tablet:justify-around bg-blue-300 laptop:justify-center h-full px-[64px] w-full laptop:max-w-[1440px] mx-auto">
      <div className="self-center h2 bg-yellow-300 w-full text-center py-[16px]">
        {currentProject.projectName}
      </div>
      <div className="flex justify-center  gap-[64px] bg-red-600 py-[32px]">
        <div className="border rounded-full h-[40px] w-[40px] self-center">
          <Image
            src={'/etc/leftArrow.png'}
            alt={'left'}
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col bg-red-300 tablet:justify-around py-[32px] laptop:justify-center gap-[128px] tablet:gap-[64px] laptop:gap-[128px] w-full laptop:max-w-[1440px] mx-auto flex-1 min-h-[90vh]">
          <ProjectDetails currentProject={currentProject} />
        </div>
        <div className="border rounded-full h-[40px] w-[40px] self-center">
          <Image
            src={'/etc/rightArrow.png'}
            alt={'right'}
            width={40}
            height={40}
          />
        </div>
      </div>
    </div> */
}

import { projectData } from '@/constants/projects';
import Image from 'next/image';
import ProjectDetails from '@/components/ProjectInfo/ProjectDetails';

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
    <div className="flex flex-col tablet:justify-around bg-blue-300 laptop:justify-center h-full px-[64px] w-full laptop:max-w-[1440px] mx-auto">
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
    </div>
  );
};

export default ProjectPage;

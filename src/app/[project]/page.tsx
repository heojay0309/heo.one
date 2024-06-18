import { projectData } from '@/constants/projects';
import Image from 'next/image';
import ProjectDetails from '@/components/ProjectInfo/ProjectDetails';
import Card from '@/components/wrapper/Card';
import ProjectWrapper from '@/components/wrapper/ProjectWrapper';
import ProjectCard from '@/components/wrapper/ProjectCard';

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
    <div className="grid laptop:grid-flow-col grid-flow-row laptop:grid-rows-4 laptop:grid-cols-6 tablet:grid-rows-5 tablet:grid-cols-4 grid-cols-4 tablet:gap-[32px] gap-[16px] h-full">
      <ProjectWrapper
        label={'Preps'}
        order={1}
        orderMobile={15}
        orderTablet={3}
        start={1}
        src="/projectIcons/project_Preps.svg"
        mobileSrc="/projectSlides/Preps.png"
      />
      <ProjectWrapper
        label={'Mellow'}
        order={2}
        orderMobile={19}
        orderTablet={4}
        start={2}
        src="/projectIcons/project_Mellow.svg"
        mobileSrc="/projectSlides/Mellow.png"
      />
      <ProjectWrapper
        label={'Mustadd'}
        order={3}
        orderMobile={23}
        orderTablet={3}
        start={3}
        src="/projectIcons/project_Mustadd.svg"
        mobileSrc="/projectSlides/Mustadd.png"
      />
      <ProjectWrapper
        label={'Giverr'}
        order={4}
        orderMobile={27}
        orderTablet={4}
        start={4}
        src="/projectIcons/project_Giverr.svg"
        mobileSrc="/projectSlides/Giverr.png"
      />
      <ProjectCard name={project} />
    </div>
  );
};

export default ProjectPage;

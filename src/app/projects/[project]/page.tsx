import ProjectDetails from '@/components/ProjectInfo/ProjectDetails';
import { projectData } from '@/constants/projects';

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
    <div className="h-full w-full scroll-container-horizontal max-h-screen mx-auto laptop:max-w-[1440px] laptop:max-h-none scroll-container laptop:overscroll-y-auto overscroll-y-none">
      <ProjectDetails currentProject={currentProject} />
    </div>
  );
};

export default ProjectPage;

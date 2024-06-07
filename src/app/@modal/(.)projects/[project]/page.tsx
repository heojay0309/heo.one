import ProjectModal from '@/components/modal/ProjectModal';
import { projectData } from '@/constants/projects';
import { Modal } from './modal';
import Image from 'next/image';
type ParamsType = {
  project: 'Preps' | 'Giverr' | 'Mustadd' | 'Mellow';
};
interface IProjectPageProps {
  params: ParamsType;
}
const ProjectModalPage = ({ params }: IProjectPageProps) => {
  const { project } = params;
  const currentProject = projectData[`${project}`];

  return (
    <Modal>
      <ProjectModal currentProject={currentProject} />
    </Modal>
  );
};
export default ProjectModalPage;

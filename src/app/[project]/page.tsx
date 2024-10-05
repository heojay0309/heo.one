import ProjectWrapper from "@/components/wrapper/ProjectWrapper";
import ProjectCard from "@/components/wrapper/ProjectCard";

type ParamsType = {
  project: "Preps" | "Giverr" | "Mustadd" | "ShineResumes";
};

type CurrentProjectType = "preps" | "giverr" | "mustadd" | "shineresumes";

interface IProjectPageProps {
  params: ParamsType;
}

const ProjectPage = ({ params }: IProjectPageProps) => {
  const { project } = params;
  const currentProject = project.toLowerCase() as CurrentProjectType;

  return (
    <div className="flex h-full w-full flex-col gap-[16px] px-[32px] pb-[16px] tablet:gap-[32px] tablet:px-[32px] tablet:pb-[32px] laptop:flex-row laptop:px-[32px] laptop:pb-[32px]">
      <div className="flex w-full justify-between gap-[32px] laptop:flex-col">
        <ProjectWrapper
          label={"Preps"}
          order={1}
          orderMobile={15}
          orderTablet={3}
          start={1}
          src="/projectIcons/project_preps.svg"
          mobileSrc="/projectSlides/preps.png"
          hideArrow
        />
        <ProjectWrapper
          label={"ShineResumes"}
          order={2}
          orderMobile={19}
          orderTablet={4}
          start={2}
          src="/projectIcons/project_shine.svg"
          mobileSrc="/projectSlides/shineresumes.png"
          hideArrow
        />
        <ProjectWrapper
          label={"Mustadd"}
          order={3}
          orderMobile={23}
          orderTablet={3}
          start={3}
          src="/projectIcons/project_mustadd.svg"
          mobileSrc="/projectSlides/mustadd.png"
          hideArrow
        />
        <ProjectWrapper
          label={"Giverr"}
          order={4}
          orderMobile={27}
          orderTablet={4}
          start={4}
          src="/projectIcons/project_giverr.svg"
          mobileSrc="/projectSlides/giverr.png"
          hideArrow
        />
      </div>
      <ProjectCard name={currentProject} />
    </div>
  );
};

export default ProjectPage;

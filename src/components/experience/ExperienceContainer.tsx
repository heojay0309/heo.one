import { IWork } from "@/types/index";

const ExperienceContainer = ({ work, children }: IWork) => {
  return (
    <div
      id={work}
      className="flex snap-end snap-always flex-col gap-[64px] tablet:pr-[64px] laptop:px-[64px]"
    >
      <h1 className="text-shadow text-[40px] font-bold leading-[60px] drop-shadow-lg">
        {work === "experiences" ? "Experiences" : "Projects"}
      </h1>
      <div className="flex flex-col gap-[64px] self-center">{children}</div>
    </div>
  );
};

export default ExperienceContainer;

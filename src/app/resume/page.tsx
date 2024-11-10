import ResumeComponent from "@/components/resume/Resume";

const ResumePage = () => {
  const resumeUrl = process.env.RESUME_URL || null;
  const lastUpdated = "11/09/2024";

  return (
    <div className="flex w-full flex-col gap-[16px] px-[16px] pt-[32px] tablet:gap-[32px] tablet:px-[32px] tablet:pt-[32px]">
      <div className="flex-shrink-0">
        <div className="text-[16px] font-normal italic leading-[24px] text-white text-opacity-80 tablet:text-[24px] tablet:leading-[36px]">
          Last Updated: <span>{lastUpdated}</span>
        </div>
      </div>
      <ResumeComponent resumeUrl={resumeUrl} />
    </div>
  );
};

export default ResumePage;

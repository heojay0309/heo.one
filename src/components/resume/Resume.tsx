const ResumeComponent = ({ resumeUrl }: { resumeUrl: string | null }) => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center pt-[32px] tablet:pt-[0px]">
      {resumeUrl ? (
        <iframe
          src={resumeUrl}
          className="h-[50vh] w-full border-none tablet:h-[73vh]"
          title={"Jay Resume Preview"}
        />
      ) : (
        <p className="flex h-full items-center justify-center p-[16px] text-white text-opacity-40 tablet:p-[32px]">
          Resume preview is unavailable.
        </p>
      )}
    </div>
  );
};

export default ResumeComponent;

const ResumeComponent = ({ resumeUrl }: { resumeUrl: string | null }) => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center pt-[32px] tablet:pt-[0px]">
      {resumeUrl ? (
        <iframe
          src={resumeUrl}
          className="h-[65vh] w-[100%] border-none tablet:h-[75vh] tablet:w-[75%]"
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

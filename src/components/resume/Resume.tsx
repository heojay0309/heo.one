const ResumeComponent = () => {
  return (
    <div className="flex h-screen w-full justify-center gap-[10px] rounded-[4px] bg-[#0000001A]">
      <iframe
        src={process.env.RESUME_URL}
        className="h-full w-full"
        style={{
          border: "none",
        }}
        title={"Jay Resume Preview"}
      />
    </div>
  );
};

export default ResumeComponent;

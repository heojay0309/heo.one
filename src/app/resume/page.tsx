import Navbar from "@/components/NavSection/Nav";
import ResumeComponent from "@/components/resume/Resume";

const ResumePage = () => {
  return (
    <div className="h-full px-[64px]">
      <Navbar />

      <ResumeComponent />
      <Navbar />
    </div>
  );
};

export default ResumePage;

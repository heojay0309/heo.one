import Intro from '@/components/Introduction/Intro';
import ProjectSlide from '@/components/Introduction/project/ProjectSlide';
export default function Home() {
  return (
    <div className="flex flex-col justify-center tablet:gap-[64px] max-w-[1440px] w-full  gap-[32px] bg-white">
      <Intro />
      <ProjectSlide />
    </div>
  );
}

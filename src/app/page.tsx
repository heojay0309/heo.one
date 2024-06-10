import Intro from '@/components/Introduction/Intro';
import ProjectSlide from '@/components/Introduction/project/ProjectSlide';
export default function Home() {
  return (
    <div className="flex flex-col justify-start w-full gap-[32px] tablet:px-[64px] px-[32px] tablet:gap-[16px]">
      <Intro />
      <ProjectSlide />
    </div>
  );
}

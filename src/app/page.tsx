import Intro from '@/components/Introduction/Intro';
import ProjectSlide from '@/components/Introduction/project/ProjectSlide';
export default function Home() {
  return (
    <div className="flex py-[64px] flex-col tablet:justify-around laptop:justify-center gap-[128px] tablet:gap-[64px] laptop:gap-[128px] w-full laptop:max-w-[1440px] mx-auto flex-1 max-h-screen">
      <Intro />
      <ProjectSlide />
    </div>
  );
}

import Intro from '@/components/Introduction/Intro';
import ProjectSlide from '@/components/Introduction/project/ProjectSlide';
import Navbar from '@/components/NavSection/Nav';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col laptop:justify-center gap-[64px] w-full laptop:max-w-[1440px] mx-auto flex-1 min-h-[90vh]">
      <Intro />
      <ProjectSlide />
    </div>
  );
}

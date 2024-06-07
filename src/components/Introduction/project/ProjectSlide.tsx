import { projectImages } from '@/constants/projects';
import { InfiniteMovingCards } from '@/components/Introduction/ui/infinite-moving-cards';

const ProjectSlide = () => {
  return (
    <div className="flex flex-col h-full items-center justify-start relative overflow-hidden py-[32px] laptop:py-[64px] bg-black">
      <InfiniteMovingCards
        items={projectImages}
        className="bg-inherit"
        direction="left"
        speed="slow"
      />
    </div>
  );
};

export default ProjectSlide;

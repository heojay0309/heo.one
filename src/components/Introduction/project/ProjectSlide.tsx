import { projectImages } from '@/constants/projects';
import { InfiniteMovingCards } from '@/components/Introduction/ui/infinite-moving-cards';

const ProjectSlide = () => {
  return (
    <div className="flex flex-col h-full justify-start relative overflow-hidden laptop:py-[32px]">
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

import { projectImages } from '@/constants/projects';
import { InfiniteMovingCards } from '@/components/Introduction/ui/infinite-moving-cards';

const ProjectSlide = () => {
  return (
    <div className="flex flex-col items-center justify-start relative ">
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

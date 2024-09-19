import Card from './wrapper/Card';

interface TimelineItem {
  month: string;
  year: string;
  title: string;
}

interface Timeline {
  [time: string]: TimelineItem;
}

const WorkTimeline = ({
  hidden,
  mobileHidden,
}: {
  hidden?: boolean;
  mobileHidden?: boolean;
}) => {
  const timeline: Timeline = {
    ShineResumes: {
      month: 'Jul.',
      year: '2024',
      title: 'Software Developer',
    },
    Preps: {
      month: 'Dec.',
      year: '2023',
      title: 'Lead Developer',
    },
    Mustadd: {
      month: 'Aug.',
      year: '2022',
      title: 'Frontend Developer',
    },
  };
  return (
    <Card
      order={2}
      orderMobile={13}
      orderTablet={13}
      type="timeline"
      className={`${
        hidden
          ? 'laptop:hidden flex laptop:row-span-4 tablet:row-span-2 row-span-4'
          : ''
      } ${mobileHidden ? 'hidden laptop:flex' : ''}`}
    >
      <div className="flex flex-col laptop:p-[32px] p-[16px] justify-center h-full">
        {Object.keys(timeline).map((time, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col relative justify-center items-start h-full"
            >
              <div className="flex justify-evenly w-full gap-[16px] p-[8px] items-center h-full ">
                <div className="flex flex-col opacity-80 justify-center h-[50%]">
                  <div className="text-[8px] leading-[12px]">
                    {timeline[time].month}
                  </div>
                  <div className="text-[12px] leading-[16px]">
                    {' '}
                    {timeline[time].year}
                  </div>
                </div>
                <div className="p-[1px] flex flex-col items-center justify-center h-[50%]">
                  <div className="w-[16px] h-[16px]  rounded-full border-white border flex items-center justify-center flex-shrink-0">
                    <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40 "></div>
                    <div
                      className={`${
                        index !== Object.keys(timeline).length - 1
                          ? 'visible'
                          : 'invisible'
                      }  absolute h-full tablet:top-[44px] laptop:top-[64px] laptop:py-[34px] py-[32px] tablet:py-[24px] top-[64px]`}
                    >
                      <div className="border-white border-l border-opacity-10 h-full " />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center flex-wrap items-start w-full gap-[4px] h-[50%]">
                  <div className="text-[12px] leading-[16px] text-wrap">
                    {time}
                  </div>
                  <span className=" text-wrap text-[8px] leading-[12px]">
                    {timeline[time].title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
export default WorkTimeline;

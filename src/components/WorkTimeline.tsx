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
      <div className="flex flex-col  gap-[32px] laptop:p-[32px] p-[8px] justify-center h-full">
        {Object.keys(timeline).map((time, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-col relative justify-center items-start p-[4px]"
            >
              <div className="flex justify-between gap-[16px] items-center">
                <div className="flex flex-col opacity-80">
                  <div className="text-[8px] leading-[12px]">
                    {timeline[time].month}
                  </div>
                  <div className="text-[12px] leading-[16px]">
                    {' '}
                    {timeline[time].year}
                  </div>
                </div>
                <div className="p-[1px] relative">
                  <div className="w-[16px] h-[16px] rounded-full border-white border flex items-center justify-center">
                    <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
                    <div
                      className={`${
                        index !== Object.keys(timeline).length - 1
                          ? ''
                          : 'hidden'
                      } h-[32px] flex items-center justify-center absolute top-[32px]`}
                    >
                      <div className="h-[16px] border-white border-l border-opacity-10" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-wrap p-1">
                  <div className="text-[12px] leading-[16px]">{time}</div>
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

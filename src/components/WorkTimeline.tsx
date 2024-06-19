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
    Preps: {
      month: 'Dec.',
      year: '2023',
      title: 'Software Engineer',
    },
    Giverr: {
      month: 'Aug.',
      year: '2023',
      title: 'Frontend Engineer',
    },
    Mustadd: {
      month: 'Aug.',
      year: '2022',
      title: 'Frontend Engineer',
    },
    Reactrix: {
      month: 'Jan.',
      year: '2022',
      title: 'Software Engineer',
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
      <div className="flex flex-col tablet:gap-[8px] gap-[8px] justify-center h-full">
        {Object.keys(timeline).map((time, index) => {
          return (
            <div
              key={index}
              className="flex flex-col relative justify-center items-center"
            >
              <div className="flex justify-between gap-[11px] items-center">
                <div className="flex flex-col opacity-80">
                  <div className="text-[8px] leading-[12px]">
                    {timeline[time].month}
                  </div>
                  <div className="text-[12px] leading-[16px]">
                    {' '}
                    {timeline[time].year}
                  </div>
                </div>
                <div className="w-[16px] h-[16px] rounded-full border-white border flex  relative items-center justify-center">
                  <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
                </div>
                <div className="text-[12px] leading-[16px]">
                  {time} <br />
                  <span className=" whitespace-nowrap text-[8px] leading-[12px]">
                    {timeline[time].title}
                  </span>
                </div>
              </div>
              <div
                className={`${
                  index !== Object.keys(timeline).length - 1
                    ? 'border-l'
                    : 'hidden'
                } w-[64px] pl-[32px] tablet:h-[16px] h-[16px] border-white border-opacity-10 `}
              ></div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
export default WorkTimeline;

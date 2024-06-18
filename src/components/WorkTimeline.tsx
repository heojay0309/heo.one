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
      <div className="flex flex-col justify-center gap-[16px] h-full py-[32px]">
        {Object.keys(timeline).map((time, index) => {
          return (
            <>
              <div
                className="flex justify-between gap-[11px] items-center relative"
                key={index}
              >
                <div className="flex flex-col opacity-80 ">
                  <div className="text-[8px] leading-[12px]">
                    {timeline[time].month}
                  </div>
                  <div className="text-[12px] leading-[16px]">
                    {' '}
                    {timeline[time].year}
                  </div>
                </div>
                <div className="w-[16px] h-[16px] rounded-full border-white border flex relative items-center justify-center">
                  <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
                </div>
                <div className="text-[12px] leading-[16px] ">
                  {time} <br />
                  <span className=" whitespace-nowrap text-[8px] leading-[12px]">
                    {timeline[time].title}
                  </span>
                </div>
              </div>
              {index !== Object.keys(timeline).length - 1 && (
                <div className="border-l h-[16px] self-center border-white border-opacity-10"></div>
              )}
            </>
          );
        })}
      </div>
    </Card>
  );
};
export default WorkTimeline;

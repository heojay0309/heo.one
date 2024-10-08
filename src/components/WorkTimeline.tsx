import Card from "./wrapper/Card";

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
      month: "Jul.",
      year: "2024",
      title: "Software Developer",
    },
    Preps: {
      month: "Dec.",
      year: "2023",
      title: "Frontend Developer",
    },
    Mustadd: {
      month: "Aug.",
      year: "2022",
      title: "Frontend Developer",
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
          ? "col-span-2 row-span-4 flex tablet:row-span-2 laptop:col-span-1 laptop:row-span-2 laptop:hidden"
          : ""
      } ${mobileHidden ? "hidden laptop:col-span-1 laptop:row-span-2 laptop:row-start-2 laptop:flex" : ""}`}
    >
      <div className="flex h-full flex-col justify-center p-[16px] laptop:p-[32px]">
        {Object.keys(timeline).map((time, index) => {
          return (
            <div
              key={index}
              className="relative flex h-full w-full flex-col items-start justify-center"
            >
              <div className="flex h-full w-full items-center justify-evenly gap-[16px] p-[8px]">
                <div className="flex h-[50%] flex-col justify-center opacity-80">
                  <div className="text-[8px] leading-[12px]">
                    {timeline[time].month}
                  </div>
                  <div className="text-[12px] leading-[16px]">
                    {" "}
                    {timeline[time].year}
                  </div>
                </div>
                <div className="flex h-[50%] flex-col items-center justify-center p-[1px]">
                  <div className="flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center rounded-full border border-white">
                    <div className="h-[12px] w-[12px] rounded-full bg-white opacity-40"></div>
                    <div
                      className={`${
                        index !== Object.keys(timeline).length - 1
                          ? "visible"
                          : "invisible"
                      } absolute top-[64px] h-full py-[32px] tablet:top-[44px] tablet:py-[24px] laptop:top-[64px] laptop:py-[34px]`}
                    >
                      <div className="h-full border-l border-white border-opacity-10" />
                    </div>
                  </div>
                </div>
                <div className="flex h-[50%] w-full flex-col items-start justify-center gap-[4px]">
                  <div className="hidden text-wrap text-[12px] leading-[16px] tablet:block">
                    {time}
                  </div>
                  <div className="block text-wrap text-[12px] leading-[16px] tablet:hidden">
                    {time === "ShineResumes" ? "Shine" : time}
                  </div>
                  <span className="text-wrap text-[8px] leading-[12px]">
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

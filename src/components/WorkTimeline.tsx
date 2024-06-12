import Card from './wrapper/Card';
const WorkTimeline = ({
  hidden,
  mobileHidden,
}: {
  hidden?: boolean;
  mobileHidden?: boolean;
}) => {
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
      <div className="flex flex-col gap-[4px] items-center">
        <div className="flex justify-between gap-[11px] items-center">
          <div className="flex flex-col opacity-80">
            <div className="text-[8px] leading-[12px]">MONTH</div>
            <div className="text-[12px] leading-[16px]">YEAR</div>
          </div>
          <div className="w-[16px] h-[16px] rounded-full border-white border flex items-center justify-center">
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
          </div>
          <div className="text-[16px] leading-[24px]">Title</div>
        </div>
        <div className="border-l h-[16px] pr-[4px] self-center border-white border-opacity-10"></div>
        <div className="flex justify-between gap-[11px] items-center">
          <div className="flex flex-col opacity-80">
            <div className="text-[8px] leading-[12px]">MONTH</div>
            <div className="text-[12px] leading-[16px]">YEAR</div>
          </div>
          <div className="w-[16px] h-[16px] rounded-full border-white border flex items-center justify-center">
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
          </div>
          <div className="text-[16px] leading-[24px]">Title</div>
        </div>
        <div className="border-l h-[16px]  pr-[4px] self-center border-white border-opacity-10"></div>
        <div className="flex justify-between gap-[11px] items-center">
          <div className="flex flex-col opacity-80">
            <div className="text-[8px] leading-[12px]">MONTH</div>
            <div className="text-[12px] leading-[16px]">YEAR</div>
          </div>
          <div className="w-[16px] h-[16px] rounded-full border-white border flex items-center justify-center">
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
          </div>
          <div className="text-[16px] leading-[24px]">Title</div>
        </div>
        <div className="border-l h-[16px]  pr-[4px] self-center border-white border-opacity-10"></div>
        <div className="flex justify-between gap-[11px] items-center">
          <div className="flex flex-col opacity-80">
            <div className="text-[8px] leading-[12px]">MONTH</div>
            <div className="text-[12px] leading-[16px]">YEAR</div>
          </div>
          <div className="w-[16px] h-[16px] rounded-full border-white border flex items-center justify-center">
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
          </div>
          <div className="text-[16px] leading-[24px]">Title</div>
        </div>
        <div className="border-l h-[16px]  pr-[4px] self-center border-white border-opacity-10"></div>
        <div className="flex justify-between gap-[11px] items-center">
          <div className="flex flex-col opacity-80">
            <div className="text-[8px] leading-[12px]">MONTH</div>
            <div className="text-[12px] leading-[16px]">YEAR</div>
          </div>
          <div className="w-[16px] h-[16px] rounded-full border-white border flex items-center justify-center">
            <div className="w-[12px] h-[12px] rounded-full bg-white opacity-40"></div>
          </div>
          <div className="text-[16px] leading-[24px]">Title</div>
        </div>
      </div>
    </Card>
  );
};
export default WorkTimeline;

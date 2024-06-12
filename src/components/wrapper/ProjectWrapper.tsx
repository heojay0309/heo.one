import Image from 'next/image';
import Card from './Card';

const ProjectWrapper = ({
  label,
  order,
  orderMobile,
  orderTablet,
}: {
  label: string;
  order: number;
  orderMobile: number;
  orderTablet: number;
}) => {
  return (
    <div
      className={`laptop:col-start-5 tablet:gap-[32px] gap-[16px] tablet:flex-col laptop:flex-row tablet:flex laptop:col-span-2 laptop:grid-flow-col tablet:col-span-1 col-span-2  laptop:row-span-1 `}
    >
      <Card
        order={order}
        orderMobile={orderMobile}
        orderTablet={orderTablet}
        type="projects"
        className="w-full h-full"
      >
        <div className="w-full h-full flex laptop:flex-row tablet:flex-col justify-center self-center gap-[16px] items-center laptop:p-[32px] p-[16px]  relative">
          <Image
            src={`/projectSlides/${label}.png`}
            alt={label}
            height={128}
            width={128}
            className="object-contain laptop:h-[128px] tablet:h-[96px] w-[128px] tablet:flex hidden"
          />
          <Image
            src={`/projectIcons/project_${label}.svg`}
            alt={label}
            height={40}
            width={40}
            className="object-contain tablet:hidden"
          />
          <div className="laptop:w-full laptop:flex-1 self-center font-bold laptop:text-[16px] tablet:text-[14px] laptop:leading-[24px] leading-[16px] flex laptop:gap-[16px] gap-[8px] w-full justify-between">
            {label}
            <Image
              src={'/etc/rightArrow.svg'}
              alt="arrow"
              height={16}
              width={8}
              className=" self-center"

              // className="absolute tablet:top-[64px] self-center top-[112px] tablet:right-[32px] right-[16px]"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ProjectWrapper;

import Image from 'next/image';
import Card from './Card';

const ProjectWrapper = ({
  label,
  order,
  orderMobile,
  orderTablet,
  start,
}: {
  label: string;
  order: number;
  orderMobile: number;
  orderTablet: number;
  start?: number;
}) => {
  return (
    <div
      className={`${
        start
          ? `laptop:row-start-${start} laptop:col-start-1 row-start-1 col-start-${start}`
          : 'laptop:col-start-5'
      } tablet:gap-[32px] gap-[16px] tablet:flex-col laptop:flex-row flex laptop:col-span-2 laptop:grid-flow-col tablet:col-span-1 col-span-2 laptop:row-span-1 `}
    >
      <Card
        order={order}
        orderMobile={orderMobile}
        orderTablet={orderTablet}
        type="projects"
        className="w-full h-full "
      >
        <div
          className={`w-full h-full flex-1 flex ${
            start ? 'flex-col' : 'flex-row'
          } laptop:flex-row tablet:flex-col justify-center self-center laptop:gap-[16px] gap-[8px] items-center laptop:p-[32px] p-[16px]  relative`}
        >
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
            className="tablet:hidden"
          />
          <div className="laptop:w-full laptop:flex-1 self-center font-bold laptop:text-[16px] tablet:text-[14px] laptop:leading-[24px] leading-[16px] flex laptop:gap-[16px] gap-[8px] w-full justify-between text-white text-opacity-80">
            {label}
            <Image
              src={'/etc/rightArrow.svg'}
              alt="arrow"
              height={16}
              width={8}
              className="self-center"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ProjectWrapper;

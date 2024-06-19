'use client';
import Image from 'next/image';
import Card from './Card';
import { useRouter } from 'next/navigation';

const ProjectWrapper = ({
  label,
  order,
  orderMobile,
  orderTablet,
  start,
  src,
  mobileSrc,
  hideArrow,
}: {
  label: string;
  order: number;
  orderMobile: number;
  orderTablet: number;
  start?: number;
  src: string;
  mobileSrc: string;
  hideArrow?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      role="button"
      onClick={() => router.push(`/${label}`)}
      className={`${
        start
          ? `laptop:row-start-${start}  laptop:col-start-1 col-start-${start}`
          : 'laptop:col-start-5'
      } tablet:gap-[32px] gap-[8px] tablet:flex-col laptop:flex-row flex laptop:col-span-2 laptop:grid-flow-col tablet:col-span-1 col-span-2 row-span-1`}
    >
      <Card
        order={order}
        orderMobile={orderMobile}
        orderTablet={orderTablet}
        type="projects"
        className="w-full h-full hover:bg-opacity-20 active:bg-opacity-40"
      >
        <div
          className={`w-full h-full  flex ${
            start ? 'flex-col' : 'flex-row'
          } laptop:flex-row tablet:flex-col justify-center laptop:gap-[16px] gap-[8px] items-center p-[16px]  relative`}
        >
          <Image
            src={mobileSrc}
            alt={label}
            height={128}
            width={128}
            className="object-contain tablet:p-[8px] laptop:h-[128px] tablet:h-[96px] w-[128px] tablet:flex hidden"
          />
          <Image
            src={src}
            alt={label}
            height={40}
            width={40}
            className="tablet:hidden object-contain"
          />
          <div
            className={`${
              hideArrow ? '' : 'flex-1'
            } tablet:flex-auto tablet:w-full self-center font-bold laptop:text-[16px] tracking-[0em] tablet:text-[14px] laptop:leading-[24px] leading-[16px] flex laptop:gap-[16px] gap-[8px] justify-between  text-white text-opacity-80 laptop:px-[32px] px-[16px] `}
          >
            {label}
            <Image
              src={'/etc/rightArrow.svg'}
              alt="arrow"
              height={16}
              width={8}
              className={`${
                hideArrow ? 'hidden tablet:block' : 'block'
              } self-center`}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ProjectWrapper;

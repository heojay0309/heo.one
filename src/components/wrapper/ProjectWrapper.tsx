"use client";
import Image from "next/image";
import Card from "./Card";
import { useRouter } from "next/navigation";

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
          ? `laptop:row-start-${start} laptop:col-start-1 col-start-${start}`
          : "laptop:col-start-5"
      } col-span-2 row-span-1 flex w-full gap-[8px] tablet:col-span-1 tablet:flex-col tablet:gap-[32px] laptop:col-span-2 laptop:grid-flow-col laptop:flex-row`}
    >
      <Card
        order={order}
        orderMobile={orderMobile}
        orderTablet={orderTablet}
        type="projects"
        className="h-full w-full hover:bg-opacity-20 active:bg-opacity-40"
      >
        <div
          className={`w- flex h-full ${
            start ? "flex-col" : "flex-row"
          } relative items-center justify-center gap-[8px] p-[16px] tablet:flex-col laptop:flex-row laptop:gap-[16px]`}
        >
          <Image
            src={mobileSrc}
            alt={label}
            height={128}
            width={128}
            className="hidden w-[128px] object-contain tablet:flex tablet:h-[96px] tablet:p-[8px] laptop:h-[128px]"
          />
          <Image
            src={src}
            alt={label}
            height={40}
            width={40}
            className="object-contain tablet:hidden"
          />
          <div
            className={`${
              hideArrow ? "" : "flex-1"
            } flex gap-[8px] self-center font-bold leading-[16px] tracking-[0em] text-white text-opacity-80 tablet:flex-auto tablet:px-[16px] tablet:text-[14px] laptop:gap-[8px] laptop:px-[0px] laptop:text-[16px] laptop:leading-[24px]`}
          >
            <span className="block tablet:hidden">
              {label === "ShineResumes" ? "Shine" : label}
            </span>
            <span className="hidden tablet:block">{label}</span>
            <Image
              src={"/etc/rightArrow.svg"}
              alt="arrow"
              height={16}
              width={8}
              className={`${
                hideArrow ? "hidden tablet:block" : "block"
              } self-center`}
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ProjectWrapper;

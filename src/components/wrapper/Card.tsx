import { cn } from "@/utils/cn";
interface ICardProps {
  children: React.ReactNode;
  order?: number;
  orderTablet?: number;
  orderMobile?: number;
  col?: number;
  row?: number;
  empty?: boolean;
  type?: "one" | "main" | "projects" | "timeline" | "description";
  className?: string;
}
const Card = ({
  children,
  order,
  orderMobile,
  orderTablet,
  row,
  col,
  empty,
  type,
  className,
}: ICardProps) => {
  const twObj = {
    one: "row-span-1 col-span-1 hover:bg-opacity-80",
    main: "row-span-2 laptop:col-span-3 col-span-4",
    projects: "row-span-2 laptop:col-span-2 tablet:col-span-1 col-span-2",
    timeline: "row-span-2 laptop:col-span-1 col-span-2",
    description:
      "laptop:row-span-4 laptop:col-span-5  tablet:col-span-4 tablet:row-span-4 row-span-4 col-span-8 tablet:py-[16px] py-[8px] px-[32px] tablet:px-[64px] relative",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[8px] border border-white border-opacity-10 bg-white bg-opacity-10 tracking-[0.12em]",
        type ? twObj[type] : "",
        empty ? "invisible" : "visible",
        order ? `` : "",
        orderTablet ? `tablet:order-${orderTablet}` : "",
        orderMobile ? `mobile:order-${orderMobile}` : "",
        className || "",
      )}
    >
      {children}
    </div>
  );
};

export default Card;

import { cn } from '@/utils/cn';
interface ICardProps {
  children: React.ReactNode;
  order?: number;
  orderTablet?: number;
  orderMobile?: number;
  col?: number;
  row?: number;
  empty?: boolean;
  type?: 'one' | 'main' | 'projects' | 'timeline';
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
  const gridDictionary = {
    one: 'row-span-1 col-span-1',
    main: 'row-span-2 laptop:col-span-3 col-span-4',
    projects: 'row-span-1 laptop:col-span-2 tablet:col-span-1 col-span-2',
    timeline: 'row-span-2 laptop:col-span-1 col-span-2',
  };

  return (
    <div
      className={cn(
        'bg-white bg-opacity-10 border border-white border-opacity-10 flex items-center justify-center rounded-[8px] tracking-[0.12em]',
        type ? gridDictionary[type] : '',
        empty ? 'invisible' : 'visible',
        order ? `laptop:order-${order}` : '',
        orderTablet ? `tablet:order-${orderTablet}` : '',
        orderMobile ? `mobile:order-${orderMobile}` : '',
        className || ''
      )}
      // className={cn(
      //   'bg-white bg-opacity-10 border border-white border-opacity-10 flex items-center justify-center rounded-[8px]  tracking-[0.12em]',
      //   (type === 'timeline' && gridDictionary['timeline']) ||
      //     (type === 'main' && gridDictionary['main']) ||
      //     (type === 'projects' && gridDictionary['projects']),
      //   empty ? 'invisible' : 'visible',
      //   className || ''
      // )}
    >
      {children}
    </div>
  );
};

export default Card;

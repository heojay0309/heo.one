'use client';
import Image from 'next/image';
import Card from './Card';
import Link from 'next/link';
const Profile = ({
  name,
  order,
  orderMobile,
  orderTablet,
  hidden,
  mobileHidden,
  link,
}: {
  name: string;
  order: number;
  orderMobile: number;
  orderTablet: number;
  hidden?: boolean;
  mobileHidden?: boolean;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className={` ${hidden ? 'tablet:hidden row-start-1' : ''} ${
        mobileHidden
          ? `hidden tablet:flex laptop:row-start-4 tablet:col-start-${order}`
          : ''
      }`}
    >
      <Card
        order={order}
        orderMobile={orderMobile}
        orderTablet={orderTablet}
        className="h-full w-full hover:bg-opacity-20 active:bg-opacity-40"
      >
        <div
          className={`flex flex-col gap-[16px] tracking-[0.12em] items-center p-[16px]`}
        >
          <Image
            src={`/profileIcons/${name}.svg`}
            height={48}
            width={48}
            alt={name}
            className="object-fill laptop:h-[48px] laptop:w-[48px] tablet:h-[40px] tablet:w-[40px] h-[32px] w-[32px]"
          />
          <span className="font-bold laptop:text-[16px] text-[14px] leading-[21px] laptop:leading-[24px]">
            {name}
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default Profile;

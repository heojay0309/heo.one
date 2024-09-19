import Link from 'next/link';
import Image from 'next/image';
const NavProjectBox = () => {
  return (
    <div className="flex flex-col select-none border-black border-opacity-50 w-full rounded-[4px] bg-[#F0F0F0] p1 border-[0.5px]">
      <Link
        href={'/projects/Preps'}
        className="flex gap-[8px] px-[8px] py-[8px] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10 rounded-t-[4px] "
      >
        <Image
          src={'/projectIcons/project_preps.svg'}
          width={24}
          height={24}
          alt={'preps'}
        />
        <span>Preps</span>
      </Link>
      <Link
        href={'/projects/Mustadd'}
        className="flex gap-[8px] px-[8px] py-[8px] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10 rounded-t-[4px] "
      >
        <Image
          src={'/projectIcons/project_mustadd.svg'}
          width={24}
          height={24}
          alt={'mustadd'}
        />
        <span>Mustadd</span>
      </Link>
      {/* <Link
        href={'/projects/Mellow'}
        className="flex gap-[8px] px-[8px] py-[8px] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10 rounded-t-[4px] "
      >
        <Image
          src={'/projectIcons/project_mellow.svg'}
          width={24}
          height={24}
          alt={'mellow'}
        />
        <span>Mellow</span>
      </Link> */}
      <Link
        href={'/projects/ShineResumes'}
        className="flex gap-[8px] px-[8px] py-[8px] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10 rounded-t-[4px] "
      >
        <Image
          src={'/projectIcons/project_shine.svg'}
          width={24}
          height={24}
          alt={'shineResumes'}
        />
        <span>ShineResumes</span>
      </Link>
      <Link
        href={'/projects/Giverr'}
        className="flex gap-[8px] px-[8px] py-[8px] border-black border-opacity-50 hover:bg-black hover:bg-opacity-10 rounded-t-[4px] "
      >
        <Image
          src={'/projectIcons/project_giverr.svg'}
          width={24}
          height={24}
          alt={'giverr'}
        />
        <span className=" ">Giverr</span>
      </Link>
    </div>
  );
};
export default NavProjectBox;

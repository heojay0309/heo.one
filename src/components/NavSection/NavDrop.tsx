import Image from 'next/image';
import { navigations } from '@/constants/projects';
interface Navigations {
  RESUME: string[];
  PROFILES: string[];
  PROJECTS: string[];
}

const NavDrop = () => {
  return (
    <div className=" flex flex-col font-[600] text-[12px] text-center leading-[20px] tracking-[0.12em] gap-[4px] ">
      {Object.keys(navigations).map((el, index: number) => {
        return (
          <div key={index} className="flex flex-col ">
            <div className="flex gap-[8px] justify-end items-start text-white text-opacity-80 hover:text-opacity-90 active:text-opacity-100">
              {el}
              <Image
                src={'/etc/dropdown_arrow.svg'}
                alt={'arrowLeft'}
                height={10}
                width={8}
              />
            </div>
            {(navigations[el as keyof Navigations] as string[]).map(
              (subNav: string, subIndex: number) => {
                return (
                  <div
                    key={subIndex}
                    className="flex flex-col pr-[16px] gap-[2px]"
                  >
                    <div className="items-start flex gap-[8px] text-white text-opacity-80 hover:text-opacity-90 active:text-opacity-100 justify-end font-[300] text-[12px] text-center leading-[20px] tracking-[0.12em]">
                      {subNav}
                      <Image
                        src={'/etc/dropdown_arrow.svg'}
                        alt={'arrowLeft'}
                        height={10}
                        width={8}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        );
      })}
    </div>
  );
};
export default NavDrop;

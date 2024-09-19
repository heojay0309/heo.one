'use client';

import Image from 'next/image';
import { navigations } from '@/constants/projects';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Navigations {
  RESUME: string[];
  PROFILES: string[];
  PROJECTS: string[];
}

const NavDrop = ({ handleMouseEnter }: { handleMouseEnter: () => void }) => {
  const router = useRouter();

  const handleClick = (option: string) => {
    console.log('options', option);
    if (option === 'RESUME') {
      router.push('/resume');
    } else if (option === 'LINKEDIN') {
      router.push('https://www.linkedin.com/in/heo');
    } else if (option === 'GITHUB') {
      router.push('https://www.github.com/heojay0309');
    } else if (option === 'MELLOW') {
      router.push('/Mellow');
    } else if (option === 'PREPS') {
      router.push('/Preps');
    } else if (option === 'MUSTADD') {
      router.push('/Mustadd');
    } else if (option === 'GIVERR') {
      router.push('/Giverr');
    } else if (option === 'SHINERESUMES') {
      router.push('/ShineResumes');
    }
  };

  return (
    <div className="flex flex-col font-[600] rounded-lg  w-full text-[12px] text-center leading-[20px] tracking-[0.12em] z-10 pl-[32px] pr-[8px]">
      {Object.keys(navigations).map((el, index: number) => {
        return (
          <div key={index} className="flex flex-col">
            <div
              onClick={(e) => {
                const target = e.target as HTMLElement;
                const option = target.getAttribute('data-option');
                if (option) {
                  handleClick(option);
                }
              }}
              data-option={el} // Assign the data-option attribute here
              className="flex gap-[8px] justify-end items-start text-white text-opacity-80 hover:text-opacity-90 active:text-opacity-100"
            >
              {el}
              {el !== 'RESUME' && el !== 'PROJECTS' && el !== 'PROFILES' && (
                <Image
                  src={'/etc/dropdown_arrow.svg'}
                  alt={'arrowLeft'}
                  height={10}
                  width={8}
                />
              )}
            </div>
            {(navigations[el as keyof Navigations] as string[]).map(
              (subNav: string, subIndex: number) => (
                <div
                  onClick={(e) => {
                    const target = e.target as HTMLElement;
                    const option = target.getAttribute('data-option');
                    if (option) {
                      handleClick(option);
                    }
                  }}
                  data-option={subNav} // Assign the data-option attribute here
                  key={subIndex}
                  className="flex items-start gap-[8px] text-white text-opacity-80 hover:text-opacity-90 active:text-opacity-100 justify-end font-[300] text-[12px] text-center leading-[20px] tracking-[0.12em] pr-[16px]"
                >
                  {subNav}
                  <Image
                    src={'/etc/dropdown_arrow.svg'}
                    alt={'arrowLeft'}
                    height={10}
                    width={8}
                  />
                </div>
              )
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavDrop;

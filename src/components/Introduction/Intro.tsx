import Image from 'next/image';

const Intro = () => {
  return (
    <div className="flex justify-center max-h-1/3 items-center flex-col">
      <div className="flex flex-col items-center justify-between gap-[16px] ">
        <div className="">
          <Image
            src={'/selfie.png'}
            alt="profile"
            priority={true}
            className="object-fill"
            width={200}
            height={200}
          />
        </div>
        <div className="font-bold text-[64px] leading-[72px] tracking-[0.12em]">
          JAY HEO
        </div>
        <div className=" min-w-3/5 max-w-[692px] w-full text-center tracking-[0.12em] leading-[24px] text-[16px] font-normal">
          <span>
            Hello, <br /> I am a full-stack software engineer with extensive
            experience in developing front-end applications. My passion for
            building high-quality products comes from my love of challenging
            difficult problems and discovering robust solutions.
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Intro;

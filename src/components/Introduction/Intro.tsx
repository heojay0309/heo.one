import Image from 'next/image';

const Intro = () => {
  return (
    <div className="flex justify-center py-[64px] tablet:py-[128px] items-center flex-col laptop:flex-row gap-[32px] p-[16px] tablet:p-[32px] h-full bg-black">
      <Image
        src={'/selfie.png'}
        alt="profile"
        priority={true}
        className="object-fill self-center tablet:z-auto"
        width={200}
        height={200}
      />
      <div className="font-[400] leading-[36px] laptop:text-[24px] text-[16px] laptop:text-start text-center tablet:px-[32px] laptop:px-[0px]">
        Hey, <br />I am a full-stack software engineer with extensive experience
        in developing front-end applications. My passion for building
        high-quality products comes from my love of challenging difficult
        problems and discovering robust solutions.
      </div>
    </div>
    // </div>
  );
};

export default Intro;

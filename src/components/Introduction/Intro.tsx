import Image from 'next/image';

const Intro = () => {
  return (
    <div className="flex flex-col laptop:px-[256px] tablet:px-[192px] pt-[64px] px-[32px] laptop:flex-row h-full laptop:justify-between w-full min-h-[200px]">
      <div className="flex justify-center items-baseline flex-col laptop:flex-row gap-[32px] laptop:min-h-[200px]">
        <Image
          src={'/selfie.png'}
          alt="profile"
          priority={true}
          className="object-fill laptop:self-start self-center -z-30 tablet:z-auto"
          width={200}
          height={200}
        />
        <div className="font-[400] leading-[36px] laptop:text-[24px] text-[16px] laptop:max-h-[200px] max-h-[160px] self-center laptop:text-start text-center">
          Hey, <br />I am a full-stack software engineer with extensive
          experience in developing front-end applications. My passion for
          building high-quality products comes from my love of challenging
          difficult problems and discovering robust solutions.
        </div>
      </div>
    </div>
  );
};

export default Intro;

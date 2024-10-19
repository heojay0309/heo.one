import Image from "next/image";
import Card from "../wrapper/Card";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="text-align -z-10 flex h-full min-h-[640px] w-full snap-start flex-col items-center gap-[32px] overflow-x-clip tablet:min-h-[864px] tablet:flex-row tablet:justify-around laptop:gap-[64px]">
      <div className="relative h-[270px] w-[300px] overflow-clip rounded-bl-[16px] rounded-br-[200px] rounded-tl-[16px] rounded-tr-[16px] tablet:h-[480px] tablet:w-[400px] tablet:min-w-[400px] tablet:rounded-br-[307px]">
        <Image
          src={"/selfie.png"}
          alt={"me"}
          priority
          fill
          className="absolute object-cover"
        />
      </div>
      <div className="flex h-full flex-col gap-[16px] tablet:max-h-[400px] tablet:max-w-[568px] tablet:justify-start">
        <div className="h-full w-full tablet:max-h-[240px]">
          <h1 className="text-[48px] font-[600] leading-[64px]">Hello!</h1>
          <span className="text-[16px] font-[500] leading-[24px] tablet:text-[20px] tablet:leading-[32px]">
            My name is <strong>Jay Heo</strong>, I&apos;m a detail-oriented{" "}
            <strong>Full-Stack Engineer</strong> with a strong passion for
            building robust, scalable, and innovative web applications. With a
            specialty in <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
            <strong>TypeScript</strong>, I enjoy tackling complex development
            challenges and pushing the boundaries of what&apos;s possible with
            modern technology.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;

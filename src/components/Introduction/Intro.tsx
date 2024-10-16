import Image from "next/image";
import Card from "../wrapper/Card";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="text-align -z-10 flex h-full min-h-[720px] w-full snap-start flex-col items-center justify-center gap-[64px] overflow-x-clip tablet:min-h-[960px] tablet:flex-row">
      <div className="relative h-[400px] w-[560px] overflow-hidden rounded-bl-[16px] rounded-br-[412px] rounded-tl-[16px] rounded-tr-[16px] tablet:h-[704px] tablet:w-[592px]">
        <Image
          src={"/selfie.svg"}
          alt={"me"}
          priority
          fill
          className="absolute left-[36px] h-[400px] w-[400px] tablet:left-[0px] tablet:top-[-28px] tablet:h-[696px] tablet:w-[696px]"
        />
      </div>
      <div className="flex h-full max-h-[184px] max-w-[592px] flex-col justify-center gap-[16px]">
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
  );
};

export default Intro;

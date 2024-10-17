import Image from "next/image";
import Card from "../wrapper/Card";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="text-align flex h-full min-h-[960px] w-full snap-start items-center justify-center gap-[64px] overflow-x-clip">
      <div className="relative h-[704px] w-[592px] overflow-hidden rounded-bl-[16px] rounded-br-[412px] rounded-tl-[16px] rounded-tr-[16px]">
        <Image
          src={"/selfie.svg"}
          alt={"me"}
          height={696}
          width={696}
          className="absolute left-[0px] top-[-28px]"
        />
      </div>
      <div className="flex h-full max-h-[184px] max-w-[592px] flex-col justify-center gap-[16px]">
        <h1 className="text-[48px] font-[600] leading-[64px]">Hello!</h1>
        <span className="text-[16px] font-[500] leading-[24px] tablet:text-[20px] tablet:leading-[32px]">
          My name is <strong>Jay Heo</strong>, I'm a detail-oriented{" "}
          <strong>Full-Stack Engineer</strong> with a strong passion for
          building robust, scalable, and innovative web applications. With a
          specialty in <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
          <strong>TypeScript</strong>, I enjoy tackling complex development
          challenges and pushing the boundaries of what’s possible with modern
          technology.
        </span>
      </div>
      {/* <div className="flex max-h-[400px] w-full max-w-[400px] flex-col gap-[32px] bg-red-300 text-start">
        <span className="text-[16px] font-[500] leading-[24px] tablet:text-[20px] tablet:leading-[32px]">
          I am <strong>Jay Heo</strong>, a detail-oriented{" "}
          <strong>Full-Stack Engineer</strong> with a strong passion for
          building robust, scalable, and innovative web applications. With a
          specialty in <strong>Next.js</strong>, <strong>Node.js</strong>, and{" "}
          <strong>TypeScript</strong>, I enjoy tackling complex development
          challenges and pushing the boundaries of what’s possible with modern
          technology.
        </span>
        <span className="text-[16px] font-[500] leading-[24px] tablet:text-[20px] tablet:leading-[32px]">
          In recent years, I’ve had the opportunity to work on{" "}
          <strong>Preps AI</strong>, an AI-powered platform designed to enhance
          technical interview preparation, and <strong>ShineResumes</strong>, a
          dynamic online resume builder tailored for tech professionals. These
          experiences have not only honed my technical skills but have also
          fueled my drive to create impactful digital solutions.
        </span>
      </div> */}
    </div>
  );
};

export default Intro;

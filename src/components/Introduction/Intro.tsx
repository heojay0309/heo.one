import Image from "next/image";
import Card from "../wrapper/Card";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="text-align flex h-full w-full snap-start flex-col items-center justify-center gap-[64px] py-[32px] tablet:py-[64px]">
      <Image
        src={"/selfie-1.svg"}
        alt={"me"}
        height={320}
        width={320}
        className="h-[240px] w-[240px] tablet:h-[320px] tablet:w-[320px]"
      />
      <div className="flex max-h-[400px] max-w-[800px] flex-col gap-[32px] text-start">
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
      </div>
    </div>
  );
};

export default Intro;

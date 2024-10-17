import Image from "next/image";
import Link from "next/link";
type FeaturesType = {
  title: string;
  description: string;
  image: string;
};
interface IExperience {
  title: string;
  logo: string;
  date?: string;
  stacks: string;
  description: string;
  features: FeaturesType[];
  url?: string;
}

interface IWork {
  work: IExperience;
}

const technicalBadges: any = {
  "Express.js": "blue",
  GraphQL: "blue",
  TypeScript: "green",
  "Next.js": "green",
  Tailwind: "green",
  Docker: "red",
  WebSocket: "blue",
  OAuth: "blue",
  Zustand: "green",
  "Web Speech API": "green",
  "React Native Expo": "green",
  Figma: "red",
  "Fetch API": "green",
  "Test Flight": "red",
  Lottie: "green",
  Firebase: "red",
  FireStore: "red",
  AWS: "red",
  "Tailwind Animation": "green",
  "Git LFS": "red",
  Prisma: "red",
};

const backgroundBadgeColors: any = {
  blue: "bg-[#3E74FF]",
  green: "bg-[#09AF00]",
  red: "bg-[#FF4646]",
};

const Container = ({ work }: IWork) => {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex w-full flex-col gap-[32px] rounded-[24px] bg-black bg-opacity-[3%] p-[16px] tablet:p-[32px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex w-full flex-col justify-between gap-[8px] tablet:flex-row">
            <div className="flex gap-[8px]">
              <Image src={work.logo} alt={work.title} height={40} width={40} />
              <span className="text-[32px] font-semibold leading-[48px]">
                {work.title}
              </span>
            </div>
            {work.url && (
              <Link
                href={work.url}
                className="h-[40px] w-full max-w-[145px] rounded-[20px] bg-black text-white"
              >
                <div className="flex h-[40px] w-full items-center justify-center gap-[8px] self-center">
                  <span className="text-[16px] font-[800] leading-[24px]">
                    View Site
                  </span>
                  <Image
                    src={"/arrow.svg"}
                    alt={"arrow"}
                    height={10}
                    width={12}
                  />
                </div>
              </Link>
            )}
          </div>
          <div className="flex w-full justify-between">
            <div className="max-w-1/2 w-full align-baseline text-[16px] font-normal leading-[24px]">
              {work.description}
            </div>
            {work.date && (
              <div className="max-w-1/2 w-full text-end text-[16px] font-normal italic leading-[24px]">
                {work.date}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="flex w-full items-center gap-[8px]">
            <h2 className="text-[16px] font-[700] leading-[24px]">
              Technical Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-[16px] tablet:flex-auto">
            {work.stacks.split(", ").map((skill: string, index) => {
              return (
                <div
                  className={`flex items-center justify-center rounded-[20px] px-[16px] py-[2px] ${technicalBadges[skill as string] ? backgroundBadgeColors[technicalBadges[skill as string]] : "bg-black opacity-10"} text-white`}
                  key={index}
                >
                  <span className="text-[16px] font-[700] leading-[24px]">
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {work.features.map((feature, index) => {
        return (
          <div
            key={index}
            className={`flex w-full flex-col gap-[64px] py-[32px] tablet:flex-row ${index % 2 === 0 ? "tablet:flex-row" : "tablet:flex-row-reverse"}`}
          >
            <div className="flex flex-col justify-center gap-[16px]">
              <h1 className="text-[32px] font-semibold leading-[48px]">
                {feature.title}
              </h1>
              <p className="text-[16px] font-medium leading-[24px]">
                {feature.description}
              </p>
            </div>
            <Image
              src={feature.image}
              alt={feature.title}
              height={359}
              width={624}
              className="object-fill"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Container;

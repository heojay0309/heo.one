import Image from "next/image";
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
}
interface IWork {
  work: IExperience;
}
const Container = ({ work }: IWork) => {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex w-full flex-col gap-[8px]">
        <div className="flex flex-row gap-[10px] text-[32px] font-semibold leading-[48px]">
          <Image src={work.logo} alt={work.title} height={40} width={40} />
          <span>{work.title}</span>
        </div>
        {work.date && (
          <div className="text-[20px] font-light italic leading-[24px]">
            {work.date}
          </div>
        )}
        <span className="text-[20px] font-semibold leading-[24px]">
          {work.stacks}
        </span>
        <div className="mt-[8px] align-baseline text-[20px] font-medium leading-[24px]">
          {work.description}
        </div>
      </div>
      {work.features.map((feature, index) => {
        return (
          <div
            key={index}
            className={`flex w-full flex-col gap-[64px] py-[32px] tablet:flex-row ${index % 2 === 0 ? "tablet:flex-row" : "tablet:flex-row-reverse"}`}
          >
            <div className="flex flex-col justify-center gap-[16px]">
              <h1 className="text-[32px] font-bold leading-[48px]">
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

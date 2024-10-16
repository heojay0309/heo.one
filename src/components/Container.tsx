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
const Container = ({ work }: IExperience) => {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[8px] py-[16px]">
        <div className="flex gap-[16px] text-[36px] font-semibold leading-[64px]">
          {work.title}
          <Image src={work.logo} alt={work.title} height={40} width={40} />
        </div>
        {work.date && (
          <div className="text-[20px] font-light italic leading-[24px]">
            {work.date}
          </div>
        )}
        <span className="text-[20px] font-semibold leading-[24px]">
          {work.stacks}
        </span>
        <div className="text-[20px] leading-[24px]">{work.description}</div>
      </div>

      {work.features.map((feature, index) => {
        return (
          <div
            key={index}
            className={`flex w-full gap-[64px] py-[64px] ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className="flex flex-col justify-center gap-[32px]">
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

export interface IWork {
  work: "experiences" | "projects";
  children: React.ReactNode;
}

export interface IExperience {
  tag: string;
  title: string;
  logo: string;
  date?: string;
  stacks: string;
  description: string;
  url?: string;
  features: FeaturesType[];
}

export type FeaturesType = {
  title: string;
  description: string;
  image: string;
};

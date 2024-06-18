export type ProjectDataType = {
  projectName: string;
  position: string;
  yearsWorked: string;
  location: string;
  description: string[];
  images: string[];
  blurHash: string[];
  url: string;
};

export type IProjectData = {
  [key in 'preps' | 'giverr' | 'mustadd' | 'mellow']: ProjectDataType;
};

export const projectData: IProjectData = {
  preps: {
    projectName: 'Preps',
    position: 'Co-Founder & Lead Frontend Developer',
    yearsWorked: '2023 - Present',
    location: 'Los Angeles, CA',
    description: [
      'Preps is an AI powered mock interview simulator specifically for software engineers.',
      'AI-powered mock interview simulator for technical interview preps',
      'Designed and developed the beta version of our product’s main feature of communicating with our AI interviewer in real-time as well as sending and receiving the coding part of the interview',
      'Leveraged Next.js’s server-side rendering for optimized render time and minimize the latency in order to stay on par with other big tech competitors',
      'Selected to join the Microsoft for Startups Founders Hub, gaining access to valuable resources, and Azure cloud, AWS credits to accelerate product development',
      'Successfully advanced to the final round of Y Combinator’s selection process, involving a rigorous 10-minute interview with YC partners, out of thousands of applicants',
    ],
    images: [
      '/projects/preps/preps1.png',
      '/projects/preps/preps2.png',
      '/projects/preps/preps3.png',
      '/projects/preps/preps4.png',
    ],
    blurHash: [
      'L88EY$js.mf5E1ay%gjt%0j[xva|',
      'LE7Uo1j[?wayM{ayxvfQ%MfRRjfR',
      'LA7xL8of?^RiInfRx]ax%0WBbJt7',
      'LE97*8-q?wIUNGa~xujYRkIVRjxu',
    ],
    url: 'https://www.preps-ai.com',
  },
  giverr: {
    projectName: 'Giverr',
    position: 'Frontend Developer',
    yearsWorked: 'Aug 2023 - Present',
    location: 'Los Angeles, CA',
    description: [
      'Integrated SMS sign-in feature with Firebase Authentication to provide a reliable and simple authentication for the onboarding users',
      'Developed visually compelling and dynamic onboarding animations using the React Native Reanimated library to feature fluid, and high-quality animation features while maintaining a high level of responsiveness and user interaction',
      'Designed a calendar interface that displays the user’s saved contacts’ birthdays by utilizing the Expo-Contacts library for requesting permissions and fetching the necessary data such as birthdays and names',
    ],
    images: [
      '/projects/giverr/giverr1.png',
      '/projects/giverr/giverr2.png',
      '/projects/giverr/giverr3.png',
      '/projects/giverr/giverr4.png',
      '/projects/giverr/giverr5.png',
      '/projects/giverr/giverr6.png',
      '/projects/giverr/giverr7.png',
    ],
    blurHash: [
      'LDMtXP-;*D4m_4M{tRxu00ofM|of',
      'LFMat=-=#54m~qM{f,xv00ofkXkC',
      'LON,-y-p5_9G?bM{s:xt00ofs*j?',
      'LGNdUQ?b4:4T~qIUkD%M00t7xuoe',
      'LGNdUQ?b4:4T~qIUkD%M00t7xuoe',
      'LGNdUQ?b4:4T~qIUkD%M00t7xuoe',
      'LGNdUQ?b4:4T~qIUkD%M00t7xuoe',
    ],
    url: '',
  },
  mustadd: {
    projectName: 'Mustadd',
    position: 'Frontend Developer',
    yearsWorked: 'Aug 2022 - Aug 2023',
    location: 'Los Angeles, CA',
    description: [
      'Played an active role in system design discussions and brainstorming sessions to architect scalable and reliable solutions',
      'Led the creation of the company’s landing page using Next.js to enhance page load performance and also integrated Mailchimp into the landing page to manage email subscriptions and efficiently send updates to interested users',
      'Designed the user interface and user experience (UI/UX) for the workflow of the product using Figma for real-time collaboration features to work effectively with cross-functional teams and gather feedback',
      'Developed the frontend of the company’s product using Expo-cli for building cross-platform React Native applications and leveraged Expo-cli built-in components and modules to expedite development and focus on core features',
    ],
    images: [
      '/projects/mustadd/mustadd1.png',
      '/projects/mustadd/mustadd2.png',
      '/projects/mustadd/mustadd3.png',
      '/projects/mustadd/mustadd4.png',
    ],
    blurHash: [
      'LdF~p%t6_NRjRjWBt7of%MofRPWB',
      'LYGI$Kt7_NRjWBRjogt7xuofV@Rj',
      'LbF$hYxu_NRjWVRjozt7%Mt7M{Rj',
      'LbF$hYxu_NRjWVRjozt7%Mt7M{Rj',
    ],
    url: '',
  },
  mellow: {
    projectName: 'Mellow',
    position: 'Frontend Developer',
    yearsWorked: 'Aug 2023',
    location: 'Los Angeles, CA',
    description: [
      'Built a responsive web designed single page application landing page by working closely with the UI/UX design team using Figma',
      'Utilized the Git Large File Storage (LFS) feature for managing large files when pushing to the GitHub repository as they will remain accessible when pulling the repository back to the local machine',
      'Improved the transition of each components by using customized tailwind CSS for better user experience as well as smoother user interface',
      'Managed variables such as feature informations and colors from the outside of the components for easier changes or updates',
    ],
    images: [
      '/projects/mellow/mellow1.png',
      '/projects/mellow/mellow2.png',
      '/projects/mellow/mellow3.png',
      '/projects/mellow/mellow4.png',
      '/projects/mellow/mellow5.png',
      '/projects/mellow/mellow6.png',
    ],
    blurHash: [
      'LBPQEOV@00%L~qV@WXt700oz-;Rj',
      'LBO|nZxZ00Nx~qayogjs00Nex]xC',
      'LCPGpos:00X6~qayWXoL00W.%2n+',
      'LBO|nZxZ00Nx~qayogjs00Nex]xC',
      'LBO|nZxZ00Nx~qayogjs00Nex]xC',
      'LNI5iBj[.SoL4nay-;fQ~qj[9Faz',
    ],
    url: 'https://mellow-eta.vercel.app/',
  },
};

export const projectImages = [
  {
    title: 'Preps',
    description: 'AI-powered mock interview simulator for technical interview',
    src: '/projectSlides/preps.png',
    href: '/projects/Preps',
  },
  {
    title: 'Mustadd',
    description: 'D-ID Mobile App',
    src: '/projectSlides/mustadd.png',
    href: '/projects/Mustadd',
  },
  {
    title: 'Mellow',
    description: 'Landing page for Mellow, prayer app',
    src: '/projectSlides/mellow.png',
    href: '/projects/Mellow',
  },
  {
    title: 'Giverr',
    description: 'Phone number authenticating for onboarding',
    src: '/projectSlides/giverr.png',
    href: '/projects/Giverr',
  },
];

export interface Navigations {
  RESUME: string[];
  PROFILES: string[];
  PROJECTS: string[];
}

export const navigations: Navigations = {
  RESUME: [],
  PROFILES: ['LINKEDIN', 'GITHUB'],
  PROJECTS: ['MELLOW', 'PREPS', 'MUSTADD', 'GIVERR'],
};

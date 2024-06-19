export type ProjectArrayTypes = {
  title: string;
  description: string;
};
export type ProjectDataType = {
  projectName: string;
  position: string;
  yearsWorked: string;
  location: string;
  introduction: string;
  features: ProjectArrayTypes[];
  tech: string;
  achievements?: ProjectArrayTypes[];
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
    introduction:
      'Preps is an innovative platform designed to revolutionize the way software engineers prepare for job interviews. Born out of personal challenges and a series of rejections faced in technical interviews, Preps aims to bridge the gap between solitary practice and real interview performance by simulating realistic interview scenarios using artificial intelligence.',
    features: [
      {
        title: 'AI-Driven Mock Interviews',
        description:
          'Users can engage in lifelike interview sessions where they solve problems and explain their thought processes to an AI interviewer.',
      },
      {
        title: 'Real-Time Feedback',
        description:
          'At the end of each session, users receive detailed feedback on their problem-solving approach, coding skills, and communication, clarity, helping them identify strengths and areas for improvement.',
      },
      {
        title: 'Interactive Topic & Difficulty Exploration',
        description:
          'Preps empowers users to customize their learning experience by choosing from a wide array of technical topics and setting the difficulty levels of their practice interview questions. This personalization ensures that users can prepare at their own pace and according to their individual needs.',
      },
      {
        title: 'User-Friendly Interface',
        description:
          'To ensure broad accessibility, Preps identified a significant limitation with browser support for the JavaScript Voice Recognition API, which was primarily supported only by Chrome. To overcome this, Preps integrated a WebAssembly-based voice recognition library. This strategic implementation ensures that the platform’s voice-driven functionalities are accessible across all major browsers, enhancing usability and inclusivity for users everywhere.',
      },
    ],
    tech: 'Preps was developed using Next.js for the frontend to enhance the application’s performance and SEO capabilities, with styling provided by Tailwind CSS for a sleek, responsive user interface. Zustand is utilized for efficient state management across the application, ensuring a smooth and reactive user experience. The codebase is fortified with TypeScript, which brings robust type-checking to enhance maintainability and developer productivity.',
    achievements: [
      {
        title: 'Microsoft for Startups Founders Hub',
        description:
          'Selected for the Microsoft for Startups Founders Hub, gaining access to vital resources like Azure cloud services and AWS credits. This inclusion accelerates our product development and underscores our technological credibility.',
      },
      {
        title: 'Y Combinator Selection Process Finalist',
        description:
          'Reached the final round in Y Combinator’s competitive selection process, standing out among thousands. This recognition underscores our potential and innovation in the tech startup landscape.',
      },
    ],
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
    introduction:
      'Giverr is a side project developed to enhance mobile app security through a more secure sign-up process. Leveraging modern technologies and frameworks, this app introduces a robust SMS verification system for user authentication, aimed at preventing unauthorized access and improving overall user trust.',
    features: [
      {
        title: 'SMS Verification',
        description:
          'Incorporates Firebase Auth to manage SMS login, ensuring that each user is verified through a unique code sent to their mobile device, enhancing security during the sign-up process.',
      },
      {
        title: 'Animated Onboarding Experience',
        description:
          'Features a fun and engaging animated onboarding process using Lottie React Native, which provides users with a smooth introduction to the app’s functionalities.',
      },
      {
        title: 'Cross-Platform Availability',
        description:
          'Developed using React Native and Expo, the app is compiled into native bundles for both iOS and Android, ensuring a wide-reaching user base and consistent experience across platforms.',
      },
      {
        title: 'Data Storage and Management',
        description:
          'Utilizes Firestore to securely store and manage user data, supporting the app’s core functionality of enhanced security and user management.',
      },
      {
        title: 'Beta Testing',
        description:
          'Conducted thorough beta testing through TestFlight, allowing for real-world testing and improvements based on user feedback prior to official release.',
      },
    ],
    tech: 'Developed with React Native and Expo for cross-platform functionality, with additional tools like TypeScript for robust type-checking, Lottie React Native for engaging animations, Firebase Auth for secure SMS verification, and Firestore for efficient data management.',

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
    introduction:
      'Mustadd is a unique mobile application dedicated to managing decentralized identification and assets. It simplifies the process of securing and sharing personal documents and decentralized assets, providing users with full control over their digital identities.',
    features: [
      {
        title: 'Barcode Scanner Integration',
        description:
          'Features a barcode scanner that asynchronously requests camera access, with a custom UI that darkens the background to focus on the barcode for efficient scanning.',
      },
      {
        title: 'QR Code Generation',
        description:
          'Automatically generates QR codes based on unique string IDs for each user, enabling secure and straightforward sharing of information.',
      },
      {
        title: 'Splash Screen Initialization',
        description:
          'The app starts with a custom splash screen, enhancing the initial user experience while the application loads.',
      },
      {
        title: 'Draggable Cards Interface',
        description:
          'Utilizes a user-friendly interface with draggable cards, making navigation intuitive and engaging for users.',
      },
      {
        title: 'Real-time Asset Price Updates',
        description:
          'Leverages Axios to fetch real-time asset prices from the CoinGecko API, ensuring users have access to the latest financial information.',
      },
    ],
    tech: 'Built using React Native and Expo to ensure seamless operation across iOS and Android devices. Employs TypeScript for strong typing benefits, enhancing code reliability and maintainability.',
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
    introduction:
      'This landing page serves as the front face of the latest product, designed to showcase key features through an innovative, user-friendly interface. Collaborating closely with a company designer using Figma, the page highlights the product’s capabilities with a dynamic display of infinite moving cards, ensuring that visitors instantly grasp what the product has to offer without needing guidance.',
    features: [
      {
        title: 'Innovative Feature Display',
        description:
          'Implements infinite moving cards on the homepage to continuously present key features to visitors, enhancing user engagement and providing a seamless experience.',
      },
      {
        title: 'Optimized Bundle Size',
        description:
          'Efficiently manages resource loading with an optimized bundle size, ensuring swift load times and enhanced performance. The main route loads at 139 kB with core shared JavaScript chunking to minimize initial load time.',
      },
      {
        title: 'Video Content Management',
        description:
          'Utilizes Git Large File Storage (LFS) to manage and deploy high-quality video content without burdening the repository. This approach improves handling of large assets and streamlines the deployment process.',
      },
      {
        title: 'Search Engine Optimization',
        description:
          'Built with Next.js to leverage its superior SEO capabilities, ensuring that the landing page ranks well on search engines and reaches a broad audience.',
      },
    ],
    tech: 'Developed with Next.js to enhance SEO and ensure cross-platform compatibility. The design process was supported by Figma to create a visually compelling interface. Git LFS was employed to manage large media files efficiently, maintaining high performance without sacrificing quality.',
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

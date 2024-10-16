export type FeaturesType = {
  title: string;
  description: string;
  image: string;
};
export interface IExperience {
  tag: string;
  title: string;
  logo: string;
  date?: string;
  stacks: string;
  description: string;
  features: FeaturesType[];
}

export const experienceObj: IExperience[] = [
  {
    tag: "ShineResumes",
    title: "ShineResumes",
    logo: "/new/icons/project_shine.svg",
    date: "Jul 2024 - Present",
    stacks:
      "TypeScript, Next.js, Tailwind, GraphQL, Express.js, Prisma, AWS, Docker",
    description:
      "ShineResumes is an app that generates tailored resumes to the job descriptions in seconds.",
    features: [
      {
        title: "Sign in with Google",
        description:
          "Designed and implemented a full backend system using Express.js to handle user authentication with a focus on security and scalability. Integrated Google OAuth 2.0 to streamline the login experience, allowing users to sign in effortlessly with their Google accounts. Leveraged JWTs (JSON Web Tokens) for session management, providing a secure, stateless solution for authenticating user requests and safeguarding access to sensitive routes.",
        image: "/new/experience/shine/1.svg",
      },
      {
        title: "User-Friendly Onboarding Flow",
        description:
          "Designed a seamless onboarding process with a focus on simplicity and user experience. Leveraged Next.js form actions for secure, efficient data handling, allowing smooth interactions between the client and server. Integrated Apollo with GraphQL to optimize data flow, enabling real-time queries and mutations that enhance user accessibility. Used Zustand for state management, creating a scalable solution that supports a smooth onboarding journey from start to finish.",
        image: "/new/experience/shine/2.svg",
      },
      {
        title: "Tailored Job Target Description",
        description:
          "Leveraged OpenAI’s Chat Completion API to generate customized content by crafting highly specific prompts, ensuring precise and consistent AI-generated outputs that align with distinct job requirements. By directly incorporating job post descriptions, each output is tailored to reflect the nuances and demands of the target role, resulting in content that is both relevant and responsive to employer expectations.",
        image: "/new/experience/shine/3.svg",
      },
      {
        title: "Generate!",
        description:
          "User information is securely stored for quick access and can be reused to create multiple resumes, each tailored to specific job requirements. Using a standardized resume format powered by the docx library, resumes are generated in under 5 seconds and securely stored in AWS S3. Users can conveniently download their files as either .docx or .pdf formats at any time, ensuring a seamless and efficient resume-building experience.",
        image: "/new/experience/shine/4.svg",
      },
    ],
  },
  {
    tag: "Preps",
    title: "Preps AI",
    logo: "/new/icons/project_preps.svg",
    date: "Dec 2023 - Jun 2024",
    stacks:
      "TypeScript, Next.js, Tailwind, WebSocket, OAuth, Zustand, Speech Web API",
    description:
      "Preps AI is a real-time mock interview app for software engineers.",
    features: [
      {
        title: "SEO-Optimized Landing Page",
        description:
          "Developed a sleek, single-page web application for our landing page using Next.js, leveraging its lightweight architecture for fast load times and seamless navigation. Optimized for search engines to maximize visibility, ensuring that our site reaches and engages our target audience effectively.",
        image: "/new/experience/preps/1.svg",
      },
      {
        title: "Interactive Interviews w/ Dynamic Routing",
        description:
          "Built dynamic routes to support a wide range of algorithm practice topics, enabling users to easily access and practice questions tailored to their desired topics. This approach provides a personalized and focused interview preparation experience, aligning with each user’s specific needs.",
        image: "/new/experience/preps/2.svg",
      },
      {
        title: "Real-Time AI Interview Simulations",
        description:
          "Implemented real-time conversational interactions with an AI agent using WebSocket, creating an experience that closely mimics real-life interview settings. Achieved seamless differentiation between incoming and outgoing WebSocket messages, handling 'audio blobs' and 'coding prompts' through JavaScript’s typeof method. This setup provides users with an interactive, responsive practice environment for technical interviews.",
        image: "/new/experience/preps/3.svg",
      },
    ],
  },
  {
    tag: "Mustadd",
    title: "Mustadd",
    logo: "/new/icons/project_mustadd.svg",
    date: "Aug 2022 - Aug 2023",
    stacks: "TypeScript, React Native Expo, Figma, Fetch API, Test Flight",
    description: "Mustadd’s Web 3.0 Storage Vault Social App.",
    features: [
      {
        title: "Smooth Loading w/ Splash Screen",
        description:
          "Implemented a splash screen that displays until the app is fully loaded, ensuring a seamless and polished user experience. This feature leverages Expo’s SplashScreen.hideAsync() to provide a professional, visually appealing introduction to the app.",
        image: "/new/experience/mustadd/1.svg",
      },
      {
        title: "Custom QR Code Generate & Scan",
        description:
          "Developed a feature that generates unique QR codes for each wallet address, enabling easy wallet interactions through QR scanning. The app includes a user permission request for camera access, following standard protocols to ensure privacy and security during QR scanning.",
        image: "/new/experience/mustadd/2.svg",
      },
      {
        title: "Real-Time Data w/ CoinGecko API",
        description:
          "Built a dynamic asset section displaying real-time cryptocurrency prices fetched instantly upon page load. Leveraged CoinGecko’s free API to deliver accurate, up-to-date asset data, allowing users to track their holdings with ease.",
        image: "/new/experience/mustadd/3.svg",
      },
    ],
  },
];

export const projectObj: IExperience[] = [
  {
    tag: "Giverr",
    title: "Giverr",
    logo: "/new/icons/project_giverr.svg",
    stacks: "TypeScript, React Native Expo, Lottie, Firebase, FireStore",
    description: "Social Media App for sending & receiving gifts.",
    features: [
      {
        title: "Animated Onboarding w/ Lottie",
        description:
          "Designed an interactive and visually appealing onboarding experience using Lottie for React Native, making the initial user journey both fun and informative. The animations guide users through the app’s key features, offering a smooth and engaging introduction to its functionalities.",
        image: "/new/projects/giverr/1.svg",
      },
      {
        title: "Secure SMS Verification w/ Firebase Auth",
        description:
          "Integrated Firebase Auth to handle SMS-based logins, sending a unique verification code to each user’s mobile device during sign-up. This SMS verification step enhances security, ensuring that only authenticated users gain access to the app.",
        image: "/new/projects/giverr/2.svg",
      },
      {
        title: "Secure Data Storage with Firestore",
        description:
          "Implemented Firestore for reliable and secure storage of user data, supporting the app’s core functionalities around security and user management. This setup allows for efficient data handling, such as capturing essential user information like birth dates, as part of a seamless onboarding experience.",
        image: "/new/projects/giverr/3.svg",
      },
    ],
  },
  {
    tag: "Mellow",
    title: "Mellow",
    logo: "/new/icons/project_mellow.svg",
    stacks: "TypeScript, Next.js, Tailwind Animation, Git LFS",
    description:
      "Mellow’s single-page landing, which highlights a variety of features.",
    features: [
      {
        title: "Infinite Scroll Animation",
        description:
          "Created a seamless infinite scroll animation with React and CSS, allowing content to continuously flow in the specified direction. Using custom properties to control speed and direction, the component delivers a visually engaging experience while optimizing page performance for a smooth user interface.",
        image: "/new/projects/mellow/1.svg",
      },
      {
        title: "Large File Storage",
        description:
          "Leveraged Git LFS (Large File Storage) to efficiently handle large media assets, such as videos, within the project’s Git repository. This setup ensures fast load times and easy management of large files, making it ideal for hosting media-rich content on the landing page.",
        image: "/new/projects/mellow/2.svg",
      },
    ],
  },
];

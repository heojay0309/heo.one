'use client';
import Image from 'next/image';
import Card from '@/components/wrapper/Card';
import CustomScrollbar from './CustomScrollbar';
import { projectData, IProjectData } from '@/constants/projects';

const ProjectCard = ({ name }: { name: keyof IProjectData }) => {
  return (
    <Card type={'description'}>
      {/* <div className="flex relative flex-row h-full w-full pr-4 overflow-y-scroll gap-4"> */}
      <div className="flex scroll-smooth relative flex-row h-full w-full pr-[16px] justify-center gap-[16px]">
        <CustomScrollbar>
          <div className="flex flex-col  items-center h-full pr-[16px] gap-[16px]">
            <div className="flex flex-col items-center gap-[16px]">
              <Image
                src={`/projectSlides/${name}.png`}
                alt={name}
                width={420}
                height={304}
                className="object-contain tablet:w-[420px] tablet:h-[304px] w-[240px] h-[169px]"
              />
              <span className="text-center text-white font-bold tablet:leading-10 tablet:text-2xl leading-8 text-xl text-opacity-80 tracking-wider">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            </div>
            <div className="font-normal text-white h-full w-full text-opacity-80 tablet:text-base tablet:leading-6 leading-4 text-sm tracking-wider">
              {projectData[name].description[0]}
              {/* Hello,
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
              mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula
              consectetur, ultrices mauris. */}
            </div>
          </div>
          {/* <div className="flex flex-col overflow-visible h-full gap-4 relative max-w-10 w-full justify-start items-center"> */}

          {/* </div> */}
        </CustomScrollbar>
      </div>
    </Card>
  );
};

export default ProjectCard;

// const ProjectCard = ({ name }: { name: string }) => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, []);

//   return (
//     <Card type={'description'}>
//       <div
//         className="flex scroll-smooth relative flex-row h-full w-full pr-4 overflow-y-scroll gap-4"
//         ref={scrollRef}
//       >
//         <div className="flex flex-col items-center h-full pr-4 gap-4">
//           <div className="flex flex-col items-center gap-4">
//             <Image
//               src={`/projectSlides/${name}.png`}
//               alt={name}
//               width={420}
//               height={304}
//               className="object-contain tablet:w-[420px] tablet:h-[304px] w-[240px] h-[169px]"
//             />
//             <span className="text-center text-white font-bold tablet:leading-10 tablet:text-2xl leading-8 text-xl text-opacity-80 tracking-wider">
//               {name}
//             </span>
//           </div>
//           <div className="font-normal text-white h-full w-full text-opacity-80 tablet:text-base tablet:leading-6 leading-4 text-sm tracking-wider">
//             Hello,
//             <br />
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
//             mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
//             fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
//             in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
//             ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
//             urna. Pellentesque sit amet sapien fringilla, mattis ligula
//             consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
//             urna. Pellentesque sit amet sapien fringilla, mattis ligula
//             consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
//             urna. Pellentesque sit amet sapien fringilla, mattis ligula
//             consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
//             urna. Pellentesque sit amet sapien fringilla, mattis ligula
//             consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
//             consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
//             urna. Pellentesque sit amet sapien fringilla, mattis ligula
//             consectetur, ultrices mauris.
//           </div>
//         </div>
//         <div className="flex flex-col overflow-visible h-full gap-4 relative max-w-10 w-full justify-start items-center">
//           <Link href={'/'} className="top-0 sticky bg-red-300 h-10 w-10">
//             <Image
//               src={'/etc/close.svg'}
//               alt={'close'}
//               width={40}
//               height={40}
//             />
//           </Link>
//           <div className="custom-scrollbar bottom-1/2 py-36 flex flex-col-reverse justify-end items-end bg-red-300 h-full">
//             <div className="custom-scrollbar-thumb"></div>
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

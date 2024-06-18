import Intro from '@/components/Introduction/Intro';
import Vote from '@/components/Vote';
import Profile from '@/components/wrapper/Profile';
import ProjectWrapper from '@/components/wrapper/ProjectWrapper';
import WorkTimeline from '@/components/WorkTimeline';
export default function Home() {
  return (
    <div className="grid laptop:grid-flow-col grid-flow-row laptop:grid-rows-4 laptop:grid-cols-6 tablet:grid-rows-5 tablet:grid-cols-4 grid-cols-4 tablet:gap-[32px] gap-[16px] h-full">
      <Vote />
      <WorkTimeline mobileHidden />
      <Profile
        name={'LinkedIn'}
        order={4}
        orderMobile={1}
        orderTablet={1}
        link={'https://www.linkedin.com/in/heo'}
        mobileHidden
      />
      <Profile
        name={'GitHub'}
        order={2}
        orderMobile={2}
        orderTablet={2}
        mobileHidden
        link={'https://www.github.com/heojay0309'}
      />
      <Profile
        name={'Resume'}
        order={3}
        orderMobile={3}
        orderTablet={3}
        mobileHidden
        link={'/resume'}
      />
      <Profile
        name={'Email'}
        order={4}
        orderMobile={4}
        orderTablet={4}
        mobileHidden
        link={'mailto:heojay0309@gmail.com'}
      />
      <Intro />
      <Profile
        name={'LinkedIn'}
        order={4}
        orderMobile={1}
        orderTablet={1}
        hidden
        link={'https://www.linkedin.com/in/heo'}
      />
      <Profile
        name={'GitHub'}
        order={1}
        orderMobile={4}
        orderTablet={4}
        hidden
        link={'https://www.github.com/heojay0309'}
      />
      <Profile
        name={'Resume'}
        order={2}
        orderMobile={2}
        orderTablet={2}
        hidden
        link={'/resume'}
      />
      <Profile
        name={'Email'}
        order={3}
        orderMobile={3}
        orderTablet={3}
        hidden
        link={'mailto:heojay0309@gmail.com'}
      />
      <WorkTimeline hidden />
      <ProjectWrapper
        label={'Preps'}
        order={1}
        orderMobile={15}
        orderTablet={3}
        src="/projectIcons/project_Preps.svg"
        mobileSrc="/projectSlides/Preps.png"
      />
      <ProjectWrapper
        label={'Mellow'}
        order={2}
        orderMobile={19}
        orderTablet={4}
        src="/projectIcons/project_Mellow.svg"
        mobileSrc="/projectSlides/Mellow.png"
      />
      <ProjectWrapper
        label={'Mustadd'}
        order={3}
        orderMobile={23}
        orderTablet={3}
        src="/projectIcons/project_Mustadd.svg"
        mobileSrc="/projectSlides/Mustadd.png"
      />
      <ProjectWrapper
        label={'Giverr'}
        order={4}
        orderMobile={27}
        orderTablet={4}
        src="/projectIcons/project_Giverr.svg"
        mobileSrc="/projectSlides/Giverr.png"
      />
    </div>
  );
}

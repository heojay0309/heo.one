import Intro from '@/components/Introduction/Intro';
import Vote from '@/components/Vote';
import ProjectSlide from '@/components/Introduction/project/ProjectSlide';
import Profile from '@/components/wrapper/Profile';
import ProjectWrapper from '@/components/wrapper/ProjectWrapper';
import WorkTimeline from '@/components/WorkTimeline';
export default function Home() {
  return (
    <div className="grid laptop:grid-flow-col grid-flow-row laptop:grid-rows-4 laptop:grid-cols-6 tablet:grid-rows-5 tablet:grid-cols-4 grid-cols-4 tablet:gap-[32px] gap-[16px] h-full">
      <Vote />
      {/* <div className="hidden laptop:inline-grid col-span-1 row-span-2"> */}
      <WorkTimeline mobileHidden />
      <Profile
        name={'LinkedIn'}
        order={4}
        orderMobile={1}
        orderTablet={1}
        mobileHidden
      />

      <Profile
        name={'GitHub'}
        order={2}
        orderMobile={2}
        orderTablet={2}
        mobileHidden
      />
      <Profile
        name={'Resume'}
        order={3}
        orderMobile={3}
        orderTablet={3}
        mobileHidden
      />
      <Profile
        name={'Email'}
        order={4}
        orderMobile={4}
        orderTablet={4}
        mobileHidden
      />
      <Intro />
      <Profile
        name={'LinkedIn'}
        order={4}
        orderMobile={1}
        orderTablet={1}
        hidden
      />
      <Profile
        name={'GitHub'}
        order={1}
        orderMobile={4}
        orderTablet={4}
        hidden
      />
      <Profile
        name={'Resume'}
        order={2}
        orderMobile={2}
        orderTablet={2}
        hidden
      />
      <Profile
        name={'Email'}
        order={3}
        orderMobile={3}
        orderTablet={3}
        hidden
      />
      <WorkTimeline hidden />
      <ProjectWrapper
        label={'Preps'}
        order={1}
        orderMobile={15}
        orderTablet={3}
      />
      <ProjectWrapper
        label={'Mellow'}
        order={2}
        orderMobile={19}
        orderTablet={4}
      />
      <ProjectWrapper
        label={'Mustadd'}
        order={3}
        orderMobile={23}
        orderTablet={3}
      />
      <ProjectWrapper
        label={'Giverr'}
        order={4}
        orderMobile={27}
        orderTablet={4}
      />
    </div>
  );
}

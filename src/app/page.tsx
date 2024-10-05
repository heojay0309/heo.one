import Intro from "@/components/Introduction/Intro";
import Vote from "@/components/Vote";
import Profile from "@/components/wrapper/Profile";
import ProjectWrapper from "@/components/wrapper/ProjectWrapper";
import WorkTimeline from "@/components/WorkTimeline";
export default function Home() {
  const twObj = {
    laptop: {
      vote: {
        /* row X col */
        span: [1, 1],
        position: [1, 1],
      },
      timeline: {
        /* row X col */
        span: [1, 2],
        position: [2, 1],
      },
      linkedin: {
        /* row X col */
        span: [1, 1],
        position: [4, 1],
      },
      github: {
        /* row X col */
        span: [1, 1],
        position: [4, 2],
      },
      resume: {
        /* row X col */
        span: [1, 1],
        position: [4, 3],
      },
      email: {
        /* row X col */
        span: [1, 1],
        position: [4, 4],
      },
      preps: {
        /* row X col */
        span: [1, 2],
        position: [1, 5],
      },
      mellow: {
        /* row X col */
        span: [1, 2],
        position: [2, 5],
      },
      mustadd: {
        /* row X col */
        span: [1, 2],
        position: [3, 5],
      },
      giverr: {
        /* row X col */
        span: [1, 2],
        position: [4, 5],
      },
      sites: {
        /* row X col */
        span: [1, 3],
        position: [1, 2],
      },
      intro: {
        /* row X col */
        span: [2, 3],
        position: [2, 2],
      },
    },
    tablet: {
      timeline: {
        /* row 5 X col 4 */
        span: [2, 2],
        position: [4, 1],
      },
      linkedin: {
        /* row X col */
        span: [1, 1],
        position: [1, 1],
      },
      github: {
        /* row X col */
        span: [1, 1],
        position: [1, 2],
      },
      resume: {
        /* row X col */
        span: [1, 1],
        position: [1, 3],
      },
      email: {
        /* row X col */
        span: [1, 1],
        position: [1, 4],
      },
      preps: {
        /* row X col */
        span: [1, 1],
        position: [4, 3],
      },
      mellow: {
        /* row X col */
        span: [1, 1],
        position: [5, 3],
      },
      mustadd: {
        /* row X col */
        span: [1, 1],
        position: [4, 4],
      },
      giverr: {
        /* row X col */
        span: [1, 1],
        position: [5, 4],
      },
      sites: {
        /* row X col */
        span: [2, 2],
        position: [2, 1],
      },
      intro: {
        /* row X col */
        span: [2, 2],
        position: [2, 3],
      },
    },
    mobile: {
      timeline: {
        /* row 5 X col 4 */
        span: [4, 2],
        position: [4, 1],
      },
      linkedin: {
        /* row X col */
        span: [1, 1],
        position: [1, 1],
      },
      github: {
        /* row X col */
        span: [1, 1],
        position: [1, 2],
      },
      resume: {
        /* row X col */
        span: [1, 1],
        position: [1, 3],
      },
      email: {
        /* row X col */
        span: [1, 1],
        position: [1, 4],
      },
      preps: {
        /* row X col */
        span: [1, 1],
        position: [4, 3],
      },
      mellow: {
        /* row X col */
        span: [1, 1],
        position: [5, 3],
      },
      mustadd: {
        /* row X col */
        span: [1, 1],
        position: [4, 4],
      },
      giverr: {
        /* row X col */
        span: [1, 1],
        position: [5, 4],
      },
      sites: {
        /* row X col */
        span: [2, 2],
        position: [2, 1],
      },
      intro: {
        /* row X col */
        span: [2, 2],
        position: [2, 3],
      },
    },
  };
  return (
    <div className="grid h-full grid-flow-row grid-cols-4 grid-rows-7 gap-[16px] px-[32px] pb-[16px] tablet:grid-cols-4 tablet:grid-rows-5 tablet:gap-[32px] tablet:px-[32px] laptop:grid-flow-row laptop:grid-cols-6 laptop:grid-rows-4 laptop:px-[32px] laptop:pt-[32px]">
      <Vote />
      <WorkTimeline mobileHidden />
      <Profile
        name={"LinkedIn"}
        order={4}
        orderMobile={1}
        orderTablet={1}
        link={"https://www.linkedin.com/in/heo"}
        mobileHidden
      />
      <Profile
        name={"GitHub"}
        order={2}
        orderMobile={2}
        orderTablet={2}
        mobileHidden
        link={"https://www.github.com/heojay0309"}
      />
      <Profile
        name={"Resume"}
        order={3}
        orderMobile={3}
        orderTablet={3}
        mobileHidden
        link={"/resume"}
      />
      <Profile
        name={"Email"}
        order={4}
        orderMobile={4}
        orderTablet={4}
        mobileHidden
        link={"mailto:heojay0309@gmail.com"}
      />
      <Intro />
      <Profile
        name={"LinkedIn"}
        order={4}
        orderMobile={1}
        orderTablet={1}
        hidden
        link={"https://www.linkedin.com/in/heo"}
      />
      <Profile
        name={"GitHub"}
        order={1}
        orderMobile={4}
        orderTablet={4}
        hidden
        link={"https://www.github.com/heojay0309"}
      />
      <Profile
        name={"Resume"}
        order={2}
        orderMobile={2}
        orderTablet={2}
        hidden
        link={"/resume"}
      />
      <Profile
        name={"Email"}
        order={3}
        orderMobile={3}
        orderTablet={3}
        hidden
        link={"mailto:heojay0309@gmail.com"}
      />
      <WorkTimeline hidden />
      <ProjectWrapper
        label={"Preps"}
        order={1}
        orderMobile={15}
        orderTablet={3}
        src="/projectIcons/project_preps.svg"
        mobileSrc="/projectSlides/preps.png"
      />
      <ProjectWrapper
        label={"ShineResumes"}
        order={2}
        orderMobile={19}
        orderTablet={4}
        src="/projectIcons/project_shine.svg"
        mobileSrc="/projectSlides/shineresumes.png"
      />
      <ProjectWrapper
        label={"Mustadd"}
        order={3}
        orderMobile={23}
        orderTablet={3}
        src="/projectIcons/project_mustadd.svg"
        mobileSrc="/projectSlides/mustadd.png"
      />
      <ProjectWrapper
        label={"Giverr"}
        order={4}
        orderMobile={27}
        orderTablet={4}
        src="/projectIcons/project_giverr.svg"
        mobileSrc="/projectSlides/giverr.png"
      />
    </div>
  );
}

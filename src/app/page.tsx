"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Card from "@/components/experience/Card";
import { projectObj, experienceObj } from "@/constants/projectObj";
import Contact from "@/components/contacts/Contact";
import SideMenu from "@/components/nav/SideMenu";
import ExperienceContainer from "@/components/experience/ExperienceContainer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Observer for active section tracking
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            if (sectionId !== "intro") {
              window.history.replaceState(null, "", `#${sectionId}`);
            } else {
              window.history.replaceState(null, "", " ");
            }
          }
        });
      },
      { threshold: 0.1 },
    );
  }, []);

  return (
    <div className="relative flex flex-col gap-[32px] scroll-smooth">
      <div className="relative flex flex-col gap-[16px] tablet:gap-[32px]">
        <section
          className="w-screen self-center bg-gradient-radial from-[#2d3748] via-[#1a202c] to-[#1a202c] px-[16px] tablet:via-[60%] tablet:px-[64px]"
          id="intro"
        >
          <Hero />
        </section>
        <div className="relative flex flex-col gap-[32px] scroll-smooth py-[32px]">
          <ExperienceContainer work="experiences">
            {experienceObj.map((exp, index) => {
              return (
                <section
                  className="text-shadow flex flex-col gap-[64px] py-[32px] drop-shadow-lg"
                  id={exp.tag}
                  key={exp.tag}
                >
                  <Card work={exp} project={true} />
                </section>
              );
            })}
          </ExperienceContainer>
          <ExperienceContainer work="projects">
            {projectObj.map((proj, index) => {
              return (
                <section
                  className="text-shadow flex flex-col gap-[64px] py-[32px] drop-shadow-lg"
                  key={proj.tag}
                  id={proj.tag}
                >
                  <Card work={proj} project={false} />
                </section>
              );
            })}
          </ExperienceContainer>
          <SideMenu activeSection={activeSection} />
          <Contact />
        </div>
      </div>
    </div>
  );
}

{
  /* <div id="ripple-container">
        <WaterRipple />
      </div> */
}

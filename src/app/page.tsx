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
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const mainProjectsSection = document.getElementById("projects");
    const experiencesSection = document.getElementById("experiences");

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
    // Observer for menu visibility
    const menuObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If entering projects or experiences section
          if (entry.isIntersecting) {
            setShowSideMenu(true);
          } else {
            // Only hide if both sections are out of view
            const projectsRect = mainProjectsSection?.getBoundingClientRect();
            const experiencesRect = experiencesSection?.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const isProjectsVisible =
              projectsRect &&
              projectsRect.top < windowHeight &&
              projectsRect.bottom > 0;
            const isExperiencesVisible =
              experiencesRect &&
              experiencesRect.top < windowHeight &&
              experiencesRect.bottom > 0;

            if (!isProjectsVisible && !isExperiencesVisible) {
              setShowSideMenu(false);
            }
          }
        });
      },
      {
        rootMargin: "-50px 0px -50px 0px",
        threshold: [0, 0.1],
      },
    );

    // Observe all sections for active section tracking
    sections.forEach((section) => sectionObserver.observe(section));

    // Observe main sections for menu visibility
    if (mainProjectsSection) menuObserver.observe(mainProjectsSection);
    if (experiencesSection) menuObserver.observe(experiencesSection);

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
      if (mainProjectsSection) menuObserver.unobserve(mainProjectsSection);
      if (experiencesSection) menuObserver.unobserve(experiencesSection);
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-[32px] scroll-smooth">
      <div className="relative flex flex-col gap-[16px] tablet:gap-[32px]">
        <section
          className="w-screen self-center px-[16px] tablet:px-[64px]"
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
          {showSideMenu && <SideMenu activeSection={activeSection} />}
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

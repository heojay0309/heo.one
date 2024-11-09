"use client";
import { useState, useEffect } from "react";
import Intro from "@/components/Introduction/Intro";
import Container from "@/components/Container";
import { projectObj, experienceObj } from "@/constants/projectObj";
import Contact from "@/components/Contact";
import WaterRipple from "@/components/wrapper/WaterRipple";
import SideMenu from "@/components/NavSection/SideMenu";

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
            const sectionId = entry.target.id || "intro";
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
      {/* <div id="ripple-container">
        <WaterRipple />
      </div> */}
      <div className="relative flex flex-col gap-[16px] tablet:gap-[32px]">
        <section className="" id={activeSection !== "intro" ? "intro" : "top"}>
          <Intro />
        </section>
        <div className="relative flex flex-col gap-[32px] scroll-smooth py-[32px]">
          {showSideMenu && <SideMenu activeSection={activeSection} />}
          <section
            id={"experiences"}
            className="flex snap-end snap-always flex-col gap-[32px]"
          >
            <h1 className="text-shadow text-[40px] font-bold leading-[60px] drop-shadow-lg">
              Experiences
            </h1>
            <div className="flex flex-col gap-[64px] self-center">
              {experienceObj.map((exp, index) => {
                return (
                  <section
                    className="text-shadow flex flex-col gap-[64px] py-[32px] drop-shadow-lg"
                    id={exp.tag}
                    key={index}
                  >
                    <Container work={exp} project={true} />
                  </section>
                );
              })}
            </div>
          </section>
          <div className="flex flex-col gap-[32px]">
            <section
              id={"projects"}
              className="flex flex-col gap-[32px] py-[64px]"
            >
              <h1 className="text-shadow scroll-smooth text-[40px] font-bold leading-[60px] drop-shadow-lg">
                Projects
              </h1>
              <div className="flex flex-col gap-[64px] self-center">
                {projectObj.map((proj, index) => {
                  return (
                    <section
                      className="text-shadow flex flex-col gap-[64px] py-[32px] drop-shadow-lg"
                      key={index}
                      id={proj.tag}
                    >
                      <Container work={proj} project={false} />
                    </section>
                  );
                })}
              </div>
            </section>
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

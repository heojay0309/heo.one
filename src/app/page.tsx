"use client";
import { useState, useEffect } from "react";
import Intro from "@/components/Introduction/Intro";
import Container from "@/components/Container";
import SideMenu from "@/components/NavSection/SideMenu";
import { projectObj, experienceObj } from "@/constants/projectObj";
import Navbar from "@/components/NavSection/Nav";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
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

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-[32px] scroll-smooth pl-[32px] pr-[48px] tablet:h-screen tablet:snap-y tablet:snap-mandatory tablet:gap-[0px] tablet:overflow-y-scroll tablet:pl-[64px] tablet:pr-[94px]">
      <Navbar />
      <div className="relative flex flex-col gap-[16px] tablet:gap-[32px]">
        <SideMenu activeSection={activeSection} />
        <section className="" id={activeSection !== "intro" ? "intro" : "top"}>
          <Intro />
        </section>
        <div className="flex flex-col gap-[32px] scroll-smooth py-[32px]">
          <div className="flex flex-col gap-[32px]">
            <h1 className="text-[40px] font-bold leading-[60px]">
              Experiences
            </h1>
            <div
              id={"experiences"}
              className="flex flex-col gap-[64px] self-center"
            >
              {experienceObj.map((exp, index) => {
                return (
                  <section
                    className="flex snap-start snap-always flex-col gap-[64px] py-[32px]"
                    id={exp.tag}
                    key={index}
                  >
                    <Container work={exp} />
                  </section>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col gap-[32px] py-[64px]">
              <h1 className="scroll-smooth text-[40px] font-bold leading-[60px]">
                Projects
              </h1>
              <div
                id={"projects"}
                className="flex flex-col gap-[64px] self-center"
              >
                {projectObj.map((proj, index) => {
                  return (
                    <section
                      className="flex snap-start snap-always flex-col gap-[64px] py-[32px]"
                      key={index}
                      id={proj.tag}
                    >
                      <Container work={proj} />
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-[32px]">
            <Contact />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

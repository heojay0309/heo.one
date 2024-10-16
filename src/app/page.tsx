"use client";
import { useState, useEffect } from "react";

import Intro from "@/components/Introduction/Intro";
import Container from "@/components/Container";
import SideMenu from "@/components/NavSection/SideMenu";
import { projectObj, experienceObj } from "@/constants/projectObj";
import { useRouter } from "next/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative flex h-screen snap-y snap-mandatory flex-col gap-[32px] overflow-y-scroll scroll-smooth px-[64px]">
      <section id={"nav"}>
        <Intro />
      </section>
      <div className="flex flex-col gap-[32px] py-[32px]">
        <h1 className="text-[40px] font-bold leading-[60px]">Experiences</h1>
        <div
          id={"experiences"}
          className="flex flex-col gap-[64px] self-center"
        >
          {experienceObj.map((exp, index) => {
            return (
              <section
                className="flex snap-start snap-always flex-col gap-[64px] py-[32px]"
                key={exp.tag}
                id={exp.tag}
              >
                <Container work={exp} />
              </section>
            );
          })}
        </div>
        <div className="flex flex-col gap-[32px] py-[64px]">
          <h1 className="scroll-smooth text-[40px] font-bold leading-[60px]">
            Projects
          </h1>
          <div id={"projects"} className="flex flex-col gap-[64px] self-center">
            {projectObj.map((proj, index) => {
              return (
                <section
                  className="flex snap-start snap-always flex-col gap-[64px] py-[32px]"
                  key={proj.tag}
                  id={proj.tag}
                >
                  <Container work={proj} />
                </section>
              );
            })}
          </div>
        </div>
        <section
          id={"footer"}
          className="flex h-full min-h-[560px] snap-start flex-col items-center justify-center gap-[64px] pb-[64px] pt-[32px]"
        >
          <div className="flex h-full flex-col items-center justify-center gap-[64px]">
            <div className="text-[40px] leading-[60px] tracking-wider">
              Thank You for your time!
            </div>
            <a
              href="mailto:heojay0309@gmail.com"
              className="flex items-center justify-center rounded-2xl border-2 border-black border-opacity-40 px-[24px] py-[16px] text-[16px] font-semibold leading-[24px] text-black text-opacity-40 shadow-md transition-all duration-200 hover:scale-105 hover:text-opacity-50 hover:shadow-2xl active:text-opacity-70"
            >
              Contact Me
            </a>
          </div>
        </section>
      </div>
      <SideMenu activeSection={activeSection} />
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Intro from "@/components/Introduction/Intro";
import Container from "@/components/Container";
import SideMenu from "@/components/NavSection/SideMenu";
import { projectObj, experienceObj } from "@/constants/projectObj";
import Navbar from "@/components/NavSection/Nav";
import { contactAction } from "@/actions/contactAction";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id || "intro"; // Default to "intro" for the top section
            setActiveSection(sectionId);
            // If the section id is not "intro", update the URL
            if (sectionId !== "intro") {
              window.history.replaceState(null, "", `#${sectionId}`);
            } else {
              window.history.replaceState(null, "", " "); // Clears the hash
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
    <div className="relative flex flex-col scroll-smooth pl-[64px] pr-[94px] tablet:h-screen tablet:snap-y tablet:snap-mandatory tablet:overflow-y-scroll">
      <Navbar />
      <div className="relative flex flex-col gap-[16px] tablet:gap-[32px]">
        <SideMenu activeSection={activeSection} />
        <section className="" id={activeSection !== "intro" ? "intro" : "top"}>
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
                  id={exp.tag}
                  key={index}
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
          <div className="flex items-center justify-center py-[32px]">
            <section
              id={"contact"}
              className="flex h-full min-h-[560px] snap-start flex-col items-center justify-center gap-[64px]"
            >
              {/* <div className="flex h-full flex-col items-center justify-center gap-[64px]">
                <div className="text-[32px] font-[600] leading-[48px] tracking-wider">
                  Let's Get in Touch!
                </div>
                <a
                  href="mailto:heojay0309@gmail.com"
                  className="flex items-center justify-center rounded-2xl border-2 border-black border-opacity-40 px-[24px] py-[16px] text-[16px] font-semibold leading-[24px] text-black text-opacity-40 shadow-md transition-all duration-200 hover:scale-105 hover:text-opacity-50 hover:shadow-2xl active:text-opacity-70"
                >
                  Contact Me
                </a>
              </div> */}
              <div className="flex h-full w-full max-w-[640px] flex-col justify-center gap-[32px]">
                <div className="text-[32px] font-[600] leading-[48px] tracking-wider opacity-80">
                  Let's Get in Touch!
                </div>
                <form
                  action={contactAction}
                  className="flex w-full flex-col gap-[32px] tablet:min-w-[640px]"
                >
                  <div className="flex flex-col justify-center gap-[8px] border-b pb-[8px]">
                    <label>Email</label>
                    <input
                      name="email"
                      value={email}
                      placeholder="Example@email.com"
                      className="text-[16px] font-[400] leading-[24px] outline-none ring-0 placeholder:opacity-60"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-[8px] border-b pb-[8px]">
                    <label className="text-[12px] font-[400] leading-[16px]">
                      Message
                    </label>
                    <input
                      name="message"
                      value={message}
                      placeholder="Lorem"
                      className="text-[16px] font-[400] leading-[24px] outline-none ring-0 placeholder:opacity-60"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    role="submit"
                    className="flex h-[40px] w-full items-center justify-center gap-[8px] rounded-[20px] bg-black"
                  >
                    <span className="text-[16px] font-[800] leading-[24px] text-white">
                      Send
                    </span>
                    <Image
                      src={"/arrow.svg"}
                      alt={"arrow"}
                      height={10}
                      width={12}
                    />
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

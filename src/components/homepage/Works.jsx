import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Heading from "../ui/Heading";
import Project from "../ui/Project";
import { projectsData } from "../../data";
import { useEffect, useState } from "react";
import { useRef } from "react";
import L0daer from "../ui/L0daer";

gsap.registerPlugin(ScrollTrigger);

export default function Works({ forwardedRef }) {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0.1 },
        {
          opacity: 1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72.5%",
            end: "top top+=16px",
            scrub: true,
          },
        }
      );

      const splitText = (element) => {
        const characters = element.innerText.split("").map((char) => {
          const span = document.createElement("span");
          span.innerText = char;
          return span;
        });

        element.innerHTML = "";
        characters.forEach((span) => element.appendChild(span));
        return characters;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: "top bottom",
          end: "top 25%",
          scrub: true,
        },
      });

      const h2 = subheadingRef.current.querySelector("h2");
      const h2Chars = splitText(h2);
      tl.fromTo(
        h2Chars,
        { opacity: 0.05 },
        {
          opacity: 1,
          stagger: {
            each: 0.05,
          },
        }
      );

      const h6 = subheadingRef.current.querySelector("h6");
      const h6Chars = splitText(h6);
      tl.fromTo(
        h6Chars,
        { opacity: 0.05 },
        {
          opacity: 1,
          stagger: {
            each: 0.05,
          },
        },
        "+=0.25"
      );
    }, [sectionRef, headingRef, subheadingRef]);

    return () => ctx.revert();
  }, []);

  const handleFilter = (skill) => {
    // setIsLoading(true);
    // const filtered = projectsData.filter(project => project.skills.includes(skill));
    // setFilteredProjects(filtered);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 4720);
    console.log(skill);
  };

  return (
    <section ref={forwardedRef} id="works" className="nav-change my-[10%]">
      <Heading title="Projects" />

      <ul
        ref={sectionRef}
        className={`relative flex ${
          isLoading ? "h-full" : "h-[calc(700vh-240px)]"
        } w-full flex-col items-center justify-center px-5 pb-[6rem]`}
      >
        <div className="sticky top-4 flex h-screen w-full flex-grow flex-col items-center justify-start gap-8 pt-[20vh] text-secondary-400">
          <ul className="bord absolute right-0 top-0 flex h-10 w-40 cursor-pointer items-center justify-between">
            {["Front", "Back", "Mobile"].map((el) => (
              <li key={el} onClick={() => handleFilter(el)}>
                {el.toUpperCase()}
              </li>
            ))}
          </ul>

          <h1 ref={headingRef} className="text-3xl font-bold">
            My Projects Catalogue
          </h1>

          <div ref={subheadingRef} className="mb-16 text-3xl font-extrabold">
            <h2 className="mb-10">
              Here are some of the projects that made my experience...
            </h2>
            <h6 className="text-right text-sm font-semibold">
              ...and i also made them
            </h6>
          </div>

          {isLoading && <L0daer />}
        </div>

        {!isLoading && (
          <>
            <div
              ref={scrollerRef}
              className="-z-10 block h-[75vh] w-full"
            ></div>

            {filteredProjects.map((project, index) => (
              <Project key={project.title} project={project} index={index} />
            ))}

            <li key="end" className="sticky top-14 h-[25vh] w-0"></li>
          </>
        )}
      </ul>
    </section>
  );
}

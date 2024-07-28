import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundedButton from "./RoundedButton";

export default function NavBar({ sectionRefs, setNavIsOpen, navIsOpen }) {
  const navBar = useRef(null);
  const cta = useRef(null);
  const button = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 5,
      ease: "power4.inOut",
    });
  });

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        animation: gsap
          .timeline()
          .to(
            ":root",
            {
              "--thumb-color": "#F2F2F2",
              "--track-color": "#0E0E0C",
            },
            0
          )
          .to(navBar.current, { color: "#DDDDD5" })
          .to(button.current, { backgroundColor: "none", color: "none" }, 0)
          .to(".menu", { backgroundColor: "#D1D1C7" }, 0)
          .to(".logo", { color: "#DDDDD5" }, 0)
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });
  });

  return (
    <header
      ref={navBar}
      className="navbar fixed top-0 z-30 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-2"
    >
      {/* logo placeholder */}
      <div className="h-8 w-20 opacity-0 "></div>

      <nav className="hidden items-center justify-center gap-7 font-grotesk text-body-3 sm:flex">
        {["About", "Services", "Projects"].map((el, i) => (
          <a
            key={i}
            href={`#${el.toLowerCase()}`}
            className="group relative  transform font-semibold transition-transform duration-300 ease-in-out hover:scale-125 hover:font-extrabold"
          >
            <span>{el}</span>
            <span className="absolute bottom-0 left-1/2 h-[0.125em] w-[0.125em] -translate-x-1/2 transform rounded-full bg-secondary-700 font-extrabold duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      <RoundedButton style="hidden md:flex" backgroundColor="#666666">
        <a
          ref={cta}
          className="button relative hover:bg-transparent hover:text-secondary-100"
          href="#contact"
        >
          <span className="relative z-10 w-fit font-bold transition-colors">
            Let&apos;s Talk.
          </span>
        </a>
      </RoundedButton>
      <button
        ref={button}
        className="z-40 flex h-10 w-10 flex-col items-center justify-center gap-[4px] bg-transparent md:hidden"
        onClick={() => {
          setNavIsOpen((isOpen) => !isOpen);
        }}
      >
        <div
          className={`menu h-[6px] w-full origin-center rounded-lg bg-accent-400 transition-transform ${
            navIsOpen ? "translate-y-[10px] rotate-45 transform" : ""
          }`}
        ></div>
        <div
          className={`menu ml-2 h-[6px] w-full rounded-lg bg-accent-400 transition-opacity ${
            navIsOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`menu h-[6px] w-full origin-center rounded-lg bg-accent-400 transition-transform ${
            navIsOpen ? "-translate-y-[10px] -rotate-45 transform" : ""
          }`}
        ></div>
      </button>
    </header>
  );
}

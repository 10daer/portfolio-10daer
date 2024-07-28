import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { text } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const createWords = (text) => {
  return text.split(" ").map((word, i) => (
    <span
      className="word mr-5 flex items-center justify-center text-5xl leading-[1.125] tracking-[0.0625em] md:text-[7.6vw] md:leading-[0.95]"
      key={i}
    >
      {word.split("").map((char, j) => (
        <span className="character font-outline-1 " key={j}>
          {char}
        </span>
      ))}
    </span>
  ));
};

export default function Role({ forwardedRef }) {
  const textRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const characters = gsap.utils.toArray(".character", textRef.current);

    gsap.set(characters, { opacity: 0.2, color: "transparent" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 90px",
        end: "bottom 65%+=100px",
        scrub: true,
      },
    });

    characters.forEach((character) => {
      timeline.to(character, {
        opacity: 1,
        webkitTextStroke: "none",
        color: "white",
        stagger: 0,
        ease: "none",
      });
    });
  }, []);

  return (
    <section
      ref={forwardedRef}
      id="about"
      className="nav-change my-20 flex w-full select-none flex-col items-start justify-center py-10 md:my-[22%]"
      aria-label="role"
    >
      <h1
        ref={textRef}
        className="sticky top-24 flex h-fit w-full max-w-[100vw] flex-wrap items-center justify-center font-black text-secondary-400 text-transparent will-change-transform md:top-16 md:px-6"
      >
        {createWords(text)}
      </h1>
      <div ref={targetRef} className="sticky left-0 top-0 h-[200vh]"></div>
    </section>
  );
}

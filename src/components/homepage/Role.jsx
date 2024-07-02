// export default function Role({forwardedRef}) {
//   return (
//     <section ref={forwardedRef} id="about" className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
//       <div className="flex w-full items-center space-x-20">
//         <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
//         I create elevating digital experiences that inspire and connect with people through development and design.
//         </h1>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { text } from "../../data";

gsap.registerPlugin(ScrollTrigger);

const createWords = (text) => {
  return text.split(" ").map((word, i) => (
    <span className="word inline-block " key={i}>
      {word.split("").map((char, j) => (
        <span
          className="character font-outline-1 mr-[2px] inline-block text-heading-4"
          key={j}
        >
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
      className="nav-change my-20 flex w-full select-none flex-col items-start justify-center  py-10 md:my-[22%]"
      aria-label="role"
    >
      <h1
        ref={textRef}
        className="sticky top-24 flex h-[95vh] w-fit max-w-[100vw] flex-wrap gap-6  text-heading-1 font-black  leading-[1.25em] text-secondary-400 text-transparent md:text-heading-1 md:leading-[1.08em]"
      >
        {createWords(text)}
      </h1>
      <div ref={targetRef} className="sticky left-0 top-0 h-[200vh]"></div>
    </section>
  );
}

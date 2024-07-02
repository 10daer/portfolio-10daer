import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import heroImg from "/src/assets/images/heroimg.webp";
import Logo from "../ui/Logo";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const img = useRef(null);
  const imgContainer = useRef(null);
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const titles = useRef([]);
  const scrollLine = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    if (index < words.length - 1) {
      setTimeout(
        () => {
          setIndex(index + 1);
        },
        index === 0 ? 1000 : 300
      );
    } else {
      setIsLoaded(true);
    }
    const pieces = gsap.utils.toArray(".preloader-piece");
    const tl = gsap.timeline();

    isLoaded &&
      tl
        .to(".greeting", {
          opacity: 0,
          duration: 0.5,
        })
        .fromTo(
          logoRef.current,
          {
            opacity: 0,
            scale: 0.5,
          },
          { color: "#DDDDD5", opacity: 1, scale: 1.5, duration: 0.75 }
        )
        .to(logoRef.current, {
          position: "fixed",
          top: 18,
          left: 20,
          scale: 1,
          delay: 0.75,
          duration: 1,
        })
        .to(logoRef.current, { color: "#0E0E0C", duration: 0 })
        .fromTo(
          pieces,
          { x: 0 },
          {
            x: "100%",
            duration: 1.3,
            stagger: {
              each: 0.2,
              ease: "power1.out",
            },
            onComplete: () => {
              if (preloaderRef.current) {
                preloaderRef.current.remove();
              }
            },
          }
        )
        .from(imgContainer.current, {
          scale: 1.3,
          duration: 0.75,
          ease: "power3.inOut",
        })
        .from(
          img.current,
          { scale: 2, duration: 1.8, ease: "power4.inOut" },
          "-=1.1"
        )
        .to(
          titles.current,
          { y: 0, duration: 1.5, ease: "power4.inOut" },
          "-=1.5"
        )
        .from(scroll.current, { opacity: 0, duration: 1, ease: "out" }, "-=2");
  }, [index, isLoaded]);

  return (
    <>
      {/* Preloader */}
      <div
        ref={preloaderRef}
        className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center"
      >
        {[...Array(5)].map((_, i) =>
          i === 2 ? (
            <div
              key={i}
              className="preloader-piece relative flex h-full w-full items-center justify-center whitespace-nowrap bg-accent-400 text-heading-3 font-bold text-secondary-100"
            >
              <span className="greeting"> {words[index]}</span>
            </div>
          ) : (
            <div
              key={i}
              className="preloader-piece relative h-full w-full bg-accent-400"
            ></div>
          )
        )}

        <div
          ref={logoRef}
          className="logo absolute flex items-center justify-center opacity-0"
        >
          <a href="#hero" aria-label="Logo" className="">
            <Logo />
          </a>
        </div>
      </div>
      <section
        id="hero"
        className="hero relative flex h-screen w-full select-none items-center justify-center md:pt-20"
        aria-label="hero"
      >
        <div className="z-10 flex w-full  flex-col items-center text-title font-bold uppercase text-accent-300  2xl:space-y-16 2xl:text-[10vw]">
          <div className="title 2xl:py-16">
            <h1
              ref={(el) => (titles.current[0] = el)}
              className="translate-y-96 overflow-visible"
            >
              Hey, I&apos;m 10daer
            </h1>
          </div>
          <div className=" title 2xl:py-16">
            <h1
              ref={(el) => (titles.current[1] = el)}
              className="font-outline-3 md:font-outline-4 translate-y-96 overflow-visible text-transparent"
            >
              Hey, I&apos;m 10daer
            </h1>
          </div>
          <div className=" title 2xl:py-16">
            <h1
              ref={(el) => (titles.current[2] = el)}
              className="translate-y-96"
            >
              Hey, I&apos;m 10daer
            </h1>
          </div>
        </div>
        <div
          ref={imgContainer}
          className="absolute mx-auto  w-[55%] overflow-hidden rounded-md"
        >
          <img
            ref={img}
            className=" aspect-[11/16] h-auto w-full scale-110 rounded-md opacity-50 sm:aspect-[5/6] md:aspect-[7/7] lg:aspect-[11/9]"
            src={heroImg}
            alt="Abstract cubic background image."
          />
        </div>
        <div
          ref={scroll}
          className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8 text-accent-400"
        >
          <span className=" rotate-90 text-xl">Scroll</span>
          <div className="relative h-1 w-10 rotate-90 overflow-hidden">
            <span
              ref={scrollLine}
              className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
            ></span>
          </div>
        </div>
      </section>
    </>
  );
}

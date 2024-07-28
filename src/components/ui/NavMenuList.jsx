import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const links = [
  {},
  {},
  { url: "#projects", title: "Projects" },
  { url: "#about", title: "About" },
  { url: "#contact", title: "Contact" },
  {},
  {},
];

function NavMenuList({ navIsOpen, setNavIsOpen }) {
  const menuRef = useRef([]);
  const color = useRef(null);

  const handleClick = (url) => {
    const target = document.querySelector(url);
    if (target) {
      setNavIsOpen(false);
      gsap.to(window, {
        scrollTo: {
          y: target,
          autoKill: false,
        },
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    if (navIsOpen) {
      color.current = document.querySelector(".navbar");
      gsap
        .timeline()
        .to(".navbar", { background: "transparent" })
        .fromTo(
          menuRef.current,
          { left: "-100vw" },
          {
            left: "0",
            duration: 0.3,
            delay: 0.05,
            ease: "power1.out",
            stagger: 0.05,
          },
          0
        )
        .to(".backlay", { backgroundColor: "#0E0E0C", zIndex: 10 }, 0)
        .to(".logo", { color: "#DDDDD5" }, 0)
        .to(".menu", { backgroundColor: "#D1D1C7" }, 0);
    } else {
      gsap
        .timeline()
        .to(".backlay", { background: "none", duration: 0.4, zIndex: -1 }, 0)
        .to(
          menuRef.current,
          {
            left: "100vw",
            duration: 0.3,
            delay: 0.05,
            ease: "power1.in",
            stagger: 0.05,
          },
          0
        )
        .to(".navbar", { background: "transparent" })
        .to(".logo", { color: "#0E0E0C" }, 0)
        .to(".menu", { backgroundColor: "#0E0E0C" }, 0);
    }
  }, [navIsOpen]);

  return (
    <ul className="backlay fixed left-0  top-0 z-30 flex h-screen w-screen flex-col gap-0 font-semibold text-white md:hidden">
      {links.map((link, i) =>
        i === links.length - 1 ? (
          <li
            ref={(el) => (menuRef.current[i] = el)}
            className="relative flex h-auto w-full items-end justify-evenly gap-8 bg-accent-400 p-8 text-base"
            key={i}
          >
            <a href="">
              <Icon icon="fa6-brands:square-upwork" />
            </a>
            <a href="www.twitter.com/10daer">
              <Icon icon="pajamas:twitter" />
            </a>
            <a href="www.github.com/10daer">
              <Icon icon="skill-icons:github-light" />
            </a>
            <a href="www.linkedin.com/in/10daer">
              <Icon icon="pajamas:linkedin" />
            </a>
          </li>
        ) : (
          <li
            ref={(el) => (menuRef.current[i] = el)}
            className="relative grid h-full w-full place-content-center bg-accent-400 text-5xl"
            key={i}
          >
            <a onClick={() => handleClick("link?.url")} href={link?.url}>
              {link?.title}
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export default NavMenuList;

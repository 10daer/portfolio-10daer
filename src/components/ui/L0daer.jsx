import { useEffect, useRef } from "react";
import gsap from "gsap";

const L0daer = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const ten = logo.querySelector(".ten");
    const bulb = logo.querySelector(".bulb");
    const daer = logo.querySelector(".daer");

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    tl.fromTo(
      [ten, daer],
      { opacity: 1 },
      {
        opacity: 0.125,
        duration: 0.68,
        ease: "power1.out",
        onStart: () => {
          gsap.to(bulb, { opacity: 0.75, duration: 0.68, ease: "power1.out" });
        },
      }
    ).to([ten, daer], {
      opacity: 1,
      duration: 0.5,
      ease: "power1.out",
      onStart: () => {
        gsap.to(bulb, { opacity: 1, duration: 0.5, ease: "power1.out" });
      },
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={logoRef}
      className="font-domaine text-5xl font-black leading-none"
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      <span className="ten">1</span>
      <img
        src="/bulb.gif"
        style={{ opacity: 0.25 }}
        className="bulb h-10 w-[44px]"
      />
      <span className="daer">daer</span>
    </div>
  );
};

export default L0daer;

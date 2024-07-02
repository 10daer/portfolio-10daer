import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

export default function ServiceUi({ title, description, items }) {
  const serviceUi = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);
  const services = useRef(null);
  const line = useRef(null);
  const line1 = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: serviceUi.current,
      start: "150px bottom",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        )
        .to(
          line.current,
          { width: "100%", ease: "power4.inOut", duration: 1.5 },
          0.2
        )
        .to(
          line1.current,
          { width: "100%", ease: "power4.inOut", duration: 1.5 },
          0.2
        )
        .to(
          services.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.5
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [serviceUi]);

  return (
    <>
      <div
        ref={line1}
        className="mt-2 hidden h-1 w-0 bg-accent-100 opacity-50 md:block"
      />
      <div
        ref={serviceUi}
        className=" mt-8 grid grid-cols-1 gap-5 md:mt-4 md:grid-cols-2 md:gap-24"
      >
        <div className="space-y-6">
          <div className="space-y-3 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 font-semibold leading-tight  opacity-0 2xl:text-7xl"
            >
              {title}
            </h3>
            <p
              ref={body}
              className="max-w-md translate-y-10 text-body-1 opacity-0  xl:max-w-2xl 2xl:text-3xl"
            >
              {description}
            </p>
          </div>
          <div
            ref={line}
            className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
          ></div>
        </div>

        <div
          ref={services}
          className=" translate-y-10 select-none leading-[2.3rem] text-secondary-500 opacity-0  md:leading-[2.5rem] lg:leading-[3.4rem]"
        >
          {items.map((item, index) => {
            return (
              <p
                key={index}
                className="font-general text-special font-extrabold 2xl:text-7xl "
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

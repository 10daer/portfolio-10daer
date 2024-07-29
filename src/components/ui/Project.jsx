import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Project({ project }) {
  const { name, img, alt, link, year, tools } = project;

  return (
    <li className="group sticky top-14 flex h-[calc(100vh-60px)] w-full items-center justify-center rounded-3xl last-of-type:m-0">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img inline-block overflow-hidden rounded-lg duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className=" h-[calc(100vh-60px)] w-screen duration-700 ease-in-out group-hover:scale-110"
          src={`/images/${img}`}
          alt={alt}
        />
      </a>

      <div className="absolute bottom-1 left-2 flex w-1/2 flex-col gap-1 opacity-40 duration-700 ease-in-out group-hover:opacity-100">
        <h3 className="flex w-full items-center justify-start whitespace-nowrap rounded-full border border-secondary-100 bg-accent-400 px-4 py-[2px] text-body-4 font-medium uppercase text-primary-200 md:px-8 md:text-works-title 2xl:text-5xl">
          {name}
        </h3>
        <div className="mb-2 flex space-x-1">
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-accent-400 px-4 py-[2px] text-body-4 text-secondary-600 2xl:text-3xl">
            {year}
          </p>
          <p className="flex items-center justify-center rounded-full border border-secondary-600 bg-accent-400 px-4 py-[2px] text-body-4 text-secondary-600 2xl:text-3xl">
            {tools}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function Projects({ name, img, alt, link, year, tools }) {
  return (
    <div className="group relative">
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-110"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
      </a>
      <div className="group-hover: absolute  bottom-2 left-2 flex w-full flex-col gap-1 opacity-40 duration-700 ease-in-out group-hover:opacity-100">
        <h3 className="flex w-fit max-w-[75%] items-center justify-start rounded-full border border-secondary-100 bg-accent-400 px-4 py-[2px] text-body-4 font-medium uppercase text-primary-200 md:px-8 md:py-1 md:text-works-title 2xl:text-5xl">
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
    </div>
  );
}

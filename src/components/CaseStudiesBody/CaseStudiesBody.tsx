import Heading from "../Heading/Heading";

export const CaseStudiesIntro = () => {
  return (
    <div>
      <Heading text="Things I've made to learn and make the world a little easier to navigate." />
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        The journey of learning to code is a long one with so many bright, shiny
        gems just off the road. These projects represent my journey and each has
        taught me something new and allowed me to collect a few of those 'shiny
        gems' along the way.{" "}
      </p>
    </div>
  );
};

export const CaseStudyContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="mt-16 sm:mt-20">
      <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
        {children}
      </ul>
    </div>
  );
};

export const CaseStudy = ({
  image,
  title,
  description,
  learned,
  link,
  linkName,
}: {
  image?: string;
  title?: string;
  description?: string;
  learned?: string;
  link?: string;
  linkName?: string;
}) => {
  return (
        <li className="relative group flex flex-col items-start">
          <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-700 dark:ring-0">
            <img src={image} alt="" className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
            <div className="absolute -iset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
            <a href={link}>
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2x1"></span>
              <span className="relative z-10">{title}</span>
            </a>
          </h2>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
          <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {learned}
          </p>
          <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-800 transition group-hover:text-teal-500 dark:text-zinc-200 dark:group-hover:text-teal-500">
            <svg
              viewBox="0 -960 960 960"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 transition group-hover:fill-zinc-600 dark:group-hover:fill-zinc-300"
            >
              <path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z" />
            </svg>
            <span className="ml-4">{linkName}</span>
          </p>
        </li>
  );
};

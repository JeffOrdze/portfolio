import {Heading} from "../Heading/Heading";
import stars from "../../assets/images/stars.jpeg"
export const AboutGrid = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gay-y-12">
      {children}
    </div>
  );
};

export const AboutMe = () => {
  return (
    <div className="lg:order-first lg:row-span-2 ">
      <Heading text="I'm Jeff Ordze. I live in Calgary, AB, where I bring ideas to life." />
      <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
        <p>I grew up in a small town and, in a small consumer electronics business that I ran with my dad. Dad was always interested in cars but I was captivated with computers. What can we do with them? How could they make life better?</p>
        <p>The mid 2010's is when I became truly enamored with home automation. I could take all of the technology in the house, put it in a single location, make everything beautiful, and control that from a computer? We had some in the shop so I started experimenting with it and that's when I caught the itch. </p>
        <p>For the next several years, I delved deeper, taking on more and more projects. I was able to take this on mostly by myself, but there was always something about it that didn't quite satisfy the curiosity. I could do cool things, I felt like a wizard sometimes, but why did it work? How did this computer controller talk to the systems? How did it all work? That itch is what has brought me to software engineering and it's that curiosity that keeps me going. </p>
        <p>Today, as I navigate the vast seas of software engineering, I often reflect on my humble beginnings in that small-town electronics shop. Each line of code I write is a testament to the boy who once marveled at the power of computers and the potential they held. While the tools and technology have evolved, my mission remains the same: harnessing technology to enhance lives, driven by an insatiable curiosity and a commitment to innovation.</p>
      </div>
    </div>
  );
};

export const AboutPhoto = () => {
  return (
    <div className="lg:pl-20">
      <div className="px-2.5 lg:max-w-none max-w-xs">
        <img
          width={800}
          height={800}
          className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          src={stars}
          alt="Night sky with mountains in the foreground"
        />
      </div>
    </div>
  );
};

export const AboutSocials = () => {
  return (
    <div className="lg:pl-20">
      <ul>
        <li className="flex">
          <a
            href="https://github.com/JeffOrdze"
            aria-label="Follow on Github"
            className="flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            target="_blank"          
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 transition group-hover:fill-zinc-600 dark:group-hover:fill-zinc-300"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span className="ml-4">Follow on GitHub</span>
          </a>
        </li>
        <li className="flex mt-4">
          <a
            href="https://www.linkedin.com/in/jeff-ordze/"
            aria-label="Follow on LinkedIn"
            className="flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            target="_blank"          
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 transition group-hover:fill-zinc-600 dark:group-hover:fill-zinc-300"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="ml-4">Follow on LinkedIn</span>
          </a>
        </li>
        <li className="flex mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-700/40">
          <a
            href="mailto:jeff.ordze@gmail.com"
            aria-label="Follow on LinkedIn"
            className="flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
          >
            <svg
              viewBox="0 -960 960 960"
              aria-hidden="true"
              className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400 transition group-hover:fill-zinc-500 dark:group-hover:fill-zinc-300"
            >
              <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
            </svg>
            <span className="ml-4">jeff.ordze@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

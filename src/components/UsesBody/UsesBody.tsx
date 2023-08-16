import MaxWContainer from "../../components/MaxWContainer/MaxWContainer";
import { Heading, HeadingP } from "../../components/Heading/Heading";

export const UsesIntro = () => {
  return (
    <MaxWContainer>
      <Heading text="Software I use, tech I love, and other things in my setup that make me feel cool." />
      <HeadingP text="A craftsman is only as good as his tools. Or that's what I keep telling myself to justify my purchases. Here's a big list of all of my favourite things." />
    </MaxWContainer>
  );
};

export const UsesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="space-y-20">{children}</div>
    </div>
  );
};

export const UsesSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      {children}
    </section>
  );
};

export const UsesColumn = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
      <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      <ul className="space-y-16 md:col-span-3">{children}</ul>
    </div>
  );
};

export const UsesListItem = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <li className="group flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mt-2 relative z-10 text-sm text-zinc-600 dark:text-zinc-400">{text}</p>
    </li>
  );
};

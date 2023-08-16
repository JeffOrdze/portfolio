export const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="text-3xl sm:text-5xl text-zinc-800 dark:text-zinc-50 font-bold tracking-tight ">
      {text}
    </h1>
  );
};

export const HeadingP = ({ text }: { text: string }) => {
  return (
    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{text}</p>
  );
};

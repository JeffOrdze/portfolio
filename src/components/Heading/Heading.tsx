const Heading = ({text}: {text:string}) => {
  return (
    <h1 className="text-4xl sm:text-5xl text-zinc-800 dark:text-zinc-50 font-bold tracking-tight ">
      {text}
    </h1>
  );
};

export default Heading;

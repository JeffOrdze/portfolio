export const CodeBlock = ({ children }: { children?: React.ReactNode }) => {
  return (
    <code className="text-zinc-800 dark:text-zinc-50 w-full break-words">
      <span className="text-blue-700 dark:text-fuchsia-400">
        CONST <span className="text-teal-600 dark:text-violet-600">JEFF</span> =
        &#123;{" "}
      </span>
      {children}
      <span className="text-blue-700 dark:text-fuchsia-400">&#125;</span>
    </code>
  );
};

export const CodeIndentation = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <div className="ml-4">{children}</div>;
};

export const Array = ({ text }: { text: Array<string> }) => {
  console.log();
  return (
    <>
      <span className="text-teal-500  dark:text-blue-400">[</span>
      {text.map((item: string, index: number) => (
        <span key={index} className="text-red-800 dark:text-yellow-300">
          {index === text.length - 1 ? `"${item}"` : `"${item}",`}
        </span>
      ))}
      <span className="text-teal-500  dark:text-blue-400">]</span>
    </>
  );
};

export const Type = ({
  category,
  children,
  className,
}: {
  category: string;
  children?: React.ReactNode;
  className?: string
}) => {
  return (
    <div className={className}>
      {category}: {children},
    </div>
  );
};

export const String = ({ text }: { text: string }) => {
  return <span className="text-red-800 dark:text-yellow-300">"{text}"</span>;
};

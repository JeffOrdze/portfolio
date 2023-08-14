interface Props {
  children?: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className="flex flex-col flex-auto mt-16 sm:mt-32 px-4 sm:px-8 lrg:px-12">{children}</main>;
};

export default Main;

interface Props {
  children?: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className="flex lg:max-w-5xl lg:mx-auto w-full flex-col flex-auto mt-16 sm:mt-32 px-4 sm:px-8 lg:px-12">{children}</main>;
};

export default Main;

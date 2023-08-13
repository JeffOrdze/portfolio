interface Props {
  children?: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className="mt-16 sm:mt-32 sm:px-8">{children}</main>;
};

export default Main;

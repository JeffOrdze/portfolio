import LayoutHelper from "../LayoutHelper/LayoutHelper";

export const Main = ({children}: {children:React.ReactNode}) => {
  return (
    <main className="flex-auto">
     <LayoutHelper>
      {children}
     </LayoutHelper>
    </main>
  );
};

export default Main;

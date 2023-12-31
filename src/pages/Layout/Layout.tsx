import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Layout = () => {
  return (
    <div className="flex w-full h-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative flex w-full flex-col h-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

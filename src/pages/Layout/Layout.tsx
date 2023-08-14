import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto bg-white dark:bg-zinc-900 border-x border-zinc-100 dark:border-zinc-800">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Error = () => {
  return (
    <div className="flex w-full h-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main className="flex-auto flex justify-center items-center">
          <div className="sm:px-8">
            <div className="flex flex-col mt items-center text-zinc-400 dark:text-zinc-600">
              <p className="text-base">404</p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
                Page not found
              </h1>
              <p className="mt-4 text-base">
                Sorry, we couldn't find the page you're looking for
              </p>
              <Link
                to="/"
                className="mt-4 p-2 text-base text-zinc-900 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md transition "
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Error;

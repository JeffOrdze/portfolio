import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 flex-none">
      <div className="px-8">
        <div className="mx-auto max-w-7xl w-full lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="px-4 sm:px-8 lg:px-12">
              <div className="max-w-2xl lg:max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <nav>
                    <ul className="flex justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      <li>
                        <Link
                          to="/about"
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/case-studies"
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/uses"
                          className="transition hover:text-teal-500 dark:hover:text-teal-400"
                        >
                          Uses
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="text-sm text-zinc-400 dark:text-zinc-500">
                    <p>&copy; Jeff Ordze. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

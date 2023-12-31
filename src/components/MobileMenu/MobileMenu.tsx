import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const MobileMenu = () => {
  return (
    <Popover className={"flex flex-1 justify-end md:hidden"}>
      {({ close }) => (
        <>
          <Popover.Button
            className={
              "flex items-center gap-1 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            }
          >
            Menu
            <ChevronDownIcon className="ui-open:rotate-180 ui-open:transform h-2 w-2" />
          </Popover.Button>
          <Transition
            enter="transition-opacity duration-0"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay
              className={
                "fixed z-40 inset-0 bg-zinc-800/40 dark:bg-black dark:opacity-80 opacity-100"
              }
            />
            <Popover.Panel
              className={
                "fixed z-50 origin-top flex flex-col rounded-3xl align-center top-8 opacity-100 inset-x-4 p-8 ring-1 ring-zinc-900/5 dark:ring-zinc-800 bg-white dark:bg-zinc-900 "
              }
            >
              <div>
                <h2 className="text-zinc-900 dark:text-zinc-500 text-sm font-medium">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:text-zinc-300">
                  <li>
                    <Link to="/about" className="block py-2" onClick={close}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/case-studies"
                      className="block py-2"
                      onClick={close}
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link to="/uses" className="block py-2" onClick={close}>
                      Uses
                    </Link>
                  </li>
                </ul>
              </nav>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default MobileMenu;

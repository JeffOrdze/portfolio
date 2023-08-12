import { useContext } from "react";
import { ThemeContext } from "../../contexts";1
import { ThemeContextInterface } from "../../types";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
const ThemeToggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext) as ThemeContextInterface
  return (
    <div className="flex justify-end md:flex-1">
      <button
        onClick={toggleTheme}
        className="rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5  dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      >
        {darkTheme ? (
          <MoonIcon className="h-5 w-5 fill-zinc-600 stroke-zinc-500" />
        ) : (
          <SunIcon className="h-5 w-5 fill-teal-50 stroke-teal-500" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

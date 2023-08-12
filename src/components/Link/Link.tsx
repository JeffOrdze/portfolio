import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  to: string;
  pathname: string
}

const Link: React.FC<Props> = ({ text, to, pathname }) => {
 const [activePath, setActivePath] = useState(false);
 
  useEffect(() => {
    if (pathname === to) {
      setActivePath(true);
    }else { 
      setActivePath(false)
    }
  }, [pathname, to]);

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-teal-500 block relative px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            : "block px-3 py-2 transition relative hover:text-teal-500 dark:hover:text-teal-400"
        }
      >
        {text}
       { activePath 
        ? <span className="absolute inset-x-1 -bottom-1 h-1 w-full bg-gradient-to-r from teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
        : ""
       } 
      </NavLink>
    </li>
  );
};

export default Link;

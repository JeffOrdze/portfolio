import {useLocation} from 'react-router-dom';
import Link from "../Link/Link";

const Navbar = () => {
    const location = useLocation()
    const pathname = location.pathname
  return (
    <nav className="hidden md:block pointer-events-auto">
      <ul className="flex rounded-full leading-6 bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
          <Link text="About" to="/about" pathname={pathname}/>
          <Link text="Case Studies" to="/case-studies" pathname={pathname} />
          <Link text="Uses" to="/uses" pathname={pathname}/>
      </ul>
    </nav>
  );
};

export default Navbar;

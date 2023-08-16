import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className="lg:max-w-5xl mx-auto w-full">
        <div className="relative flex flex-none h-16 gap-4 pt-6 px-4 sm:px-8 lg:px-12">
          <ProfileIcon />
          <Navbar />
          <MobileMenu />
          <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;

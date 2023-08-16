import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header className="sm:px-8 h-16 pt-6">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl flex gap-4">
            <ProfileIcon />
            <Navbar />
            <MobileMenu />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

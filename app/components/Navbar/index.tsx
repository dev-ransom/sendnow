import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

const Navbar = () => {
  return (
    <nav className="flex">
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;

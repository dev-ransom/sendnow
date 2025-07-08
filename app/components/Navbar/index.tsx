'use client'
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <nav className="flex">
        <DesktopNav />
        <MobileNav />
      </nav>
    </motion.div>
  );
};

export default Navbar;

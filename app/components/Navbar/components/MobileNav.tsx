"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const handleOpenFn = () => {
    setIsMenuOpen(true);
  };

  const handleCloseFn = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const minimalRoutes = ["/auth/login", "/auth/signup", "/auth/verify-email"];

  const isMinimalRoute = minimalRoutes.some((route) =>
    pathname.startsWith(route)
  );


  return (
    <div className="lg:hidden fixed top-0 h-[89px] left-0 right-0 z-10 bg-white shadow-sm">
      <div className="flex px-[8%] pt-7 w-full justify-between items-center">
        <Link href="/" className="w-[120px] h-[59px]">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-full w-full object-contain"
            priority
          />
        </Link>
        {!isMinimalRoute && (
        <Image
          src="/images/menu.png"
          alt="menu"
          width={100}
          height={100}
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={handleOpenFn}
        />
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-white"
          >
            <div className="absolute top-[89px] left-0 right-0 bottom-0 overflow-auto">
              <div className="flex px-[4%]">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <IoCloseOutline
                    onClick={handleCloseFn}
                    className="w-[44px] h-[30px] object-contain cursor-pointer"
                    size={40}
                  />
                </motion.div>
              </div>

              <nav className="gap-3 flex flex-col justify-center items-center w-full pt-[40px] px-3">
                {navLinks.map((route, idx) => (
                  <motion.li
                    key={route.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    className="w-full list-none"
                  >
                    <Link
                      href={route.href}
                      onClick={handleNavLinkClick}
                      className="text-xl font-medium text-center flex justify-center items-center py-2 border border-[#18B1FF] w-full h-[60px] rounded-[5px]"
                    >
                      {route.label}
                    </Link>
                  </motion.li>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;

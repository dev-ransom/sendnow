'use client'
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopNav = () => {
    const pathname = usePathname();
  return (
    <div className="w-full z-10 md:flex gap-4 mt-5 px-[5%] fixed hidden">
      <div className="flex justify-between w-full h-[100px] bg-white items-center px-6 rounded-[30px]">
        {/* Logo/Branding */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-[59px] w-[216px] object-cover"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex pr-[50px] gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-[20px] ${
                  isActive
                    ? "text-[#000000] font-medium hover:font-semibold"
                    : "text-[#000000] hover:font-semibold px-[20px]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNav;

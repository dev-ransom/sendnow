"use client";
import { useState } from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ActionButton } from "../Button/ActionButton";
import { footerLinks } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";

const NewsletterFooter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log("Submitted email:", email);
  };

  return (
    <footer className="pb-5 w-full">
      <div className="bg-[#171717] text-white py-12 md:px-4 sm:px-6 lg:px-8 rounded-4xl">
        <div className="md:px-8 px-4 md:pt-12 pt-0">
          {/* Newsletter Section */}
          <div className="flex justify-between md:flex-row flex-col md:gap-12 gap-3 mb-6">
            <div className="flex-1">
              <h3 className="md:text-6xl text-3xl font-medium mb-4">
                Keep up with the latest
              </h3>
              <p className="text-[#9E9E9E] md:mb-6">
                Join our newsletter to stay upto date on features and releases.
              </p>
            </div>

            <div className="flex-1">
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-base font-medium mb-2"
                  >
                    Stay upto date
                  </label>
                  <div className="relative flex gap-3 items-center pl-2">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-6  h-full placeholder:text-white md:max-w-[300px] bg-[#FFFFFF1A] rounded-[50px] focus:border-transparent"
                      required
                    />
                    <ActionButton
                      variant="primary"
                      className="w-[230px] h-[65px] cursor-pointer"
                    >
                      Download
                    </ActionButton>
                  </div>
                </div>
                <p className="text-xs text-[#98A2B3]">
                  By allowing you agree to our{" "}
                  <a href="" className="text-white">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </div>
          {/* Main Footer Content */}
          <div className="flex gap-8 justify-between w-full mb-12">
            <div className="flex-1/7">
              <Link href="/">
                <Image
                  src="/images/footerLogo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="h-[59px] w-[216px] object-cover"
                />
              </Link>
              <p className="text-[#9E9E9E] text-base">
                Make your complicated finance <br />
                more simple
              </p>
            </div>
            {footerLinks.map((link) => (
              <div className="flex-1 lg:flex hidden flex-col" key={link.title}>
                <h4 className="font-bold mb-4">{link.title}</h4>
                <ul className="space-y-2">
                  {link.links.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-[#9E9E9E] hover:text-[#18B1FF]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
        </div>
      </div>
      <div className="flex justify-between w-full items-center pt-5">
        <div>
          <p className="text-sm text-[#000000] text-center md:text-left">
            ©2025 SendNow. All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <div className="flex space-x-4 mb-6 items-center">
            <a
              href="#"
              className="text-[#000] hover:text-white duration-300 transition-ease-in-out h-8 w-8 rounded-full bg-[#18B1FF] flex justify-center items-center"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-[#000000] hover:text-white duration-300 transition-ease-in-out h-8 w-8 rounded-full bg-[#18B1FF] flex justify-center items-center"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-[#000000]  hover:text-white duration-300 transition-ease-in-out h-8 w-8 rounded-full bg-[#18B1FF] flex justify-center items-center"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-[#000000] hover:text-white duration-300 transition-ease-in-out h-8 w-8 rounded-full bg-[#18B1FF] flex justify-center items-center"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;

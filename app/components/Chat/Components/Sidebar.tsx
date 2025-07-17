"use client";
import { bottomSideBarItem, ChatSideBarItem } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("chats");
  const handleClick = (id: string) => {
    setActiveItem(id);
  };
  console.log(activeItem, "checking something");
  return (
    <section
      className={`sticky lg:fixed flex items-center lg:items-start lg:justify-start h-[7vh] lg:h-[450px] lg:w-[45px] w-full py-8 lg:py-0 bg-transparent`}
    >
      <main className="flex lg:flex-col justify-between items-center lg:px-0 lg:gap-10 w-full h-full">
        <div className="flex lg:flex-col items-center h-full justify-between">
          <ul className="flex lg:flex-col flex-row items-center gap-7 md:gap-2 px-2 md:px-0">
            {ChatSideBarItem.map((item) => (
              <div
                className="w-full relative cursor-pointer"
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {activeItem === item.id && (
                  <div className="absolute left-0 top-[10px] bottom-0 w-1 h-6 rounded-lg bg-[#18B1FF]" />
                )}

                <li
                  className={` ${
                    activeItem === item.id
                      ? "bg-[#18b2ff13]"
                      : "hover:bg-[#18b2ff22]"
                  } transition-all duration-300 rounded-lg w-[45px] h-[45px] flex justify-center items-center $`}
                >
                  <button className="size-6 cursor-pointer">
                    <Image
                      src={item.icon}
                      alt="testing"
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  </button>
                </li>
              </div>
            ))}
          </ul>
          <ul className="flex lg:flex-col flex-row items-center gap-7 md:gap-2 px-2 md:px-0">
            {bottomSideBarItem.map((item) => (
              <div
                className="w-full relative cursor-pointer transition duration-700"
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {activeItem === item.id && (
                  <div className="absolute left-0 top-[10px] bottom-0 w-1 h-6 rounded-lg bg-[#18B1FF]" />
                )}

                <li
                  className={`${
                    activeItem === item.id
                      ? "bg-[#18b2ff13]"
                      : "hover:bg-[#18b2ff22]"
                  } transition-all duration-300 rounded-lg w-[45px] h-[45px] flex justify-center items-center $`}
                >
                  <button className="size-6 cursor-pointer">
                    <Image
                      src={item.icon}
                      alt="testing"
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  </button>
                </li>
              </div>
            ))}
            <li className="flex flex-col items-center gap-4">
              <Image
                src="/images/divider.png"
                alt="divider"
                width={100}
                height={100}
                className="w-8"
              />
              <Image
                src="/images/solomon.jpg"
                alt=""
                width={100}
                height={100}
                className="rounded-full size-8 object-cover cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};
